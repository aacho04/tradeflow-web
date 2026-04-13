import react from 'react';
function Stats(){
    return(
    <div className="container p-2 mt-4">
        <div className="row text-muted">
             <div className="col-md-6 col-12 mt-5 p-4 ps-lg-5 mb-5">
                <h2 className='custom-heading my-5 '>Trust with confidence</h2>
                <h3  className='custom-subheading'>Customer-first always</h3>
                <p className="custom-text mb-4"style={{maxWidth:'520px'}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                 <h3 className='custom-subheading'>No spam or gimmicks</h3>
                <p className="custom-text mb-4" style={{maxWidth:'520px'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" className="custom-link">Our philosophies.</a>
                </p>

                <h3 className='custom-subheading'>The Zerodha universe</h3>
                <p className="custom-text mb-4" style={{maxWidth:'520px'}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                 <h3 className='custom-subheading'>Do better with money</h3>
                <p className="custom-text mb-4" style={{maxWidth:'520px'}}>With initiatives
                like <a href="#" className="custom-link">Nudge</a> and <a href="#" className="custom-link">Kill</a>. Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
             </div>
             <div className="col-md-6 col-12 mt-5">
                <img src="../media/ecosystem.png" alt="stats image" className='img-fluid mt-lg-5' style={{ width: "97%", height: "auto", marginTop: "5rem" }} />
                <a href="#" className="custom-link mx-5 ps-5"> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"> </i></a>
                <a href="#" className="custom-link"> Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"> </i></a>
            </div>
        </div>

    </div>

    );

}
export default Stats;