import logo from './logo.svg';
import Intro from './Components/Introduction/intro.js'
import About from './Components/About/About';
import Product from './Components/Product/Product';
import ProductList from './Components/Product/ProductList/ProductList';
import Typed from 'react-typed';



import './App.css';

function App() {
  return (
    <div >
     <Intro />
     <About/>
     <ProductList />
    </div>
  );
}

export default App;
