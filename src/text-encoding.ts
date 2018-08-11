/**
 * Simple polyfills for TextEncoder and TextDecoder.
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */

export class TextEncoder {
  encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  encode(data: string) {
    if (this.encoding == 'utf-8') {
      data = unescape(encodeURIComponent(data));
    }

    return new Uint8Array(data.split('').map(c => c.charCodeAt(0)));
  }
}

export class TextDecoder {
  encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  decode(data: Uint8Array) {
    let str = String.fromCharCode.apply(null, data);
    if (this.encoding == 'utf-8') {
      return decodeURIComponent(escape(str));
    }
    return str;
  }
}
