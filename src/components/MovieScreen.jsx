import React from 'react'
import MovieCard from './MovieCard'

function MovieScreen(props) {


  //map that returns moviecard to display on screen
    const movieDisplay = props.movieList.map((movie) => {
        return (
        <MovieCard 
        movie={movie} 
        addMovie={props.addMovie} 
        removeMovie={props.removeMovie} 
        list={props.list}
        />
        )
    })
  
    const decrement = () => {
      props.setPage(props.page -1)

    }

    const increment = () => {
      props.setPage(props.page +1)

    }



  return (
    <div className='page'>
        <h1>Levi's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <div className='btn-container'>
          <button onClick={props.page !== 1 ? decrement : null}>Previous</button>
          <button onClick={increment}>Next</button>

        </div>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
  )
}
export default MovieScreen