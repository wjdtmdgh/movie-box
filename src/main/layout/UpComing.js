import React, {useEffect, useState} from "react";
import { Card } from 'antd';
import webClient from "../../utils/WebClient";
import {useNavigate} from "react-router-dom";

const { Meta } = Card;

function  UpComing(){
    const [upcoming,setUpComing]= useState([]);
    const navigate=useNavigate();
    const onMoveMovieDetail=(movieId)=>{
        navigate(`/movie/${movieId}`)
    }
    useEffect(()=>{
        webClient.get("https://api.themoviedb.org/3/movie/upcoming?api_key=17782ac9805895b80c9219fa3809a24c&language=ko-KR&page=1")
            .then((res)=>{
                setUpComing(res.data.results);
            })
    },[])

    return(
        <div className={"card"}>
            {
                upcoming.map(item=>(
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>}
                        onClick={()=>{onMoveMovieDetail(item.id)}}
                    >
                        <Meta title={item.title} description={item.overview} />
                    </Card>

                ))
            }
        </div>
    );

}

export default  UpComing;