import { Link } from "react-router-dom";

const Button = ({title, toPath}) => {
  return (
    <Link to={toPath} className="btn" href="/contact">{ title }</Link>
  )
}

export default Button
