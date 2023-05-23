import './App.scss';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
