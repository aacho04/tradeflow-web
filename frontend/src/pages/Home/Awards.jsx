import react from 'react';
function Awards(){
    return(
    <div className="container p-5 ">
        <div className="row gx-2 ">
            <div className="col-12 col-md-6 mt-5">
                <img src="../media/largest-broker.svg" alt="Broker image" />

            </div>
            <div className="col-12 col-md-6 p-5">
                <h1 className="fs-2 mb-3 me-5 .text-black-50" style={{ textAlign: "justify" ,color:'#3A3A3A'}}>Largest stock broker in India</h1>
                <p className='mb-4 me-4'style={{ textAlign: "justify" }}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row' style={{ textAlign: "left" }}>
                    
                    <div className="col-6 col-md-6 text-muted">
                    <ul >
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md-6 text-muted">
                    <ul>
                    <li>Stocks & IPOs    </li>
                    <li>Direct mutual funds</li>
                    <li style={{ textAlign: "left" }}>Bonds and Govt. securities</li>
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