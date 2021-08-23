const express = require('express');

const app = express();
const https = require('https');
require('dotenv').config();

const port = process.env.EXPRESS_PORT || 3001;

app.set('port', port);

app.use('/', (req, res) => {
  const options = {
    host: 'api.notion.com',
    port: 443,
    path: '/v1/databases',
    method: 'GET',
    headers: {
      Authorization:
        'Bearer secret_uzsit5xY56mYnpj2fMzKqN9A63a7yBuzkjFs0qVkRN7',
      'Notion-Version': '2021-08-16',
    },
  };

  const httpssreq = https.request(options, (response) => {
    let data = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk.toString();
    });
    response.on('end', () => {
      const body = JSON.parse(data);
      res.send(body);
    });
  });
  httpssreq.end();
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
