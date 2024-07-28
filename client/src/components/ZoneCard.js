import React from 'react';
import '../styles/zone-card.css'
import gradBorder from '../img/icons/EllipseGrad.svg'

const ZoneCard = ({id, name}) => {
    return (
        <div className="zone-card">
            <div className="zone-card-number">
                <img className="number-img" src={gradBorder} alt=""/>
                {id}
            </div>
            <div className="zone-card-name">
                {name}
            </div>
        </div>
    );
};

export default ZoneCard;