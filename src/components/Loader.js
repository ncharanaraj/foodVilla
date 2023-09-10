import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text"></div>
      <div className="card-text"></div>
      <div className="card-text"></div>
      <div className="card-text"></div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="cards">
      {Array(10)
        .fill("")
        .map((index) => (
          <Card key={index} />
        ))}
    </div>
  );
};

export default Loader;
