// Import Halaman Home
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/create/CreateMovie";
import PopularMovie from "./pages/movie/popular/PopularMovie";
import NowPlayingMovie from "./pages/movie/now/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/top/TopMovie";
import Layout from "./layout";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
        <Route path="/movie/popular" element={<PopularMovie />}></Route>
        <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
        <Route path="/movie/top" element={<TopRatedMovie />}></Route>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
