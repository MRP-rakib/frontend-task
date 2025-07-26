'use client'
import Image from "next/image";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function ResourceCard({ image }) {
    useEffect(() => {
      gsap.fromTo(
        ".card7",
        { opacity: 0, y: 150, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".card7",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);
  return (
    <div className="p-8 shadow-lg  rounded-2xl card7">
      <div className="w-full h-[318px] mx-auto overflow-hidden">
        <Image src={image} width={800} height={318} alt="icon" />
      </div>
      <p className="pt-8 text-[16px] lg:text-lg italic text-[#343434]">
        May 9, 2024
      </p>
      <div className="py-7 flex flex-col gap-[15px]">
        <h4 className="text-[20px] lg:text-[28px] font-bold text-primary">
          Investor’s Guide To Real Estate Wholetailing
        </h4>
        <p>
          Real estate wholetailing investment technique that combines the best
          aspects of two of the most common strategies - flipping houses and
          wholesaling. With wholetailing, you can earn large.
        </p>
      </div>
    </div>
  );
}

export default ResourceCard;
