import styles from "./FormCovid.module.css";
import FormCovidImage from "../../assets/images/covid2.jpg";
import { useState } from "react";
import Alert from "../Alert/Error";

function FormCovid(props) {

  const { dataProvinsi, setDataProvinsi } = props;
  
  const select_status = [
    {name: 'sembuh'},
    {name: 'dirawat'},
    {name: 'meninggal'},
  ];

  const provinsi = dataProvinsi.provinces.map((dataP, index) => {
    return (
      <option className={styles.form__option} value={dataP.kota} key={index}>
        {dataP.kota}
      </option>
    );
  });

  const status_select = select_status.map((e, index) => {
    return (
        <option className={styles.form__option} value={e.name} key={index}>
            {e.name}
        </option>
    );
});

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState(0);

  const [isKotaError, setIsKotaError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  const handleKota = (e) => {
    setKota(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleJumlah = (e) => {
    setJumlah(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  if (kota === "") {
      setIsKotaError(true);
  }else if (status === "") {
      setIsStatusError(true);
  }else if (jumlah === 0) {
      setIsJumlahError(true);
  }else {
      if (status === "sembuh") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? { ...province, kasus: parseInt(jumlah) + parseInt(province.kasus),sembuh: parseInt(jumlah) + parseInt(province.sembuh)}
              : province
          ),
        };
        setDataProvinsi(updatedData);
      } else if (status === "dirawat") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? { ...province, kasus: parseInt(jumlah) + parseInt(province.kasus),dirawat: parseInt(jumlah) + parseInt(province.dirawat)}
              : province
          ),
        };
        setDataProvinsi(updatedData);
      } else if(status === "meninggal") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? { ...province, kasus: parseInt(jumlah) + parseInt(province.kasus),meninggal: parseInt(jumlah) + parseInt(province.meninggal)}
              : province
          ),
        };
        setDataProvinsi(updatedData);
      }

      setIsKotaError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
  }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={FormCovidImage} alt="" />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>

          <form onSubmit={handleSubmit}>

            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Provinsi
              </label>

              <select className={styles.form__dropbtn} name="kota" value={kota} onChange={handleKota}>
                <option>Pilih ...</option>
                {provinsi}
              </select>

              {isKotaError && <Alert>Kota Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Status
              </label>

              <select className={styles.form__dropbtn} name="status" value={status} onChange={handleStatus}>
                <option>Pilih ...</option>
                {status_select}
              </select>

              {isStatusError && <Alert>Status Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Jumlah
              </label>

              <input
                className={styles.form__input}
                type="number"
                name="jumlah"
                value={jumlah}
                onChange={handleJumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormCovid;
