import Button from "./Button";
import useFetch from "./useFetch";
import data from "../../database/db";
import image1 from "../assets/img/slices-zoomed.jpg"
import image2 from "../assets/img/pies-zoomed.jpg"
import image3 from "../assets/img/scone-cherry.jpg"
import image4 from "../assets/img/ring-donuts.jpg"

const HomeProducts = () => {
    // const { data: homeProducts, error, isLoading } = useFetch('http://localhost:7001/homeproducts');
    const images = [image1,image2,image3,image4]


    return (
        <>
            {data.homeProducts && data.homeProducts.map((item, index) => {
                return (
                    <section className="home-products" key={index}>
                        <h2>{item.title}</h2>
                        <div className="hp-imgBox">
                            {images && images.map(image => {
                                return (
                                    <div className="prod-card">
                                        <img className="hp-product-img" src={image} alt="" />
                                        <div className="prod-text">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Button toPath='/products' title="VIEW COMPLETE RANGE"/>
                    </section>
                );
            })}
        </>
    );
};

export default HomeProducts;