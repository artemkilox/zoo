import React, {useState} from 'react';
import InstructionBtn from "./InstructionBtn";
import mapImg from '../img/icons/zooMap.svg'
import line from '../img/icons/line.svg'
import '../styles/mapComponent.css'
import {data, sections} from "../data/data";
import {useNavigate} from "react-router-dom";

const MapComponent = () => {
    const navigate = useNavigate()
    const animals = data
    const sects = sections
    const [scale, setScale] = useState(0)

    const upScale = () => {
        if(scale < 2){
            setScale(scale + 1)
        }
    }

    const downScale = () => {
        if(scale > 0){
            setScale(scale - 1)
        }
    }

    return (
        <section className="map-section">
            <div className="heading">
                <InstructionBtn/>
            </div>
            <div className="map-section">
                <div
                    className="map-item"
                    style={scale === 0 ? {border: 'none'} : scale === 1 ? {transform: 'scale(1.2)'} : scale === 2 ? {transform: 'scale(1.4)'} : {border: 'none'}}
                >
                    <div className="map-point">
                        <img src={mapImg} alt=""/>
                    </div>
                    {
                        animals.map(animal =>
                            animal.icon === 0 ? <div key={animal.id}></div> :
                                <div
                                    style={{marginTop: animal.marginTop + 'px', marginLeft: animal.marginLeft + "px"}}
                                    className="map-point"
                                    onClick={() => navigate(animal.link)}
                                    key={animal.id}
                                >
                                    <img
                                        src={animal.icon}
                                        style={{width: animal.iconSide + 'px', height: animal.iconSide + "px"}}
                                        alt=""/>
                                </div>
                        )
                    }
                    {
                        sects.map(sect =>
                            <img
                                style={{marginTop: sect.marginTop + 'px', marginLeft: sect.marginLeft + "px", width: sect.iconSide + 'px'}}
                                className="map-section-point"
                                src={sect.icon}
                                alt=""
                                onClick={() => navigate(sect.link)}
                                key={sect.id}
                            />
                        )
                    }
                </div>
            </div>
            <div className="btns">
                <button
                    className="plus-btn"
                    onClick={upScale}
                >
                    +
                </button>
                <button
                    className="minus-btn"
                    onClick={downScale}
                >
                    <img src={line} alt=""/>
                </button>
            </div>
        </section>
    );
};

export default MapComponent;