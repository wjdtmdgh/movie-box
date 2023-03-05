import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Col, Row, Image, Progress} from 'antd';
import webClient from "../../utils/WebClient";
import "../../styles/layout/CharacterDetail.css";
import { Card } from 'antd';
import {InstagramOutlined} from '@ant-design/icons';
const { Meta } = Card;
function CharacterDetail(){
    const {characterId} = useParams();
    const [characterDetail,setCharacterDetail]=useState([]);
    const [characterCredits,setCharacterCredits]=useState([]);
    useEffect(()=>{
        webClient.get(`https://api.themoviedb.org/3/person/${characterId}?api_key=17782ac9805895b80c9219fa3809a24c&language=en-US`)
            .then((res)=>{
                setCharacterDetail(res.data);
            })
    },[])
    useEffect(()=>{
        webClient.get(`https://api.themoviedb.org/3/person/${characterId}/combined_credits?api_key=17782ac9805895b80c9219fa3809a24c&language=en-US`)
            .then((res)=>{
                setCharacterCredits(res.data.cast);
            })
    },[])
    useEffect(()=>{
        console.log(characterDetail);
    },[characterDetail])
    useEffect(()=>{
        console.log(characterCredits);
    },[characterCredits])
    return(
        <div className="CDdiv1">
            <div className="CDimg1">
                <Image
                    width={300}
                    src={`https://image.tmdb.org/t/p/w500/${characterDetail.profile_path}`}
                />
                <InstagramOutlined className="CDicon"/>
                <p className="MD2p1"><b>[인물정보]</b></p>
                <p className="MD2p1"><b>유명분야</b></p>
                <p className="MD2p2">{characterDetail.known_for_department}</p>
                <p className="MD2p1"><b>성별</b></p>
                <p className="MD2p2">{characterDetail.gender}</p>
                <p className="MD2p1"><b>생일</b></p>
                <p className="MD2p2">{characterDetail.birthday}</p>
                <p className="MD2p1"><b>출생지</b></p>
                <p className="MD2p2">{characterDetail.place_of_birth}</p>

            </div>
            <div className="CDdiv2">
                <h1 className="CDh1">{characterDetail.name}</h1>
                <p className="CDp1"><b>약력</b></p>
                <p className="CDp2">{characterDetail.biography}</p>
                <p className="CDp3"><b>주요 분야</b></p>
                <div className="CDcard">
                    {
                        characterCredits.map(item=>(
                            <Card
                                className="CDcard2"
                                hoverable
                                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />}
                            >
                                <Meta title={item.title}  />
                            </Card>
                        ))}
                </div>
            </div>

        </div>
    );
}
export default  CharacterDetail;