import Image from "next/image";
import { Button } from "../ui/button";

const ProjectCard = ({ project, idx }: any) => {
  return (
    <div key={idx} className="border-b border-b-slate-700 py-5">
      <div className="flex items-center gap-4">
        <div>
          <div className="h-[75px] w-[75px] bg-violet-600 text-white flex items-center justify-center rounded-full">
            <span className="font-bold text-xl">{project.number}</span>
          </div>
        </div>
        <div>
          <h4 className="text-violet-600 uppercase">{project.subtitle}</h4>
          <h2 className="text-2xl lg:text-5xl font-bold">{project.title}</h2>
        </div>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
        <div className="flex-1">
          <p className="text-slate-500 mb-5">{project.description}</p>
          <Button variant="secondary">View Details</Button>
        </div>
        <div className="flex-1">
          <Image src={project.image} alt="Project" height={500} width={800} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
