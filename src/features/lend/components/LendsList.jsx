
import React, { useState } from "react";
import { useLends } from "../../../shared/hooks/UseLends.jsx";
import "../components/LendsList.css";

const LendsList = () => {
  const { lendedBooks, extendLend } = useLends();
  const [extraDias, setExtraDias] = useState({}); 

  const handleExtend = (id) => {
    const dias = Number(extraDias[id]);
    if (!dias || dias <= 0) {
      alert("Ingresa un número válido de días");
      return;
    }
    extendLend(id, dias);
    setExtraDias({ ...extraDias, [id]: "" }); 
  };

  return (
    <section className="Alquileres">
      <h2 className="Alquileres__title">Libros Alquilados</h2>

      {lendedBooks.length === 0 ? (
        <p className="Alquileres__empty">No hay libros alquilados.</p>
      ) : (
        <div className="Alquileres__grid">
          {lendedBooks.map((book) => (
            <div key={book.id} className="Alquileres__card">
              <img
                src={book.url_imagen}
                alt={book.Titulo}
                className="Alquileres__card__image"
              />

              <h3 className="Alquileres__card__title">{book.Titulo}</h3>
              <p className="Alquileres__card__author">Autor: {book.autor}</p>
              <p className="Alquileres__card__dias">
                Días alquilados: <strong>{book.dias}</strong>
              </p>
              <p className="Alquileres__card__costo">
                Precio total: <strong>${book.costo.toFixed(2)}</strong>
              </p>

              <div className="Alquileres__card__extend">
                <input
                  type="number"
                  min="1"
                  placeholder="Extender más días"
                  className="Alquileres__card__input"
                  value={extraDias[book.id] || ""}
                  onChange={(e) =>
                    setExtraDias({ ...extraDias, [book.id]: e.target.value })
                  }
                />
                <button
                  className="Alquileres__card__button"
                  onClick={() => handleExtend(book.id)}
                >
                  Extender
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LendsList;
