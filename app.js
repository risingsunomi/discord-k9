const Discord = require('discord.js');
const getJSON = require('get-json');
const client = new Discord.Client();
const localSettings = require('./local.js');
// const moment = require('moment');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!r34-random') {
        // get random r34 image

        let url = 'http://r34-json-api.herokuapp.com/posts?limit=100&tags=female+adult';

        getJSON(url, (err, resp) => {
            if(err) {
                console.log(err);
                return;
            }
            
            if(resp.length > 0) {
                let randI = Math.floor(Math.random() * 100);
                if (randI > 0) { randI = randI - 1; }
                else {randI = 0;}
                msg.reply(resp[randI]['file_url']);
            } else {
                msg.reply('Sorry, no r34 today weird asshole');
            }
            return;
        });
    } else if (/\!r34 ([a-zA-Z0-9\ \+]+)/.test(msg.content)){
        let query = msg.content.match(/\!r34 ([a-zA-Z0-9\ \+]+)/)[1].replace(" ", "_");
        let url = 'http://r34-json-api.herokuapp.com/posts?limit=100&tags='+query;
        console.log(url);

        getJSON(url, (err, resp) => {
            // console.log(err, resp);
            if(err) {
                console.log(err);
                return;
            }
            
            if(resp.length > 0) {
                let randI = Math.floor(Math.random() * resp.length);
                msg.reply(resp[randI]['file_url']);
            } else {
                msg.reply('Sorry, no \"'+query+'\" you weird asshole');
            }

            return;
        });
    } else if (msg.content === '!pron') {
        console.log('found !pron - making request');
        const request = require('request');
        const cheerio = require('cheerio');

        let url = 'https://www.pornhub.com/albums/female-straight';
        console.log(url);
        request.get(url).on('response', (resp) => {
            console.log(resp);
        });
        // }), (err, resp, body) => {
        //     console.log(err, resp, body);
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
            
        //     let $ = cheerio.load(body);
            
        //     albumList = $('div.photoAlbumListBlock');
        //     $(albumList).each((i, img) => {
        //         console.log($(img));
        //     });
        // })
    } else if (msg.content === '!meme-imgflip') {
        let url = 'https://api.imgflip.com/get_memes';
        getJSON(url, (err, resp) => {
            // console.log(err, resp);
            if(err) {
                console.log(err);
                return;
            }
            
            let randI = Math.floor(Math.random() * resp["data"]["memes"].length);
            msg.reply(resp["data"]["memes"][randI]['url']);

            return;
        });
    } else if (msg.content === '!4chan-pol') {
        let url = 'https://a.4cdn.org/pol/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/pol/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
                        
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/pol/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-x') {
        let url = 'https://a.4cdn.org/x/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/x/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
                        
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/x/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-wg') {
        let url = 'https://a.4cdn.org/wg/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/wg/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
                        
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/wg/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-s') {
        let url = 'https://a.4cdn.org/s/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }

            let randj = Math.floor(Math.random() * resp.length);
            let randI = Math.floor(Math.random() * resp[0].threads.length);
            
            if(!('sticky' in resp[randj].threads[randI])){
                // console.log(resp[0].threads[i]);
                try {
                    msg.reply(
                        'http://i.4cdn.org/s/'+
                        resp[randj].threads[randI].tim+
                        resp[randj].threads[randI].ext
                    );
                } catch(err) {
                    console.log(err);
                    msg.reply('Sorry no sexy pics...');
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-v') {
        let url = 'https://a.4cdn.org/v/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/v/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );

                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/v/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-vg') {
        let url = 'https://a.4cdn.org/vg/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/vg/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
    
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/vg/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                   
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-k') {
        let url = 'https://a.4cdn.org/k/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/k/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
    
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/k/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                   
                }
            }
            
            return;
        });
    } else if (msg.content === '!4chan-ck') {
        let url = 'https://a.4cdn.org/ck/catalog.json';
        getJSON(url, (err, resp) => {
            // console.log(err, resp[0].threads.length);
            if(err) {
                console.log(err);
                return;
            }
            
            for(let i = 0; i <= resp[0].threads.length; i++) {
                if(!('sticky' in resp[0].threads[i])){
                    // console.log(resp[0].threads[i]);
                    try {
                        msg.reply(resp[0].threads[i].sub.substring(0, 1991)+'...');
                        msg.reply(
                            'http://i.4cdn.org/ck/'+
                            resp[0].threads[i].tim+
                            resp[0].threads[i].ext
                        );
    
                        if (resp[0].threads[i].com !== '') {
                            msg.reply(resp[0].threads[i].com.substring(0, 1991)+'...');
                        }
                        
                        msg.reply(
                            'http://boards.4chan.org/ck/thread/'+
                            resp[0].threads[i].no
                        );
                        break;
                    } catch(err) {
                        console.log(err);
                        continue;
                    }
                   
                }
            }
            
            return;
        });
    }
});

client.login(localSettings.botid).catch((err) => {
    console.log(err);
});