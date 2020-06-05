const express = require('express');
const app = express();
const https = require('https');

app.get('/', (req, res) => {
    https.get('https://insult.mattbas.org/api/insult', resp => {
        resp.on('data', chunk => {
            res.send(`
                <http>
                    <head>
                        <title> Oh Snap </title>
                    </head>

                    <body>
                        <h1>OH SNAP</h1>
                        <p style="font-size:30px; color: red;">
                            ${chunk.toString()}!
                        </p>
                    </body>
                </http>
            `);
        });
    });
});

app.listen(process.env.PORT || 3000);