import React from 'react';
import {useNavigate} from "react-router-dom";
import arrow from "../img/icons/arrow.svg";
import '../styles/backBtn.css'

const BackBtn = ({route}) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(route)
    }

    return (
        <button
            className="back-btn"
            onClick={clickHandler}
        >
            <img className="back-btn-icon" src={arrow} alt=""/>
            <div className="back-btn-text">Назад</div>
        </button>
    );
};

export default BackBtn;