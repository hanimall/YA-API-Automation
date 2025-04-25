const axios = require('axios');
require('dotenv').config();

const client = axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	headers: {
		'x-api-key': process.env.CAT_API_KEY
	}
});

module.exports = client;
