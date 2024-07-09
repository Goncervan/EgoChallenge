import Image from "next/image";
import React from "react";
import "./HighlightCard.styles.scss";
export const HighlightCard = ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) => {
  return (
    <div className="highlight_container">
      <div className="highlight_image_container">
        <Image src={image} alt={title} fill className="highlight_image" />
      </div>
      <div>
        <h3 className="highlight_title">{title}</h3>
        <p className="highlight_content">{content}</p>
      </div>
    </div>
  );
};
