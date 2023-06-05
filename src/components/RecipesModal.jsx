import { useState } from "react";
import { ReactComponent as RightArrow } from "../assets/img/right-arrow.svg";
import { ReactComponent as Close } from "../assets/img/Close.svg";
import image1 from "../assets/img/sandwitches.jpg"

const RecipesModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div className="factory-modal">
            <RightArrow
            onClick={toggleModal} 
            className="right-arrow" />
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <Close className="close-btn" onClick={toggleModal} />
                    <div className="modal-content">
                        <div className="imgBox">
                            <img src={image1} alt="" />
                            <img src={image1} alt="" />
                            <img src={image1} alt="" />
                            <img src={image1} alt="" />
                            <img src={image1} alt="" />
                        </div>
                        <div className="textBox">
                            <h2>Shawarma Sandwich</h2>
                            <p>
                                <span style={{display:"inline-block"}}>5 minutes</span>
                                <span style={{display:"inline-block"}}>6 people</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipesModal;