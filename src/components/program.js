import React from "react";
import styled from "styled-components";
import background from "~/images/bg_promotion.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper';

const Title = styled.div`
  width: 100%;
  padding-left: 15%;
  font-size: 5vw;
  color: darkgreen;
  margin-top: 30px;
  text-transform: uppercase;
  p {
    font-size: 24px;
  }
  @media (min-width: 1441px) {
    padding-left: 25%;
  }
`;

const Card = styled.div`
  width: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction:column;
  // background-image: url(${background});
  img {
    width: 150px;
    height: auto;
  }
`;

const Content = styled.div`
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // grid-gap: 1rem;
  margin-top: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Text = styled.div`  
  height: 120px;

  padding: 5px 5px;
  h2 {
    font-size: 2vw;
  }

  p {
    font-size: 1.5vw;
  }

  @media (max-width: 1350px) {
    h2 {
      font-size: 3vw;
    }

    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 1080px) {
    h2 {
      font-size: 3vw;
    }

    p {
      font-size: 2.5vw;
    }
  }

  @media (max-width: 860px) {
    h2 {
      font-size: 4.5vw;
    }

    p {
      font-size: 3vw;
    }
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 6vw;
    }

    p {
      font-size: 4vw;
    }
  }
`;

// const TextDescription = styled.div`
//   // display: -webkit-box;   
//   // -webkit-line-clamp: 2;
//   // font-size: 1.2vw;
//   // -webkit-box-orient: vertical;     
//   //  overflow: hidden; 
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

const Button = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // grid-gap: 1rem;
  // padding-left: 10px;
  @media (max-width: 1200px) {
    width: 30vw;
  }

  @media (max-width: 860px) {
    width: 40vw;
  }

  @media (max-width: 620px) {
    width: 50vw;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 0%;
  }
`;

const ButtonC = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  padding-left: 15%;
  @media (max-width: 1200px) {
    width: 30vw;
  }

  @media (max-width: 860px) {
    width: 40vw;
  }

  @media (max-width: 620px) {
    width: 50vw;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 0%;
  }
  @media (min-width: 1441px) {
    padding-left: 25%;
  }
`;

const ButtonBuy = styled.button`
  background-color: ${(props) => props.theme};
  // width: 100%;
  display: block;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 1.5vw;
  text-transform: uppercase;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.8vw;
  @media (max-width: 480px) {
    font-size: 1.5vw;
  }

  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;

const ButtonCate = styled.button`
  background-color: white;
  // width: 100%;
  color: #e1ad63;
  padding: 10px 35px;
  text-align: center;
  text-decoration: none;
  font-size: 1.5vw;
  text-transform: uppercase;
  border-radius: 35px;
  border: 2px solid;
  cursor: pointer;
  font-size: 1.2vw;
  &:hover {
    background-color: ${(props) => (props.active ? "#cba772" : "#cba772")};
    color: white;
  }
  @media (max-width: 480px) {
    font-size: 1.5vw;
  }

  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;

const Border = styled.div`
  border: 1px solid #e1ad63;
  width: 90%;
  margin: auto;
`;

const programComponents = ({
  data,
  setPopup,
  togglePopup,
  line,
  title,
  titleBtnBuy,
  titleDetail,
  btnteraphy,
  titlebtncnplan,
  titlebtncombined,
}) => {
  return (
    <div
    // className="container mx-auto" 
    >
      <Title>
        {title}
        {/* <Border /> */}
      </Title>
      <ButtonC style={{paddingBottom: "2vw"}}>
        <a href={line[3].link} target="_blank">
          <ButtonCate style={{marginRight: "1vw"}} theme={"#e1ad63"}>{btnteraphy}</ButtonCate>
          <ButtonCate style={{marginRight: "1vw"}} theme={"#e1ad63"}>{titlebtncnplan}</ButtonCate>
          <ButtonCate theme={"#e1ad63"}>{titlebtncombined}</ButtonCate>
        </a>
      </ButtonC>
      <div
        className="container mx-auto"
      >
        <Swiper slidesPerView={3}
          // navigation={true} modules={[Navigation]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}>
          {data.map((items, index) => (
            <SwiperSlide key={index} style={{ height: "700px", margin: ".5em" }} >
              <div style={{ borderRadius: "12px", boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)", width: "20em", height: "621px", position: "relative" }}>
                <img style={{ borderRadius: "12px 12px 0 0" }} src={items.image.url} alt="" />
                <div class="w-100">
                  <Text>
                    <h2>{items.title}</h2>
                    <p>{items.description}</p>
                    <p>{items.pricediscound}</p>
                    <p>{items.price}</p>
                  </Text>
                  <Text
                    onClick={() => [
                      setPopup(items.imagedetail.url),
                      togglePopup(),
                    ]}> <h2>
                      {titleDetail}</h2>
                  </Text>
                  {/* <Button> //use for group//
                <a href={line[3].link} target="_blank">
                  <ButtonBuy style={{}} theme={"#e1ad63"}>{titleBtnBuy}</ButtonBuy>
                </a>
              </Button>  */}
                  <Button>
                    <a href={line[3].link} target="_blank">
                      <ButtonBuy style={{ transform: "translateY(50%)", position: "absolute", bottom: "0" }} theme={"#e1ad63"}>{titleBtnBuy}</ButtonBuy>
                    </a>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default programComponents;
