
import { addLends, updateLend } from "../../features/lend/components/lensdApi";

import { createContext, useContext, useState } from "react";

const LendsContext = createContext();

export const useLends = () => useContext(LendsContext);

export const LendsProvider = ({ children }) => {
  const [lendedBooks, setLendedBooks] = useState([]);

  
const addToLendedBooks = (libro, dias, costo) => {
  const exists = lendedBooks.some((item) => item.libro.id === libro.id);

  if (!exists) {
    const nuevoAlquiler = {
      id: Date.now(), 
      dias,
      costo,
      libro: { ...libro } 
    };

    setLendedBooks([...lendedBooks, nuevoAlquiler]);

    addLends({ dias, costo, libro });
  } else {
    return "0";
  }
 
};
  

const extendLend = async (id, extraDias) => {
  const itemToUpdate = lendedBooks.find(item => item.id === id);
  
  if (!itemToUpdate) return;


  const precioPorDia = itemToUpdate.costo / itemToUpdate.dias;
  const nuevoCosto = itemToUpdate.costo + (precioPorDia * extraDias);
  const nuevosDias = itemToUpdate.dias + extraDias;


  const updatedItem = { 
    ...itemToUpdate, 
    dias: nuevosDias, 
    costo: nuevoCosto 
  };

  try {

    console.log("Updating lend in DB:", updatedItem);
    await updateLend(updatedItem); 

    setLendedBooks(prev =>
      prev.map(item => (item.id === id ? updatedItem : item))
    );
  } catch (error) {
    console.error("Error al actualizar el alquiler:", error);
    alert("No se pudo extender el alquiler. Inténtalo de nuevo.");
  }
};

  return (
    <LendsContext.Provider value={{ lendedBooks, setLendedBooks, addToLendedBooks, extendLend }}>
      {children}
    </LendsContext.Provider>
  );
};
