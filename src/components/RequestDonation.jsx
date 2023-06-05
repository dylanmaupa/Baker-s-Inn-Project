import Button from "./Button";
import useFetch from "./useFetch";
import data from "../../database/db";
import RequestDonationModal from "./RequestDonationModal";
import image from "../assets/img/people-packaging-zoomed.jpg"

const RequestDonation = () => {
    // const { data: RequestDonation, error, isLoading } = useFetch('http://localhost:7001/RequestDonation');

  return (
    <>
        {data.RequestDonation && data.RequestDonation.map((item,index) => {
            return(
                <section className="request-donation" key={index}>
                    <div className="rq-img">
                        <img src={image} alt="people_packing_" />
                    </div>
                    <div className="rq-textBox">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        {/* <Button title="REQUEST DONATION"/> */}
                        <RequestDonationModal/>
                    </div>
                </section>
            )
        })}
    </>
  )
}

export default RequestDonation