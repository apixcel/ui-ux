import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="relative h-[calc(100vh-84px)] bg-cover bg-center flex items-center justify-center">
      <div className="text-white">
        <h1 className="text-3xl lg:text-7xl font-bold text-center max-w-[1200px] mx-auto">
          An outstanding product landing page theme
        </h1>
        <p className="mt-8 max-w-2xl text-center mx-auto text-slate-300">
          DesignSolution is a really creative & modern Product Landing Page
          E-Commerce Theme with a premier appeal built with powerful Landing
          page builder.
        </p>
        <div className="mt-5 flex items-center justify-center gap-5">
          <Button variant="outline" className="text-black">
            Purchase Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
