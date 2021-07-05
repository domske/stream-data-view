import { TextDecoder } from './text-decoder';
import { TextEncoder } from './text-encoder';

test('test utf-8', () => {
  const encoder = new TextEncoder('utf-8');
  const data = encoder.encode('Grün');

  expect(data.length).toBe(5);

  const decoder = new TextDecoder('utf-8');
  const text = decoder.decode(data);

  expect(text).toBe('Grün');
});
