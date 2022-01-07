const mysql = require('mysql');
const Promise = require('bluebird');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "omkar",
    password: "cdac",
    database: "LabExam",

};

const record = {
    sender: "Omkar",
    recipient: "Palash",
    msg: "Hello"
}
const addRecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into MESSAGE (sender,recipient,msg) values (?,?,?)`;
    await connection.queryAsync(sql, [record.sender, record.recipient, record.msg]);
    await connection.endAsync();
    console.log("Message record added.");
}

const getRecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from MESSAGE`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("List of Records.");
    console.log(list);
    return list;
}

//Check
//addRecord(record)
getRecord()

module.exports = {addRecord, getRecord};