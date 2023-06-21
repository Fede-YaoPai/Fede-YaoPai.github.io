const fs = require('fs');

const folderPath = '../';
const excludeFiles = [
  '.gitignore'
];

function cleanDeployFolder(folderPath, excludeFiles) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder: ${err}`);
      return;
    }

    files.forEach(file => {
      const fileName = file.toString();
      const filePath = folderPath + fileName;

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error retrieving file stats: ${err}`);

          return;
        }

        if (stats.isFile() && !excludeFiles.includes(file)) {
          fs.unlink(filePath, err => {
            if (err) console.error(`Error deleting file: ${err}`);
            else console.log(`Deleted file: ${filePath}`);
          });
        }
      });
    });
  });
}

cleanDeployFolder(folderPath, excludeFiles);

