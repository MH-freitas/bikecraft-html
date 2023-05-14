const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3232, () => console.log('Rodando na porta http://localhost:3232'));
