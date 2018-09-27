import { StreamDataView } from '../stream';

// TODO Complete the tests / test more.

test('create stream with length', () => {
  let stream = new StreamDataView(4);
  expect(stream.getBuffer().byteLength).toBe(4);
});

test('create stream with buffer', () => {
  let buffer = new ArrayBuffer(4);
  let stream = new StreamDataView(buffer);
  expect(stream.getBuffer().byteLength).toBe(4);
});

test('utf-8', () => {
  let stream = StreamDataView.fromByteString('47 72 C3 BC 6E');
  let text = stream.toTextString(true);

  expect(text).toBe('Grün');
});

test('string fixed length', () => {
  let stream = new StreamDataView(12);

  // Only store 'Hello '
  stream.setNextString('Hello World', false, 6);

  // Store 'Stream'
  stream.setNextString('Stream', false, 6);

  expect(stream.toTextString(false)).toBe('Hello Stream');
  expect(stream.toByteString()).toBe('48 65 6C 6C 6F 20 53 74 72 65 61 6D');
});

test('readme - quick guide 1', () => {
  // Create a stream and write some data.
  let stream = new StreamDataView(8);
  stream.setNextInt32(123456);
  stream.setNextUint8(42);

  // Get the byte data as pretty print.
  expect(stream.toByteString()).toBe('40 E2 01 00 2A 00 00 00');

  // Read any buffer.
  let buffer = stream.getBuffer();
  let read = new StreamDataView(buffer);

  expect(read.getNextInt32()).toBe(123456);
  expect(read.getNextUint8()).toBe(42);
});

test('readme - quick guide 2', () => {
  let stream = StreamDataView.fromByteString('41 77 65 73 6F 6D 65');
  let text = stream.toTextString();

  expect(text).toBe('Awesome');
});
