import React ,{useState,useContext} from 'react'
import {MovieContext} from './MovieContext'

const AddMovies=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [movies,setMovies]=useContext(MovieContext);

    const updateName=(e)=>{
        setName(e.target.value);
    };
    const updatePrice=(e)=>{
        setPrice(e.target.value);
    };
    const addMovie=(e)=>{
        e.preventDefault();
        setMovies(prevMovie=>[...prevMovie,{name,price}]);
    }

     return(
        
        <>
         
         <div className="row">
            <form className="col s12" onSubmit={addMovie}>
            <div className="row">
                <div className="input-field col s6">
               
                <input
              placeholder='movie name'
              type='text'
              name ='name'
              value={name}
              onChange={updateName}
              />
                
                </div>
                <div className="input-field col s6">
                
                <input
             placeholder='price'
              type='text'
              name='price'
              value={price}
              onChange={updatePrice}
              />
               
                </div>
            </div>
            <button className="waves-effect waves-light btn">Add Movie</button>
            </form>
         </div>
        </>

     )
   
}

export default AddMovies