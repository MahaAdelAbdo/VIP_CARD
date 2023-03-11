 
import './App.css';
import Carousel from "./Components/Carousel" 
import Cards from "./Components/css/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import OnePage from "./Components/onePage"
import Loges from "./Components/Loges"
import ManCard from "./Components/manCard"
import LastText from "./Components/lastText"
import About from "./About/about";
import From from "./About/From";
 
import ConContent from './Content/ConContent';
import CardAn from "./About/cardAn"
import ConCard from "./Content/ConCard"
import HomeContent from "./Components/HomeContent"
import {Routes ,Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
    <Route exact path="/" element={
      <>
      <OnePage/>
      <HomeContent/>
      <Cards/>
      <Loges/>
      <ManCard/>
      <LastText/>
      </>
    }></Route>
      <Route path="/about" element={
      <div className='RouteAbout'>
      <About/>
      <CardAn/>
       <From/>
      </div>
    }></Route>
       <Route path="/content" element={
       <div className='RouteContent'>
      <ConContent/>
      <ConCard/>
      </div>
    }></Route>
  
         </Routes>
    

    </div>
  );
}

export default App;
