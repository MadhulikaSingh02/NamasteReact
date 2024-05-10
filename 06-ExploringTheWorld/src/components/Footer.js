export default Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By:
      <a
        href="https://www.linkedin.com/in/madhulika-singh-91876a230/"
        target="_blank"
      >
        Madhulika Singh
      </a>
      <i className="fa-solid fa-copyright"></i>
      <span>
        {year}
        <strong> The Food Truck</strong>
      </span>
    </div>
  );
};
