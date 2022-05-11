export function mappedObjectDataKeyToPortuguese(
  key: string,
  value: any,
  isObjectCar: boolean
) {
  if (isObjectCar) {
    switch (key.toLowerCase()) {
      case "plate":
        return { key: "Placa", value };
      case "brand":
        return { key: "Marca", value };
      case "color":
        return { key: "Cor", value };
    }
  } else {
    switch (key.toLowerCase()) {
      case "name":
        return { key: "Nome", value };
      case "id":
        return { key: "Código", value };
    }
  }
}
