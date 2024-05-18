const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    crendentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const port = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'penis2' });
});

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
