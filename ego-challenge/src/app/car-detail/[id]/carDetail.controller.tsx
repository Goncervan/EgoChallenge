import { carDetailInterface } from "@/interfaces";
import { carsService } from "@/services/cars.service";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";

export const useCarDetailController = () => {
  const { id } = useParams();

  const [carDetail, setCardDetail] = useState<carDetailInterface>({
    id: 0,
    name: "",
    year: 0,
    price: 0,
    thumbnail: "",
    description: "",
    model_features: [],
    model_highlights: [],
    photo: "",
    segment: "",
    title: "",
  });

  const getCarDetail = async (id: string) => {
    const data = await carsService.getCarDetails(id);
    setCardDetail(data);
  };

  useEffect(() => {
    if (id) {
      getCarDetail(id as string);
    }
  }, []);

  return { carDetail };
};
