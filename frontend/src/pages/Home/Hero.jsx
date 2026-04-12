import react from 'react';
function Hero(){
    return(
        <div className="container p-5">
            <div className="row text-center" >
            <img src="../media/trading.png" alt="trading" className="img-fluid mb-5"/>
            <h1 className="mt-4 fs-2 ">Invest in Everything</h1>
            <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="p-2 btn btn-primary fs-6"style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
            </div>
            

        </div>
    );

}
export default Hero;