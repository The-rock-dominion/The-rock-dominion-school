
"use client"

import React, { useState, useMemo } from 'react';
import {
  Heart,
  Users,
  Trophy,
  Star,
  Clock,
  Medal,
  Shield,
  Lightbulb,
  Brain,
  HandHeart,
  Rocket,
  LucideProps
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CoreValue {
  value: string;
  icon: React.ReactElement<LucideProps>;
  description?: string;
}

interface CoreValuesProps {
  id?: string;
  className?: string;
}

interface ValueCardProps {
  value: CoreValue;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

const coreValues: readonly CoreValue[] = [
  { value: "Tenacity", icon: <Trophy size={32} aria-hidden="true" /> },
  { value: "Honesty", icon: <Shield size={32} aria-hidden="true" /> },
  { value: "Excellence", icon: <Star size={32} aria-hidden="true" /> },
  { value: "Respect", icon: <HandHeart size={32} aria-hidden="true" /> },
  { value: "Originality", icon: <Lightbulb size={32} aria-hidden="true" /> },
  { value: "Confidence", icon: <Medal size={32} aria-hidden="true" /> },
  { value: "Knowledge", icon: <Brain size={32} aria-hidden="true" /> },
  { value: "Discipline", icon: <Clock size={32} aria-hidden="true" /> },
  { value: "Optimism", icon: <Heart size={32} aria-hidden="true" /> },
  { value: "Mentorship", icon: <Users size={32} aria-hidden="true" /> },
  { value: "Integrity", icon: <Shield size={32} aria-hidden="true" /> },
  { value: "Nurturing", icon: <HandHeart size={32} aria-hidden="true" /> },
  { value: "Innovation", icon: <Lightbulb size={32} aria-hidden="true" /> },
  { value: "Opportunity", icon: <Rocket size={32} aria-hidden="true" /> },
  { value: "Nobility", icon: <Trophy size={32} aria-hidden="true" /> }
] as const;

const ValueCard: React.FC<ValueCardProps> = React.memo(({ value, index, isHovered, onHover }) => (
  <div
    className="group relative"
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
    role="presentation"
  >
    <div 
      className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 
                  opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} 
    />
    <div 
      className={`relative bg-background/80 backdrop-blur-sm p-6 rounded-xl 
                  transform transition-all duration-500 group-hover:scale-105 
                  border border-accent/20 group-hover:border-primary 
                  flex flex-col items-center justify-center gap-4`}
    >
      <div 
        className="text-primary transform transition-transform duration-300 
                   group-hover:scale-110 group-hover:rotate-6"
      >
        {React.cloneElement(value.icon, {
          ...value.icon.props,
          className: `w-8 h-8 ${value.icon.props.className || ''}`.trim(),
          'aria-hidden': true
        } as LucideProps)}
      </div>
      <p 
        className="font-bold text-lg text-center group-hover:text-primary 
                   transition-colors duration-300"
      >
        {value.value}
      </p>
    </div>
  </div>
));

ValueCard.displayName = 'ValueCard';

const CoreValues: React.FC<CoreValuesProps> = ({ id, className = '' }) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredValue(index);
  }, []);

  const valueCards = useMemo(() => 
    coreValues.map((value, index) => (
      <ValueCard
        key={`${value.value}-${index}`}
        value={value}
        index={index}
        isHovered={hoveredValue === index}
        onHover={handleHover}
      />
    )),
    [hoveredValue, handleHover]
  );

  return (
    <section 
      id={id} 
      className={`mb-20 ${className}`.trim()}
      aria-labelledby="core-values-title"
    >
      <Card className="shadow-xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 
                     via-transparent to-accent/5" 
          aria-hidden="true"
        />
        <CardContent className="p-12 relative">
          <h2 
            id="core-values-title"
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r 
                       from-primary via-primary/90 to-primary bg-clip-text 
                       text-transparent"
          >
            Core Values
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            At The Rock Dominion Private School, our name represents the values 
            we uphold. Each letter stands for a fundamental principle that 
            defines our school community:
          </p>
          <div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            role="list"
            aria-label="Core values grid"
          >
            {valueCards}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default React.memo(CoreValues);