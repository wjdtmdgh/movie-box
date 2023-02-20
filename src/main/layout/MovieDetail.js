import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import webClient from "../../utils/WebClient";
import "../../styles/layout/MovieDetail.css"
import { Card, Popover  } from 'antd';
import { Progress} from 'antd';
import {CheckCircleFilled,SketchCircleFilled,PlusCircleFilled,DingtalkCircleFilled } from "@ant-design/icons";

const { Meta } = Card;
const content1 = (
    <div>
        <p>목록에 추가</p>
    </div>
);
const content2 = (
    <div>
        <p>회원님의 관심 목록에 추가</p>
    </div>
);
const content3 = (
    <div>
        <p>즐겨찾기 표시</p>
    </div>
);
const content4 = (
    <div>
        <p>평가하세요!</p>
    </div>
);
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
        <div >
              {
                 movieDetail &&
                  <div>
                      <div className="MDposter2" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}")`}}>
                              <Card
                                  className="MDposter"
                                  hoverable
                                  cover={<img className="MDimg" alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />}
                              >
                                  <Meta title="Now Straming" description="Whatch Now" />
                              </Card>
                          <div className="MDdiv1">
                              <h1 className="MDh1">블랙 팬서: 와칸다 포에버(2022)</h1>
                              <p className="MDp1"><b>2022/11/09(KR) - 액션,모험,SF - 2h 42m</b></p>
                              <Progress className="MDprogress" width={50} type="circle" percent={75} strokeColor="white"  />
                              <b>회원점수</b>
                              <Popover placement="bottomLeft" content={content1}>
                                  <PlusCircleFilled className="MDicon"/>
                              </Popover>
                              <Popover placement="bottomLeft" content={content2}>
                                  <CheckCircleFilled className="MDicon"/>
                              </Popover>
                              <Popover placement="bottomLeft" content={content3}>
                                  <SketchCircleFilled className="MDicon"/>
                              </Popover>
                              <Popover placement="bottomLeft" content={content4}>
                                  <DingtalkCircleFilled className="MDicon"/>
                              </Popover>
                              <p className="MDp2"><b>두 세계가 충돌한다</b></p>
                              <h2>개요</h2>
                              <p className="MDp3">국왕이자 블랙 팬서인 티찰라의 죽음 이후 수많은 강대국으로부터 위협을 받게 된 와칸다. 라몬다, 슈리 그리고 나키아, 오코예, 음바쿠는 각자<br/> 사명감을 갖고 와칸다를 지키기 위해 외로운 싸움을 이어간다. 한편, 비브라늄의 패권을 둘러싼 미스터리한 음모와 함께 깊은 해저에서 모습을 드러낸 <br/>최강의 적 네이머와 탈로칸의 전사들은 와칸다를 향해 무차별 공격을 퍼붓기 시작하는데…</p>
                          </div>
                      </div>
                  </div>
                }
        </div>
    );
}

export  default  MovieDetail;