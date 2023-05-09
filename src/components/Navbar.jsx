import { Link } from 'react-router-dom';
import logo from '../assets/img/bakers-inn-logo.png';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="navBar">
            <Link to='/' >
                <img src={logo} alt="baker's_inn logo" className='logo' />
            </Link>
            <ul className="menu">
                <li className="menu-item"><a href="/about">About Us</a></li>
                <li className="menu-item"><a href="/products">Products</a></li>
                <li className="menu-item"><a href="/recipes">Recipes</a></li>
                <li className="menu-item"><a href="/kids">Kid's Corner</a></li>
                <Button title="Contact Us" />
            </ul>
        </div>
    );
};

export default Navbar;