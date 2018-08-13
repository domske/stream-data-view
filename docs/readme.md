# Documentation `1.1.1`

## `class` **StreamDataView**

### **constructor**(buffer, bigEndian)

| Param     | Type                   | Description                                                     |
| --------- | ---------------------- | --------------------------------------------------------------- |
| buffer    | `ArrayBuffer | number` | Buffer or size for a new buffer.                                |
| bigEndian | `boolean`              | (optional) Use big endian for numbers. (default: little endian) |

### `static method` **fromByteString**(str)

Creates a new instance of StreamDataView.
e.g. from the string of toByteString()

| Param  | Type             | Description                       |
| ------ | ---------------- | --------------------------------- |
| str    | `string`         | Byte string like '48 65 6C 6C 6F' |
| return | `StreamDataView` | New instance.                     |

### `method` **getBuffer**()

Returns the array buffer of the data view.

| Param  | Type          | Description                   |
| ------ | ------------- | ----------------------------- |
| return | `ArrayBuffer` | The buffer of this data view. |

### `method` **skip**(length)

Moves the offset relative in a direction.

| Param  | Type     | Description                              |
| ------ | -------- | ---------------------------------------- |
| length | `number` | Positive or negative number byte length. |

### `method` **resetOffset**()

Moves the offset to zero.

### `method` **getOffset**()

Returns the current offset.

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| return | `number` | Offset      |

### `method` **setOffset**(offset)

Sets a new offset to an absolute position.

| Param  | Type     | Description                   |
| ------ | -------- | ----------------------------- |
| offset | `number` | New offset (starts from zero) |

### `method` **getInt8**(offset)

Reads a 8-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | INT8 value.    |

### `method` **getUint8**(offset)

Reads a 8-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | UINT8 value.   |

### `method` **getNextInt8**()

Reads the next 8-bit singed integer from current offset.

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| return | `number` | INT8 value. |

### `method` **getNextUint8**()

Reads the next 8-bit unsinged integer from current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| return | `number` | UINT8 value. |

### `method` **getInt16**(offset)

Reads a 16-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | INT16 value.   |

### `method` **getUint16**(offset)

Reads a 16-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | UINT16 value.  |

### `method` **getNextInt16**()

Reads the next 16-bit singed integer from current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| return | `number` | INT16 value. |

### `method` **getNextUint16**()

Reads the next 16-bit unsinged integer from current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| return | `number` | UINT16 value. |

### `method` **getInt32**(offset)

Reads a 32-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | INT32 value.   |

### `method` **getUint32**(offset)

Reads a 32-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | UINT32 value.  |

### `method` **getNextInt32**()

Reads the next 32-bit singed integer from current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| return | `number` | INT32 value. |

### `method` **getNextUint32**()

Reads the next 32-bit unsinged integer from current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| return | `number` | UINT32 value. |

### `method` **getFloat32**(offset)

Reads a float. (32-bit, signed)

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | FLOAT value.  |

### `method` **getFloat64**()

Reads a double. (64-bit signed)

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| return | `number` | DOUBLE value.  |

### `method` **getNextFloat32**()

Reads the next float. (32-bit, signed) from current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| return | `number` | FLOAT value. |

### `method` **getNextFloat64**()

Reads the next double. (32-bit, signed) from current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| return | `number` | DOUBLE value. |

### `method` **setInt8**(offset, value)

Writes a 8-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | INT8 value.    |

### `method` **setUint8**(offset, value)

Writes a 8-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | UINT8 value.   |

### `method` **setNextInt8**(value)

Writes the next 8-bit singed integer to current offset.

| Param  | Type     | Description |
| ------ | -------- | ----------- |
| value  | `number` | INT8 value. |

### `method` **setNextUint8**(value)

Writes the next 8-bit unsinged integer to current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| value  | `number` | UINT8 value. |

### `method` **setInt16**(offset, value)

Writes a 16-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | INT16 value.   |

### `method` **setUint16**(offset, value)

Writes a 16-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | UINT16 value.  |

### `method` **setNextInt16**(value)

Writes the next 16-bit singed integer to current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| value  | `number` | INT16 value. |

### `method` **setNextUint16**(value)

Writes the next 16-bit unsinged integer to current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| value  | `number` | UINT16 value. |

### `method` **setInt32**(offset, value)

Writes a 32-bit singed integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | INT32 value.   |

### `method` **setUint32**(offset, value)

Writes a 32-bit unsinged integer.

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | UINT32 value.  |

### `method` **setNextInt32**(value)

Writes the next 32-bit singed integer to current offset.

| Param  | Type     | Description  |
| ------ | -------- | ------------ |
| value  | `number` | INT32 value. |

### `method` **setNextUint32**(value)

Writes the next 32-bit unsinged integer to current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| value  | `number` | UINT32 value. |

### `method` **setFloat32**(offset, value)

Writes a float. (32-bit, signed)

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | FLOAT value.  |

### `method` **setFloat64**(, value)

Writes a double. (64-bit signed)

| Param  | Type     | Description    |
| ------ | -------- | -------------- |
| offset | `number` | Buffer offset. |
| value  | `number` | DOUBLE value.  |

### `method` **setNextFloat32**(value)

Writes the next float. (32-bit, signed) to current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| value  | `number` | FLOAT value. |

### `method` **setNextFloat64**(value)

Writes the next double. (32-bit, signed) to current offset.

| Param  | Type     | Description   |
| ------ | -------- | ------------- |
| value  | `number` | DOUBLE value. |

### `method` **getBytes**(offset, length)

Reads an array of bytes.

| Param  | Type     | Description                            |
| ------ | -------- | -------------------------------------- |
| offset | `number` | Offset.                                |
| length | `number` | (optional) Length or remaining length. |

### `method` **getNextBytes**(length)

Reads the next array of bytes from current offset.

| Param  | Type     | Description                            |
| ------ | -------- | -------------------------------------- |
| length | `number` | (optional) Length or remaining length. |

### `method` **setBytes**(offset, data)

Writes an array of bytes.

| Param  | Type         | Description          |
| ------ | ------------ | -------------------- |
| offset | `number`     | Offset.              |
| data   | `Uint8Array` | Byte array to write. |

### `method` **setNextBytes**(length)

Writes an array of bytes to current offset.

| Param  | Type         | Description          |
| ------ | ------------ | -------------------- |
| data   | `Uint8Array` | Byte array to write. |

### `method` **getString**(offset, length, utf8, untilTerminator)

Reads an array of bytes.

| Param           | Type      | Description                                               |
| --------------- | --------- | --------------------------------------------------------- |
| offset          | `number`  | Offset.                                                   |
| length          | `number`  | Length.                                                   |
| utf8            | `number`  | (optional) Use utf-8 encoding. (default: ascii)           |
| untilTerminator | `boolean` | (optional) Only returns the string until zero terminator. |
| return          | `string`  | Value                                                     |

### `method` **getNextString**(length, utf8, untilTerminator)

Reads an array of bytes from the current offset.

| Param           | Type      | Description                                               |
| --------------- | --------- | --------------------------------------------------------- |
| length          | `number`  | Length.                                                   |
| utf8            | `number`  | (optional) Use utf-8 encoding. (default: ascii)           |
| untilTerminator | `boolean` | (optional) Only returns the string until zero terminator. |
| return          | `string`  | Value                                                     |

### `method` **setString**(offset, data, utf8, untilTerminator)

Writes an array of bytes.

| Param  | Type      | Description                                     |
| ------ | --------- | ----------------------------------------------- |
| offset | `number`  | Offset.                                         |
| data   | `string`  | Data to write.                                  |
| utf8   | `boolean` | (optional) Use utf-8 encoding. (default: ascii) |

### `method` **setNextString**(data, utf8)

Writes an array of bytes to the current offset.

| Param           | Type      | Description                                     |
| ----------------| --------- | ----------------------------------------------- |
| data            | `string`  | Data to write.                                  |
| utf8            | `boolean` | (optional) Use utf-8 encoding. (default: ascii) |

### `method` **toByteString**()

Converts the buffer to a pretty print byte string. Like '48 65 6C 6C 6F'

| Param  | Type      | Description                |
| -------| --------- | -------------------------- |
| return | `string`  | The buffer as byte string. |

### `method` **toTextString**()

Converts the buffer to a text string.

| Param  | Type      | Description                               |
| ------ | --------- | ----------------------------------------- |
| utf8   | `boolean` | Handle it as UTF8 string otherwise ASCII. |
| return | `string`  | Text value.                               |


### `method` **fromByteString**(str)

Parses a string of bytes like '48 65 6C 6C 6F'.
Also see the method 'toByteString'.

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| str   | `string` | Byte string. |

---

*Errors and omissions excepted*
