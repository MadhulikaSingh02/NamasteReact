export default ResCard = (props) => {
  // const data = props.resData;
  const { resData } = props; //this means resData = props.resData
  const { image, name, cuisine, rating, costText } = resData?.info;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={image.url} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisine.join(" ")}</h4>
      <h5>{rating.aggregate_rating}</h5>
      <h5>{costText.text}</h5>
      {/* <div className="separtor"></div>
        <div className="safety-msg">
          <span>Follows all Safety Measures to ensure your food is safe</span>
        </div> */}
    </div>
  );
};
