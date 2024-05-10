import { SHIMMER_CARD_COUNT } from "../utils/constants";
const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img animation"></div>
      <div className="shimmer-cuisines animation"></div>
      <div className="shimmer-cuisines animation"></div>
      <div className="shimmer-cuisines animation"></div>
      <div className="shimmer-info animation"></div>
    </div>
  );
};

export default Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(SHIMMER_CARD_COUNT).fill(0).map((c, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};
