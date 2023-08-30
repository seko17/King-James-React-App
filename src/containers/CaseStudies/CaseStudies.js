import React from "react";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import "./style.css";
import { info } from "./info";
import { responsive } from "./Responsive";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardComponent from "./CardComponent";


function CaseStudies() {
  const images = [
    require("../../assets/olympian.jpeg"),
    require("../../assets/dragon.jpeg"),
    require("../../assets/skhokho.jpeg"),
  ];

  return (
    <div className="case--main">
      <SectionLabel color={"black"}>Case Studies</SectionLabel>
      <Carousel responsive={responsive}>
      {info.cards.map((item, key) => {
          return (
            <CardComponent
              key={key}
              description={item.description}
              image={images[key]}
              title={item.title}
            />
          );
        })}
</Carousel>
    </div>
  );
}

export default CaseStudies;
