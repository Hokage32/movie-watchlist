import React from 'react'

function MovieCard({movie,addMovie, removeMovie,list}) {

//checking if movie id is inside of list
let inWatchList = list.filter((m) => {
  return m.id === movie.id
})

//if watchlist is empty it will return first button, otherwise the button  will change to the second button
let button = (
  inWatchList.length === 0 
  ? 
  <button onClick={()=>addMovie(movie)}>Add to List</button> 
  : 
  <button onClick={() => removeMovie(movie)}>Remove</button>
  )

  return (
    <div className='movie-card'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  />
            <h3>{movie.original_title}</h3>
        </div>
        {button}
    </div>
  )
}
export default MovieCard