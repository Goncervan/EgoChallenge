import { carInterface } from "@/interfaces";
import { carsService } from "@/services/cars.service";
import { useEffect, useState } from "react";

export const useCarListController = () => {
  const [cars, setCars] = useState<carInterface[]>([]);

  const getCars = async () => {
    const cars = await carsService.getCars();
    setCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

    return {
      cars
  };
};
