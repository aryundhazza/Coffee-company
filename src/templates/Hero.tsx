'use client'
import vid1 from "../../public/WhatsApp Video 2024-08-10 at 21.34.23.mp4";

const Hero = () => {

  return (
    <div className="justify-center w-full">
      <video
        autoPlay
        loop
        muted
        className="shadow-sm shadow-orange-400 "
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

    </div>


  );
};

export { Hero };