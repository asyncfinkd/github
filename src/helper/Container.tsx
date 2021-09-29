import React from "react";

const Container: React.FC<any> = ({ children, onScreen }: any) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
        }}
        className={onScreen && "height"}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
