import { UserOutlined, FileOutlined,DesktopOutlined,TeamOutlined  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, {useState} from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import '../../styles/layout/layout.css';
import Popular from "./WhatsPopular";
import Free from "./TopRated";

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
        getItem('Top Rated', '2', <DesktopOutlined onClick={free}/>),
        getItem('Leader Board', 'sub1', <UserOutlined />, [
            getItem('LEE', '3'),
            getItem('SEUNG', '4'),
            getItem('Park', '5'),
        ]),
        getItem('Trend', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Trailer', '9', <FileOutlined />),
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