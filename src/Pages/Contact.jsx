import data from "../../database/db";
import BakersDepots from "../components/BakersDepots";
import CallBack from "../components/CallBack";
import ContactHero from "../components/ContactHero";
import Enquiries from "../components/Enquiries";
import FactoryInfo from "../components/FactoryInfo";

const Contact = () => {

    return (
        <div>
            {data.contact && data.contact.map(item => {
                return (
                    <>
                        {item.content && item.content.map(item => {
                            return (
                                <>
                                    {item.hero && item.hero.map(hero => {
                                        return (
                                            <>
                                                <ContactHero hero={hero} />
                                            </>
                                        );
                                    })}
                                    {item.breadFactory && item.breadFactory.map(item => {
                                        return (
                                            <>
                                                <FactoryInfo item={item} />
                                                <BakersDepots/>
                                            </>
                                        );
                                    })}
                                    {item.Enquiries && item.Enquiries.map(enquire => {
                                        return(
                                            <>
                                            <Enquiries enquire={enquire} />
                                            </>
                                        )
                                    })}
                                    {item.CallBack && item.CallBack.map(callback => {
                                        return(
                                            <>
                                            <CallBack callback={callback} />
                                            </>
                                        )
                                    })}
                                </>
                            );
                        })}
                    </>
                );
            })}
        </div>
    );
};

export default Contact;