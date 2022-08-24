import React, {ChangeEvent, useState} from 'react'
import {inspect} from "util";
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.container}>
            <img className={s.ava}
                 src={props.avatar}
                 alt={"img"}/>
            <div className={s.messageBox}>
                <p className={s.name}>{props.name}</p>
                <p className={s.message}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
            <div className={s.triangle}></div>
        </div>
    )
}

export default Message
