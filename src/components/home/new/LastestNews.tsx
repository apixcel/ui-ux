import BlogCard from "@/components/shared/BlogCard";
import Title from "@/components/shared/Title";
import React from "react";

const LastestNews = () => {
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
  ];

  return (
    <div className="container mx-auto">
      <Title
        title="Our latest news & articles from the blog"
        subtitle="News & Latest Updates"
        isCenter
      />
      <div className="my-20">
        {blogs.map((blog, idx) => (
          <BlogCard blog={blog} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default LastestNews;
