import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import webClient from "../../utils/WebClient";
import "../../styles/layout/MovieDetail.css"
import { Card, Popover,Modal,message, Divider,Select,Col, Row   } from 'antd';
import { Progress} from 'antd';
import { FacebookFilled,TwitterOutlined,InstagramOutlined,LikeFilled,DislikeFilled ,CheckCircleFilled,SketchCircleFilled,PlusCircleFilled,DingtalkCircleFilled } from "@ant-design/icons";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi,contextHolder] = message.useMessage();
    const {movieId} = useParams();
    const [movieDetail,setMovieDetail] = useState();
    const [movieCharacter, setMovieCharacter] = useState([]);
    useEffect(() => {
        webClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17782ac9805895b80c9219fa3809a24c&language=ko-kr`)
            .then((res) => {
                setMovieDetail(res.data);
            })
    }, [])
    useEffect(() => {
        webClient.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17782ac9805895b80c9219fa3809a24c&language=en-US`)
            .then((res) => {
                setMovieCharacter(res.data.cast);
            })
    }, [])
    useEffect(()=>{
        console.log(movieDetail);
    },[movieDetail])
    useEffect(()=>{
        console.log(movieCharacter);
    },[movieCharacter])
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '성공! 이미지 평가 완료',
        });
    };
    return(
        <div >
              {
                 movieDetail &&
                  <div>
                      <div className="MDposter2" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}")`}}>
                              <Card
                                  onClick={showModal}
                                  className="MDposter"
                                  hoverable
                                  cover={<img className="MDimg" alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />}
                              >
                                  <Meta title="Now Straming" description="Whatch Now" />
                              </Card>
                          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                              <div  className="MDmodal">
                                  <img className="MDmodalimg" alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />
                                  <div>
                                      {contextHolder}
                                      <DislikeFilled className="MDmodalicon" onClick={success}/>
                                      <LikeFilled className="MDmodalicon2" onClick={success}/>
                                      <p className="MDmodalp1"><b>정보</b></p>
                                      <Divider className="MDmodaldivider"/>
                                      <p className="MDmodalp2">Primary?</p>
                                      <p className="MDmodalp2">(이)가 추가함<br/>kwanlove</p>
                                      <p className="MDmodalp2">크기<br/>743x1100</p>
                                      <p className="MDmodalp2">언어</p>
                                      <Select className="MDmodalselect"
                                          defaultValue="영어"
                                          style={{ width: 120 }}
                                          options={[
                                              { value: '영어', label: '영어' },
                                              { value: '한국어', label: '한국어' },
                                              { value: '일본어', label: '일본어' },
                                              { value: '중국어', label: '중국어'},
                                          ]}
                                      />
                                  </div>
                              </div>
                          </Modal>
                          <div className="MDdiv1">
                              <h1 className="MDh1">{movieDetail.title}</h1>
                              <p className="MDp1"><b>{movieDetail.release_date} - 액션,모험,SF - 2h 42m</b></p>
                              <Progress className="MDprogress" width={50} type="circle" percent={movieDetail.vote_average} strokeColor="white"  />
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
                              <p className="MDp2"><b>{movieDetail.tagline}</b></p>
                              <h2>개요</h2>
                              <p className="MDp3">{movieDetail.overview}</p>
                              <div className="MDdiv2">
                                  <p className="MDp4"><a href="/">Ryan Coogler</a> <br/>Director, Screenplay,Story</p>
                                  <p className="MDp4"><a href="/">Stan Lee</a> <br/>Characters</p>
                                  <p className="MDp4"><a href="/">Jack Kirby</a><br/>Characters</p>
                              </div>
                          </div>
                      </div>
                      <Row>
                          <Col span={18}>
                              <h1 className="MD2h1">주요 출연진</h1>
                              <div className="MD2card">
                                  {movieCharacter.map(item => (
                                      <Card
                                          style={{
                                              width: 120,
                                          }}
                                          cover={<img alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} />}
                                      >
                                          <Meta
                                              title={item.title}
                                              description={item.overview} />

                                      </Card>
                                  ))}
                              </div>
                          </Col>
                          <Col span={6}>
                              <FacebookFilled className="MD2icon1"/>
                              <TwitterOutlined className="MD2icon1"/>
                              <InstagramOutlined className="MD2icon1"/>
                              <p className="MD2p1"><b>원제</b></p>
                              <p className="MD2p2">{movieDetail.original_title}</p>
                              <p className="MD2p1"><b>상태</b></p>
                              <p className="MD2p2">개봉됨</p>
                              <p className="MD2p1"><b>원어</b></p>
                              <p className="MD2p2">영어</p>
                              <p className="MD2p1"><b>제작비</b></p>
                              <p className="MD2p2">$250,000,000.00</p>
                              <p className="MD2p1"><b>수익</b></p>
                              <p className="MD2p2">$855,099,029.00</p>
                          </Col>
                      </Row>
                  </div>
                }
        </div>
    );
}

export  default  MovieDetail;