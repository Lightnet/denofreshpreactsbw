https://www.youtube.com/watch?v=hRSwSAr-gok
5:48


```ts
const usersMap = new Map<string,{id:number,status:string}>([
  ["mark",{id:100,status:"online"}]
])

usersMap.set("mark",{id:100,status:"offline"})

[...usersMap].map(user =>{
  console.log(user[0], user[1])
})
```