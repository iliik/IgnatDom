import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import style from '../../HW11.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                height: '5px',
                color: '#00CC22',


            }} className={style.slider}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
