import React from "react";

function Awards() {
  return (
    <div className="container mb-5 ">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6 p-5">
          <h1> Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million zerodha clints contritube to over 15% of all retail order
            volumes in india by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
            <ul>
                <li><p>Stocks and IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bond and Gover. secureties</p></li>
              </ul>
            </div>
          </div>
           <img style={{width:"90%", paddingTop:"7px"}} src="media/images/pressLogos.png" alt="Press logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
