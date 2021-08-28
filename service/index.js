import axios from 'axios'

const pathNameCat = 'https://api.thecatapi.com'
const pathNameDog = 'https://api.thedogapi.com'
const localhost = 'http://localhost:4020/api'
export const Service = {
  GetCatData: () => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: pathNameCat + '/v1/breeds',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'DEMO-API-KEY',
        },
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  GetDogData: () => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: pathNameDog + `/v1/breeds`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'DEMO-API-KEY',
        },
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  Login: (username, password) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: localhost + `/login`,
        data:{
          username: username,
          password: password,
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
       
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
