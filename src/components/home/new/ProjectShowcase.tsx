import ProjectCard from "@/components/shared/ProjectCard";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProjectShowcase = () => {
  const projects = [
    {
      number: "01",
      subtitle: "UI/UX Design",
      title: "Marketing Solution For Brand",
      description:
        "Proactively restore professional data and multimedia based collaboration idea sharing. Credibly top line and cross platform manufactured products. Dramatically facilitate enabled value with seamless growth strategies. Assertively innovate holistic materials rather than customized users. Intrinsically monetize client centric meta services before superior testing procedures.",
      image: "/images/project-1.png",
    },
    {
      number: "02",
      subtitle: "Digital Marketing",
      title: "Sass Mobile Dashboard Design",
      description:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour,",
      image: "/images/project-1.png",
    },
    {
      number: "03",
      subtitle: "Application",
      title: "App Design and Development",
      description:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour,",
      image: "/images/project-1.png",
    },
    {
      number: "04",
      subtitle: "Software Development",
      title: "Medical Website Development",
      description:
        "There are many variations of passages of is psum the majority have suffered alteration in some we by injected humour,",
      image: "/images/project-1.png",
    },
  ];

  return (
    <div className="container mx-auto my-20 ">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-5 py-10 border-b border-b-slate-700">
        <Title
          title="Let's Look Our Recent Project Gallery"
          subtitle="Project Showcase"
        />
        <div>
          <Link href="/project-showcase">
            <Button variant="secondary">View More Projects</Button>
          </Link>
        </div>
      </div>
      <div>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
