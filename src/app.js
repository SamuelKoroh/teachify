import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use('/api/v1', routes);

app.get('*', (req, res) => res.send('welocme to teachify'));

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));