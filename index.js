var fs = require('fs');
var PDFDocument = require('pdfkit');
var moment = require('moment');
moment.locale('fr');


/*----------  Variables  ----------*/
var CurrentDate = moment().format("MMMM");

var sec = moment().second();
var min = moment().minute();
var hour = moment().hour();
var fullHour = hour + ':' + min + ':' + sec;
var day = moment().day(); // of the week
var date = moment().date(); // of the month



/*----------  Create pdf  ----------*/
doc = new PDFDocument;
doc.pipe(fs.createWriteStream('pdf_sortie.pdf'));

moment().format();
doc.fontSize(10);
doc.text('Nous sommes actuellement en '+ CurrentDate + '. Il est ' + fullHour);
doc.text('Nous sommes le '+ day + 'e jour de la semaine !');
doc.fontSize(15);
doc.text('\n');
doc.text('Petit saut de ligne');
doc.text('\n');
doc.text('Votre programme pour le '+ date +' est arrivé !');
doc.text('\n');
doc.fontSize(12);
doc.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem, voluptatibus! Maxime veniam dolor atque repellendus, quibusdam provident eum aliquid quaerat, necessitatibus sed, quisquam saepe beatae unde neque minima cupiditate?');
doc.text (('Ce message est fixé en absolute en X et Y !'), 300, 300)
doc.end();