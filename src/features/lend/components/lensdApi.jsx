
import api from "../../../shared/api/apiLibro.js";

export const addLends = async (lendData) => {
  try {
    console.log("Adding lend with data:", lendData);
    const response = await api.post("/libros/addalquiler", lendData);
    console.log("Lend added successfully:", response.data);
    return response.data;
    } catch (error) {
    console.error("Error al agregar el alquiler:", error);
    throw error;
  }
};

export const fetchLends = async () => {
  try {
    const response = await api.get("/libros/list_alquiler");
    return response.data;
    } catch (error) {
    console.error("Error al consultar alquileres:", error);
    return [];
  }
};

export const updateLend = async (updatedData) => {
  try {
    const response = await api.put("/libros/update_alquiler", updatedData);
  
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el alquiler:", error);
    throw error;
  }
};