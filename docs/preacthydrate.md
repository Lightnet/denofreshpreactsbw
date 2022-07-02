
# hydrate
 - https://preactjs.com/guide/v10/api-reference/#hydrate

```ts
import { hydrate } from 'preact';

const Foo = () => <div>foo</div>;
hydrate(<Foo />, document.getElementById('container'));
```