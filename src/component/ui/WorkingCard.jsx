'use client'
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WorkingCard({image,title,des}) {
    useEffect(() => {
      gsap.fromTo(
        ".card6",
        { opacity: 0, y: 150, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".card6",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);
  return (
    <div className="pt-[46px] card6 pb-[50px] border border-[rgba(0,0,0,0.2)] rounded-s-xl flex flex-col items-center justify-center">
      <div className="w-[138px] h-[103px] bg-[#EEFFF5] -skew-x-12 flex items-center justify-center rounded-[3px]">
        <div className="w-[91px] h-[64px] bg-white border  flex items-center justify-center">
          <Image src={image} width={48} height={48} alt="icon" />
        </div>
      </div>
      <div className="text-[#175730] text-center">
        <h5 className="text-lg lg:text-2xl">{title}</h5>
        <p className="text-base lg:text-[18px] pt-[15px] pb-[25px]">
         {des}
        </p>
        <div className="flex items-center justify-center">
          <button className="py-3 px-5 lg:py-5 lg:px-8 bg-transparent hover:bg-primary transition-all duration-300 border border-primary rounded-xl text-[15px] text-primary hover:text-white flex items-center gap-3 cursor-pointer">
            Find a home <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkingCard;
