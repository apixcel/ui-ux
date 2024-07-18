import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const BlogCard = ({ blog, idx }: any) => {
  return (
    <div
      key={idx}
      className="bg-slate-700 hover:border-4 border-violet-600 p-6 flex flex-col lg:flex-row items-center gap-5 duration-150 mb-5"
    >
      <div className="flex-1 h-[300px]">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          height={300}
          width={900}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-5 uppercase">
          <p>{blog.date}</p>
          <p>POSTED BY: {blog.author}</p>
        </div>
        <h2 className="text-2xl lg:text-5xl font-bold">{blog.title}</h2>
        <div>
          <Link href="/blog/1234">
            <Button variant="secondary">Red More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
