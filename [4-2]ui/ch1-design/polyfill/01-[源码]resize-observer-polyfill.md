# [源码]resize-observer-polyfill

- @code https://github.com/que-etc/resize-observer-polyfill

```js
import ResizeObserver from 'resize-observer-polyfill';
const ro = new ResizeObserver((entries, observer) => {
    for (const entry of entries) {
        const {left, top, width, height} = entry.contentRect;
        console.log('Element:', entry.target);
        console.log(`Element's size: ${ width }px x ${ height }px`);
        console.log(`Element's paddings: ${ top }px ; ${ left }px`);
    }
});
ro.observe(document.body);
```

