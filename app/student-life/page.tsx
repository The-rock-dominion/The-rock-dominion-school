"use client"

import Image from 'next/image';
import React from 'react';
import { Book, Building, Laptop, ChevronRight, Palette, Code, 
  Dumbbell, Theater, BookOpen, Rocket } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const StudentLife = () => {
  const facilities = [
    { 
      icon: <Book className="w-7 h-7" />, 
      title: "State-of-the-Art Library", 
      desc: "Extensive collection of books, digital resources, and quiet study spaces" 
    },
    { 
      icon: <Building className="w-7 h-7" />, 
      title: "Premium Boarding Facilities", 
      desc: "Luxurious accommodation with 24/7 security and modern amenities" 
    },
    { 
      icon: <Laptop className="w-7 h-7" />, 
      title: "Advanced Smart Classrooms", 
      desc: "Interactive technology and immersive learning environments" 
    },
  ];

  const clubs = [
    {
      icon: <Rocket className="w-6 h-6" />,
      name: "STEM & Robotics Club",
      desc: "Explore cutting-edge technology and innovation"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      name: "Literary & Debate Club",
      desc: "Master public speaking and critical thinking"
    },
    {
      icon: <Theater className="w-6 h-6" />,
      name: "Drama & Performing Arts",
      desc: "Express creativity through performance"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      name: "Sports & Fitness Club",
      desc: "Excel in athletics and maintain wellness"
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "ICT & Digital Skills",
      desc: "Develop essential digital competencies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: "Art & Design Club",
      desc: "Unleash artistic potential and creativity"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[85vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <Image
          src="/gallerybg.jpg" 
          alt="Students in campus" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom filter brightness-90"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Experience <span className="text-accent">Excellence</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-light max-w-4xl leading-relaxed mb-8">
            THE ROCK DOMINION SCHOOLS
          </h2>
          <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center gap-2">
            Discover More
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary">
            World-Class Education Experience
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            At The Rock Dominion Schools, we cultivate excellence through innovative education, 
            fostering tomorrow's leaders in a nurturing environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-none ring-1 ring-primary/5 hover:ring-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {facility.title}
                    </h4>
                    <p className="text-muted-foreground">{facility.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-primary/5 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary">
            Enrichment Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div 
                key={index} 
                className="group bg-background/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl 
                         transition-all duration-500 border border-primary/10 hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {club.icon}
                  </div>
                  <h4 className="font-bold text-xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {club.name}
                  </h4>
                </div>
                <p className="text-muted-foreground">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl text-primary
          font-bold
           mb-8 ">Begin Your Journey</h3>
          <p className="mb-12 text-lg text-secondary max-w-2xl mx-auto">
            Join a community dedicated to academic excellence and personal growth
          </p>
          <button className="group bg-white text-primary px-10 py-4 rounded-full font-bold text-lg 
                           hover:bg-primary-foreground transition-colors duration-300 shadow-lg 
                           hover:shadow-xl flex items-center gap-2 mx-auto">
            Apply Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;