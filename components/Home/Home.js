import "./Home.css";

export default () => {
  return (
    <div className="container homepage">
      <div className="home-wrapper">
        <div className="special-font">
          <h1>Hey I am </h1>
          <h1>
            <span>K</span>rishnendu{" "}
          </h1>
          <h1>
            <span>S</span>udheesh<span>.</span>
          </h1>
        </div>
        <div className="image-wrapper">
          <div className="image-container">
            <img src={require("./me.jpg")} />
          </div>
        </div>
        <div></div>
        <div className="secondary-details">
          <p>Software Developer </p>
          <p>Student </p>
          <p>Programmer </p>
        </div>
      </div>

      {/* <p style={{ marginTop: "10vh" }}>
        I create innovative and reliable digital solutions
      </p> */}
    </div>
  );
};
