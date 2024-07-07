import React from "react";
import Slider from "react-slick";
import { FeatureCard } from "../featureCard/FeatureCard";
import { HighlightCard } from "../highlightCard/HighlightCard";
import Image from "next/image";
import { carDetailInterface } from "@/interfaces";
import { stripHtmlTags } from "@/utils/utils";
import "./CarDetail.styles.scss";
export const CarDetail = ({ carDetail }: { carDetail: carDetailInterface }) => {
  return (
    <div className="container">
      <div className="image_container">
        <Image
          src={carDetail?.photo}
          alt={carDetail?.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="name">{carDetail?.name}</h1>
      <h2 className="title">{carDetail?.title}</h2>
      <p className="description">{stripHtmlTags(carDetail?.description)}</p>
      {/* <div className="slider_container"> */}
      {/* <Slider arrows={true} autoplay autoplaySpeed={2000} > */}
        {carDetail?.model_features.map((feature) => (
          <FeatureCard
          key={feature.name}
          name={feature.name}
          description={feature.description}
          image={feature.image}
          />
        ))}
      {/* </Slider> */}
      {/* </div> */}
      {/* {carDetail?.model_highlights.map((highlight) => (
        <HighlightCard
          key={highlight.name}
          title={highlight.name}
          content={stripHtmlTags(highlight.content)}
          image={highlight.image}
        />
      ))} */}
    </div>
  );
};
