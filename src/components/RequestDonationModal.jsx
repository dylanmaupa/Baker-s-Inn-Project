import { useState } from "react";
import Button from "./Button";
import { ReactComponent as Close } from "../assets/img/Close.svg";
import { Link } from "react-router-dom";

const RequestDonationModal = () => {
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
                <Button title="REQUEST A DONATION" />
            </button>
            {modal && (

<div className="form modal">
  <div onClick={toggleModal} className="overlay"></div>
  <div className="modal-content">
    <h2>Request Product Donations</h2>
    <p>You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event</p>
    <Close className="close-btn" onClick={toggleModal} />
    <form>
      <input className="label1" type="text" placeholder="Name of Organisation" />
      <input type="text" placeholder="Name of Contact Person" />
      <input type="address" placeholder="Contact Person Position" />
      <input type="location" placeholder="Organization Address" />
      <input type="number" placeholder="Contact Person’s Telephone" />
      <input type="email" placeholder="Contact Person’s E-mail" />
      <input type="text" placeholder="Date of Event" />
      <label>
        <select name="Num of Participants">
          <option value="">Intend Use of Donation</option>
        </select>
      </label>
      <label className="">
      <select name="Age Range">
          <option value="">Number of Attendants</option>
          <option value="">0-9</option>
          <option value="">10-13</option>
          <option value="">14-18</option>
          <option value="">19-25</option>
          <option value="">25 and Above</option>
        </select>
      </label>
      <label>
        <select name="Num of Participants">
          <option value="">What Product Are Specifically Looking For?</option>
        </select>
      </label>
    </form>
    <Button className="fact-btn" type="submit" title="Proceed to next step" />
  </div>
</div>
)}
        </div>
    );
};

export default RequestDonationModal;