import { IMAGE_CDN_URL } from "../utils/constants";
export default ResCard = (props) => {
  // const data = props.resData;
  const { resData } = props; //this means resData = props.resData
  // const { image, name, cuisine, rating, costText } = resData?.info;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      {/* <img className="res-logo" src={image.url} alt="res-logo" /> */}
      <img
        className="res-logo"
        src={IMAGE_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(" ")}</h5>
      <h4>{areaName}</h4>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "var(--white)" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};
