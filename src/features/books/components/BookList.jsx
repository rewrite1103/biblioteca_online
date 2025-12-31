import React, { useEffect, useState } from "react";
import "../components/list.css"
import { useLends } from "../../../shared/hooks/UseLends.jsx";
import { ToastContainer, toast } from 'react-toastify';
import { fetchBooks, fetchCategories, sugerenciasBusqueda } from "./libroApi.jsx";

const BookList = () => {
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categoriesCount, setCategoriesCount] = useState([]);
  const [books, setBooks] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await fetchBooks();
      const categoriesData = await fetchCategories();
      console.log("Books data loaded in BookList:", categoriesData);
      setBooks(booksData);
      setCategoriesCount(categoriesData);
    };
    loadBooks();
  }
    , []);

  useEffect(() => {
    const loadBooks = async () => {
      if (searchText.trim().length < 1) {
        setSuggestion("");
        return;
      }

      const booksData = await sugerenciasBusqueda(searchText);

      if (booksData.length > 0) {
        setSuggestion(booksData[0].titulo);
        console.log("Suggestion found:", booksData[0].titulo);
      } else {
        setSuggestion("");
      }
    };

    loadBooks();
  }, [searchText]);





  const categories = [...new Set(books.map((b) => b.categoria))];

  const filteredBooks = books.filter((book) => {
    const matchesName = book.titulo.toLowerCase().includes(searchText.toLowerCase());
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

        {suggestion && searchText && (
          <div
            className="Books__suggestion"
            onClick={() => {
              setSearchText(suggestion);
              setSuggestion("");
            }}
          >
            Quizás estás buscando{" "}
            <span className="Books__suggestion__title">
              "{suggestion}"
            </span>
          </div>
        )}

        {categoryFilter && categoriesCount[categoryFilter] !== undefined && (
          <p className="Books__categoryCount">
            cantidad de libros: {categoriesCount[categoryFilter]}
          </p>
        )}
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
    let result = addToLendedBooks(book, dias, costo);
    setDias(1);
    setCosto(book.precio);

    if (result === "0") {
      toast.error("Ya haz alquilado este libro.");
    } else {
      toast.success(`Has alquilado "${book.titulo}" por ${dias} día(s). Total: $${costo.toFixed(2)}`);
    }
  };

  return (
    <div className="Books__card">
      <img src={book.url_imagen} alt={book.titulo} className="Books__card__image" />

      <h3 className="Books__card__title">{book.titulo}</h3>
      <p className="Books__card__author">Autor: {book.autor}</p>
      <p className="Books__card__year">Año: {book.publicacion}</p>
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
