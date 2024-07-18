import BlogCard from "@/components/shared/BlogCard";
import TopTitle from "@/components/shared/TopTitle";

const page = () => {
  const blogs = [
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
    {
      title: "How Agencies Puts Your Audience First",
      date: "July 18, 2024",
      author: "Riajul",
      thumbnail: "/images/blog-1.jpg",
    },
  ];

  return (
    <div>
      <TopTitle title="Blog" />
      <div className="container mx-auto">
        <div className="my-20">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
