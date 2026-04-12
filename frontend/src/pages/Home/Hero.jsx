import react from 'react';
function Hero(){
    return(
        <div className="container p-4 mb-5">
            <div className="row text-center" >
            <img className="img-fluid d-block mx-auto" style={{width:"60%"}} src="../media/landing.svg" alt="trading"/>
            <h1 className="mt-5 fs-4 mb-2 text-dark">Invest in Everything</h1>
            <p className='fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-2 btn btn-primary fs-6 mb-5 mt-4"style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
            </div>
            

        </div>
    );

}
export default Hero;