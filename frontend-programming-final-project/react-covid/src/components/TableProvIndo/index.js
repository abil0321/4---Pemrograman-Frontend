function TabelProvIndo(props){
const {dataP} = props;
    return(
            <tr key={dataP.id}>
              {/* <td></td> */}
              <td>{dataP.name}</td>
              <td>{dataP.numbers.confirmed}</td>
              <td>{dataP.numbers.recovered}</td>
              <td>{dataP.numbers.treatment}</td>
              <td>{dataP.numbers.death}</td>
            </tr>
    );
}

export default TabelProvIndo;