import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';


const app = express();
const port = process.env.PORT || 4000;

await connectDB();

// Allowed Origins

const allowedOrigins =[
    'http://localhost:5173'
]


// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));


// Routes

app.get('/', (req,res) => res.send('API Working')); 
app.use('/api/user' , userRouter)


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})