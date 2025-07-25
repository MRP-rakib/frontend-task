import Container from "@/ui/Container";
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import Btn from "@/ui/Btn";

function ProjectSection() {
  return (
    <div className="pt-[300px] lg:pt-[466px] pb-10 lg:pb-[120px]">
      <Container>
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-2xl lg:text-[56px]  font-extrabold uppercase">
            Past Projects
          </h3>
          <p className="text-[16px] lg:text-[32px]">A Proven Track Record Funding Projects Like These</p>
        </div>
        <div>
          <ProjectCard/>
        </div>
        <div className=" flex items-center justify-center pt-6 lg:pt-[48px]">
          <Btn btnText='Get Terms For Your Project' className="bg-white" className2="bg-primary text-white"/>
        </div>
      </Container>
    </div>
  );
}

export default ProjectSection;
