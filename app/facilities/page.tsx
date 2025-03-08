
"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Microscope,
  Book,
  ShoppingBasketIcon as Basketball,
  Computer,
  AmbulanceIcon as FirstAid,
  Shield,
} from "lucide-react"

interface Facility {
  title: string
  description: string
  features: string[]
  images: string[]
}

interface Facilities {
  [key: string]: Facility
}

const facilities: Facilities = {
  "smart-classrooms": {
    title: "Smart Classrooms",
    description: "Interactive learning spaces equipped with modern technology",
    features: [
      "Interactive whiteboards for dynamic lessons",
      "High-speed internet access for research and virtual learning",
      "Multimedia projectors to enhance visual learning",
    ],
    images: ["/SS class 2.jpg", "/school class rock.jpg", "/Teacher 1.jpg"],
  },
  library: {
    title: "Library",
    description: "A vast collection of resources for research and reading",
    features: [
      "Academic textbooks and novels",
      "E-learning resources and computer stations",
      "Dedicated reading zones",
    ],
    images: ["/student with book.jpg"],
  },
  laboratories: {
    title: "Science Laboratories",
    description: "State-of-the-art labs for practical learning",
    features: [
      "Physics Lab - For mechanics, electricity, and magnetism experiments",
      "Chemistry Lab - Stocked with reagents and safety equipment",
      "Biology Lab - For anatomy, ecology, and botany studies",
    ],
    images: ["/teacher secondary 2.jpg"],
  },
  sports: {
    title: "Sports Facilities",
    description: "Modern facilities for physical education and sports",
    features: [
      "Spacious sports field for football and athletics",
      "Basketball court for team sports",
      "Indoor games area",
    ],
    images: ["/rock (3).jpg", "/sports2.jpg", "/sports3.jpg"],
  },
  ict: {
    title: "ICT Facility",
    description: "Digital hub for technology education",
    features: [
      "Modern computer systems with latest software",
      "High-speed internet for research",
      "Interactive smart boards and projectors",
    ],
    images: ["/teacher 1.jpg", "/ict2.jpg", "/ict3.jpg"],
  },
  medical: {
    title: "Medical Care",
    description: "Comprehensive healthcare facilities",
    features: ["Fully equipped sick bay", "Emergency response protocols", "Routine health check-ups"],
    images: ["/school building 4.jpg", "/medical2.jpg", "/medical3.jpg"],
  },
}

const FacilitiesPage = () => {
  const [activeTab, setActiveTab] = useState("smart-classrooms")

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/facilities banner.jpg" alt="School Facilities" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creating an Ideal Learning Environment
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience world-class facilities designed to foster learning, creativity, and holistic development
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(facilities).map(([key, facility], index) => (
            <motion.button
              key={key}
              className={`p-6 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300 ${
                activeTab === key ? "bg-primary text-primary-foreground" : "bg-card/80 hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab(key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center gap-2">
                {key === "smart-classrooms" && <Computer className="w-6 h-6" />}
                {key === "library" && <Book className="w-6 h-6" />}
                {key === "laboratories" && <Microscope className="w-6 h-6" />}
                {key === "sports" && <Basketball className="w-6 h-6" />}
                {key === "ict" && <Computer className="w-6 h-6" />}
                {key === "medical" && <FirstAid className="w-6 h-6" />}
                <span className="font-medium">{facility.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src={facilities[activeTab].images[0] || "/placeholder.svg"}
              alt={facilities[activeTab].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">{facilities[activeTab].title}</h2>
              <p className="text-lg text-muted-foreground">{facilities[activeTab].description}</p>
            </div>

            <div className="space-y-4">
              {facilities[activeTab].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-accent/50 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vocational School Program</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Hands-on training programs fostering creativity, independence, and entrepreneurial spirit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Farming and Agriculture",
                description: "Learn sustainable farming practices, crop cultivation, and animal husbandry",
              },
              {
                title: "Fashion Designing",
                description: "Master fashion sketching, pattern making, sewing, and embroidery",
              },
              {
                title: "Culinary Arts",
                description: "Learn cooking techniques, baking skills, and meal presentation",
              },
              {
                title: "Crafts and Bead Making",
                description: "Create beautiful jewelry, handbags, and decorative items",
              },
              {
                title: "Woodwork",
                description: "Design and build furniture, developing technical and creative skills",
              },
              {
                title: "Digital Skills",
                description: "Master graphic design, web development, and digital marketing",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-primary-foreground/80">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 bg-card p-8 rounded-xl shadow-lg"
          >
            <Shield className="w-16 h-16 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Security First</h2>
              <p className="text-muted-foreground">
                Our comprehensive security system includes 24/7 surveillance, trained personnel, and strict access
                control to ensure a safe learning environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FacilitiesPage
