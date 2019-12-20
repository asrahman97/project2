import React from "react";
import photos0 from "../images/photos0.jpg";
import photos1 from "../images/photos1.jpg";
import photos2 from "../images/photos2.jpg";
import photos3 from "../images/photos3.jpg";
import photos4 from "../images/photos4.jpg";
import photos5 from "../images/photos5.jpg";
import photos6 from "../images/photos6.jpg";
import photos7 from "../images/photos7.jpg";
import photos8 from "../images/photos8.jpg";
import photos9 from "../images/photos9.jpg";
import photos10 from "../images/photos10.jpg";
import photos11 from "../images/photos11.jpg";

const Photos = () => {
  return (
    <div className="photo-page">
      <h1 className="hwm">How we Met</h1>
      <div className="how-we-met">
        <h5>
          With our parents being friends, we would see other at family events
          for years since we were in high school. Never did we imagine back then
          we would be at this moment right now. We’ve gone years without seeing
          each other but reconnected at a sweet sixteen. There, we realised we
          had much more in common than we thought growing up and I knew I had to
          get to know her more. Fast forward all this time now, and we’re
          getting married! <br />
          <br />
          TDLR: she got out the friendzone lol
        </h5>
      </div>
      <div className="photo-grid">
        <img src={photos0} alt="img goes here" className="photo" />
        <img src={photos1} alt="img goes here" className="photo" />
        <img src={photos2} alt="img goes here" className="photo" />
        <img src={photos6} alt="img goes here" className="photo" />
        <img src={photos3} alt="img goes here" className="photo" />
        <img src={photos4} alt="img goes here" className="photo" />
        <img src={photos5} alt="img goes here" className="photo" />
        <img src={photos7} alt="img goes here" className="photo" />
        <img src={photos8} alt="img goes here" className="photo" />
        <img src={photos9} alt="img goes here" className="photo" />
        <img src={photos10} alt="img goes here" className="photo" />
        <img src={photos11} alt="img goes here" className="photo" />
      </div>
    </div>
  );
};

export default Photos;
