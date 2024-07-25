import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-96 lg:h-[calc(100vh-65px)] bg-[url('/images/hero-bg-shape.png')] bg-cover">
      <div className="container mx-auto flex justify-center items-center h-full w-full">
        <Image
          src="/images/hero/hero-img.png"
          alt="hero-img"
          height={700}
          width={700}
          className="invisible lg:visible absolute -z-10 bottom-0 right-0"
        />
        <Image
          src="/images/hero/hero-img-2.png"
          alt="hero-img"
          height={300}
          width={300}
          className="invisible lg:visible absolute -z-10 bottom-1/2 right-0"
        />
        <Image
          src="/images/hero/hero-img-1.png"
          alt="hero-img"
          height={300}
          width={300}
          className="invisible lg:visible absolute -z-10 top-0 left-0"
        />
        <Image
          src="/images/hero/hero-img-3.png"
          alt="hero-img"
          height={300}
          width={300}
          className="invisible lg:visible absolute -z-10 bottom-0 left-0"
        />
        <div className="text-center lg:text-left">
          <h4 className="px-5 text-2xl lg:text-6xl font-bold tracking-wide lg:-mb-5">
            Transforming
          </h4>
          <h1 className="text-5xl lg:text-[10rem] font-bold inline-block my-4 px-5 bg-gradient-to-r from-transparent to-violet-800">
            Visions into
          </h1>
          <h2 className="px-5 text-2xl lg:text-6xl font-semibold lg:-mt-8">
            Digital Reality
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
