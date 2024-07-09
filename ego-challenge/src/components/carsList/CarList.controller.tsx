import { carInterface, segments } from "@/interfaces";
import { carsService } from "@/services/cars.service";
import { ChangeEvent, useEffect, useState } from "react";

export const useCarListController = () => {
  const [cars, setCars] = useState<carInterface[]>([]);

  const getCars = async () => {
    const cars = await carsService.getCars();
    setCars(cars);
    setFilteredCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  const segments = ["SUVs", "Pickups y Comerciales", "Hatchback", "Sedan"];

  const [SelectedSegment, setSelectedSegment] = useState<segments>("");

  const orders = [
    {
      value: "",
      label: "Ninguno",
    },
    {
      value: "price-asc",
      label: "Menor precio",
    },
    {
      value: "price-desc",
      label: "Mayor precio",
    },
    {
      value: "year-asc",
      label: "Menor año",
    },
    {
      value: "year-desc",
      label: "Mayor año",
    },
  ];

  const [currentOrder, setCurrentOrder] = useState("");

  const handleChangeSegment = (value: segments) => {
    setSelectedSegment(value);
  };

  const handleChangeOrder = (value: string) => {
    setCurrentOrder(value);
  };

  const [filteredCars, setFilteredCars] = useState<carInterface[]>(cars);

  const handleFilterCars = () => {
    const filteredCars = cars
      .filter((car) =>
        SelectedSegment ? car.segment === SelectedSegment : true
      )
      .sort((a, b) => {
        if (currentOrder === "price-asc") {
          return a.price - b.price;
        } else if (currentOrder === "price-desc") {
          return b.price - a.price;
        } else if (currentOrder === "year-asc") {
          return a.year - b.year;
        } else if (currentOrder === "year-desc") {
          return b.year - a.year;
        } else {
          return 0;
        }
      });
    setFilteredCars(filteredCars);
  };

  useEffect(() => {
    handleFilterCars();
  }, [SelectedSegment, currentOrder]);

  return {
    filteredCars,
    handleChangeSegment,
    handleChangeOrder,
    segments,
    SelectedSegment,
    orders,
  };
};
