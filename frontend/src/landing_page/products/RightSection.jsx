import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemoURL,
  tryDemo,
  tryDemoIcon,
  learnMoreURL,
  learnMore,
  learnMOreIcon,
}) {
  return (
    <div className="container">
      <div className="row my-5 py-4 align-items-center">
        <div className="col-5">
          <h2 className="ps-5">{productName}</h2>
          <p className="p-5">{productDescription}</p>
          <div class="d-flex justify-content-start ps-5 mb-4">
            <a class="text-decoration-none pe-5" href={tryDemoURL}>
              {tryDemo}
              <i className={tryDemoIcon}></i>
            </a>
            <a class="text-decoration-none" href={learnMoreURL}>
              {learnMore}
              <i class={learnMOreIcon}></i>
            </a>
          </div>
        </div>
        <div className="col-7 p-3">
          <img className="ps-5 mx-5" style={{ width: "90%" }} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
