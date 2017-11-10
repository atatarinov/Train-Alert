var parseString = require('xml2js').parseString;

// const { DOMParser } = require('xmldom');
// const xmlToJSON = require('xmlToJSON');


const xml = "<span class=\"TitleDelay\">Delays</span>\r\n                    <span class=\"DateStyle\">\r\n                    &nbsp;Posted:&nbsp;11/09/2017&nbsp; 4:42PM\r\n                    </span><br/><br/>\r\n                  [E], [F], [M] and [R] train service has resumed following earlier NYPD activity at <STRONG>Forest Hills-71 Av</STRONG>.\r\n                <br/><br/>";

parseString(xml, function (err, result) {
  if (err) throw err;
  console.dir(result);
});


// xmlToJSON.stringToXML = (string) => {
//   new DOMParser().parseFromString(string, 'text/xml');
// };

