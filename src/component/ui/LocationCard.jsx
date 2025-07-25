'use client'
import Btn2 from '@/ui/Btn2'
import Image from 'next/image'
import React from 'react'
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function LocationCard({image,location}) {
     useEffect(() => {
    gsap.fromTo(
      ".card2",
      { opacity: 0, y: 150, rotation: 5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card2",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    
    <div className='relative card2 inline max-w-[440] cursor-pointer'>
        <Image src={image} width={440} height={560} alt='image'/>
         <div className=' absolute top-1/2 left-1/2 -translate-1/2 w-full px-7 flex flex-col items-center gap-5 lg:gap-10'>
            <div className='text-white text-center flex flex-col gap-5'>
            <h2 className='text-2xl lg:text-[56px] font-extrabold '>{location}</h2>
            <p className='text-base lg:text-2xl font-medium text-nowrap'>Hard Money Loans | DSCR Loans</p>
        </div>
<div>
    <Btn2 btnText='View All Locations'/>
</div>
         </div>
    </div>

  )
}

export default LocationCard