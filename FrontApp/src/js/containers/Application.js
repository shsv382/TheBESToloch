import React from "react";
import { Link } from "react-router-dom";

import './Application.scss'

export const Application = () => {
    return (
        <div>
            <h1>Стартовая страница.</h1>
            <h3>Здесь делать кнопки</h3>
            <Link to='/posts' className="startpage-button">Посты</Link>
            <Link to='/profiles' className="startpage-button">Профили</Link>
        </div>
    );
}