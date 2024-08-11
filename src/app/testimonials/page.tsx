"use client";
import Testi from "@/templates/Testimonials";

export default function Testimonials() {
  const testi = [
    {
      name: "Jessy J",
      description: "Pelayanan nya sangat bisa diandalkan!",
      image:
        "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Saskia S",
      description: "Kopinya sangat enak dan terasa",
      image:
        "https://images.pexels.com/photos/4626343/pexels-photo-4626343.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Rhazzid",
      description: "Pelayanan yang sangat baik!",
      image:
        "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Suardi",
      description: "REKOMENDED!",
      image:
        "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <>
      <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        <div className="flex flex-wrap justify-center">
          <Testi testimonials={testi} />
        </div>
      </div>
    </>
  );
}
