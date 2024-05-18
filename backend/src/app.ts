import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:5173/',
};

app.use(cors(corsOptions));

const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'penis2' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
