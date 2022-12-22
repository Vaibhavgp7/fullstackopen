import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const createperson = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const removeperson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
export default {getAll,createperson,removeperson}