import { NavLink } from "react-router-dom";
import useFetch from "./useFetch";

const Recipes = () => {
    const { data: Recipes, error, isLoading } = useFetch('http://localhost:7001/Recipes');
    return (
        <>
            {Recipes && Recipes.map((item, index) => {
                return (
                    <section className="home-recipes">
                        <h2>{item.title}</h2>
                        <ul className="nav-rec">
                            <li><NavLink>For Kids</NavLink></li>
                            <li><NavLink>For Vegans</NavLink></li>
                            <li><NavLink>For Family</NavLink></li>
                        </ul>
                    </section>
                );
            })}
        </>
    );
};

export default Recipes;