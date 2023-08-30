import React from "react";
import "./style.css";
import SectionLabel from "../SectionLabel/SectionLabel";
import Typography from "../Typography/Typography";
const LinkItem = ({ children }) => {
  return (
    <a className="linkitem--main" href={"/#"}>
      {children}
    </a>
  );
};
function Footer() {
  return (
    <div className="footer--main">
      <SectionLabel>Contact Us</SectionLabel>
      <div className="footer--content">
        <div>
          <Typography variant={"h2"}>
            Have a project in mind? Let's make it happen
          </Typography>
        </div>
        <div></div>
        <div>
          <Typography variant={"body1"}>
            22 Street Name, Suburb, 8000,
          </Typography>
          <Typography variant={"body1"}>Cape Town, South Africa</Typography>
          <Typography variant={"body1"}>+27 21 431 0001</Typography>
          <a className="footer--email" href="#/">
            enquirie@website.co.za
          </a>
        </div>
      </div>
      <div className="footer--links">
        <div>
          <LinkItem>Terms of Service</LinkItem>
          <LinkItem>Privacy policy</LinkItem>
          <LinkItem>Impressum</LinkItem>
        </div>
        <div>
          <LinkItem>Facebook</LinkItem>
          <LinkItem>Instagram</LinkItem>
          <LinkItem>Twitter</LinkItem>
        </div>
        <div>
          <LinkItem>Github</LinkItem>
          <LinkItem>Linkedin</LinkItem>
          <LinkItem>Teams</LinkItem>
        </div>
        <div>
          <LinkItem>Youtube</LinkItem>
          <LinkItem>Behance</LinkItem>
          <LinkItem>Dribbble</LinkItem>
        </div>
        <div>
          <LinkItem>Explore open jobs</LinkItem>
          <LinkItem>©2000—2023 Company Name</LinkItem>
        </div>
      </div>
    </div>
  );
}

export default Footer;
