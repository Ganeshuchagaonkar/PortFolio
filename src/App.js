import logo from './logo.svg';
import Intro from './Components/Introduction/intro.js'
import About from './Components/About/About';
import Product from './Components/Product/Product';
import ProductList from './Components/Product/ProductList/ProductList';
import Typed from 'react-typed';
import './App.css';
import Contact from './Components/Contact/Contact';
import { ToastProvider } from 'react-toast-notifications';
import Toggle from './Components/Toggle/Toggle';
import {useContext,React} from 'react';
import { ThemeContext } from './Context';
import Footer from './Components/Footer/Footer';



function App() {
  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode?"#222":"#fff",color:darkMode?"white":"black"}} >
   
   <Toggle/>
     <Intro/>
     <About />
     <ProductList/>
     <ToastProvider><Contact/></ToastProvider>
     <Footer />
    

     
     
  
    </div>
  );
}

export default App;
