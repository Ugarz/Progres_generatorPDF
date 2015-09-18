var fs = require('fs');  
var PDFDocument = require('pdfkit');  
var moment = require('moment');  
doc = new PDFDocument;  
doc.pipe(fs.createWriteStream('pdf_sortie.pdf'));  
doc.text('Mon premier pdf !');
doc.end(); 