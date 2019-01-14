var https = require('https')

function getAndPrintHTML (){
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};
	var buff ='';

	https.get(requestOptions, function (response){
		response.setEncoding=('UTF-8');

	response.on('data', function(data){
		buff= buff+= data;
		console.log(buff)
		
	response.on('end',function(){
		console.log("That's all!")
	})
	})
})
	
};

getAndPrintHTML();

