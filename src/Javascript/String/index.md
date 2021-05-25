---
title: 字符串
path: /JavaScript/String/
---

```ts
const str1 = 'abcdefghijklm n';

console.log('str', str1);

// substr(start,length), 从下标为start开始，截取length位
const substrStr = str1.substr(5, 6);

console.log('substrStr', substrStr);
console.log('str', str1);

// string.substring(star,end) 从下标为start开始，截取到end，包含start不包括end； 不支持负数
const substringStr = str1.substring(2, 6);
console.log('substringStr', substringStr);
console.log('str', str1);

// 提取字符串
// String.slice(start,end) 从下标为start开始，截取到end，包含start不包括end；支持负数
const sliceStr = str1.slice(5, -4);
console.log('sliceStr', sliceStr);
console.log('str1', str1);

// 字符串分割成数组
// string.split(separator,limit) separator：字符串或正则表达式，limit：可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
const splitArr = str1.split(/\s/g);
console.log('splitArr', splitArr);
console.log('str1', str1);
```
