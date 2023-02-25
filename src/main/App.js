import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import NavBar from "./NavBar";
import '../styles/App.css';
import MoviePage from "./layout/MoviePage";
import TVProgramPage from "./layout/TVProgramPage";
import CharacterPage from "./layout/CharacterPage";
import MorePage from "./layout/MorePage";
import MovieDetail from "./layout/MovieDetail";
function App() {
  return (
    <Layout>
        <NavBar/>
      <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/movie" element={<MoviePage/>}/>
          <Route path="/tv" element={<TVProgramPage/>}/>
          <Route path="/person" element={<CharacterPage/>}/>
          <Route path="/more" element={<MorePage/>}/>
          <Route path="/movie/:movieId" element={<MovieDetail/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
