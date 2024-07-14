import React, {useEffect, useRef} from 'react';
import {data} from "../data/data";
import Header from "../components/Header";
import {MAIN_PAGE_ROUTE, MAP_ROUTE, SECTION_ROUTE} from "../utils/consts";
import BackBtn from "../components/BackBtn";
import SoundBtn from "../components/SoundBtn";
import '../styles/animalPage.css'
import TextItem from "../components/TextItem";
import {$host} from "../http";

const AnimalPage = () => {

    const location = window.location.pathname
    const animalId = location.split('/')[2]
    const animal = data[Number(animalId) - 1]
    const soundRef = useRef()

    useEffect(() => {
        $host.post('/', {animal: animal.name})
    }, [])

    return (
        <div className="animal-page-wrapper">
            <Header/>
            <BackBtn
                route={animal.heading === -1 ? MAP_ROUTE : SECTION_ROUTE + "/" + animal.heading}
            />
            <div className="animal-card">
                <div className="card-header">
                    <div className="description">
                        <div className="animal-name">
                            {animal.name}
                        </div>
                        <div className="caption">
                            {animal.caption}
                        </div>
                    </div>
                    {
                        animal.speaker ?
                            <SoundBtn
                                audio={animal.speaker}
                            /> : <div></div>
                    }
                </div>
                <div className="card-main">
                    <img className="animal-img" src={animal.img} alt=""/>
                    <div className="information">
                        <div className="text bold">
                            {animal.boldText}
                        </div>
                        {animal.text.map(textItem =>
                            <div
                                className="text"
                                key={textItem.split(' ')[0]}
                            >
                                <TextItem
                                    text={textItem}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalPage;