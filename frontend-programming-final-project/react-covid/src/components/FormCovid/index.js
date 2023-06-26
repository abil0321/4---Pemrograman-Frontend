// import styles from "./FormCovid.module.css";
import FormCovidImage from "../../assets/images/covid2.jpg";
import StyledForm from "./FormCovidStyledComponent";
import { useState } from "react";
import Alert from "../Alert/Error";

function FormCovid(props) {
  const { dataProvinsi, setDataProvinsi } = props;

  const select_status = [
    { name: "Positif" },
    { name: "Sembuh" },
    { name: "Dirawat" },
    { name: "Meninggal" },
  ];

  const provinsi = dataProvinsi.provinces.map((dataP, index) => {
    return (
      <option value={dataP.kota} key={index}>
        {dataP.kota}
      </option>
    );
  });

  const status_select = select_status.map((e, index) => {
    return (
      <option value={e.name} key={index}>
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
    } else if (status === "") {
      setIsStatusError(true);
    } else if (jumlah === 0) {
      setIsJumlahError(true);
    } else {
      if (status === "Sembuh") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? {
                  ...province,
                  sembuh: parseInt(jumlah) + parseInt(province.sembuh),
                }
              : province
          ),
        };
        setDataProvinsi(updatedData);
      } else if (status === "Dirawat") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? {
                  ...province,
                  dirawat: parseInt(jumlah) + parseInt(province.dirawat),
                }
              : province
          ),
        };
        setDataProvinsi(updatedData);
      } else if (status === "Meninggal") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? {
                  ...province,
                  meninggal: parseInt(jumlah) + parseInt(province.meninggal),
                }
              : province
          ),
        };
        setDataProvinsi(updatedData);
      } else if (status === "Positif") {
        const updatedData = {
          ...dataProvinsi,
          provinces: dataProvinsi.provinces.map((province) =>
            province.kota === kota
              ? {
                  ...province,
                  kasus: parseInt(jumlah) + parseInt(province.kasus),
                }
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
    <StyledForm>
      <section>
        <div className="form__left">
          <img src={FormCovidImage} alt="" />
        </div>
        <div className="form__right">
          <h2 className="form__title">Form Covid</h2>

          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="type">Provinsi</label>

              <select name="kota" value={kota} onChange={handleKota}>
                <option>Pilih ...</option>
                {provinsi}
              </select>

              {isKotaError && <Alert>Kota Wajib Dipilih</Alert>}
            </div>

            <div className="form__group">
              <label htmlFor="type">Status</label>

              <select name="status" value={status} onChange={handleStatus}>
                <option>Pilih ...</option>
                {status_select}
              </select>

              {isStatusError && <Alert>Status Wajib Dipilih</Alert>}
            </div>

            <div className="form__group">
              <label htmlFor="title">Jumlah</label>

              <input
                type="number"
                name="jumlah"
                value={jumlah}
                onChange={handleJumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default FormCovid;
