import axios from 'axios'

const appService = {
    getProfile () {
        return new Promise((resolve) => {
          axios.get('/services/profile.php')
            .then(response => {
              resolve(response.data)
            })
        })
      },
      login (credentials) {
        return new Promise((resolve, reject) => {
          axios.post('/services/auth.php', credentials)
            .then(response => {
              resolve(response.data)
            }).catch(response => {
              reject(response.status)
            })
        })
      }
}

export default appService