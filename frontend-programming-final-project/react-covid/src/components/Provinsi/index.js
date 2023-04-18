import TabelProvinsi from "../TabelProvinsi";
import styles from "./Provinsi.module.css";
import styles1 from "../TabelProvinsi/TabelProvinsi.module.css";

function Provinsi(props) {
  const { dataProvinsi } = props;

  const provinsi = dataProvinsi.provinces.map((dataP, index) => {
    return <TabelProvinsi key={dataP.kota} dataP={dataP} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.provinsi__container}>
        <div className={styles.provinsi}>
          <h1 className={styles.provinsi__title}>Provinsi</h1>
          <span className={styles.provinsi__subtitle}>
            Data Covid Berdasarkan Provinsi
          </span>
        </div>

        {/* Tabel Data Covid Provinsi */}
        <table className={styles1.provinsi__table}>
          <thead>
            <tr>
              {/* <th>No</th> */}
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>{provinsi}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
