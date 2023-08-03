import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Shop from './Pages/Shop';
import NavBar from "../src/layout/NavBar"
import Footer from "../src/layout/Footer"
import './App.css';


function App(theme) {
  return (
    <>
     
      <BrowserRouter className={`App ${theme}`}>
         <NavBar />
          
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop />} />
       
        </Routes>
    
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
