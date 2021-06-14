const express = require('express');
const IPFS = require('ipfs-api');

//file system module to read json file
var fs=require('fs')

//infura provides ipfs api to write to global IPFS network
//that can be accessed as https://gateway.ipfs.io/ipfs/<hashOfFile>
const ipfs = new IPFS({host:'ipfs.infura.io', port:5001, protocol:'https'});
var path = require('path');

const app = express();
app.use(express.json());


//setting virtual path so that js files can be read from html files.
app.use('/', express.static(path.join(__dirname, '/')));

console.log(__dirname);

app.get('/patient', function(req, res) {
    res.sendFile(path.join(__dirname + '/patient.html'));
});



//read abi
app.get('/abi', function(req,res){
	var contract_json = "../WHZHealth/build/contracts/PatientControl.json";
	var parsed= JSON.parse(fs.readFileSync(contract_json));
	var abi = parsed.abi;
	res.send(abi);
});


app.listen(3000, ()=>{
	console.log('Server listening on port 3000');
});