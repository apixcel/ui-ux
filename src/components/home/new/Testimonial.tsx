import Title from "@/components/shared/Title";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      img: "/images/testi-author-1.png",
      name: "Daniel Joseph",
      designation: "Writer",
      opinion:
        "They are really amazing to server the quality products. I am really happy.",
    },
    {
      img: "/images/testi-author-1.png",
      name: "Daniel Joseph",
      designation: "Writer",
      opinion:
        "They are really amazing to server the quality products. I am really happy.",
    },
    {
      img: "/images/testi-author-1.png",
      name: "Daniel Joseph",
      designation: "Writer",
      opinion:
        "They are really amazing to server the quality products. I am really happy.",
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <Title
        title="What our customers say about us"
        subtitle="Testimonial"
        isCenter
      />
      <div className="my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="relative bg-slate-700 p-7 pt-24 mb-20 sm:mb-0"
          >
            <div className="h-[150px] w-[150px] absolute left-1/2 -translate-x-1/2 -top-[80px]">
              <Image
                src={review.img}
                alt={review.name}
                height={500}
                width={500}
                className="w-full h-full rounded-full object-cover ring-4 ring-slate-900"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <h5 className="text-sm uppercase font-bold text-violet-400">
                {review.designation}
              </h5>
              <p className="text-slate-400">{review.opinion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
