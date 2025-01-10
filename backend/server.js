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

app.use(cors())
app.use(express.text())

app.post("/post", (req, res) => {
    const message = req.body
    console.log("Incoming Message:", message)
    mysql_connection.query(`insert into chat (message) values (?)`, [message], (err, results, fields) => {
        if (err) throw err
        console.log(results)
    })
    res.json({"Receive": true})
})

app.all("/", (req, res) => {
    res.end("Bad Gateway")
})

let ctrlCount = 0
process.on("SIGINT", () => {
    if (ctrlCount == 0) {
        console.log("Entered Exit Mode")
        console.log("Press 'y' or 'n' to exit or stay")
        console.log("Press CTRL+C again to exit")
    }

    ctrlCount += 1
    if (ctrlCount > 1) {
        console.log("Disconnecting db")
        console.log("Exiting")
        mysql_connection.end()
        process.exit(0)
    }

    process.stdin.setEncoding("utf8")
    process.stdin.once("data", (data) => {
        const key = data.trim().toLowerCase()
        if (key === "y" || key === "yes") {
            console.log("Disconnecting db")
            console.log("Exiting")
            mysql_connection.end()
            process.exit(0)
        }
        else {
            console.log("Exiting Exit Mode")
            ctrlCount = 0
        }
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})