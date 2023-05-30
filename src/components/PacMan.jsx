import Button from "./Button";

const PacMan = ({pacman}) => {
  return (
    <section className="games pacman">
        <div className="textBox">
            <h2>{pacman.title}</h2>
            <p>{pacman.text}</p>
            <Button title="PLAY GAME" toPath={"https://www.pacman1.net/"}/>
        </div>
        <div className="img">
            <img src={pacman.image} alt="" />
        </div>
    </section>
  )
}

export default PacMan