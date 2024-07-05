type segments = "SUVs" | "Pickups y Comerciales" | "Hatchback" | "Sedan";

export interface carInterface {
  id: number;
  name: string;
  segment: segments;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface getCarsResponse {
  cars: carInterface[];
}

interface carDetailFeature {
  name: string;
  description: string;
  image: string;
}
interface carDetailHighlight {
  name: string;
  content: string;
  image: string;
}

export interface carDetailInterface extends carInterface {
  title: string;
  description: string;
  model_features: carDetailFeature[];
  model_highlights: carDetailHighlight[];
}

export interface getCarDetailResponse {
  car: carDetailInterface;
}
