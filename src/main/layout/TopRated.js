import React, {useEffect,useState} from "react";
import webClient from "../../utils/WebClient";
import { Card } from 'antd';
import {useNavigate} from "react-router-dom";

const { Meta } = Card;


function TopRated(){
    const [topRate,setTopRate] = useState([]);
    const navigate=useNavigate();

    const onMoveMovieDetail=(movieId)=>{
        navigate(`/movie/${movieId}`)
    }
    useEffect(() => {
        webClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=17782ac9805895b80c9219fa3809a24c&language=ko-KR&page=1")
            .then((res) => {
                setTopRate(res.data.results);
            })
    }, [])
    useEffect(()=>{
        console.log(topRate);
    },[topRate])
    return(
        <div className={"card"}>
            {topRate.map(item =>(
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />}
                        onClick={()=>{
                            onMoveMovieDetail(item.id)
                        }}
                    >
                        <Meta
                            title={item.title}
                            description={item.overview} />
                    </Card>
                ))}
        </div>
    );
}

export default TopRated;