import { StreamDataView } from '../stream';

// TODO Complete the tests / test more.

test('create stream with length', () => {
  const stream = new StreamDataView(4);
  expect(stream.getBuffer().byteLength).toBe(4);
});

test('create stream with buffer', () => {
  const buffer = new ArrayBuffer(4);
  const stream = new StreamDataView(buffer);
  expect(stream.getBuffer().byteLength).toBe(4);
});

test('utf-8', () => {
  const stream = StreamDataView.fromByteString('47 72 C3 BC 6E');
  const text = stream.toTextString(true);

  expect(text).toBe('Grün');
});

test('string fixed length', () => {
  const stream = new StreamDataView(12);

  // Only store 'Hello '
  stream.setNextString('Hello World', false, 6);

  // Store 'Stream'
  stream.setNextString('Stream', false, 6);

  expect(stream.toTextString(false)).toBe('Hello Stream');
  expect(stream.toByteString()).toBe('48 65 6C 6C 6F 20 53 74 72 65 61 6D');
});

test('readme - quick guide 1', () => {
  // Create a stream and write some data.
  const stream = new StreamDataView(8);
  stream.setNextInt32(123456);
  stream.setNextUint8(42);

  // Get the byte data as pretty print.
  expect(stream.toByteString()).toBe('40 E2 01 00 2A 00 00 00');

  // Read any buffer.
  const buffer = stream.getBuffer();
  const read = new StreamDataView(buffer);

  expect(read.getNextInt32()).toBe(123456);
  expect(read.getNextUint8()).toBe(42);
});

test('readme - quick guide 2', () => {
  const stream = StreamDataView.fromByteString('41 77 65 73 6F 6D 65');
  const text = stream.toTextString();

  expect(text).toBe('Awesome');
});

test('dynamic length', () => {
  const stream = new StreamDataView();
  stream.setNextString('Hello');
  stream.setNextString(' ');
  stream.setNextString('World');

  const buffer = stream.getBuffer();
  const text = stream.toTextString();

  expect(buffer.byteLength).toBe(11);
  expect(text).toBe('Hello World');
});

test('dynamic length 2', () => {
  const stream = new StreamDataView();
  const array = new Uint8Array([0x10, 0x20, 0x30]);
  stream.setNextBytes(array);

  const buffer = stream.getBuffer();
  expect(buffer.byteLength).toBe(3);

  const arr = stream.getBytes(0);
  expect(arr.byteLength).toBe(3);

  expect(Array.from(arr)).toEqual([0x10, 0x20, 0x30]);
});

test('resize', () => {
  const stream = new StreamDataView(1);
  stream.setNextUint8(0x4c);
  expect(stream.getBuffer().byteLength).toBe(1);
  stream.resize(3);
  stream.setNextUint8(0x4f);
  stream.setNextUint8(0x4c);
  expect(stream.getBuffer().byteLength).toBe(3);
  expect(stream.toTextString()).toBe('LOL');
});

test('crop', () => {
  const stream = new StreamDataView(42);
  stream.setNextString('Hello World');
  expect(stream.getBuffer().byteLength).toBe(42);
  stream.crop();
  expect(stream.getBuffer().byteLength).toBe(11);
  expect(stream.toTextString()).toBe('Hello World');
});

test('getLength', () => {
  const stream = new StreamDataView();
  stream.setNextString('I like this.');
  expect(stream.getLength()).toBe(12);
});

test('getBytes no offset.', () => {
  const stream = new StreamDataView();
  stream.setNextString('Bytes from index 0.');
  expect(stream.getBytes().byteLength).toBe(19);
});

test('setBytes with ArrayBuffer.', () => {
  const buffer = new Uint32Array([42]).buffer;
  const stream = new StreamDataView();
  stream.setNextBytes(buffer);
  expect(stream.getUint32(0)).toBe(42);
});

test('clear', () => {
  const stream = new StreamDataView(10);
  stream.setNextInt16(-27);
  expect(stream.getInt16(0)).toBe(-27);
  stream.clear();
  expect(stream.getInt16(0)).toBe(0);
});
