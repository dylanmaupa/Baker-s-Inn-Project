import { Link } from "react-router-dom";

const Enquiries = ({enquire}) => {
  return (
    <section className="enquiries">
        <div className="img">
            <img src={enquire.image} alt="" />
        </div>
        <div className="textBox">
            <div className="text">
                <h4>{enquire.title}</h4>
                <Link to={"https://hr@bakersinnzim.com"}>hr@bakersinnzim.com</Link>
            </div>
            <div className="text">
                <h4>{enquire.title2}</h4>
                <Link to={"https://marketing@bakersinnzim.com"}>marketing@bakersinnzim.com</Link>
            </div>
        </div>
    </section>
  )
}

export default Enquiries