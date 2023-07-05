// import { useState } from "react";
import Layout from "./layout";
// import Home from "./pages/Home";
import PageAbout from "./pages/covid/about/AboutCovid";
import PageGlobal from "./pages/covid/global/GlobalCovid";
import PageIndonesia from "./pages/covid/indonesia/IndonesiaCovid";
import PageProvinsi from "./pages/covid/provinsi/ProvinsiCovid";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme/theme";
// import data from "./utils/constants/provinces";

function App() {
  // const [dataProvinsi, setDataProvinsi] = useState(data);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<PageGlobal />}></Route>
            <Route path="/covid/about" element={<PageAbout />}></Route>
            {/* <Route path="/covid/global" element={<PageGlobal />}></Route> */}
            <Route path="/covid/indo" element={<PageIndonesia />}></Route>
            <Route path="/covid/provinsi" element={<PageProvinsi />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
