// import Navbar from "../../../components/Navbar";
// import Footer from "../../../components/Footer";

import { useState } from "react";
import Indonesia from "../../../components/Indonesia";
// import Provinsi from "../../../components/Provinsi";
// import data from "../../../utils/constants/provinces";
import { useEffect } from "react";
import axios from "axios";
import ProvIndo from "../../../components/ProvIndo";

const PageIndonesia = () => {
    const [dataProvinsi, setDataProvinsi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://covid-fe-2023.vercel.app/api/indonesia.json"
        );
        setDataProvinsi(response.data.regions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    return(
        <>
            {/* <Navbar/> */}
            {/* <h2>Indonesia</h2> */}
            <Indonesia />

            <ProvIndo dataProvinsi={dataProvinsi}/>
            {/* <Footer/> */}
        </>
    );
}

export default PageIndonesia;