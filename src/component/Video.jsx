import React, { useEffect, useState } from 'react'

const Video = () => {
  
    const [movies, setMovies] = useState([])

  const getMovie = async () =>{
    try {
        await fetch("https://api.themoviedb.org/3/movie/157336?api_key=9961ccfd31d40f07de58256107d117af")
        .then(res => res.json())
        .then(json => console.log(json))
        .then(json => setMovies({...movies, json}))
    } catch (error) {
        console.log(error)
    }
    console.log(movies);
  }
  useEffect(()=>{
    getMovie()
  },[])
    return (
    <div>
      {movies.map((data)=>{
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
        })
      }
    </div>
  )
}

export default Video
