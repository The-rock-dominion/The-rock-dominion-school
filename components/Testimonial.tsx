"use client"

import React from 'react';
import { Quote, Star, GraduationCap, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TestimonialCategory = 'student' | 'parent' | 'teacher';

interface TestimonialType {
  quote: string;
  author: string;
  role: string;
  category: TestimonialCategory;
  rating?: number;
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

const testimonials: readonly TestimonialType[] = [
  {
    quote: "Attending The Rock Dominion Private School has been life-changing. The teachers are supportive, and the smart classrooms make learning engaging. I have grown not only academically but also in confidence and leadership skills.",
    author: "Amara O.",
    role: "JSS3 Student",
    category: "student",
    rating: 5
  },
  {
    quote: "I love how the school blends the Nigerian-American curriculum with hands-on activities. Our computer labs and science experiments make me look forward to every lesson.",
    author: "David K.",
    role: "SSS1 Student",
    category: "student",
    rating: 5
  },
  {
    quote: "Finding a private school near Obasanjo Farm, Ota, that truly prioritizes both education and moral values was a blessing. My child has not only improved academically but has also become more disciplined and focused.",
    author: "Mrs. Adewale",
    role: "Parent",
    category: "parent",
    rating: 5
  },
  {
    quote: "The Rock Dominion Private School offers the best facilities I have seen in Ogun State. The modern library, well-equipped science labs, and secure environment make it a top choice for parents seeking quality education.",
    author: "Mr. John",
    role: "Parent",
    category: "parent",
    rating: 5
  },
  {
    quote: "As an educator, I value the school's commitment to professional development and innovation. The integration of technology into teaching has empowered me to be more effective in the classroom.",
    author: "Mrs. Kemi A.",
    role: "Mathematics Teacher",
    category: "teacher",
    rating: 5
  },
  {
    quote: "What sets The Rock Dominion Private School apart is the sense of community. Teachers, students, and parents work together to create a supportive and inspiring learning environment.",
    author: "Mr. Samuel",
    role: "English Teacher",
    category: "teacher",
    rating: 5
  }
] as const;

const TestimonialCard = React.memo<TestimonialCardProps>(({ quote, author, role, rating = 5 }) => (
  <div className="transform transition-all duration-300 hover:-translate-y-1">
    <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
        <p className="text-foreground/80 mb-6 flex-grow italic">"{quote}"</p>
        <div className="flex items-center gap-2">
          <div className="flex-grow">
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-primary text-primary" 
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const categoryIcons = {
  all: Users,
  student: GraduationCap,
  parent: Users,
  teacher: BookOpen
} as const;

const TestimonialSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<TestimonialCategory | 'all'>('all');

  const filteredTestimonials = React.useMemo(() => 
    activeCategory === 'all' 
      ? testimonials 
      : testimonials.filter(t => t.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Testimonials — Hear from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our reputation as one of the best private schools in Ota, Ogun State is built on the genuine experiences of our community.
          </p>
        </div>

        <Tabs 
          defaultValue="all" 
          className="w-full"
          onValueChange={(value) => setActiveCategory(value as TestimonialCategory | 'all')}
        >
          <TabsList className="flex justify-center mb-12">
            {(['all', 'student', 'parent', 'teacher'] as const).map((category) => {
              const Icon = categoryIcons[category];
              return (
                <TabsTrigger 
                  key={category}
                  value={category} 
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}s
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={activeCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.category}-${index}`}
                  {...testimonial}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default React.memo(TestimonialSection);