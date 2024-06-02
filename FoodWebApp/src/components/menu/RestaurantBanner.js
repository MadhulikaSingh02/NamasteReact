import { IMAGE_CDN_URL } from "../../utils/constants.js";
export default RestaurantBanner = (props) => {
  const { info } = props;
  return (
    <div className="r-banner">
      <img
        className="r-img"
        src={IMAGE_CDN_URL + info?.cloudinaryImageId}
        alt={info?.name}
      />
      <div className="r-banner-details">
        <h2>{info?.name}</h2>
        <p>{info?.cuisines?.join(", ")}</p>
        <div className="r-rating-details">
          <div
            className="r-rating"
            style={
              info?.avgRating < 4
                ? { backgroundColor: "var(--light-red)" }
                : info?.avgRating === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            <span>{info?.avgRating}</span>
          </div>
          {/* <span className="r-total-rating">
            ({info?.totalRatingsString})
          </span> */}
          <div>•</div>
          <div>{info?.sla?.slaString}</div>
          <div>•</div>
          <div>{info?.costForTwoMessage}</div>
        </div>
      </div>
    </div>
  );
};
