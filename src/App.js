import { useEffect } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Roomsingle from './Components/Roomsingle.js'
import Cart from './Components/Cart.js'


function App() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <Home />} /> 
        <Route path="/Home" element={ <Home />} ></Route>
        <Route path="/Roomsingle" element={ <Roomsingle />} ></Route>
        <Route path="/Cart" element={ <Cart />} ></Route>

      </Routes>
      <Footer />
      </BrowserRouter>
    
  );
}

export default App;
