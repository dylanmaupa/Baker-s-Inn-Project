import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/bakers-inn-logo.png';
import Button from './Button';

const Navbar = () => {

    let [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navBar">
            <Link to='/' >
                <img src={logo} alt="baker's_inn logo" className='logo' />
            </Link>
            <ul className={menuOpen ? "menu menuActive": "menu"}>
                <li className="menu-item"><NavLink onClick={() => setMenuOpen(false)} to="/about">About Us</NavLink></li>
                <li className="menu-item"><NavLink onClick={() => setMenuOpen(false)} to="/products">Products</NavLink></li>
                <li className="menu-item"><NavLink onClick={() => setMenuOpen(false)} to="/recipes">Recipes</NavLink></li>
                <li className="menu-item"><NavLink onClick={() => setMenuOpen(false)} to="/kids">Kid's Corner</NavLink></li>
                <Button onClick={() => setMenuOpen(false)} toPath='/contact' title="Contact Us" />
            </ul>
            <div onClick={() => setMenuOpen(!menuOpen)} className={menuOpen ? "hamburger hamburgerActive" : "hamburger"}>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    );
};

export default Navbar;