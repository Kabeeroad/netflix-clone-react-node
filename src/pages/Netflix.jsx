import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import BackgroundImage from "../assets/home.jpg";
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styled from "styled-components";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

      <div className="hero">
        <img src={BackgroundImage} alt="backgroundimg"
          className="background-image"
        />

        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="movieImage" />
          </div>
          <div className="buttons flex">
            <button flex j-center a-center>
              <FaPlay />Play
            </button>
            <button flex j-center a-center>
              <AiOutlineInfoCircle />More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Netflix;
const Container = styled.div`
  background-color: black;
.hero{
  position: relative;
  .background-image{
    filter: brightness(60%);
  }
  img{
    height: 100vh;
    width: 100vw;

  }
  .container{
    
    position: absolute;
    bottom: 5rem;
    .logo{
      
      img{
        width: 100%;
        height: 100%;
        margin-left: 5rem;
       
      }
    }
.buttons{
  margin: 5rem;
  gap: 2rem;
  button{
    font-size: 1.4rem;
    gap: 1rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2.4;

  }
}
  }
}

`