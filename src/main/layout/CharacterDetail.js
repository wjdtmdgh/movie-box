import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import webClient from "../../utils/WebClient";

function CharacterDetail(){
    const {personId} = useParams();
    const [characterDetail,setCharacterDetail]=useState([]);
    useEffect(()=>{
        console.log(personId);
    })
    useEffect(()=>{
        webClient.get(`https://api.themoviedb.org/3/person/${personId}?api_key=17782ac9805895b80c9219fa3809a24c&language=en-US`)
            .then((res)=>{
                setCharacterDetail(res.data);
            })
    },[])
    useEffect(()=>{
        console.log(characterDetail);
    },[characterDetail])
    return(
        <div>
           <h1>dd</h1>
        </div>
    );
}
export default  CharacterDetail;