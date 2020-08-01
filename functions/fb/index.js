const axios = require('axios')
const cheerio = require('cheerio')

LINK = 'https://www.facebook.com/people/Nafisa-Khan/100051429259431'

axios.get(LINK)
    .then((response) => {
        const $ = cheerio.load(response.data);
        console.log($("meta[property='og:image']").attr("content"));
    })