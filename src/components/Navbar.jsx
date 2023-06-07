import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/bakers-inn-logo.png';
import Button from './Button';

const Navbar = () => {

    return (
        <div className="navBar">
            <Link to='/' >
                <img src={logo} alt="baker's_inn logo" className='logo' />
            </Link>
            <ul className="menu">
                <li className="menu-item"><NavLink to="/about">About Us</NavLink></li>
                <li className="menu-item"><NavLink to="/products">Products</NavLink></li>
                <li className="menu-item"><NavLink to="/recipes">Recipes</NavLink></li>
                <li className="menu-item"><NavLink to="/kids">Kid's Corner</NavLink></li>
                <Button toPath='/contact' title="Contact Us" />
            </ul>
            <div className="hamburger" c>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    );
};

export default Navbar;