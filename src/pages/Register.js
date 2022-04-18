import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'


const Register = () => {
let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })

  setFormValues({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  navigate('/login')

  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register

// import React, { useState, useEffect }  from 'react'

// const Register = () => {

//     const [name, setName] = useState('')
//     useEffect(() => {console.log(name)}, [name])

//     const [email, setEmail] = useState('')
//     useEffect(() => {console.log(email)}, [email])

//     const [password, setPassword] = useState('')
//     useEffect(() => {console.log(password)}, [password])

//     return (
//         <div>
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" value={name} onChange={e => setName(e.target.value)} />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
//                 </label>
//             </form>
//             <button>Submit</button>
//         </div>
//     )

// }

// export default Register