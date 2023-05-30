import Button from "./Button";

const CallBack = ({callback}) => {
  return (
    <section className="callback">
        <h2>{callback.title}</h2>
        <p>{callback.text}</p>
        <form>
            <label className="label1">
                <select name="Your Title">
                    <option value="Your Title">Your Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </label>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Phone Number" required />
            <input type="email" placeholder="Your Email" required />
            <label className="label2">
                <select name="Select Area Of Interest">
                    <option value="">Select Area Of Interest</option>
                </select>
                <select className="nature" name="Nature Of Enquiry">
                    <option value="">Nature Of Enquiry</option>
                </select>
                <select name="Do You Want To Be Contacted By Phone">
                    <option value="">Do You Want To Be Contacted By Phone</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <textarea required placeholder="Your Message" cols="30" rows="15"></textarea>
            <Button type="submit" className="form-btn" title="SUBMIT" />
        </form>
    </section>
  )
}

export default CallBack