import react from 'react';
function Pricing(){
    return(
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-4 me-1 ms-4 p-2">
                <h1 className='fs-4 custom-heading'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. <br></br> <br></br><a href="#" className="custom-link">See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a></p>
            </div>
            {/* space */}
            <div className="col-1"></div>
            <div className="col-2 text-muted fs-6 d-flex align-items-center me-0 ">
                <img src="../media/pricing-eq.svg" alt="" className='img-fluid' style={{width: '100px', height: 'auto' }}/>
                <p  style={{fontSize:'12px',maxWidth: "150px",marginLeft: '-20px'}} className=' mt-4'>Free account opening</p>
            </div>
            <div className="col-2 text-muted d-flex align-items-center me-3 ms-0 ">
                <img src="../media/pricing-eq.svg" alt="" className='img-fluid' style={{width: '100px', height: 'auto' ,marginLeft:"-10px"}}/>
                <p style={{fontSize:'12px',maxWidth: "120px",marginLeft: '-20px'}} className=' pt-4 mt-3' >Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-2 text-muted d-flex align-items-center me-3">
                <img src="../media/other-trades.svg" alt="" className='img-fluid' style={{width:'50%'}}/>
                <p style={{fontSize:'12px',maxWidth: "120px" ,marginLeft: '-10px'}} className='p-1'>Intraday and F&O</p>
            </div>
        </div>
    </div>
    );

}
export default Pricing;