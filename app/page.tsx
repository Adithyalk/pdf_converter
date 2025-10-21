'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { FileText, Download, Upload, Loader2, CheckCircle, AlertCircle, File, ArrowRightLeft } from 'lucide-react'
import toast from 'react-hot-toast'

interface FileWithPreview extends File {
  preview?: string
  id: string
}

export default function Home() {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [conversionType, setConversionType] = useState<'pdf-to-docx' | 'docx-to-pdf'>('pdf-to-docx')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file)
    }))
    
    setFiles(prev => [...prev, ...newFiles])
    toast.success(`${acceptedFiles.length} file(s) added successfully!`)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: true
  })

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId))
  }

  const convertFiles = async () => {
    if (files.length === 0) {
      toast.error('Please select files to convert')
      return
    }

    setIsConverting(true)
    
    try {
      for (const file of files) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('conversionType', conversionType)

        const response = await fetch('/api/convert', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          throw new Error('Conversion failed')
        }

        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${file.name.split('.')[0]}.${conversionType === 'pdf-to-docx' ? 'docx' : 'pdf'}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
      
      toast.success('Files converted successfully!')
      setFiles([])
    } catch (error) {
      toast.error('Conversion failed. Please try again.')
      console.error('Conversion error:', error)
    } finally {
      setIsConverting(false)
    }
  }

  const clearFiles = () => {
    setFiles([])
    toast.success('Files cleared')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">PDF Converter Pro</h1>
                <p className="text-sm text-gray-600">Convert PDF ↔ DOCX seamlessly</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Convert Files with
            <span className="block">Ease & Style</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your PDFs to DOCX and DOCX to PDFs with our lightning-fast converter. 
            Beautiful animations, drag-and-drop interface, and instant downloads.
          </p>
        </motion.div>

        {/* Conversion Type Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-effect rounded-2xl p-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setConversionType('pdf-to-docx')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  conversionType === 'pdf-to-docx'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                PDF → DOCX
              </button>
              <button
                onClick={() => setConversionType('docx-to-pdf')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  conversionType === 'docx-to-pdf'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                DOCX → PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Drop Zone */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'dropzone-active' : ''} transition-all duration-300`}
          >
            <input {...getInputProps()} />
            <motion.div
              animate={isDragActive ? { scale: 1.05 } : { scale: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              <motion.div
                animate={isDragActive ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Upload className="h-16 w-16 text-blue-500" />
              </motion.div>
              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  {isDragActive ? 'Drop files here!' : 'Drag & drop files here'}
                </p>
                <p className="text-gray-500">
                  or click to select {conversionType === 'pdf-to-docx' ? 'PDF' : 'DOCX'} files
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* File List */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Selected Files ({files.length})
                  </h3>
                  <button
                    onClick={clearFiles}
                    className="text-sm text-red-500 hover:text-red-700 font-medium"
                  >
                    Clear All
                  </button>
                </div>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <File className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-800">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {file.size ? (file.size / 1024 / 1024).toFixed(2) : 'Unknown'} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <AlertCircle className="h-5 w-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Convert Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={convertFiles}
            disabled={files.length === 0 || isConverting}
            className={`btn-primary flex items-center space-x-2 ${
              files.length === 0 || isConverting
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            whileHover={files.length > 0 && !isConverting ? { scale: 1.05 } : {}}
            whileTap={files.length > 0 && !isConverting ? { scale: 0.95 } : {}}
          >
            {isConverting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Converting...</span>
              </>
            ) : (
              <>
                <ArrowRightLeft className="h-5 w-5" />
                <span>Convert Files</span>
                <Download className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FileText className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Convert your files in seconds with our optimized processing engine
            </p>
          </div>

          <div className="card text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High Quality</h3>
            <p className="text-gray-600">
              Maintain perfect formatting and quality during conversion
            </p>
          </div>

          <div className="card text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Download className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Download</h3>
            <p className="text-gray-600">
              Get your converted files immediately after processing
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="glass-effect border-t border-white/20 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 PDF Converter Pro. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
