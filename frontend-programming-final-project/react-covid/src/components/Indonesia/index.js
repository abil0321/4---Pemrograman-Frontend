import { useState } from "react";
import StyledIndo from "./IndonesiaStyledComponent";
import data from "../../utils/constants/indonesia";
// import styles from "./Indonesia.module.css";

const Indonesia = (props) => {
  const status = useState(data);
  console.log(status.indonesia);

  const data_indonesia = data.indonesia.map((item, index) => (
    <div className="indonesia__card" key={index}>
      <h1 key={item.id}>
        {item.status}
      </h1>

      <p
        className={
          item.status === "Positif"
            ? "indonesia__card__positif"
            : item.status === "Sembuh"
            ? "indonesia__card__sembuh"
            : "indonesia__card__meninggal"
        }
      >
        {item.total.toLocaleString("id")}
      </p>
    </div>
  ));

  return (
    <StyledIndo>
      <div>
        <div className="indonesia__brand">
          <h2>Indonesia</h2>
          <p>
            Data Covid Berdasarkan Indonesia
          </p>
        </div>
        <div className="indonesia__container__card">
          {data_indonesia}
        </div>
      </div>
    </StyledIndo>
  );
};

export default Indonesia;
