require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
const port = process.env.PORT
const mysql_connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

mysql_connection.connect()
mysql_connection.query("select * from chat", (err, rows, fields) => {
    console.log(rows)
})
mysql_connection.end()

app.use(cors())
app.use(express.text())

app.post("/post", (req, res) => {
    console.log("Incoming Message:", req.body)
    res.json({"Receive": true})
})

app.all("/", (req, res) => {
    res.end("Bad Gateway")
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})