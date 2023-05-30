import Button from "./Button";

const RiskyWay = ({risky}) => {
    return (
        <section className="games risky-way">
            <div className="textBox">
                <h2>{risky.title}</h2>
                <p>{risky.text}</p>
                <Button title="PLAY GAME" toPath={"https://www.addictinggames.com/action/risky-way#url"}/>
            </div>
            <div className="img">
                <img src={risky.image} alt="" />
            </div>
        </section>
    );
};

export default RiskyWay;