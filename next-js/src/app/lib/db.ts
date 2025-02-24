import mysql from "mysql2/promise";

export async function connectToDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",  // Change if you have a different MySQL user
    password: "",  // Enter your MySQL password
    database: "mind_db",
  });
  return connection;
}
