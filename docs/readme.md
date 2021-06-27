# API Documentation

**Version** `1.7.0`

## StreamDataView

[Github](https://github.com/domske/stream-data-view)

[NPM Package](https://www.npmjs.com/package/stream-data-view)

---

### **fromByteString** (str)

Creates a new instance of StreamDataView from a string.
e.g. from the string of toByteString()

| Param | Type   | Description                       |
| ----- | ------ | --------------------------------- |
| str   | string | Byte string like '48 65 6C 6C 6F' |

**Returns** `StreamDataView` New instance of StreamDataView.

---

### **fromTextString** (str, utf8)

Creates a new instance of StreamDataView from a string.

| Param | Type    | Description                              |
| ----- | ------- | ---------------------------------------- |
| str   | string  | Text string like 'Hello'                 |
| utf8  | boolean | _(optional)_ Handle the string as uft-8. |

**Returns** `StreamDataView` New instance of StreamDataView.

---

### **_constructor_** (buffer, bigEndian)

The constructor of this class.

| Param     | Type                 | Description                                                       |
| --------- | -------------------- | ----------------------------------------------------------------- |
| buffer    | ArrayBuffer , number | Array buffer.                                                     |
| bigEndian | boolean              | _(optional)_ Use big endian for numbers. (default: little endian) |

If buffer is omitted, the buffer length is dynamically. (initially `0` (zero))
See resize-method for more information. A omitted buffer sets the stream length mode to auto-resize.

---

### **getBuffer** ()

Returns the array buffer of the data view.

**Returns** `ArrayBuffer` The buffer of this data view.

---

### **skip** (length)

Moves the offset relative in a direction.

| Param  | Type   | Description                              |
| ------ | ------ | ---------------------------------------- |
| length | number | Positive or negative number byte length. |

**Returns** `void`

---

### **resetOffset** ()

Moves the offset to zero.

**Returns** `void`

---

### **getOffset** ()

Returns the current offset.

**Returns** `number` Offset

---

### **setOffset** (offset)

Sets a new offset to an absolute position.

| Param  | Type   | Description                   |
| ------ | ------ | ----------------------------- |
| offset | number | New offset (starts from zero) |

**Returns** `void`

---

### **getInt8** (offset)

Reads a 8-bit singed integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` INT8 value.

---

### **getUint8** (offset)

Reads a 8-bit unsinged integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` UINT8 value.

---

### **getNextInt8** ()

Reads the next 8-bit singed integer from current offset.

**Returns** `number` INT8 value.

---

### **getNextUint8** ()

Reads the next 8-bit unsinged integer from curret offset.

**Returns** `number` UINT8 value.

---

### **getInt16** (offset)

Reads a 16-bit singed integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` INT16 value.

---

### **getUint16** (offset)

Reads a 16-bit unsinged integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` UINT16 value.

---

### **getNextInt16** ()

Reads the next 16-bit singed integer.

**Returns** `number` INT16 value.

---

### **getNextUint16** ()

Reads the next 16-bit unsinged integer.

**Returns** `number` UINT16 value.

---

### **getInt32** (offset)

Reads a 32-bit singed integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` INT32 value.

---

### **getUint32** (offset)

Reads a 32-bit unsinged integer.

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` UINT32 value.

---

### **getNextInt32** ()

Reads the next 32-bit singed integer.

**Returns** `number` INT32 value.

---

### **getNextUint32** ()

Reads the next 32-bit unsinged integer.

**Returns** `number` UINT32 value.

---

### **getFloat32** (offset)

Reads a float. (32-bit, signed)

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` FLOAT value.

---

### **getFloat64** (offset)

Reads a double. (64-bit signed)

| Param  | Type   | Description    |
| ------ | ------ | -------------- |
| offset | number | Buffer offset. |

**Returns** `number` DOUBLE value.

---

### **getNextFloat32** ()

Reads the next float. (32-bit, signed)

**Returns** `number` FLOAT value.

---

### **getNextFloat64** ()

Reads the next double. (64-bit, signed)

**Returns** `number` DOUBLE value.

---

### **setInt8** (offset, value)

Writes a 8-bit signed integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setUint8** (offset, value)

Writes a 8-bit unsigned integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setNextInt8** (value)

Writes the next 8-bit signed integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setNextUint8** (value)

Writes the next 8-bit unsigned integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setInt16** (offset, value)

Writes a 16-bit signed integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setUint16** (offset, value)

Writes a 16-bit unsigned integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setNextInt16** (value)

Writes the next 16-bit signed integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setNextUint16** (value)

Writes the next 16-bit unsigned integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setInt32** (offset, value)

Writes a 32-bit signed integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setUint32** (offset, value)

Writes a 32-bit unsigned integer to the buffer.

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setNextInt32** (value)

Writes the next 32-bit signed integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setNextUint32** (value)

Writes the next 32-bit unsigned integer to the buffer.

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setFloat32** (offset, value)

Writes a float to the buffer. (32-bit, signed)

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setFloat64** (offset, value)

Writes a double to the buffer. (64-bit, signed)

| Param  | Type   | Description     |
| ------ | ------ | --------------- |
| offset | number | Buffer offset.  |
| value  | number | Value to write. |

**Returns** `void`

---

### **setNextFloat32** (value)

Writes the next float to the buffer. (32-bit, signed)

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **setNextFloat64** (value)

Writes the next double to the buffer. (64-bit, signed)

| Param | Type   | Description     |
| ----- | ------ | --------------- |
| value | number | Value to write. |

**Returns** `void`

---

### **getBytes** (offset, length)

Reads an array of bytes.

| Param  | Type   | Description                 |
| ------ | ------ | --------------------------- |
| offset | number | _(optional)_ Buffer offset. |
| length | number | _(optional)_ Buffer length. |

**Returns** `Uint8Array` Byte array like [42, 12, 255, 0]

---

### **getNextBytes** (length)

Reads the next array of bytes.

| Param  | Type   | Description                                             |
| ------ | ------ | ------------------------------------------------------- |
| length | number | _(optional)_ Buffer length. (default: remaining length) |

**Returns** `Uint8Array` Byte array like [42, 12, 255, 0]

---

### **setBytes** (offset, data)

Writes a byte array to the buffer.

| Param  | Type                                  | Description          |
| ------ | ------------------------------------- | -------------------- |
| offset | number                                | Buffer offset.       |
| data   | Uint8Array \| ArrayBuffer \| number[] | Byte array to write. |

**Returns** `void`

---

### **setNextBytes** (data)

Writes the next byte array to the buffer.

| Param | Type                                  | Description          |
| ----- | ------------------------------------- | -------------------- |
| data  | Uint8Array \| ArrayBuffer \| number[] | Byte array to write. |

**Returns** `void`

---

### **getString** (offset, length, utf8, untilTerminator)

Reads a string from the buffer.

| Param           | Type    | Description                                                 |
| --------------- | ------- | ----------------------------------------------------------- |
| offset          | number  | Buffer offset.                                              |
| length          | number  | Buffer length.                                              |
| utf8            | boolean | _(optional)_ Use utf-8 encoding. (default: ascii)           |
| untilTerminator | boolean | _(optional)_ Only returns the string until zero terminator. |

**Returns** `string` String as utf8 or ascii.

---

### **getNextString** (length, utf8, untilTerminator)

Returns a string from the buffer.

| Param           | Type    | Description                                                                                      |
| --------------- | ------- | ------------------------------------------------------------------------------------------------ |
| length          | number  | Buffer length.                                                                                   |
| utf8            | boolean | _(optional)_ Use utf-8 encoding. (default: ascii)                                                |
| untilTerminator | boolean | _(optional)_ Only returns the string until zero terminator. Does not affect the offset shifting. |

**Returns** `string` String as utf8 or ascii.

---

### **setString** (offset, data, utf8, length)

Sets a string to the buffer.

| Param  | Type    | Description                                         |
| ------ | ------- | --------------------------------------------------- |
| offset | number  | Buffer offset.                                      |
| data   | string  | Data to write.                                      |
| utf8   | boolean | _(optional)_ Use utf-8. (default: ascii)            |
| length | number  | _(optional)_ Optional fixed length write on buffer. |

**Returns** `number` The the length in byte of the string. Useful for dynamic length.

---

### **setNextString** (data, utf8, length)

Sets a string to the buffer.

| Param  | Type    | Description                                         |
| ------ | ------- | --------------------------------------------------- |
| data   | string  | Data to write.                                      |
| utf8   | boolean | _(optional)_ Use uff-8. (default: ascii)            |
| length | number  | _(optional)_ Optional fixed length write on buffer. |

**Returns** `void`

---

### **toByteString** ()

Converts the buffer to a pretty print byte string.

**Returns** `string` Byte string like '48 65 6C 6C 6F'.

---

### **toTextString** (utf8)

Converts the buffer to a text string.

| Param | Type    | Description                                            |
| ----- | ------- | ------------------------------------------------------ |
| utf8  | boolean | _(optional)_ Handle it as UTF8 string otherwise ASCII. |

**Returns** `string` Text string as utf8 or ascii.

---

### **fromByteString** (str)

Parses a string of bytes like '48 65 6C 6C 6F'.
Also see the method 'toByteString'.

| Param | Type   | Description  |
| ----- | ------ | ------------ |
| str   | string | Byte string. |

**Returns** `void`

---

### **resize** (length)

Resize the buffer size.
NOTE: It creates a new buffer.

| Param  | Type   | Description           |
| ------ | ------ | --------------------- |
| length | number | New length of stream. |

**Returns** `void`

---

### **crop** ()

Crops the stream at its current offset.
e.g. You have a stream of 10 bytes but only 4 bytes used. (offset at 4).
This method uses the integrated resize-method.

**Returns** `void`

---

### **getLength** ()

Returns the length in bytes of this stream buffer.

**Returns** `number`

---

### **clear** ()

Clears the buffer and resets the offset.

**Returns** `void`

---

_(c) 2018 - 2021 Dominik Geng_
