import axios from 'axios'
import React, { Fragment, useEffect, useState, useContext } from 'react'
import { AiFillPlayCircle, AiFillCloseCircle } from 'react-icons/ai'
import { Container } from './NavBar'
import '../Styles/Videos.css'
import NoImg from './NoImages.png'
import TvShowsTrailer from '../Trailers/TvShowsTrailer.jsx'

function TvShows() {
   const { toggle, inputValue } = useContext(Container)
   const input = inputValue
   const [showData, setShowData] = useState([])
   const [trailer, setTrailer] = useState(true)
   const [title, setTitle] = useState('')
   const Shown = input ? 'search' : 'discover'
   const Api = `https://api.themoviedb.org/3/${Shown}/tv`
   const Images = 'https://image.tmdb.org/t/p/w500'

   const TvShows = async () => {
      const data = await axios.get(Api, {
         params: {
            api_key: 'b3569063f589b59c445590e812f19e04',
            query: input,
         }
      })
      const results = (data.data.results)
      setShowData(results)
   }
   useEffect(() => {
      TvShows()
   }, [input])
   const TvShowTitle = (shows) => {
      setTitle(shows.name)
      setTrailer(!trailer)
   }
   return (
      <Fragment >
         <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
            <div className='movies-container '>
               {showData.map((shows) => {
                  return (
                     <Fragment key={shows.id}>
                        <div id={trailer ? 'container' : 'NoContainer'}>
                           <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TvShowTitle(shows)} />
                           <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt="" onClick={() => TvShowTitle(shows)} />
                           <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>{shows.name}</h3>
                        </div>
                     </Fragment>
                  )
               })}
               {trailer ? console.log : <TvShowsTrailer TvShowTitle={title} toggle={toggle} />}

               <AiFillCloseCircle id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarckThemeClose' : 'LightThemeClose'} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />
            </div>
         </div>
      </Fragment>)
}

export default TvShows