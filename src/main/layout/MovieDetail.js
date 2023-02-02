import React from "react";
import { useParams } from 'react-router-dom';

function  MovieDetail(){
    const {movieId} = useParams();
    return(
        <div>
            <p>{movieId}</p>
        </div>
    );
}

export  default  MovieDetail;