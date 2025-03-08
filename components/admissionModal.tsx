"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-[90%] max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              {/* Close Button - More prominent */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors z-10 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Content - Using regular img tag instead of Next.js Image */}
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/THE%20ROCK%20NEW%20BANNER.JPG-LksAqO6dhV2MFPdQXURD2qcEKHvJy2.jpeg"
                  alt="The Rock Dominion Schools Admission"
                  className="w-full h-auto"
                />
              </div>

              {/* Call to Action */}
              <div className="p-6 bg-primary text-primary-foreground text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="tel:+17575568030"
                    className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default AdmissionModal

