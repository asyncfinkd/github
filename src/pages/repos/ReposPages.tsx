import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "../../helper/Container";
import Lists from "../../helper/Lists";

const ReposPages: React.FC = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/asyncfinkd/repos")
      .then((res: any) => {
        setData(res.data);
      });
  }, []);
  return (
    <>
      <Container onScreen={false}>
        <Lists data={data} />
      </Container>
    </>
  );
};

export default ReposPages;
