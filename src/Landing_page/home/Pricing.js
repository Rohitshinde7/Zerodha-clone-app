import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-5">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p style={{ fontSize: "17px" }} className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>

        <div className="col-2 p-4">
           <img src="media/images/pricing-eq.svg"></img>
            <p style={{ fontSize: "11px", marginLeft:"20px", marginTop:"-5px" }}>Free account opening</p>
        
        </div>
        <div className="col-2  p-4">
          <img src="media/images/pricing-eq.svg"></img>
          <p style={{ fontSize: "11px", marginLeft:"20px", marginTop:"-5px" }}> Free equity delivery
          and direct mutual funds</p>
        </div>
        <div className="col-2  p-4">
          <img src="media/images/other-trades.svg"></img>
          <p style={{ fontSize: "11px", marginLeft:"20px", marginTop:"-5px" }}> Intraday and
          F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
