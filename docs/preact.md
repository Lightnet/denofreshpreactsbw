https://project-awesome.org/preactjs/awesome-preact
https://preactjs.com/about/libraries-addons

https://preactjs.com/guide/v10/typescript/

You can set default props by setting a default value in the function signature.
```ts
type GreetingProps = {
  name?: string; // name is optional!
}

function Greeting({ name = "User" }: GreetingProps) {
  // name is at least "User"
  return <div>Hello {name}!</div>
}
```














