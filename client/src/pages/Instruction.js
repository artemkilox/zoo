import React from 'react';
import Header from "../components/Header";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import BackBtn from "../components/BackBtn";
import '../styles/instruction.css'

const Instruction = () => {
    return (
        <div className="instruction-wrapper">
            <Header/>
            <BackBtn
                route={MAIN_PAGE_ROUTE}
            />
            <div className="instruction-caption">
                Инструкция по пользованию моноблоком
                для интерактивного макета парка
            </div>
            <div className="cards-wrapper">
                <div className="instruction-card">
                    <div className="circle"></div>
                    <div className="card-caption">
                        Выбор зоны на карте:
                    </div>
                    <div className="card-text">
                        <ol className="list-wrapper">
                            <li className="list-item">Найдите карту парка, расположенную справа на экране моноблока.</li>
                            <div className="sep-line"></div>
                            <li className="list-item">Выберите нужную вам зону, нажав на соответствующую область карты.</li>
                        </ol>
                    </div>
                </div>
                <div className="instruction-card">
                    <div className="circle"></div>
                    <div className="card-caption">
                        Просмотр информации о животных:
                    </div>
                    <div className="card-text">
                        <ol className="list-wrapper">
                            <li className="list-item">Нажмите на иконку с изображением животного, находящуюся в выбранной вами зоне на карте.</li>
                            <div className="sep-line"></div>
                            <li className="list-item">После нажатия вы перейдете на страницу, посвященную вольеру этого животного.</li>
                            <div className="sep-line"></div>
                            <li className="list-item">На физическом макете парка выбранная зона подсветится.</li>
                        </ol>
                    </div>
                </div>
                <div className="instruction-card">
                    <div className="circle"></div>
                    <div className="card-caption">
                        Настройка подсветки макета:
                    </div>
                    <div className="card-text">
                        <div className="list-caption">У вас есть возможность выбрать один из трех вариантов подсветки:</div>
                        <ul className="list-wrapper">
                            <li className="list-item">Динамическая подсветка. Подсветка будет меняться, показывая различные зоны парка в автоматическом режиме.</li>
                            <li className="list-item">Подсветка конкретной зоны. Вы можете выбрать и подсветить определенную зону на макете.</li>
                            <li className="list-item">Подсветка всех зон сразу.  Все зоны на макете будут подсвечены одновременно.</li>
                        </ul>
                        <div className="sep-line"></div>
                        <div className="list-caption">Для выбора одного из вариантов подсветки используйте соответствующие кнопки на интерфейсе моноблока.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;