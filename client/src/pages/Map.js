import React, {useState} from 'react';
import Header from "../components/Header";
import BackBtn from "../components/BackBtn";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import MaketBtn from "../components/MaketBtn";
import '../styles/mapPage.css'
import MapComponent from "../components/MapComponent";

const Map = () => {
    const [radio, setRadio] = useState([1, 0, 0])

    const radioSelect = (index) => {
        let arr = [0, 0, 0]
        for(let i = 0; i < arr.length; i++){
            if(i === index){
                arr[i] = 1
            } else {
                arr[i] = 0
            }
        }
        setRadio(arr)
    }

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
                        active={radio[0] === 1}
                        text="Динамическая подсветка"
                        action={radioSelect}
                        index={0}
                    />
                    <MaketBtn
                        active={radio[1] === 1}
                        text="Уличная подсветка"
                        action={radioSelect}
                        index={1}
                    />
                    <MaketBtn
                        active={radio[2] === 1}
                        text="Подсветка всех зон"
                        action={radioSelect}
                        index={2}
                    />
                </div>
            </section>
            <MapComponent/>
        </div>
    );
};

export default Map;