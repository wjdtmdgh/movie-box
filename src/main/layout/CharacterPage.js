import React, {useEffect, useState} from "react";
import { Card } from 'antd';
import webClient from "../../utils/WebClient";
import {useNavigate} from "react-router-dom";

const { Meta } = Card;

function  CharacterPage(){
    const [character,setCharacter]=useState([]);
    const navigate=useNavigate();
    const onMoveCharacterDetail=(charaterId)=>{
        navigate(`/person/${charaterId}`);
    }
    useEffect(()=>{
        webClient.get("https://api.themoviedb.org/3/person/popular?api_key=17782ac9805895b80c9219fa3809a24c&language=en-US&page=1")
            .then((res)=>{
                setCharacter(res.data.results);
            })
    },[])
    useEffect(()=>{
        console.log(character);
    },[character])
    return(
        <div className={"card"}>
            {character.map(item=>(
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} />}
                    onClick={()=>{onMoveCharacterDetail(item.id)}}
                >
                    <Meta title={item.name} description={item.known_for_department} />
                </Card>
            ))}
        </div>
    );
}

export default  CharacterPage;