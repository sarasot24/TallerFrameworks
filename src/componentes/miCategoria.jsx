import { useState } from "react";
// Importa el hook useState de React, que permite manejar el estado dentro de un componente funcional.

export const AddCategory = ({ categories, setCategories }) => {
  // El componente recibe dos props:
  // 'categories' es el array de categorías existentes.
  // 'setCategories' es la función para actualizar dicho array.

  const [searchValue, setSearchValue] = useState("");
  // useState define una variable de estado llamada 'searchValue' (valor del input) y su función de actualización 'setSearchValue'.
  // Inicialmente, 'searchValue' es un string vacío.

  const onInputChange = (event) => setSearchValue(event.target.value);
  // Función manejadora que actualiza 'searchValue' con el valor del campo de entrada cuando el usuario escribe.

  const onCategorySubmit = () => {
    // Función que se ejecuta cuando el usuario hace clic en el botón "Agregar".

    if (searchValue.trim().length <= 1) return;
    // Si el valor de 'searchValue' es muy corto (menos de 2 caracteres) se cancela la ejecución de la función.

    if (categories.includes(searchValue.trim())) return;
    // Si la categoría ya existe en el array 'categories', se evita agregarla duplicada.

    setCategories((categories) => [...categories, searchValue.trim()]);
    // Se actualiza el array 'categories' añadiendo la nueva categoría.
    // Utiliza la función de actualización 'setCategories' para agregar 'searchValue' al array sin modificar el original.

    setSearchValue("");
    // Después de agregar la nueva categoría, se reinicia el campo de texto (se vacía).
  };

  return (
    <div className="input-group mt-3">
      <input
        aria-label="Recipient's username with two button addons"
        className="form-control"
        placeholder="Dragon Ball"
        type="text"
        value={searchValue}
        onChange={onInputChange}
      // Input controlado: su valor está vinculado a 'searchValue' y cada vez que el usuario escribe, 'onInputChange' actualiza el estado.
      />

      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onCategorySubmit}
      // Al hacer clic en el botón, se ejecuta 'onCategorySubmit' para intentar agregar la nueva categoría.
      >
        Agregar
      </button>
    </div>
  );
};