const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'images_out.txt');
try {
  // Let's inspect D:\
  const dFiles = fs.readdirSync('d:\\');
  fs.writeFileSync(logFile, 'D:\\ contents:\n' + dFiles.join('\n') + '\n\n', 'utf8');

  // Let's find the folder matching المشروع
  const projectFolder = dFiles.find(f => f.includes('المشروع') || f.includes('المش'));
  fs.appendFileSync(logFile, 'Found projectFolder: ' + projectFolder + '\n');
  
  if (projectFolder) {
    const sub1 = path.join('d:\\', projectFolder);
    const sub1Files = fs.readdirSync(sub1);
    fs.appendFileSync(logFile, 'Sub1 contents: ' + sub1Files.join(', ') + '\n');
    
    const sub2Folder = sub1Files.find(f => f.includes('المعتمد') || f.includes('معتمد'));
    if (sub2Folder) {
      const imgDir = path.join(sub1, sub2Folder, 'EN', 'image');
      fs.appendFileSync(logFile, 'Checking imgDir: ' + imgDir + '\n');
      if (fs.existsSync(imgDir)) {
        const imgFiles = fs.readdirSync(imgDir);
        fs.appendFileSync(logFile, 'Image files:\n' + imgFiles.join('\n') + '\n');
      } else {
        fs.appendFileSync(logFile, 'imgDir does not exist!\n');
      }
    }
  }
} catch (err) {
  fs.writeFileSync(logFile, 'Error: ' + err.stack, 'utf8');
}
