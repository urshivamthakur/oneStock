import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemoURL=""
        tryDemo="Try Demo &nbsp;"
        tryDemoIcon="fa-solid fa-arrow-right"
        learnMoreURL=""
        learnMore="Learn More &nbsp;"
        learnMOreIcon="fa-solid fa-arrow-right"
        googlePlayURL=""
        googlePlay="media/images/googlePlayBadge.svg"
        appStoreURL=""
        appStore="media/images/appstoreBadge.svg"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemoURL=""
        tryDemo="Learn More &nbsp;"
        tryDemoIcon="fa-solid fa-arrow-right"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemoURL=""
        tryDemo="Coin &nbsp;"
        tryDemoIcon="fa-solid fa-arrow-right"
        googlePlayURL=""
        googlePlay="media/images/googlePlayBadge.svg"
        appStoreURL=""
        appStore="media/images/appstoreBadge.svg"
      />

      <RightSection
        imageURL="media/images/kiteConnect.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemoURL=""
        tryDemo="Kite Connect &nbsp;"
        tryDemoIcon="fa-solid fa-arrow-right"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlayURL=""
        googlePlay="media/images/googlePlayBadge.svg"
        appStoreURL=""
        appStore="media/images/appstoreBadge.svg"
      />

      <div className="text-center my-5">
        <p className="fs-4 py-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>

      <Universe />
    </>
  );
}

export default ProductPage;
