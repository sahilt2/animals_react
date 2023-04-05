import React,{Component} from 'react';
import './App.css';
import Animal from './Animal';
import {animals} from './animalsList';
import Header from './Header';



class App extends Component {
  state = {
    animals: animals,
    title: 'Living things',
    searchInput: ''
  };
  
  likesHandler = (name,action) => {
    this.setState(((prevState) =>{
      const updateArray = prevState.animals.map((animal) => {
        if(animal.name === name){
          if(action==='add'){
            return {...animal,likes:animal.likes + 1}  //spreading, curly bracket here shows we are working with obejcts

          }else{
            return {...animal,likes:animal.likes - 1} 
          }
        } else {
          return animal
        }

      })
      return {
        animals:updateArray
      }
    }))

   console.log('like handler clicked',name,action)
  };
  removeHandler = (name) =>{
   const updateArray = this.state.animals.filter((animal)=> animal.name !==name)
   this.setState({
    animals:updateArray
   })
    console.log('remove card',name)
  }

  searchHandler = (e) =>{
    this.setState({
      searchInput:e.target.value
    })

  }
  
  render() {

 
  
  return (
    <div className="App">
      <Header title = {this.state.title}/>
      <Animal data = {this.state.animals} likesHandler = {this.likesHandler} removeHandler = {this.removeHandler} searchHandler ={this.searchHandler} searchInput ={this.searchInput}/>
    </div>
  );
  }
}


export default App;
