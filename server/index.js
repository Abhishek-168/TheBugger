import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt, { decode } from 'jsonwebtoken';
import mongoose from 'mongoose'
import User from '../models/User.js'
import Admin from '../models/Admin.js'
import Problem from '../models/Problem.js'

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET = 'abhishek123'; 

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://misterfreefire33:PJPAfmmjuprxvGhZ@cluster0.xpbj1af.mongodb.net/thebuggerDB?retryWrites=true&w=majority");
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};
connectDB();


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


app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const user = User.create({
            username,
            password
        })
        return res.status(201).json({ message: 'User created successfully' ,
            user: {id: user._id, username: user.username}
        });
    } catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({error: 'Username and password are required'});
    }
    else{
        const userExists = User.findOne({username}).select('-password');
        if (!userExists) {
            return res.status(401).json({error: 'User not found or incorrect password'});
        }
        const token = jwt.sign({username}, SECRET);
        return res.status(200).json({success: true, message: 'Login successful', token: token});
    }
});

app.get("/solve", authenticateToken, (req, res) => {
    try {
        const username = req.username;

        const user = User.findOne({ username }).select('-password');
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        console.log("Username " + user.username);
        return res.status(200).json({username: user.username,  message: 'Solve Success'});
   } catch(err) {
        console.log("Error at solve " , err);
        return res.status(500).json({
            message: "Internal Server Error"
    })
   }
})

app.post("/admin/addProb", (req, res) => {
    try {
        const probData = req.body;
        
        const prob = Problem.create({
            title: probData.title,
            description: probData.description,
            curOutput: probData.curOutput,
            correctOutput: probData.correctOutput
        })
        return res.status(200).json({message: "Problem created successfully"});
    }
    catch(err)
    {
        return res.status(400).json({message: "Error Creating Problem in server side"});
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})