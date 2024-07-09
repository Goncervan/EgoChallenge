"use client";
import React from "react";
import "./CarsList.styles.scss";
import { useCarListController } from "./CarList.controller";
import { segments } from "@/interfaces";
import { SegmentSelector } from "../segmentSelector/SegmentSelector";
import { OrderSelector } from "../orderSelector/OrderSelector";
import { Webcard } from "../ListCards/Webcard";
import { Navbar } from "../navbar/navbar";
export const CarsList = () => {
  const controller = useCarListController();

  return (
    <>
      <Navbar activeCarId={controller.activeCarId} />
      <div className="container">
        <h1 className="title">Descubrí todos los modelos</h1>
        <div className="filters_container">
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
            <Webcard
              key={car.id}
              car={car}
              handleCardClick={(id) => controller.setActiveCarId(id)}
              isSelected={controller.activeCarId === car.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
