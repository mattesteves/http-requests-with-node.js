var getHTML = require('../http-functions-module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function lowerHTML(html){
	console.log(html.toLowerCase());
};

getHTML(requestOptions,lowerHTML);