export class TextEncoder {
  private encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  public encode(data: string): Uint8Array {
    if (this.encoding === 'utf-8') {
      data = unescape(encodeURIComponent(data));
    }

    return new Uint8Array(data.split('').map(c => c.charCodeAt(0)));
  }
}
