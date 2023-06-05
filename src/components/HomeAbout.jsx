import Button from "./Button";
import useFetch from "./useFetch";
import data from "../../database/db";
import image1 from "../assets/img/bakers-sandwitch.jpg"
import image2 from "../assets/img/bakers-pie.jpg"
import image3 from "../assets/img/donut-coffee.jpg"
import image4 from "../assets/img/bread-slices.jpg"

const HomeAbout = () => {
    // const { data: homeAbout, error, isLoading } = useFetch('http://localhost:7001/homeAbout');

    const images = [image1,image2,image3,image4]
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
                            {images && images.map((sandwich, index) => {
                                return (
                                    <div className="abt-img" key={index}><img src={sandwich} alt="sandwiches_" /></div>
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