
import { Button } from '@mui/material'
import LoggedOut from './LoggedOut'

const LogIn = (props) => {
    const handleLogout = x => {
        props.setIsAuthenticated(false)
    }
    const handleSuccessAuth = x => {
        props.setIsAuthenticated(true)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        handleSuccessAuth()
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })

    }


        if(!props.isAuthenticated)
        {
            return (
                <LoggedOut
                isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} 
                />
                   )
        }
        else {
            // PUT PERSONAL STATS HERE 
            return (
                <div>
                    HELLO
                    
                </div>
            )
            console.log("we're here")
        }
    
}

export default LogIn
