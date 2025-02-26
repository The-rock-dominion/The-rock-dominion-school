"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Globe, FileCheck, Calendar,
  Users, CreditCard, CheckCircle, ArrowRight, School,
  Phone, Mail, MapPin, Download, Building2,
  Award, Star, Heart, Shield, BookOpenCheck
} from "lucide-react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => (
  <div className="relative flex items-start gap-4 p-8 bg-background/50 backdrop-blur-sm rounded-xl 
                  border border-border/50 hover:border-primary/20 transition-all duration-300 group">
    <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-xl 
                    flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="mt-4 p-4 rounded-xl bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 
                  hover:border-primary/20 transition-all duration-300 group">
    <div className="p-4 rounded-xl bg-primary/10 ring-1 ring-primary/20 w-fit mb-4 
                    group-hover:bg-primary/15 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const AdmissionPage = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Nigerian-American Curriculum",
      description: "A unique blend of international standards with local context"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal student-teacher ratio"
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms and learning resources"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Safe Environment",
      description: "Comprehensive security measures for student safety"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced educators"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Character Development",
      description: "Focus on moral values and leadership skills"
    }
  ];

  const admissionSteps = [
    {
      number: 1,
      title: "Inquiry & School Tour",
      description: "Visit our campus, meet our teachers, and experience our learning environment firsthand.",
      icon: <Building2 className="h-6 w-6 text-primary" />
    },
    {
      number: 2,
      title: "Application Submission",
      description: "Complete our comprehensive online application with all required documentation.",
      icon: <FileCheck className="h-6 w-6 text-primary" />
    },
    {
      number: 3,
      title: "Entrance Assessment",
      description: "Take our placement test to evaluate academic readiness and potential.",
      icon: <BookOpenCheck className="h-6 w-6 text-primary" />
    },
    {
      number: 4,
      title: "Interview & Offer",
      description: "Meet with our admissions team and receive your admission decision.",
      icon: <Award className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-[85vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/school-pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 25%)'
        }} />
        <div className="container relative z-10 h-full flex flex-col justify-center text-primary-foreground px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                        border border-white/10 hover:bg-white/15 transition-colors duration-200 w-fit mb-8">
            <School className="h-4 w-4" />
            <span className="text-sm font-medium">2024-25 Admissions Open</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Welcome to<br />
            <span className="text-white/90">The Rock Dominion</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-8">
            Join our prestigious academic community in Ota, where we nurture future leaders through 
            our innovative Nigerian-American curriculum.
          </p>
          <div className="flex gap-4">
            <Button 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
              size="lg"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
              size="lg"
            >
              Download Prospectus
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: <Phone className="h-5 w-5 text-primary" />,
              title: "Call Us",
              info: "+234 XXX XXX XXXX"
            },
            {
              icon: <Mail className="h-5 w-5 text-primary" />,
              title: "Email",
              info: "admissions@rockdominion.edu.ng"
            },
            {
              icon: <MapPin className="h-5 w-5 text-primary" />,
              title: "Visit Us",
              info: "16, Araromi, Ikeshi, Elejigbo, Ota"
            }
          ].map((contact, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-0 hover:bg-card transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.title}</p>
                  <p className="font-medium">{contact.info}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Why Choose The Rock Dominion?
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide a world-class education that prepares students for global success while maintaining strong local values.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive admission process ensures we find students who will thrive in our 
              challenging and supportive academic environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {admissionSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <Card className="bg-gradient-to-br from-card/50 to-card border-0">
            <CardHeader>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  International Students
                </h2>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  We welcome international students to join our diverse community. Additional requirements include:
                </p>
                <ul className="space-y-4">
                  {[
                    "English proficiency (TOEFL/IELTS)",
                    "Translated academic records",
                    "Valid passport",
                    "Immunization records"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full" size="lg">
                  International Student Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image 
                    src="/api/placeholder/600/400" 
                    alt="International students"
                    width={600}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg
                              border border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Virtual Tour</p>
                      <p className="text-sm text-muted-foreground">Every Wednesday</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-24">
          <Card className="bg-gradient-to-br from-card/50 to-card border-0">
            <CardHeader>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Tuition & Fees
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    level: "Primary School",
                    grades: "Grades 1-6",
                    fee: "₦2,500,000"
                  },
                  {
                    level: "Junior Secondary",
                    grades: "Grades 7-9",
                    fee: "₦3,000,000"
                  },
                  {
                    level: "Senior Secondary",
                    grades: "Grades 10-12",
                    fee: "₦3,500,000"
                  }
                ].map((tier, index) => (
                  <div key={index} className="p-6 rounded-xl bg-secondary/5 border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2">{tier.level}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.grades}</p>
                    <p className="text-3xl font-bold text-primary">{tier.fee}</p>
                    <p className="text-sm text-muted-foreground">per academic year</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative rounded-2xl overflow-hidden bg-primary p-12 text-primary-foreground">
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
                Download Prospectus
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdmissionPage;