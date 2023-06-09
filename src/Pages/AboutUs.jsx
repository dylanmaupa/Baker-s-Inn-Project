import AboutHero from "../components/AboutHero";
import CoreValues from "../components/CoreValues";
import MissionVision from "../components/MissionVision";
import QualityPromise from "../components/QualityPromise";
import useFetch from "../components/useFetch";
import data from "../../database/db";

const AboutUs = () => {

  return (
    <>
      {data.AboutUs && data.AboutUs.map(item => {
        return (
          <>
            {item.content && item.content.map(item => {
              return (
                <div className="about">
                  {item.hero && item.hero.map(hero => {
                    return (
                        <AboutHero hero={hero} />
                    );
                  })}
                  {item.missionVision && item.missionVision.map(mv => {
                    return(
                      <MissionVision mv = {mv} />
                    )
                  })}
                  {item.coreValues && item.coreValues.map(core => {
                    return(
                      <CoreValues core={core} />
                    )
                  })}
                  {item.PromiseQuality && item.PromiseQuality.map(promise => {
                    return(
                      <QualityPromise promise = {promise} />
                    )
                  })}
                </div>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default AboutUs;