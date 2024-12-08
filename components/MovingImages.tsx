"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/placeholder.svg?height=600&width=400&text=Student+1",
  "/placeholder.svg?height=600&width=400&text=Student+2",
  "/placeholder.svg?height=600&width=400&text=Student+3",
  "/placeholder.svg?height=600&width=400&text=Student+4",
  "/placeholder.svg?height=600&width=400&text=Student+5",
];

export function MovingImages() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position <= -100) {
        position = 0;
      }
      (container as HTMLElement).style.transform = `translateX(${position}%)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full h-[600px] relative">
      <div
        ref={containerRef}
        className="flex absolute top-0 left-0 h-full"
        style={{ width: `${images.length * 100}%` }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`Student ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          学生たちの
          <br />
          輝く瞬間
        </h1>
      </div>
    </div>
  );
}
