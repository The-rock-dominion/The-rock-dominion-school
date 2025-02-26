import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface PrincipalMessageProps {
  id?: string;
}

const PrincipalMessage = ({ id }: PrincipalMessageProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="principals-message"
      className="relative mb-16 px-4 py-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto" id={id}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <Quote className="w-12 h-12 text-primary" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Principal&apos;s Message
          </h2>
        </motion.div>

        <div className="relative backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl border border-primary/10 shadow-lg">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              Welcome to The Rock Dominion Private School, where we inspire, nurture, and prepare students for a
              successful future. As the Principal, I am committed to ensuring that every student receives a world-class
              education that fosters academic excellence, character development, and leadership skills.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed"
            >
              Our Nigerian-American curriculum is designed to provide students with a global perspective, preparing them
              for an ever-changing world. Our experienced teachers, state-of-the-art facilities, and diverse
              extracurricular programs make us one of the top private schools in Ogun State.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg leading-relaxed"
            >
              At The Rock Dominion Private School, we believe that every child deserves a quality education that
              prepares them for success. We strive to create a learning environment that is supportive, inclusive, and
              challenging, where students can reach their full potential.
            </motion.p>
          </div>

          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
        </div>
      </div>
    </motion.section>
  );
};

export default PrincipalMessage;