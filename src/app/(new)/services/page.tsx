import ServiceCard from "@/components/shared/ServiceCard";
import TopTitle from "@/components/shared/TopTitle";
import { BrainCog, CircuitBoard, Paintbrush, Smartphone } from "lucide-react";

const page = () => {
  const services = [
    {
      name: "Designing",
      icon: <Paintbrush className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/designing.jpg",
    },
    {
      name: "Development",
      icon: <CircuitBoard className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/development.jpg",
    },
    {
      name: "User Experience",
      icon: <BrainCog className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/ux.jpg",
    },
    {
      name: "Mobile Solution",
      icon: <Smartphone className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/mobile.jpg",
    },
    {
      name: "Designing",
      icon: <Paintbrush className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/designing.jpg",
    },
    {
      name: "Development",
      icon: <CircuitBoard className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/development.jpg",
    },
    {
      name: "User Experience",
      icon: <BrainCog className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/ux.jpg",
    },
    {
      name: "Mobile Solution",
      icon: <Smartphone className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/mobile.jpg",
    },
    {
      name: "Designing",
      icon: <Paintbrush className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/designing.jpg",
    },
    {
      name: "Development",
      icon: <CircuitBoard className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/development.jpg",
    },
    {
      name: "User Experience",
      icon: <BrainCog className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/ux.jpg",
    },
    {
      name: "Mobile Solution",
      icon: <Smartphone className="h-[36px] w-[36px]" />,
      thumbnail: "/images/services/mobile.jpg",
    },
  ];

  return (
    <>
      <TopTitle title="Services" />
      <div className="container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </>
  );
};

export default page;
