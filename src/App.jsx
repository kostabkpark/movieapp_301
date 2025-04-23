import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
      .then((response)=>response.json())
      .then((json)=>{
        console.log(json.data.movies);
        setIsLoading(false);
        setMovies(json.data.movies);
      })
  }, []);
  return (
    <>
      <h1>Move App</h1>
      {isLoading ? <p>Loading 중 ...</p>
                   : 
                   <div>
                    {movies.map((movie)=>{
                      return (
                        <div key={movie.id}>
                          {movie.title}
                        </div>  
                      )
                    })}
                   </div>
      }
    </>
  )
}

export default App
