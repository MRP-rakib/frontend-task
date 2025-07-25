"use client";
import Btn from "@/ui/Btn";
import Container from "@/ui/Container";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function GetStartSection() {
  const leftText1 = useRef(null);
  const rightText1 = useRef(null);

  useEffect(() => {
    gsap.from(leftText1.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(rightText1.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);
  return (
    <div className="relative bg-[url('/Frame2.png')] bg-cover md:bg-center lg:min-h-screen w-full">
      <Container>
        <div className="max-w-[400px] lg:max-w-[736px] md:max-w-[500px] py-[100px] lg:py-[185px] flex flex-col gap-5 lg:gap-15">
          <div className="flex flex-col gap-5">
            <h1
              ref={rightText1}
              className="font-black text-[24px] lg:text-5xl xl:text-6xl text-primary uppercase tracking-tighter"
            >
              Ready To Get Started
            </h1>
            <p ref={leftText1} className="text-base lg:text-[24px] font-semibold">
              With Ridge Street, obtaining a private mortgage loan is easier
              than you think! You can get pre-approved online and a Term Sheet
              that Meet’s your needs will be sent to you within the hour.
            </p>
          </div>

          <div>
            <Btn btnText="Get Pre-Approved Online" className3="text-white" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GetStartSection;
