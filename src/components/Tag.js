import React from "react";

const Tag = ({ text }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--primary)",
          color: "white",
          borderRadius: "5px",
          width: "fit-content",
          padding: "1% 22px",
          fontSize: "0.8rem",
          height: "24px",
          textOverflow: "ellipsis",
        }}
      >
        <p>{text}</p>
      </div>
    </>
  );
};

export default Tag;
