import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair:AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const prioriteClass = s.iten + '  ' + s[props.affair.priority]
    return (
        <div className={s.affair}>
            <div className={s.iten}>{props.affair.name}</div>
            <div className={prioriteClass}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.iten + '' + s.button}>X</button>
        </div>
    )
}

export default Affair
