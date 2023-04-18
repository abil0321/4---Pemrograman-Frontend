import { useState } from "react";
import data from "../../utils/constants/indonesia";
import styles from "./Indonesia.module.css";

const Indonesia = (props) => {
  const status = useState(data);
  console.log(status.indonesia);

  const data_indonesia = data.indonesia.map((item, index) => (
    <div className={styles.indonesia__card} key={index}>
      <h1 className={styles.indonesia__card__title} key={item.id}>{item.status}</h1>

      <p
        className={
          item.status === "Positif"
            ? styles.indonesia__card__positif
            : item.status === "Sembuh"
            ? styles.indonesia__card__sembuh
            : styles.indonesia__card__meninggal
        }
      >
        {item.total.toLocaleString("id")}
      </p>
    </div>
  ));

  return (
    <div className={styles.indonesia__container}>
      <div className={styles.indonesia__brand}>
        <h1 className={styles.indonesia__title}>Indonesia</h1>
        <p className={styles.indonesia__desc}>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <div className={styles.indonesia__container__card}>{data_indonesia}</div>
    </div>
  );
};

export default Indonesia;
