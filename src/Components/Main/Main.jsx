import React, {useEffect} from "react";
import "./main.css";
import img from "../../Assest/image1.jpg";
import img2 from "../../Assest/image2.jpg";
import img3 from "../../Assest/image3.jpg";
import img4 from "../../Assest/image4.jpg";

import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'

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
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Adishm Banglaw",
    location: "Haputhale,Srilanka",
    grade: "Religious and Cultural",
    fees: "400$",
    description:"Adisham Bungalow or Adisham Hall, being a clear-cut instance of colonial heritage in the country, is a typical English countryside mansion built of stone, built in 1931. Having in possession a relic of St.Sylvester at the chapel, Adisham Bungalow serves as a venerable monastery of Saint Benedict at present. Positioned on the lush mountain ranges of central highlands in the nation, Adisham Bungalow is one of the best tourist attractions in Sr Lanka visited by thousands every year, who would like to peep into history.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Adams Peak",
    location: "Hatton,Srilanka",
    grade: "Religious",
    fees: "250$",
    description:"Adam's Peak, one of the must-visit spots in Sri Lanka, is a huge conical mountain towering over with 2,243 meters height in the central highlands of the country, carrying on its top a sacred footprint equally revered by all religions. Besides being a holy tourist destination, Adam's Peak is extremely popular with tourists for its alluring beauty and unmatched trekking. The peak, the seventh tallest peak in Sri Lanka, is also known as Sri Pada (sacred footstep) and Samanala Kanda (butterfly mountain).",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Benthota Beach",
    location: "Benthota,Srilanka",
    grade: "Holiday",
    fees: "150$",
    description:"Bentota is a famous coastal resort town in the south-west portion of Sri Lanka, located 65 kilometers away from Colombo city, featuring a wide variety of tourist attractions in its premises, the important one being the Bentota beach or Ventura beach, which is a long strip of golden sands that lies like a secluded beach island with lush vegetation flanked by turquoise ocean water from either side, with access to all the best facilities including resort accommodation, meditation and spa centers, and restaurants. At Bentota, one of the perfect beach holiday destinations in the country, you enjoy water sports, city tours and visiting other relevant sites around the city.",
  },
]

const Main = () => {
 //react hooks
 useEffect(()=>{
  Aos.init({duration:2000})
},[])





  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
        Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
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
