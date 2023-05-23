import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from "../assets/img/down-arrow.svg";

const AboutHero = ({ hero }) => {
  return (
    <div className="aboutHero">
      <h1>{hero.title}</h1>
      <Link to=''><DownArrow className='arrow' /></Link>
    </div>
  );
};

export default AboutHero;