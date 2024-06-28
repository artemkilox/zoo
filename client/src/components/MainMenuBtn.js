import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/mainMenuBtn.css'

const MainMenuBtn = ({text, route, active}) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(route)
    }

    return (
        <button
            className={active ? "main-menu-btn active-menu-btn" : "main-menu-btn"}
            onClick={clickHandler}
        >
            <div className="circle"></div>
            <div className="text">{text}</div>
        </button>
    );
};

export default MainMenuBtn;