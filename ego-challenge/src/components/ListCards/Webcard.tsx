import { carInterface } from "@/interfaces";
import Image from "next/image";
import React from "react";
import { MobileCard } from "./MobileCard";
import "./card.styles.scss";
export const Webcard = ({
  car,
  handleCardClick,
  isSelected,
}: {
  car: carInterface;
    handleCardClick: (id: number) => void;
  isSelected: boolean;
}) => {
  return (
    <>
      <button className="card_button" onClick={() => handleCardClick(car.id)}>
        <div className="card">
          <h4 className={isSelected ? "card_title_active" : "card_title"}>{car.name}</h4>
          <h5 className="card_info">
            {car.year} | ${car.price.toLocaleString()}
          </h5>
          <div className="image_container">
            <Image
              src={car.thumbnail}
              objectFit="contain"
              layout="fill"
              alt={car.name}
            />
          </div>
        </div>
      </button>
      <MobileCard car={car} />
    </>
  );
};
