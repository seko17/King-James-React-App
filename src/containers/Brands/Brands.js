import React from "react";
import "./style.css";
import Typography from "../../components/Typography/Typography";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import useApiFetch from '../../hooks/useApiFetch';

function Brands() {
  const apiUrl = 'https://king-james-node-backend.vercel.app/data'; // Replace with your API URL
  const { data, loading, error } = useApiFetch(apiUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="company--main">
      <SectionLabel color={"black"}>You’ll be in good company</SectionLabel>
      <Typography variant={"h1"} color={"black"}>
        Trusted by leading brands
      </Typography>
      <div className="company--logo--container">
      {data.map(brand => (
          <div key={brand._id}>
            <svg >src={brand.imgUrl} </svg>
            <span>{brand.brandName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
