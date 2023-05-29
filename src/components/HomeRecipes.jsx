import { NavLink } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { ReactComponent as RightArrow } from "../assets/img/right-arrow.svg";
import data from "../../database/db";


const HomeRecipes = () => {
    // const { data: Recipes, error, isLoading } = useFetch('http://localhost:7001/Recipes');
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index)
    }

    return (
        <>
            {data.Recipes && data.Recipes.map((item, index) => {
                return (
                    <section className="home-recipes">
                        <h2>{item.title}</h2>
                        <ul className="nav-rec">
                            <li><a onClick={() => toggleTab(1)} className={toggleState === 1 ? "active": "tab-link"}>For Kids</a></li>
                            <li><a onClick={() => toggleTab(2)} className={toggleState === 2 ? "active": "tab-link"}>For Vegans</a></li>
                            <li><a onClick={() => toggleTab(3)} className={toggleState === 3 ? "active": "tab-link"}>For Family</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className={toggleState === 1 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                                {item.kids && item.kids.map(card => {
                                    return (
                                        <div className="tab-card">
                                            <div className="img">
                                                <img src={card.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{card.title}</h3>
                                                <div className="textBox-inner">
                                                    <p>Prep Time: <span style={{ display: 'inline-block' }}>{card.prep}</span></p>
                                                    <p>Serves: <span style={{ display: 'inline-block' }}>{card.serves}</span></p>
                                                </div>
                                                <RightArrow className="right-arrow" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={toggleState === 2 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                                {item.vegans && item.vegans.map(card => {
                                    return (
                                        <div className="tab-card">
                                            <div className="img">
                                                <img src={card.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{card.title}</h3>
                                                <div className="textBox-inner">
                                                    <p>Prep Time: <span style={{ display: 'inline-block' }}>{card.prep}</span></p>
                                                    <p>Serves: <span style={{ display: 'inline-block' }}>{card.serves}</span></p>
                                                </div>
                                                <RightArrow className="right-arrow" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={toggleState === 3 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                                {item.family && item.family.map(card => {
                                    return (
                                        <div className="tab-card">
                                            <div className="img">
                                                <img src={card.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{card.title}</h3>
                                                <div className="textBox-inner">
                                                    <p>Prep Time: <span style={{ display: 'inline-block' }}>{card.prep}</span></p>
                                                    <p>Serves: <span style={{ display: 'inline-block' }}>{card.serves}</span></p>
                                                </div>
                                                <RightArrow className="right-arrow" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default HomeRecipes;