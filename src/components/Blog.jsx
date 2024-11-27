import React from "react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "November 15, 2024",
      description:
        "React Hooks introduced a powerful way to manage state and side effects in functional components. Learn how to use them effectively.",
      image: "https://via.placeholder.com/300",
      readMore: "#",
    },
    {
      id: 2,
      title: "CSS Tips for Responsive Design",
      date: "November 10, 2024",
      description:
        "Craft responsive layouts that look great on any device using CSS techniques like Flexbox, Grid, and Media Queries.",
      image: "https://via.placeholder.com/300",
      readMore: "#",
    },
    {
      id: 3,
      title: "Mastering JavaScript ES6 Features",
      date: "November 5, 2024",
      description:
        "Explore the essential ES6 features like arrow functions, destructuring, and template literals to write cleaner code.",
      image: "https://via.placeholder.com/300",
      readMore: "#",
    },
  ];

  return (
    <div name="Blog" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-green-500 w-fit">
          Blog
        </h1>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest trends and insights in web development.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(({ id, title, date, description, image, readMore }) => (
          <div
            key={id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-gray-600 mt-3">{description}</p>
              <a
                href={readMore}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-5 bg-green-600 hover:bg-green-700 text-white font-bold text-center py-2 px-4 rounded transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
