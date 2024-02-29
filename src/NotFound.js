
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 6000);
    });

    return(
        <>
            <p>NotFound</p>
        </>
    )
}

export default NotFound;