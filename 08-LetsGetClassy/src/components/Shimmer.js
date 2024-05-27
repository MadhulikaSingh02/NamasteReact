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

export const MenuShimmer = () => {
  return (
    <div className="shimmer-menu-container">
      <div className="shimmer-res-menu">
        {new Array(SHIMMER_CARD_COUNT).fill(0).map((c, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
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
