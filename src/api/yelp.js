import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _lcv3kmvlYZdqOYC2E9pkFE-7sO8RZ0eUAe3SL2tac600cbB77sw9dVW-DJhIgUntwvm-TpWf_d7e-h7R3XRAN7asPl3ltD6GkGI2C0dBRALlYG1znwZqWo7mmAhYXYx",
  },
})
