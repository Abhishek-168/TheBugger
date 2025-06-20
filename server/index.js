import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

app.post('/signup', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({error: 'Username and password are required'});
    }
    else{
        const userExists = users.find(user => user.username === username);
        if (userExists) {
            return res.status(400).json({error: 'User already exists'});
        }
        users.push({username, password});
        return res.status(201).json({message: 'User created successfully'});
    }
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({error: 'Username and password are required'});
    }
    else{
        const userExists = users.find(user => user.username === username && user.password === password);
        if (!userExists) {
            return res.status(401).json({error: 'User not found or incorrect password'});
        }
        return res.status(200).json({success: true, message: 'Login successful'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})