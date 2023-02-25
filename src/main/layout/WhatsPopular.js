import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Button, Card, theme} from "antd";
import webClient from "../../utils/WebClient";

const { Meta } = Card;

function WhatsPopular(){
    const navigate = useNavigate();
    const onMovieCardClick=(movieId)=>{
        console.log("눌림");
        navigate(`/movie/${movieId}`);
    }
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(() => {
        webClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=bc1db2058ee79a68eba79b137eaf2356&language=ko-KR&page=1")
            .then((res) => {
                setNowPlaying(res.data.results);
            })
    }, [])


    useEffect(() => {
        console.log(nowPlaying);
    }, [nowPlaying])

    return(
        <div className={"card"}>
            {nowPlaying.map(item => (
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />}
                    onClick={()=>{onMovieCardClick(item.id)}}
                >
                    <Meta
                        title={item.title}
                        description={item.overview} />

                </Card>
            ))}

        </div>
    );
}
export default WhatsPopular;