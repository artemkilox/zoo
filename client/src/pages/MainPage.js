import React from 'react';
import InstructionBtn from "../components/InstructionBtn";
import MainMenuBtn from "../components/MainMenuBtn";
import Logo from "../components/Logo";
import {ABOUT_ROUTE, MAP_ROUTE} from "../utils/consts";
import '../styles/mainPage.css'

const MainPage = () => {
    return (
        <div className="main-page-container">
            <header>
                <div className="logo-name">
                    <Logo
                        height={156}
                        width={156}
                    />
                    <div className="name-text">
                        Арктический парк <br/> природы нохо
                    </div>
                </div>
                <InstructionBtn/>
            </header>
            <main className="btn-wrapper">
                <MainMenuBtn
                    text="О проекте"
                    active={false}
                    route={ABOUT_ROUTE}
                />
                <MainMenuBtn
                    text="Интерактивный макет"
                    active={true}
                    route={MAP_ROUTE}
                />
            </main>
        </div>
    );
};

export default MainPage;