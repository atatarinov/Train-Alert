'use strict';

// const express = require('express');
// const app = express();

// const protobuf = require("protobufjs");
// const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
// const request = require('request');


// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });





// var MTA = require('mta-service-status');

// MTA.getServiceStatus('subway', 'G').then(function(result) {
//     console.log(result);
// })

// MTA.getServiceStatus('subway', '5').then(function(result) {
//   console.log(result);
// })




// const requestSettings = {
//   method: 'GET',
//   url: 'http://datamine.mta.info/mta_esi.php?key=096504839f14899407c07eb05abb04c3',
//   encoding: null
// };

// request(requestSettings, function (error, response, body) {

//   if (!error && response.statusCode == 200) {
//     var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
//     feed.entity.forEach(function(entity) {
//       if (entity.trip_update) {
//         console.log(entity.trip_update);
//       }
//     });
//   }
// });


const mta = require('mta')();

// Get status for all services
// mta.status(function(err, status){
//   if (err) throw err;
//   console.log(status);
// });

let textArr = [];

// Get status for the subway system
mta.status('subway', function (err, status) {
  if (err) throw err;
  let result = JSON.stringify(status);
  // console.log(status);

  status.forEach(item => {
    if (item.text) {
      textArr.push(item.text);
    }
  })
  console.log(textArr);
});



// { name: '123',
// status: 'GOOD SERVICE',
// text: '',
// Date: '',
// Time: '' }


let statusArr = [
  "\r\n                    <span class=\"TitleDelay\">Delays</span>\r\n                    <span class=\"DateStyle\">\r\n                    &nbsp;Posted:&nbsp;11/09/2017&nbsp; 4:42PM\r\n                    </span><br/><br/>\r\n                  [E], [F], [M] and [R] train service has resumed following earlier NYPD activity at <STRONG>Forest Hills-71 Av</STRONG>.\r\n                <br/><br/>\r\n              ",

  "\r\n                    <span class=\"TitleDelay\">Delays</span>\r\n                    <span class=\"DateStyle\">\r\n                    &nbsp;Posted:&nbsp;11/09/2017&nbsp; 4:42PM\r\n                    </span><br/><br/>\r\n                  [E], [F], [M] and [R] train service has resumed following earlier NYPD activity at <STRONG>Forest Hills-71 Av</STRONG>.\r\n                <br/><br/>\r\n              ",

  "\r\n                    <span class=\"TitleDelay\">Delays</span>\r\n                    <span class=\"DateStyle\">\r\n                    &nbsp;Posted:&nbsp;11/09/2017&nbsp; 4:42PM\r\n                    </span><br/><br/>\r\n                  [E], [F], [M] and [R] train service has resumed following earlier NYPD activity at <STRONG>Forest Hills-71 Av</STRONG>.\r\n                <br/><br/>\r\n              ",

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(172642);><b><i>TRACK MAINTENANCE</i><br clear=left>[5] Service ends early between E 180 St and Bowling Green<br clear=left>[2] [4] trains provide alternate service</a><br/><br/><div id= 172642 class="plannedWorkDetail" ></b>Evenings, Mon to Thu, Nov 6 - 9  &bull;  Nov 13 - 16<br><br>[5] service operates between <b>Dyre Av</b> and <b>E 180 St</b>.<br><br><table class=plannedworkTableStyle  width=75%><tr><td><font size=3><b>Travel Alternatives</b></font><td align=right>[TP]</table><br></font>&bull; Transfer between [5] and [2] trains at E 180 St.<br>&bull; Transfer between [2] and [4] trains at 149 St-Grand Concourse.<br><br><b>Reminder:</b> <a href=http://advisory.mtanyct.info/pdf_files/NightMap.pdf target=_blank><font color=#0000FF><b><u>Late Night</u></b></font></a> [5] service operates as scheduled in the Bronx.<br></font>           <br><table class=plannedworkTableStyle  border=1 cellspacing=1 cellpadding=5 rules=none frame=box><td>  [ad]  <td><font size=1>This service change affects one or more ADA accessible stations. Please call 511 for help with planning<br>your trip. If you are deaf or hard of hearing, use your preferred relay service provider or the free 711 relay.  </font></table><br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170246);><b><i>FASTRACK</i><br clear=left>[D] Norwood-bound trains make local stops at 25 St, Prospect Av, 4 Av-9 St, Union St and DeKalb Av</a><br/><br/><div id= 170246 class="plannedWorkDetail" ></b>Evenings, beginning 8:30 PM, Mon to Thu, Nov 6 - 9  &bull;  Nov 13 - 16<br><br>&bull; Please allow additional travel time.<br><br><b>Reminders:</b> </font><a href=http://advisory.mtanyct.info/pdf_files/NightMap.pdf target=_blank><font color=#0000FF><b><u>Late Night</u></b></font></a> local service operates as scheduled in Brooklyn.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170245);><b><i>FASTRACK</i><BR CLEAR=LEFT>[N] Astoria-bound trains run local from 59 St, Brooklyn to DeKalb Av</font> </a><br/><br/><div id= 170245 class="plannedWorkDetail" ></b>Evenings, beginning 8:30 PM, Mon to Thu, Nov 6 - 9  &bull;  Nov 13 - 16<br><br>&bull; Please allow additional travel time.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitleDelay">Delays</span>\r\n                    <span class="DateStyle">\r\n                    &nbsp;Posted:&nbsp;11/09/2017&nbsp; 8:09PM\r\n                    </span><br/><br/>\r\n                  <P>[SIR] trains are running with delays in both directions because of slippery rails between <STRONG>Tottenville</STRONG> and <STRONG>St Gerorge Ferry</STRONG>. </P>\r\n<P> </P>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170679);><b><i>FASTRACK</i><BR CLEAR=LEFT>[W] Service ends early</a><br/><br/><div id= 170679 class="plannedWorkDetail" ></b>Late Evenings, 9:30 PM to 11:30 PM, Mon to Thu, Nov 6 - 9  &bull;  Nov 13 - 16<br><br>&bull; Please allow additional travel time.<br></font><b><br><br></div></b><br/>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170248);><b><i>FASTRACK</i><BR CLEAR=LEFT>[R] No service at Whitehall St, Court St, Jay St-MetroTech and DeKalb Av<font color=#000000><br clear=left>     </font>Trains skip Union St, 4 Av-9 St, Prospect Av and 25 St in both directions</a><br/><br/><div id= 170248 class="plannedWorkDetail" ></b>Late Nights, 10 PM to 5 AM, Mon to Fri, Nov 6 - 10  &bull;  Nov 13 - 17<br><br>For <b>Whitehall St</b>, use the nearby <a href=http://web.mta.info/weekender/tileMap.html?staID=10058 target=_blank><font color=#0000FF><b><u>Bowling Green</u></b></font></a> </font>[4] Station.<br><br>For <b>Court St</b> and <b>Jay St-MetroTech</b>, take the [N] instead.<br><br>For <b>DeKalb Av</b>, take the [N] [Q] instead, <i>or</i> [2] [4] at nearby <a href=http://web.mta.info/weekender/tileMap.html?staID=10010 target=_blank><font color=#0000FF><b><u>Nevins St</u></b></font></a>.<br><br>For skipped stations, take the [D] or [N]. <br><br>Transfer between the [R] and [2] [4] [D] [N] [Q] trains at Atlantic Av-Barclays Ctr <br>or the [D] [N] at 36 St.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170239);><b><i>FASTRACK</i><br clear=left>[N] No trains in Manhattan<br clear=left>[Q] Trains are rerouted in Manhattan<br clear=left>[R] Service ends early in Manhattan and Queens</a><br/><br/><div id= 170239 class="plannedWorkDetail" ></b>Late Nights, 9:30 PM to 5 AM, Mon to Fri, Nov 6 - 10  &bull;  Nov 13 - 17<br><br><b>[N]</b> <b>service operates in two sections</b>:<br>  1. Between <b>Stillwell Av and Atlantic Av-Barclays Ctr</b>, and via the <b>[R]</b> <i>to/from</i> <b>Court St<br></b>  2. Between <b>Queensboro Plaza</b> and <b>Ditmars Blvd<br><br>[Q]</b> service operates between <b>Stillwell Av</b> and <b>96 St</b>, and is rerouted as follows:<br>  &bull; Via the <b>[D]</b> between <b>DeKalb Av</b> and <b>47-50 Sts</b>.<br>  &bull; Via the <b>[F]</b> between <b>47-50 Sts</b> and <b>Lexington Av/63 St</b>. <br><br><b>[R]</b> service operates in Brooklyn between <b>95 St</b> and <b>Atlantic Av-Barclays Ctr</b>.<br><br>[W] service ends early.<br><br><table class=plannedworkTableStyle  width=87%><tr><td><font size=3><b>Travel Alternatives</b></font><td align=right>[TP]</table><br></font>&bull; Take the [2] [4] [A] [D] [F] [Q] for service between Brooklyn and Manhattan.<br>&bull; Take the [7] for service between Manhattan and Queens.<br> &bull; Take the [M] and <i>local </i>[E] for service in Queens.<br><br><table class=plannedworkTableStyle  width=100% cellpadding=3 rules=rows frame=hsides><tr bgcolor=FAF8CC><td><b>Affected Station</b><td><b>Nearby Station</b><tr><td rowspan=2>Whitehall St<td>Bowling Green [4] [5] | [ad]<tr><td>South Ferry [1] | [ad]<tr><td rowspan=2>Rector St<td>Rector St [1]<tr><td>Wall St [4] [5]<tr><td>Cortlandt St<td>Fulton St [2] [3] [4] [5] [A] [C] [J] | [ad]<tr><td rowspan=2>City Hall<td>Park Place [2] [3]<tr><td>Brooklyn Bridge [4] [5] [6] | [ad]<tr><td>Canal St [4] <i>local</i>, [6]<td>Grand St  [B] [D] [Q]<tr><td rowspan=2>Prince St<td>Bleecker St/B\'way-Lafayette St [4] <i>local</i>, [6] [B] [D] [F] [M] [Q] | [ad]<tr><td>Spring St  [4] <i>local</i>, [6]<tr><td>8 St-NYU<td>Astor Pl  [4] <i>local</i>, [6]<tr><td>14 St-Union Sq [4] [6] [L]<td>14 St [F]<tr><td rowspan=3>23 St<td>23 St [F]<tr><td>23 St [4] <i>local</i>, [6] | [ad]<tr><td>23 St [1] [2] <i>local</i><tr><td rowspan=2>28 St<td>28 St [4] <i>local</i>, [6]<tr><td>28 St [1] [2] <i>local</i><tr><td>34 St-Herald Sq [B] [D] [F] [Q] | [ad]<td>34 St-Penn Station [1] [2] [3] | [ad]<tr><td>Times Sq-42 St/Port Authority<br>[1] [2] [3]  [7] [A] [C] [E] | [ad]<br><font size=1><i>(Passageway not accessible)</i></font><td>5 Av/42 St-Bryant Pk [7] [B] [D] [F] [M] [Q]<tr><td rowspan=2>49 St<td>50 St [1] [2] <i>local</i><tr><td>47-50 Sts [B] [D] [F] [M] [Q] | [ad]<tr><td>57 St-7 Av<td>7 Av [B] [D] [E]<tr><td rowspan=3>5 Av/59 St<td>57 St [F] [Q]<tr><td>59 St [4] [5] [6]<tr><td>5 Av/53 St [E] [M]<tr><td rowspan=2>Lexington Av/59 St  [4] [5] [6]<td>Lexington Av/53 St [E] [M] | [ad]<tr><td>Lexington Av/63 St [F] [Q] | [ad]</table><br><table class=plannedworkTableStyle  width=90% cellpadding=3 rules=rows frame=hsides><tr bgcolor=000000><td colspan=2><font color=#FAF8CC><b>Key Transfer Stations</b></font><tr><td>Atlantic Av-Barclays Ctr [ad]<td>[2] [3] [4] [B] [D] [N] [Q] [R]<tr><td>Jay St-MetroTech [ad]<td>[A] [C] [F] [N]<tr><td>Court St/Borough Hall<td>[2] [3] [4] [N]<br>[ad] <font size=1><i><b>2</b>,<b> 3</b>, northbound <b>4</b> and <b>5</b></i></font><tr><td>Bleecker St/<br>B\'way-Lafayette St [ad]<td>[4] <i>local</i>, [6] [B] [D] [F] [M] [Q]<tr><td>Times Sq-42 St/Port Authority <br>[ad] <font size=1><i>(Passageway<i> </i>not accessible)</i></font><td>[1] [2] [3] [7] [A] [C] [E]<tr><td>5 Av/42 St-Bryant Pk<td>[7] [B] [D] [F] [M] [Q]<tr><td>Queensboro Plaza<td>[7]  [N]</table><br></font><b>Reminder:</b> During late nights, all alternate stations are served, though not all lines run.<br><br><table class=plannedworkTableStyle  border=1 cellspacing=1 cellpadding=5 rules=none frame=box><td>  [ad]  <td><font size=1>This service change affects one or more ADA accessible stations. Please call 511 for help with planning<br>your trip. If you are deaf or hard of hearing, use your preferred relay service provider or the free 711 relay.  </font></table><br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitleServiceChange" >Service Change</span>\r\n                    <span class="DateStyle">\r\n                    &nbsp;Posted:&nbsp;11/10/2017&nbsp; 7:17AM\r\n                    </span><br/><br/>\r\n                  <P>Broad St bound [J] trains will end at Essex St because of a train with mechanical problems at <STRONG>Canal St.</STRONG></P>\r\n<P><STRONG></STRONG> </P>\r\n                <br/><br/>\r\n       ',

  '\r\n                    <span class="TitleDelay">Delays</span>\r\n                    <span class="DateStyle">\r\n                    &nbsp;Posted:&nbsp;11/10/2017&nbsp; 9:24AM\r\n                    </span><br/><br/>\r\n                  [7D] express train service has resumed following an earlier NYPD investigation at 61 St-Woodside.\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(171575);><b><i>SCHEDULED MAINTENANCE</i><BR CLEAR=LEFT>[SIR] Trains board at the St. George-bound platform from Prince\'s Bay to Arthur Kill Stations</a><br/><br/><div id= 171575 class="plannedWorkDetail" ></b>Day, 9 AM to 3 PM, Friday, Nov 10<br><br>&bull; Boarding change includes <b>Prince\'s Bay</b>, <b>Pleasant Plains</b>, <b>Richmond Valley</b> and <br>  <b>Arthur Kill Stations</b>.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(171479);><b><i>ELECTRICAL IMPROVEMENTS</i><BR CLEAR=LEFT>[6D] Brooklyn Bridge-bound trains run local from Parkchester to 3 Av-138 St</a><br/><br/><div id= 171479 class="plannedWorkDetail" ></b>Days, 10 AM to 1 PM, Mon to Fri, Nov 6 - 10<br><br>&bull; Please allow additional travel time.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(170130);><b><i>ELECTRICAL IMPROVEMENTS</i><BR CLEAR=LEFT>[6] The last stop for alternate trains headed toward Pelham Bay Park is 3 Av-138 St</a><br/><br/><div id= 170130 class="plannedWorkDetail" ></b>Days, 10 AM to 3:30 PM, Mon to Fri, Nov 6 - 10  &bull;  Tue to Thu, Nov 14 - 16<br><br>&bull; </font>Please allow additional travel time in the Bronx.                             <b> </b><a href=http://apps.mta.info/traintime/ target=_blank><img height=26px src=http://apps.mta.info/traintime/desktop2Images/logoSm.png></a><br>      <br></font><table class=plannedworkTableStyle  border=1 cellspacing=1 cellpadding=5 rules=none frame=box><td>  [ad]  <td><font size=1>This service change affects one or more ADA accessible stations. Please call 511 for help with planning<br>your trip. If you are deaf or hard of hearing, use your preferred relay service provider or the free 711 relay.  </font></table><br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(172343);><b><i>PRIORITY REPAIRS</i><BR CLEAR=LEFT>[7] Flushing-bound trains skip 33, 40, 46, 52 and 69 Sts</a><br/><br/><div id= 172343 class="plannedWorkDetail" ></b></font>Days, 9:45 AM to 3 PM, Mon to Fri, Nov 6 - 10<br><br>For service <i>to</i> these stations, take the [7] to 61 St-Woodside or 74 St and transfer to a<br>Hudson Yards-bound [7].<br><br>For service <i>from</i> these stations, take the [7] to 61 St-Woodside or Queensboro Plaza<br>and transfer to a Flushing-bound [7].<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(167230);><b><i>TRACK REPLACEMENT</i><BR CLEAR=LEFT>[7] Flushing-bound trains skip 82, 90, 103 and 111 Sts</a><br/><br/><div id= 167230 class="plannedWorkDetail" ></b>Days, 9:45 AM to 3:30 PM, Wed to Fri, until Dec 1 (<i>except Nov 23</i>)<br><br>For service <i>to </i>these stations, take the [7] to Junction Blvd or Willets Point<br>and transfer to a Hudson Yards-bound [7].<br><br>For service <i>from </i>these stations, take the [7] to Junction Blvd or 74 St<br>and transfer to a Flushing-bound [7].<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(172368);><b><i>TRACK REPLACEMENT</i><BR CLEAR=LEFT>[B] No trains between Kings Hwy and Brighton Beach<br clear=left>[Q] trains provide alternate service</a><br/><br/><div id= 172368 class="plannedWorkDetail" ></b>Days, 9:45 AM to 3:30 PM, Wed to Fri, Nov 8 - 10<br><br></font><b>[B] </b>service operates between <b>145 St</b> and <b>Kings Hwy</b>.<br><br>&bull; Transfer between <b>[B]</b> and <b>[Q]</b> trains at Kings Hwy.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(168478);><b><i>SIGNAL MAINTENANCE</i><BR CLEAR=LEFT>[L] Service operates every 12 minutes between Myrtle-Wyckoff Avs and Rockaway Pkwy</a><br/><br/><div id= 168478 class="plannedWorkDetail" ></b>Days, 11 AM to 3 PM, Mon to Fri, until Nov 17</font> <br><br>The last stop for <b>alternate</b> trains <i>from </i>Manhattan is Myrtle-Wyckoff Avs.<br><b></b>          </font><a href=http://apps.mta.info/traintime/ target=_blank><img height=32px src=http://apps.mta.info/traintime/desktop2Images/logoSm.png></a><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitleDelay">Delays</span>\r\n                    <span class="DateStyle">\r\n                    &nbsp;Posted:&nbsp;11/10/2017&nbsp;12:08PM\r\n                    </span><br/><br/>\r\n                  <P>[N] and [W] trains are running with delays in both directions because of a train with mechanical problems at <STRONG>Astoria-Ditmars Blvd.</STRONG></P>\r\n<P>Our crews are on site working to fix it ASAP, and we\'ll follow up soon. Stay tuned for updates.</P>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(172371);><b><i>TRACK REPLACEMENT</i><BR CLEAR=LEFT>[Q] Trains run every 16 minutes between Brighton Beach and Stillwell Av</a><br/><br/><div id= 172371 class="plannedWorkDetail" ></b>Days, 10 AM to 3:30 PM, Wed to Fri, Nov 8 - 10<br><br><b>Service operates in two sections:<br></font>  </b>1.  Between <b>96 St</b> and <b>Brighton Beach<br></b>  2.  Between <b>Brighton Beach</b> and <b>Stillwell Av<br><br></b>&bull; </font>Transfer at Brighton Beach to continue your trip.<br><br><table class=plannedworkTableStyle  border=1 cellspacing=1 cellpadding=5 rules=none frame=box><td>  [ad]  <td><font size=1>This service change affects one or more ADA accessible stations. Please call 511 for help with planning <br clear=left>your trip. If you are deaf or hard of hearing, use your preferred relay service provider or the free 711 relay.  </font></table><br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              \r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(172233);><b><i>ELECTRICAL IMPROVEMENTS</i><BR CLEAR=LEFT>[Q] Coney Island-bound trains run express from Prospect Park to Sheepshead Bay</a><br/><br/><div id= 172233 class="plannedWorkDetail" ></b>Days, 9:45 AM to 3:30 PM, Mon to Fri, Nov 6 - 10<br><br></font>Trains stop at Church Av, Newkirk Plaza and Kings Hwy.<br><br>For service <i>to </i>Parkside Av, Beverley, Cortelyou Rds, Avenue H, Avenue J, Avenue M, Avenue U and Neck Rd, take the [Q] to Church Av, Newkirk Plaza, Kings Hwy or Sheepshead Bay and transfer to a <br>96 St-bound [Q].<br><br>For service <i>from</i> these stations, take the [Q] to Kings Hwy, Newkirk Plaza, Church Av or Prospect Park and transfer to a Coney Island-bound [Q].<br><br><table class=plannedworkTableStyle  border=1 cellspacing=1 cellpadding=5 rules=none frame=box><td>  [ad]  <td><font size=1>This service change affects one or more ADA accessible stations. Please call 511 for help with planning<br>your trip. If you are deaf or hard of hearing, use your preferred relay service provider or the free 711 relay.  </font></table><br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              ',

  '\r\n                    <span class="TitlePlannedWork" >Planned Work</span>\r\n                    <br/>\r\n                  <a class="plannedWorkDetailLink" onclick=ShowHide(171575);><b><i>SCHEDULED MAINTENANCE</i><BR CLEAR=LEFT>[SIR] Trains board at the St. George-bound platform from Prince\'s Bay to Arthur Kill Stations</a><br/><br/><div id= 171575 class="plannedWorkDetail" ></b>Day, 9 AM to 3 PM, Friday, Nov 10<br><br>&bull; Boarding change includes <b>Prince\'s Bay</b>, <b>Pleasant Plains</b>, <b>Richmond Valley</b> and <br>  <b>Arthur Kill Stations</b>.<br><b><br></div></b><br/>\r\n                <br/><br/>\r\n              '

]

// console.log(Array.isArray(output1));

//collect outputs
//figure out the parsing function
//need to cut off:
//

function filter(text) {
  let result = text.replace(/<[^>]+>/g," ") // filter out tags
  result = result.replace(/\r?\n|\r/g," ") // filter out new lines

  result = result.replace(/\s\s+/g, ' '); // filter out more than 2 spaces

  result = result.replace(/&nbsp;/g, ' ').replace(/&bull/g, '').replace(/\s\s+/g, ' ')
  // result[0] += 'PM';

  if (result.includes('[ad]')) {
    let strEnd = result.indexOf('[ad]');
    result = result.slice(0, strEnd)
  }

  if (result.includes('Travel Alternatives')) {
    let strEnd = result.indexOf('Travel Alternatives');
    result = result.slice(0, strEnd)
  }
  //slices off adds or alternatives

  result = result.trim();

  return result.split('Planned Work ');
}

// filterText(item)

