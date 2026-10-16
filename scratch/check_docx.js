const fs = require('fs');
const zlib = require('zlib');

// Read docx (which is a zip archive)
const buf = fs.readFileSync('C:\\Users\\mohammed hatem\\.gemini\\antigravity\\brain\\132acac2-548d-45c1-b956-9ddef61b7999\\.user_uploaded\\media_1792099340400_229eff88.docx');

// Find word/document.xml in zip
// Local file header signature = 0x04034b50
let idx = 0;
while (idx < buf.length - 4) {
  if (buf[idx] === 0x50 && buf[idx+1] === 0x4b && buf[idx+2] === 0x03 && buf[idx+3] === 0x04) {
    const fnLen = buf.readUInt16LE(idx + 26);
    const extraLen = buf.readUInt16LE(idx + 28);
    const fn = buf.toString('utf8', idx + 30, idx + 30 + fnLen);
    const compMethod = buf.readUInt16LE(idx + 8);
    const compSize = buf.readUInt32LE(idx + 18);
    const uncompSize = buf.readUInt32LE(idx + 22);
    const dataStart = idx + 30 + fnLen + extraLen;
    if (fn === 'word/document.xml') {
      const compData = buf.slice(dataStart, dataStart + compSize);
      const xml = zlib.inflateRawSync(compData).toString('utf8');
      const text = xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      fs.writeFileSync('scratch/doc_text.txt', text, 'utf8');
      console.log('Extracted document.xml text length:', text.length);
      break;
    }
    idx = dataStart + compSize;
  } else {
    idx++;
  }
}
