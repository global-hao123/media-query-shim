!function(n,e,t){var i=window,r=document,c=0,o="addEventListener",u=function(t){t=r.body||r.documentElement;if(!t)return;var c=t.className,o=function(n,e){if(n>=+e[0])return e[0];for(var t=e.length,i;i=+e[--t];){if(n<i)return i}}(t.clientWidth||i.innerWidth||0,(e||"").split(",").sort(function(n,e){return+e-+n}));if(o&&!~c.indexOf(n+o))t.className=c.replace(new RegExp("\\s*"+n+"\\d+\\s*","g"),"")+" "+n+o};u();i[o||"attachEvent"]((i[o]?"":"on")+"resize",function(){c=1},!1);!function(){if(c){c=0;u()}setTimeout(arguments.callee,t||200)}()}(
    // the prefix of class name
    "w"

    // queries list
    , "1130,960,1200"

    // switch speed, default: 200
    // , 200
);