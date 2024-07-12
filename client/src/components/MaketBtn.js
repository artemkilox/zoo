import React from 'react';
import '../styles/maketBtn.css'

const MaketBtn = ({active, text, action, index}) => {

    const clickHandler = () => {
        action(index)
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