import React from 'react'
import "./style.css";
import Typography from '../Typography/Typography';


function Card({ icon, title, description }) {
    return (
        <div className="wwd--card--main">
          <div className="wwd--card--icon">{icon}</div>
          <Typography variant={"h4"} color={"black"}>
            {title}
          </Typography>
          <Typography variant={"body2"} color={"black"}>
            {description}
          </Typography>
        </div>
      );
}

export default Card