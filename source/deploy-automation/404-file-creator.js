const fs = require('fs');

const folderPath = '../';

function create404HtmlFile() {
  const [sourceFilePath, destinationFilePath, callback] = [
    folderPath + 'index.html',
    folderPath + '404.html',
    err => {
      if (err) console.error('Error copying file:', err);
      else console.log('File copied successfully.');
    }
  ];

  const source = fs.createReadStream(sourceFilePath);
  const destination = fs.createWriteStream(destinationFilePath);

  source.pipe(destination);
  source.on('error', err => callback(err));

  destination.on('error', err => callback(err));
  destination.on('finish', () => callback(null));
}

create404HtmlFile();
