import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((r) => r.json())
      .then((data) => setBlogData(data));
  }, []);

  const renderBlog = blogData.map((value) => (
    <li key={value.id}>
      <BlogCard data={value} />
    </li>
  ));

  return (
    <section className="blog">
      <h1>Blog Post</h1>
      <ul>{renderBlog}</ul>
    </section>
  );
}

export default BlogPage;
