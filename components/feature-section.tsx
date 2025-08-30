"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    
    {
      title: "Fashion Designing",
      button: "Coming Soon",
      src: "https://i.postimg.cc/Qx0XFZv1/Fashion-Design-Landing.webp",
    },
    {
      title: "UI UX Design",
      button: "Explore Course",
      src: "https://i.postimg.cc/nL1TJTXF/Ui-Landing.webp",
    },
    {
      title: "Video Editing",
      button: "Coming Soon",
      src: "https://i.postimg.cc/gJQgSjw8/Video-Editing-Course-Perinthalmanna-magic.jpg",
    },
    {
      title: "",
      button: "Coming Soon",
      src: "https://i.postimg.cc/1zZPTRFx/coming-soon.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-background grid-background grid-gradient">
      <Carousel slides={slideData} />
    </div>
  );
}
