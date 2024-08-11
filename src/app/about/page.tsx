"use client";
import { AboutUs } from "@/templates/AboutUs";
import { useState } from "react";

export default function About() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      <AboutUs />
    </div>
  );
}
