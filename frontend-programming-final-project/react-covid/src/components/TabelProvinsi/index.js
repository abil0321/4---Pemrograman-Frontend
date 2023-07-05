function TabelProvinsi(props){
const {dataP} = props;
    return(
            <tr key={dataP.id}>
              {/* <td></td> */}
              <td>{dataP.kota}</td>
              <td>{dataP.kasus}</td>
              <td>{dataP.sembuh}</td>
              <td>{dataP.dirawat}</td>
              <td>{dataP.meninggal}</td>
            </tr>
    );
}

export default TabelProvinsi;