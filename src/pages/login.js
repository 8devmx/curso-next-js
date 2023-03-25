import { useState } from 'react'
const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  async function handleSubmit (e) {
    e.preventDefault()
    setErrors([])
    if (user === '') {
      setErrors(errors => [...errors, 'Agrega tu nombre de usuario'])
      return false
    }
    if (password === '') {
      setErrors(errors => [...errors, 'Agrega tu Password'])
      return false
    }
    const data = {
      email: user,
      password
    }
    const url = 'https://ecommerce-unid.000webhostapp.com/auth'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      setErrors(errors => [...errors, 'No se pudo conectar con el servidor'])
      return false
    }
    const json = await response.json()
    console.log(json)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Escribe tu correo' value={user} onChange={(user) => setUser(user.target.value)} />
        <input type='password' placeholder='Escribe tu contraseña' value={password} onChange={(pass) => setPassword(pass.target.value)} />
        <button>Iniciar sesión</button>
      </form>
      Usuario: {user} <br />
      Password: {password}
      <p>{errors}</p>
    </div>
  )
}

export default Login
