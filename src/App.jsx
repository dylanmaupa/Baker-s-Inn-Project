import './App.scss';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import Recipes from './Pages/Recipes';
import KidsCorner from './Pages/KidsCorner';
import Contact from './Pages/Contact';

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about/' element={<AboutUs />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/recipes' element={<Recipes />} />
          <Route exact path='/kids' element={<KidsCorner />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
