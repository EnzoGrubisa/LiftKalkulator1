const express = require('express');
const mysql = require('mysql');



const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

//console.log(format(new Date(), "dd.MM.yyyy.\tHH:mm:ss"));
//console.log(uuid());

const logEvents = require("./logEvents");

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// init object
const myEmitter = new MyEmitter();

// // add listener for log event
// myEmitter.on('log', (msg) => {
//     logEvents(msg);
// });


// myEmitter.emit('log', 'log event emitted');




const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: "3306",
    password: "LoRaRulez!",
    database: "liftkalkulator"
});

// app.get('/', (req, res) => {
// });


// const handleLogin = async (req, res) => {
//     const { user, pwd } = req.body;
//     if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
//     const foundUser = usersDB.users.find(person => person.username === user);
//     if (!foundUser) return res.sendStatus(401); //Unauthorized 
//     // evaluate password 
//     const match = await bcrypt.compare(pwd, foundUser.password);
//     if (match) {
//         // create JWTs
//         res.json({ 'success': `User ${user} is logged in!` });
//     } else {
//         res.sendStatus(401);
//     }
// }

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.status(400).json({ 'message': 'Nedostaje korisničko ime i/ili lozinka.' });

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result.length > 0){
                console.log(result[0].username + " logged in.");
                //res.status = "200";
                res.send(result[0].username);
            }
            else{
                res.send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

process.on('uncaughtException', err => {
    console.error("Uncaught error: " + err);
    process.exit(1);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });