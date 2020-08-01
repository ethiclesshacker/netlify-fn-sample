const axios = require('axios')
const cheerio = require('cheerio')

LINK = 'https://www.facebook.com/people/Nafisa-Khan/100051429259431'

exports.handler = async (event, context, callback) => {
    axios.get(LINK)
        .then((response) => {
            const $ = cheerio.load(response.data);
            const link = $("meta[property='og:image']").attr("content");
            console.log($("meta[property='og:image']").attr("content"));
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ link })
            })
        })
}