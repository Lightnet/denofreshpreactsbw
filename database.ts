// https://github.com/denoland/fresh/issues/235
// https://deno.land/x/mongo@v0.30.1
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.30.1/mod.ts";

const client = new MongoClient();

const { DATABASE_URL } = config();

// Connecting to a Local Database
await client.connect(DATABASE_URL);
const Database = client.database("test");

// Declare the mongodb collections here. Here we are using only one collection (i.e user).
// Defining schema interface
interface UserSchema {
  _id: { $oid: string };
  userID: string;
  alias: string;
  email: string;
  salt: string;
  hash: string;
  token: string;
  created: number;
}
const User = Database.collection<UserSchema>("user");
export { Database, User };
console.log("init database!")