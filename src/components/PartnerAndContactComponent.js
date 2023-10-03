import React from "react";
import styled from "styled-components";
import logo from "../images/icon_logo.png";
import { symbol } from "prop-types";

const Confoot = styled.div`
max-width: 1440px;
margin-left: auto;
margin-right: auto;
  @media (max-width: 767px) {
    height: 174vw;
    max-width: 569px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 569px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 769px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    max-width: 1024px;
  }
`

const LogoPrima = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  padding-top: 2vw;
`;

const Text = styled.div`
  font-size: 2vw;
  font-style: italic;
  text-align: center;
  p {
    font-size: 2vw;
  }
  @media (max-width: 767px) {
    font-size: 3.6vw;
  }
`;

const Icon = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    transition: filter 0.3s;
  }

  img:hover {
    filter: brightness(1.2);
    fill: ${(props) => (props.active ? "#cba772" : "#cba772")};
  }
`;

const IconContent = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
`;

const Title = styled.div`
  width: 16vw;
  font-size: 1.2vw;
  text-transform: uppercase;
  text-decoration-color: #e1ad63;
  padding: 0 10%;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 3.6vw;
    width: 46vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 20vw;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 22vw;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 20vw;
  }
`;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1vw;
  text-transform: uppercase;
  padding: 0 11%;
  @media (max-width: 767px) {
    font-size: 3vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    
  }
`;

// const Border = styled.div`
//   border: 2px solid #e1ad63;
//   width: 100%;
// `;
const Partner = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  grid-gap: 1vw;
  grid-template-columns: repeat(3, 8vw);
  grid-template-rows: 110px;
  img {
    width: 80%;
    height: 0 auto;
    margin: 0 10px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: auto;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(3,25vw);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-rows: 32px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-rows: 44px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    grid-template-rows: 70px;
  }
`;

const Blogfoot = styled.div`
  display: flex;
  height: 20vw;
  @media (max-width: 767px) {
    display: contents;
  }
`

const Innerfoot = styled.div`

  @media (max-width: 767px) {
    padding: auto;
    width: auto;
  }
`

const PartnerAndContactComponent = ({ data, title, icon, contact, }) => {
  return (
    <div style={{ backgroundColor: "#accbb6", marginTop: "2em" }}>
      <Confoot>
        {logo && (
          <LogoPrima>
            <img src={logo} alt="" />
          </LogoPrima>
        )}
        {contact && (
          <div>
            <Text
              dangerouslySetInnerHTML={{
                __html: contact[3].description,
              }} />
            <IconContent>
              {icon.map((items, index) => (
                <Icon key={index}>
                  <a href={items.link} target="_blank" rel="noreferrer">
                    <img src={items.icon.url} alt="" rel="noreferrer" />
                  </a>
                </Icon>
              ))}
            </IconContent>
            <Blogfoot>
              {contact.slice(0, 2).map((items, index) => (
                <Innerfoot key={items.id}>
                  <Title>{items.title}</Title>
                  <TextDescription
                    dangerouslySetInnerHTML={{
                      __html: items.description,
                    }}
                  />
                  {index === 1 && index + 1 < contact.length && (
                    <>
                      <Title>{contact[index + 1].title}</Title>
                      <TextDescription
                        dangerouslySetInnerHTML={{
                          __html: contact[index + 1].description,
                        }}
                      />
                    </>
                  )}
                </Innerfoot>
              ))}
              {data && (
                <Partner>
                  {data.map((items) => (
                    <div key={items.id}>
                      <img src={items.image.url} alt="" />
                    </div>
                  ))}
                </Partner>
              )}
            </Blogfoot>
          </div>
        )}
      </Confoot>
    </div>
  );
};

export default PartnerAndContactComponent;
