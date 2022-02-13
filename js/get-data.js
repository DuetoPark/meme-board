const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

let fileData = [];

function getFileData(url, reference) {
  const object = {
    title: url.replace('.mp3', ''),
    url: url,
    reference: reference,
  };

  return object;
}

const server = http.createServer((req, response) => {
  response.statusCode = 200;

  fs.readdir('./assets/audio', 'utf8', (err, data) => {
    data.forEach((reference) => {
      const path = `./assets/audio/${reference}`;

      fs.readdir(path, 'utf-8', (err, data) => {
        console.log(reference, data);
        data.forEach((url) => {
          fileData.push(getFileData(url, reference));
        });
      });

      fs.writeFile('./js/meme.json', JSON.stringify(fileData), function (err) {
        if (err === null) {
          console.log('success');
        } else {
          console.log('fail');
        }
      });
    });
  });

  response.end('success');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
