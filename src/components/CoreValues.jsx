const CoreValues = ({core}) => {
  return (
    <section className="coreValues">
        <h2>{core.title}</h2>
        <div className="wrapper">
            {core.card && core.card.map(card => {
                return(
                    <div className="core-card">
                        <div className="img"><img src={card.image} alt="" /></div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default CoreValues