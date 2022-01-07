const express = require('express');
const app = express();
app.use(express.json());
const {addRecord, getRecord} = require('./user.js');

const cors = require('cors');
app.use(cors());

app.get("/get-records", async (req, res) => {
    const list = await getRecord();
    res.json(list);
});

app.post("/app-records", async (req, res) => {
    const user = req.body;
    await addRecord(user);
    res.json("New Record Added")
});

app.listen(4800, () => {
    console.log("Complete")
});