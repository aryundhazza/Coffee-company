"use client";
import Services from "@/templates/Services";
import img1 from "../../../public/WhatsApp Image 2024-08-10 at 21.58.20.jpeg";
import img2 from "../../../public/WhatsApp Image 2024-08-10 at 21.58.21 (1).jpeg";
import img3 from "../../../public/WhatsApp Image 2024-08-10 at 21.58.21.jpeg";
import img4 from "../../../public/WhatsApp Image 2024-08-10 at 21.58.22.jpeg";

export default function Product() {
  const products = [
    {
      name: "Coffee Vanila Latte",
      description: "Rp. 25.000",
      image: img1,
    },
    {
      name: "Coffee Latte Art",
      description: "Rp. 30.000",
      image: img2,
    },
    {
      name: "Brown Sugar Coffee",
      description: "Rp. 20.000",
      image: img3,
    },
    {
      name: "Chocolatos",
      description: "Rp.",
      image: img4,
    },
  ];

  return (
    <>
      <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        <div className="flex flex-wrap justify-center">
          <Services products={products} />
        </div>
      </div>
    </>
  );
}
