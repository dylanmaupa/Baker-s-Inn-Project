import { useState, useEffect } from "react";
// import profile from ""
import image1 from "../assets/img/crouschet.jpg";
import image2 from "../assets/img/eggs-beans-sausage.jpg";
import image3 from "../assets/img/short-bread.jpg";
import image4 from "../assets/img/short-bread.jpg";
import data from "../../database/db";

const RecipesHero = () => {
    let [toggleState, setToggleState] = useState(1);
    let toggleTik = (index) => {
        setToggleState(index);
    };
    const images = [image1, image2, image3, image4];
    useEffect(() => {
        console.log("data");
        setTimeout(() => {
            
            // if(index === 4){
            //     index === 1
            // }
        }, 1000);
    });
    return (
        <>
            {data.RecipesHero && data.RecipesHero.map(item => {
                return (
                    <div className="">
                        {item.tiktok && item.tiktok.map(tiktok => {
                            return (
                                <div className="wrapper">
                                    {tiktok.first && tiktok.first.map(first => {
                                        return (
                                                <div className={toggleState === 1 ? "recipes-hero-active" : "recipes-hero"}>
                                                    <div className="textBox-active">
                                                        <h2>The Finest of Baker’s Tik Tok Community Recipes</h2>
                                                        <p>{first.text}</p>
                                                        <p>{first.title}</p>
                                                    </div>
                                                    <div className="imgBox one">
                                                        {images.map(image => {
                                                            return (
                                                                <>
                                                                    <div className="img">
                                                                        <div className="overlay"></div>
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                        );
                                    })}
                                    {tiktok.second && tiktok.second.map(second => {
                                        return (
                                                <div className={toggleState === 2 ? "recipes-hero-active" : "recipes-hero"}>
                                                    <div className="textBox-active">
                                                        <h2>The Finest of Baker’s Tik Tok Community Recipes</h2>
                                                        <p>{second.text}</p>
                                                        <p>{second.title}</p>
                                                    </div>
                                                    <div className="imgBox two">
                                                        {images.map(image => {
                                                            return (
                                                                <>
                                                                    <div className="img">
                                                                        <div className="overlay"></div>
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                        );
                                    })}
                                    {tiktok.third && tiktok.third.map(third => {
                                        return (
                                                <div className={toggleState === 3 ? "recipes-hero-active" : "recipes-hero"}>
                                                    <div className="textBox-active">
                                                        <h2>The Finest of Baker’s Tik Tok Community Recipes</h2>
                                                        <p>{third.text}</p>
                                                        <p>{third.title}</p>
                                                    </div>
                                                    <div className="imgBox three">
                                                        {images.map(image => {
                                                            return (
                                                                <>
                                                                    <div className="img">
                                                                        <div className="overlay"></div>
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                        );
                                    })}
                                    {tiktok.forth && tiktok.forth.map(forth => {
                                        return (
                                                <div className={toggleState === 4 ? "recipes-hero-active" : "recipes-hero"}>
                                                    <div className="textBox-active">
                                                        <h2>The Finest of Baker’s Tik Tok Community Recipes</h2>
                                                        <p>{forth.text}</p>
                                                        <p>{forth.title}</p>
                                                    </div>
                                                    <div className="imgBox four">
                                                        {images.map(image => {
                                                            return (
                                                                <>
                                                                    <div className="img">
                                                                        <div className="overlay"></div>
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default RecipesHero;