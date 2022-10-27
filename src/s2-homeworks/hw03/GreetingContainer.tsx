import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

type SetStateType<T = string> = Dispatch<SetStateAction<T>>

export const pureAddUser = (name: string,
                            setError: SetStateType,
                            setName: SetStateType,
                            addUserCallback: (name: string) => void,
) => {
    if (name.length < 2) {
        setError("Ошибка! Введите имя!")
    } else {
        addUserCallback(name)
        setName("")
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError:(error:string)=>void) => {
    // если имя пустое - показать ошибку
    if(name.length < 2) {
        setError("Error! enter valid name !")
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    if(e.key === "Enter") {
        addUser()
    }

    // если нажата кнопка Enter - добавить

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix

    const lastUser= users.slice(-1)
    const lastUserName  = lastUser[0]?.name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
