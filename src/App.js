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
      
     {/* <Intro /> */}
     <About/>
     <ProductList />
     <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
     {/* <Product /> */}
    </div>
  );
}

export default App;
