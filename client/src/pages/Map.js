import React from 'react';
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import MaketBtn from "../components/MaketBtn";
import '../styles/mapPage.css'
import MapComponent from "../components/MapComponent";

const Map = () => {
    return (
        <div className="map-container">
            <section className="sidebar">
                <Header/>
                <BackBtn
                    route={MAIN_PAGE_ROUTE}
                />
                <div className="heading">
                    Интерактивный макет
                </div>
                <div className="caption">
                    Чтобы узнать подробнее о каждой зоне парка, нажмите на соответствующую иконку на интерактивном плане.
                </div>
                <div className="btn-wrapper">
                    <MaketBtn
                        active={true}
                        text="Динамическая подсветка"
                    />
                    <MaketBtn
                        active={false}
                        text="Уличная подсветка"
                    />
                    <MaketBtn
                        active={false}
                        text="Подсветка всех зон"
                    />
                </div>
            </section>
            <MapComponent/>
        </div>
    );
};

export default Map;