import axios, { AxiosResponse, AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import Container from "../../helper/Container";
import Lists from "../../helper/Lists";
import Progress from "../../helper/Progress";

const ReposPages: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [serveralError, setServeralError] = useState<boolean>(false);
  useEffect(() => {
    let newPath = window.location.pathname.split("/");
    axios
      .get(`https://api.github.com/users/${newPath[2]}/repos`)
      .then((response: AxiosResponse) => {
        setData(response.data);
        setSpinner(false);
      })
      .catch((reason: AxiosError) => {
        if (reason.response!.status !== 400) {
          setServeralError(true);
          setSpinner(false);
        }
      });
  }, []);
  return (
    <>
      {serveralError ? (
        <p>404 error, user is not defined</p>
      ) : (
        <>
          {spinner && (
            <Container onScreen={true}>
              <Progress spinner={spinner} />
            </Container>
          )}
          <Container onScreen={false}>
            {spinner !== true && <Lists data={data} />}
          </Container>
        </>
      )}
    </>
  );
};

export default ReposPages;
