import { ReactComponent as Flag } from "../assets/img/flag.svg";
import { ReactComponent as Vision } from "../assets/img/vision.svg";

const MissionVision = ({ mv }) => {
    return (
        <section className="mv">
            <div className="mv-card">
                <div className="imgBox">
                    <Flag className='icon flag' />
                </div>
                <div className="textBox">
                    <h2>{mv.title}</h2>
                    <p>{mv.text}</p>
                </div>
            </div>
            <div className="mv-card">
                <div className="imgBox">
                    <Vision className="icon vision" />
                </div>
                <div className="textBox">
                    <h2>{mv.title2}</h2>
                    <p>{mv.text}</p>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;