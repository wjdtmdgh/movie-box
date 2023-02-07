import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import webClient from "../../utils/WebClient";
import {Card} from "antd";

function  MovieDetail(){
    const {movieId} = useParams();
    const [movieDetail,setMovieDetail] = useState();
    useEffect(() => {
        webClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17782ac9805895b80c9219fa3809a24c&language=ko-kr`)
            .then((res) => {
                setMovieDetail(res.data);
            })
    }, [])
    useEffect(()=>{
        console.log(movieDetail);
    },[movieDetail])
    return(
        <div>
            {movieDetail &&
                <img alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />
            }
            <p>{movieId}</p>
        </div>
    );
}

export  default  MovieDetail;