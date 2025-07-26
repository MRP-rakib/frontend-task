"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectCard() {
  const projects = [
    {
      image: "/project1.png",
      property: "4321 Alton Rd, Miami Beach",
      location: "Miami, Florida",
      area: 2350,
      unit: "Square Feet",
      bedrooms: 2,
      bathrooms: 3,
      garages: 4,
      loan_amount: 328000,
      rate: 11.75,
      ltv: 84.65,
      
      unit_term: "12 Months",
      price: 345000,
    },
    {
      image: "/project1.png",
      property: " AMLI 7th Street Station",
      location: "Houston, Texas",
      area: 2350,
      unit: "Square Feet",
      bedrooms: 2,
      bathrooms: 3,
      garages: 4,
      loan_amount: 328000,
      rate: 11.75,
      ltv: 84.65,
      
      unit_term: "12 Months",
      price: 345000,
    },
    {
      image: "/project1.png",
      property: "201 South Orange Avenue",
      location: "Orlando, Florida",
      area: 2350,
      unit: "Square Feet",
      bedrooms: 2,
      bathrooms: 3,
      garages: 4,
      loan_amount: 328000,
      rate: 11.75,
      ltv: 84.65,
      
      unit_term: "12 Months",
      price: 345000,
    },
    {
      image: "/project1.png",
      property: "4321 Alton Rd, Miami Beach",
      location: "Miami, Florida",
      area: 2350,
      unit: "Square Feet",
      bedrooms: 2,
      bathrooms: 3,
      garages: 4,
      loan_amount: 328000,
      rate: 11.75,
      ltv: 84.65,
      
      unit_term: "12 Months",
      price: 345000,
    },
  ];

  const swiperRef = useRef(null);
const prevRef1 = useRef(null);
const nextRef1 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".card4",
      { opacity: 0, y: 150, rotation: 5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card4",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
  navigation={{
    prevEl: prevRef1.current,
    nextEl: nextRef1.current,
  }}
  onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.params.navigation.prevEl = prevRef1.current;
      swiper.params.navigation.nextEl = nextRef1.current;
      swiper.navigation.init();
      swiper.navigation.update();
    });
  }}
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="card4">
            <div className="bg-white cursor-pointer rounded-2xl overflow-hidden mt-[48px] relative">
                <span className="bg-[#175730] py-2 px-3 text-white absolute top-[25px] left-[24px]  rounded-[4px]">
                    For Sale
                </span>
              <div className="w-full h-[309px] overflow-hidden">
                <Image
                  src={project.image}
                  width={500}
                  height={309}
                  alt="image"
                />
              </div>
              <div className="px-8">
                <div className="mt-5 text-primary">
                  <h4 className="text-lg lg:text-[24px] font-semibold text-center">
                    {project.property}
                  </h4>
                  <p className="flex text-base lg:text-lg items-center gap-2 justify-center">
                    <FaLocationDot /> {project.location}
                  </p>
                </div>
                <hr className="mt-8.5 pb-4.5 text-[#DCDCDC] w-full h-2" />
                <div className="flex text-[14px] lg:text-base justify-between">
                  <div className="flex flex-col gap-4.5 ">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/Vector.png"
                        width={15}
                        height={15}
                        alt="icon"
                      />
                      <p>
                        {project.area} {project.unit}
                      </p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Image
                        src="/Vector1.png"
                        width={15}
                        height={15}
                        alt="icon"
                      />
                      <p>{project.bathrooms} Bathrooms </p>
                    </span>
                  </div>
                  <div className="flex flex-col gap-4.5">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/Vector2.png"
                        width={15}
                        height={15}
                        alt="icon"
                      />
                      <p>{project.garages} Garages</p>
                    </span>
                    <span className="flex items-center gap-2">
                      <Image
                        src="/Vector3.png"
                        width={15}
                        height={15}
                        alt="icon"
                      />
                      <p>{project.bathrooms} Bathrooms</p>
                    </span>
                  </div>
                </div>
                 <hr className="mt-4.5 pb-4.5 text-[#DCDCDC] w-full h-2" />
                 <div className="flex items-center text-[14px] lg:text-base justify-between">
                    <ul className="flex flex-col gap-4.5">
                    <li>Loan Amount: ${project.loan_amount}</li>
                    <li>Rate: {project.rate}%</li>
                 </ul>
                 <ul className="flex flex-col gap-4.5">
                    <li>LTV: {project.ltv}%</li>
                    <li>Term: {project.unit_term}</li>
                 </ul>
                 </div>
              </div>
                 <div className="py-4 flex items-center justify-center bg-[#0D4022] text-white text-[21px] font-bold mt-10">
               <p>${project.price}</p>
                 </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef1}
        className="absolute z-20 top-[50%] left-[-20px] lg:left-[-40px] -translate-y-1/2 text-4xl lg:text-6xl text-[#F2F2F2] cursor-pointer"
        aria-label="Previous slide"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        ref={nextRef1}
        className="absolute z0 top-[50%] right-[-20px] lg:right-[-40px] -translate-y-1/2 text-4xl lg:text-6xl text-[#F2F2F2] cursor-pointer"
        aria-label="Next slide"
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
}
