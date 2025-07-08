import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-light border-bottom sticky-top lh-lg">
      <div class="container px-5">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "8rem" }}
          />
        </a>

        <form class="d-flex" role="search">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li class="nav-item px-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item px-3 fs-5">
                <a class="nav-link active" href="#">
                  <i class="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
