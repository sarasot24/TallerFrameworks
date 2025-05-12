import { useState } from 'react'
import {AddCategory} from './componentes/miCategoria'
import {GridGif} from './componentes/miComponenetePintar'
import ListGroup from './componentes/myListGroup'

// Importa los componentes 'AddCategory' y 'GridGif', además del hook 'useState' de React para manejar el estado en el componente 'App'.

const App = () => {
  // Componente principal de la aplicación.

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  // Define 'categories' como el estado para almacenar las categorías que el usuario ingresa.
  // Inicialmente es un array vacío, lo que significa que no hay categorías seleccionadas.

  return (
    <div className="container mt-3 mb-5">
      <h1 className="mb-3">Gif Expert</h1>
      <AddCategory categories={categories} setCategories={setCategories} />
      {/* Renderiza el componente 'AddCategory'. 
      Le pasa las props 'categories' y 'setCategories' para que el componente pueda añadir nuevas categorías. */}
      
   <ListGroup 
  categories={categories} 
  onCategorySelect={setSelectedCategory} 
/>

{selectedCategory && <GridGif key={selectedCategory} category={selectedCategory} />}

      {categories.map((c) => (
        <GridGif key={c} category={c} />
        
        // Mapea sobre el array 'categories' para renderizar un componente 'GridGif' por cada categoría ingresada.
        // Usa el nombre de la categoría como 'key' para asegurarse de que React maneje correctamente cada componente en la lista.
        // Se pasa la categoría actual como prop al componente 'GridGif', que luego obtiene y muestra los gifs correspondientes.
      ))}
     
    </div>
  );
};

export default App;
// Exporta el componente 'App' como e