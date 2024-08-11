"use client";
import { useEffect, useState } from "react";
import Teams from "@/templates/Teams";

export default function TeamsPage() {
  const [data, setData] = useState([]);
  interface name {
    title: string;
    first: string;
    last: string;
  }
  interface picture {
    large: string;
  }
  interface description {
    description: string;
  }
  interface timezone {
    timezone: description;
  }

  interface Res {
    name: name;
    picture: picture;
    location: timezone;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error: any) {}
    };

    fetchData();
  }, []);
  return (
    <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      <div className="flex flex-wrap justify-center">
        {data.map((res: Res, index) => {
          return (
            <Teams
              key={index}
              name={`${res.name.title}. ${res.name.first} ${res.name.last}`}
              img={res.picture.large}
              timezone={res.location.timezone.description}
            />
          );
        })}
      </div>
    </div>
  );
}
