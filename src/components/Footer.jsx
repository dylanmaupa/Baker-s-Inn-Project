import { Link, NavLink } from 'react-router-dom';
import footerLogo from '../assets/img/Bakers-icon.png';
import socialsOne from '../assets/img/Rectangle 688.png';
import socialsTwo from '../assets/img/Rectangle 689.png';
import socialsThree from '../assets/img/Rectangle 690.png';
import { ReactComponent as TwitterIcon } from "../assets/img/twitter.svg";
import { ReactComponent as FbIcon } from "../assets/img/facebook.svg";
import { ReactComponent as LinkedIcon } from "../assets/img/linkedIn.svg";
import innscor from '../assets/img/inscor_log.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo"><img src={footerLogo} alt="" /></div>
            <div className="footer-wrapper">
                <div className="f-imgBox">
                    <h3>Instagram Feed</h3>
                    <div className="f-images">
                        <div className="f-img"><img src={socialsOne} alt="" /></div>
                        <div className="f-img"><img src={socialsTwo} alt="" /></div>
                        <div className="f-img"><img src={socialsThree} alt="" /></div>
                    </div>
                    <div className="iconBox">
                        <TwitterIcon className="icon"/>
                        <FbIcon className="icon"/>
                        <LinkedIcon className="icon"/>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Our Location</h3>
                    <p>1 Shepperton Road,<br/> Graniteside,
                    <br/> Harare,
                    <br/> Zimbabwe.</p>
                </div>
                <div className="footer-links">
                    <h3>Get In touch with us</h3>
                    <p>08080151</p>
                    <p>08080152</p>
                    <p>+263 242 751 481</p>
                    <p>+263 242 710 334</p>
                    <Link>marketing@bakersinnzim.com</Link>
                </div>
                <div className="footer-links">
                    <h3>Sitemap</h3>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/recipes'>Recipes</NavLink>
                    <NavLink to='/kids'>Kid's Corner</NavLink>
                </div>
            </div>
            <div className="copyright">
                <div className="copy">
                    <p>Subsidiary of</p>
                    <img src={innscor} alt="innscor_logo_" />
                </div>
                <p>Copyright © 2022 Bakers Inn. All rights reserved. Site by <span style={{display: "inline-block"}}>NoWalls Pan Africa</span></p>
            </div>
        </footer>
    );
};

export default Footer;