# Sfn-WhatsTPL-Engine

**WhatsTPL template engine for [sfn](https://github.com/hyurl/sfn) framework.**

For more information about WhatsTPL, please visit 
[github.com/hyurl/whatstpl](https://github.com/hyurl/whatstpl).

## Install

```sh
npm i sfn-whatstpl-engine
```

## Example

```typescript
import { HttpController, route } from "sfn";
import { WhatstplEngine } from "sfn-whatstpl-engine";

var engine = new WhatstplEngine();

export default class extends HttpController {
    engine: WhatstplEngine = engine;

    @route.get("/whatstpl-test")
    index() {
        return this.view("whatstpl-test.html");
    }
}
```

## API

### `new WhatstplEngine(options?: WhatstplOptions)`

Interface `WhatstplOptions` includes:

- `removeComments?: boolean` Whether or not to remove the comments when ernder
    HTML.
- `timeout: number` Used when the program is run in a browser and load remote 
    template via Ajax.