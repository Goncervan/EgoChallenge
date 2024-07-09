"use client";
import React from "react";
import "./CarsList.styles.scss";
import { useCarListController } from "./CarList.controller";
import { Card } from "../carCard/Card";
import { segments } from "@/interfaces";
import { SegmentSelector } from "../segmentSelector/SegmentSelector";
import { OrderSelector } from "../orderSelector/OrderSelector";
export const CarsList = () => {
  const controller = useCarListController();

  return (
    <div className="container">
      <h1 className="title">Descubrí todos los modelos</h1>
      <div className="filters_container">
        {/* <select
          onChange={(e) =>
            controller.handleChangeSegment(e.target.value as segments)
          }
        >
          <option value="">Todos</option>
          <option value="SUVs">SUVs</option>
          <option value="Pickups y Comerciales">Pickups y Comerciales</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
        </select> */}
        <SegmentSelector
          options={controller.segments}
          handleSelectSegment={controller.handleChangeSegment}
          selectedOption={controller.SelectedSegment}
        />
        <OrderSelector
          handleSelectOrder={controller.handleChangeOrder}
          options={controller.orders}
        />
      </div>
      <div className="cars_container">
        {controller.filteredCars?.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};
