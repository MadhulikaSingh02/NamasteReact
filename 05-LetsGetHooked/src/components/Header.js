export default Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais"
          alt="logo"
        />
      </div>
      <div className="app-name">
        <h2>Khana Khazana</h2>
      </div>
      <div className="nav-items">
        <ul>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>About Us</li>
          </a>
          <a>
            <li>Contact</li>
          </a>
          <a>
            <li>Cart</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
