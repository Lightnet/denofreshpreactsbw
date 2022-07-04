
# Information:
  object array to set up type array useState.

https://bobbyhadz.com/blog/react-usestate-string-array-typescript
https://www.typescriptlang.org/docs/handbook/interfaces.html

```ts
type Contact={
  _id:string;
  friendName:string;
}

const [contacts, setContacts] = useState<Contact[]>([]);
//...
  const friendname:string =response?.data.friendName;
  const id:string =response?.data.id;
  setContacts([...contacts,{
    _id:id,
    friendName:friendname
  }])
```