import React from "react";
import { useState } from "react";
import Button from "../../helper/Button";
import Input from "../../helper/Input";
import { useHistory } from "react-router-dom";
import Container from "../../helper/Container";
import { toast } from "react-toastify";
import Form from "../../helper/Form";

const IndexPages: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const history = useHistory();
    const changeInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSearch(value);
      };
    return(
        <>
                <Form>
            <Container>
            <h2>Github</h2>
            <Input placeholder={"Username"} value={search} onChange={changeInput} />
            <Button text={"Search"} onClick={() => {
                if(!search) {
                    toast.error("Please enter a username");
                } else {
                    history.push(`/user/${search}`);
                }
            }} />
            </Container>
            </Form>
        </>
    )
}

export default IndexPages;