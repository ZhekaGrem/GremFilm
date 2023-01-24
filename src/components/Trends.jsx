import axios from 'axios'
import React, { Fragment, useEffect, useState, useContext } from 'react'
import { AiFillPlayCircle, AiFillCloseCircle } from 'react-icons/ai'
import { Container } from './NavBar'
import '../Styles/Videos.css'
import NoImg from './NoImages.png'
import TrailerTrends from '../Trailers/TrailerTrends.jsx'

function Trends() {
   const { toggle, inputValue } = useContext(Container)
   const input = inputValue
   const Api = `https://api.themoviedb.org/3`
   const TrendsShown = `/trending/all/week`
   const [trendArray, setTrendArray] = useState([])
   const [trendTitle, setTrendTitle] =useState('')
   const [trailer, setTrailer] = useState(true)
   const Images = 'https://image.tmdb.org/t/p/w500'
   const Trends = async() => {
      const data = await axios.get(`${Api}${TrendsShown}`, {
         params: {
            api_key: 'b3569063f589b59c445590e812f19e04',
            query: input, 

         }
      })
      const results = data.data.results
      setTrendArray(results)
   }

   useEffect(() => {
      Trends()
   },[input])
   const TrendTitle = (trend) =>{
      setTrendTitle(trend.title)
      setTrailer(!trailer)
   }
   return (
      <Fragment> 
         <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'} >
            <div className='movies-container '>
               { trendArray.map((trend )=>{
                  return(
                     <div id={trailer ? 'container' : 'NoContainer'}>
                        <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TrendTitle(trend)} />
                        <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} onClick={() => TrendTitle(trend)}  alt='' />
                        <h3  className={toggle ? 'mainColor' : 'secondaryColor'} >{trend.title} </h3>
                     </div>
                  )
               })}
               {trailer ? console.log : <TrailerTrends TrendTitle={trendTitle} toggle={toggle} />}
               <AiFillCloseCircle id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarckThemeClose' : 'LightThemeClose'} fontSize={55} color="#fff" cursor={'pointer'} onClick={() => setTrailer(true)} />

            </div>
         </div>
      </Fragment>
   )
}

export default Trends