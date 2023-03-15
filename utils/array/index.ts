export function toHexString(byteArray: Array<number>): string {
  return `0x${Array.from(byteArray, function (byte) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('')}`;
}
