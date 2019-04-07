export class TextDecoder {
  private encoding: string;

  constructor(encoding?: string) {
    this.encoding = encoding || 'utf-8';
  }

  public decode(data: Uint8Array) {
    const str = String.fromCharCode.apply(null, Array.from(data));

    if (this.encoding === 'utf-8') {
      return decodeURIComponent(escape(str));
    }
    return str;
  }
}
