import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <Link href="/">
      <div className="bg-white hover:shadow-lg duration-150 rounded-lg relative p-5">
        <div>
          <Image
            src="/images/img11.jpg"
            alt=""
            height={400}
            width={560}
            className="rounded-md object-cover object-top"
          />
        </div>
        <h1 className="text-xl font-bold text-center pt-5">Project name</h1>
      </div>
    </Link>
  );
};

export default Card;
