import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
    return (
        <div style={{margin: "0 auto"}} >
            <MoonLoader size={20} color={"white"} />            
        </div>
    )
}

export default Loading
