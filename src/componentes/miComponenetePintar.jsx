import { useState, useEffect } from "react";
// Importa los hooks 'useState' y 'useEffect' de React.
// 'useState' permite manejar el estado en el componente.
// 'useEffect' permite ejecutar efectos secundarios, como hacer una petición a una API, después de que el componente se monte.

const API_KEY = import.meta.env.VITE_GIPHY_KEY;
// Obtiene la API key desde las variables de entorno usando Vite
// Este API_KEY se usa para autenticar las peticiones a la API de Giphy.

export const GridGif = ({ category }) => {
  // El componente 'GridGif' recibe 'category' como prop. 
  // Esta es la categoría que se utilizará para buscar gifs relacionados en la API de Giphy.

  const [gifs, setGifs] = useState([]);
  // useState define 'gifs' como el estado que contendrá los gifs obtenidos de la API.
  // Inicialmente, 'gifs' es un array vacío.

  const getGifs = async () => {
    // Función asíncrona que se encarga de obtener los gifs desde la API de Giphy.

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    // Construye la URL con la API key, la categoría (query de búsqueda), y algunos parámetros adicionales como el límite de resultados (5), la clasificación de los gifs (rating 'g'), y el idioma.

    const resp = await fetch(url);
    // Realiza una petición HTTP a la API de Giphy. 'fetch' devuelve una promesa que se resuelve cuando la respuesta llega.

    const { data } = await resp.json();
    // Espera a que la respuesta se convierta a formato JSON, y extrae la propiedad 'data', que contiene los resultados de la búsqueda.

    const gifs = data.map((gif) => {
      // Mapea sobre cada objeto gif en 'data' para estructurarlo en un formato más simple.
      // Para cada gif, devuelve un nuevo objeto con sólo el 'id', 'title' (título) y la URL de la imagen en formato 'webp'.

      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.webp,
      };
    });

    setGifs(gifs);
    // Actualiza el estado 'gifs' con los datos obtenidos y mapeados desde la API.
  };

  useEffect(() => {
    getGifs();
    // Ejecuta la función 'getGifs' cuando el componente se monta (al principio), para hacer la petición y obtener los gifs de la API.
  }, []);
  // El array vacío como segundo argumento indica que este efecto solo debe ejecutarse una vez, justo después del primer renderizado.

  return (
    <div className="mt-3">
      <h3>{category}</h3>
      {/* Muestra el nombre de la categoría actual en un título. */}

      <div className="row align-items-center justify-content-center g-3">
        {gifs.map((gif) => (
          <div key={gif.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card">
              {/* Cada gif se representa dentro de una tarjeta (card) de Bootstrap. */}

              <img
                src={gif.url}
                className="card-img-top"
                width="200px"
                height="auto"
              />
              {/* La imagen del gif se carga usando la URL obtenida de la API de Giphy. */}

              <div className="card-body">
                <h5 className="card-title">{gif.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};