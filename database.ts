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

import { config } from "dotenv";
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
  id: string;
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
  friendName: string;
  status: string;
  created: number;
}
const Contact = Database.collection<ContactSchema>("contact");

interface GroupMessageSchema {
  _id: { $oid: string };
  groupMessageID: string;
  isDelete: boolean;
  userID: string;
  content: string;
  created: number;
}
const GroupMessage = Database.collection<GroupMessageSchema>("groupmessage");

interface ChatMessageSchema {
  _id: { $oid: string };
  chatID: string;
  userID: string;
  content: string;
  created: number;
}
const ChatMessage = Database.collection<ChatMessageSchema>("chatmessage");

interface NoteSchema {
  _id: { $oid: string };
  id: string;
  userID: string;
  content: string;
  created: number;
}
const Note = Database.collection<NoteSchema>("note");


interface HomeBaseSchema {
  _id: { $oid: string };
  id: string;
  userID: string;
  name: string;
  characterID: string;
  characterName: string;
  isProtect:boolean;
  timeRepair:string;
  location:string;
  x:number;
  y:number;
  z:number;
  created: number;
}
const Homebase = Database.collection<HomeBaseSchema>("homebase");

//const uuid = crypto.randomUUID()

interface BoardSchema {
  _id: { $oid: string };
  //id: string;
  parentID:string;
  id: string;
  userID: string;
  name: string;
  content:string
  created: number;
}
const Board = Database.collection<BoardSchema>("board");

interface TopicSchema {
  _id: { $oid: string };
  //id: string;
  parentID:string;
  id: string;
  userID: string;
  name: string;
  content:string
  created: number;
}
const Topic = Database.collection<TopicSchema>("topic");

interface CommentSchema {
  _id: { $oid: string };
  //id: string;
  parentID:string;
  id: string;
  userID: string;
  name: string;
  content:string
  created: number;
}
const Comment = Database.collection<CommentSchema>("comment");

interface BlogSchema {
  _id: { $oid: string };
  //id: string;
  id: string;
  userID: string;
  title: string;
  content:string
  created: number;
}
const Blog = Database.collection<BlogSchema>("blog");

export { 
  Database, 
  User, 
  Message,
  Contact,
  GroupMessage,
  ChatMessage,
  Note,
  Homebase,
  Board,
  Topic,
  Comment,
  Blog,
};
console.log("init database!")