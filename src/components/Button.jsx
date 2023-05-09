import { Link } from "react-router-dom";

const Button = ({title}) => {
  return (
    <Link className="btn" href="/contact">{ title }</Link>
  )
}

export default Button