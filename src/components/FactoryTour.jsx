import Button from "./Button";
import useFetch from "./useFetch";

const FactoryTour = () => {
    const { data: FactoryTour, error, isLoading } = useFetch('http://localhost:7001/FactoryTour');
    return (
        <>
            {FactoryTour && FactoryTour.map((item, index) => {
                return (
                    <section className="factory-tour" key={index}>
                        <div className="ft-textBox">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                            <Button title="BOOK A FACTORY TOUR" />
                        </div>
                        <div className="ft-img">
                            <img src={item.image} alt="" />
                        </div>
                    </section>
                );
            })}
        </>
    );
};


export default FactoryTour;