# project-2 - Utility App

Small reusable JavaScript utility module with a `greeting` function and a `createCard` UI component.

## Run

Open `index.html` in a web browser. No server or installation required.

## Reuse in another project

```html
<script src="path/to/project-2/utils.js"></script>
<script>
  utils.greeting('Alice');        // "Hello, Alice!"
  var card = utils.createCard('Title', 'Body'); // returns a DOM element
</script>
```

Or in Node:

```js
const utils = require('./path/to/project-2/utils.js');
utils.greeting('Alice');
```
