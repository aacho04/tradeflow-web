import react from 'react';
function Awards(){
    return(
    <div className="container ">
        <div className="row gx-2">
            <div className="col-12 col-md-6 mt-5">
                <img src="../media/largest-broker.svg" alt="Broker image" />

            </div>
            <div className="col-12 col-md-6 p-5">
                <h1 className="fs-2 mb-3 me-5 " style={{ textAlign: "justify" }}>Largest stock broker in India</h1>
                <p className='mb-4 me-4'style={{ textAlign: "justify" }}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row' style={{ textAlign: "justify" }}>
                    
                    <div className="col-6 col-md-6">
                    <ul >
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md-6">
                    <ul>
                    <li>Stocks & IPOs    </li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt. securities</li>
                    </ul>
                    </div>
                    <img src="../media/press-logos.png" alt="press logos" className='img-fluid'style={{ width: "90%", height:"30px", marginTop: "4px", marginLeft:"20px"}}/>
                
                </div>
                
                   
                    

            </div>
        </div>
    </div>
    );

}
export default Awards;