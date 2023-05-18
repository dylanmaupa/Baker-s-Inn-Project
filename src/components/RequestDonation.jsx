import Button from "./Button";
import useFetch from "./useFetch";

const RequestDonation = () => {
    const { data: RequestDonation, error, isLoading } = useFetch('http://localhost:7001/RequestDonation');

  return (
    <>
        {RequestDonation && RequestDonation.map((item,index) => {
            return(
                <section className="request-donation" key={index}>
                    <div className="rq-img">
                        <img src={item.image} alt="people_packing_" />
                    </div>
                    <div className="rq-textBox">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <Button title="REQUEST DONATION"/>
                    </div>
                </section>
            )
        })}
    </>
  )
}

export default RequestDonation