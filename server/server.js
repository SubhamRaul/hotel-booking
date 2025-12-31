import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import {clerkmiddleware} from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebHooks.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing


// Middleware
app.use(clerkMiddleware());
app.use(express.json());

app.use("/api/clerk",clerkWebhooks);

app.get('/',(req,res)=> res.send('Server is running'));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});