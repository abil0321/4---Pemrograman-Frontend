import { useEffect, useState } from "react";
import StyledGlobal from "./GlobalStyledComponent";
// import data from "../../utils/constants/indonesia";
// import styles from "./Indonesia.module.css";
import axios from 'axios';
import ENDPOINTS from "../../utils/constants/endpoints";

const Global = (props) => {
  const [globalStatus, setGlobalStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(ENDPOINTS.GLOBAL); // Ganti URL_ENDPOINT dengan URL yang sesuai
        setGlobalStatus(response.data.global);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data_global = globalStatus.map((item, index) => (
    <div className="indonesia__card">
      <h1>
        {item.status.toUpperCase()}
      </h1>

      <p
        className={
          item.status === "confirmed"
            ? "indonesia__card__positif"
            : item.status === "recovered"
            ? "indonesia__card__sembuh"
            : "indonesia__card__meninggal"
        }
      >
        {item.total.toLocaleString("id")}
      </p>
    </div>
  ));

  return (
    <StyledGlobal>
      <div>
        <div className="indonesia__brand">
          <h2>Global Situation</h2>
          <p>
            Data Covid Berdasarkan Global
          </p>
        </div>
        <div className="indonesia__container__card">
          {data_global}
        </div>
      </div>
    </StyledGlobal>
  );
};

export default Global;
