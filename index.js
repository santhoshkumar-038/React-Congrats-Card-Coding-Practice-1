const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <p>Kiran V</p>
      <p>Vishnu Institute of Computer Education and Technology Bhimavaram</p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
