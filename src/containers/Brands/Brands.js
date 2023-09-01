import React, { useEffect, useState } from "react";
import "./style.css";
import Typography from "../../components/Typography/Typography";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Button from "../../components/Button/Button";
import { useApiFetch } from "../../hooks/useApiFetch";

function Brands() {
  const apiUrl = "https://king-james-node-backend.vercel.app/data/"; // Replace with your API URL
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState("any");

  const getData = (props) => {
    setFilterOption(props);
    useApiFetch.get(`${apiUrl}${props}`)
      .then((Res) => {
        setLoading(Res.loading);
        setData(Res.data);
      })
      .catch((err) => {
        setLoading(err.loading);
        console.log(err);
      });
  };

  useEffect(() => {

    getData(`any`);
    
    setTimeout(() => {
      var selectElement = document.getElementById("filterselect");
      if (selectElement) {
        selectElement.addEventListener("change", function () {
          var newSelectedValue = selectElement.value;
          getData(newSelectedValue.replaceAll(" - ", ""));
        });
      }
    }, 500);
  }, []);

  const filter = ["A - G", "H - N", "O - U", "V - Z"];

  return (
    <div className="brands--main">
      <SectionLabel color={"black"}>You’ll be in good company</SectionLabel>
      <div className="brands--toolbar">
        <Typography variant={"h1"} color={"black"}>
          Trusted by leading brands
        </Typography>
        <div className="brands--toolbar--controls">
          <Button
            onClick={() => {
              getData("order");
            }}
            color={"black"}
            variant={"button"}
          >
            Sort {filterOption === "any" ? <b>A - Z</b> : <b>Z - A</b>}
          </Button>
          <select
            defaultValue={"default"}
            id="filterselect"
            className="minimal"
          >
            <option disabled value={"default"}>
              Filter Icons
            </option>
            {filter.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="brands--logo--container">
        {loading && "Loading"}
        {data.length === 0 && (
          <Typography color={"black"} variant={"h3"}>
            No data
          </Typography>
        )}
        {data.map((brand) => (
          <div className="brands--logo" key={brand._id}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={brand.imgUrl}
              alt={brand.brandName}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
