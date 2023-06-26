import TabelProvinsi from "../TabelProvinsi";
// import styles from "./Provinsi.module.css";
// import styles1 from "../TabelProvinsi/TabelProvinsi.module.css";
import StyledTabelProvinsi from "../TabelProvinsi/TabelStyledComponent";
import StyledProvinsi from "./ProvinsiStyledComponent";

function Provinsi(props) {
  const { dataProvinsi } = props;

  const provinsi = dataProvinsi.provinces.map((dataP, index) => {
    return <TabelProvinsi key={dataP.kota} dataP={dataP} />;
  });

  return (
    <StyledProvinsi>
      <div>
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
      </div>
    </StyledProvinsi>
  );
}

export default Provinsi;
