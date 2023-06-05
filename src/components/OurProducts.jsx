import { useState,useEffect } from "react";

const OurProducts = ({ products }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index)
    }
    return (
        <section>
            <h2>{products.title}</h2>
            <ul className="nav-rec">
                <li><a onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "tab-link"}>Bread</a></li>
                <li><a onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "tab-link"}>Meat Pies</a></li>
                <li><a onClick={() => toggleTab(3)} className={toggleState === 3 ? "active" : "tab-link"}>Scones</a></li>
                <li><a onClick={() => toggleTab(4)} className={toggleState === 4 ? "active" : "tab-link"}>Donuts</a></li>
            </ul>
            <div className="tab-content products">
                <div className={toggleState === 1 ? "tab-wrapper products tab-Active": "tab-wrapper"}>
                    {products.bread && products.bread.map(bread => {
                        return(
                            <div className="tab-card">
                                <div className="img">
                                    <img src={bread.image} alt="" />
                                </div>
                                <div className="textBox">
                                    <h3>{bread.title}</h3>
                                    <p>{bread.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={toggleState === 2 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                    {products.meatPies && products.meatPies.map(pie => {
                        return(
                            <div className="tab-card">
                                <div className="img">
                                    <img src={pie.image} alt="meat_pie_" />
                                </div>
                                <div className="textBox">
                                    <h3>{pie.title}</h3>
                                    <p>{pie.text}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>
                <div className={toggleState === 3 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                    {products.scones && products.scones.map(scone => {
                        return(
                            <div className="tab-card">
                                <div className="img">
                                    <img src={scone.image} alt="scone_" />
                                </div>
                                <div className="textBox">
                                    <h3>{scone.title}</h3>
                                    <p>{scone.text}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>
                <div className={toggleState === 4 ? "tab-wrapper tab-Active": "tab-wrapper"}>
                    {products.donuts && products.donuts.map(donut => {
                        return(
                            <div className="tab-card">
                                <div className="img">
                                    <img src={donut.image} alt="donut_" />
                                </div>
                                <div className="textBox">
                                    <h3>{donut.title}</h3>
                                    <p>{donut.text}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>
            </div>
        </section>
    );
};

export default OurProducts;