import React from 'react';
import { Users, Award, BookOpen, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface OurTeamProps{
  id?:string

}
const OurTeam = ({id}:OurTeamProps) => {
  const teamStats = [
    { icon: <Users className="w-6 h-6" />, count: "20+", label: "Expert Teachers" },
    { icon: <Award className="w-6 h-6" />, count: "15+", label: "Years Experience" },
    { icon: <BookOpen className="w-6 h-6" />, count: "100%", label: "Certified" },
    { icon: <Heart className="w-6 h-6" />, count: "500+", label: "Happy Students" },
  ];

  const teamMembers = [
    { role: "Principal", experience: "10+ years", expertise: "Education Management" },
    { role: "Vice Principal", experience: "8+ years", expertise: "Teaching & Learning" },
    { role: "Department Heads", experience: "5+ years", expertise: "Subject Specialists" },
    { role: "Teachers", experience: "3+ years", expertise: "Classroom Excellence" },
    { role: "Support Staff", experience: "2+ years", expertise: "Student Support" },
  ];

  return (
    <section id={id} className="relative py-16 overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 relative inline-block">
            Our Team
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full">
              <div className="w-1/2 h-full bg-primary rounded-full animate-pulse" />
            </div>
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            At The Rock Dominion Private School, our highly qualified and experienced teachers are at the heart of our
            success. Our educators are passionate about nurturing, mentoring, and inspiring students to achieve their
            dreams.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-accent/5 backdrop-blur-sm hover:bg-accent/10 
                         transition-all duration-300 text-center group hover:shadow-lg"
            >
              <div className="mb-3 text-primary transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-none 
                         bg-accent/5 backdrop-blur-sm hover:bg-accent/10"
            >
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                <div className="text-sm text-muted-foreground mb-1">Experience: {member.experience}</div>
                <div className="text-sm text-muted-foreground">{member.expertise}</div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values */}
        <div className="p-6 rounded-xl bg-accent/5 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-primary">Our Core Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Certified professionals with global teaching experience",
              "Student-centered learning approach",
              "Continuous professional development",
              "Strong teacher-student relationships"
            ].map((value, index) => (
              <li key={index} className="flex items-center space-x-3 group">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;