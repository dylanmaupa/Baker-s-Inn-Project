import HomeRecipes from "../components/HomeRecipes";
import RecipesHero from "../components/RecipesHero";
import useFetch from "../components/useFetch";
import data from "../../database/db";

const Recipes = () => {

  return (
    <div>
        <RecipesHero />
        <HomeRecipes/>
    </div>
  )
}

export default Recipes