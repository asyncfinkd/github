import React from "react";

const Container: React.FC<any> = ({ children }: any) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
