import Axios from 'axios'

// const url = process.env.URL || 'http://localhost:3001'
const axios = Axios.create({
    baseURL: 'http://localhost:3030'
})

export default axios