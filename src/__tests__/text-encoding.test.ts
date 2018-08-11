import { TextDecoder } from '../text-encoding/text-decoder';
import { TextEncoder } from '../text-encoding/text-encoder';

test('test utf-8', () => {
  let encoder = new TextEncoder('utf-8');
  let data = encoder.encode('Grün');

  expect(data.length).toBe(5);

  let decoder = new TextDecoder('utf-8');
  let text = decoder.decode(data);

  expect(text).toBe('Grün');
});
