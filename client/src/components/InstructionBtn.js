import React from 'react';
import instructionIcon from '../img/icons/instructionIcon.svg'
import '../styles/instructionBtn.css'
import {useNavigate} from 'react-router-dom'
import {INSTRUCTION_ROUTE} from "../utils/consts";

const InstructionBtn = () => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(INSTRUCTION_ROUTE)
    }

    return (
        <button
            className="instruction-btn"
            onClick={clickHandler}
        >
            <img className="instruction-btn-icon" src={instructionIcon} alt=""/>
            <div className="instruction-btn-text">Инструкция <br/> по управлению</div>
        </button>
    );
};

export default InstructionBtn;