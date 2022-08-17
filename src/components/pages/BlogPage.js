//Needs Styling
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const Blog = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 80px;
  gap: 45px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  h1 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 96px;
    line-height: 104px;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

const Even = styled.li`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

const Odd = styled.li`
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;

function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((r) => r.json())
      .then((data) => setBlogData(data));
  }, []);

  const renderBlog = blogData.map((value) => {
    if (value.id % 2 === 0) {
      return (
        <Even key={value.id}>
          <BlogCard data={value} />
        </Even>
      );
    } else {
      return (
        <Odd key={value.id}>
          <BlogCard data={value} />
        </Odd>
      );
    }
  });

  return (
    <Blog>
      <h1>Blog Post</h1>
      <ul>{renderBlog}</ul>
    </Blog>
  );
}

export default BlogPage;
