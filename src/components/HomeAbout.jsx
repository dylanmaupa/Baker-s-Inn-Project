import Button from "./Button";
import useFetch from "./useFetch";
import data from "../../database/db";


const HomeAbout = () => {
    // const { data: homeAbout, error, isLoading } = useFetch('http://localhost:7001/homeAbout');
    return (
        <>
            {data.homeAbout && data.homeAbout.map((item, index) => {
                return (
                    <section className="home-about" >
                        <div className="about-textBox" key={index}>
                            <h2 className="about-title">{item.title}</h2>
                            <p className="about-text">{item.text}</p>
                            <Button className="about-btn" toPath="/about" title="READ MORE" />
                        </div>
                        <div className="about-imgBox">
                            {item.sandwiches && item.sandwiches.map((sandwich, index) => {
                                return (
                                    <div className="abt-img"><img src={sandwich} alt="sandwiches_" /></div>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default HomeAbout;