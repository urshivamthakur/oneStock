import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 pb-5 text-center">
      <h1>404 Not Found</h1>
      <p className="my-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="btn btn-primary p-2 fs-5">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
