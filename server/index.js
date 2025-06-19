import {express} from 'express';
import {cors} from 'cors';
import {bodyParser} from 'body-parser';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    res.json({ message: 'Login endpoint' });
    });