import Axios from 'axios'

let apiUrl = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/duemila-ruote-backend.git' : 'http://localhost:3001'

const Client = Axios.create({ baseURL: apiUrl })
console.log(apiUrl)


Client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
          config.headers['authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

export default Client