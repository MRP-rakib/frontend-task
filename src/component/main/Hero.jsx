'use client'
import Btn from "@/ui/Btn";
import Container from "@/ui/Container";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Hero() {
    const leftText = useRef(null);
  const rightText = useRef(null);

  useEffect(() => {
    gsap.from(leftText.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(rightText.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);
  return (
    <div className="relative bg-[url('/Frame8.png')] bg-cover md:bg-center lg:min-h-screen w-full">
      <Container>
        
        <div className="max-w-[400px] lg:max-w-[736px] md:max-w-[500px] py-[100px] lg:py-[300px] flex flex-col gap-5 lg:gap-15">
        <div className="flex flex-col gap-5">
          <h1 ref={rightText} className="font-black text-[24px] lg:text-4xl xl:text-6xl text-primary uppercase tracking-tighter">Florida and Texas Hard Money Lenders</h1>
          <p ref={leftText} className="text-[16px] lg:text-[32px] font-semibold">Fast Closing Fix and Flip and Rental Loans For Your Investment Properties.</p>
        </div>
        
           <div>
            <Btn btnText='Get Approved Online' className3="text-white"/>
           </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
