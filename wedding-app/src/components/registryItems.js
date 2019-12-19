import React from "react";

const Title = "Vacation Package";
const Image =
  "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg";
const Price = "$1,000";

const RegistryItems = () => {
  return (
    <div className='reg-grid'>
      <h2>{Title}</h2>
      <img src={Image} />
      <p>{Price}</p>
    </div>
  );
};

export default RegistryItems;
