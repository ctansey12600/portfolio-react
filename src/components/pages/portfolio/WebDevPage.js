//Undone, needs to display websites from data to have similar layout to blogs (vertical list)
import React, { useContext } from "react";
import WebsiteCard from "./WebsiteCard";
import { WebsiteContext } from "../../context/websites";

function WebDevPage() {
  const webData = useContext(WebsiteContext);

  if (!webData) return <h2 className="display-text">Loading...</h2>;

  const renderWeb = webData.map((websiteID) => (
    <li key={websiteID.id}>
      <WebsiteCard websiteID={websiteID} />
    </li>
  ));

  return (
    <section className="websites">
      <ul>{renderWeb}</ul>
    </section>
  );
}

export default WebDevPage;
