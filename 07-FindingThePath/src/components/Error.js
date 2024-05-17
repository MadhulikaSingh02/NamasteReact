import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

import errorImg from "../images/404-error.jpg";
const Error = () => {
  const error = useRouteError(); //call useRouteError to get complete error object
  return (
    <div className="error-page">
      <img src={errorImg} alt="Food Image" />
      <h3>Oops! We are unable to find the restaurant you are looking for.</h3>
      <p>{error.data} </p>
      <h3 className="error-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};
export default Error;
