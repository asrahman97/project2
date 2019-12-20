import React from "react";

const Title = ["Honeymoon Fund", "Kitchen Appliances", "Sofa", "Puppy Fund"];
const Image = [
  "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg",
  "https://www.grundig.com/ktchnmag/wp-content/uploads/2018/07/GRUNDIG_KTCHN_kitchen-appliance-trends-2018_GRUNDIG.jpg",
  "https://okl.scene7.com/is/image/OKL/091916_sofa_Lead?wid=1000&op_sharpen=1", "https://miro.medium.com/max/519/1*QSSCg3fhfWiwXWqV_uZcEg.jpeg"
];

const Price = ["$1,000", "$300", "$400", "$500"];

const Body =["We've always dreamed of relaxing on the beaches of Thailand! With your contributions, we'll be able to make that a reality after the wedding", "We're huge fans of cooking and experimenting with new recipes. We're also health nuts so please make sure these are BPA-Free haha", "Although we love being social and going on adventures, sometimes ya just gotta relax at home and watch a movie", "Contribute to this fund to help us with adopting a new puppy!"]

const RegistryItems = props => {
  return (
    <div className="reg-card">
      <div className="reg-grid">
        <h2>{Title[0]}</h2>
        <img src={Image[0]} alt="gift" className="reg-image" />
        <p>{Price[0]}</p>
        <p className='body-text'>{Body[0]}</p>
      </div>

      <div className="reg-grid">
        <h2>{Title[1]}</h2>
        <img src={Image[1]} alt="gift" className="reg-image" />
        <p>{Price[1]}</p>
        <p className='body-text'>{Body[1]}</p>
      </div>

      <div className="reg-grid">
        <h2>{Title[2]}</h2>
        <img src={Image[2]} alt="gift" className="reg-image" />
        <p>{Price[2]}</p>
        <p className='body-text'>{Body[2]}</p>
      </div>

      <div className="reg-grid">
        <h2>{Title[3]}</h2>
        <img src={Image[3]} alt="gift" className="reg-image" />
        <p>{Price[3]}</p>
        <p className='body-text'>{Body[3]}</p>
      </div>


    </div>
  );
};

export default RegistryItems;
