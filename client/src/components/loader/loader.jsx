import React from "react";
import style from './loader.module.css'

const Loader =(props)=>{

return (
    <div className={style.content}>
        <div className={style.wrapper}>

        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>

        </div>
    </div>
)

}

export default Loader