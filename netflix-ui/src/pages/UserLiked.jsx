import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import CardSlider from "../Components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres, getUserLikedMovies } from "../store";
import SelectGenre from "../Components/SelectGenre";
import Slider from "../Components/Slider";
import NotAvailable from "../Components/NotAvailable";
import Card from "../Components/Card";



const UserLiked = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const movies = useSelector((state) => state.netflix.movies);



    const [email, setEmail] = useState(undefined)
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate("/login")
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (email) {
            dispatch(getUserLikedMovies(email))
        }
    }, []);


    const [user, setUser] = useState(undefined);



    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />

            <div className="content flex column">
                <h1>My list</h1>
                <div className="grid flex">
                    {movies.map((movie, index) => {
                        return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                    })}
                </div>
            </div>
        </Container>
    )
}

export default UserLiked

const Container = styled.div`
    .content{
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
       h1{
        color: white;
        margin-left: 3rem;
       }
       .grid{
        flex-wrap: wrap;
        gap: 1rem;
       }
    }


`