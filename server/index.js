import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt, { decode } from 'jsonwebtoken';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET = 'abhishek123'; 

const users = [];

function authenticateToken(req, res, next) {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.sendStatus(401);  // No token provided
    }

    const token = authHeader;
    if (!token.length) {
        return res.sendStatus(401);  // Malformed token
    }

    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);  // Invalid token
        }
        req.username = user.username;
        next();
    });
}


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
        const token = jwt.sign({username}, SECRET);
        return res.status(200).json({success: true, message: 'Login successful', token: token});
    }
});

app.get("/solve", authenticateToken, (req, res) => {
    const username = req.username;

    const user = users.find(u => u.username === username);
    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }
    console.log("Username " + user.username + " Password " + user.password);
    return res.status(200).json({username: user.username, password: user.password, message: 'Solve Success'});
   
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})