import React, { Fragment, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Routes, Route, NavLink } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import Chat from './Chat'
import Login from './Login'
import Pricing from './Pricing'
import '../Trailers/TrailerMovies.jsx'
import '../Styles/NavBarStyle.css'

export const Container = React.createContext()

function NavBar() {
   const [toggle, setToggle] = useState(true)
   const [inputValue, setInputValue] = useState('')

   return (
      <Container.Provider value={{ toggle, inputValue}}>
      <Fragment>
         <nav className={toggle ? '' : 'navBarColor'}> 
            <div className='nav-options'>
                  <h1 id={toggle ? 'heading' : 'literThemeText'}>GREMFILM</h1>
               <NavLink to="" style={({isActive})=> {return{color:isActive? '#fff' : '#EE9B00'}}}>
                  <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
               </NavLink>
               <NavLink to="/TvShows" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9B00' } }}>
                  <span id={toggle ? 'Movies' : 'MoviesLight'}>TV shows</span>
               </NavLink>
               <NavLink to="/Trends" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9B00' } }}>
                  <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
               </NavLink>
                  <NavLink to="/Chat" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9B00' } }}>
                  <span id={toggle ? 'Movies' : 'MoviesLight'}>Chat</span>
               </NavLink>
               {/*<NavLink to="/Pricing" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9B00' } }}>
                  <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
               </NavLink>*/}
            
            </div>

            <div className='input-group'>
                  <input id={toggle ? 'color-red' : 'color-blue'} type="text" placeholder='Search Whatever You Want' onChange={(e) => setInputValue(e.target.value)} />
               <BsSearch fontSize={21} color="black" id='search' />
                  <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                     <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}>
                     </div>
                  </div>
                  <NavLink to="/Login" >
                     <FaRegUserCircle className='user'fontSize={35} id={toggle ? 'heading' : 'literThemeText'} />
                  </NavLink>
            </div>
         </nav>
          
         <Routes>
            <Route path='' element={<Movies />} />
            <Route path='TvShows' element={<TvShows />} />
            <Route path='Trends' element={<Trends />} />
            <Route path='Chat' element={<Chat />} />
            <Route path='Login' element={<Login />} />
            <Route path='Pricing' element={<Pricing />} />

         </Routes>
      </Fragment>
      </  Container.Provider >
   );
}

export default NavBar