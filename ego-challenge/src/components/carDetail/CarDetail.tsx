import React from "react";
import { FeatureCard } from "../featureCard/FeatureCard";
import { HighlightCard } from "../highlightCard/HighlightCard";
import Image from "next/image";
import { carDetailInterface } from "@/interfaces";
import { stripHtmlTags } from "@/utils/utils";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import "./CarDetail.styles.scss";
export const CarDetail = ({ carDetail }: { carDetail: carDetailInterface }) => {
  const plugins = [new Arrow(), new Pagination()];

  return (
    <div className="container">
      <div className="image_container">
        <Image
          src={carDetail?.photo}
          alt={carDetail?.title}
          fill
          objectFit="contain"
        />
      </div>
      <h1 className="name">{carDetail?.name}</h1>
      <h2 className="title">{carDetail?.title}</h2>
      <p className="description">{stripHtmlTags(carDetail?.description)}</p>
      <div className="slider_container">
        <Flicking
          hideBeforeInit
          align="next"
          horizontal
          adaptive
          plugins={plugins}
        >
          {carDetail?.model_features.map((feature) => (
            <div className="feature_container" key={feature.name}>
              <div className="image_container">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  objectFit="contain"
                  className="image"
                  fill
                />
              </div>
              <h3 className="feature_name">{feature.name}</h3>
              <p className="description">{feature.description}</p>
            </div>
          ))}
          <ViewportSlot>
            <span className="flicking-arrow-prev"></span>
            <span className="flicking-arrow-next"></span>
            <div className="flicking-pagination"></div>
          </ViewportSlot>
        </Flicking>
      </div>
      {carDetail?.model_highlights.map((highlight) => (
        <HighlightCard
          key={highlight.title}
          title={highlight.title}
          content={stripHtmlTags(highlight.content)}
          image={highlight.image}
        />
      ))}
    </div>
  );
};
