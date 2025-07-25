'use client'
import Image from 'next/image'
import React from 'react'
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function WhyChooseUsCard({image,cardTitle,cartDec}) {
    useEffect(() => {
    gsap.fromTo(
      ".card3",
      { opacity: 0, y: 150, rotation: 5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card3",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className='pt-[46px] border card3 border-[rgba(0,0,0,0.3)] relative cursor-pointer'>
       <div className='px-[41px] flex flex-col gap-3 lg:gap-5 pb-[208]'>
        <h3 className='text-lg lg:text-[28px]'>{cardTitle}</h3>
        <p className='text-[14px] lg:text-lg'>{cartDec}</p>
       </div>
       <div className='w-[151px] h-[164px] -skew-x-12 bg-[#EEFFF5] absolute bottom-0 left-0 transform origin-bottom-left mt-[57px]
            flex items-center justify-center'>
        <Image src={image} width={80} height={80} alt='image'/>

       </div>
    </div>
  )
}

export default WhyChooseUsCard