import React,{useState,useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav =()=>{
    const [movies,setMovies]= useContext(MovieContext);
     return (
   <div>
      <nav>
        <div className="nav-wrapper">
       
        <ul id="nav-mobile" className="left ">
            <li><a href="#">Home</a></li>
     <li><a href="#">MY List of Movie : {movies.length}</a></li>
            
        </ul>
        </div>
  </nav>
   </div>

     );

}

export default Nav