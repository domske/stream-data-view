# StreamDataView

Easy work with data bytes like a pro.
For NodeJS and Browser.

A well tested and documented library for byte handling.
Written in TypeScript, compiled with declarations types.
The documentation also works great with JavaScript.

## Features

- View array buffer.
- Convert data types. (signed, unsigned, strings, utf-8)
- Read / write in a stream without worring about the byte offset.

## Use Case

- Read and parse binary files.
- Work with communication protocols like CAN.
- Use it for container files.
- Just display a buffer in pretty print.
- Simply convert between numbers, strings and byte arrays (buffer).
- Generate and parse your custom binary files for import and export.

## Documentation

I recommend to use TypeScript. This library has a documented declaration file.

[API Docs](docs)

### Installation

```bash
npm i stream-data-view
```

### Quick Guide

```js
// Create a stream and write some data.
let stream = new StreamDataView(8);
stream.setNextInt32(123456);
stream.setNextUint8(42);

// Get the byte data as pretty print.
console.log(stream.toByteString());

// Read any buffer.
let buffer = stream.getBuffer();
let read = new StreamDataView(buffer);

console.log('INT32 ', read.getNextInt32());
console.log('UINT8 ', read.getNextUint8());
```

```js
// Prints 'Awesome' to the browser console.
console.log(StreamDataView.fromByteString('41 77 65 73 6F 6D 65').toTextString());
```

In NodeJS e.g.

```js
const StreamDataView = require('stream-data-view').StreamDataView;
const stream = new StreamDataView(4);
stream.setNextUint32(0x12345678);
console.log(stream.toByteString());
```

You can also use a dynamic length of StreamDataView, just omit the argument.

```js
const stream = new StreamDataView();
stream.setNextString('Hello');
stream.setNextString(' ');
stream.setNextString('World');
// Buffer length is now: 11 byte.
console.log(stream.getBuffer());
```

You can also resize manually.

```js
const stream = new StreamDataView(1);
stream.setNextUint8(0x4c);
// Stream buffer length is: 1 byte "L"
stream.resize(3);
stream.setNextUint8(0x4f);
stream.setNextUint8(0x4c);
// Stream buffer length is: 3 byte "LOL"
console.log(stream.toTextString());
```

Crop buffer by offset position.

```js
const stream = new StreamDataView(42);
stream.setNextString('Hello World');
// Stream buffer length is: 42 "Hello World..."
stream.crop();
// Stream buffer length is: 11 "Hello World"
console.log(stream.toTextString());
```

## Dependencies

Just JavaScript. But expected ES6 (ES2015). Your browser should support DataView.

## Contribution

Any feedback like issues about bugs, feature-requests and project setup is welcome.

## Build

Install packages.

```bash
npm i
```

Build to dist.

```bash
npm run build
```

Format the source code.

```bash
npm run format
```

Run linter.

```bash
npm run lint
```

Run unit tests.

```bash
npm run test
```

## License

**Apache-2.0**

(C) Copyright 2018 Dominik-Andreas Geng
