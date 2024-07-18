import Image from "next/image";
import Link from "next/link";

const CardDark = () => {
  return (
    <Link href="/">
      <div className="bg-slate-800 hover:shadow-lg duration-150 rounded-lg relative p-5">
        <div>
          <Image
            src="/images/img11.jpg"
            alt=""
            height={400}
            width={560}
            className="rounded-md object-cover object-top"
          />
        </div>
        <div className="flex gap-4 items-center py-5">
          <div className="h-[50px] w-[50px] bg-violet-600 text-white flex items-center justify-center rounded-full">
            <span className="font-bold text-xl">01</span>
          </div>
          <h1 className="text-2xl font-bold text-center">Project name</h1>
        </div>
      </div>
    </Link>
  );
};

export default CardDark;
