"use client";
import Btn from "@/ui/Btn";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LoanCard({
  cardTitle,
  cardDes,
  cardList1,
  cardList2,
  cardList3,
  cardList4,
  cardIcon,
}) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 150, rotation: 5 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="bg-white group hover:bg-primary border card  overflow-hidden relative rounded-[20px] flex items-center justify-between flex-col p-10 cursor-pointer transition-all duration-300">
      <div className="w-full h-[50px] bg-primary  absolute  -top-[30px] -rotate-[5deg] -left-2"></div>
      <div className="w-full h-[50px] bg-primary  absolute  -bottom-[30px] -rotate-[5deg] -right-2"></div>
      <div className="w-[120px] h-[120px] rounded-[20px] bg-primary group-hover:bg-white flex items-center justify-center">
        {cardIcon}
      </div>
      <div className="mt-5 text-[14px] lg:text-[16px] text-primary group-hover:text-white">
        <div className="text-center">
          <h4 className="text-lg lg:text-[32px]  font-semibold ">{cardTitle}</h4>
          <p className="lg:text-base text-[14px]">{cardDes}</p>
        </div>
        <ul className="font-medium text-[14px] lg:text-base flex flex-col gap-3.5 mt-5">
          <li className="flex items-center gap-2">
            <span className="">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>{cardList1}</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>{cardList2}</p>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>{cardList3}</p>
          </li>
          <li className="flex items-center gap-2">
            <span className="">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className=" stroke-primary group-hover:stroke-white"
                  d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>{cardList4}</p>
          </li>
        </ul>
        <div className="flex items-center gap-2 mt-5.5">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" stroke-primary group-hover:stroke-white"
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                className=" stroke-primary group-hover:stroke-white"
                d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" stroke-primary group-hover:stroke-white"
                d="M11.9922 8H12.0012"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="underline cursor-pointer">Learn More</p>
        </div>
        <div className="mt-5 mb-10">
          <Btn btnText="Get Approved Online" className3="text-white" />
        </div>
      </div>
    </div>
  );
}

export default LoanCard;
