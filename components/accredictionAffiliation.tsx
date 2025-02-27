import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, HandshakeIcon, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface AccredictionAffiliationProps{
  id?:string
}
const AccreditationAffiliation = ({id}:AccredictionAffiliationProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cards = [
    {
      icon: Shield,
      title: "Accreditation",
      description: "Accrediting Body, ensuring that our school meets international standards of education.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Affiliation",
      description: "International Schools or Organizations, providing our students with global opportunities and resources.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HandshakeIcon,
      title: "Partnerships",
      description: "Partnerships with international schools or organizations, enabling us to provide our students with exchange programs, internships, and other global opportunities.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <motion.section
      initial="initial"
      animate="animate"
      id={id}
      className="relative min-h-screen py-16 px-4 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm mb-4">
            <Award className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Accreditation and Affiliation
          </h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl max-w-3xl mx-auto leading-relaxed"
          >
            The Rock Dominion Private School is accredited by the Accrediting Body and affiliated with International
            Schools or Organizations, providing our students with global opportunities and resources.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative group hover:scale-105 transition-transform duration-300 overflow-hidden backdrop-blur-sm bg-white/10 border-primary/10">
                <CardContent className="p-6">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <card.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-16"
        />
      </div>
    </motion.section>
  );
};

export default AccreditationAffiliation;