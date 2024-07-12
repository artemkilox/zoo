import React, {useEffect, useRef, useState} from 'react';
import soundIcon from '../img/icons/Sound.svg'
import stopIcon from '../img/icons/stopIcon.svg'
import '../styles/soundBtn.css'

const SoundBtn = ({audio}) => {
    const [play, setPlay] = useState(0)
    const myRef = useRef();

    // Если надо запускать звук при открытии
    // useEffect(() => {
    //     playAudio()
    // } ,[])

    const playAudio = () => {
        myRef.current.play()
        setPlay(1)
    }

    const stopAudio = () => {
        myRef.current.pause();
        myRef.current.currentTime = 0 // Вот это комментим, если надо чтобы продолжалось а не обнулялось
        setPlay(0)
    }

    return (
        <div>
            <audio
                ref={myRef}
                src={audio}
            />
            {play === 0 ?
                    <button
                        className="sound-btn"
                        onClick={playAudio}
                    >
                        <img src={soundIcon} alt=""/>
                    </button>
                    :
                    <button
                        className="sound-btn"
                        onClick={stopAudio}
                    >
                        <img src={stopIcon} alt=""/>
                    </button>
            }
        </div>
    );
};

export default SoundBtn;