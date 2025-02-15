import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 style={{ fontSize: "40px" }} className="mt-5">
        404 Page Not Found
        </h1>
        <p style={{ fontSize: "20px" }} className="text-muted mt-4">
        Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
