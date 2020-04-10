import React from "react";

const PollView = ({ name, optionOneText, avatarUrl }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{optionOneText}</p>
      <p>{avatarUrl}</p>
    </div>
  );
};

export default PollView;
