import { useContext,createContext, useState} from 'react';
import './App.css';
import logo from  './Assets/logo.svg'
// import Header  from './Components/Header/Header'
import { DataProvider } from './Context/Context';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Careers from './Components/Carrers/Careers';
import Safety from './Components/Safety/Safety'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
 return(
  <div>
   <DataProvider>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/safety" element={<Safety />}/>
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
   </DataProvider>
  </div>
 )
}

export default App;
