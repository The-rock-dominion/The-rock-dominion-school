import { motion } from "framer-motion"
import { Rocket, Eye, ArrowRight, Target, Users, Brain, Star } from "lucide-react"

interface MissionVisionProps {
  id?: string;
}

const MissionVisionSection = ({ id }: MissionVisionProps) => {
  const missionPoints = [
    { icon: Target, text: "Excellence in Academic Achievement" },
    { icon: Users, text: "Character Development" },
    { icon: Brain, text: "Critical Thinking" },
  ]

  const visionPoints = [
    { icon: Star, text: "Global Leadership" },
    { icon: Brain, text: "Innovative Learning" },
    { icon: Users, text: "Cultural Integration" },
  ]

  return (
    <section id={id} className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background dark:from-background/80 dark:via-primary/10 dark:to-background/80" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5"
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-lg" />
            
            <div className="relative h-full bg-background/50 dark:bg-background/20 backdrop-blur-md p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mb-6"
              >
                <div className="w-fit p-3 bg-primary/10 rounded-xl">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Our Mission
              </h2>

              <p className="text-lg mb-6 text-foreground/90 dark:text-foreground/80">
                To develop confident, intelligent, and compassionate leaders who excel academically,
                think critically, and contribute positively to society.
              </p>

              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground/90 dark:text-foreground/80">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="mt-8 flex items-center gap-2 text-primary cursor-pointer group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-secondary/5 dark:from-secondary/10 dark:to-secondary/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-lg" />
            
            <div className="relative h-full bg-background/50 dark:bg-background/20 backdrop-blur-md p-8 rounded-2xl border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <motion.div 
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 0.9, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mb-6"
              >
                <div className="w-fit p-3 bg-primary/10 rounded-xl">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Our Vision
              </h2>

              <p className="text-lg mb-6 text-foreground/90 dark:text-foreground/80">
                To be the leading educational institution that shapes future leaders through
                innovative learning, cultural integration, and character development.
              </p>

              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover/item:bg-secondary/20 transition-colors">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground/90 dark:text-foreground/80">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="mt-8 flex items-center gap-2 text-secondary cursor-pointer group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection