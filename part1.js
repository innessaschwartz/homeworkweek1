const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello- lets get this working!'));

app.listen(3000, () => console.log('Listening on port 3000!'));


var counter = 0;

app.get('/counter', (req,res) => {
	counter++;
	res.json(counter);
});
