import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username, password and database contained in .env file for security
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_Passord
    },
  );
  
  db.connect(function (err) {
    if (err) throw err
  })

  export default db