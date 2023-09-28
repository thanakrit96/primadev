import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// import { Button } from "react-scroll";

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  margin-top: 20px;
  color: #32594c;
  text-transform: uppercase;
`;

const Title3 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  margin-top: 20px;
  color: #e1ad63;
  text-transform: uppercase;
  border: 2px solid #e1ad63;
  border-size: 2rem;
  border-radius: 20px;
  padding: 5px 30px 5px 30px;
  @media (min-width: 1441px) {
    font-size: 1.5vw;
  }
  &:hover {
    color: #fff;
    background-color: #e1ad63;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  text-indent: 40px;
  text-align: start;
  margin-top: 20px;
  font-size: 1.5vw;
  padding: 0 4%;
  position: relative;
  @media (max-width: 1080px) {
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const SubTitle2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5vw;
  padding: 0.5vw 5%;
  position: relative;
  color: #32594c;
  @media (max-width: 1080px) {
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const SubTitle3 = styled.div`
  padding: 0 5%;
  border: 1px solid #cba772;
  border-radius: 15px 15px 0px 0px;
  font-size: 1.9vw;
  width: 41.5vw;
  padding-bottom: 1vw;
  padding-top: 0.5vw;
  cursor: pointer;
  color: rgb(90, 133, 133);
  @media (min-width: 1441px) {
    font-size: 1.5vw;
    width: 30.5vw;
  }

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

// const Border = styled.div`
//   border: 2px solid #e1ad63;
//   width: 30%;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 10px;
// `;

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
// const TitleInContent = styled.div`
//   width: 100%;
//   text-align: center;
//   font-size: 5.5vw;
//   margin-top: 20px;
//   color: #e1ad63;
//   margin-bottom: 10px;
//   text-transform: uppercase;
// `;

const ContainDes = styled.div`
  flex: 1;
  padding: 0 3.5vw 0 3.5vw;
  top: 1vw;
`;

const ContainImg = styled.div`
  flex: 1;
  text-align: -webkit-center;
`;

const Blog = styled.div`
  position: relative;
  width: 16vw;
  height: 14vw;
  padding: 1em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 0;
  &:hover {
    background: linear-gradient(
      313deg,
      rgb(168 199 178) 0%,
      rgb(81 150 144) 49%,
      rgba(102, 122, 129, 1) 100%
    );
    transform: scale(1.05);
    transition: 0.25s;
  }
  @media (min-width: 1440px) {
    padding: 1.5em;
  }

  @media (max-width: 1080px) {
    width: 26vw;
    height: 24vw;
    padding: 0.1px;
  }

  @media (max-width: 480px) {
    width: 2vw;
  }
`;

// const BlurredBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 16vw;
//   height: 14vw;
//   background-image: url(${props => props.imageUrl});
//   background-size: cover;
//   filter: blur(5px);
//   z-index: -1;
// `;

const Conblog = styled.div`
  display: flex;
  justify-content: center;
  gap: 6vw;
  padding-bottom: 2vw;
  @media (min-width: 1441px) {
    gap: 2vw;
  }
`;

const ContainBut = styled.div`
  width: 100%;
`;

const ConSam = styled.div`
  display: flex;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const ContainerT = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1441px) {
    max-width: 1641px;
  }
  @media (min-width: 1080px) {
    max-width: 1201px;
  }
  @media (min-width: 640px) {
    max-width: 1640px;
  }
`

const ContainBtn = styled.div`
  display: flex;
  padding: 0px 4vw 2vw;

  @media (min-width: 1441px) {
    
  }
  @media (min-width: 1080px) {
    
  }
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2 ,40vw);
    justify-content: center;
  }
`;

const aboutComponents = ({
  titleAbout,
  dataText,
  subTitle,
  data,
  whyprima,
  serviceprima,
  bannerList,
  kickeraboutClinic,
  btngroup,
}) => {
  // console.log("test", data);
  return (
    <ContainerT className="container mx-auto">
      {/* section1 */}
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFF",
          padding: "",
          zIndex: "-3",
        }}
      >
        <div>
          {whyprima.map((whyprima, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <ContainDes>
                <Title style={{ textAlign: "start" }}>{whyprima.title}</Title>
                <SubTitle
                  style={{ color: "#CBA772", padding: "0", textIndent: "0" }}
                >
                  {whyprima.subtitle}
                </SubTitle>
                <p>{whyprima.des}</p>
              </ContainDes>
              <ContainImg>
                <img
                  src={whyprima.whypic.url}
                  alt=""
                  style={{
                    width: "20vw",
                    border: "solid ",
                    borderRadius: "12px",
                    marginTop: "2em",
                  }}
                />
              </ContainImg>
            </div>
          ))}
        </div>
        <div style={{}}>
          {whyprima.map((whyprima, i) => (
            <div
              key={i}
              style={{ padding: "10px 90px 10px 90px", fontSize: "1.25vw" }}
            >
              <p style={{ textAlign: "center", color: "#5A8585" }}>
                {whyprima.kicker}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* section2 */}
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFF",
          padding: "",
        }}
      >
        {serviceprima.length > 0 && (
          <Title style={{ paddingTop: "2vw" }}>
            {serviceprima[0].titleserviceprima}
          </Title>
        )}
        <Conblog>
          {serviceprima.map((serviceprima, i) => (
            <Blog key={i}>
              <SubTitle2>{serviceprima.des}</SubTitle2>
            </Blog>
          ))}
        </Conblog>
      </div>
      <br />
      {/* section3 */}
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFF",
          padding: "",
        }}
      >
        <ConSam>
          <Title>{titleAbout}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </ConSam>
        <div style={{ paddingLeft: "4vw", paddingRight: "4vw" }}>
          <SubTitle3>{kickeraboutClinic}</SubTitle3>
          {bannerList.map((items, index) => (
            <div key={index}>
              <img src={items.url} alt="" />
            </div>
          ))}
        </div>
        {/* button */}
<<<<<<< HEAD
        <ContainBtn>{btngroup.map((btngroup, i) => (
          <ContainBut>
            <Title3>{btngroup.btngroup}</Title3>
          </ContainBut>
        ))}
        </ContainBtn>
        {/* carousel */}
        <div style={{ display: "none" }}>
          <div style={{ display: "flex", padding: "0 4vw 2vw 4vw" }}>
            {btngroup.map((btngroup, i) => (
              <ContainBut key={i} onClick={() => dataText(btngroup)}>
                <Title3>{btngroup.title}</Title3>
              </ContainBut>
            ))}
          </div>
          {/* group service */}
          <div style={{ display: "" }}>
            {data.map((items, i) => (
              <div key={i}>
                <Fade style={{ width: "50%" }} bottom>
                  <Content style={{ display: "flex", border: "solid red" }}>
                    <img style={{ width: "25%" }} src={items.image.url} alt="" />
                    <div>
                      <SubTitleInContent>{items.subtitle}</SubTitleInContent>
                      <TextDescription
                        dangerouslySetInnerHTML={{
                          __html: items.description,
                        }}
                      />
                      {console.log(items.description)}
                    </div>
                  </Content>
                </Fade>
              </div>
            ))}
          </div>
=======
        <div style={{ display: "flex", padding: "0 4vw 2vw 4vw" }}>
          {btngroup.map((btngroup, i) => (
            <ContainBut key={i} onClick={() => dataText(btngroup)}>
              <Title3>{btngroup.title}</Title3>
            </ContainBut>
          ))}
        </div>
        {/* group service */}
        <div style={{}}>
          {data.map((items, i) => (
            <div key={i}>
              <Fade style={{ width: "50%" }} bottom>
                <Content style={{ display: "flex",}}>
                  <img style={{ width: "25%" }} src={items.image.url} alt="" />
                  <div style={{backgroundColor:"#F5F5F5"}}>
                    <SubTitleInContent>{items.subtitle}</SubTitleInContent>
                    <TextDescription
                      dangerouslySetInnerHTML={{
                        __html: items.description,
                      }}
                    />
                    {/* {console.log(items.description)} */}
                  </div>
                </Content>
              </Fade>
            </div>
          ))}
>>>>>>> 8092fdb32a2dd6cdb5ebdd93102bdf340405f161
        </div>
      </div>
    </ContainerT>
  );
};

export default aboutComponents;
