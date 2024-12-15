import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "November 15, 2024",
      content:
        "React Hooks introduced a powerful way to manage state and side effects in functional components. This article will help you dive deep into useState, useEffect, and other hooks.",
    },
    {
      id: 2,
      title: "CSS Tips for Responsive Design",
      date: "November 10, 2024",
      content:
        "Learn how to use Flexbox, Grid, and Media Queries to build responsive layouts that adapt seamlessly to any screen size.",
    },
    {
      id: 3,
      title: "Mastering JavaScript ES6 Features",
      date: "November 5, 2024",
      content:
        "JavaScript ES6 introduced many powerful features like arrow functions, destructuring, template literals, and more. Master them to write cleaner and more efficient code.",
    },
  ];

  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <p className="text-center mt-20 text-red-500">Post not found!</p>;
  }

  return (
    <div className="max-w-screen-lg container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-4xl font-extrabold text-gray-800">{blogPost.title}</h1>
      <p className="text-sm text-gray-500">{blogPost.date}</p>
      <p className="text-gray-600 mt-5">{blogPost.content}</p>
    </div>
  );
}

export default BlogPost;
