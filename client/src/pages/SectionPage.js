import React from 'react';
import {data, sections} from "../data/data";
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import {ANIMAL_ROUTE, MAIN_PAGE_ROUTE, MAP_ROUTE} from "../utils/consts";
import arrow from '../img/icons/forwardArrow.svg'
import '../styles/sectionPage.css'
import {useNavigate} from "react-router-dom";

const SectionPage = () => {

    const navigate = useNavigate()
    const location = window.location.pathname
    const sectionId = location.split('/')[2]

    // const animal = data[Number(sectionId)]

    // const sectionId = 0
    const section = sections[sectionId]
    const animals = data.filter(item => item.heading === section.id)

    // console.log(animals)

    return (
        <div className="section-page">
            <Header/>
            <div className="section-header">
                <BackBtn
                    route={MAP_ROUTE}
                />
                <div className="section-name">
                    {section.name}
                </div>
                <div className="empty"></div>
            </div>
            <div className="animals-wrapper">
                {animals.map(animal =>
                    <div
                        onClick={() => navigate(ANIMAL_ROUTE + "/" + animal.id)}
                        className="animal-card">
                        <img className="card-img" src={animal.img} alt=""/>
                        <div
                            className="bottom-bar"
                        >
                            <div className="animal-name">
                                {animal.name}
                            </div>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectionPage;