"use client";
import React from "react";
import "./CarsList.styles.scss";
import { ListFilter } from "../listFilters/ListFilter";
import { useCarListController } from "./CarList.controller";
export const CarsList = () => {
  const controller = useCarListController();
  console.log(controller.cars, "aca");

  return (
    <div className="container">
      <h1 className="title">Descubrí todos los modelos</h1>

      <div className="filters_container">
        <ListFilter
          title="Filtrar por"
          options={[{ name: "Modelo", value: "model" }]}
          onSelect={(value) => console.log(value)}
        />
        <ListFilter
          title="Ordenar por"
          options={[{ name: "Modelo", value: "model" }]}
          onSelect={(value) => console.log(value)}
        />
      </div>
      {controller.cars?.map((car) => (
        <h1 key={car.id}>{car.name}</h1>
      ))}
    </div>
  );
};
