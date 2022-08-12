import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Home-img.png";

function HomePage() {
  return (
    <section className="home-page">
      <Link className="home-link-web" to="/portfolio/websites">
        {" "}
        <svg
          width="58"
          height="90"
          viewBox="0 0 58 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.0825 87.2783C48.2047 90.0002 52.9424 89.6757 55.6643 86.5535C58.3863 83.4313 58.0618 78.6936 54.9395 75.9717L45.0825 87.2783ZM8 45L3.07149 39.3467C1.4377 40.771 0.5 42.8325 0.5 45C0.5 47.1675 1.4377 49.229 3.07149 50.6533L8 45ZM54.9395 14.0283C58.0618 11.3064 58.3863 6.56871 55.6643 3.44649C52.9424 0.324257 48.2047 -0.000238419 45.0825 2.7217L54.9395 14.0283ZM54.9395 75.9717L12.9285 39.3467L3.07149 50.6533L45.0825 87.2783L54.9395 75.9717ZM12.9285 50.6533L54.9395 14.0283L45.0825 2.7217L3.07149 39.3467L12.9285 50.6533Z"
            fill="#FB9C4C"
          />
        </svg>
        WEBSITE DEVELOPER
      </Link>
      <img className="home-img" src={logo} alt="illustrated logo of Casey" />
      <Link className="home-link-graphic" to="/portfolio/graphics">
        GRAPHIC DESIGNER{" "}
        <svg
          width="58"
          height="90"
          viewBox="0 0 58 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9175 87.2783C9.79527 90.0002 5.05763 89.6757 2.33569 86.5535C-0.386261 83.4313 -0.0617638 78.6936 3.06046 75.9717L12.9175 87.2783ZM50 45L54.9285 39.3467C56.5623 40.771 57.5 42.8325 57.5 45C57.5 47.1675 56.5623 49.229 54.9285 50.6533L50 45ZM3.06046 14.0283C-0.0617638 11.3064 -0.386261 6.56871 2.33569 3.44649C5.05763 0.324257 9.79527 -0.000238419 12.9175 2.7217L3.06046 14.0283ZM3.06046 75.9717L45.0715 39.3467L54.9285 50.6533L12.9175 87.2783L3.06046 75.9717ZM45.0715 50.6533L3.06046 14.0283L12.9175 2.7217L54.9285 39.3467L45.0715 50.6533Z"
            fill="#FB9C4C"
          />
        </svg>
      </Link>
    </section>
  );
}

export default HomePage;
