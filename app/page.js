import React from "react";
import BlogCard from "../components/BlogCard";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Page() {
  const { posts } = await getPosts();

  return (
    <div className=''>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}