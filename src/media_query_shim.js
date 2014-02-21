window.Gl = window.Gl || {};
window.Gl.mediaQuery = function(prefix, queries, speed) {
    var WIN = window
        , DOC = document
        , resizing = 0
        , addEventListener = WIN.addEventListener
        , respond = function(body) {
            body = DOC.body || DOC.documentElement;
            if(!body) return;
            var className = body.className
                , match = function(width, queries) {
                    if(width >= +queries[0]) return queries[0];
                    for(var l = queries.length, q; q = +queries[--l];) {
                        if(width < q) return q;
                    }
                }(body.clientWidth || WIN.innerWidth || 0, (queries || "").split(",").sort(function(a, b) {
                    return +b - +a;
                }));
            if(match && !~className.indexOf(prefix + match)) body.className = className.replace(new RegExp("\\s*" + prefix + "\\d+\\s*", "g"), "") + " " + prefix + match;
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