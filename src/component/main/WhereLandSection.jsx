import Container from "@/ui/Container";
import Image from "next/image";
import React from "react";
import LocationCard from "../ui/LocationCard";
import Btn from "@/ui/Btn";

function WhereLandSection() {
  return (
    <div className="bg-primary py-10  lg:py-[120px]">
      <Container>
        <div className="text-white flex flex-col gap-5 max-w-[850px]">
          <h2 className="text-2xl lg:text-[56px]  font-extrabold uppercase">
            Where We Lend
          </h2>
          <p className="text-base lg:text-2xl">
            Ridge Street provides hard money loans to real estate investors in
            35 states. We focus our efforts in{" "}
            <span className="font-bold cursor-pointer">Texas</span> and{" "}
            <span className="font-bold cursor-pointer">Florida</span>.
          </p>
        </div>
        <div className="flex items-center justify-center my-20">
          <Image src='/Group.png' width={1000} height={600} alt="image"/>
        </div>
        <div className=" flex flex-col md:flex-row gap-15 xl:gap-[200px] items-center justify-center">
          <LocationCard image='/Group5.png' location='Texas'/>
          <LocationCard image='/Frame21.png' location='Florida'/>
        </div>
        <div className="flex items-center justify-center mt-20">
          <Btn btnText='View All Locations' className="bg-white" className2="bg-primary text-white"/>
        </div>
      </Container>
    </div>
  );
}

export default WhereLandSection;
