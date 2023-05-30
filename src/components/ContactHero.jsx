import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from "../assets/img/down-arrow.svg";

const ContactHero = ({hero}) => {
  return (
    <div className="contact-hero">
        <h1>{hero.title}</h1>
        <Link to=''><DownArrow className='arrow' /></Link>
    </div>
  )
}

export default ContactHero