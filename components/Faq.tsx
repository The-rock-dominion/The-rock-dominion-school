'use client'
import React, { useState } from 'react'
import {ChevronDown} from 'lucide-react'
import {motion} from 'framer-motion'



  const faqs = [
    {
      question: "What curriculum does The Rock Dominion Private School offer?",
      answer: "Our school offers a Nigerian-American curriculum, blending local and international learning standards.",
    },
    {
      question: "What extracurricular activities are available?",
      answer:
        "We offer a range of extracurricular activities, including sports, music, arts, STEM clubs, and entrepreneurship programs.",
    },
    {
      question: "Are your teachers qualified?",
      answer:
        "Yes, our teachers are highly qualified and experienced professionals with a passion for teaching and learning.",
    },
    {
      question: "Do you offer boarding facilities?",
      answer: "Yes, we offer safe and comfortable boarding facilities for students.",
    },
    {
      question: "How do I apply for admission?",
      answer: "To apply for admission, please visit our website and fill out the online application form.",
    },
  ]
interface FaqProps{
  id?: string;
}
const Faq = ({id}:FaqProps) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id={id} className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border border-accent rounded-xl overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left bg-accent/5 hover:bg-accent/10 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-xl font-semibold">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 transform transition-transform duration-300 ${
                openFaq === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: openFaq === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-accent/5">
              <p className="text-lg">{faq.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default Faq
