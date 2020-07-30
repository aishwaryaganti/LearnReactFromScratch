import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  Winter: {
    text: "Burr! it is cold",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  }
  return lat < 0 ? "Winter" : "Summer";
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const icon = season === "Summer" ? "sun" : "snowflake";
  // const text =
  //   season === "Summer" ? "Let's hit the beach" : "Burr! It is chilly ";
  const { text, iconName } = SeasonConfig[season];
  return (
    <div className={`${season} season-display`}>
      <i className={`left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`right massive ${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;
