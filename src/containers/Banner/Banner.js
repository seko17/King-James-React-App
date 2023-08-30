import React from 'react'
import "./style.css"
import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'


function Banner() {
  return (
     <div className="banner">
        <img src={require("../../assets/confidence.jpeg")} alt="bg" />
        <div className="content">
          <div className="banner-text">
            <Typography variant={"h1"}>Live with Confidence</Typography>
            <p>
              José Mourinho brings confidence to pan-African Sanlam campaign.
            </p>
            <Button color={"black"}>View project</Button>
          </div>
        </div>
      </div>
  )
}

export default Banner