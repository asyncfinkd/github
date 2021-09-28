import React from "react";

const Form: React.FC<any> = ({children}: any) => {
    return(
        <>
            <form onSubmit={(e: any) => e.preventDefault()}>
                {children}
            </form>
        </>
    )
}

export default Form;