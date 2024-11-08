import React from 'react';
import Image from 'next/image'; 
import style from './blogPreview.module.css'; 
import blogs, { Blog } from "@/static/blogData";

export default function BlogPreview({ title, description, image, date }: Blog) {
  return (
    <div className={style.previewContainer}>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={500} height={300} />  {}
      <p>{description}</p>
      <p><small>Posted on: {date}</small></p>
    </div>
  );
}