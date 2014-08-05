# isuckattimezones
> Quickly figure out time in other timezones.

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]

Install
-------

Install isuckattimezones with [npm](http://npmjs.org/isuckattimezones):

```sh
$ npm install isuckattimezones
```
To use it as a command line tool, you can install it globally by adding ```-g``` .

Usage
-----

If you're using isuckattimezones with Node.js, you can require the module:  

```js
var isatz = require('isuckattimezones')
```
You can pass any number of strings representing places. It will figure it out with Google Maps.  

```js
isatz(['oakland', 'new york'], console.log)
//  { local: 'D5T02:24 GMT',
//    oakland: 'D4T18:24 PDT',
//   'new york': 'D4T21:24 EDT' }
```

If the first string represents time, it will set local to that time and adjust the other timezones accordingly.

```js
isatz(['12:00', 'oakland'], console.log)
//  { local: 'D5T12:00 GMT',
//    oakland: 'D5T04:00 PDT' }
```

### Command line examples
```sh
$ isatz london
$ isatz 8:30 lisbon paris
```

Contributing
------------

To contribute, clone this repo locally and commit your code on a separate branch.


Contacts
--------
Bruno Vieira <[mail@bmpvieira.com](mailto:mail@bmpvieira.com)> [@bmpvieira](//twitter.com/bmpvieira)  

License
-------

isuckattimezones is licensed under the [MIT](https://raw.github.com/isuckattimezones/isuckattimezones/master/LICENSE) license.  
Check [ChooseALicense.com](http://choosealicense.com/licenses/mit) for details.

[npm-url]: //npmjs.org/package/isuckattimezones
[npm-image]: https://badge.fury.io/js/isuckattimezones.png
[depstat-url]: http://david-dm.org/bmpvieira/isuckattimezones
[depstat-image]: http://david-dm.org/bmpvieira/isuckattimezones.png
