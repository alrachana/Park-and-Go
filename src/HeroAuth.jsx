import React from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import AuthForm from "./Auth/AuthForm";
import './HeroAuth.css'

const HeroAuth =()=>{
    const history = useNavigate();

    const back =()=>{
        history.goBack()
    };

    return(
        <>
        <section className="hero">
            <div className="main">
                <div className="container-2">
                    <button onClick={back} className="back">
                        {'<<'}Back
                    </button>
                    <AuthForm/>
                </div>
            </div>
        </section>
        </>
    )
}
export default HeroAuth;