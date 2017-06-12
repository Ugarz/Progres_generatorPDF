var fs = require('fs');
var PDFDocument = require('pdfkit');
var moment = require('moment');
var devis = require('./devis.json');
var facture = require('./facture.json');

var localLocale = moment();

localLocale.locale('fr'); // set this instance to use French
localLocale.format('LLLL'); // dimanche 15 juillet 2012 11:01


/*----------  Variables  ----------*/
var CurrentFullDate = localLocale.format('LL');

var sec = moment().second();
var min = moment().minute();
var hour = moment().hour();
var fullHour = hour + ':' + min + ':' + sec;
var day = moment().day(); // of the week
var date = moment().date(); // of the month
moment().format();


/*----------  Create pdf  ----------*/

function paragraphe({ data : text, }){

}
function createpdf(document){
    console.log('\n **** Création du pdf:')
    doc = new PDFDocument;
    doc.pipe(fs.createWriteStream(`./pdfs/pdf_sortie${moment().format('LLL')}.pdf`));


    doc.fontSize(20)
        .text(`${document.informations.type}`)
        .text('\n');

    doc.fontSize(10)
        .text(`Expéditeur : ${document.user1}`)
        .text('\n');

    doc.fontSize(14)
        .text('Ce devis a été réalisé le '+ CurrentFullDate)
        .text('Votre programme pour le '+ date +' est arrivé !')
        .text('\n');

    doc.fontSize(10)
        .text('Nous sommes actuellement le '+ CurrentFullDate + '. Il est ' + fullHour)
        .text('Nous sommes le '+ day + 'e jour de la semaine !')
        .text('\n');

    doc.fontSize(12)
        .text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem, voluptatibus! Maxime veniam dolor atque repellendus, quibusdam provident eum aliquid quaerat, necessitatibus sed, quisquam saepe beatae unde neque minima cupiditate?')
        .end();
    console.log('pdf_sortie.pdf printed')
}
createpdf(devis)
