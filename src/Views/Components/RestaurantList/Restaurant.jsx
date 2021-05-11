import React from "react";
import InsetList from "./InsetList";

const Restaurant = () => {
  return (
    <div>
      <h2>Trouver un restaurant </h2>
      <img
        src="assets/mars2.jpg"
        alt="map.location"
        style={{ maxWidth: "400px" }}
      />
      <InsetList />
    </div>
  );
};

export default Restaurant;
