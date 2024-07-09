import { carInterface } from "@/interfaces";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export const MobileCard = ({ car }: { car: carInterface }) => {
  return (
    <Link href={`/car-detail/${car.id}`} className="link">
      <div className="card">
        <h4 className="card_title">{car.name}</h4>
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
    </Link>
  );
};
