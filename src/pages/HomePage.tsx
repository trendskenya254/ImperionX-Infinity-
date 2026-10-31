import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FacultiesShowcase } from '../components/home/FacultiesShowcase';
import { PopularCourses } from '../components/home/PopularCourses';
import { SystemsShowcase } from '../components/home/SystemsShowcase';
import { AIToolsPreview } from '../components/home/AIToolsPreview';
import { ProjectsShowcase } from '../components/home/ProjectsShowcase';
import { PricingPreview } from '../components/home/PricingPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FaqSection } from '../components/home/FaqSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <FacultiesShowcase />
      <PopularCourses />
      <SystemsShowcase />
      <AIToolsPreview />
      <ProjectsShowcase />
      <PricingPreview />
      <WhyChooseUs />
      <FaqSection />
    </div>
  );
};
