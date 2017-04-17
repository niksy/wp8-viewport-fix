# wp8-viewport-fix

Fix Windows Phone 8 viewport.

From [original Gist](https://gist.github.com/stowball/4617428):

> Microsoft's stop-gap solution to fix IE 10's viewport on Windows Phone 8. I've also added another condition so it won't run on other browsers that spoof the user agent.

Additional details:

* http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html
* http://www.markadrake.com/blog/2013/05/31/responsive-design-concerns-for-windows-phone-and-ie-compatibility-modes/
* https://github.com/twbs/bootstrap/issues/12285

## Install

```sh
npm install wp8-viewport-fix --save
```

## Usage

```js
require('wp8-viewport-fix');
```

## Browser support

Applies only to Windows Phone 8.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
