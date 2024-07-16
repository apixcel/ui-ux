import Link from "next/link";
import Card from "../shared/Card";
import { Button } from "../ui/button";

const Demos = () => {
  return (
    <div className="bg-[#f1f3f6]">
      <div className="container mx-auto py-16">
        <h2 className="text-5xl md:text-7xl font-bold text-center text-slate-700 mb-5">
          50+
        </h2>
        <h3 className="text-2xl md:text-5xl font-bold text-center text-slate-800">
          <span className="text-violet-500 font-extrabold">Unique</span>{" "}
          prebuilt demos
        </h3>
        <p className="text-center mt-3">and more demos comingsoon</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link href="/features">
            <Button>Show all</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demos;
