window.Gl = window.Gl || {};
window.Gl.mediaQuery = function(prefix, queries, speed) {
    var WIN = window
        , DOC = document
        , resizing = 0
        , addEventListener = WIN.addEventListener
        , respond = function(body) {
            body = DOC.documentElement;
            if(!body) return;
            var className = body.className
                , match = function(width, queries) {
                    if(width >= +queries[0].k) return 0;
                    for(var l = queries.length, q; q = +queries[--l].k;) {
                        if(width > q) return l;
                    }
                }(body.clientWidth || WIN.innerWidth || 0, (queries || []).sort(function(a, b) {
                    return +b.k - +a.k;
                }));
            if(match >= 0 && !~className.indexOf(prefix + queries[match].v)) body.className = className.replace(new RegExp("\\s*" + prefix + "\\d+\\s*", "g"), "") + " " + prefix + queries[match].v;
        }
    respond();
    setTimeout(function() {
        (addEventListener ? addEventListener : WIN.attachEvent)((addEventListener ? "" : "on") + "resize", function() {
            resizing = 1;
        });
    }, 0);
    !function() {
        if(resizing) {
            resizing = 0;
            respond();
        }
        setTimeout(arguments.callee, speed || 200)
    }();
}
