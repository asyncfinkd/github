import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../../helper/Progress";
import Container from "../../helper/Container";
import BreadCrumps from "../../helper/BreadCrumps";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const UserPages: React.FC = () => {
    const [data, setData] = useState<any>([]);
    const [spinner, setSpinner] = useState<boolean>(true);
    useEffect(() => {
            let newPath = window.location.pathname.split("/");
        axios.get(`https://api.github.com/users/${newPath[2]}`).then((res) => {
            setSpinner(false);
            setData(res.data);
        })
    }, []);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        toast.dismiss()
      }, [pathname]);
    return(
        <>
        <Container>
            <Progress spinner={spinner} />
            {spinner !== true && (
            <>
                <BreadCrumps />
                <p>{data.id}</p>
            </>
            )}
        </Container>
        </>
    )
}

export default UserPages;