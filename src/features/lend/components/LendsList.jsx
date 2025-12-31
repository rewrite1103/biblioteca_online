
import React, { useEffect, useState } from "react";
import { useLends } from "../../../shared/hooks/UseLends.jsx";
import { fetchLends } from "./lensdApi.jsx";
import "../components/LendsList.css";

const LendsList = () => {
  const { lendedBooks, extendLend, setLendedBooks } = useLends();
  const [extraDias, setExtraDias] = useState({}); 

  useEffect(() => {
    const loadLends = async () => {
      const lendsData = await fetchLends();

      setLendedBooks(lendsData);

      
    };
    loadLends();
  }, []);

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
          {lendedBooks.map((item) => (
            <div key={item.id} className="Alquileres__card">
              <img
                src={item.libro.url_imagen}
                alt={item.libro.titulo}
                className="Alquileres__card__image"
              />

              <h3 className="Alquileres__card__title">{item.libro.titulo}</h3>
              <p className="Alquileres__card__author">Autor: {item.libro.autor}</p>
              <p className="Alquileres__card__dias">
                Días alquilados: <strong>{item.dias}</strong>
              </p>
              <p className="Alquileres__card__costo">
                Precio total: <strong>${item.costo.toFixed(2)}</strong>
              </p>

              <div className="Alquileres__card__extend">
                <input
                  type="number"
                  min="1"
                  placeholder="Extender más días"
                  className="Alquileres__card__input"
                  value={extraDias[item.id] || ""}
                  onChange={(e) =>
                    setExtraDias({ ...extraDias, [item.id]: e.target.value })
                  }
                />
                <button
                  className="Alquileres__card__button"
                  onClick={() => handleExtend(item.id)}
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
