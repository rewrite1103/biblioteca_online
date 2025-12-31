

import api from "../../../shared/api/apiLibro.js";
import apiElastic from "../../../shared/api/apiElastic.js";

export const fetchBooks = async () => {
  try {
    const response = await api.get("/libros/list"); 
    return response.data;
    } catch (error) {
    console.error("Error al consultar libros:", error);
    return [];
  }

};

export const fetchCategories = async () => {
  try {
    const response = await apiElastic.get("/search/facets");
    return response.data;
  } catch (error) {
    console.error("Error al consultar categorías:", error);
    return [];
  }
};


export const sugerenciasBusqueda = async (query) => {
  try {
    const response = await apiElastic.get(`/search/sugerencias?texto=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener sugerencias de búsqueda:", error);
    return [];
  }
};
