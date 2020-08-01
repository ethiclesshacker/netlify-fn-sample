const axios = require('axios')
const cheerio = require('cheerio')

LINK = 'https://www.facebook.com/people/Nafisa-Khan/100051429259431'

exports.handler = async (event, context, callback) => {
    const response = await axios.get(LINK)
    const $ = cheerio.load(response.data);

    console.log($("meta[property='og:image']").attr("content"));
    const link = $("meta[property='og:image']").attr("content");
    const data = { link };


    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
    });
}