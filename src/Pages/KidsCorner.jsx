import KidsHero from "../components/KidsHero";
import SpaceMaze from "../components/SpaceMaze";
import useFetch from "../components/useFetch"
import data from "../../database/db";
import RiskyWay from "../components/RiskyWay";
import PacMan from "../components/PacMan";

const KidsCorner = () => {
    const{data: kidsCorner,error,isLoading} = useFetch("http://localhost:7001/kidsCorner")
  return (
    <>
    {data.kidsCorner && data.kidsCorner.map(item => {
        return(
            <>
            {item.content && item.content.map(item => {
                return(
                    <>
                    {item.hero && item.hero.map(hero => {
                        return(
                            <KidsHero hero={hero} />
                        )
                    })}
                    {item.spaceMaze && item.spaceMaze.map(maze => {
                        return(
                            <SpaceMaze maze={maze} />
                        )
                    })}
                    {item.riskyWay && item.riskyWay.map(risky => {
                        return(
                            <RiskyWay risky={risky} />
                        )
                    })}
                    {item.pacman && item.pacman.map(pacman => {
                        return(
                            <PacMan pacman={pacman} />
                        )
                    })}
                    </>
                )
            })}
            </>
        )
    })}
    </>
  )
}

export default KidsCorner