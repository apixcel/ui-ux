import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative py-10 lg:py-0">
      <div className="absolute bottom-0 left-0 w-full bg-slate-800 h-full lg:h-[580px] -z-10 bg-[url('/images/about-dot-shape.png')] bg-cover bg-right"></div>
      <div className="my-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <Title
            title="We provide best web design solution in city"
            subtitle="About our company"
            different="bg-slate-800"
          />
          <p className="text-slate-400 my-5">
            Digital marketing is the act of promoting and selling products and
            services by leveraging online marketing tactics such as social media
            marketing, search marketing, and email marketing. When you get down
            to it, digital marketing is simply marketing.
          </p>
          <Link href="/pricing">
            <Button variant="secondary">Get Started Now</Button>
          </Link>
        </div>
        <div className="relative flex-1">
          <div>
            <Image
              src="/images/about1.jpg"
              alt="About One"
              height={630}
              width={500}
              className="w-full h-full"
            />
            <Image
              src="/images/about2.jpg"
              alt="About One"
              height={280}
              width={325}
              className="invisible md:visible absolute bottom-0 -left-8 ring-8 ring-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
