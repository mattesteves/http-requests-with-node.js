var https = require('https');


module.exports = function getHTML (options, callback){
	
	// my code //
	https.get(options, function (response){
		response.setEncoding('utf-8');

	response.on('data', function(data){
		console.log('Chunk received:', data, "\n");
		
	response.on('end',function(){
		console.log("That's all!")
	})
	})

	})
};

