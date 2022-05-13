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
  getCarById: (id: number) => `/cars/${id}`,
  saveCar: () => `/cars`,
  deleteCar: (id: number) => `/cars/${id}`,
  updateCar: (id: number) => `/cars/${id}`,
};

export const brandPaths = {
  getBrand: () => `/brands`,
  getBrandById: (id: number) => `/brands/${id}`,
  saveBrand: () => `/brands`,
  deleteBrand: (id: number) => `/brands/${id}`,
  updateBrand: (id: number) => `/cars/${id}`,
};
