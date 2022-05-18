import './Notificacion.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity }) => {

const notificacionStyles = {
    position: 'absolute',
    top: 80,
    right: 10,
    width: '280px',
    height: 'auto',
    padding: '12px',
    }

    if(message === '') {
        return null
    }

    const config = true ?
    {
        style: notificacionStyles,
        className: `${severity === 'success' ? 'Success' : 'Error'}`
    } : {}

    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificacionContext = createContext()

export const NotificacionProvider = ({ children }) => {

    const [ message, setMessage ] = useState('')
    const [ severity, setSeverity ] = useState('success')

    const setNotificacion = (sev, msg) =>  {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 3500)
    }

    return (
        <NotificacionContext.Provider value={{ setNotificacion }}>
            <Notification message={message} severity={severity}/>
                { children }
        </NotificacionContext.Provider>
    )
}

export const useNotificacion = () => {
    return useContext(NotificacionContext)
}