const fs = require('fs');
const path = require('path');

const imageDir = '../../../assets/images'; // Update this with the path to your image directory

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  const imageNames = imageFiles.map(file => path.basename(file));

  fs.writeFile('../../../assets/images/image.json', JSON.stringify(imageNames), (err) => {
    if (err) {
      console.error('Error writing image list:', err);
    } else {
      console.log('Image list saved successfully.');
    }
  });
});
