/*
  License: MIT
  Created by: Lightnet
*/

// https://github.com/denoland/fresh/issues/235
// https://deno.land/x/mongo@v0.30.1
// https://thecodebarbarian.com/working-with-mongoose-in-typescript.html
// https://deno.land/x/mongo@v0.13.0/EXAMPLES.md
// 
// 
// 

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

interface MessageSchema {
  _id: { $oid: string };
  recipientID: string;
  recipient: string;// a person or thing that receives or is awarded something.
  userID: string;
  alias: string;
  subject: string;
  content: string;
  created: number;
}
const Message = Database.collection<MessageSchema>("message");

interface ContactSchema {
  _id: { $oid: string };
  userID: string;
  friendID: string;
  status: string;
  created: number;
}
const Contact = Database.collection<ContactSchema>("contact");

interface GroupMessageSchema {
  _id: { $oid: string };
  groupMessageID: string;
  userID: string;
  content: string;
  created: number;
}
const GroupMessage = Database.collection<GroupMessageSchema>("groupmessage");

export { 
  Database, 
  User, 
  Message,
  Contact,
  GroupMessage,
};
console.log("init database!")