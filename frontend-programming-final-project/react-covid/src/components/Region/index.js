import { useEffect, useState } from "react";
import StyledRegion from "./RegionStyledComponent";
// import data from "../../utils/constants/indonesia";
import confirm from "./../../assets/images/mask.png";
import death from "./../../assets/images/spirit.png";
import recover from "./../../assets/images/recovered.png";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
// import styles from "./Indonesia.module.css";

const Region = (props) => {
  const [regionStatus, setRegionStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(ENDPOINTS.GLOBAL); // Ganti URL_ENDPOINT dengan URL yang sesuai
        setRegionStatus(response.data.regions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data_region = regionStatus.map((item, index) => (
    <div className="indonesia__card" key={index}>
      <h1 key={index}>{item.name}</h1>

      <div className="status">
        <div className="left">
          <span className="status_title">Confirmed</span>
          <br />
          <span className="confirm" key={index}>{item.numbers.confirmed}</span>
        </div>
        <div className="right">
          <img src={confirm} alt="placeholder" />
        </div>
      </div>

      <div className="status">
        <div className="left">
          <span className="status_title">Recovered</span>
          <br />
          <span className="recover">{item.numbers.recovered}</span>
        </div>
        <div className="right">
          <img src={recover} alt="placeholder" />
        </div>
      </div>

      <div className="status">
        <div className="left">
          <span className="status_title">Death</span>
          <br />
          <span className="death">{item.numbers.death}</span>
        </div>
        <div className="right">
          <img src={death} alt="placeholder" />
        </div>
      </div>
    </div>
  ));

  return (
    <StyledRegion>
      <div className="indonesia__brand">
        <h2>Situation by Region</h2>
        <p>Bacaan Pilihan Covid</p>
      </div>
      <div className="indonesia__container__card">{data_region}</div>
    </StyledRegion>
  );
};

export default Region;
