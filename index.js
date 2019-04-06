const express = require('express');
const app = express();
const port = process.env.PORT || 1138;
const path = require('path');
const getMoviePoster = require("movie-art");
const gis = require('g-i-s');
const compression = require('compression');
const favicon = require('serve-favicon');

app.use(compression());
app.use(express.static(path.join(__dirname, '/public/')));

// following apis are routed through express so we don't have to deal with no-cors
// headers issue directly from browser
// omdb search for movie posters
app.get('/poster', (req, res) => {
	getMoviePoster(req.query.title)
		.then(r => res.json({
			value: r || ("https://imgix.ranker.com/user_node_img/50076/1001511915/original/t" +
				"he-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces")
		}));
});

// google image search api, if fails always sends a 3PO image
app.get('/character_thumbnail', (req, res) => {
	gis(req.query.name, (e, r) => res.json({
		value: r ?
			r.find(i => i.width < 600).url :
			"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png"
	}));
});

app.use('/', (req, res) => {
	app.use(favicon(path.join(__dirname, 'public', `favicon-${Math.floor(Math.random() * 9)}.ico`)));
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => console.log(`FALCON has landed on port ${port}!`));