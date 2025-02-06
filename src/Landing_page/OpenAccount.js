import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 style={{ fontSize: "40px" }} className="mt-5">
        Open a Zerodha account
        </h1>
        <p style={{ fontSize: "20px" }} className="text-muted mt-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-4"
          style={{
            width: "20%",
            margin: "0px auto",
            color: "white",
            fontFamily: "bold",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
