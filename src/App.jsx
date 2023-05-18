import './App.scss';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
