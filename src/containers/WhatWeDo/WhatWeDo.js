import React from "react";
import "./style.css";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Typography from "../../components/Typography/Typography";
import { info } from "./info";
import Card from "../../components/Card/Card";

function WhatWeDo() {
  const { innerWidth } = window;
  return (
    <div className="wwd--main">
      <SectionLabel color={"black"}>What we do</SectionLabel>
      <Typography variant={innerWidth < 599 ? "h3" : "h1"} color={"black"}>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </Typography>
      <div className="wwd--card--container">
        {info.sections.map((item) => (
          <Card
            description={item.description}
            icon={info.getIcons(item.icon)}
            title={item.title}
            key={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
