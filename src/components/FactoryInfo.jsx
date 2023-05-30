const FactoryInfo = ({ item }) => {
    return (
        <section className="factory-info">
            {item.content && item.content.map(bread => {
                return (
                    <>
                       <div className="fact-card">
                            <img src={bread.image} alt="" />
                            <h2>{bread.title}</h2>
                            <p className="address">{bread.address}</p>
                            <p className="phone1">{bread.phone1}</p>
                            <p className="phone2">{bread.phone2}</p>
                            <p className="voip" ><span style={{ display: "inline-block" }}>VOIP: </span> {bread.VOIP}</p>
                            <p className="toll" ><span style={{ display: "inline-block" }}>Econet Toll Free: </span> {bread.EconetTollFree}</p>
                        </div> 
                    </>
                );
            })}
        </section>
    );
};

export default FactoryInfo;