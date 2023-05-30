const BakersDepots = () => {
  return (
    <section className="bakers-depots">
        <h2>List of baker's Inn Depots</h2>
        <table style={{textAlign:"left", margin:"0 auto",width:"70%"}}>
            <tr className="table-headers">
                    <th style={{borderBottom:"2px solid black"}}>Depot</th>
                    <th style={{borderBottom:"2px solid black"}}>Address</th>
                    <th style={{borderBottom:"2px solid black"}}>Phone Number</th>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Chinhoyi Depot</td>
                <td>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                <td style={{fontWeight:"800"}}>0772 318 309</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Bindura Depot</td>
                <td>461 Luton Road, Industrial Site, Bindura</td>
                <td style={{fontWeight:"800"}}>066 2107317</td>
            </tr>
            <tr>
                <td style={{fontWeight:"800"}}>Murehwa Depot</td>
                <td>Stand number 351 Murehwa Growth Point</td>
                <td style={{fontWeight:"800"}}>0652 122 514</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Mutare Depot</td>
                <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                <td style={{fontWeight:"800"}}>020 60715</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800", marginTop:"60px"}}>Hwange Depot</td>
                <td>29 Derby Drive, Hwange Industrial Site</td>
                <td style={{fontWeight:"800"}}>0281 2820105</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Chiredzi Depot</td>
                <td>329 Lion Drive, Chiredzi</td>
                <td style={{fontWeight:"800"}}>0231 231 2709</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Masvingo Depot</td>
                <td>1310 Mineral Road, Masvingo</td>
                <td style={{fontWeight:"800"}}>039 266 333</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Gweru Depot</td>
                <td>1843 Main Street, Gweru</td>
                <td style={{fontWeight:"800"}}>054 2220 858</td>
            </tr>
            <tr style={{fontSize:"18px"}}>
                <td style={{fontWeight:"800"}}>Zvishavane Depot</td>
                <td>Shabanie Mine Club, Noelville, Zvishavane</td>
                <td style={{fontWeight:"800"}}>0772 395567</td>
            </tr>
        </table>
    </section>
  )
}

export default BakersDepots