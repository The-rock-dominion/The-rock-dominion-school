
"use client"

import React from 'react';
import { motion } from "framer-motion";
import MissionVisionSection from "@/components/missionVisionSection";
import History from "@/components/History";
import CoreValues from "@/components/coreValues";
import Faq from "@/components/Faq";
import AccredictionAffiliation from '@/components/accredictionAffiliation';
import Vacancies from "@/components/Vacancies";
import OurTeam from "@/components/ourTeam";
import PrincipalMessage from "@/components/principalMessage";

const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
                <div className="relative h-full flex items-center justify-center text-center">
                    <div className="container px-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-7xl font-bold mb-6 text-white"
                        >
                            About Us
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/90"
                        >
                            Discover The Rock Dominion Private School
                        </motion.p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 -mt-20 relative z-10">
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="welcome" 
                    className="mb-16 bg-background rounded-xl shadow-lg p-8"
                >
                    <h2 className="text-3xl font-bold mb-6 text-primary">Welcome to The Rock Dominion Private School</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <p className="text-lg">
                            At T.R.D.S., we go beyond traditional education as we inspire, nurture, and prepare students for a
                            successful future. As one of the leading private schools in Ogun State, we offer a unique Nigerian-American
                            curriculum, blending local and international learning standards to provide a world-class education in Ota.
                        </p>
                        <p className="text-lg">
                            Our mission is simple: to develop confident, intelligent, and compassionate leaders who excel academically,
                            think critically, and contribute positively to society. With our modern facilities, dedicated teachers, and
                            diverse extracurricular programs, we ensure every student receives a well-rounded education.
                        </p>
                    </div>
                </motion.section>

                <History id='our-history'/>
                <MissionVisionSection id='mission-vision' />
                <CoreValues id='core-values'/>
                <PrincipalMessage id='principals-message'/>
                <OurTeam />
                <Vacancies />
                <AccredictionAffiliation />
                <Faq id='faqs'/>
            </main>
        </div>
    );
};

export default AboutUsPage;