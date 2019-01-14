var https = require('https');
var requestOptions = {
		host : 'sytantris.github.io',
		path : '/http-examples/step4.html'
	};

function printHTML(html){
	console.log(html);
};

function getHTML (options, callback){
	
	// my code //
	https.get(requestOptions, function (response){
		response.setEncoding('utf-8');

	response.on('data', function(data){
		console.log('Chunk received:', data, "\n");
		
	response.on('end',function(){
		console.log("That's all!")
	})
	})

	})
};

getHTML(requestOptions, printHTML(requestOptions));