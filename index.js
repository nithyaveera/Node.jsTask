import express from "express";
import fs from "fs";
import { format } from 'date-fns';

const app = express();
const PORT = 4001

app.get('/', (req, res) => {
    let current_date = format(new Date(), 'dd-MM-yyyy-HH-mm-ss', { timeZone: 'Asia/Kolkata' })
    const filepath = `Timestamp/current-date-time.txt`
    fs.writeFileSync(filepath, `${current_date}`, 'utf-8');
    res.status(200).send(`${current_date}`)
})

app.get('/read', (req, res) => {
    const filepath = `Timestamp/current-date-time.txt`
    const readData = fs.readFileSync(filepath, 'utf-8');
    res.status(200).send(`${readData}`)
})

app.listen(PORT, () => {
    console.log(`run port  ${PORT} `)
})