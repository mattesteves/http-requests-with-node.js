var getHTML = require('../http-functions-module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function upperHTML(html){
	console.log(html.toUpperCase());
};

getHTML(requestOptions,upperHTML);