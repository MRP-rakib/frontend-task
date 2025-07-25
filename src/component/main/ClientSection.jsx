import Container from "@/ui/Container";
import React from "react";
import ClientCard from "../ui/ClientCard";
import Btn from "@/ui/Btn";

function ClientSection() {
  return (
    <div className="absolute w-full -top-[450px] lg:-top-[375px]">
      <h3 className="text-[22px] lg:text-[56px] font-extrabold text-primary text-center uppercase">
        Ridge Street Client Reviews
      </h3>
      <Container>
         <ClientCard/>
        <div className="flex items-center justify-center mt-6 lg:mt-[48px]">
            <Btn btnText='Get Approved Online' className="bg-white" className2="bg-primary text-white" className3="text-primary"/>
        </div>
      </Container>
    </div>
  );
}

export default ClientSection;
