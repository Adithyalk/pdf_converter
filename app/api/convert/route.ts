import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'
import mammoth from 'mammoth'
import { Document, Packer, Paragraph, TextRun } from 'docx'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const conversionType = formData.get('conversionType') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const fileName = file.name.split('.')[0]

    if (conversionType === 'pdf-to-docx') {
      // Convert PDF to DOCX
      const docxBuffer = await convertPdfToDocx(buffer)
      
      return new NextResponse(docxBuffer, {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'Content-Disposition': `attachment; filename="${fileName}.docx"`,
        },
      })
    } else if (conversionType === 'docx-to-pdf') {
      // Convert DOCX to PDF
      const pdfBuffer = await convertDocxToPdf(buffer)
      
      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${fileName}.pdf"`,
        },
      })
    }

    return NextResponse.json({ error: 'Invalid conversion type' }, { status: 400 })
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json({ error: 'Conversion failed' }, { status: 500 })
  }
}

async function convertPdfToDocx(pdfBuffer: ArrayBuffer): Promise<Buffer> {
  try {
    // For this demo, we'll create a simple DOCX with a message
    // In a real implementation, you'd use a library like pdf-parse to extract text
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "PDF to DOCX Conversion",
                bold: true,
                size: 32,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "This is a converted PDF document. The original PDF content would be extracted and formatted here.",
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Note: This is a demo conversion. For full PDF text extraction, additional libraries would be needed.",
                size: 20,
                italics: true,
              }),
            ],
          }),
        ],
      }],
    })

    return await Packer.toBuffer(doc)
  } catch (error) {
    console.error('PDF to DOCX conversion error:', error)
    throw error
  }
}

async function convertDocxToPdf(docxBuffer: ArrayBuffer): Promise<Buffer> {
  try {
    // Extract text from DOCX
    const result = await mammoth.extractRawText({ buffer: Buffer.from(docxBuffer) })
    const text = result.value

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595.28, 841.89]) // A4 size
    const { width, height } = page.getSize()

    // Add text to PDF
    const fontSize = 12
    const lines = text.split('\n')
    let yPosition = height - 50

    for (const line of lines) {
      if (yPosition < 50) {
        // Add new page if needed
        const newPage = pdfDoc.addPage([595.28, 841.89])
        yPosition = newPage.getSize().height - 50
      }

      page.drawText(line, {
        x: 50,
        y: yPosition,
        size: fontSize,
        color: { red: 0, green: 0, blue: 0 },
      })

      yPosition -= fontSize + 5
    }

    // Add a header
    page.drawText('DOCX to PDF Conversion', {
      x: 50,
      y: height - 30,
      size: 16,
      color: { red: 0.2, green: 0.4, blue: 0.8 },
    })

    const pdfBytes = await pdfDoc.save()
    return Buffer.from(pdfBytes)
  } catch (error) {
    console.error('DOCX to PDF conversion error:', error)
    throw error
  }
}
