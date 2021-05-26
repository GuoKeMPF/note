---
title: 字符串
order: 2
toc: menu
---

<!-- path: /javaScript/strings/ -->

## substr

`string.substr(start,length)`

start:开始下标

end: 截取长度

包含 start 不包括 end； 不支持负数

```ts
const str1 = 'abcdefghijklm n';
const substrStr = str.substr(5, 6);
console.log('substrStr', substrStr);
console.log('str', str);
```

## substring

`string.substring(star,end)`

start:开始下标

end: 结束下标

包含 start 不包括 end； 不支持负数

```ts
const str1 = 'abcdefghijklm n';
const substringStr = str.substring(2, 6);
console.log('substringStr', substringStr);
console.log('str', str);
```

## slice

`string.slice(start,end)` 字符串提取

start:开始下标,截取到 end

end: 结束下标

包含 start 不包括 end；支持负数

```ts
const sliceStr = str.slice(5, -4);
console.log('sliceStr', sliceStr);
console.log('str', str);
```

## split

`string.split(separator,limit)`字符串分割

separator：字符串或正则表达式，

limit：可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

```ts
const splitArr = str.split(/\s/g);
console.log('splitArr', splitArr);
console.log('str', str);
```
