import Button from "./Button";
import useFetch from "./useFetch";
import data from "../../database/db";

const HomeProducts = () => {
    // const { data: homeProducts, error, isLoading } = useFetch('http://localhost:7001/homeproducts');


    return (
        <>
            {data.homeProducts && data.homeProducts.map((item, index) => {
                return (
                    <section className="home-products" key={index}>
                        <h2>{item.title}</h2>
                        <div className="hp-imgBox">
                            {item.images && item.images.map(item => {
                                return (
                                    <div className="prod-card">
                                        <img className="hp-product-img" src={item.image} alt="" />
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