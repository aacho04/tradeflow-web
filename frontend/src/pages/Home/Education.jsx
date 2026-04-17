import react from "react";
function Education() {
  return (
    <div className="container mt-5 mb-5 ps-5">
      <div className="row">
        <div className="col ps-5">
          <img
            src="../media/education.svg"
            alt="education-varsity"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col pe-5 mt-4 me-5">
          <h1 className="fs-4 custom-heading">
            Free and open market education
          </h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <br></br>
          <p>
            <a href="#" className="custom-link">
              Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
          <br></br>
          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <br></br>
          <a href="#" className="custom-link">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;
