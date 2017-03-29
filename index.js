var express = require('express');
var app = express();
var path = require('path');
var http = require("http");
const fs = require("fs");

/*
http.createServer(function (request, response) {

  //win.loadURL( 'file://' + __dirname + '/index.html' );
  //on load of local host port 8000 get index.html
  /*writes to html page pre
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write();
  response.end();
  }).listen(8000);
*/

//live scrape from ss fb page using python - runs each time
var PythonShell = require('python-shell');

PythonShell.run('scraper3.py', function (err) {
  if (err) throw err;
  console.log('finished scraping');
});

//convert python scraped csv to json and write to file

const csvFilePath='238276116307585_facebook_statuses.csv';
const csv=require('csvtojson')

// fs is node's built in module for reading & writing files
//const fs = require('fs');

csv()
  // the 'end_parsed' event gives us the JSON representation of the whole
  // file, while the 'json' event gives it to us line by line, which is why
  // it was necessary to try and pipe it before
  .on('end_parsed',(jsonObj)=>{
    // here, because we get the whole csv as json, we can just write
    // it to a json file in one go, no pipes needed
    fs.writeFile('out.json', JSON.stringify(jsonObj), function(){
        console.log( '--> All Done.' );
    });
  })
  .on('done',(error)=>{
      console.log('end')
  })
  // we need to put this at the end, as it starts the file reading immediately
  // and if we put it before we register the events with .on, then some lines
  // can be missed or, if it's super quick the whole file might be missed
  .fromFile(csvFilePath);


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.sendFile(path.join(__dirname + '/public/favicon.png'));

});

app.use(express.static('public'));

app.listen(8080);
