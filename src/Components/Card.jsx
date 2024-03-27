import React from 'react'
import styled from 'styled-components'
styled
const Card = ({ movieData, isLiked = false }) => {
    return (
        <Container>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />
        </Container>
    )
}

export default Card
const Container = styled.div``