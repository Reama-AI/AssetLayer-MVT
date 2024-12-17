import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export function FileUploader({ onFileUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
    accept: {
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  return (
    <motion.div
      {...getRootProps()}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}
      `}
    >
      <input {...getInputProps()} />
      <AnimatePresence mode="wait">
        <motion.div
          key={isDragActive ? 'drag-active' : 'drag-inactive'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isDragActive 
              ? 'Drop the file here...' 
              : 'Drag and drop a file here, or click to select a file'
            }
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: TXT, PDF
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}