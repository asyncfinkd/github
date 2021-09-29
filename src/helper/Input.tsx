import React from "react";
import TextField from '@mui/material/TextField';

interface Props {
  value: any;
  onChange: any;
  placeholder?: string;
}

const Input: React.FC<Props> = ({value, onChange, placeholder}) => {
    return(
        <>
          <TextField value={value} onChange={onChange} id="outlined-basic" label={placeholder} variant="outlined" />
        </>
    )
}

export default Input;