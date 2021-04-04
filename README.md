# node-simple-args
Provide easy way to get node arguments

## Usage

### CLI (node script.js -u root -p Qwerty123$ or node script.js --username root --password Qwerty123$)

```javascript
//script.js
import {get} from simple-nod-args

const u = get('u');
const p = get('p');
const username = get('username');
const password = get('password');

console.log(u, p, username, password);
//root Qwerty123$ root Qwerty123$
```
### Browser (URL?username=root&password=Qwerty123$)

```javascript
import {getParam} from simple-nod-args

const username = getParam('username');
const password = getParam('password');

console.log(username, password);
//root Qwerty123$
```
