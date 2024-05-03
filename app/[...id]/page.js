import React from "react";
import Image from "next/image";

async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

export default async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative w-full max-w-3xl h-auto py-3'> 
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          layout="responsive" // Image'in responsive olması için layout özelliği eklendi
          width={960}
          height={400}
        />
      </div>
      <h1 className='text-4xl mt-2 py-3 px-3'>{title}</h1>
      <p className="px-10 py-6">{body}</p>
    </div>
  );
}
