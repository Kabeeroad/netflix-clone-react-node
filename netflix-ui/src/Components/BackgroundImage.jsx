import React from "react";
import backround from "../assets/login.jpg";
import styled from "styled-components";
const BackgroundImage = () => {
  return (
    <Container>
      <img src={backround} alt="backgroun-Img" />
    </Container>
  );
};

export default BackgroundImage;
const Container = styled.div``;
