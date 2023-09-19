import React from "react";
import "./main.css";
import img from "../../Assest/image1.jpg";
import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bomburu Ella",
    location: "Welimada,Srilanka",
    grade: "Cultural Relax",
    fees: "500$",
    description:
      "Bomburu Ella is a waterfall in Sri Lanka consists of several small waterfalls grouped together. The source of the falls is a lake located in the central highlands of Sri Lanka.",
  },
]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
        Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>   
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS<BsClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main
