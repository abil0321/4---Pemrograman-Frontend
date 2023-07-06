import StyledBiodata from "./BiodataStyledComponent";
import BiodataImage from "../../assets/images/fotokelas.png";
import Image from "../ui/Media/Image";

const Biodata = () => {
  return (
    <StyledBiodata>
      <h1>About Me</h1>
      
      <div className="imgBiodata">
        <Image src={BiodataImage} alt="" />
      </div>

      <div className="">
        <table>
          <tr>
            <td><b>Name</b> </td>
            <td> : </td>
            <td>Muhammad Salsabil</td>
          </tr>
          <tr>
            <td><b>Rombel</b> </td>
            <td> : </td>
            <td>TI07</td>
          </tr>
          <tr>
            <td><b>Kelas</b> </td>
            <td> : </td>
            <td>Kamis</td>
          </tr>
        </table>
      </div>
    </StyledBiodata>
  );
};

export default Biodata;
