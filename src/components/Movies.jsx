import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiFillPlayCircle, AiFillCloseCircle  } from 'react-icons/ai'
import { Container } from './NavBar'
import '../Styles/Videos.css'
import NoImg from './NoImages.png'
import TrailerMovies from '../Trailers/TrailerMovies'

function Movies() {
   const { toggle, inputValue } = useContext(Container)
   const input = inputValue
   const [moviesData, setMoviesData] = useState([])
   const [trailer, setTrailer] = useState(true)
   const [movieTitle, setMovieTitle] = useState('')
   const Shown = input ? 'search' : 'discover'
   const Api = `https://api.themoviedb.org/3/${Shown}/movie`
   const Images = 'https://image.tmdb.org/t/p/w500'
   const MovieCall = async () => {
      const data = await axios.get(Api, {
         params: {
            api_key: 'b3569063f589b59c445590e812f19e04',
            query: input,
         }
      })
      const results = data.data.results
      setMoviesData(results)
   }
   useEffect(() => {
      setTimeout(() => {
         MovieCall()
         
      }, 100);
   }, [input])
   const MoviesTitle =(movie) =>{
      setMovieTitle(movie.title)
      setTrailer(!trailer)
   }
   return ( 
      <Fragment>
         <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
            <div className='movies-container '>
               {moviesData.map((movie) => {
                  return (
                     <Fragment>
                        <div id={trailer ?  'container' : 'NoContainer'}>
                           <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => MoviesTitle(movie) }/>
                           <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} onClick={() => MoviesTitle(movie)} alt='' />
                           <h3 id={movie.title.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'} >{movie.title} </h3>
                        </div>
                     </Fragment>
                  )
               })}
               {trailer ? console.log : <TrailerMovies MoviesTitle={movieTitle} toggle={toggle}/>}
               <AiFillCloseCircle id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarckThemeClose' : 'LightThemeClose'} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />
            </div>
         </div>
      </Fragment>
   )
}

export default Movies