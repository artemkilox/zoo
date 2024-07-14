import React from 'react';
import '../styles/maketBtn.css'
import {$host} from "../http";

const MaketBtn = ({active, text, action, index}) => {

    const clickHandler = () => {
        action(index)
        $host.post('/', {animal: text})
    }

    return (
        <button
            className={active ? "maket-btn active-maket-btn" : "maket-btn"}
            onClick={clickHandler}
        >
            <div className="text">{text}</div>
        </button>
    );
};

export default MaketBtn;