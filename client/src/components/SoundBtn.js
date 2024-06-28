import React from 'react';
import soundIcon from '../img/icons/Sound.svg'
import '../styles/soundBtn.css'

const SoundBtn = () => {
    return (
        <button className="sound-btn">
            <img src={soundIcon} alt=""/>
        </button>
    );
};

export default SoundBtn;