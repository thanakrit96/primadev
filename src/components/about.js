import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// import { Button } from "react-scroll";

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5vw;
  margin-top: 10px;
  color: #32594c;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 26px;
    font-weight: 400;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 0;
  }

  @media (min-width: 992px) and (max-width: 1199px) {

  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`;

const Title3 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1vw;
  color: #e1ad63;
  text-transform: uppercase;
  border: 1.5px solid #e1ad63;
  border-size: 2rem;
  border-radius: 5px;
  padding: 5px 30px 5px 30px;
  
  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 0.5rem;
    padding 5px 0px 5px 0px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 0.8rem;
    padding: 5px 0px 5px 0px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    font-size: 1vw;
  }

  &:hover {
    color: #fff;
    background-color: #e1ad63;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 5px;
  font-size: 1.5vw;
  padding: 0 4%;
  position: relative;
  padding-top: 10px;
  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 10px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`;

const P1 = styled.div`
  font-size: 18px;
  padding-bottom: 40px;

  @media (max-width: 767px) {
    font-size: 16px
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    padding-bottom: 20px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 10px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`

const P2 = styled.div`
  text-align: center; 
  color: #5A8585;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {

  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`

const SubTitle2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5vw;
  padding: 2.5vw 5%;
  position: relative;
  color: #32594c;
  @media (max-width: 767px) {
    font-size: 3.5vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0.1vw 5%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
    padding: 1vw 5%;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    padding: 0;
  }
`;

const SubTitle3 = styled.div`
  padding: 0 5%;
  border: 0.5px solid #cba772;
  border-radius: 15px 15px 0px 0px;
  font-size: 1.4vw;
  width: 27.5vw;
  padding-bottom: 1vw;
  padding-top: 0.5vw;
  cursor: pointer;
  color: rgb(90, 133, 133);

  @media (max-width: 767px) {
    font-size: 3.9vw;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 32.5vw;
    font-size: 1.4vw;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 37.5vw;
    font-size: 1.8vw;
  }
`;


const Content = styled.div`
  width: 100%;
  padding: 5% 10%;
  display: flex;
  background: #e0e0e0;
  border-radius: 20px;
  p {
    text-align: center;
    padding: 20px 40px;
    background: #e0e0e0;
  }
  img {
    border-radius: 20px;
    width: 25%;
  }
  
  @media (max-width: 767px) {
    padding: 0 10px;
    display: grid;
    background-color: #e0e0e0;
    gap: 4vw;
    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1vw;
  padding: 0 5%;
  text-align: start;
  margin-top: 10px;
  
  @media (max-width: 767px) {
    font-size: 4vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    font-size: 1.5vw;
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
  font-size: 1vw;
  text-transform: uppercase;
  text-align: center;
  text-decoration-color: #e1ad63;
  padding: 0 5%;
  font-weight: bold;
  text-align: start;

  @media (max-width: 767px) {
    padding: 0 10px;
    display: grid;
    background-color: #e0e0e0;
    gap: 4vw;
    font-size: 4vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    font-size: 2vw;
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
  width: 18vw;
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
    SubTitle2 {
      color: #CBA772;
    }
  }
  
  @media (max-width: 767px) {
    width: 46vw;
    height: 36vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 26vw;
    height: 14vw;
    padding: 0.1px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

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
  gap: 2vw;
  padding-bottom: 2vw;

  @media (max-width: 767px) {
    display: grid;
    gap: 0.1vw;
    img {
      background: red;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    gap: 2vw;
    padding: 0px 60px 10px 60px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`;

const ContainBut = styled.div`
  width: 100%;
`;

const ConSam = styled.div`
  display: flex;
  padding: 1vw 4vw 2vw 4vw;

  @media (max-width: 767px) {
    display: grid;
    gap: 0.1vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    
  }

  @media (min-width: 992px) and (max-width: 1199px) {

  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`;

const ContainerT = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;

  @media (max-width: 767px) {
    max-width: 373px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 576px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    max-width: 1068px;
  }
`;

const ContainBtn = styled.div`
  display: flex;
  padding: 0px 4vw 2vw;
  margin-top: 10px;

  @media (min-width: 1441px) {
    
  }
  @media (min-width: 1080px) {
    
  }
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
`;

const ConSec1 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 40px 25px 40px;
  @media (max-width: 767px) {
    display: contents;
    padding: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px 40px 25px 40px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 10px 40px 25px 40px;
  }

  @media (min-width: 1200px) and (max-width: 1440px) {

  }
`

const S1img = styled.div`
  width: 20vw;
  margin-top: 10px;
  @media (max-width: 767px) {
    width: 80vw;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 30vw;
  }

  @media (min-width: 992px) and (max-width: 1199px) {

  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 25vw;
  }
`

const Innerimg2 = styled.div`

img {
  width: 70vw;
  height: 100%;
  border-radius: 20px;
}
  @media (max-width: 767px) {
    order: -1;
    img {
      width: 100%;
      border-radius: 20px;
      padding-top: 2px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {

  }

  @media (min-width: 1200px) and (max-width: 1440px) {
    img {
      width: 100vw;
      height: 100%;
    }
  }
`

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
    <ContainerT>
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
            <ConSec1 key={i}>
              <ContainDes>
                <Title style={{ textAlign: "start" }}>{whyprima.title}</Title>
                <SubTitle
                  style={{ color: "#CBA772", padding: "0", textIndent: "0" }}
                >
                  {whyprima.subtitle}
                </SubTitle>
                <P1>{whyprima.des}</P1>
              </ContainDes>
              <ContainImg>
                <S1img> <img src={whyprima.whypic.url} alt="" /> </S1img>
              </ContainImg>
            </ConSec1>
          ))}
        </div>
        <div style={{ paddingBottom: "25px" }}>
          {whyprima.map((whyprima, i) => (
            <div
              key={i}
              style={{ padding: "10px 90px 10px 90px", fontSize: "1.25vw" }}
            >
              <P2>
                {whyprima.kicker}
              </P2>
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
          marginTop: "10px"
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
        {/* carousel */}
        <div style={{ display: "" }}>
          <ContainBtn>
            {btngroup.map((btngroup, i) => (
              <ContainBut key={i} onClick={() => dataText(btngroup)}>
                <Title3>{btngroup.title}</Title3>
              </ContainBut>
            ))}
          </ContainBtn>
          {/* group service */}
          {data.map((items, i) => (
            <div key={i}>
              <Fade style={{ width: "50%" }} bottom>
                <div style={{ border: "10px solid white" }}>
                  <Content>
                    {i === 0 && (
                      <>
                        <img src={items.image.url} alt="" />
                        <div>
                          <SubTitleInContent>{items.subtitle}</SubTitleInContent>
                          <TextDescription
                            dangerouslySetInnerHTML={{
                              __html: items.description,
                            }}
                          />
                          {console.log(items.description)}
                        </div>
                        <Innerimg2 />
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <div>
                          <SubTitleInContent>{items.subtitle}</SubTitleInContent>
                          <TextDescription
                            dangerouslySetInnerHTML={{
                              __html: items.description,
                            }}
                          />
                        </div>
                        <Innerimg2>
                          <img src={items.image.url} alt="" /> {/* Show image for data 1 first on mobile */}
                        </Innerimg2>
                      </>
                    )}
                  </Content>
                </div>
              </Fade>
            </div>
          ))}

          {/* group service */}
        </div>
      </div>
    </ContainerT>
  );
};

export default aboutComponents;
