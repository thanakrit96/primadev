import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

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
  @media (max-width: 1080px) {
    padding: 0;
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

// const Border = styled.div`
//   border: 1px solid #e1ad63;
//   width: 90%;
//   margin: auto;
// `;

const knowLedgeComponents = ({ data, title }) => {
  return (
    <div className="container mx-auto" style={{height:"40vw"}}>
      <Title>
        {title}
        {/* <Border/> */}
      </Title>
      <Swiper
          // direction={'vertical'} 
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
      {data.map((items, index) => {
        return (           
          <div key={index}>
          <SwiperSlide >
            <img style={{width:"20em", position:"absolute",borderRadius:"35px",zIndex:"1",transform:"translateY(7vw)"}} src={items.image ? items.image.url : ""} alt="" />
            <div style={{position:"relative",border:"solid rgb(231 227 227) 1px",borderRadius:"20px"
                          ,transform:"translateX(11vw)",height:"30vw",width:"50vw",
                          backgroundColor:"#FFFF"}}>
            <div>{items.title}</div>
            {items.description && 
            <TextDescription                
                  dangerouslySetInnerHTML={{
                    __html: items.description,
                  }}
                />}</div>                 
            </SwiperSlide>
          </div>          
        );
      })}
      </Swiper>
    </div>
  );
};

export default knowLedgeComponents;
