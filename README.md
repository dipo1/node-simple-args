# node-simple-args
Provide easy way to get node arguments

## Usage

### CLI (node script.js --username root --password Qwerty123$)

```javascript
//script.js
import {get} from simple-nod-args

const username = get('username');
const password = get('password');

console.log(username, password);
//root Qwerty123$
```
### Browser (URL?username=root&password=Qwerty123$)

```javascript
import {getParam} from simple-nod-args

const username = getParam('username');
const password = getParam('password');

console.log(username, password);
//root Qwerty123$
```
