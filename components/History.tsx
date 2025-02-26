import React from 'react'
import {motion} from 'framer-motion'
import {Clock , Award} from "lucide-react"

interface HistoryProps {
  id?: string;
}
const History = ({id}:HistoryProps) => {
  return (
    <section className="mb-16" id={id}>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Our History</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl" />
            <div className="relative p-8 rounded-3xl backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <Clock className="h-20 w-20 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Beginning</h3>
                      <p className="text-lg">
                        The Rock Dominion Private School was founded with a vision to provide
                        exceptional education that combines Nigerian and American curricula.
                        Since our establishment, we have grown from a small institution to
                        one of the leading private schools in Ogun State.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <Award className="h-20 w-20 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Growth</h3>
                      <p className="text-lg">
                        Over the years, we have consistently expanded our facilities,
                        enhanced our academic programs, and strengthened our commitment
                        to excellence in education. Our journey has been marked by
                        numerous achievements and the success of our students.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 p-6 bg-background/80 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Milestones</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Establishment</h4>
                    <p>Founded with a vision for excellence in education</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Growth</h4>
                    <p>Expanded facilities and programs</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Recognition</h4>
                    <p>Achieved numerous academic accolades</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


  )
}

export default History
