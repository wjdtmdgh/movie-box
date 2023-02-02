import { LaptopOutlined, NotificationOutlined, UserOutlined, FileOutlined, PieChartOutline,DesktopOutlined,TeamOutlined  } from '@ant-design/icons';
import {Breadcrumb, Card, Layout, Menu, theme} from 'antd';
import React, {useEffect, useState} from 'react';
import {PieChartOutlined } from '@ant-design/icons';
import '../../styles/layout/layout.css';
import webClient from "../../utils/WebClient";
import Popular from "./Whats Popular";
import Free from "./FreetoWatch";

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;




const DefaultLayout = () => {
    const [moviechart, setMovieChart] = useState("popular");
    const [collapsed, setCollapsed] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([]);
    const popular =()=>{
        setMovieChart("popular");
    }
    const free=()=>{
        setMovieChart("free");
    }
    const selectComponent={
        popular: <Popular/>,
        free: <Free/>
    }
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('Whats Popular', '1', <PieChartOutlined onClick={popular}/>),
        getItem('Free To Watch', '2', <DesktopOutlined onClick={free}/>),
        getItem('Leader Board', 'sub1', <UserOutlined />, [
            getItem('LEE', '3'),
            getItem('SEUNG', '4'),
            getItem('Park', '5'),
        ]),
        getItem('Trend', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Trailer', '9', <FileOutlined />),
    ];

  useEffect(() => {
    webClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=bc1db2058ee79a68eba79b137eaf2356&language=ko-KR&page=1")
      .then((res) => {
        setNowPlaying(res.data.results);
      })
  }, [])


  useEffect(() => {
    console.log(nowPlaying);
  }, [nowPlaying])

  const movieCard = (() =>
      nowPlaying.map(item => (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="영화 포스터" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />}
        >
          <Meta
            title={item.title}
            description={item.overview} />
        </Card>
      ))
  )

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
      <Layout
          style={{
              minHeight: '100vh',
          }}
      >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div
                  style={{
                      height: 10,
                      //margin: 16,
                      //background: 'rgba(255, 255, 255, 0.2)',
                  }}
              />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout className="site-layout">
              <Content>
                  {moviechart&& selectComponent[moviechart]}
              </Content>
              <Footer
                  style={{
                      textAlign: 'center',
                  }}
              >
                  Ant Design ©2023 Created by Ant UED
              </Footer>
          </Layout>
      </Layout>
  );
};
export default DefaultLayout