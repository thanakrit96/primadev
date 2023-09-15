import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 35px;
  background-color: #cba772;
  padding-left:12vw;
  display: flex;
  align-items: center;
  // text-align: center;
  // color: white;
  // font-size: 12px;
`;

const mapComponents = (data) => {

  return (
    <div>
     <Footer>
        Prima Clinic 2019 - 2021, All Right Reserverd.
     </Footer>
    </div>
  );
};

export default mapComponents;
