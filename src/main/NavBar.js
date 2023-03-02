import "../styles/App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {

    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                        <Menu.Item>
                            <Link to="/">Movie</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/tv">TV Program</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/person">Character</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/more">More</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/sign-in">Login</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    );
};

export default Navbar;
