const KidsHero = ({ hero }) => {
    return (
        <div className="kids-hero">
            <h1>{hero.title} <br />{hero.title2}</h1>
            <div className="imgBox">
                <img className="img" src={hero.image} alt="" />
            </div>
        </div>
    );
};

export default KidsHero;