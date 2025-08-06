"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "UI UX Design",
      button: "Explore Course",
      src: "/course_1662637290-1.jpg",
    },
    {
      title: "Fashion Designing",
      button: "Explore Course",
      src: "/fashion-designing-institute-in-Kolkata.webp",
    },
    {
      title: "Video Editing",
      button: "Explore Course",
      src: "/Video-Editing-Course-Perinthalmanna_magic.jpeg",
    },
    {
      title: "",
      button: "Explore Course",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-background grid-background grid-gradient">
      <Carousel slides={slideData} />
    </div>
  );
}
