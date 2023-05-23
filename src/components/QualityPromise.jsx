const QualityPromise = ({promise}) => {
  return (
    <section className="promise">
        <div className="pq-img"><img src={promise.image} alt="" /></div>
        <div className="textBox">
            <h2>{promise.title}</h2>
            <p>{promise.text}</p>
            <p>{promise.text2}</p>
            <p>{promise.text3}</p>
            <h3>C.E.O: <span style={{display:"inline-block"}}>Ngoni Mazango</span></h3>
        </div>
    </section>
  )
}

export default QualityPromise