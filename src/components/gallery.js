
import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
// import { data } from "autoprefixer";


SwiperCore.use([Navigation, Autoplay]);

const ConGal = styled.div`
  max-width: 1400px;
  margin-left: 12vw;
    @media (max-width: 767px) {
  
    }

    @media (min-width: 768px) and (max-width: 991px) {
  
    }

    @media (min-width: 992px) and (max-width: 1199px) {
  
    }

    @media (min-width: 1200px) and (max-width: 1440px) {
  
    }
`


const Title = styled.div`
  width: 100%;
  // text-align: center;
  font-size: 2.5vw;
  color: darkgreen;
  text-transform: uppercase;
  padding: 0px 0px 0px 40px;
  margin-top: 30px;
  p {
    font-size: 24px;
  }
`;

const Gallery = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`;

const Pics = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  img {
    width: 100%;
    border-radius: 12px;
  }
`;

// const Border = styled.div`
//   border: 1px solid #e1ad63;
//   width: 90%;
//   margin: auto;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 2vw;
`;

const ControlButton = styled.button`
  background-color: ${(props) => (props.active ? "#cba772" : "white")};
  color: ${(props) => (props.active ? "white" : "#cba772")};
  width: 15px;
  height: 15px;
  border: 1px solid #cba772;
  border-radius: 35px;
  padding: 5px 5px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s, padding 0.3s; /* Added padding transition */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &.custom-active {
    background-color: #cba772;
    color: white;
    transform: scale(0.9);
    box-shadow: none;
    padding: 5px 15px;
  }

  &:hover {
    border-radius: 88px;
    background-color: ${(props) => (props.active ? "#cba772" : "#cba772")};
    color: white;
    transform: ${(props) => (props.active ? "scale(0.9)" : "scale(1.1)")};
    box-shadow: ${(props) => (props.active ? "none" : "0px 4px 8px rgba(0, 0, 0, 0.2)")};
    padding: 5px 15px; /* Added padding for hover effect */
  }
`;






const GalleryComponents = ({ data, title, reviewadmin }) => {
  // console.log(data)
  // console.log(title)
  // console.log(reviewadmin)
  const [swiper, setSwiper] = useState(null);
  const [activeButton, setActiveButton] = useState("play");

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
      setActiveButton("next");
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
      setActiveButton("prev");
    }
  };

  const toggleAutoplay = () => {
    if (swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setActiveButton("play");
      } else {
        swiper.autoplay.start();
        setActiveButton("pause");
      }
    }
  };



  return (
    <ConGal style={{ borderRadius: "12px", boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFFF" }}>
      <div style={{ padding: "1em" }}>
        <Title>{title}</Title>
        <Swiper slidesPerView={3} spaceBetween={30} navigation loop autoplay={{ delay: 3000 }} onSwiper={setSwiper}>
          <Gallery>
            {data.map((items, index) => (
              <SwiperSlide key={index} style={{ height: "500px", padding: "0px 40px 0px 40px" }}>
                <div style={{ borderRadius: "12px", boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)", position: "relative" }}>
                  <Pics key={index}>
                    <img src={items.imgreview.url} alt="" /> {/* Display the image */}
                  </Pics>
                  <div style={{ position: "relative", bottom: "10px", color: "black", padding: "5px 5px 5px 5px", fontSize: "16px" }}>
                    <h2>{items.reviewadmin}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Gallery>
        </Swiper>
        <ButtonContainer>
          <ControlButton
            onClick={goPrev}
            className={activeButton === "prev" ? "custom-active" : ""}
          >
          </ControlButton>
          <ControlButton
            onClick={toggleAutoplay}
            className={activeButton === "pause" ? "custom-active" : ""}
          >
          </ControlButton>
          <ControlButton
            onClick={goNext}
            className={activeButton === "next" ? "custom-active" : ""}
          >
          </ControlButton>
        </ButtonContainer>
      </div>
    </ConGal>
  );
};

export default GalleryComponents;