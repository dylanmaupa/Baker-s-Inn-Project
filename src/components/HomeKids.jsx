import useFetch from "./useFetch";
import { ReactComponent as PatternOne } from "../assets/img/African Pattern 1.svg";
import { ReactComponent as PatternTwo } from "../assets/img/African Pattern 2.svg";
import Button from "./Button";
import data from "../../database/db";
import mario from "../assets/img/Mario.png"
import mushroom from "../assets/img/mushroom.png"
import leafPalm from "../assets/img/leaf-palm.png"
import spikyTurtle from "../assets/img/spiky-turtle.png"

const HomeKids = () => {
    // const { data: HomeKids, error, isLoading } = useFetch('http://localhost:7001/HomeKids');
    return (
        <>
            {data.HomeKids && data.HomeKids.map((item, index) => {
                return (
                    <section className="home-kids">
                        <PatternOne className='pattern' />
                        <PatternTwo className='pattern' />
                        <div className="hk-wrapper" key={index}>
                            <div className="hk-imgBox">
                                {item.images && item.images.map(item => {
                                    return (
                                        <>
                                            <img className="hk-img mario" src={mario} alt="mario_" />
                                            <img className="hk-img mushroom" src={mushroom} alt="mushroom_" />
                                            <img className="hk-img leaf-palm" src={leafPalm} alt="leaf_palm_" />
                                            <img className="hk-img spiky-turtle" src={spikyTurtle} alt="spiky_turtle_" />
                                        </>
                                    );
                                })}
                            </div>
                            <div className="hk-textBox">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <Button toPath='/kids' title="PLAY GAMES" />
                            </div>
                        </div>
                    </section>

                );
            })}
        </>
    );
};

export default HomeKids;