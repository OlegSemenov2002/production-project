import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {Counter} from "./components/Counter"
import './styles/index.scss'
import AboutPageAsync from "./pages/AboutPage/AboutPage.Async";
import MainPageAsync from "./pages/MainPage/MainPage.Async";
import {Theme, ThemeContext, ThemeContextProps} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames(`app`,{}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Загрузка...</div>}>

            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />} />
                <Route path={'/'} element={<MainPageAsync/>} />

            </Routes>
            </Suspense>
        </div>
    );
};

export default App;