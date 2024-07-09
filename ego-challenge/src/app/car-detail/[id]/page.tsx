"use client";
import React from "react";
import { useCarDetailController } from "./carDetail.controller";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarDetail } from "@/components/carDetail/CarDetail";
import { Navbar } from "@/components/navbar/navbar";
const Page = () => {
  const controller = useCarDetailController();
  return (
    <>
      <Navbar />
      <CarDetail carDetail={controller.carDetail} />
    </>
  );
};

export default Page;
