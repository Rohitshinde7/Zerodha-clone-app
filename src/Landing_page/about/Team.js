import React from "react";

function Team() {
  return (
    <div className="container p-5 pt-0">
      <div className="row text-center">
        <h1 className="text-muted fs-1">People</h1>
      </div>
      <div className="row p-5 pt-0">
        <div className="col-6 p-5 ">
          <div style={{ fontSize: "18px" }} className="p-3">
            <img
              style={{ borderRadius: "100%", width: "65%", marginLeft: "20%" }}
              src="media/images/nithinKamath.jpg"
            ></img>
            <h5 style={{ marginLeft: "31%" }} className="p-4 pb-0 text-muted">
              Nithin Kamath
            </h5>
            <p
              style={{ marginLeft: "35%" }}
              className="p-4 pb-0 pt-1 text-muted fs-6"
            >
              Founder, CEO
            </p>
          </div>
        </div>
        <div className="col-6 p-5 mt-3 ">
          <div
            style={{
              fontSize: "17px",
              marginLeft: "-60px",
              marginRight: "20px",
            }}
            className="p-3"
          >
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>

            <p>
              Connect on{" "}
              <a style={{ textDecoration: "none" }} href="">
                Homepage
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="">
                TradingQnA
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row p-5 text-center">
        <div className="col-4">
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Nikhil.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Nikhil Kamath</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-7">Co-founder & CFO</h7>
        </div>
        <div className="col-4">
          {" "}
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Kailash.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Dr. Kailash Nadh</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-6">CTO</h7>
        </div>
        <div className="col-4">
          {" "}
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Venu.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Venu Madhav</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-6">COO</h7>
        </div>
      </div>
      <div className="row p-5 text-center">
        <div className="col-4">
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Hanan.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Hanan Delvi</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-7">CCO</h7>
        </div>
        <div className="col-4">
          {" "}
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Seema.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Seema Patil</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-6">Director</h7>
        </div>
        <div className="col-4">
          {" "}
          <img
            style={{ borderRadius: "100%", width: "65%" }}
            src="media/images/Austin.jpg"
          ></img>
          <h5 className="p-4 pb-0 text-muted">Austin Prakesh</h5>
          <h7 className="p-4 pb-0 pt-1 text-muted fs-6">Director Strategy</h7>
        </div>
      </div>
    </div>
  );
}

export default Team;
