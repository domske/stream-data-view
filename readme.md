# StreamDataView

Easy work with data bytes like a pro.

## Features

* View array buffer.
* Convert data types. (signed, unsigned, strings, utf-8)
* Read / write in a stream without worring about the byte offset.

## Use Case

* Read and parse binary files.
* Work with communication protocols like CAN.
* Use it for container files.
* Just display a buffer in pretty print.
* Simply convert between numbers, strings and byte arrays (buffer).

## Documentation

I recommend to use TypeScript. This library has a documented declaration file.
A complete documentation about the API is planned.

### Installation

```bash
npm i -S stream-data-view
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

## Dependencies

Just JavaScript. But expected ES6 (ES2015). Your browser should support DataView.

## Contribution

Any feedback like issues about bugs, feature-requests and project setup is welcome.

## License

**Apache-2.0**

(C) Copyright 2018 Dominik-Andreas Geng
