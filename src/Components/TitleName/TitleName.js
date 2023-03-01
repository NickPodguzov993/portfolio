import React from 'react';
import style from "../../Components/TitleName/titleName.module.scss";

const TitleName = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default TitleName;