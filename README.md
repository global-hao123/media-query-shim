# IE(6,7,8) 下 media query 兼容方案

## 方案一

保留原生 media query 写法【性能最高，代码量和维护成本倍增】

### USAGE

#### SETUP1

准备两类 css 兼容方法，按浏览器加载：

```css
/*
>1130
 */
@media (min-width: 1130px) {
    .t960{ display: none;}
    .t1130{ display: none;}
    .t1200{ display: block;}
}
.w1200 .t960{ display: none;}
.w1200 .t1130{ display: none;}
.w1200 .t1200{ display: block;}

/*
960~1130
 */
@media (max-width: 1130px) {
    .t960{ display: none;}
    .t1130{ display: block;}
    .t1200{ display: none;}
}
.w1130 .t960{ display: none;}
.w1130 .t1130{ display: block;}
.w1130 .t1200{ display: none;}
```

#### SETUP2

初始化应及早完成，避免首次宽度判断造成闪屏

```html

<!--[if lte IE 8]>
<script src="../dist/media_query_shim.js"></script>
<script>
Gl.mediaQuery(
    // the prefix of class name
    "w"

    // queries list
    , "1130,960,1200"

    // switch speed, default: 200
    // , 200
);
</script>
<![endif]-->

```

注意配置参数

## 方案二

放弃原生 media query 写法，以类名作为 hook【代码量最少，性能已经优化到最佳，如果还担心 resize 性能，可以调整 speed 参数】

### USAGE

#### SETUP1

css：

```css
/*
>1130
 */
.w1200 .t960{ display: none;}
.w1200 .t1130{ display: none;}
.w1200 .t1200{ display: block;}

/*
960~1130
 */
.w1130 .t960{ display: none;}
.w1130 .t1130{ display: block;}
.w1130 .t1200{ display: none;}
```

#### SETUP2

配置初始化参数

```javascript
Gl.mediaQuery(
    // the prefix of class name
    "w"

    // queries list
    , "1130,960,1200"

    // switch speed, default: 200
    // , 200
);
```