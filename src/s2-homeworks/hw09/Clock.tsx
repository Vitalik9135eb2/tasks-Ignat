import React, {MouseEvent, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const [disabled, setDisabled] = useState<boolean>(false)
    const start = () => {
        stop()
        setDisabled(!disabled)

        const id: number = window.setInterval(()=> {
            setDate(new Date(restoreState('hw9-date', Date.now())))
        }, 1000)

        setTimerId(id)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setDisabled(!disabled)
        clearInterval(timerId)
    }



    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => { // пишут студенты // показать дату если наведена мышка
        e.target && setShow(true)
    }
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => { // пишут студенты // спрятать дату если мышка не наведена
        e.target && setShow(false)
    }
//my code start
    const formatTime = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    const formatDay = new Intl.DateTimeFormat("en", {
        weekday: "long"
    });
    const formatMonth = new Intl.DateTimeFormat("en", {
        month: "long"
    });
    const formatDate = new Intl.DateTimeFormat("ru");
//my code finish

    const stringTime = formatTime.format(date) || <br/>
    const stringDate = formatDate.format(date) || <br/>

    const stringDay = formatDay.format(date) || <br/>
    const stringMonth = formatMonth.format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more} >
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock


