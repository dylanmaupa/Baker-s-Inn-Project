import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from "../assets/img/down-arrow.svg";

const ProductsHero = ({ hero }) => {
    return (
        <div className="products">
            <h1 className="heading">{hero.title}</h1>
            <Link to=''><DownArrow className='arrow' /></Link>
        </div>
    );
};

export default ProductsHero;