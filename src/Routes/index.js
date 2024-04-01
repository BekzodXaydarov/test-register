import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Register from '../pages/Register'
import Home from '../pages/home/index'

export default function Router_P() {
    const navigate = useNavigate()
    const location = useLocation()
    let local = JSON.parse(localStorage.getItem('data'))
    useEffect(() => {
        if (!local) {
            navigate('/register')
        } else {
            navigate('/')
        }
    }, [local, location])
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
