import React from "react";
import styled from "styled-components";
import logo from "../images/icon_logo.png";

const LogoPrima = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const Text = styled.div`
  font-size: 2vw;
  font-style: italic;
  text-align: center;
  p {
    font-size: 2vw;
  }
`;

const Icon = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
`;

const IconContent = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  padding: 0 20%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.2vw;
  text-transform: uppercase;
  text-decoration-color: #e1ad63;
  padding: 0 10%;
  font-weight: bold;
  @media (max-width: 1080px) {
    font-size: 4vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1vw;
  text-transform: uppercase;
  padding: 0 11%;
  @media (max-width: 1080px) {
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const Border = styled.div`
  border: 2px solid #e1ad63;
  width: 100%;
`;
const Partner = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  grid-gap: 1vw;
  grid-template-columns: repeat(4, 1fr);
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
`;

const PartnerAndContactComponent = ({ data, title, icon, contact, }) => {
  return (
    <div style={{ backgroundColor: "#accbb6" }}>
      <div className="container mx-auto">
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
                  <a href={items.link} target="_blank">
                    <img src={items.icon.url} alt="" />
                  </a>
                </Icon>
              ))}
            </IconContent>
            <div style={{ border: "solid purple 3px,", display: "flex", height: "20vw" }}>
              {contact.slice(0, 2).map((items, index) => (
                <div key={items.id} className="tt" style={{ padding: "1vw", flex: "none", width: "20vw" }}>
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
                </div>
              ))}
              {data && (
                <Partner style={{ gridTemplateColumns: "repeat(3, 8vw)", gridTemplateRows: "100px" }}>
                  {data.map((items) => (
                    <div key={items.id}>
                      <img src={items.image.url} alt="" />
                    </div>
                  ))}
                </Partner>
              )}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerAndContactComponent;
