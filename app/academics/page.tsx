
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, GraduationCap, Code, Brain, School, Trophy,
  Users, Briefcase, Lightbulb, BookOpenCheck, Rocket,
  Globe, Music, Palette, Calculator, Building2,
  Mail, Phone, Globe as GlobeIcon, MapPin,
  Award, Star, Heart
} from 'lucide-react';

interface ProgramCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  description?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, items, icon, description }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center gap-4">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </CardHeader>
    <CardContent>
      {description && (
        <p className="mb-4 text-muted-foreground">{description}</p>
      )}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 p-2 rounded-md bg-secondary/10">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Blue */}
      <section className="relative h-[40vh] md:h-[60vh] bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container relative z-10 h-full flex flex-col justify-center text-primary-foreground px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Academics at The Rock Dominion
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl">
            A leading private school in Ogun State, offering world-class education through 
            Nigerian-American curriculum and innovative learning approaches.
          </p>
        </div>
      </section>

      <main className="divide-y divide-gray-100">
        {/* Overview Section - White */}
        <section className="bg-background py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-4 md:p-6 bg-accent">
                <CardHeader>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-primary">Our Academic Approach</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    We combine the strengths of both Nigerian and American educational systems,
                    ensuring students gain global competencies while excelling in local and 
                    international examinations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Globe className="h-8 w-8" />, text: "Global Education" },
                      { icon: <Brain className="h-8 w-8" />, text: "Critical Thinking" },
                      { icon: <Code className="h-8 w-8" />, text: "STEM Excellence" },
                      { icon: <Trophy className="h-8 w-8" />, text: "Academic Achievement" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 bg-background rounded-lg">
                        {item.icon}
                        <span className="mt-2 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-primary">Educational Programs</h2>
                <div className="grid gap-4">
                  {[
                    "Early Childhood Education",
                    "Primary School",
                    "Junior Secondary School",
                    "Senior Secondary School"
                  ].map((program, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                      <School className="h-6 w-6 text-primary" />
                      <span className="font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Programs - Blue */}
        <section className="bg-primary/5 py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="early-years" className="space-y-8">
              <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <TabsTrigger value="early-years">Early Years</TabsTrigger>
                <TabsTrigger value="primary">Primary</TabsTrigger>
                <TabsTrigger value="junior-secondary">Junior Secondary</TabsTrigger>
                <TabsTrigger value="senior-secondary">Senior Secondary</TabsTrigger>
              </TabsList>

              <TabsContent value="early-years">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <ProgramCard
                    title="Early Childhood Development"
                    icon={<BookOpen className="h-6 w-6 text-primary" />}
                    items={[
                      "Phonics and Early Literacy Development",
                      "Numeracy and Logical Thinking",
                      "Social and Emotional Growth",
                      "Music, Art, and Creative Play",
                      "Motor Skills Development",
                      "Interactive Learning Activities"
                    ]}
                    description="Montessori-based approach for comprehensive early development"
                  />
                  <Card className="p-4 md:p-6">
                    <CardHeader>
                      <h3 className="text-xl font-bold">Learning Environment</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          <span>Child-centered learning spaces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Palette className="h-5 w-5 text-primary" />
                          <span>Art and sensory areas</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="primary">
                <div className="grid md:grid-cols-2 gap-6">
                  <ProgramCard
                    title="Core Academic Program"
                    icon={<BookOpenCheck className="h-6 w-6 text-primary" />}
                    items={[
                      "English Language & Literature",
                      "Mathematics & Problem-Solving",
                      "Basic Science & Technology",
                      "Social Studies & Civic Education",
                      "Creative Arts & Music",
                      "Physical Education & Health"
                    ]}
                  />
                  <ProgramCard
                    title="Enrichment Programs"
                    icon={<Rocket className="h-6 w-6 text-primary" />}
                    items={[
                      "Digital Literacy & Computer Skills",
                      "Leadership & Character Development",
                      "Environmental Studies",
                      "Foreign Language Introduction",
                      "Sports & Physical Development",
                      "Arts & Cultural Activities"
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="junior-secondary">
                <div className="grid md:grid-cols-2 gap-6">
                  <ProgramCard
                    title="Core Subjects"
                    icon={<Calculator className="h-6 w-6 text-primary" />}
                    items={[
                      "Advanced Mathematics",
                      "English Language & Literature",
                      "Integrated Science",
                      "Social Studies",
                      "Business Studies",
                      "Basic Technology",
                      "Computer Studies"
                    ]}
                  />
                  <ProgramCard
                    title="Specialized Programs"
                    icon={<Brain className="h-6 w-6 text-primary" />}
                    items={[
                      "STEM Education & Robotics",
                      "Foreign Languages (French)",
                      "Creative Arts & Music",
                      "Agricultural Science",
                      "Physical & Health Education",
                      "Civic Education"
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="senior-secondary">
                <div className="grid md:grid-cols-2 gap-6">
                  <ProgramCard
                    title="Science & Commercial Subjects"
                    icon={<Building2 className="h-6 w-6 text-primary" />}
                    items={[
                      "Physics, Chemistry, Biology",
                      "Further Mathematics",
                      "Economics & Commerce",
                      "Accounting & Business Studies",
                      "Computer Science",
                      "Technical Drawing"
                    ]}
                  />
                  <ProgramCard
                    title="Arts & Humanities"
                    icon={<BookOpen className="h-6 w-6 text-primary" />}
                    items={[
                      "Literature in English",
                      "Government & History",
                      "Christian Religious Studies",
                      "Visual Arts",
                      "Music",
                      "French Language"
                    ]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Special Programs - White */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Special Academic Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ProgramCard
                title="STEM & Technology"
                icon={<Code className="h-6 w-6 text-primary" />}
                items={[
                  "Robotics & AI Development",
                  "Coding & Programming",
                  "3D Printing & Design",
                  "Science Competitions",
                  "Tech Innovation Projects"
                ]}
              />
              <ProgramCard
                title="Entrepreneurship"
                icon={<Briefcase className="h-6 w-6 text-primary" />}
                items={[
                  "Business Plan Development",
                  "Financial Literacy",
                  "Market Analysis",
                  "Product Development",
                  "Leadership Skills"
                ]}
              />
              <ProgramCard
                title="Vocational Training"
                icon={<GraduationCap className="h-6 w-6 text-primary" />}
                items={[
                  "Agriculture & Farming",
                  "Fashion Design",
                  "Digital Skills",
                  "Cosmetology",
                  "Culinary Arts"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Assessment & Support - Blue */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <h3 className="text-2xl font-bold">Academic Assessment</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>Continuous Assessment Tests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>Terminal Examinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>External Examinations (WAEC, JAMB)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>International Certifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <h3 className="text-2xl font-bold">Student Support</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Academic Counseling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Career Guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Special Education Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Remedial Classes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Extracurricular - White */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Extracurricular Activities & Academic Enrichment</h2>
              <p className="text-lg text-muted-foreground">
                We believe that education extends beyond the classroom. Our rich extracurricular programs 
                help students develop leadership, creativity, and teamwork.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <ProgramCard
                  title="Clubs & Societies"
                  icon={<Users className="h-6 w-6 text-primary" />}
                  items={[
                    "Science & Technology Club",
                    "Debate & Public Speaking Club",
                    "Young Entrepreneurs Club",
                    "Music & Performing Arts Society"
                  ]}
                />
                
                <ProgramCard
                  title="Annual Competitions"
                  icon={<Trophy className="h-6 w-6 text-primary" />}
                  items={[
                    "Mathematics & Science Olympiads",
                    "Spelling Bees & Essay Writing Contests",
                    "Leadership & Innovation Challenges",
                    "Inter-House Sports Competition"
                  ]}
                />
                
                <ProgramCard
                  title="Community Engagement"
                  icon={<Heart className="h-6 w-6 text-primary" />}
                  items={[
                    "Regular Parent-Teacher Collaboration",
                    "Workshops & Seminars for Parents",
                    "Student-Led Community Service Projects",
                    "Cultural Exchange Programs"
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Blue */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Why Choose The Rock Dominion Private School?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Award className="h-8 w-8 text-primary" />,
                    title: "Academic Excellence",
                    items: [
                      "Top-Ranked Private School in Ogun State",
                      "Excellent WAEC & JAMB Preparation",
                      "Scholarship Opportunities"
                    ]
                  },
                  {
                    icon: <Code className="h-8 w-8 text-primary" />,
                    title: "Innovation & Technology",
                    items: [
                      "Technology-Driven Learning",
                      "Smart Classrooms",
                      "STEM & Robotics Curriculum"
                    ]
                  },
                  {
                    icon: <Star className="h-8 w-8 text-primary" />,
                    title: "Holistic Development",
                    items: [
                      "Comprehensive Leadership Programs",
                      "Extracurricular Activities",
                      "Character Development"
                    ]
                  }
                ].map((section, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {section.icon}
                      <h3 className="text-xl font-bold">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - White */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="bg-accent rounded-lg p-8">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold">Enroll Your Child Today!</h2>
                <p className="text-lg text-muted-foreground">
                  Join our community of learners and give your child the best education possible.
                </p>
                <div className="grid gap-4 mt-8">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>16, Araromi, Ikeshi, Elejigbo, Obasanjo Farm, Ota, Ogun State, Nigeria</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+234-702-562-5816</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>therockdominionschool@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <GlobeIcon className="h-5 w-5 text-primary" />
                    <span>[Insert Website URL]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademicsPage;
