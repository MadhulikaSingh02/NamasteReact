import ResCard from "./ResCard";
import { resList } from "../../list";
export default Main = () => {
  return (
    <div>
      <div className="search">Search Here</div>
      <div className="res-container">
        {resList.map((res) => (
          <ResCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};
// resName="Desi Gali"
// cuisine="North Indian, Biriyani"
// rating="4.0"
// delivery="30 min"
