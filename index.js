const express = require('express');
const app = express();
const port = 7001;
const path = require('path');
const getMoviePoster = require("movie-art");
const fetch = require("node-fetch");
const gis = require('g-i-s');

app.use(express.static(path.join(__dirname, '/public/c/')));

app.get('/poster', (req, res) => {
	getMoviePoster(req.query.title)
		.then(r => res.json({
			value: r
		}));
});

app.get('/character_thumbnail', (req, res) => {
	gis(req.query.name, (e, r) => res.json({
		value: r.find(i => i.width < 300).url
	}));
});

app.use('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
