import {
    MAIN_PAGE_ROUTE,
    ABOUT_ROUTE,
    ANIMAL_ROUTE,
    INSTRUCTION_ROUTE,
    MAP_ROUTE,
    SECTION_ROUTE,
} from "../utils/consts";
import About from "../pages/About";
import MainPage from "../pages/MainPage";
import AnimalPage from "../pages/AnimalPage";
import Instruction from "../pages/Instruction";
import Map from "../pages/Map";
import SectionPage from "../pages/SectionPage";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: ANIMAL_ROUTE,
        Component: AnimalPage
    },
    {
        path: INSTRUCTION_ROUTE,
        Component: Instruction
    },
    {
        path: MAP_ROUTE,
        Component: Map
    },
    {
        path: SECTION_ROUTE,
        Component: SectionPage
    },
]