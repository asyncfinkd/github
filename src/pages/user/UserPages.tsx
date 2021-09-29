import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import Progress from "../../helper/Progress";
import Container from "../../helper/Container";
import BreadCrumps from "../../helper/BreadCrumps";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import CardComponent from "../../components/card/CardComponent";

const UserPages: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [serveralError, setServeralError] = useState<boolean>(false);
  useEffect(() => {
    let newPath = window.location.pathname.split("/");
    axios
      .get(`https://api.github.com/users/${newPath[2]}`)
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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    toast.dismiss();
  }, [pathname]);
  return (
    <>
      {serveralError ? (
        <p>404 error, user is not defined</p>
      ) : (
        <Container onScreen={true}>
          <Progress spinner={spinner} />
          {spinner !== true && (
            <>
              <BreadCrumps />
              <CardComponent
                avatar={data.avatar_url}
                name={data.name}
                login={data.login}
                bio={data.bio}
              />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default UserPages;
