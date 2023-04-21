import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import MovieScreen from './components/MovieScreen';
import axios from 'axios';
import Watchlist from './components/Watchlist';

function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }


  useEffect(() => {
    getData()


  }, [page])

  const addMovie = (movie) => {
    setList([...list,movie])
    
  }


  const removeMovie = (movie) => {
    let newState = list.filter((m) => {
      return m !== movie
      
    })
    setList(newState)
  }


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen list={list} page={page} setPage={setPage} movieList={movieList} addMovie={addMovie} removeMovie={removeMovie}/>
        <Watchlist list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
