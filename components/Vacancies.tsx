import React from 'react'
import { 
    GraduationCap,  MapPin,  Medal,Briefcase
 } from "lucide-react"
  import { Card, CardHeader, CardContent } from "@/components/ui/card"
  
const Vacancies = () => {
  return (
    <section className="mb-20">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center p-8">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-bold text-primary">Join Our Team</h2>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    Qualifications
                  </h3>
                  <ul className="space-y-4">
                    {["NCE", "BSC", "Master's degree", "PGDE"].map((qual, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors duration-200">
                        <Medal className="w-5 h-5 text-primary" />
                        <span className="text-lg">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-primary" />
                    Available Positions
                  </h3>
                  <ul className="space-y-4">
                    {["French", "Music", "Science", "Commercial", "Arts"].map((pos, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors duration-200">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-lg">{pos}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
  )
}

export default Vacancies
