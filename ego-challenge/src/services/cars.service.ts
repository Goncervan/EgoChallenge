import { getCarDetailResponse, getCarsResponse } from "@/interfaces";
import axios from "axios";

export const carsService = {
  getCars: async () => {
    try {
      const { data } = await axios.get(
        "https://challenge.egodesign.dev/api/models/"
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  getCarDetails: async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://challenge.egodesign.dev/api/models/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
