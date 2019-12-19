import React from "react";

const Title = ["Honeymoon Fund", "Kitchen Appliances", "Sofa"];
const Image =
  ["https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg", "https://www.grundig.com/ktchnmag/wp-content/uploads/2018/07/GRUNDIG_KTCHN_kitchen-appliance-trends-2018_GRUNDIG.jpg", "https://okl.scene7.com/is/image/OKL/091916_sofa_Lead?wid=1000&op_sharpen=1"];

const Price = ["$1,000", "$300", "$400"];

const RegistryItems = (props) => {
  return (
    <div className='reg-card'>
    <div className='reg-grid'>
      <h2>{Title[0]}</h2>
      <img src={Image[0]} alt='gift image' className='reg-image' />
      <p>{Price[0]}</p>
      <p>{props.body}</p>
    </div>

    <div className='reg-grid'>
    <h2>{Title[1]}</h2>
    <img src={Image[1]} alt='gift image' className='reg-image' />
    <p>{Price[1]}</p>
    <p>{props.body}</p>
        </div>
    

    <div className='reg-grid'>
      <h2>{Title[2]}</h2>
      <img src={Image[2]} alt='gift image' className='reg-image' />
      <p>{Price[2]}</p>
      <p>{props.body}</p>
    </div>
    
      
    </div>
    
    
    
  );
};

export default RegistryItems;
