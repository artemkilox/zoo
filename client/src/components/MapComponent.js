import React from 'react';
import InstructionBtn from "./InstructionBtn";
import mapImg from '../img/icons/zooMap.svg'
import line from '../img/icons/line.svg'
import '../styles/mapComponent.css'
import {data, sections} from "../data/data";
import {useNavigate} from "react-router-dom";
import Icon from "./Icon";

const MapComponent = () => {
    const navigate = useNavigate()
    const animals = data
    const sects = sections

    return (
        <section className="map-section">
            <div className="heading">
                <InstructionBtn/>
            </div>
            <div className="map-section">
                <div className="map-item">
                    <img className="map-point" src={mapImg} alt=""/>
                    {
                        animals.map(animal =>
                            <div
                                className="map-point"
                                onClick={() => navigate(animal.link)}
                                key={animal.id}
                            >
                                {animal.icon === 0 ? <div></div> :
                                    <Icon
                                        svg={animal.icon}
                                    />
                                }

                            </div>
                            // <img
                            //     className="map-point"
                            //     src={animal.icon}
                            //     alt=""
                            //     onClick={() => navigate(animal.link)}
                            // />
                        )
                    }
                    {/*{*/}
                    {/*    sects.map(sect =>*/}
                    {/*        <img*/}
                    {/*            className="map-section-point"*/}
                    {/*            src={sect.icon}*/}
                    {/*            alt=""*/}
                    {/*            onClick={() => navigate(sect.link)}*/}
                    {/*            key={sect.id}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </div>
            <div className="btns">
                <button className="plus-btn">+</button>
                <button className="minus-btn">
                    <img src={line} alt=""/>
                </button>
            </div>
        </section>
    );
};

export default MapComponent;