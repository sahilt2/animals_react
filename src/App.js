import React,{Component} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Animal from './pages/Animal';
import Bird from './pages/Bird';
import {animals} from './animalsList';
import {birds} from "./animalsList";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';




class App extends Component {
 
  state = {
    animals:animals,
    birds: birds,
    title: 'Living Things',
    searchInput: ''
  };

  getFromStorage = () =>{
    const animalData = localStorage.getItem("animals");
   const birdData = localStorage.getItem("birds")
  this.setState({
      animals : animalData,
      birds : birdData
  })
}
  
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

      localStorage.setItem("animals", JSON.stringify(updateArray))
      return {
        animals:updateArray
      }
   
    
    }))

   console.log('like handler clicked',name,action)
  };

  likesHandlerBirds = (name,action) => {
    this.setState((prevState)=>{
      const updatedBirdArray = prevState.birds.map((bird)=>{
        if(bird.name === name){
          if(action === 'add'){
            return {...bird,likes:bird.likes +1}
          }else{
            return{...bird,likes:bird.likes -1}
          }
        }else{
          return bird;
        }
      })
      localStorage.setItem("birds", JSON.stringify(updatedBirdArray))
      return {
        birds:updatedBirdArray
      }
    })
  }
  removeHandler = (name) =>{
   const updateArray = this.state.animals.filter((animal)=> animal.name !==name)
   this.setState({
    animals:updateArray
   })
    console.log('remove card',name)
  }

  removeHandlerBirds = (name) =>{
    const updatedBirdArray = this.state.birds.filter((bird)=> bird.name!==name)
    this.setState({
      birds:updatedBirdArray
    })
  }

  searchHandler = (e) =>{
    this.setState({
      searchInput:e.target.value
    })

  }
  handleStorage = () => {

  }
  
  render() {
    
 
  
  return (
    <div className="App">
      <BrowserRouter>
 
    
      <Header title = {this.state.title} animalData = {this.state.animals} birdsData = {this.state.birds}/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/animal' element = { <Animal data = {this.state.animals} likesHandler = {this.likesHandler} removeHandler = {this.removeHandler} searchHandler ={this.searchHandler} searchInput ={this.state.searchInput}/>}/>
        <Route path='/bird' element = { <Bird data = {this.state.birds} likesHandler = {this.likesHandlerBirds} removeHandler = {this.removeHandlerBirds} searchHandler ={this.searchHandler} searchInput ={this.state.searchInput} />}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
  }
}


export default App;
