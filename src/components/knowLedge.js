import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Autoplay]);

const Medical = styled.div`
  max-width: 1440px;
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
  text-align: center;
  font-size: 5vw;
  color: #e1ad63;
  text-transform: uppercase;
  margin-top: 30px;
  p {
    font-size: 24px;
  }
`;

// const Content = styled.div`
//   width: 100%;
//   padding: 10px 10%;
//   @media (max-width: 700px) {
//       padding: 10px 10px;
//     }

// `;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1.5vw;
  padding: 0 5%;
  text-indent: 40px;
  text-align: start;
  margin-top: 10px;
  text-indent: 15vw;
  // @media (max-width: 1080px) {
  //   padding: 0;
  //   font-size: 2.5vw;
  // }

  // @media (max-width: 480px) {
  //   font-size: 3.5vw;
  // }
  @media (max-width: 767px) {
    
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    text-indent: 12.3vw;
  }
`;

const S4img = styled.div`
  width: 20em;
  position: absolute;
  border-radius: 35px;
  z-index: 1;
  transform: translateY(3.5vw);
  img {
    border-radius: 20px;
    height: 22vw;
    width: 29vw;
  }
`

const Blogmed = styled.div`
  position: relative;
  border: solid rgb(231 227 227) 1px;
  border-radius: 20px;
  transform: translateX(11vw);
  height: 30vw;
  width: 48vw;
  background-color: #FFF;
  text-indent: 15vw;

  @media (max-width: 767px) {
    
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 67.5vw;
  }
`
const Conmed = styled.div`
  height: 30vw;
  overflow: hidden;
  margin-left: 16vw;
  margin-bottom: 2vw;
  
  @media (max-width: 767px) {
    
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 67.5vw;
  }
`

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 2vw;
  position: fixed;
  right: 19vw;
  top: 18vw;
  gap: 1vw;

  @media (max-width: 767px) {
    
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    
  }
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
    padding: 15px 5px;
  }

  &:hover {
    border-radius: 88px;
    background-color: ${(props) => (props.active ? "#cba772" : "#cba772")};
    color: white;
    transform: ${(props) => (props.active ? "scale(0.9)" : "scale(1.1)")};
    box-shadow: ${(props) => (props.active ? "none" : "0px 4px 8px rgba(0, 0, 0, 0.2)")};
    padding: 15px 5px; /* Added padding for hover effect */
  }
`;

const Contain4 = styled.div`
  display: flex;
  gap: 0.1vw;
  flex-direction: column;
`

// const Border = styled.div`
//   border: 1px solid #e1ad63;
//   width: 90%;
//   margin: auto;
// `;

const KnowLedgeComponents = ({ data, title }) => {
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
    <Medical>
      <Title>
        {title}
        {/* <Border/> */}
      </Title>
      <Contain4>
        <Conmed>
          <Swiper
            direction={'vertical'}
            slidesPerView={3}
            onSwiper={setSwiper}
            pagination={{
              clickable: true,
            }}
          >
            {data.map((items, index) => {
              return (
                <div key={index}>
                  <SwiperSlide>
                    <S4img>
                      <img src={items.image ? items.image.url : ""} alt="" />
                    </S4img>
                    <Blogmed>
                      <div>{items.title}</div>
                      {items.description && (
                        <TextDescription
                          dangerouslySetInnerHTML={{
                            __html: items.description,
                          }}
                        />
                      )}
                    </Blogmed>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </Conmed>
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
      </Contain4>
    </Medical>
  );
};

export default KnowLedgeComponents;
