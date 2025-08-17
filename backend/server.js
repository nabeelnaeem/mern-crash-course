import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.BE_PORT;


const app = express();

app.get("/products", (req, res) => {
    res.send('Server is ready');
});
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
})
