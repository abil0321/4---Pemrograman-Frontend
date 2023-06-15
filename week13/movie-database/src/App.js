// Import Halaman Home
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/create/CreateMovie";
import PopularMovie from "./pages/movie/popular/PopularMovie";
import NowPlayingMovie from "./pages/movie/now/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/top/TopMovie";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme/theme";
import DetailMovie from "./pages/movie/detail/DetailMovie";
import { useState } from "react";
import data from "./utils/constants/data";



function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */

  const [movies, setMovies] = useState(data);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />}></Route>
            <Route path="/movie/popular" element={<PopularMovie />}></Route>
            <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
            <Route path="/movie/top" element={<TopRatedMovie />}></Route>
            <Route path="/movie/:id" element={<DetailMovie />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
