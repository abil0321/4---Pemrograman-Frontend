import Region from "../Region";
import StyledRegions from "./RegionsStyledComponenet";

const Regions = (props) => {
  return (
    <StyledRegions>
      <section>
        <div className="region__container">
          <Region />
        </div>
      </section>
    </StyledRegions>
  );
};
export default Regions;
