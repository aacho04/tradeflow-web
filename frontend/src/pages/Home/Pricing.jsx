import react from 'react';
function Pricing(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-4 ms-4">
                <h1 className='fs-4 text-muted .custom-headng'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. <a href="#" className="custom-link">See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a></p>
            </div>
            {/* space */}
            <div className="col-1"></div>
            <div className="col-2 text-muted fs-6 d-flex align-items-center me-4">
                <img src="../media/pricing-eq.svg" alt="" className='img-fluid' style={{width:'50%'}}/>
                <p  style={{fontSize:'12px',maxWidth: "150px"}} className='me-0 mt-5 ms-0'>Free account opening</p>
            </div>
            <div className="col-2 text-muted d-flex align-items-center me-4">
                <img src="../media/pricing-eq.svg" alt="" className='img-fluid' style={{width:'50%'}}/>
                <p style={{fontSize:'12px',maxWidth: "150px"}} className='mt-5 pt-4 ' >Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-2 text-muted d-flex align-items-center me-4">
                <img src="../media/other-trades.svg" alt="" className='img-fluid' style={{width:'50%'}}/>
                <p style={{fontSize:'12px',maxWidth: "120px"}} className='me-0 mt-5'>Intraday and F&O</p>
            </div>
        </div>
    </div>
    );

}
export default Pricing;