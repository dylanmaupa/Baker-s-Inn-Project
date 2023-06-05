import Button from "./Button";
import FactoryModal from "./FactoryModal";
import useFetch from "./useFetch";
import data from "../../database/db";
import image from "../assets/img/loaves-unsliced.jpg"

const FactoryTour = () => {
    // const { data: FactoryTour, error, isLoading } = useFetch('http://localhost:7001/FactoryTour');
    return (
        <>
            {data.FactoryTour && data.FactoryTour.map((item, index) => {
                return (
                    <section className="factory-tour" key={index}>
                        <div className="ft-textBox">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        <FactoryModal/>
                        </div>
                        <div className="ft-img">
                            <img src={image} alt="" />
                        </div>
                    </section>
                );
            })}
        </>
    );
};


export default FactoryTour;