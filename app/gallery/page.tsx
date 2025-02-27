"use client"

import React from 'react';
import { ImageIcon, Users, Book, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: GalleryItem[];
}

const galleryCategories: GalleryCategory[] = [
  {
    id: 'academic',
    title: 'Academic Excellence in Action',
    icon: <Book className="w-4 h-4" />,
    items: [
      {
        title: 'Science Experiments',
        description: 'Hands-on experiments in fully-equipped laboratories',
        image: '/slide 2.jpg'
      },
      {
        title: 'Computer Labs',
        description: 'Interactive lessons in modern computer facilities',
        image: '/slide 3.jpg'
      },
      {
        title: 'Library Resources',
        description: 'Access to physical and digital learning materials',
        image: '/school class rock.jpg'
      }
    ]
  },
  {
    id: 'events',
    title: 'School Events',
    icon: <Users className="w-4 h-4" />,
    items: [
      {
        title: 'Quiz Competitions',
        description: 'Inter-school academic challenges',
        image: '/school building 2.jpg'
      },
      {
        title: 'Cultural Day',
        description: "Celebrating Nigeria's rich cultural heritage",
        image: '/cultural day.jpg'
      },
      {
        title: 'Inter-House Sports',
        description: 'Track and field events, football, basketball matches',
        image: '/school building 4.jpg'
      }
    ]
  },
  {
    id: 'vocational',
    title: 'Vocational Training',
    icon: <Briefcase className="w-4 h-4" />,
    items: [
      {
        title: 'Farming and Agriculture',
        description: 'Sustainable farming methods and crop cultivation',
        image: '/happy student.jpg'
      },
      {
        title: 'Fashion Designing',
        description: 'Sewing, embroidery, and garment design',
        image: '/primary.jpg'
      },
      {
        title: 'Culinary Arts',
        description: 'Cooking classes and baking sessions',
        image: '/primary 2.jpg'
      },
      {
        title: 'Digital Skills',
        description: 'ICT training and web development',
        image: '/school building 3.jpg'
      }
    ]
  }
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background from-slate-50 to-slate-100">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallerybg.jpg"
            alt="Gallery Hero"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <ImageIcon className="w-16 h-16 mb-8 animate-bounce" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gallery — A Glimpse into Life at<br />The Rock Dominion School
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            Experience what makes us the top-rated private school in Ota, Ogun State
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16 px-4">
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, idx) => (
                  <Card 
                    key={idx} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative group">
                        <div className="relative w-full h-64">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            fill
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <section className="bg-background text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.flatMap(category => category.items).slice(0, 4).map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg">
                <div className="relative w-full h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;