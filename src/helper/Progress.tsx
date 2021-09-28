import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    spinner?: any
}

const Progress: React.FC<Props> = ({spinner}) => {
    return(
        <>
        {spinner && (
      <CircularProgress />
        )}
        </>
    )
}

export default Progress;