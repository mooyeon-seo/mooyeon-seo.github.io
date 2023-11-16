import "./Work.css";
import React from "react";
// import other components
import TimeLine from "./Timeline";
import Description from "./Description";

export default function Work({
  timeline,
  company,
  position,
  location,
  link,
  descriptions,
}) {
  return (
    <div className="work">
      <TimeLine timeline={timeline} location={location} />
      <div>
        <div>
          <h3>{company}</h3>
          <h4>{position}</h4>
        </div>
        <Description descriptions={descriptions} />
      </div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit {company}
        </a>
      </div>
    </div>
  );
}
