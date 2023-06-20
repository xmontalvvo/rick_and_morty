import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

export default function Login() {
  return (
    <div className='login'>
      <h1>Bienvenidos!!</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  )
}
