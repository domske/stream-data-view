/**
 * Simple polyfills for TextEncoder.
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */

export class TextEncoder {
  private encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  public encode(data: string) {
    if (this.encoding === 'utf-8') {
      data = unescape(encodeURIComponent(data));
    }

    return new Uint8Array(data.split('').map(c => c.charCodeAt(0)));
  }
}
