"use client"

import React from 'react';
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowRight, 
  GraduationCap, 
  School 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsappIcon from "@/components/WhatsappIcon"; // Import the custom WhatsappIcon

interface SocialLink {
  icon: React.FC<{ className?: string }>;
  label: string;
  href: string;
}

interface ContactCard {
  icon: React.ReactNode;
  title: string;
  info: string;
  action: string;
}

interface OfficeHours {
  day: string;
  hours: string;
}

const ContactPage: React.FC = () => {
  const [secondaryMapError, setSecondaryMapError] = React.useState<string | null>(null);
  const [primaryMapError, setPrimaryMapError] = React.useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/therockdominionschool?igsh=YzljYTk1ODg3Zg==" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: WhatsappIcon, label: "Whatsapp", href: "https://wa.link/8a5hjz" }, // Use the custom WhatsappIcon
    { icon: Youtube, label: "Youtube", href: "https://youtube.com/@therockdominionschool?si=otJKM3QSLcVMO-n8" }
  ];

  const officeHours: OfficeHours[] = [
    { day: "Monday - Friday", hours: "8:00 AM – 4:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM (By appointment)" },
    { day: "Sunday", hours: "Closed" }
  ];

  const contactCards: ContactCard[] = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      info: "+234-702-562-5816",
      action: "Call now"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      info: "info@rockdominion.edu.ng",
      action: "Send email"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      info: "16, Araromi, Ikeshi, Elejigbo, Ota",
      action: "Get directions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/school-pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container relative z-10 h-full flex flex-col justify-center text-primary-foreground px-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                      border border-white/10 hover:bg-white/15 transition-colors duration-200 w-fit mb-6"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl"
          >
            We're here to answer your questions and guide you through every step.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <main className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10 mb-20"
        >
          {contactCards.map((contact, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.title}</p>
                    <p className="font-medium mb-4">{contact.info}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {contact.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Campus Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Our Campuses
            </h2>
            <Tabs defaultValue="secondary" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="secondary" className="flex-1">Secondary School</TabsTrigger>
                <TabsTrigger value="primary" className="flex-1">Primary School</TabsTrigger>
              </TabsList>
              <TabsContent value="secondary">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Secondary School Campus</h3>
                        <p className="text-muted-foreground">
                          16, Araromi, Ikeshi, Elejigbo, Obasanjo Farm, Ota, Ogun State
                        </p>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.2!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDPCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1629789012345!5m2!1sen!2sng"
                        title="Secondary School Campus Location Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          setSecondaryMapError('Map failed to load. Please try again later.');
                        }}
                      />
                      {secondaryMapError && (
                        <div className="text-center p-4 text-muted-foreground">
                          {secondaryMapError}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="primary">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                        <School className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Primary School Campus</h3>
                        <p className="text-muted-foreground">
                          [Primary School Address]
                        </p>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.2!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDPCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1629789012345!5m2!1sen!2sng"
                        title="Primary School Campus Location Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          setPrimaryMapError('Map failed to load. Please try again later.');
                        }}
                      />
                      {primaryMapError && (
                        <div className="text-center p-4 text-muted-foreground">
                          {primaryMapError}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Office Hours
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{schedule.day}</h3>
                        <p className="text-muted-foreground">{schedule.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <Button variant="ghost" className="w-full justify-start gap-3">
                        <SocialIcon className="h-5 w-5" />
                        {social.label}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative rounded-2xl overflow-hidden bg-primary p-12 text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[url('/school-pattern.png')] opacity-5" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Take the first step towards an exceptional education experience at The Rock Dominion.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-white text-primary hover:bg-white/90 rounded-full px-6"
                size="lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 border-white/20 text-white hover:bg-white/10"
                size="lg"
              >
                Schedule a Visit
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ContactPage;