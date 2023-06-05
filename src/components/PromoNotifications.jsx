import { ReactComponent as PatternThree } from "../assets/img/African Pattern 3.svg";
import { ReactComponent as PatternFour } from "../assets/img/African Pattern 4.svg";
import BreadCarousel from "./BreadCarousel";
import useFetch from "./useFetch";
import data from "../../database/db";
import image1 from "../assets/img/seed-loaf.png"
import image2 from "../assets/img/white-soft-loaf.png"
import image3 from "../assets/img/brown-loaf.png"


const PromoNotifications = () => {
    // const { data: PromoNotifications, error, isLoading } = useFetch('http://localhost:7001/PromoNotifications');
    const images = [image1,image2,image3]
    return (
        <>
            {data.PromoNotifications && data.PromoNotifications.map((item, index) => {
                return (
                    <section className="promo-notifications">
                        <PatternThree className="pattern" />
                        <PatternFour className="pattern" />
                        <div className="pm-wrapper" key={index}>
                            <div className="pm-textBox">
                                <h2>{item.title}</h2>
                                <form>
                                    <input type="text" placeholder="your email" />
                                    <input type="submit" value="SUBMIT" />
                                </form>
                            </div>
                            <div className="pm-imgBox">
                                {images.map((image, index) => {
                                    return (
                                        <div className="pm-img"><img src={image} alt="" /></div>
                                    )
                                })}
                            </div>
                        </div>

                    </section>

                );
            })}
        </>
    );
};

export default PromoNotifications;