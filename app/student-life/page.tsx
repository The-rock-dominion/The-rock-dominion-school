
import React from 'react';
import {  Book,  Building, Laptop} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const StudentLife = () => {
  const facilities = [
    { icon: <Book className="w-6 h-6" />, title: "Library", desc: "World of Knowledge at Your Fingertips" },
    { icon: <Building className="w-6 h-6" />, title: "Boarding Facilities", desc: "Safe & Comfortable Living" },
    { icon: <Laptop className="w-6 h-6" />, title: "Smart Classrooms", desc: "Modern, Interactive Learning" },
  ];

  const clubs = [
    "STEM & Robotics Club",
    "Literary & Debate Club",
    "Drama & Performing Arts",
    "Sports & Fitness Club",
    "Entrepreneurship & Finance Club",
    "Art & Design Club",
    "ICT & Digital Skills Club"
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[70vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        <img 
          src="/slide 3.jpg" 
          alt="Students in campus" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">STUDENT'S LIFE</h1>
          <h2 className="text-xl md:text-3xl font-light max-w-4xl leading-relaxed">THE ROCK DOMINION EARLY YEARS, NURSERY, PRIMARY, AND SECONDARY SCHOOL</h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">Excellence in Academics, Innovation & Leadership</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At The Rock Dominion Schools, we are committed to providing world-class education that nurtures young minds to become future leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none ring-1 ring-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{facility.title}</h4>
                    <p className="text-gray-600">{facility.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-background from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-16 text-blue-900">Student Clubs & Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h4 className="font-bold text-xl mb-3 text-blue-900">{club}</h4>
                <p className="text-gray-600">Develop skills, make friends, and explore your interests</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">Join The Rock Dominion Schools</h3>
          <p className="mb-12 text-lg text-blue-100">Experience excellence in education and shape your future with us</p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Enroll Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;