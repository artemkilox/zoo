import React from 'react';
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import '../styles/zonePage.css'
import ZoneCard from "../components/ZoneCard";
import {list} from "../data/data";

const ZonePage = () => {
    return (
        <div className="zone-page">
            <Header/>
            <BackBtn
                route={MAIN_PAGE_ROUTE}
            />
            <div className="zones-description">
                <div className="zones-title">
                    Зоны арктического парка
                </div>
                <div className="zones-caption">
                    ВСЕГО: 20 ЗОН
                </div>
            </div>
            <div className="zones-container">
                {
                    list.map(animal =>
                        <ZoneCard
                            key={animal.id}
                            id={animal.id}
                            name={animal.name}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ZonePage;