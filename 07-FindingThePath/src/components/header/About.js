import food_pizza from "../../images/food_pizza.jpg";
export default About = () => {
  return (
    <div className="about-container about">
      <div className="about-left">
        <h1>
          Welcome to <span>The Food Truck</span>
        </h1>
        <h3>
          A place where you're guaranteed to discover something to your liking!
        </h3>
      </div>
      <div className="about-right">
        <img src={food_pizza} alt="Food Image" />
      </div>
    </div>
  );
};
