import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import NavBar from "./NavBar";
import '../styles/App.css';

function App() {
  return (
    <Layout>
        <NavBar/>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
      </Routes>
    </Layout>
  );
}

export default App;
