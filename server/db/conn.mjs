import { MongoClient } from "mongodb";
const connectionString = process.env.URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
    console.log("chegouaqui1")
  conn = await client.connect();
  console.log("chegouaqui2")

} catch(e) {
  console.error(e);
}
let db = conn.db("loginApp")
export default db;