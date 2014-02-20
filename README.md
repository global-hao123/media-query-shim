# IE(6,7,8) 下 media query 兼容方案

## 方案一

保留原生 media query 写法【性能最高，代码量倍增】

### USAGE

#### SETUP1

准备两类 css 兼容方法：

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

在 body 节点后，粘贴代码：

```html

<!-- <body> -->
<!--[if lte IE 8]>
<script>
!function(n,e,t){var i=window,r=document,c=0,o="addEventListener",u=function(t){t=r.body||r.documentElement;if(!t)return;var c=t.className,o=function(n,e){if(n>=+e[0])return e[0];for(var t=e.length,i;i=+e[--t];){if(n<i)return i}}(t.clientWidth||i.innerWidth||0,(e||"").split(",").sort(function(n,e){return+e-+n}));if(o&&!~c.indexOf(n+o))t.className=c.replace(new RegExp("\\s*"+n+"\\d+\\s*","g"),"")+" "+n+o};u();i[o||"attachEvent"]((i[o]?"":"on")+"resize",function(){c=1},!1);!function(){if(c){c=0;u()}setTimeout(arguments.callee,t||200)}()}(

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

在 body 节点后，粘贴代码：

```html

<!-- <body> -->
<script>
!function(n,e,t){var i=window,r=document,c=0,o="addEventListener",u=function(t){t=r.body||r.documentElement;if(!t)return;var c=t.className,o=function(n,e){if(n>=+e[0])return e[0];for(var t=e.length,i;i=+e[--t];){if(n<i)return i}}(t.clientWidth||i.innerWidth||0,(e||"").split(",").sort(function(n,e){return+e-+n}));if(o&&!~c.indexOf(n+o))t.className=c.replace(new RegExp("\\s*"+n+"\\d+\\s*","g"),"")+" "+n+o};u();i[o||"attachEvent"]((i[o]?"":"on")+"resize",function(){c=1},!1);!function(){if(c){c=0;u()}setTimeout(arguments.callee,t||200)}()}(

    // the prefix of class name
    "w"

    // queries list
    , "1130,960,1200"

    // switch speed, default: 200
    // , 200
);
</script>

```

注意配置参数