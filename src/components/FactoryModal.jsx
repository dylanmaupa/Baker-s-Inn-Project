import { useState } from "react";
import Button from "./Button";
import { ReactComponent as Close } from "../assets/img/Close.svg";
import { Link } from "react-router-dom";

const FactoryModal = () => {
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
      <button onClick={toggleModal}>
        <Button title="BOOK A FACTORY TOUR" />
      </button>
      {modal && (

        <div className="form modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Book A Factory Tour</h2>
            <Close className="close-btn" onClick={toggleModal} />
            <form className="form">
              <input className="label1" type="text" placeholder="Name of Organisation" />
              <input type="text" placeholder="Name of Contact Person" />
              <input type="address" placeholder="Organization Address" />
              <input type="location" placeholder="Organization’s Resident Town" />
              <input type="number" placeholder="Contact Person’s Telephone" />
              <input type="email" placeholder="Contact Person’s E-mail" />
              <input type="text" placeholder="Date of Visit" />
              <label>
                <select name="Num of Participants">
                  <option value="">Number of Participants</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <input value="Custom" type="text" placeholder="Custom"/>
                </select>
              </label>
              <label className="label2">
              <select name="Age Range">
                  <option value="">Age Range of Participants</option>
                  <option value="">0-9 years</option>
                  <option value="">10-13 years</option>
                  <option value="">14-18 years</option>
                  <option value="">19-25 years</option>
                  <option value="">25 years and Above</option>
                </select>
              </label>
            </form>
            <div className="textBox">
              <p>Plant Visit <Link style={{display:"inline-block"}} to="#">Terms & Conditions</Link></p>
              <p>Plant Visit <Link style={{display:"inline-block"}} to="#">Safety Regulations</Link></p>
            </div>
            <div className="checkbox">
              {/* <input type="checkbox"/> */}
              <p><input className="check" type="checkbox"/>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</p>
              <p><input className="check" type="checkbox" />Have Read The Safety Regulations</p>
            </div>
            <Button className="fact-btn" type="submit" title="SUBMIT" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FactoryModal;