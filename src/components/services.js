import React from "react";
import styled from "styled-components";
// import imageBackground from "~/images/frame_menu.png";

// const Title = styled.p`
//   text-align: center;
//   font-size: 5vw;
//   color: #e1ad63;
//   text-transform: uppercase;
// `;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-items: center;
  // margin-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  padding: 2% 20%;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    padding: 10px 8%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-gap: 1.2rem;
    padding: 15px 22%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: 1200px) {

  }
`;

const ContentServicesGrid = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  cursor: pointer;
  background: #ffff;
  padding: 20%;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  h2 {
    margin-top: 20px;
    // color: white;
    font-size: 1rem;
  }
  img {
    width: 50%;
    margin: auto;
  }

  :hover {
    background: rgb(198, 235, 210);
    background: linear-gradient(
      313deg,
      rgb(168 199 178) 0%,
      rgb(81 150 144) 49%,
      rgba(102, 122, 129, 1) 100%
    );
    transform: scale(1.15);
    transition: 0.25s;
  }

  @media (max-width: 767px) {
    height: 34vw;
    padding: 15%;
    img {
      width: 40%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 14vw;
    padding: 10%;
    h2 {
      font-size: 12px;
      margin-top: 5px;
    }
    img {
      width: 50%;
      margin-top: 9px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 14vw;
    padding: 10%;
    h2 {
      font-size: 14px;
      margin-top: 5px;
    }
    img {
      width: 50%;
      margin-top: 12px;
    }
  }

  @media (min-width: 1200px) {

  }
`;

// const Border = styled.div`
//   border: 1px solid #e1ad63;
//   width: 40%;
//   margin: auto;
// `;

const servicesComponents = ({ data, selectSection, title }) => {
  return (
    <div
    // style={{border:"solid orange"}}
    >
      {/* <Title>{title}</Title> */}
      {/* <Border /> */}
      <Content>
        {data.map((items, index) => (
          <ContentServicesGrid
            key={index}
            onClick={() => selectSection(items.currenturl)}
          >
            <img src={items.image.url} alt="" />
            <h2>{items.title}</h2>
          </ContentServicesGrid>
        ))}
      </Content>
    </div>
  );
};

export default servicesComponents;
