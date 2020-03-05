const request = require('request-promise');
const cheerio = require('cheerio');
const Crawler = require('crawler');

const crawlerSena = new Crawler({
    rateLimit: 5000,
    callback: function(error,res,done){
        if(error){
            console.log(error)
        }else{
            let $ = res.$;
            let nome = $('#ulDezenas').text()
            console.log(nome)
        }
    }
})

crawlerSena.queue('https://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena');