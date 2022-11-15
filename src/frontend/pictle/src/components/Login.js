import { Box } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Logging() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedin, setIsLoggedin] = useState(false)

    const login = (e) => {
        e.preventDefault()
        console.log(name, email, password)
        const userData = {
            name,
            email,
            password,
        }
        localStorage.setItem('token-info', JSON.stringify(userData))
        setIsLoggedin(true)
        setName('')
        setEmail('')
        setPassword('')
    }

    const logout = () => {
        localStorage.removeItem('token-info')
        setIsLoggedin(false)
    }

    return (
        <>
            <Box
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {!isLoggedin ? (
                    <>
                        <button component={Link} to="http://localhost:8000/auth/google">
                        Login
                        </button>
                    </>
                ) : (
                    <>
                        <button onClickCapture={logout}>logout user</button>
                    </>
                )}
            </Box>
        </>
    )
}
