import express, { Express } from "express";
import mongoose from "mongoose";
import Agent from "./routes/agent.js"
import dotenv from "dotenv"
dotenv.config()
const app: Express = express()





function Run() {
    mongoose.connect('mongodb://localhost:27017/agent')
        .then((res) => console.log('MongoDB connect'))
        .catch((error) => console.log(`Mongo DB could not connect, because ${error}`) )
    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}
Run()