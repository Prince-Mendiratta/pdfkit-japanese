const PDFDocument = require('pdfkit');
const fs = require('fs');

function createPdf(content) {
  let doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output.pdf'));
  doc.font('fonts/ipag.ttf').fontSize(14);
  doc.text(content, 100, 100);
  doc.end();
}


createPdf(`
ユーザーネーム: user-name
パスワード: user-password
`);


