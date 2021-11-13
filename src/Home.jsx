import React from "react";

const Home = (props) => {
  let data_variable = <span>{props.data}</span>;
  return (
    <div>
      <p>Home</p>
      {data_variable}
      <br />
      <span>{props.element}</span>
      
    </div>
  );
};

export default Home;
