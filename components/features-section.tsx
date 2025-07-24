"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function FeaturesSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
    
      <h2 className="max-w-7xl pl-4 mx-auto text-[32px] font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        💡 Why Choose Kalakaar?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Learn, create, and grow with Kalakaar.
        </span>{" "}
        Whether you're building a portfolio or preparing for competitive exams, Kalakaar offers expert-led training and a vibrant creative community to support you.
      </p>
      <img
        src="https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=3000&auto=format&fit=crop"
        alt="Creative Art Mockup"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Coaching",
    title: "Expert-Led Courses",
    src: "https://images.unsplash.com/photo-1603816259510-38aa4d94cf9e?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Exam Prep",
    title: "Exam Preparation",
    src: "https://images.unsplash.com/photo-1581092580508-5c4e4cf6cf33?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Flexibility",
    title: "Flexible Learning",
    src: "https://images.unsplash.com/photo-1610484826922-2eabdb9bfe2d?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Skills",
    title: "Skill Development",
    src: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Portfolio",
    title: "Portfolio Building",
    src: "https://images.unsplash.com/photo-1617042375870-c448dbfd44c3?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Community",
    title: "Community Support",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Career",
    title: "Career Guidance",
    src: "https://images.unsplash.com/photo-1590080875881-cd769106c894?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Workshops",
    title: "Creative Workshops",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=3000&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
