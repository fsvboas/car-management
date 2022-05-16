import axios from "axios";

export const baseUrl = "http://localhost:3333";

export const createConnection = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const carPaths = {
  getCar: () => `/cars`,
  getCarById: (id: string) => `/cars/${id}`,
  saveCar: () => `/cars`,
  deleteCar: (id: string) => `/cars/${id}`,
  updateCar: (id: string) => `/cars/${id}`,
};

export const brandPaths = {
  getBrand: () => `/brands`,
  getBrandById: (id: string) => `/brands/${id}`,
  saveBrand: () => `/brands`,
  deleteBrand: (id: string) => `/brands/${id}`,
  updateBrand: (id: string) => `/brands/${id}`,
};
