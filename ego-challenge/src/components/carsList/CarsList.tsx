'use client'
import React from "react";
import "./CarsList.styles.scss";
import { ListFilter } from "../listFilters/listFilter";
export const CarsList = () => {
  return (
    <div className="container">
      <h1 className="title">Descubrí todos los modelos</h1>

      <div className="filters_container">
        <ListFilter
          title="Filtrar por"
          options={[{ name: "Modelo", value: "model" }]}
          onSelect={(value) => console.log(value)}
        />
        <ListFilter  title="Ordenar por"
          options={[{ name: "Modelo", value: "model" }]}
          onSelect={(value) => console.log(value)}/>
      </div>
    </div>
  );
};
