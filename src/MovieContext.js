import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider= (props)=>{
   const [movies,setMovies]= useState([

    {
        name: 'Harry porter',
        price:'$10',
        id:1001
    },
    {
        name: 'Game of Thron',
        price:'$15',
        id:1002
    },
    {
        name: 'Inception',
        price:'$12',
        id:1003
    }

   ]);
   return(
       <MovieContext.Provider value={[movies,setMovies]}>
           {props.children}
       </MovieContext.Provider>
   );

}