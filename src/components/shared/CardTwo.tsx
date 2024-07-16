import Image from "next/image";
import Link from "next/link";

const CardTwo = () => {
  return (
    <Link href="/">
      <div className="bg-white hover:shadow-lg duration-150 rounded-lg relative p-5">
        <div>
          <Image
            src="/images/img22.jpg"
            alt=""
            height={400}
            width={560}
            className="rounded-md object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};

export default CardTwo;
