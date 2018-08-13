import { TextDecoder } from './text-encoding/text-decoder';
import { TextEncoder } from './text-encoding/text-encoder';

/**
 * Stream Date View
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */
export class StreamDataView {

  /**
   * Creates a new instance of StreamDataView.
   * e.g. from the string of toByteString()
   * @param str Byte string like '48 65 6C 6C 6F'
   */
  public static fromByteString(str: string): StreamDataView {
    const length = str.split(' ').length;
    const stream = new StreamDataView(length);
    stream.fromByteString(str);
    return stream;
  }

  private offset: number;
  private view: DataView;
  private littleEndian: boolean;

  /**
   * A buffer walker.
   * @param buffer Array buffer.
   * @param bigEndian Use big endian for numbers. (default: little endian)
   */
  constructor(buffer: ArrayBuffer | number, bigEndian?: boolean) {
    this.offset = 0;
    if (typeof buffer === 'number') {
      buffer = new ArrayBuffer(buffer);
    }

    this.view = new DataView(buffer);
    this.littleEndian = !bigEndian;
  }

  /**
   * Returns the array buffer of the data view.
   * @return The buffer of this data view.
   */
  public getBuffer(): ArrayBuffer {
    return this.view.buffer;
  }

  /**
   * Moves the offset relative in a direction.
   * @param length Positive or negative number byte length.
   */
  public skip(length: number): void {
    this.offset += length;
  }

  /**
   * Moves the offset to zero.
   */
  public resetOffset(): void {
    this.offset = 0;
  }

  /**
   * Returns the current offset.
   * @return Offset
   */
  public getOffset(): number {
    return this.offset;
  }

  /**
   * Sets a new offset to an absolute position.
   * @param offset New offset (starts from zero)
   */
  public setOffset(offset: number): void {
    this.offset = offset;
  }

  /**
   * Reads a 8-bit singed integer.
   * @param offset Buffer offset.
   */
  public getInt8(offset: number): number {
    return this.view.getInt8(offset);
  }

  /**
   * Reads a 8-bit unsinged integer.
   * @param offset Buffer offset.
   */
  public getUint8(offset: number): number {
    return this.view.getUint8(offset);
  }

  /**
   * Reads the next 8-bit singed integer from current offset.
   */
  public getNextInt8(): number {
    const value = this.getInt8(this.offset);
    this.offset += 1;
    return value;
  }

  /**
   * Reads the next 8-bit unsinged integer from curret offset.
   */
  public getNextUint8(): number {
    const value = this.getUint8(this.offset);
    this.offset += 1;
    return value;
  }

  /**
   * Reads a 16-bit singed integer.
   * @param offset Buffer offset.
   */
  public getInt16(offset: number): number {
    return this.view.getInt16(offset, this.littleEndian);
  }

  /**
   * Reads a 16-bit unsinged integer.
   * @param offset Buffer offset.
   */
  public getUint16(offset: number): number {
    return this.view.getUint16(offset, this.littleEndian);
  }

  /**
   * Reads the next 16-bit singed integer.
   */
  public getNextInt16(): number {
    const value = this.getInt16(this.offset);
    this.offset += 2;
    return value;
  }

  /**
   * Reads the next 16-bit unsinged integer.
   */
  public getNextUint16(): number {
    const value = this.getUint16(this.offset);
    this.offset += 2;
    return value;
  }

  /**
   * Reads a 32-bit singed integer.
   * @param offset Buffer offset.
   */
  public getInt32(offset: number): number {
    return this.view.getInt32(offset, this.littleEndian);
  }

  /**
   * Reads a 32-bit unsinged integer.
   * @param offset Buffer offset.
   */
  public getUint32(offset: number): number {
    return this.view.getUint32(offset, this.littleEndian);
  }

  /**
   * Reads the next 32-bit singed integer.
   */
  public getNextInt32(): number {
    const value = this.getInt32(this.offset);
    this.offset += 4;
    return value;
  }

  /**
   * Reads the next 32-bit unsinged integer.
   */
  public getNextUint32(): number {
    const value = this.getUint32(this.offset);
    this.offset += 4;
    return value;
  }

  /**
   * Reads a float. (32-bit, signed)
   * @param offset Buffer offset.
   */
  public getFloat32(offset: number): number {
    return this.view.getFloat32(offset, this.littleEndian);
  }

  /**
   * Reads a double. (64-bit signed)
   * @param offset Buffer offset.
   */
  public getFloat64(offset: number): number {
    return this.view.getFloat64(offset, this.littleEndian);
  }

  /**
   * Reads the next float. (32-bit, signed)
   */
  public getNextFloat32(): number {
    const value = this.getFloat32(this.offset);
    this.offset += 4;
    return value;
  }

  /**
   * Reads the next double. (64-bit, signed)
   */
  public getNextFloat64(): number {
    const value = this.getFloat64(this.offset);
    this.offset += 8;
    return value;
  }

  /**
   * Writes a 8-bit signed integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setInt8(offset: number, value: number): void {
    this.view.setInt8(offset, value);
  }

  /**
   * Writes a 8-bit unsigned integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setUint8(offset: number, value: number): void {
    this.view.setUint8(offset, value);
  }

  /**
   * Writes the next 8-bit signed integer to the buffer.
   * @param value Value to write.
   */
  public setNextInt8(value: number): void {
    this.setInt8(this.offset, value);
    this.offset += 1;
  }

  /**
   * Writes the next 8-bit unsigned integer to the buffer.
   * @param value Value to write.
   */
  public setNextUint8(value: number): void {
    this.setUint8(this.offset, value);
    this.offset += 1;
  }

  /**
   * Writes a 16-bit signed integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setInt16(offset: number, value: number): void {
    this.view.setInt16(offset, value, this.littleEndian);
  }

  /**
   * Writes a 16-bit unsigned integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setUint16(offset: number, value: number): void {
    this.view.setUint16(offset, value, this.littleEndian);
  }

  /**
   * Writes the next 16-bit signed integer to the buffer.
   * @param value Value to write.
   */
  public setNextInt16(value: number): void {
    this.setInt16(this.offset, value);
    this.offset += 2;
  }

  /**
   * Writes the next 16-bit unsigned integer to the buffer.
   * @param value Value to write.
   */
  public setNextUint16(value: number): void {
    this.setUint16(this.offset, value);
    this.offset += 2;
  }

  /**
   * Writes a 32-bit signed integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setInt32(offset: number, value: number): void {
    this.view.setInt32(offset, value, this.littleEndian);
  }

  /**
   * Writes a 32-bit unsigned integer to the buffer.
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setUint32(offset: number, value: number): void {
    this.view.setUint32(offset, value, this.littleEndian);
  }

  /**
   * Writes the next 32-bit signed integer to the buffer.
   * @param value Value to write.
   */
  public setNextInt32(value: number): void {
    this.setInt32(this.offset, value);
    this.offset += 4;
  }

  /**
   * Writes the next 32-bit unsigned integer to the buffer.
   * @param value Value to write.
   */
  public setNextUint32(value: number): void {
    this.setUint32(this.offset, value);
    this.offset += 4;
  }

  /**
   * Writes a float to the buffer. (32-bit, signed)
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setFloat32(offset: number, value: number): void {
    this.view.setFloat32(offset, value, this.littleEndian);
  }

  /**
   * Writes a double to the buffer. (64-bit, signed)
   * @param offset Buffer offset.
   * @param value Value to write.
   */
  public setFloat64(offset: number, value: number): void {
    this.view.setFloat64(offset, value, this.littleEndian);
  }

  /**
   * Writes the next float to the buffer. (32-bit, signed)
   * @param value Value to write.
   */
  public setNextFloat32(value: number): void {
    this.setFloat32(this.offset, value);
    this.offset += 4;
  }

  /**
   * Writes the next double to the buffer. (64-bit, signed)
   * @param value Value to write.
   */
  public setNextFloat64(value: number): void {
    this.setFloat64(this.offset, value);
    this.offset += 8;
  }

  /**
   * Reads an array of bytes.
   * @param offset Buffer offset.
   * @param length Buffer length.
   */
  public getBytes(offset: number, length?: number) {
    length = length || this.view.buffer.byteLength - this.offset;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < bytes.byteLength; i++) {
      bytes[i] = this.getUint8(offset + i);
    }
    return bytes;
  }

  /**
   * Reads the next array of bytes.
   * @param length Buffer length. (default: remaining length)
   */
  public getNextBytes(length?: number) {
    const value = this.getBytes(this.offset, length);
    this.offset += length;
    return value;
  }

  /**
   * Writes a byte array to the buffer.
   * @param offset Buffer offset.
   * @param data Byte array to write.
   */
  public setBytes(offset: number, data: Uint8Array) {
    for (let i = 0; i < data.byteLength; i++) {
      this.setUint8(offset + i, data[i]);
    }
  }

  /**
   * Writes the next byte array to the buffer.
   * @param data Byte array to write.
   */
  public setNextBytes(data: Uint8Array) {
    this.setBytes(this.offset, data);
    this.offset += data.byteLength;
  }

  /**
   * Reads a string from the buffer.
   * @param offset Buffer offset.
   * @param length Buffer length.
   * @param utf8 Use utf-8 encoding. (default: ascii)
   * @param untilTerminator Only returns the string until zero terminator.
   */
  public getString(offset: number, length: number, utf8?: boolean, untilTerminator?: boolean): string {
    let bytes = this.getBytes(offset, length);

    if (untilTerminator) {
      const terminatorPosition = bytes.indexOf(0);
      if (terminatorPosition >= 0) {
        bytes = bytes.slice(0, terminatorPosition);
      }
    }

    if (utf8) {
      return new TextDecoder('utf-8').decode(bytes);
    }

    return new TextDecoder('ascii').decode(bytes);
  }

  /**
   * Returns a string from the buffer.
   * @param length Buffer length.
   * @param utf8 Use utf-8 encoding. (default: ascii)
   * @param untilTerminator Only returns the string until zero terminator. Does not affect the offset shifting.
   */
  public getNextString(length: number, utf8?: boolean, untilTerminator?: boolean): string {
    const value = this.getString(this.offset, length, utf8, untilTerminator);
    this.offset += length;
    return value;
  }

  /**
   * Sets a string to the buffer.
   * @param offset Buffer offset.
   * @param data Data to write.
   * @param utf8 Use utf-8. (default: ascii)
   */
  public setString(offset: number, data: string, utf8?: boolean): number {
    let bytes: Uint8Array;

    if (utf8) {
      bytes = new TextEncoder('utf-8').encode(data);
    } else {
      bytes = new TextEncoder('ascii').encode(data);
    }

    for (let i = 0; i < bytes.byteLength; i++) {
      this.view.setUint8(offset + i, bytes[i] || 0);
    }

    return bytes.byteLength;
  }

  /**
   * Sets a string to the buffer.
   * @param data Data to write.
   * @param utf8 Use uff-8. (default: ascii)
   */
  public setNextString(data: string, utf8?: boolean): void {
    this.offset += this.setString(this.offset, data, utf8);
  }

  /**
   * Converts the buffer to a pretty print byte string.
   * Like '48 65 6C 6C 6F'
   */
  public toByteString() {
    return Array.from(new Uint8Array(this.getBuffer()))
      .map(b => ('00' + b.toString(16)).slice(-2))
      .join(' ')
      .toUpperCase();
  }

  /**
   * Converts the buffer to a text string.
   * @param utf8 Handle it as UTF8 string otherwise ASCII.
   */
  public toTextString(utf8?: boolean) {
    return this.getString(0, this.view.byteLength, utf8);
  }

  /**
   * Parses a string of bytes like '48 65 6C 6C 6F'.
   * Also see the method 'toByteString'.
   * @param str Byte string.
   */
  public fromByteString(str: string) {
    const byteArray = str.split(' ');
    const buffer = new ArrayBuffer(byteArray.length);
    this.view = new DataView(buffer);

    this.setNextBytes(new Uint8Array(byteArray.map(b => parseInt(b, 16))));
    this.resetOffset();
  }
}
