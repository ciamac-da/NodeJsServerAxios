const axios = require('axios')
const url = require('url')
const api_base_url = 'https://swapi.co/api/';
const api_endpiont = 'people';
const api_key = '123';

const request_url = url.resolve(api_base_url, api_endpiont) + `?key=${api_key}`



async function getStarwarsPeople(){
     const people =  await axios.get('request_url')
     const data = await Response.data
console.log(data.result[0].name)

}
getStarwarsPeople()