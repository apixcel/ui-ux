import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceCard = ({ service, idx }: any) => {
  return (
    <div key={idx} className="w-full group">
      <h2 className="mb-1 p-3 text-2xl font-bold text-slate-700 group-hover:text-white duration-200">
        {service.name}
      </h2>
      <div className="relative h-[400px]">
        <Image
          src={service.thumbnail}
          alt={service.name}
          height={1600}
          width={400}
          className="w-full h-full object-cover object-center rounded-lg"
        />
        <div className="absolute z-20 scale-0 group-hover:scale-100 duration-150 ease-in-out left-5 top-5 bg-white text-violet-600 rounded-md p-5 flex items-center justify-center">
          {service.icon}
        </div>
        <div className="scale-0 group-hover:scale-100 duration-150 ease-in-out absolute z-20 bottom-5 w-full flex items-center justify-center">
          <Link href="/services/web-development">
            <Button
              variant="secondary"
              className="bg-violet-600 hover:bg-violet-700 text-white"
            >
              Read More
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/overlay.png')] z-10 opacity-0 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
