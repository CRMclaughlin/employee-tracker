import mysql from "mysql2";

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      
      database: 'employee_db'
    },
  );
  
  db.connect(function (err) {
    if (err) throw err
  })

  export default db