'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientCard() {
  const clients = [
    { image: '/client1.png', name: 'Name Here', title: 'Great What an amazing experience', description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus. sit amet, consectetur adipiscing elit.' },
    { image: '/client2.png', name: 'Name Here', title: 'Great What an amazing experience', description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus. sit amet, consectetur adipiscing elit.' },
    { image: '/client3.png', name: 'Name Here', title: 'Great What an amazing experience', description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus. sit amet, consectetur adipiscing elit.' },
    { image: '/client4.png', name: 'Name Here', title: 'Great What an amazing experience', description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus. sit amet, consectetur adipiscing elit.' },
    { image: '/client1.png', name: 'Name Here', title: 'Great What an amazing experience', description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus. sit amet, consectetur adipiscing elit.' },

  ];

  const swiperRef = useRef(null);
const prevRef = useRef(null);
const nextRef = useRef(null);
  useEffect(() => {
      gsap.fromTo(
        ".card5",
        { opacity: 0, y: 150, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".card5",
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
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    });
  }}
        slidesPerView={4}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className='card5'>
            <div className="pt-[90px] pb-[30px] px-[22px] bg-white text-center border border-gray-300 rounded-[40px] flex flex-col gap-3 relative mt-[120px]  duration-300">
              <Image
                src={client.image}
                width={140}
                height={140}
                alt={`${client.name}'s profile`}
                className="absolute top-[-70px] rounded-full left-1/2 -translate-x-1/2"
              />
              <div>
                <h4 className="text-lg lg:text-2xl font-semibold text-gray-800">{client.name}</h4>
                <p className="text-[16px] lg:text-[18px] text-gray-600">{client.title}</p>
              </div>
              <p className="text-[14px] text-start text-gray-500">{client.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute z-20 top-[55%] left-[-20px] lg:left-[-40px] -translate-y-1/2 text-4xl lg:text-6xl text-[#F2F2F2] cursor-pointer"
        aria-label="Previous slide"
      >
        <MdOutlineArrowBackIos />

      </button>
      <button
        ref={nextRef}
        className="absolute z-20 top-[55%] right-[-20px] lg:right-[-40px] -translate-y-1/2 text-4xl lg:text-6xl text-[#F2F2F2] cursor-pointer"
        aria-label="Next slide"
      >
        <MdOutlineArrowForwardIos />

      </button>
    </div>
  );
}