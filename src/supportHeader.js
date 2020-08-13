import {useAuthContext} from "./context/AuthContext";

const SupportHeader = (extraMetadata) =>{
   
    let header = {};
    const localToken = localStorage.getItem("token");

    const { token } = useAuthContext();

    if(token || localToken ) {
        const userToken = token || localToken;

        header = {
            headers: {
                Authorization: `Bearer ${userToken}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
                ...extraMetadata
            }
        };
    }
    
    return header;
};


export default SupportHeader;