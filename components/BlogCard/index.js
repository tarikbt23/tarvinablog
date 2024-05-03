import React from "react";
import Link from "next/link";
import Image from "next/image";

function BlogCard({ title, body, id, maxLength = 200 }) { // Eklenen varsayılan maxLength propu

  const kisaMetin = body.length > maxLength
    ? `${body.substring(0, maxLength - 3)}...` // Daha fazla esneklik için substring kullanın
    : body;

  return (
    <Link href={`/${id}`} className="flex items-center px-1 py-3 md:px-12 py-4 mx-14 my-4 lg:px-16 py-5 mx-16 my-5">
      <div className="flex-shrink-0 relative mr-4">
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Kartı Görseli"
          width={96}
          height={96}
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{kisaMetin}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
