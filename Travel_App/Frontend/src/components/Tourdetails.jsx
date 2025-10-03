import { useParams } from "react-router-dom";
import Bali from "./Bali";
import Singapore from "./Singapore";
const NotFound = () => <div>Topic not found!</div>;
const componentMap = {
  Bali,
  Singapore
};
const Tourdetails = () => {
  const {place} = useParams();
  const ComponentToRender = componentMap[place] || NotFound;
  return <ComponentToRender/>;
};

export default Tourdetails;