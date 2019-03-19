import axios from 'axios'

const NO_ERR = 0

export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === NO_ERR) {
        return data
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
