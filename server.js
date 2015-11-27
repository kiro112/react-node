'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactApp = require("./es5-lib/ReactApp");

const express = require('express');
const app = express();


app.use('/static', express.static('public'));

app.get('/', (req, res) => {
	const rApp = React.createFactory(ReactApp)({});
	const reactHtml = ReactDOMServer.renderToString(rApp);
	const html = `
		<!DOCTYPE html>
		<html>
			<head>
				<title>JSON Formatter</title>
			</head>
			<body>
				<div id="app">${reactHtml}</div>
				<script src="./static/js/react-app.js"></script>
			</body>
		</html>
	`;	


	res.send(html);
});

const server = app.listen(9000, () => {
  let port = server.address().port;
  console.log(`Server running at http://localhost:${port}`);
});