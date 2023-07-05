// import styles from "./FormCovid.module.css";
import FormCovidImage from "../../assets/images/covid2.jpg";
import StyledForm from "./FormCovidStyledComponent";
import { useState } from "react";
import Alert from "../Alert/Error";
import { addCovid } from "../../features/covidSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";

function FormCovid(props) {
  // const { dataProvinsi } = props;

  const covid = useSelector((state) => state.covid.covid)
  
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const select_status = [
    { name: "Positif" },
    { name: "Sembuh" },
    { name: "Dirawat" },
    { name: "Meninggal" },
  ];

  const provinsi = covid.map((dataP, index) => {
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

  // const [kota, setKota] = useState("");
  // const [status, setStatus] = useState("");
  // const [jumlah, setJumlah] = useState(0);

  const [formData, setFormData] = useState({
    kota: "",
    status: "",
    jumlah: 0,
  });
  const { kota, status, jumlah } = formData;

  // const [isKotaError, setIsKotaError] = useState(false);
  // const [isStatusError, setIsStatusError] = useState(false);
  // const [isJumlahError, setIsJumlahError] = useState(false);

  const [formErrors, setFormErrors] = useState({
    kota: "false",
    status: "false",
    jumlah: "false",
  });

  const {
    kota: isKotaError,
    status: isStatusError,
    jumlah: isJumlahError,
  } = formErrors;

  // const handleKota = (e) => {
  //   setKota(e.target.value);
  // };
  // const handleStatus = (e) => {
  //   setStatus(e.target.value);
  // };
  // const handleJumlah = (e) => {
  //   setJumlah(e.target.value);
  // };

  function handleChange(e) {
    const { name, value } = e.target;
    // const selectedStatus = select_status.find(item => item.name === value);

    // console.log(selectedStatus);

    setFormData({
      ...formData,
      [name]: value,
    });
    
  }

  function validate() {
    const errors = { ...formErrors };
    let isInvalid = false;

    for (let key in errors) {
      if (formData[key] === "") {
        errors[key] = true;
        isInvalid = false;
      } else {
        errors[key] = false;
        isInvalid = true;
      }
    }

    setFormErrors({ ...errors });
    return isInvalid;
  }

  function submitCovid() {
    const covid = {
      kota: kota,
      status: status,
      jumlah: parseInt(jumlah),
    };
    
    console.log(covid);

    dispatch(addCovid(covid));
    navigation("/covid/provinsi");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      submitCovid();

      setFormData({
        kota: "",
        status: "",
        jumlah: "",
      });
    }
  }

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

              <select name="kota" value={kota} onChange={handleChange}>
                <option>Pilih ...</option>
                {provinsi}
              </select>

              {isKotaError && <Alert>Kota Wajib Dipilih</Alert>}
            </div>

            <div className="form__group">
              <label htmlFor="type">Status</label>

              <select name="status" value={status} onChange={handleChange}>
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
                onChange={handleChange}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              {/* <button type="submit">Submit</button> */}
              <Button type="submit" variant="aqua" full>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default FormCovid;
