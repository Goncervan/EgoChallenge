import Image from "next/image";
import React from "react";
import './FeatureCard.styles.scss'
export const FeatureCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="container">
      <div className="image_container">
        <Image src={image} alt={name} layout="fill" objectFit="" className="image"/>
      </div>
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
    </div>
  );
};
