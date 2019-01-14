var https = require('https');

function getAndPrintHTMLChunks (){
	var requestOptions = {
		host : 'sytantris.github.io',
		path : '/http-examples/step6/uppercase.html'
	};
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
}

getAndPrintHTMLChunks();

