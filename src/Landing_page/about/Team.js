import React from 'react';

function Team() {
    return (
 <div className="container p-5">
     <div className="row text-center">
        <h1 className="text-muted">
         People
        </h1>
      </div>
<div className="row p-5 mt-5 border-top">
  <div className="col-6 p-5 ">
    <div style={{ fontSize: "18px" }} className="p-3">
     <img style={{borderRadius:"100%", width:"65%"}} src='media/images/nithinKamath.jpg'></img>
      <h5 style={{textAlign:"center"}}>
      Nithin Kamath
      </h5>
      <p> 
      Founder, CEO
      </p>
    </div>
  </div>
  <div className="col-6 p-5 ">
    <div
      style={{
        fontSize: "18px",
        marginLeft: "-60px",
        marginRight: "20px",
      }}
      className="p-3"
    >
      <p>
        In addition, we run a number of popular open online educational
        and community initiatives to empower retail traders and investors.
      </p>
      <p>
        <a style={{ textDecoration: "none" }} href="">
          Rainmatter
        </a>
        , our fintech fund and incubator, has invested in several fintech
        startups with the goal of growing the Indian capital markets.
      </p>
      <p>
        And yet, we are always up to something new every day. Catch up on
        the latest updates on our{" "}
        <a style={{ textDecoration: "none" }} href="">
          blog
        </a>{" "}
        or see what the media is{" "}
        <a style={{ textDecoration: "none" }} href="">
          saying about us
        </a>
        .
      </p>
    </div>
  </div>
</div>
        </div>
      );
}

export default Team;