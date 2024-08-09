const axios = require('axios');
const { BASE_URL } = require('../constants/api.routes');

const axiosClient = axios.create({
  baseURL: BASE_URL
});

module.exports = {axiosClient}