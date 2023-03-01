import { UserOutlined, FileOutlined,DesktopOutlined,TeamOutlined  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, {useState} from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import '../../styles/layout/layout.css';
import Popular from "./NowPlaying";
import Free from "./TopRated";
import UpComing from "./UpComing";
import Playing from"./Popular";
const { Content, Footer, Sider } = Layout;

const DefaultLayout = () => {
    const [moviechart, setMovieChart] = useState("popular");
    const [collapsed, setCollapsed] = useState(false);
    const popular =()=>{
        setMovieChart("popular");
    }
    const free=()=>{
        setMovieChart("free");
    }
    const upcoming=()=>{
        setMovieChart("upcoming")
    }
    const playing=()=>{
        setMovieChart("playing")
    }
    const selectComponent={
        popular: <Popular/>,
        free: <Free/>,
        upcoming: <UpComing/>,
        playing:<Playing/>
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
        getItem('Now Playing', '1', <PieChartOutlined onClick={popular}/>),
        getItem('Top Rated', '2', <DesktopOutlined onClick={free}/>),
        getItem('Upcoming', '9', <FileOutlined onClick={upcoming}/>),
        getItem('Popular', 'sub1', <UserOutlined onClick={playing}/>),
    ];

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