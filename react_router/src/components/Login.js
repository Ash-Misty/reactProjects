import React from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const Navigate=useNavigate();
    function onSubmit(){
    
    Navigate('/Dashboard');
}
    return <>
    <h1>Login Page</h1>
    <button onClick={onSubmit}>SUbmit</button>
    </>
}
export default Login;