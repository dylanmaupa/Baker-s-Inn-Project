import { Link } from "react-router-dom";
import { ReactComponent as PatternOne } from "../assets/img/African Pattern 1.svg";
import { ReactComponent as PatternTwo } from "../assets/img/African Pattern 2.svg";
import BreadCarousel from "../components/BreadCarousel";
import Button from "../components/Button";
import useFetch from "../components/useFetch";
import data from "../../database/db";
import bread1 from "../assets/img/white-soft-loaf.png"
import bread2 from "../assets/img/seed-loaf.png"
import bread3 from "../assets/img/brown-loaf.png"
import bread4 from "../assets/img/whole-wheat-loaf.png"


const Hero = () => {
    // const { data: hero, error, isLoading } = useFetch('http://localhost:7001/hero');
    const loaves = [bread1,bread2,bread3,bread4]

    return (
        <>
          { data.hero && data.hero.map((item, index) => {
            return (
              <div className="hero" key={index}>
                <PatternOne className="pattern" />
                <PatternTwo className="pattern" />
                <div className="home-inner">
                  <div className="textBox">
                    <h1>{item.title} <span className="underline">{item.title2}</span>{item.title3} <span className="underline">{item.title4}</span> </h1>
                    <p>{item.text}</p>
                    <Button toPath='/about' title='READ MORE' />
                  </div>
                  <BreadCarousel item={loaves} />
                </div>
              </div>
            );
          })}
        </>
      );
}

export default Hero