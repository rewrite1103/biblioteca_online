


import { createContext, useContext, useState } from "react";

const LendsContext = createContext();

export const useLends = () => useContext(LendsContext);

export const LendsProvider = ({ children }) => {
  const [lendedBooks, setLendedBooks] = useState([]);

  
  const addToLendedBooks = (book, dias, costo) => {
    const exists = lendedBooks.some((b) => b.id === book.id);

    if (!exists) {
      setLendedBooks([
        ...lendedBooks,
        { ...book, dias, costo } 
      ]);
    }
  };

  
  const extendLend = (id, extraDias) => {
    setLendedBooks(prev =>
      prev.map(book =>
        book.id === id
          ? { ...book, dias: book.dias + extraDias, costo: book.costo + (book.precio * extraDias) } 
          : book
      )
    );
  };

  return (
    <LendsContext.Provider value={{ lendedBooks, addToLendedBooks, extendLend }}>
      {children}
    </LendsContext.Provider>
  );
};
