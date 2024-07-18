import Title from "@/components/shared/Title";
import { Cog, Cpu, LandPlot, PackageSearch } from "lucide-react";
import React from "react";

const WorkProcess = () => {
  const workPorcesses = [
    {
      img: <Cpu className="h-[56px] w-[56px]" />,
      title: "Project Processing",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
    },
    {
      img: <Cog className="h-[56px] w-[56px]" />,
      title: "High Quality Products",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
    },
    {
      img: <PackageSearch className="h-[56px] w-[56px]" />,
      title: "Huge Choice Products",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
    },
    {
      img: <LandPlot className="h-[56px] w-[56px]" />,
      title: "Quality Finished",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
    },
  ];

  return (
    <div className="container mx-auto py-20">
      <Title
        title="Follow 4 Easy Work Steps"
        subtitle="Work Process"
        isCenter
      />
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {workPorcesses.map((process, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 items-center justify-center text-center"
          >
            <div className="h-[100px] w-[100px] rounded-full bg-slate-700 flex items-center justify-center hover:animate-pulse duration-100">
              {process.img}
            </div>
            <h4 className="text-xl font-bold">{process.title}</h4>
            <p className="text-slate-400">{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
