import React, { useRef, useState } from 'react'
import './home.css'

const data = []

export default function Home() {
  let local = JSON.parse(localStorage.getItem('data'))
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [book, setBook] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')
  const [img, setImg] = useState("")
  const input = useRef(null)
  const handleClick = () => {
    if (name === '' || text === '' || url === '' || img === "") {
      alert('ma`lumotlarni to`ldiring')
    } else {
      data.push({ name: name, text: text, url: url, img: URL.createObjectURL(img) })
      setName('')
      setText('')
      setUrl('')
      setImg(' ')
      setOpen(false)
    }
  }
  const Modal = (item) => {
    setBook(item)
    setModal(!modal)
  }
  return (
    <div className='home'>
      <nav>
        <h2>Projects</h2>
        <ul>
          <li><span>name:</span>{local?.name}</li>
          <li><span>password:</span>{local?.password}</li>
        </ul>
      </nav>


    </div>
  )
}
