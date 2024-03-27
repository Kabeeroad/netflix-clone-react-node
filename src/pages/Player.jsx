import React from 'react'
import styled from 'styled-components'
import vedio from '../assets/vedio.mp4'
// import { BsArrowLeft } from 'react-icons'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
const Player = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className="player">
                <div className="back">

                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src={vedio} autoPlay loop controls muted ></video>

            </div>
        </Container>
    )
}

export default Player

const Container = styled.div`
    .player{
        height: 100vh;
        width: 100vw;
    }.back{
        position: relative;
        /* padding: 2rem; */
        z-index: 1;
        svg{
            font-size: 3rem;
            color: white;
           
            cursor: pointer;
        }
    }
    video{
        height: 100%; 
        width: 100%;
        object-fit: cover;
    }
`