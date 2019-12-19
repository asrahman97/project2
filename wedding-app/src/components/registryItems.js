import React from "react";

const Title = "Vacation Package";
const Image =
  "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg";
const Price = "$1,000";

const RegistryItems = (props) => {
  return (
    <div className='reg-grid'>
      <h2>{Title}</h2>
      <img src={Image} alt='gift image' className='reg-image' />
      <p>{Price}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default RegistryItems;
