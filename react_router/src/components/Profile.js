import React from "react";
import { useParams } from "react-router-dom";
export default function User()
{ const {id}=useParams();
    return <>
    <h1>User Profile Page</h1>
    <h2>The user is {id}</h2>
    </> 
}