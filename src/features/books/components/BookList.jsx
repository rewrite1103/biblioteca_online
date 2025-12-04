import React, { useState } from "react";
import { books } from "../../../data/Books.jsx"; 
import "../components/list.css"
import { useLends } from "../../../shared/hooks/UseLends.jsx";
import { ToastContainer, toast } from 'react-toastify';

const BookList = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [...new Set(books.map((b) => b.categoria))];

  const filteredBooks = books.filter((book) => {
    const matchesName = book.Titulo.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter ? book.categoria === categoryFilter : true;
    return matchesName && matchesCategory;
  });

  return (
    <div className="Books">
      <h2 className="Books__title">Catálogo de Libros</h2>

      <div className="Books__filters">
        <input
          type="text"
          placeholder="Buscar libro por nombre..."
          className="form-control me-sm-2 Books__filters__search" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="Books__filters__select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="Books__grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="Books__noResults">No se encontraron resultados.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

const BookCard = ({ book }) => {
  const { addToLendedBooks } = useLends();
  const [dias, setDias] = useState(1);
  const [costo, setCosto] = useState(book.precio); 

  const handleDiasChange = (value) => {
    const diasNum = Math.max(1, Number(value)); 
    setDias(diasNum);
    setCosto(diasNum * book.precio);
  };

  const handleAlquilar = () => {
    addToLendedBooks(book, dias, costo);
    setDias(1);
    setCosto(book.precio);
    toast.success(`Has alquilado "${book.Titulo}" por ${dias} día(s). Total: $${costo.toFixed(2)}`);
  };

  return (
    <div className="Books__card">
      <img src={book.url_imagen} alt={book.Titulo} className="Books__card__image" />

      <h3 className="Books__card__title">{book.Titulo}</h3>
      <p className="Books__card__author">Autor: {book.autor}</p>
      <p className="Books__card__year">Año: {book.Año_publicacion}</p>
      <p className="Books__card__critica">Crítica: {book.critica}</p>
      <span className="Books__card__costo">Costo por los dias a Alquilar</span>
      <div className="Books__card__alquiler">
        <input
          type="number"
          min="1"
          className="Books__card__inputDias"
          value={dias}
          onChange={(e) => handleDiasChange(e.target.value)}
        />
        <span className="Books__card__costo">${costo.toFixed(2)}</span>
      </div>

      <button className="Books__card__button" onClick={handleAlquilar}>
        Alquilar
      </button>
    </div>
  );
};

export default BookList;
