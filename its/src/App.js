import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Story from './components/story/Story';
import background from "./assets/pexels-fwstudio-129731.jpg"

function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar/>
      <Home/>
      <Story/>
    
    </div>
    </BrowserRouter>
  );
}


export default App;
