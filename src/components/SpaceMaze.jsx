import Button from "./Button";


const SpaceMaze = ({ maze }) => {
    return (
        <section className="games space-maze">
            <div className="textBox">
                <h2>{maze.title}</h2>
                <p>{maze.text}</p>
                <p>{maze.text2}</p>
                <Button title="PLAY GAME" toPath={"https://toytheater.com/maze/"}/>
            </div>
            <div className="img">
                <img src={maze.image} alt="" />
            </div>
        </section>
    );
};

export default SpaceMaze;