import React from "react";

import Card from './Card';
import './Animal.css';
import Search from './Search'



const Animal = (props) => {
const searchFilter = props.data.filter(animal =>{
    return animal.name.includes(props.searchInput)
})
    return (
        <div >
        <h2>Animals: {props.data.length}</h2>
        <Search searchHandler={props.searchHandler} searchInput = {props.searchInput}/>
        <div className="cards">
        {props.data.map((item)=> <Card 
        key = {item.name} 
        name = {item.name} 
        likes = {item.likes} 
        removeCard = {()=>props.removeHandler(item.name)} //binding data,can be sent it back to original trigger in App.js in this case.
        addLikes = {()=>props.likesHandler(item.name,'add')} 
        removeLikes = {()=>props.likesHandler(item.name,'remove')}/>)}
        </div>
        
            
        </div>
    )
   


    


};

export default Animal;