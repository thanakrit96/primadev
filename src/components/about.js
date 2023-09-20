import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  margin-top: 20px;
  color: #32594C;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  width: 100%;
  text-indent: 40px;
  text-align: start;
  margin-top: 20px;
  font-size: 1.5vw;
  padding: 0 5%;
  @media (max-width: 1080px) {
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 5% 10%;
  p {
    text-align: center;
    padding: 20px 40px;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;

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

const Border = styled.div`
  border: 2px solid #e1ad63;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const SubTitleInContent = styled.div`
  width: 50%;
  font-size: 2vw;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  text-align: center;
  text-decoration-color: #e1ad63;
  padding: 0 10%;
  font-weight: bold;
  @media (max-width: 1080px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const TitleInContent = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5.5vw;
  margin-top: 20px;
  color: #e1ad63;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ContainDes = styled.div`
  flex: 1;
  padding: 0 3.5vw 0 3.5vw;
  top: 1vw;
`;

const ContainImg = styled.div`
  flex: 1;
  text-align: -webkit-center;
`;

const aboutComponents = ({ titleAbout, subTitle, data, whyprima, serviceprima }) => {
  return (
    <div className="container mx-auto">

      {/* section1 */}
      <div style={{ borderRadius: "12px", boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFFF", padding: "" }}>
        <div>
          {whyprima.map((whyprima, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <ContainDes>
                <Title style={{ textAlign: "start" }}>{whyprima.title}</Title>
                <SubTitle style={{ color: "#CBA772", padding: "0", textIndent: "0" }}>{whyprima.subtitle}</SubTitle>
                <p>{whyprima.des}</p>
              </ContainDes>
              <ContainImg>
                <img src={whyprima.whypic.url} alt="" style={{ width: "20vw", height: "20vw", border: "solid ", borderRadius: "12px", marginTop: "2em" }} />
              </ContainImg>
            </div>
          ))}
        </div>
        <div style={{}}>
          {whyprima.map((whyprima, i) => (
            <div key={i} style={{ padding: "10px 90px 10px 90px", fontSize: "1.25vw" }}>
              <p style={{ textAlign: "center", color: "#5A8585" }}>{whyprima.kicker}</p>
            </div>
          ))}
        </div>
      </div>


      {/* section2 */}
      <div style={{ borderRadius: "12px", boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFFF", padding: "" }}>
        {serviceprima.map((serviceprima, i) => (
          <div key={i}>
            <Title>{serviceprima.titleserviceprima}</Title>
            <SubTitle>{serviceprima.des}</SubTitle>
            <img style={{ width: "10%", padding: "1em" }} src={serviceprima.serpic.url} alt="" />
          </div>
        ))}
      </div>

      {/* section3 */}
      <Title>{titleAbout}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {data.map((items, i) => (
        <div key={i}>
          <Fade bottom>
            <TitleInContent style={{ border: "solid green" }}>{items.title}</TitleInContent>
            <SubTitleInContent>{items.subtitle}</SubTitleInContent>
            {(items.title || items.subtitle) && <Border />}
            <Content>
              <img src={items.image.url} alt="" />
              <TextDescription style={{ border: "solid red" }}
                dangerouslySetInnerHTML={{
                  __html: items.description,
                }}
              />
            </Content>
          </Fade>
        </div>
      ))
      }
    </div >
  );
};

export default aboutComponents;
