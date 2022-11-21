import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username, password and database contained in .env file for security
      user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
  );
  
  db.connect(function (err) {
    if (err) throw err
  })

  export default db