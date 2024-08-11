"use client";

import { Hero } from "@/templates/Hero";
import { AboutUs } from "@/templates/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        <AboutUs />
      </div>
    </>
  );
}
