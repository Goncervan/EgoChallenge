"use client";
import React from "react";
import "./CarsList.styles.scss";
import { useCarListController } from "./CarList.controller";
import { Card } from "../carCard/Card";
import { segments } from "@/interfaces";
import { SegmentSelector } from "../segmentSelector/SegmentSelector";
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
        <select
          onChange={(e) =>
            controller.handleChangeOrder(e.target.value as string)
          }
        >
          <option value="">Ordenar por</option>
          <option value="price-asc">Menor precio</option>
          <option value="price-desc">Mayor precio</option>
          <option value="year-asc">Menor año</option>
          <option value="year-desc">Mayor año</option>
        </select>
      </div>
      <div className="cars_container">
        {controller.filteredCars?.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};
