import React, { useRef, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
styled;
const CardSlider = ({ data, title }) => {
    const [showControls, setShowControls] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);

    const listRef = useRef();
    const handledirection = (direction) => {
        const distance = listRef.current.getBoundingClientReact().x - 70;

        if (direction === 'left' && sliderPosition > 0) {
            listRef.current.style.transform = `translatex(${230 + distance})`
            setSliderPosition(sliderPosition - 1)
        }
        if (direction === 'right' && sliderPosition > 4) {
            listRef.current.style.transform = `translatex(${-230 + distance})`
            setSliderPosition(sliderPosition + 1)
        }


    };
    return (
        <Container
            className="flex column "
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <h1>{title}</h1>
            <div className="wrapper">
                <div className={`slider-act
                ion left ${!showControls ? "none" : ""}`}>
                    <AiOutlineLeft onClick={() => handledirection("left")} />
                </div>
                <div className="flex slider " ref={listRef}>
                    {data.map((movie, index) => {
                        return <Card movieData={movie} index={index} key={movie.id} />;
                    })}
                </div>
                <div className={`slider-action right ${!showControls ? "none" : ''} flex j-center a-center`}>
                    <AiOutlineRight onClick={() => handledirection("right")} />
                </div>
            </div>

        </Container>
    );
};

export default CardSlider;

const Container = styled.div`
color: white;
gap: 1rem;
position: relative;
padding: 2rem 0;
h1{
    margin-left: 50px;
}
.wrapper{
    .slider{
        width: max-content;
        gap: 1rem;
        transform: translateX(0px) ;
        transition: 0.3s ease-in-out;
        margin-left: 50px;
    }
    .slider-action{
        position: absolute;
        z-index: 99;
        height: 100%;
        top: 0;
        bottom: 0;
        width: 50px;
        transition: 0.3s ease-in-out;
        svg{
            font-size: 2rem;
        }}
        .none{
            /* display: none; */
        }
        .left{
            left: 0;
        }
        .right{
            right: 0;
        }

}
`;
