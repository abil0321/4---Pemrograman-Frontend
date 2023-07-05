import { useSelector } from "react-redux";
import TabelProvinsi from "../TabelProvinsi";
// import styles from "./Provinsi.module.css";
// import styles1 from "../TabelProvinsi/TabelProvinsi.module.css";
import StyledTabelProvinsi from "../TabelProvinsi/TabelStyledComponent";
import StyledProvinsi from "./ProvinsiStyledComponent";

function Provinsi() {
  // const { dataProvinsi } = props;
  
  const covid = useSelector((state) => state.covid.covid)
  console.log(covid);
  
  const provinsi = covid.map((dataP, index) => {
    return <TabelProvinsi key={index} dataP={dataP} />;
  });

  return (
    <StyledProvinsi>
        <div className="provinsi__container">
          <div className="provinsi">
            <h1>Provinsi</h1>
            <span>Data Covid Berdasarkan Provinsi</span>
          </div>

          {/* Tabel Data Covid Provinsi */}
          <StyledTabelProvinsi>
            
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
            
          </StyledTabelProvinsi>
        </div>
      
    </StyledProvinsi>
  );
}

export default Provinsi;
