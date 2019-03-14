const localSettings = require('./local.js');

class imgurAPI {
    constructor() {
        this.https = require('https');
        this.options = {
            'method': 'GET',
            'hostname': 'api.imgur.com',
            'path': '/3/account/{{username}}',
            'headers': {
                'Authorization': localSettings.imgurCID
            }
        };

        this.hcall = null;
    }

    static random() { 
        this.hcall = this.https.request(options, (res) => {
            var chunks = [];

            res.on("data", (chunk) => {
                chunks.push(chunk);
            });

            res.on("end", (chunk) => {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", (error) => {
                console.error(error);
            });
        });

        this.hcall.end();
    }
}