import React from 'react'
import "./style.css";
import Typography from "../../components/Typography/Typography";


function CardComponent({ image, title, description }) {
    return (
        <div className="case--card--main">
          <img className="case--card--image" src={image} alt="title" />
          <div className="case--card--content">
            <div className="case--line"></div>
            <Typography variant={"h3"}>{title}</Typography>
            <Typography>{description}</Typography>
          </div>
        </div>
      );
}

export default CardComponent