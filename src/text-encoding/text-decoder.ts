/**
 * Simple polyfills for TextEncoder and TextDecoder.
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */

export class TextDecoder {
  private encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  public decode(data: Uint8Array) {
    const str = String.fromCharCode.apply(null, data);
    if (this.encoding === 'utf-8') {
      return decodeURIComponent(escape(str));
    }
    return str;
  }
}
