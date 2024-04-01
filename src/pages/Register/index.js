import * as r from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setName] = r.useState('')
    const [password, setPassword] = r.useState('')

    const navigate = useNavigate()

    const handleCLick = () => {
        if (name === '' || password === '') {
            alert('ma`lumotingizni to`ldiring')
        } else {
            let box = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
            box.unshift({ name: name, password: password });
            localStorage.setItem("data", JSON.stringify(box))
            setName(' ')
            setPassword(' ')
            navigate('/')
        }
    }
    return (
        <div className='Register'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Register</h1>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleCLick}>Register</button>
            </form>
        </div>
    )
}
