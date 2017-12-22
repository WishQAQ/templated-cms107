﻿/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a, b) {

    function cy(a) {
        return f.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
            d = f("<" + a + ">").appendTo(b),
            e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0),
                b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document,
                cl.write((f.support.boxModel ? "<!doctype html>": "") + "<html><body>"),
                cl.close();
                d = cl.createElement(a),
                cl.body.appendChild(d),
                e = f.css(d, "display"),
                b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }
    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)),
        function() {
            c[this] = a
        });
        return c
    }
    function cs() {
        cq = b
    }
    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }
    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
        e = {},
        g, h, i = d.length,
        j, k = d[0],
        l,
        m,
        n,
        o,
        p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                o === !0 ? n = p: p === !0 && (n = o);
                                break
                            }
                        }
                    }
                } ! n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function ca(a, c, d) {
        var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b,
        function(b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b: "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a: e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }
    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f],
        i = 0,
        j = h ? h.length: 0,
        k = a === bS,
        l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l == "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }
    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                e = 0,
                g = d.length,
                h,
                i,
                j;
                for (; e < g; e++) h = d[e],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift": "push"](c)
            }
        }
    }
    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth: a.offsetHeight,
        e = b === "width" ? 1 : 0,
        g = 4;
        if (d > 0) {
            if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
            c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0,
        c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
        c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b),
        b.innerHTML = a.outerHTML;
        return b.firstChild
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML: c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected: c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue: c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
            h = f._data(b, g),
            i = g.events;
            if (i) {
                delete h.handle,
                h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({},
            h.data))
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function U(a) {
        var b = V.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a,
        function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a,
            function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a,
        function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function S(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function K() {
        return ! 0
    }
    function J() {
        return ! 1
    }
    function n(a, b, c) {
        var d = b + "defer",
        e = b + "queue",
        g = b + "mark",
        h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() { ! f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        },
        0)
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return ! 1
        }
        return ! 0
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null: f.isNumeric(d) ? +d: j.test(d) ? f.parseJSON(d) : d
                } catch(g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b = g[a] = {},
        c,
        d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
    d = a.navigator,
    e = a.location,
    f = function() {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }
        var e = function(a, b) {
            return new e.fn.init(a, b, h)
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/ig,
        w = /^-ms-/,
        x = function(a, b) {
            return (b + "").toUpperCase()
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
        e.fn = e.prototype = {
            constructor: e,
            init: function(a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = a,
                    this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d,
                            k = d ? d.ownerDocument || d: c,
                            j = m.exec(a),
                            j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1,
                            this[0] = h
                        }
                        this.context = c,
                        this.selector = a;
                        return this
                    }
                    return ! d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            },
            each: function(a, b) {
                return e.each(this, a, b)
            },
            ready: function(a) {
                e.bindReady(),
                A.add(a);
                return this
            },
            eq: function(a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(e.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        e.fn.init.prototype = e.fn,
        e.extend = e.fn.extend = function() {
            var a, c, d, f, g, h, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {},
            j = 2),
            typeof i != "object" && !e.isFunction(i) && (i = {}),
            k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c],
                f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d: []) : h = d && e.isPlainObject(d) ? d: {},
                i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        },
        e.extend({
            noConflict: function(b) {
                a.$ === e && (a.$ = g),
                b && a.jQuery === e && (a.jQuery = f);
                return e
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? e.readyWait++:e.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]),
                    e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1),
                    a.addEventListener("load", e.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B),
                        a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch(d) {}
                        c.documentElement.doScroll && b && J()
                    }
                }
            },
            isFunction: function(a) {
                return e.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return e.type(a) === "array"
            },
            isWindow: function(a) {
                return a != null && a == a.window
            },
            isNumeric: function(a) {
                return ! isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseJSON: function(b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                if (typeof c != "string" || !c) return null;
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(g) {
                    d = b
                } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            },
            noop: function() {},
            globalEval: function(b) {
                b && j.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(w, "ms-").replace(v, x)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var f, g = 0,
                h = a.length,
                i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            },
            trim: G ?
            function(a) {
                return a == null ? "": G.call(a)
            }: function(a) {
                return a == null ? "": (a + "").replace(k, "").replace(l, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length,
                    c = c ? c < 0 ? Math.max(0, d + c) : c: 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                e;
                c = !!c;
                for (var f = 0,
                g = a.length; f < g; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, c, d) {
                var f, g, h = [],
                i = 0,
                j = a.length,
                k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d),
                f != null && (h[h.length] = f);
                else for (g in a) f = c(a[g], g, d),
                f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            },
            guid: 1,
            proxy: function(a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2),
                g = function() {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            },
            access: function(a, c, d, f, g, h, i) {
                var j, k = d == null,
                l = 0,
                m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) e.access(a, c, l, d[l], 1, h, f);
                    g = 1
                } else if (f !== b) {
                    j = i === b && e.isFunction(f),
                    k && (j ? (j = c, c = function(a, b, c) {
                        return j.call(e(a), c)
                    }) : (c.call(a, f), c = null));
                    if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                    g = 1
                }
                return g ? a: k ? c.call(a) : m ? c(a[0], d) : h
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                e.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                },
                a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            },
            browser: {}
        }),
        e.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }),
        z = e.uaMatch(y),
        z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
        h = e(c),
        c.addEventListener ? B = function() {
            c.removeEventListener("DOMContentLoaded", B, !1),
            e.ready()
        }: c.attachEvent && (B = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    } (),
    g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
        d = [],
        e,
        i,
        j,
        k,
        l,
        m,
        n = function(b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d],
            h = f.type(g),
            h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        },
        o = function(b, f) {
            f = f || [],
            e = !a.memory || [b, f],
            i = !0,
            j = !0,
            m = k || 0,
            k = 0,
            l = c.length;
            for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1,
            c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        },
        p = {
            add: function() {
                if (c) {
                    var a = c.length;
                    n(arguments),
                    j ? l = c.length: e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            },
            remove: function() {
                if (c) {
                    var b = arguments,
                    d = 0,
                    e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        j && f <= l && (l--, f <= m && m--),
                        c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            },
            has: function(a) {
                if (c) {
                    var b = 0,
                    d = c.length;
                    for (; b < d; b++) if (a === c[b]) return ! 0
                }
                return ! 1
            },
            empty: function() {
                c = [];
                return this
            },
            disable: function() {
                c = d = e = b;
                return this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                d = b,
                (!e || e === !0) && p.disable();
                return this
            },
            locked: function() {
                return ! d
            },
            fireWith: function(b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            },
            fire: function() {
                p.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
            c = f.Callbacks("once memory"),
            d = f.Callbacks("memory"),
            e = "pending",
            g = {
                resolve: b,
                reject: c,
                notify: d
            },
            h = {
                done: b.add,
                fail: c.add,
                progress: d.add,
                state: function() {
                    return e
                },
                isResolved: b.fired,
                isRejected: c.fired,
                then: function(a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                },
                always: function() {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                },
                pipe: function(a, b, c) {
                    return f.Deferred(function(d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        },
                        function(a, b) {
                            var c = b[0],
                            e = b[1],
                            g;
                            f.isFunction(c) ? i[a](function() {
                                g = c.apply(this, arguments),
                                g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d: this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (a == null) a = h;
                    else for (var b in h) a[b] = h[b];
                    return a
                }
            },
            i = h.promise({}),
            j;
            for (j in g) i[j] = g[j].fire,
            i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            },
            c.disable, d.lock).fail(function() {
                e = "rejected"
            },
            b.disable, d.lock),
            a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
                    j.notifyWith(k, e)
                }
            }
            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
                    --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
            c = 0,
            d = b.length,
            e = Array(d),
            g = d,
            h = d,
            j = d <= 1 && a && f.isFunction(a.promise) ? a: f.Deferred(),
            k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }),
    f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
        q = c.documentElement;
        p.setAttribute("className", "t"),
        p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        d = p.getElementsByTagName("*"),
        e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = p.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
        i.checked = !0,
        b.noCloneChecked = i.cloneNode(!0).checked,
        g.disabled = !0,
        b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch(r) {
            b.deleteExpando = !1
        } ! p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick",
        function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")),
        i = c.createElement("input"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        b.radioValue = i.value === "t",
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        p.appendChild(i),
        j = c.createDocumentFragment(),
        j.appendChild(p.lastChild),
        b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = i.checked,
        j.removeChild(i),
        j.appendChild(p);
        if (p.attachEvent) for (n in {
            submit: 1,
            change: 1,
            focusin: 1
        }) m = "on" + n,
        o = m in p,
        o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"),
        b[n + "Bubbles"] = o;
        j.removeChild(p),
        j = g = h = p = i = null,
        f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0]; ! u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            },
            g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    } ();
    var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !! a && !m(a)
        },
        data: function(a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i, j = f.expando,
                k = typeof c == "string",
                l = a.nodeType,
                m = l ? f.cache: a,
                n = l ? a[j] : a[j] && j,
                o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid: n = j),
                m[n] || (m[n] = {},
                l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n],
                e || (h.data || (h.data = {}), h = h.data),
                d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e, g, h = f.expando,
                i = a.nodeType,
                j = i ? f.cache: a,
                k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (! (c ? m: f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
                i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
            k = 0,
            m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name,
                        h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split(".", 2),
            d[1] = d[1] ? "." + d[1] : "",
            e = d[1] + "!";
            return f.access(this,
            function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]),
                    m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c,
                this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d),
                    f.data(this, a, c),
                    b.triggerHandler("changeData" + e, d)
                })
            },
            null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }),
    f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue",
                d = f._data(a, b),
                c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
            d = c.shift(),
            e = {};
            d === "inprogress" && (d = c.shift()),
            d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a,
            function() {
                f.dequeue(a, b)
            },
            e)),
            c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }),
    f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this: this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a: a,
            b = b || "fx";
            return this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {--h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b),
            a = a || "fx";
            var d = f.Deferred(),
            e = this,
            g = e.length,
            h = 1,
            i = a + "defer",
            j = a + "queue",
            k = a + "mark",
            l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++,
            l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                    h = f(this),
                    i = b,
                    j = a.split(p);
                    while (e = j[g++]) i = d ? i: !h.hasClass(e),
                    h[i ? "addClass": "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "": f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
            c = 0,
            d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if ( !! arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                        h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a,
                            h == null ? h = "": typeof h == "number" ? h += "": f.isArray(h) && (h = f.map(h,
                            function(a) {
                                return a == null ? "": a + ""
                            })),
                            c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "": d
                }
            }
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                    h = [],
                    i = a.options,
                    j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g: 0,
                    d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled: e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if ( !! a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a),
                i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x: w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b: g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p),
                g = d.length;
                for (; i < g; i++) e = d[i],
                e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e: c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b),
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value: null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if ( !! a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a),
                h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e: a[c] = d: g && "get" in g && (e = g.get(a, c)) !== null ? e: a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    f.attrHooks.tabindex = f.propHooks.tabIndex,
    x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));

            return c
        }
    },
    v || (y = {
        name: !0,
        id: !0,
        coords: !0
    },
    w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "": d.specified) ? d.nodeValue: b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    },
    f.attrHooks.tabindex.set = w.set, f.each(["width", "height"],
    function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            w.set(a, b, c)
        }
    }),
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"],
    function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b: d
            }
        })
    }),
    f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn || f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on": a.value
            }
        }
    }),
    f.each(["radio", "checkbox"],
    function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /(?:^|\s)hover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function(

    a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    },
    H = function(a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    },
    I = function(a) {
        return f.event.special.hover ? a: a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function(a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (! (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector),
                d.guid || (d.guid = f.guid++),
                j = h.events,
                j || (h.events = j = {}),
                i = h.handle,
                i || (h.handle = i = function(a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                },
                i.elem = a),
                c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [],
                    m = l[1],
                    n = (l[2] || "").split(".").sort(),
                    s = f.event.special[m] || {},
                    m = (g ? s.delegateType: s.bindType) || m,
                    s = f.event.special[m] || {},
                    o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    },
                    p),
                    r = j[m];
                    if (!r) {
                        r = j[m] = [],
                        r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
                    g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                    f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s;
            if ( !! g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [],
                    j = k = i[1],
                    l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {},
                    j = (d ? p.delegateType: p.bindType) || j,
                    r = o[j] || [],
                    m = r.length,
                    l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n],
                    (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                i = [],
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
                h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c: new f.Event(h, c) : new f.Event(h),
                c.type = h,
                c.isTrigger = !0,
                c.exclusive = k,
                c.namespace = i.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                o = h.indexOf(":") < 0 ? "on" + h: "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = e),
                d = d != null ? f.makeArray(d) : [],
                d.unshift(c),
                p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h,
                    m = E.test(s + h) ? e: e.parentNode,
                    n = null;
                    for (; m; m = m.parentNode) r.push([m, s]),
                    n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0],
                c.type = r[l][1],
                q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"),
                q && q.apply(m, d),
                q = o && m[o],
                q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h,
                !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function(c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
            e = d.delegateCount,
            g = [].slice.call(arguments, 0),
            h = !c.exclusive && !c.namespace,
            i = f.event.special[c.type] || {},
            j = [],
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u;
            g[0] = c,
            c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this),
                    n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                        p = {},
                        r = [],
                        n[0] = m;
                        for (k = 0; k < e; k++) s = d[k],
                        t = s.selector,
                        p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                        p[t] && r.push(s);
                        r.length && j.push({
                            elem: m,
                            matches: r
                        })
                    }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k],
                    c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data,
                        c.handleObj = s,
                        o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g),
                        o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode: b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, d) {
                var e, f, g, h = d.button,
                i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement: i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
            h = f.event.fixHooks[a.type] || {},
            i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d],
            a[e] = g[e];
            a.target || (a.target = g.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    f.event.handle = f.event.dispatch,
    f.removeEvent = c.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    f.Event = function(a, b) {
        if (! (this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K: J) : this.type = a,
        b && f.extend(this, b),
        this.timeStamp = a && a.timeStamp || f.now(),
        this[f.expando] = !0
    },
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = K;
            var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = K;
            var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = K,
            this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    },
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = this,
                d = a.relatedTarget,
                e = a.handleObj,
                g = e.selector,
                h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType,
                h = e.handler.apply(this, arguments),
                a.type = b;
                return h
            }
        }
    }),
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form: b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return ! 1;
            f.event.remove(this, "._submit")
        }
    }),
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change",
                function(a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                f.event.add(this, "click._change",
                function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return ! 1
            }
            f.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }),
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var d = 0,
        e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function() {
                d++===0 && c.addEventListener(a, e, !0)
            },
            teardown: function() {--d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
    f.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function(a) {
                f().off(a);
                return h.apply(this, arguments)
            },
            e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function() {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c,
            c = b;
            d === !1 && (d = J);
            return this.each(function() {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
            c = a.guid || f.guid++,
            d = 0,
            e = function(c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        f.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        },
        f.attrFn && (f.attrFn[b] = !0),
        C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
        D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function() {
        function x(a, b, c, e, f, g) {
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/; [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, d, e, f) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
            v = m.isXML(d),
            w = [],
            x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3],
                    w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while ( i );
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(),
                o.relative[b] && (b += w.shift()),
                j = y(b, j, f)
            } else { ! f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    }: m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode: d, v),
                    j = n.expr ? m.filter(n.expr, n.set) : n.set,
                    w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(),
                    r = q,
                    o.relative[q] ? r = w.pop() : q = "",
                    r == null && (r = d),
                    o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j),
            k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function(a) {
            if (u) {
                h = i,
                a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        },
        m.matches = function(a, b) {
            return m(a, null, null, b)
        },
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        },
        m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1],
                    g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""),
                        d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        },
        m.filter = function(a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h],
                    l = f[1],
                    g = !1,
                    f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r),
                        a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a);
                else break;
                q = a
            }
            return s
        },
        m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
            e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        },
        o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b == "string",
                    d = c && !l.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0,
                    g = a.length,
                    h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = typeof b == "string",
                    e = 0,
                    f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g: !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, f = e++,
                    g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                        d = b.getElementsByName(a[1]);
                        for (var e = 0,
                        f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null: c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0,
                    h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, ""); ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                    else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return ! 1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function(a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0,
                        i = g.length; h < i; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c, e, f, g, h, i, j, k = b[1],
                    l = a;
                    switch (k) {
                    case "only":
                    case "first":
                        while (l = l.previousSibling) if (l.nodeType === 1) return ! 1;
                        if (k === "first") return ! 0;
                        l = a;
                    case "last":
                        while (l = l.nextSibling) if (l.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        c = b[2],
                        e = b[3];
                        if (c === 1 && e === 0) return ! 0;
                        f = b[0],
                        g = a.parentNode;
                        if (g && (g[d] !== f || !a.nodeIndex)) {
                            i = 0;
                            for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                            g[d] = f
                        }
                        j = a.nodeIndex - e;
                        return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return d == null ? f === "!=": !f && m.attr ? d != null: f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        },
        p = o.match.POS,
        q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch(t) {
            s = function(a, b) {
                var c = 0,
                d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        }: (u = function(a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
            f = [],
            g = a.parentNode,
            i = b.parentNode,
            j = g;
            if (g === i) return v(a, b);
            if (!g) return - 1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        },
        v = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = c.createElement("div"),
            d = "script" + (new Date).getTime(),
            e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            o.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        } (),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        c.querySelectorAll &&
        function() {
            var a = m,
            b = c.createElement("div"),
            d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch(j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                            l = e.getAttribute("id"),
                            n = l || d,
                            p = e.parentNode,
                            q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
                            q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch(r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        } (),
        function() {
            var a = c.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch(f) {
                    e = !0
                }
                m.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch(g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        c.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: m.contains = function() {
            return ! 1
        },
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? b.nodeName !== "HTML": !1
        };
        var y = function(a, b, c) {
            var d, e = [],
            f = "",
            g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0],
            a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*": a;
            for (var h = 0,
            i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr,
        m.selectors.attrMap = {},
        f.find = m,
        f.expr = m.selectors,
        f.expr[":"] = f.expr.filters,
        f.unique = m.uniqueSort,
        f.text = m.getText,
        f.isXMLDoc = m.isXML,
        f.contains = m.contains
    } ();
    var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.globalPOS,
    R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function(a) {
            var b = this,
            c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return ! 0
            });
            var e = this.pushStack("", "find", a),
            g,
            h,
            i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length,
                f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0,
                c = b.length; a < c; a++) if (f.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
            d,
            e,
            g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode,
                    h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length: -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
            d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d: f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b: null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: f.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            e = this.length > 1 && !R[a] ? f.unique(e) : e,
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }),
    f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
            g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g),
            g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    bh = U(c);
    bg.optgroup = bg.option,
    bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
    bg.th = bg.td,
    f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
        text: function(a) {
            return f.access(this,
            function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            },
            null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {

            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {

                var a = f

                .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)

            }

        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0,
            d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) ! b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
            d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0,
            b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a,
            b = b == null ? a: b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this,
            function(a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {},
                        c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch(g) {}
                }
                c && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                    d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    f(this).remove(),
                    b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
            k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b),
                g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode,
                f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                }: e = f.buildFragment(a, this, k),
                h = e.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0,
                    m = this.length,
                    n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k,
                function(a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }

    }),
    f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
        e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e: 1);
        return {
            fragment: e,
            cacheable: g
        }
    },
    f.fragments = {},
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0,
            i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j),
                d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h),
                d = bl(a),
                e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a),
                    e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c,
            typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0,
            l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l);
                else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                    n = bg[m] || bg._default,
                    o = n[0],
                    p = b.createElement("div"),
                    q = bh.childNodes,
                    r;
                    b === c ? bh.appendChild(p) : U(b).appendChild(p),
                    p.innerHTML = n[1] + l + n[2];
                    while (o--) p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l),
                        t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes: n[1] === "<table>" && !s ? p.childNodes: [];
                        for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    } ! f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                    l = p.childNodes,
                    p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked) if (l[0] && typeof(u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]);
                else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return ! a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
            e = f.event.special,
            g = f.support.deleteExpando;
            for (var h = 0,
            i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                    delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
    bq = /opacity=([^)]*)/,
    br = /([A-Z]|^ms)/g,
    bs = /^[\-+]?(?:\d*\.)?\d+$/i,
    bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    bu = /^([\-+])=([\-+.\de]+)/,
    bv = /^margin/,
    bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bx = ["Top", "Right", "Bottom", "Left"],
    by,
    bz,
    bA;
    f.fn.css = function(a, c) {
        return f.access(this,
        function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        },
        a, c, arguments.length > 1)
    },
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                j = a.style,
                k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d,
                h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch(l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c),
            g = f.cssHooks[c],
            c = f.cssProps[c] || c,
            c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function(a, b, c) {
            var d = {},
            e, f;
            for (f in b) d[f] = a.style[f],
            a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }),
    f.curCSS = f.css,
    c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(),
        (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
        !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }),
    c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
        f == null && g && (e = g[b]) && (f = e),
        bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em": f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto": f
    }),
    by = bz || bA,
    f.each(["height", "width"],
    function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw,
                function() {
                    return bB(a, b, d)
                })
            },
            set: function(a, b) {
                return bs.test(b) ? b + "px": b
            }
        }
    }),
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "",
            g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }),
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                return f.swap(a, {
                    display: "inline-block"
                },
                function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    },
    f.expr.filters.visible = function(a) {
        return ! f.expr.filters.hidden(a)
    }),
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
    bD = /\[\]$/,
    bE = /\r?\n/g,
    bF = /#.*$/,
    bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bJ = /^(?:GET|HEAD)$/,
    bK = /^\/\//,
    bL = /\?/,
    bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bN = /^(?:select|textarea)/i,
    bO = /\s+/,
    bP = /([?&])_=[^&]*/,
    bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bR = f.fn.load,
    bS = {},
    bT = {},
    bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch(bX) {
        bU = c.createElement("a"),
        bU.href = "",
        bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [],
    f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
                    d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null: f.isArray(c) ? f.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }),
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    f.each(["get", "post"],
    function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }),
    f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
            b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2,
                    q && clearTimeout(q),
                    p = b,
                    n = m || "",
                    v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                    x = l ? ca(d, v, l) : b,
                    y,
                    z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified",
                        o = !0;
                        else try {
                            r = cb(d, x),
                            w = "success",
                            o = !0
                        } catch(A) {
                            w = "parsererror",
                            u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error",
                        a < 0 && (a = 0)
                    }
                    v.status = a,
                    v.statusText = "" + (c || w),
                    o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                    v.statusCode(j),
                    j = b,
                    t && g.trigger("ajax" + (o ? "Success": "Error"), [v, d, o ? r: u]),
                    i.fireWith(e, [v, w]),
                    t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b),
            c = c || {};
            var d = f.ajaxSetup({},
            c),
            e = d.context || d,
            g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
            h = f.Deferred(),
            i = f.Callbacks("once memory"),
            j = d.statusCode || {},
            k,
            l = {},
            m = {},
            n,
            o,
            p,
            q,
            r,
            s = 0,
            t,
            u,
            v = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a,
                        l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return s === 2 ? n: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    p && p.abort(a),
                    w(0, a);
                    return this
                }
            };
            h.promise(v),
            v.success = v.done,
            v.error = v.fail,
            v.complete = i.add,
            v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status],
                    v.then(b, b)
                }
                return this
            },
            d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
            d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
            d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
            bZ(bS, d, c, v);
            if (s === 2) return ! 1;
            t = d.global,
            d.type = d.type.toUpperCase(),
            d.hasContent = !bJ.test(d.type),
            t && f.active++===0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&": "?") + d.data, delete d.data),
                k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                    y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&": "?") + "_=" + x: "")
                }
            } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01": "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return ! 1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w( - 1, "No Transport");
            else {
                v.readyState = 1,
                t && g.trigger("ajaxSend", [v, d]),
                d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                },
                d.timeout));
                try {
                    s = 1,
                    p.send(l, w)
                } catch(z) {
                    if (s < 2) w( - 1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
            e = function(a, b) {
                b = f.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a,
            function() {
                e(this.name, this.value)
            });
            else for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }),
    f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
    cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }),
    f.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            },
            d.always(function() {
                a[h] = i,
                g && f.isFunction(i) && a[h](g[0])
            }),
            b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            },
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }),
    f.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    f.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    },
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ?
    function() {
        for (var a in cg) cg[a](0, 1)
    }: !1,
    cf = 0,
    cg;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && ch() || ci()
    }: ch,
    function(a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    } (f.ajaxSettings.xhr()),
    f.support.ajax && f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function(e, g) {
                    var h = c.xhr(),
                    i,
                    j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch(k) {}
                    h.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b,
                                i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status,
                                    l = h.getAllResponseHeaders(),
                                    m = {},
                                    n = h.responseXML,
                                    n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch(a) {}
                                    try {
                                        k = h.statusText
                                    } catch(o) {
                                        k = ""
                                    } ! j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch(p) {
                            e || g( - 1, p)
                        }
                        m && g(j, k, m, l)
                    },
                    !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {},
                    f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {},
    ck, cl, cm = /^(?:toggle|show|hide)$/,
    cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0,
            h = this.length; g < h; g++) d = this[g],
            d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
            h = this.length;
            for (; g < h; g++) d = this[g],
            d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a: f(this).is(":hidden");
                f(this)[b ? "show": "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({},
                e),
                c = this.nodeType === 1,
                d = c && f(this).is(":hidden"),
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                    i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]),
                        delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g],
                    f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i),
                h = a[i],
                cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show": "hide": 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide": "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "": "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return ! 0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({},
            a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0),
                    e.stop(d)
                }
                var b, c = !1,
                e = f.timers,
                g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a)
            })
        }
    }),
    f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({},
            a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration: d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete,
            d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this),
                d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return - Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b: a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
            g = f.fx;
            this.startTime = cq || cr(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (f.cssNumber[this.prop] ? "": "px"),
            h.queue = this.options.queue,
            h.elem = this.elem,
            h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            },
            h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
            g = !0,
            h = this.elem,
            i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"],
                    function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }),
                    i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]),
                    f.removeData(h, "fxshow" + b, !0),
                    f.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1, d.call(h))
                }
                return ! 1
            }
            i.duration == Infinity ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update();
            return ! 0
        }
    },
    f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
            c = 0;
            for (; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co),
            co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    f.each(cp.concat.apply([], cp),
    function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }),
    f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch(e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        }: {
            top: 0,
            left: 0
        };
        var g = b.body,
        h = cy(b),
        i = c.clientTop || g.clientTop || 0,
        j = c.clientLeft || g.clientLeft || 0,
        k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
        l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
        m = d.top + k - i,
        n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    }: cv = function(a, b, c) {
        var d, e = a.offsetParent,
        g = a,
        h = b.body,
        i = b.defaultView,
        j = i ? i.getComputedStyle(a, null) : a.currentStyle,
        k = a.offsetTop,
        l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k -= a.scrollTop,
            l -= a.scrollLeft,
            a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
            f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
            j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop,
        l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    },
    f.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
        d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    },
    f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
            g = e.offset(),
            h = f.css(a, "top"),
            i = f.css(a, "left"),
            j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : e.css(k)
        }
    },
    f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0,
            c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
            d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }),
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this,
            function(a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g: f(h).scrollTop()) : a[e] = g
            },
            a, e, arguments.length, null)
        }
    }),
    f.each({
        Height: "height",
        Width: "width"
    },
    function(a, c) {
        var d = "client" + a,
        e = "scroll" + a,
        g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        },
        f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin": "border")) : this[c]() : null
        },
        f.fn[c] = function(a) {
            return f.access(this,
            function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document,
                    j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c),
                    l = parseFloat(k);
                    return f.isNumeric(l) ? l: k
                }
                f(a).css(c, h)
            },
            c, a, arguments.length, null)
        }
    }),
    a.jQuery = a.$ = f,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return f
    })

})(window);


/*common.js*/

var SKIN_PATH = "/Skins/Default/";
var PTN_EMAIL = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var PTN_FLOAT = /\d+(\.\d+)?/;
function $nsw() {}
function $j(a) {
    return $("#" + a)
}
function $v(a, c) {
    if (c == null) {
        var b = $j(a).attr("value");
        if (b == null || b == undefined) {
            return ""
        }
        return b
    } else {
        return $j(a).attr("value", c)
    }
}
function $tv(a) {
    return $.trim($v(a))
}
function getChecked(a) {
    return $("#" + a).attr("checked")
}
function checkRadio(c, b) {
    var a;
    if (b == null) {
        a = $(document.body).find("input[type=radio]")
    } else {
        a = $j(b).find("input[type=radio]")
    }
    a.each(function(d) {
        var e = $(this);
        e.attr("checked", e.attr("value") == c)
    })
}
function getSelectedText(a) {
    var c = $("#" + a + ">option");
    var b = "";
    c.each(function(d) {
        if (this.selected) {
            b = this.text
        }
    });
    return b
}
function hideDdl(b) {
    var d = ["select", "iframe", "applet", "object"];
    var a;
    if (b != null) {
        a = $j(b)
    } else {
        a = $(document.body)
    }
    for (var c = 0; c < d.length; ++c) {
        a.find(d[c]).css("visibility", "hidden")
    }
}
function showDdl() {
    var b = ["select", "iframe", "applet", "object"];
    for (var a = 0; a < b.length; ++a) {
        $(b[a]).css("visibility", "visible")
    }
}
function relocation(a) {
    var c;
    if (typeof(a).toString().toLowerCase() == "string") {
        c = $j(a)
    } else {
        c = $(a)
    }
    if (c.length == 0) {
        return
    }
    var d = document.documentElement.scrollTop || document.body.scrollTop;
    var b = (d - (c.height() / 2) + "px");
    c.css({
        "margin-top": b
    })
}
$(function() {
    $(window).resize(function() {
        relocation("mesbook1");
        relocation("mesbook1_c")
    });
    $(window).scroll(function() {
        relocation("mesbook1");
        relocation("mesbook1_c")
    })
});
function oran_msg(c, a, d, f, b, e) {
    window.onload = function() {
        $a(c, a, d, f, b, e)
    }
}
function $confirm(b, l, o) {
    hideDdl();
    var n = "消息对话框";
    var e = $j("mesbook1_c");
    if (e.length == 0) {
        var m = "<div id='mesbook1_c'><div><img onclick='hideMsg()' id='mesbook1_cImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam' /><span id='mesbook1_cTitle'></span></div><dl class='b1'><dt><img id='mesbook1_cIcon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title=''  /></dt><dd class='l_25' id='mesbook1_cMsg'></dd><dd class='b' style='visibility:hidden' id='mesbook1_cAutoClose'>此窗口<span id='mesbook1_cDelay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1_cBtns'><input type='button' class='b15' value='确 定' /><input type='button' class='b15' value='取 消' /></dd></dl></div>";
        $(document.body).append(m)
    }
    var e = $j("mesbook1_c");
    var a = $j("mesbook1_cImgClose");
    var d = $j("mesbook1_cIcon");
    var j = $j("mesbook1_cMsg");
    var k = $j("mesbook1_cAutoClose");
    var c = $j("mesbook1_cDelay");
    var h = $j("mesbook1_cTitle");
    var p = $j("mesbook1_cBtns");
    h.html(n);
    j.html(b);
    var g = SKIN_PATH + "Img/ico_ques.gif";
    d.attr("src", g);
    var f = p.find("input:eq(0)");
    var i = p.find("input:eq(1)");
    f.removeAttr("onclick");
    i.removeAttr("onclick");
    if (l.title != null) {
        f.val(l.title)
    }
    if (typeof(l.toDo) == "string") {
        f.click(function() {
            location.href = l.toDo
        })
    } else {
        f.click(function() {
            l.toDo()
        })
    }
    if (o.title != null) {
        i.val(o.title)
    }
    if (typeof(o.toDo) == "string") {
        i.click(function() {
            location.href = o.toDo
        })
    } else {
        i.click(function() {
            o.toDo()
        })
    }
    a.removeAttr("onclick");
    a.click(function() {
        hideConfirm()
    });
    showFullBg();
    setCM("mesbook1_c");
    relocation("mesbook1_c");
    e.fadeIn(80)
}
function hideConfirm() {
    showDdl();
    var a = $j("mesbook1_c");
    hideFullBg();
    a.fadeOut(80)
}
function $a(c, p, g, l, o, a) {
    if (p == null) {
        p = 2
    }
    if (g == null) {
        g = -1
    }
    if (o == null) {
        o = "消息提示"
    }
    hideDdl();
    var f = $j("mesbook1");
    if (f.length == 0) {
        var n = "<div id='mesbook1'><div><img style='float:right' onclick='hideMsg()' id='mesbook1ImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam ml5' /><span id='mesbook1Title'></span></div><dl class='b1'><dt><img id='mesbook1Icon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title='' /></dt><dd class='l_25' id='mesbook1Msg'></dd><dd class='b' style='visibility:hidden' id='mesbook1AutoClose'>此窗口<span id='mesbook1Delay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1Btns'><input type='button' class='b15' value='关 闭' /></dd></dl></div>";
        $(document.body).append(n)
    }
    var f = $j("mesbook1");
    var b = $j("mesbook1ImgClose");
    var e = $j("mesbook1Icon");
    var k = $j("mesbook1Msg");
    var m = $j("mesbook1AutoClose");
    var d = $j("mesbook1Delay");
    var j = $j("mesbook1Title");
    var q = $j("mesbook1Btns");
    j.html(o);
    k.html(c);
    var i = SKIN_PATH + "Img/";
    switch (p) {
    case 1:
        i += "ico_ok.gif";
        break;
    case 2:
        i += "ico_info.gif";
        break;
    case 3:
        i += "ioc_ques.gif";
        break;
    case - 1 : i += "ico_error.gif";
        break;
    default:
        i += "ico_normal.gif";
        break
    }
    e.attr("src", i);
    var h = q.find("input");
    h.removeAttr("onclick");
    h.click(function() {
        hideMsg();
        if (l != null) {
            $j(l).focus()
        }
        if (a != null) {
            a()
        }
    });
    b.removeAttr("onclick");
    b.click(function() {
        hideMsg();
        if (l != null) {
            $j(l).focus()
        }
        if (a != null) {
            a()
        }
    });
    h.focus();
    showFullBg();
    setCM("mesbook1");
    relocation("mesbook1");
    f.fadeIn(80)
}
function showMsgPage(f, a, e, g, d, c) {
    if (a == null) {
        a = "Information"
    } else {
        switch (a) {
        case 1:
            a = "Successful";
            break;
        case 2:
            a = "Information";
            break;
        case 3:
            a = "Question";
            break;
        case - 1 : a = "Failed";
            break;
        default:
            a = "Information";
            break
        }
    }
    if (e == null) {
        e = "/"
    }
    if (g == null) {
        g = "首页"
    }
    if (d == null) {
        d = "/"
    }
    if (c == null) {
        c = 9
    }
    f = f.replace("/<script>/g", "").replace("/<\/script>/g", "").replace("/</sCript>/g", "");
    e = e.replace("/<script>/g", "").replace("/<\/script>/g", "").replace("/</sCript>/g", "").replace("http://", "").replace("https://", "");
    g = g.replace("/<script>/g", "").replace("/<\/script>/g", "").replace("/</sCript>/g", "");
    d = d.replace("/<script>/g", "").replace("/<\/script>/g", "").replace("/</sCript>/g", "").replace("http://", "").replace("https://", "");
    var b = "/Tools/Message.aspx?result=" + a + "&btntitle=" + encodeURIComponent(g) + "&btnhref=" + encodeURIComponent(e) + "&defaulthref=" + encodeURIComponent(d) + "&delay=" + c + "&msg=" + encodeURIComponent(f);
    location.href = b
}
function hideMsg() {
    showDdl();
    var a = $j("mesbook1");
    hideFullBg();
    a.fadeOut(80)
}
function setCM(b, e) {
    var d;
    if (typeof(b).toString().toLowerCase() == "string") {
        d = $j(b)
    } else {
        d = $(b)
    }
    if (e == null) {
        e = 80
    }
    var c = d.height() / 2;
    var a = d.width() / 2;
    d.css({
        top: "50%",
        "margin-top": "-" + c + "px",
        left: "50%",
        "margin-left": "-" + a + "px"
    });
    d.css({
        position: "absolute",
        "z-index": "999"
    });
    d.fadeIn(e)
}
function setCMS(c, f) {
    var e;
    if (typeof(c).toString().toLowerCase() == "string") {
        e = $j(c)
    } else {
        e = $(c)
    }
    if (f == null) {
        f = 80
    }
    var d = e.height() / 2;
    var b = e.width() / 2;
    var a = document.documentElement.scrollTop;
    if (a > 100) {
        e.css({
            top: "50%",
            "margin-top": "-" + d + "px",
            left: "50%",
            "margin-left": "-" + b + "px"
        })
    } else {
        d = 200;
        e.css({
            "margin-top": "-" + d + "px",
            left: "50%",
            "margin-left": "-" + b + "px"
        })
    }
    e.css({
        position: "absolute",
        "z-index": "999"
    });
    e.fadeIn(f)
}
function showFullBg(n, e, h, k, i, d, b) {
    if (n == null) {
        n = "oran_full_bg"
    }
    var a = $j(n);
    if (a.length == 0) {
        var l = "<div style='position:absolute;top:0;left:0;display:none;' id='" + n + "'></div>";
        $(document.body).append(l)
    }
    if (h == null) {
        h = 0.75
    }
    if (k == null) {
        k = "#777"
    }
    if (i == null) {
        i = "9"
    }
    if (d == null) {
        d = 80
    }
    if (e == null) {
        e = true
    }
    var a = $j(n);
    var m = document.documentElement;
    var c = m.scrollWidth;
    var g = m.scrollHeight;
    var f = m.clientHeight;
    var j = m.clientWidth;
    if (g < f) {
        g = f
    }
    if (c < j) {
        c = j
    }
    a.css({
        "z-index": i,
        background: k,
        opacity: h,
        filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=" + h * 100 + ")"
    });
    a.css({
        height: g,
        width: c
    });
    if (e) {
        hideDdl(null, b)
    }
    a.fadeIn(d);
    if (b != null) {
        b()
    }
}
function hideFullBg(a, c) {
    if (a == null) {
        a = "oran_full_bg"
    }
    if (c == null) {
        c = 80
    }
    var b = $j(a);
    b.fadeOut(c);
    showDdl()
}
function $closeLayer(a, b) {
    $j(a).fadeOut(80,
    function() {
        hideFullBg(b)
    })
}
function limitLength(a) {
    var l = a.value;
    var n = parseInt($(a).attr("max"));
    var c = a.id;
    var e = l.replace(/[^\x00-\xff]/g, "**");
    var d = e.length;
    if (d * 1 <= n * 1) {
        return
    }
    var j = e.substr(0, n);
    var h = 0;
    var k = "";
    for (var g = 0; g < j.length; g++) {
        var b = j.substr(g, 1);
        if (b == "*") {
            h++
        }
    }
    var m = 0;
    var f = e.substr(n * 1 - 1, 1);
    if (h % 2 == 0) {
        m = h / 2 + (n * 1 - h);
        k = l.substr(0, m)
    } else {
        m = (h - 1) / 2 + (n * 1 - h);
        k = l.substr(0, m)
    }
    alert("最大输入" + n + "个字节（相当于" + n / 2 + "个汉字）！");
    document.getElementById(c).value = k;
    return
}
function $g(a) {
    return document.getElementById(a)
}
function $name(a) {
    return document.getElementsByName(a)
}
function $tag(b, a) {
    var c = b;
    if (c != Object) {
        c = $g(b)
    }
    return c.getElementsByTagName(a)
}
function digiKeyOnly(b) {
    var a = window.event ? event.keyCode: b.which;
    if (a < 27 || a > 128) {
        return true
    } else {
        if (a >= 48 && a <= 57) {
            return true
        } else {
            return false
        }
    }
}
function digiOnly(a) {
    a.value = a.value.replace(/[^0-9]/g, "")
}
function $o(b, a, d, c) {
    if (b == null || b == "") {
        return
    }
    if (a == null) {
        a = "300"
    }
    if (d == null) {
        d = "300"
    }
    if (c == null) {
        c = "location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0;top=0,left=0"
    }
    if (a) {
        c += ",width=" + a
    }
    if (d) {
        c += ",height=" + d
    }
    window.open(b, "", c, false)
}
function emptyText(a) {
    var c;
    if (a == null) {
        c = $("body").find("input[type=text]")
    } else {
        c = $j(a).find("input[type=text]")
    }
    var b;
    if (a == null) {
        b = $("body").find("input[type=password]")
    } else {
        b = $j(a).find("input[type=password]")
    }
    c.each(function() {
        $(this).attr("value", "")
    });
    b.each(function() {
        $(this).attr("value", "")
    });
    if (a == null) {
        c = $("body").find("textarea")
    } else {
        c = $j(a).find("textarea")
    }
    c.each(function() {
        $(this).attr("value", "")
    })
}
$cookie = function(d, g, b) {
    if (g == null && b == null) {
        var e = d + "=";
        begin = document.cookie.indexOf(e);
        if (begin != -1) {
            begin += e.length;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = document.cookie.length
            }
            return document.cookie.substring(begin, end)
        }
        return null
    } else {
        if (typeof(g) == "boolean") {
            $cookie(d, "", -999999)
        } else {
            if (b == null) {
                b = 9986400000
            }
            var a = new Date();
            var f = new Date();
            var c = b;
            f.setTime(a.getTime() + c);
            document.cookie = d + "=" + g + ";expires=" + f.toGMTString()
        }
    }
};
function $qs(g) {
    var b = new Object();
    var f = location.search.substring(1);
    var e = f.split("&");
    for (var c = 0; c < e.length; ++c) {
        var h = e[c].indexOf("=");
        if (!h) {
            continue
        }
        var d = e[c].substring(0, h);
        var a = e[c].substring(h + 1);
        a = decodeURIComponent(a);
        b[d] = a
    }
    return b[g] == null ? "": b[g]
}
function selectAll(d, b) {
    var a = $tag(b, "input");
    for (var c = 0; c < a.length; ++c) {
        a[c].checked = d.checked
    }
}
function invertSelect(b) {
    var a = $tag(b, "input");
    for (var c = 0; c < a.length; ++c) {
        a[c].checked = !a[c].checked
    }
}
function getPageFilename() {
    var b = location.pathname;
    var c = b.lastIndexOf("/") + 1;
    var a = b.substring(c, b.length);
    return a
}
function getRawUrl() {
    var b = location.href;
    var c = b.lastIndexOf("/") + 1;
    var a = b.substring(c, b.length);
    c = a.lastIndexOf("#");
    a = a.substring(0, c);
    return a
}
function getIntactRawUrl() {
    var a = location.href;
    var b;
    b = a.lastIndexOf("#");
    a = a.substring(0, b);
    return a
}
function toggleArg(c, f) {
    var b = $$.intactRawUrl();
    var g = b.indexOf("?");
    if (g == -1) {
        return b + "?" + c + "=" + f
    } else {
        var a = b.substring(g);
        var e = b.substring(0, g);
        var d = new RegExp("&?" + c + "=?\\w*\\[?\\w*\\]?\\|?\\d?", "i");
        a = a.replace(d, "");
        if (a.length == 1) {
            a += c + "=" + f
        } else {
            a += "&" + c + "=" + f
        }
        return e + a
    }
}
function increase(c, b) {
    if (b == null) {
        b = "show"
    }
    var a = $j(c);
    a.animate({
        height: b,
        width: b,
        opacity: b
    },
    "fast")
}
function fadeToggle(a, b) {
    if (b == null) {
        b = "fast"
    }
    if ($("#" + a).is(":visible")) {
        $("#" + a).fadeOut(b)
    } else {
        $("#" + a).fadeIn(b)
    }
}
function clearAllElms(a, b) {
    clearDdls(a, b);
    clearTextBoxes(a, b);
    clearRdos(a, b);
    clearChks(a, b)
}
function clearRdos(a, c) {
    if (c == null) {
        c = "tfocus"
    }
    var b = $j(a).find("input[type=radio]");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    })

}
function clearChks(a, c) {
    if (c == null) {
        c = "tfocus"
    }
    var b = $j(a).find("input[type=checkbox]");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    })
}
function clearDdls(a, c) {
    if (c == null) {
        c = "tfocus"
    }
    var b = $j(a).find("select");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    })
}
function clearTextBoxes(a, c) {
    if (c == null) {
        c = "tfocus"
    }
    var b = $j(a).find("input[type=text]");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    });
    var b = $j(a).find("input[type=password]");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    });
    b = $j(a).find("textarea");
    b.focus(function() {
        $(this).addClass(c)
    });
    b.blur(function() {
        $(this).removeClass(c)
    })
}
var addBookmark = function(f) {
    var g = document.title;
    var c = document.URL;
    var d = window.event || arguments.callee.caller.arguments[0];
    var h = {
        IE: /MSIE/.test(window.navigator.userAgent) && !window.opera,
        FF: /Firefox/.test(window.navigator.userAgent),
        OP: !!window.opera
    };
    f.onclick = null;
    if (h.IE) {
        f.attachEvent("onclick",
        function() {
            try {
                window.external.AddFavorite(c, g);
                window.event.returnValue = false
            } catch(a) {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        })
    } else {
        if (h.FF || f.nodeName.toLowerCase() == "a") {
            if (h.FF) {
                f.setAttribute("rel", "sidebar"),
                f.title = g,
                f.href = c
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        } else {
            if (h.OP) {
                var b = document.createElement("a");
                b.rel = "sidebar",
                b.title = g,
                b.href = c;
                f.parentNode.insertBefore(b, f);
                b.appendChild(f);
                b = null
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    }
};
function setSelectByValue(a, d) {
    var e = $g(a);
    for (var c = 0; c < e.options.length; ++c) {
        var b = e.options[c];
        b.selected = (b.value == d)
    }
}
function showVerifyCode(a, c, b, f) {
    if (a == null) {
        a = "spVerCode"
    }
    if (c == null) {
        c = "spVerCodeMsg"
    }
    if (b == null) {
        b = "imgVerCode"
    }
    if (f == null) {
        f = "spChgVerCode"
    }
    var h = $j(a);
    var e = $j(c);
    var d = $j(f);
    if (h.html() == "") {
        e.html("正在加载验证码...");
        e.show();
        h.html("<img src='other/ValidCode.aspx' style='display:none;' id='" + b + "' alt='验证码' />")
    }
    var g = $j(b);
    g.load(function() {
        e.hide();
        g.show();
        d.show()
    })
}
function changeVerCode(a, b) {
    if (a == null) {
        a = "imgVerCode"
    }
    if (b == null) {
        b = "spVerCodeMsg"
    }
    var d = $j(a);
    var c = $j(b);
    c.html("正在刷新验证码...").show();
    d.attr({
        src: "other/ValidCode.aspx?x=" + Math.random(),
        alt: "验证码"
    });
    d.hide();
    d.load(function() {
        c.hide();
        d.show()
    })
}
function showProc(c, a) {
    var b = $j("imgProc");
    if (a == null) {
        a = true
    }
    if (a) {
        $(c).hide();
        if (b.length > 0) {
            b.remove()
        }
        $("<img src='" + SKIN_PATH + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(c)
    } else {
        $(c).show();
        b.remove()
    }
}
function enlarge(c, b) {
    if (c == null) {
        c = true
    }
    if (b == null) {
        b = "Content"
    }
    var e = $j(b);
    var d = parseInt(e.css("font-size"));
    var a = (c ? d * 1.2 : d / 1.2);
    e.css("font-size", a + "px")
}
function altRow(c, g, f, h) {
    var e = $tag(g, "tr");
    for (var d = c; d < e.length; ++d) {
        var b;
        if (d % 2 == 0) {
            b = h
        } else {
            b = f
        }
        if (typeof(b) == "object") {
            for (var a in b) {
                e[d].style[a] = b[a]
            }
        } else {
            e[d].className = b
        }
    }
}
function getCheckedVal(c, d) {
    if (d == null) {
        d = -1
    }
    var b = $j(c).find("input:checked");
    var e = "";
    var a = false;
    b.each(function(f) {
        if (f > d) {
            if (a) {
                e += ","
            }
            e += $(this).val();
            a = true
        }
    });
    return e
}
function checkAll(c, b) {
    var a = $j(b).find("input[type=checkbox]");
    a.each(function(d) {
        this.checked = c.checked
    })
}
function GetSearchURL(e, b) {
    if (b == null) {
        b = getIntactRawUrl()
    }
    var h = e.split("|");
    for (var f = 0; f < h.length; f++) {
        var c = h[f].split(",");
        var a;
        var g = document.getElementById(c[0]);
        if (c.length == 2) {
            a = c[1]
        } else {
            a = c[0]
        }
        if (g != null) {
            var d = g.value;
            if (d == "请输入关键词搜索") {
                d = ""
            }
            if (d != null) {
                b += "&" + a + "=" + encodeURIComponent(d)
            }
        }
    }
    return b
}
function SearchObjectByGet(c, b, a) {
    if (a == null) {
        a = false
    }
    var d = GetSearchURL(c, b);
    if (a) {
        return d
    }
    window.location.href = d
}
function SearchObjects(c, b) {
    if (c == "请填写关键词" || c == "请输入关键词") {
        $a("您还没有输入关键词，请填写后查询。");
        return
    }
    if (b == "product") {
        var a = "/Search/Index.aspx?objtype=product&kwd=" + escape(c);
        window.location.href = a
    } else {
        var a = "/Search/News.aspx?objtype=news&kwd=" + escape(c);
        window.location.href = a
    }
}
function GoToURL(c, b) {
    var a;
    a = SetURLField(a, c, b);
    location.href = a
}
function GoToURLByGet(c, b) {
    var a;
    a = location.href;
    a = SetURLField(a, "page", "1");
    a = SetURLField(a, c, b)
}
function SetURLField(a, f, c) {
    var b;
    b = a.indexOf("?");
    if (b == -1) {
        a += "?" + f + "=" + c
    } else {
        var d = f + "=";
        var e = a.indexOf(d);
        if (e != -1) {
            e += d.length;
            end = a.indexOf("&", e);
            if (end == -1) {
                a = a.substring(0, e) + c
            } else {
                a = a.substring(0, e) + c + a.substring(end)
            }
        } else {
            a = a + "&" + f + "=" + c
        }
    }
    return a
}
function readURLParameter(e) {
    var c = e + "=";
    var b = "";
    var a = location.href;
    var d = a.indexOf(c);
    if (d != -1) {
        d += c.length;
        end = a.indexOf("&", d);
        if (end == -1) {
            b = a.substring(d)
        } else {
            b = a.substring(d, end)
        }
    }
    return b
}
function focusToRemoveText(c) {
    var a = $(c);
    var b = (a.attr("hadfocused") == "1");
    if (!b) {
        a.val("");
        a.attr("hadfocused", "1")
    }
}
function SUR_ShowTable(f) {
    var e = "";
    var c;
    switch (f.SelectionMode) {
    case 1:
        c = "radio";
        break;
    case 2:
        c = "checkbox";
        break
    }
    switch (f.ShowMode) {
    case 1:
        e = '<div class="survey_1" style="width:' + f.Width + 'px;"><div class="sur_tit" style="width:' + (f.Width - 2) + 'px;">' + f.Title + '</div><table class="sur_tab" id="SUR_itemTab_' + f.SubjectId + '">';
        for (var b = 0; b < f.Items.length; ++b) {
            var d = f.Items[b];
            var a = "SUR_item_" + f.SubjectId + b;
            e += '<tr><td><input name="SUR_item' + f.SubjectId + '" type="' + c + '" value="' + d.id + '" id="' + a + '" /></td><td><label for="' + a + '">' + d.title + "</label></td></tr>"
        }
        e += '</table><div class="bot_btn2"><input type="button" value="提交" class="b15" onclick="SUR_senddata(this,' + f.ObjectName + ')" /><input type="button" onclick="window.open(\'/tools/survey.aspx?oid=' + f.SubjectId + '\')" value="查看" class="b16" /></div></div>';
        break
    }
    document.write(e)
}
function SUR_senddata(f, a) {
    var c = "SUR_post_msg_" + a.SubjectId;
    var d = "<span id='" + c + "'>正在提交,请稍后...</span>";
    var b = "/ajax.ashx?action=Survey&t=" + Math.random();
    var e = getCheckedVal("SUR_itemTab_" + a.SubjectId);
    if (e == null || e.length == 0) {
        $a("您至少需要选中一个投票项。");
        return
    }
    $(f).after(d).hide();
    $.post(b, {
        _SUR_SubjectID: a.SubjectId,
        _CheckedItems: e
    },
    function(h) {
        var i = gav(h, "state");
        var g = gav(h, "msg");
        if (i == "1") {
            $confirm("投票成功，感谢您的参与。", {
                title: "确定",
                toDo: function() {
                    hideConfirm()
                }
            },
            {
                title: "查看结果",
                toDo: function() {
                    window.open("/tools/survey.aspx?oid=" + a.SubjectId);
                    hideConfirm()
                }
            })
        } else {
            $a(g)
        }
        $j(c).remove();
        $(f).show()
    })
}
function LEW_ShowTable() {
    var a = '<div class="reports" id="LEAVEWORD_cntr" style="margin:0 auto 10px auto;"><h1>留言</h1><table id="LEAVEWORD_tab"><tr><th>* 标题：</th><td><input type="text" size="40" id="LEAVEWORD_txtTitle" /></td></tr><tr><th>* 联系人：</th><td><input type="text" size="10" id="LEAVEWORD_txtContact" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="30" id="LEAVEWORD_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="30" id="LEAVEWORD_txtMobile" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="30" id="LEAVEWORD_txtEmail" /></td></tr><tr><th>* 留言分类：</th><td id="LEAVEWORD_tdCats"></td></tr><tr><th>留言内容：</th><td><textarea style="width:230px;height:80px;" id="LEAVEWORD_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="sendLeaveword(this)" /> </td></tr></table></div>';
    document.write(a);
    fillLeavewordCategories()
}
function PAY_ShowTable() {
    var a = '<div class="reports" id="DIR_PAY_cntr" style="margin:0 auto 10px auto;"><h1>付款</h1><table id="DIR_PAY_tab" style="background:url(' + SKIN_PATH + 'img/Pay_ico.gif) no-repeat right top;width:400px;"><tr><tr><th>* 付款方式：</th><td><select id="DIR_PAY_ddlPayment"><option value="">请选择</option><option value="alipay">支付宝</option><option value="99bill">快钱</option></select></td></tr><th>* 付款人：</th><td><input type="text" size="20" id="DIR_PAY_txtPayer" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="20" id="DIR_PAY_txtEmail" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="20" id="DIR_PAY_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="20" id="DIR_PAY_txtMobile" /></td></tr><tr><th>我公司业务员姓名：</th><td><input type="text" size="20" id="DIR_PAY_txtSalesManName" /></td></tr><tr><th>* 付款金额：</th><td><input type="text" size="10" id="DIR_PAY_txtMoney" /></td></tr><tr><th>* 款项用途：</th><td><input type="text" size="40" id="DIR_PAY_txtUse" /></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="directPay(this)" /> </td></tr></table></div>';
    document.write(a)
}
function LoginCheck(a, c) {
    var b = window.location;
    if (a == undefined || a.length == 0) {
        $a("请输入用户名", "错误提示", "txtUsername");
        return
    }
    if (c == undefined || c.length == 0) {
        $a("请输入密码", "错误提示", "txtPassword");
        return
    }
    $.post("/ajax.ashx?action=logincheck&t=" + Math.random(), {
        username: a,
        password: c
    },
    function(d) {
        if (gav(d, "state") == "1") {
            $a(gav(d, "msg"));
            window.location.href = b
        } else {
            $a(gav(d, "msg"))
        }
    })
}
function xuanze() {
    var a = document.getElementById("seachkeywords").value;
    if (a == "请输入关键词搜索") {
        window.location.href = "/Search.html"
    } else {
        window.location.href = "/Search-" + a + ".html"
    }
}
$(function() {
    $("#seachkeywords").val("请输入关键词搜索").css({
        color: "#666"
    });
    $("#seachkeywords").click(function() {
        $(this).val("").css({
            color: "#000"
        })
    }).blur(function() {
        if ($.trim($(this).val()) == "") {
            $(this).val("请输入关键词搜索").css({
                color: "#666"
            })
        }
    })
});
function ChangeFontSize(b, a) {
    $(b).addClass("cur").siblings("a").removeClass("cur");
    $j("cntrBody").css("font-size", a).find("*").css("font-size", a)
}
function getUrlParms() {
    var b = new Object();
    var f = location.search.substring(1);
    var e = f.split("&");
    for (var c = 0; c < e.length; c++) {
        var g = e[c].indexOf("=");
        if (g == -1) {
            continue
        }
        var a = e[c].substring(0, g);
        var d = e[c].substring(g + 1);
        b[a] = unescape(d)
    }
    return b
}
function SetHome(c, d) {
    try {
        c.style.behavior = "url(#default#homepage)";
        c.setHomePage(d)
    } catch(b) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch(b) {
                alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。")
            }
            var a = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
            a.setCharPref("browser.startup.homepage", d)
        } else {
            alert("抱歉，您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!")
        }
    }
};

/*ajax.js*/

function productLoad() {
    productSelectCurrentPosition(SID);
    hits(ProductID, "product");
    writeComment(ProductID, MARK);
    addHistory(ProductID, MARK);
    initImages(ProductID);
    getHistory("product");
    getRecommentProductByHistory(ProductID);
    getRelevantViewed(ProductID);
    for (var a = 0; a < ARR_AD_MARK.length; ++a) {
        getAd(ARR_AD_MARK[a], "cntrAd_" + a)
    }
    checkSize()
}
function projectLoad() {
    productSelectCurrentPosition(SID);
    hits(ProjectID, "project");
    writeComment(ProjectID, MARK);
    addHistory(ProjectID, MARK);
    getHistory("project");
    getRecommentProjectByHistory(ProjectID);
    getRelevantViewedProject(ProjectID);
    for (var a = 0; a < ARR_AD_MARK.length; ++a) {
        getAd(ARR_AD_MARK[a], "cntrAd_" + a)
    }
    checkSize()
}
function checkSize() {
    $(document).ready(function() {
        $(".pro_kuang").find("li").click(function() {
            $(this).parent().find("a").removeClass();
            $(this).find("a").addClass("img")
        })
    })
}
function checkWishSize(g) {
    $(g).parent().find("a").removeClass();
    $(g).addClass("clicked");
    if ($("#txtAttr").html() == "") {
        $("#txtAttr").append($(g).attr("title"))
    } else {
        var a = new Array();
        a = $("#txtAttr").html().split(",");
        for (var e = 0; e < a.length; e++) {
            var b = a[e].split(":")[0];
            var d = $(g).attr("title").split(":")[0];
            var c = $(g).attr("title").split(":")[1];
            var f = b + ":" + c;
            if (b == d) {
                $("#txtAttr").html($("#txtAttr").html().replace(a[e], f));
                return
            }
        }
        $("#txtAttr").append("," + $(g).attr("title"))
    }
}
function getAttrValesPhotos(a) {
    $.post("/ajax.ashx?action=attrValuesPhotos&t=" + Math.random(), {
        oid: a
    },
    function(b) {
        $j("img_list").html(b)
    })
}
function switchProdTab(d) {
    var b = $(d);
    var a = b.attr("target_id");
    var c = b.parent().find("a[class=cr]");
    if (c.attr("target_id") == a) {
        return
    }
    c.removeClass("cr");
    b.addClass("cr");
    $j("cntrRelevantProd>div").hide();
    $j(a).show()
}
function gav(d, a) {
    var c = $(d);
    var b = $(c.find("node[key=" + a + "]")).text();
    return b
}
function initImages(c) {
    var a = '<li {$co$}><a href="{$path$}" target="_blank" title="{$title$}"><img title="{$title$}" alt="{$title$}" longdesc="{$path$}" src="{$path$}"  width="60" /></a></li>';
    var d = "";
    for (var b = 0; b < ARR_IMG_PATH.length; ++b) {
        if (b == 0) {
            d = a.replace(/\{\$co\$\}/ig, "class='now'").replace(/\{\$path\$\}/ig, ARR_IMG_PATH[b]).replace(/\{\$title\$\}/ig, OBJ_TITLE)
        } else {
            d += a.replace(/\{\$co\$\}/ig, "").replace(/\{\$path\$\}/ig, ARR_IMG_PATH[b]).replace(/\{\$title\$\}/ig, OBJ_TITLE)
        }
    }
    $("#img_list").html(d)
}
function setSelectedImg(a) {
    $(a).parent().find("a").removeClass("cur");
    $(a).addClass("cur")
}
function viewBigImage(b) {
    var c = window.location.host;
    var a = "/product/gallery.aspx?oid=" + b;
    if (c != "undefined") {
        a += "&selectedpath=http://" + c
    }
    window.open(a)
}
function switchImage(d) {
    var a = $(".MagicZoom");
    var b = a.find("img:eq(0)");
    var c = $(".MagicZoomBigImageCont img");
    var e = $(d).find("img").attr("srcimg");
    a.attr("href", e);
    b.attr("src", e);
    c.attr("src", e);
    $j("btnShowOrgiImg").click(function() {
        window.open(e, "orgiImg")
    })
}
function productSelectCurrentPosition(a) {
    $("div.nr h4[sid='" + a + "']").addClass("cur");
    $("div.nr h5[sid='" + a + "']").addClass("cur");
    $("div.nr li[sid='" + a + "']").addClass("cur")
}
function onclPrReAtts(b, f, a) {
    var g = false;
    $("#" + b).html(f);
    if (atts == null || atts == "") {
        atts = a + "," + f
    } else {
        var d = new Array();
        d = atts.split("$");
        if (d.length <= 0) {
            atts = atts + "$" + a + "," + f
        } else {
            atts = "";
            for (var e = 0; e < d.length; e++) {
                var h = "";
                var c = d[e].split(",");
                if (c.length == 2) {
                    h = c[1];
                    if (c[0] == a) {
                        h = f;
                        g = true
                    }
                    if (atts == null || atts == "") {
                        atts = c[0] + "," + h
                    } else {
                        atts = atts + "$" + c[0] + "," + h
                    }
                }
            }
            if (g == false) {
                if (atts == null || atts == "") {
                    atts = a + "," + f
                } else {
                    atts = atts + "$" + a + "," + f
                }
            }
        }
    }
}
function switchAttrTab(c) {
    var a = $(c);
    if (a.attr("class") == "cur") {
        return
    }
    var b = a.attr("item_name");
    $j("div__detail").hide();
    $j("div__attr").hide();
    $j("div__" + b).show();
    $(".prod_tab").find("a").removeClass("cur");
    a.addClass("cur")
}
function switchExtendAttrTab(f, g) {
    var d = f;
    var a = f.substring(f.length - 1, f.length);
    for (var b = 0; b < g; b++) {
        var c = "detailvalue" + b;
        var e = "detail" + b;
        if (a == b) {
            $j(c).show();
            $j(e).addClass("cur")
        } else {
            $j(c).hide();
            $j(e).removeClass()
        }
    }
}
function switchExtendContentTab(g, h, a) {
    var e = g;
    var b = g.substring(g.length - 1, g.length);
    for (var c = 0; c < h; c++) {
        var d = "contentvalue" + a + c;
        var f = "content" + a + c;
        if (b == c) {
            $j(d).show();
            $j(f).addClass("cur")
        } else {
            $j(d).hide();
            $j(f).removeClass()
        }
    }
}
$(function() {
    var e = 7;
    var v = 3;
    var a = 0;
    var u = 6;
    var b = 0;
    var d = 0;
    var m = 0;
    var p = "";
    var w = $("div.plc");
    var g = $("div.plc2");
    var r = $("div.pro_curmbs");
    var f = w.size() ? w: g;
    var l = f.size() ? f: r;
    var h = $("div.menu");
    var n = h.children("ul").children("li");
    var c = l.find("a");
    var k = c.size();
    var j = "cur";
    h.find("li").removeClass(j);
    var t = new Object();
    t.getCurrentURL = function() {
        switch (MARK) {
        case "product":
            p = v ? v: MARK;
            break;
        case "news":
            p = e ? e: MARK;
            break;
        case "project":
            p = b ? b: MARK;
            break;
        case "agent":
            p = a ? a: MARK;
            break;
        case "help":
            p = u ? u: MARK;
            break;
        case "download":
            p = d ? d: MARK;
            break;
        case "job":
            p = m ? m: MARK;
            break;
        default:
            p = 0;
            break
        }
        return p
    };
    t.firstLiCur = function() {
        h.find("li:first").addClass(j)
    };
    t.selectedCur = function() {
        n.children("a").each(function() {
            var x = $(this).attr("href").toLowerCase();
            x = x.substring(x.lastIndexOf("/") + 1);
            if (x == p) {
                $(this).parent("li").addClass(j);
                return false
            } else {
                if (typeof(p) == "number") {
                    n.eq(p).addClass(j);
                    return false
                }
            }
        })
    };
    t.selectedTxtCur = function() {
        n.children("a").each(function() {
            var x = $.trim($(this).text());
            if (x == o && o.indexOf("首页") == -1) {
                $(this).parent("li").addClass(j);
                return false
            }
        });
        return h.children("ul").children("li." + j)
    };
    t.hasCur = function() {
        var x = h.children("ul").children("li." + j).size();
        return x
    };
    if (typeof(MARK) == "undefined") {
        t.firstLiCur();
        return false
    }
    if (!k) {
        p = t.getCurrentURL();
        t.selectedCur()
    }
    for (var q = k - 1; q >= 0; q--) {
        p = c.eq(q).attr("href");
        var o = $.trim(c.eq(q).text());
        p = p.substring(p.lastIndexOf("/") + 1).toLowerCase();
        if (p == "" || p == undefined) {
            p = t.getCurrentURL()
        }
        var s = t.selectedTxtCur();
        if (s.size() && o.indexOf("首页") == -1) {
            s.parent("li").addClass(j);
            return false
        } else {
            t.selectedCur();
            if (t.hasCur()) {
                return false
            }
        }
    }
    if (!t.hasCur()) {
        p = MARK;
        t.selectedCur();
        if (!t.hasCur()) {
            t.firstLiCur()
        }
    } else {
        t.firstLiCur()
    }
});
function removeProductInfoTags() {
    if (!$.trim($("div.pd_attr").text())) {
        $("div.pd_attr").remove()
    }
    if (!$.trim($("div.pd_short").text())) {
        $("div.pd_short").remove()
    }
}
function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(),
    function(b) {
        var a = gav(b, "showIM");
        showIM(a);
        var c = gav(b, "username");
        if (c.length > 0) {
            $("#guest").hide();
            $("#user").show();
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(c);
            $j("commonHeaderUser").fadeIn(80)
        }
    })
}
function showIM(a) {
    if ($("#bodd").html() != "") {
        if (a == "True") {
            $("#bodd").show();
            $("#kefubtn").hide();
            $("#divOranIm").show()
        } else {
            $("#bodd").hide();
            $("#kefubtn").show();
            $("#divOranIm").hide()
        }
    }
}
function initCommonHeaderKeywords(a) {
    if (a == "") {
        a = "6"
    }
    $.post("/ajax.ashx?action=initcommonheaderkeywords&t=" + Math.random(), {
        s: a
    },
    function(b) {
        $j("commonHeaderkeywords").html(b)
    })
}
function hits(a, b) {
    $.post("/ajax.ashx?action=hits&t=" + Math.random(), {
        oid: a,
        mark: b
    })
}
function addHistory(a, b) {
    $.get("/ajax.ashx?action=addhistory&t=" + Math.random(), {
        oid: a,
        mark: b
    })
}
function getHistory(a) {
    $.post("/ajax.ashx?action=gethistory&t=" + Math.random(), {
        mark: a
    },
    function(b) {
        if (b.length == 0) {
            b = "<li>&nbsp;&nbsp;无浏览历史</li>"
        }
        $j("divHistoryCntr").html(b + "<div class='clear'></div>")
    })
}
function getHits(a, b) {
    $.post("/ajax.ashx?action=gethits", {
        mark: b,
        oid: a
    },
    function(c) {
        $j("cntrHits").html(c)
    })
}
function cleanHistory(b, a) {
    $.post("/ajax.ashx?action=cleanhistory", {
        mark: b
    },
    function(c) {
        $j("divHistoryCntr").html("<li>&nbsp;&nbsp;无浏览历史</li>")
    })
}
function subscription(d, a) {
    if (a == null) {
        a = "txtSubscriptionEmail"
    }
    var c = $.trim($j(a).val());
    var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (c.length == 0) {
        $a("E-Mail 不可为空");
        $j(a).focus();
        return false
    }
    if (!b.test(c)) {
        $a("E-Mail 格式错误。");
        $j(a).focus();
        return false
    }
    showProc(d);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: c
    },
    function(g) {
        var f = gav(g, "state");
        var e = gav(g, "msg");
        if (f == "1") {
            $a(e, 1)
        } else {
            $a(e)
        }
        showProc(d, false)
    })
}
function checkAuthority(b, a) {
    $.post("/ajax.ashx?action=checkauthority&t=" + Math.random(), {
        authIDs: b
    },
    function(c) {
        if (c == "1") {
            $j("div___________Perm").hide();
            document.oncontextmenu = function() {
                return true
            };
            document.onselectstart = function() {
                return true
            }
        } else {
            showMsgPage("您不具有查看 " + a + " 的权限。");
            return
        }
    })
}
function changeFavColumn(c, a) {
    var b = getCheckedVal(a);
    if (b.length == 0) {
        $a("无选中项。");
        return
    }
    showProc(c);
    $.post("/ajax.ashx?action=changefavcolumn&t=" + Math.random(), {
        ids: b,
        targetId: c.value
    },
    function(f) {
        var e = gav(f, "state");
        var d = gav(f, "msg");
        if (e == "1") {
            location.reload()
        } else {}
    });
    showProc(c, false)
}
function getRecommentProductByHistory(a) {
    $.post("/ajax.ashx?action=GetRecommentProductByHistory&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function getRecommentProjectByHistory(a) {
    $.post("/ajax.ashx?action=GetRecommentProjectByHistory&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function getRelevantSales(a) {
    $.post("/ajax.ashx?action=GetRelevantSales&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divRelevantSalesCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function getRelevantViewed(a) {
    $.post("/ajax.ashx?action=GetRelevantViewed&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function getRelevantViewedProject(a) {
    $.post("/ajax.ashx?action=GetRelevantViewedProject&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function getRelevantViewedDownload(a) {
    $.post("/ajax.ashx?action=GetRelevantViewedDownload&t=" + Math.random(), {
        oid: a
    },
    function(c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove()
        } else {
            b.html(c)
        }
    })
}
function delInitationlog(c, a) {
    var b = getCheckedVal(a);
    if (b.length == 0) {
        $a("无选中项。");
        return
    }
    showBgProc();
    $.post("/ajax.ashx?action=DelInitationlog&t=" + Math.random(), {
        ids: b
    },
    function(e) {
        if (gav(e, "state") == "1") {
            var d = $j(a).find("input[name=item]:checked");
            d.each(function(f) {
                $(this).parent().parent().remove()
            })
        } else {
            $a(gav(e, "msg"))
        }
        showBgProc(false)
    })
}
function directPay(a) {
    var f = $v("DIR_PAY_txtPayer");
    var k = $v("DIR_PAY_txtEmail");
    var h = $v("DIR_PAY_txtTel");
    var j = $v("DIR_PAY_txtMobile");
    var e = $v("DIR_PAY_txtSalesManName");
    var d = $v("DIR_PAY_txtMoney");
    var b = $v("DIR_PAY_txtUse");
    var c = $v("DIR_PAY_ddlPayment");
    var g = "";
    if (f.length == 0) {
        g += "<li>付款人不可为空。</li>"
    }
    if (k == "") {
        g += "<li>电子邮箱地址不可为空</li>"
    } else {
        if (!PTN_EMAIL.test(k)) {
            g += "<li>电子邮箱地址格式错误</li>"
        }
    }
    if (d.length == 0) {
        g += "<li>付款金额不可为空。</li>"
    } else {
        if (!PTN_FLOAT.test(d)) {
            g += "<li>付款金额必须为数字，如89.00。</li>"
        }
    }
    if (b.length == 0) {
        g += "<li>款项用途不可为空。</li>"
    }
    if (c.length == 0) {
        g += "<li>请选择付款方式。</li>"
    }
    if (g.length > 0) {
        $a(g);
        return
    }
    showProc(a);
    $.post("/ajax.ashx?action=DirectPay&t=" + Math.random(), {
        payer: f,
        email: k,
        tel: h,
        mobile: j,
        salesMan: e,
        _money: d,
        _use: b,
        payment: c
    },
    function(n) {
        var m = gav(n, "state");
        var l = gav(n, "msg");
        if (m == "1") {
            location.href = "/Paycenter/PayDirectConfirm.aspx";
            return
        } else {
            $a(l)
        }
        showProc(a, false)
    })
}
function submitOrder(a, e) {
    showProc(a);
    var d = $j("txtContact").val();
    var j = $j("txtCompName").val();
    var k = $j("txtTel").val();
    var h = $j("txtMobile").val();
    var m = $j("txtEmail").val();
    var c = $j("txtAddr").val();
    var g = $j("txtContent").val();
    var n = $j("txtValidate").val();
    var f = "";
    if (d.length == 0) {
        f += "<p>联系人不可为空</p>"
    }
    if (h.length == 0) {
        f += "<p>手机不可为空</p>"
    }
    var l = /^\d{11,13}$/;
    if (h.length > 0 && !l.test(h)) {
        f += "<p>手机格式错误</p>"
    }
    var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (m.length > 0 && !b.test(m)) {
        f += "<p>E-Mail格式错误</p>"
    }
    if (g.length == 0) {
        f += "<p>采购意向描述不可为空</p>"
    }
    if (n.length == 0) {
        f += "<p>验证码不可为空</p>"
    }
    if (f.length > 0) {
        $a(f);
        showProc(a, false);
        return
    }
    $.post("/ajax.ashx?action=submitorder&t=" + Math.random(), {
        oid: e,
        contact: d,
        compName: j,
        tel: k,
        mobile: h,
        email: m,
        addr: c,
        content: g,
        vali: n
    },
    function(q) {
        var p = gav(q, "state");
        var o = gav(q, "msg");
        if (p == "1") {
            $a(o, 1);
            emptyText("tbForm1");
            document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?" + new Date().getTime()
        } else {
            $a(o);
            if ($.trim(o).indexOf("验证码错误") != -1) {
                document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?" + new Date().getTime()
            } else {
                emptyText("tbForm1")
            }
        }
    });
    showProc(a, false)
}
function showProductInfo(h, c, g) {
    var f = null;
    var e = null;
    var a = null;
    var d = null;
    $(h).hover(function() {
        f = new Date();
        b()
    },
    function() {
        window.clearInterval(a)
    });
    function b() {
        a = window.setInterval(function() {
            e = new Date();
            d = e - f;
            if (d > 400) {
                if ($(h).parent().parent().next().attr("class") == "mesbook4" || $(h).parent().parent().next().attr("class") == "mesbook40") {
                    if ($(h).parent().parent().next().is(":visible")) {
                        return
                    } else {
                        $(h).parent().parent().next().show()
                    }
                } else {
                    $.post("/ajax.ashx?action=showProductInfo&t=" + Math.random(), {
                        oid: c,
                        index: g
                    },
                    function(j) {
                        if ($(h).parent().parent().next().attr("class") == "mesbook4" || $(h).parent().parent().next().attr("class") == "mesbook40") {
                            return
                        } else {
                            $(h).parent().parent().after(j);
                            return
                        }
                    })
                }
            }
        },
        450)
    }
}
function showProductInfos(g, c) {
    var f = null;
    var e = null;
    var a = null;
    var d = null;
    $(g).hover(function() {
        f = new Date();
        b()
    },
    function() {
        window.clearInterval(a)
    });
    function b() {
        a = window.setInterval(function() {
            e = new Date();
            d = e - f;
            if (d > 400) {
                if ($(g).parent().parent().next().attr("class") == "mesbook44") {
                    if ($(g).parent().parent().next().is(":visible")) {
                        return
                    } else {
                        $(g).parent().parent().next().show()
                    }
                } else {
                    $.post("/ajax.ashx?action=showProductInfos&t=" + Math.random(), {
                        oid: c
                    },
                    function(h) {
                        if ($(g).parent().parent().next().attr("class") == "mesbook44") {
                            return
                        } else {
                            $(g).parent().parent().after(h);
                            return
                        }
                    })
                }
            }
        },
        450)
    }
}
function hideProductInfo(a) {
    if ($(a).parent().parent().next().attr("class") == "mesbook4" || $(a).parent().parent().next().attr("class") == "mesbook40" || $(a).parent().parent().next().attr("class") == "mesbook44") {
        $(a).parent().parent().next().mouseover(function() {
            $(a).parent().parent().next().show();
            return
        });
        $(a).parent().parent().next().mouseout(function() {
            $(a).parent().parent().next().hide();
            return
        });
        $(a).parent().parent().next().hide()
    }
}
function showProductTips(b) {
    var a = $j("div_nsw_tips");
    if (a.length == 0) {
        var c = "<div class='mesbook5' id='div_nsw_tips'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>产品预定</h1><h4>告诉我该产品的好消息</h4><div class='con'>您需要等待该产品的上架吗？一旦该产品的价格降价之后，我们会第一时间把该商品的价格清单发送到您的电子邮件。</div> <h5>如果打折则发送电子邮件给我</h5><div class='inp'><input id='rdoTip1' type='radio' name='rdoTips' value='0' checked='true' /><label for='rdoTip1'>仅仅当前该产品</label></div><div class='inp'><input id='rdoTip2' type='radio' name='rdoTips' value='1' /><label for='rdoTip2'>当前产品所属分类</label></div><div class='inp'><input  id='rdoTip3' type='radio' name='rdoTips' value='2' /><label for='rdoTip3'>所有打折清单</label></div><div class='inp'><span>Email:</span><input type='text' id='txtEmail' name='txtEmail'  class='text' /><input id='txtHide' name='txtHide' type='hidden' value='" + b + "' /></div><div class='inp'><span>简述:</span><textarea id='txtContent' name='txtContent'class='textarea'></textarea></div><div class='mes_btn'><input type='button' class='b61' value='提  交' onclick=\"submitProductTips('txtHide','txtEmail','txtContent','rdoTips')\" /><input type='button' class='b62' value='取  消' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\" /></div></div>";
        $(document.body).append(c)
    }
    setCM("div_nsw_tips");
    showFullBg("div_nsw_tips_bg");
    relocation("div_nsw_tips")
}
function submitProductTips(e, f, c, d) {
    var e = $j("txtHide").val();
    var f = $j("txtEmail").val();
    var c = $j("txtContent").val();
    var a = $("input[name=rdoTips]:checked").val();
    if (c.length > 500) {
        $a("简述太长，不能超过500个字节，请填写简短描述")
    }
    var b = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (f.length == 0) {
        $a("E-Mail 不可为空");
        return false
    }
    if (!b.test(f)) {
        $a("E-Mail 格式错误");
        return false
    }
    $.post("/ajax.ashx?action=postProductTips&t=" + Math.random(), {
        oid: e,
        email: f,
        content: c,
        state: a
    },
    function(g) {
        if (gav(g, "state") == "1") {
            $a(gav(g, "msg"), 1)
        } else {
            $a(gav(g, "msg"))
        }
    });
    $j("div_nsw_tips").hide();
    hideFullBg("div_nsw_tips_bg")
}
function showMyWish(b) {
    var a = $j("div_nsw_wishs");
    if (a.length == 0) {
        var c = '<div class="mesbook6" id="div_nsw_wishs"></div>';
        $(document.body).append(c)
    }
    $.post("/ajax.ashx?action=showMyWish&t=" + Math.random(), {
        oid: b
    },
    function(d) {
        $j("div_nsw_wishs").html(d)
    });
    setCM("div_nsw_wishs");
    showFullBg("div_nsw_wishs_bg");
    relocation("div_nsw_wishs")
}
function submitProductWishs(b, c, a) {
    var b = $j("txtHide").val();
    var c = $j("txtAttr").html();
    var a = $j("txtNum").val();
    $.post("/ajax.ashx?action=postProductWishs&t=" + Math.random(), {
        oid: b,
        attr: c,
        num: a
    },
    function(d) {
        if (gav(d, "state") == "1") {
            $a(gav(d, "msg"), 1)
        } else {
            $a(gav(d, "msg"))
        }
    });
    $j("div_nsw_wishs").hide();
    hideFullBg("div_nsw_wishs_bg")
}
function sendGetProductsNotify(c) {
    var b = $j("ddlProductsColumns").val();
    var a = $j("txtSearch").val();
    if (a == "关键词") {
        a = ""
    }
    $.post("/ajax.ashx?action=sendGetProductsByColumn&t=" + Math.random(), {
        columnID: b,
        searchText: a
    },
    function(d) {
        InitDropdownlist(document.getElementById("PackageSelectList"), "请选择关联资讯", "0", d)
    })
}
function InitDropdownlist(e, d, c, f) {
    var a = e.options.length;
    for (i = 0; i < a; i++) {
        e.remove(0)
    }
    var b = f.split("||");
    a = b.length;
    if (a) {
        for (i = 0; i < a - 1; i++) {
            text_value = b[i].split("$$");
            text = text_value[1];
            value = text_value[0];
            e.add(new Option(text, value))
        }
    }
}
function userorder(a) {
    var b = $tv("txtname");
    var e = $tv("txttitle");
    var c = $tv("txtemail");
    var j = $tv("txttel");
    var f = $tv("txtcontent");
    var h = $tv("txtaddress");
    var k = $tv("txtenddate");
    var g = $("#PackagePickList").val();
    if (e == "") {
        $a("定单名称不能为空", "txttitle");
        return
    }
    if (b == "") {
        $a("下单人姓名不能为空", "txtname");
        return
    }
    if (j == "") {
        $a("联系电话不能为空", "txttel");
        return
    }
    if (h == "") {
        $a("联系地址不能为空", "txtaddress");
        return
    }
    if (k == "") {
        $a("到货时间不能为空", "txtenddate");
        return
    }
    if (f == "" || f.length > 1000) {
        $a("详细描述不能为空或者大于1000字", "txtcontent");
        return
    } else {
        var l = $.trim($(a).attr("value"));
        var d = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!d.test(c)) {
            $a("E-Mail错误");
            return false
        }
    }
    $.post("/ajax.ashx?action=agentorder&t=" + Math.random(), {
        s_name: b,
        s_title: e,
        s_email: c,
        s_tel: j,
        s_content: f,
        s_address: h,
        s_enddate: k,
        s_IDList: g
    },
    function(o) {
        var n = gav(o, "state");
        var m = gav(o, "msg");
        if (n == "1") {
            showMsgPage("<li>定单提交成功，我们会尽快与您联系，谢谢！</li>", 1, "/User/UserOrder.aspx", "在线定单", "/User/UserOrder.aspx");
            return
        } else {
            if (m.length > 0) {
                $a(m)
            } else {
                $a(o)
            }
        }
    })
}
function delAgentOrder(c, a) {
    var b = getCheckedVal(a);
    if (b.length == 0) {
        $a("无选中项。");
        return
    }
    showBgProc();
    $.post("/ajax.ashx?action=delAgentOrder&t=" + Math.random(), {
        ids: b
    },
    function(e) {
        if (gav(e, "state") == "1") {
            var d = $j(a).find("input[name=item]:checked");
            d.each(function(f) {
                $(this).parent().parent().remove()
            });
            $a(gav(e, "msg"), 1)
        } else {
            $a(gav(e, "msg"))
        }
        showBgProc(false)
    })
}
function AddCompare(b) {
    var c = false;
    if (b.checked) {
        c = true;
        $(b).next().next().next().show()
    } else {
        c = false;
        $(b).next().next().next().hide()
    }
    var a = $(b).val();
    $.post("/ajax.ashx?action=addCompare&t=" + Math.random(), {
        ids: a,
        flag: c
    },
    function(g) {
        if (gav(g, "state") == "1") {
            var f = gav(g, "newcookie");
            var d = new Array();
            d = f.split(",");
            if (d.length > 0) {
                for (var e = 0; e < d.length; e++) {
                    if (e == d.length - 1) {
                        $(".pro_main").find("input[id=" + d[e] + "]").show()
                    } else {
                        $(".pro_main").find("input[id=" + d[e] + "]").hide()
                    }
                }
            }
        }
    })
}
function DelOneCompare(b) {
    var a = $(b).attr("id");
    $.post("/ajax.ashx?action=delOneCompare&t=" + Math.random(), {
        ids: a
    },
    function(c) {
        if (gav(c, "state") == "1") {
            window.location = "/product/Compare.aspx"
        } else {
            showMsgPage("<li>产品对比车中不存在对比的产品记录，请选择需要对比的产品</li>", 0, "/", "首页", "/")
        }
    })
}
function DelAllCompare() {
    $.post("/ajax.ashx?action=delAllCompare&t=" + Math.random(), {},
    function(a) {
        showMsgPage("<li>产品对比车中所有产品已移除，您可以继续挑选产品进行比较</li>", 1, "/", "首页", "/")
    })
}
function getSubSiteInfos() {
    $.post("/ajax.ashx?action=subsiteinfos&t=" + Math.random(), {
        domain: document.domain
    },
    function(c) {
        var a = gav(c, "phone");

        var b = gav(c, "address");
        $("#phones").html(a)
    })
}
function getSubSiteInfo() {
    $.post("/ajax.ashx?action=subsiteinfo&t=" + Math.random(), {
        domain: document.domain
    },
    function(a) {
        if (a) {
            $("#site ul").html(a)
        } else {
            $("#site").remove()
        }
    })
}

/*jqzoom.pack.1.0.1.js*/

eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '': e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
} ('(6($){$.30.31=6(G){I H={17:\'32\',18:2l,19:2l,1a:10,1b:0,Q:"2m",2n:1s,2o:12,2p:0.3,14:1s,1p:12,2q:\'1g\',2r:\'23\',2s:\'24\',2t:\'33\',2u:12,2v:1s,2w:\'34 35\',2x:\'1t\'};G=G||{};$.36(H,G);R 4.37(6(){I a=$(4);I d=a.1q(\'14\');$(a).1Q(\'14\');$(a).J(\'38-K\',\'1r\');$(a).J(\'39-3a\',\'1r\');I f=$(a).1q(\'3b\');I g=$("1H",4);I j=g.1q(\'14\');g.1Q(\'14\');I k=U 25(g);I l={};I m=0;I n=0;I p=1u;p=U 1R();I q=(26(d).Y>0)?d:(26(j).Y>0)?j:1u;I r=U 27();I s=U 1v(a[0].2y);I t=U 1c();I u={};I v=12;I y={};I z=1u;I A=12;I B={};I C=0;I D=12;I E=12;I F=12;k.1I();$(4).3c(6(){R 12});$(4).3d(6(e){B.x=e.1w;B.y=e.1x;k.1S();1d()},6(){k.1S();2z()});8(H.1p){2A(6(){1d()},3e)}6 1d(){8(!A){k.28();A=1s;j=g.1q(\'14\');g.1Q(\'14\');d=a.1q(\'14\');$(a).1Q(\'14\');s=U 1v(a[0].2y);8(!v||$.1e.2B){s.1I()}V{8(H.17!=\'1j\'){z=U 1J();z.1d()}t=U 1c;t.1d()}a[0].3f();R 12}};6 2z(){8(H.17==\'1K\'&&!H.1p){g.J({\'1T\':1})}8(!H.1p){A=12;v=12;$(t.5).29(\'1L\');t.Z();8($(\'P.1M\').Y>0){z.Z()}8($(\'P.2a\').Y>0){r.Z()}g.1q(\'14\',j);a.1q(\'14\',d);$().29();a.29(\'1L\');C=0;8(1y(\'.2b\').Y>0){1y(\'.2b\').Z()}}V{8(H.2o){1k(H.17){11\'1j\':s.2c();N;1l:t.1t();N}}}8(H.1p){1d()}};6 25(c){4.5=c[0];4.1I=6(){4.5.1m=c[0].1m};4.28=6(){I a=\'\';a=$(g).J(\'2C-L-W\');m=\'\';I b=\'\';b=$(g).J(\'2C-M-W\');n=\'\';8(a){1U(i=0;i<3;i++){I x=[];x=a.1n(i,1);8(1V(x)==12){m=m+\'\'+a.1n(i,1)}V{N}}}8(b){1U(i=0;i<3;i++){8(!1V(b.1n(i,1))){n=n+b.1n(i,1)}V{N}}}m=(m.Y>0)?1W(m):0;n=(n.Y>0)?1W(n):0};4.5.2D=6(){a.J({\'2E\':\'2F\',\'1h\':\'1X\'});8(a.J(\'Q\')!=\'15\'&&a.2d().J(\'Q\')){a.J({\'2E\':\'2F\',\'Q\':\'2G\',\'1h\':\'1X\'})}8(a.2d().J(\'Q\')!=\'15\'){a.2d().J(\'Q\',\'2G\')}V{}8($.1e.2B||$.1e.3g){$(g).J({Q:\'15\',L:\'2H\',M:\'2H\'})}l.w=$(4).W();l.h=$(4).1f();l.9=$(4).1i();l.9.l=$(4).1i().M;l.9.t=$(4).1i().L;l.9.r=l.w+l.9.l;l.9.b=l.h+l.9.t;a.1f(l.h);a.W(l.w);8(H.2u){k.1S();s.1I()}};R 4};25.13.1S=6(){l.9=$(g).1i();l.9.l=$(g).1i().M;l.9.t=$(g).1i().L;l.9.r=l.w+l.9.l;l.9.b=l.h+l.9.t};6 1c(){4.5=16.2e("P");$(4.5).1Y(\'X\');4.5.3h=6(){$(t.5).Z();t=U 1c();t.1d()};4.2I=6(){1k(H.17){11\'1K\':4.1z=U 1Z();4.1z.1m=k.5.1m;4.5.1N(4.1z);$(4.5).J({\'1T\':1});N;11\'1j\':4.1z=U 1Z();4.1z.1m=s.5.1m;4.5.1N(4.1z);$(4.5).J({\'1T\':1});N;1l:N}1k(H.17){11\'1j\':u.w=l.w;u.h=l.h;N;1l:u.w=(H.18)/y.x;u.h=(H.19)/y.y;N}$(4.5).J({W:u.w+\'S\',1f:u.h+\'S\',Q:\'15\',1h:\'1r\',3i:1+\'S\'});a.3j(4.5)};R 4};1c.13.1d=6(){4.2I();1k(H.17){11\'1K\':g.J({\'1T\':H.2p});(H.1p)?t.1t():t.1o(1u);a.2f(\'1L\',6(e){B.x=e.1w;B.y=e.1x;t.1o(e)});N;11\'1j\':$(4.5).J({L:0,M:0});8(H.14){r.2g()}s.2c();a.2f(\'1L\',6(e){B.x=e.1w;B.y=e.1x;s.2J(e)});N;1l:(H.1p)?t.1t():t.1o(1u);$(a).2f(\'1L\',6(e){B.x=e.1w;B.y=e.1x;t.1o(e)});N}R 4};1c.13.1o=6(e){8(e){B.x=e.1w;B.y=e.1x}8(C==0){I b=(l.w)/2-(u.w)/2;I c=(l.h)/2-(u.h)/2;$(\'P.X\').1g();8(H.2n){4.5.K.20=\'2K\'}V{4.5.K.20=\'2h\';$(\'P.X\').23()}C=1}V{I b=B.x-l.9.l-(u.w)/2;I c=B.y-l.9.t-(u.h)/2}8(2L()){b=0+n}V 8(2M()){8($.1e.1O&&$.1e.2i<7){b=l.w-u.w+n-1}V{b=l.w-u.w+n-1}}8(2N()){c=0+m}V 8(2O()){8($.1e.1O&&$.1e.2i<7){c=l.h-u.h+m-1}V{c=l.h-u.h-1+m}}b=1A(b);c=1A(c);$(\'P.X\',a).J({L:c,M:b});8(H.17==\'1K\'){$(\'P.X 1H\',a).J({\'Q\':\'15\',\'L\':-(c-m+1),\'M\':-(b-n+1)})}4.5.K.M=b+\'S\';4.5.K.L=c+\'S\';s.1o();6 2L(){R B.x-(u.w+2*1)/2-n<l.9.l}6 2M(){R B.x+(u.w+2*1)/2>l.9.r+n}6 2N(){R B.y-(u.h+2*1)/2-m<l.9.t}6 2O(){R B.y+(u.h+2*1)/2>l.9.b+m}R 4};1c.13.1t=6(){$(\'P.X\',a).J(\'1h\',\'1r\');I b=(l.w)/2-(u.w)/2;I c=(l.h)/2-(u.h)/2;4.5.K.M=b+\'S\';4.5.K.L=c+\'S\';$(\'P.X\',a).J({L:c,M:b});8(H.17==\'1K\'){$(\'P.X 1H\',a).J({\'Q\':\'15\',\'L\':-(c-m+1),\'M\':-(b-n+1)})}s.1o();8($.1e.1O){$(\'P.X\',a).1g()}V{2A(6(){$(\'P.X\').2P(\'24\')},10)}};1c.13.1P=6(){I o={};o.M=1A(4.5.K.M);o.L=1A(4.5.K.L);R o};1c.13.Z=6(){8(H.17==\'1j\'){$(\'P.X\',a).2Q(\'24\',6(){$(4).Z()})}V{$(\'P.X\',a).Z()}};1c.13.28=6(){I a=\'\';a=$(\'P.X\').J(\'3k\');1B=\'\';I b=\'\';b=$(\'P.X\').J(\'3l\');1C=\'\';8($.1e.1O){I c=a.2R(\' \');a=c[1];I c=b.2R(\' \');b=c[1]}8(a){1U(i=0;i<3;i++){I x=[];x=a.1n(i,1);8(1V(x)==12){1B=1B+\'\'+a.1n(i,1)}V{N}}}8(b){1U(i=0;i<3;i++){8(!1V(b.1n(i,1))){1C=1C+b.1n(i,1)}V{N}}}1B=(1B.Y>0)?1W(1B):0;1C=(1C.Y>0)?1W(1C):0};6 1v(a){4.2S=a;4.5=U 1Z();4.1I=6(){8(!4.5)4.5=U 1Z();4.5.K.Q=\'15\';4.5.K.1h=\'1r\';4.5.K.M=\'-3m\';4.5.K.L=\'3n\';p=U 1R();8(H.2v&&!D){p.1g();D=1s}16.2j.1N(4.5);4.5.1m=4.2S};4.5.2D=6(){4.K.1h=\'1X\';I w=O.21($(4).W());I h=O.21($(4).1f());4.K.1h=\'1r\';y.x=(w/l.w);y.y=(h/l.h);8($(\'P.1D\').Y>0){$(\'P.1D\').Z()}v=1s;8(H.17!=\'1j\'&&A){z=U 1J();z.1d()}8(A){t=U 1c();t.1d()}8($(\'P.1D\').Y>0){$(\'P.1D\').Z()}};R 4};1v.13.1o=6(){4.5.K.M=O.1E(-y.x*1A(t.1P().M)+n)+\'S\';4.5.K.L=O.1E(-y.y*1A(t.1P().L)+m)+\'S\'};1v.13.2J=6(e){4.5.K.M=O.1E(-y.x*O.T(e.1w-l.9.l))+\'S\';4.5.K.L=O.1E(-y.y*O.T(e.1x-l.9.t))+\'S\';$(\'P.X 1H\',a).J({\'Q\':\'15\',\'L\':4.5.K.L,\'M\':4.5.K.M})};1v.13.2c=6(){4.5.K.M=O.1E(-y.x*O.T((l.w)/2))+\'S\';4.5.K.L=O.1E(-y.y*O.T((l.h)/2))+\'S\';$(\'P.X 1H\',a).J({\'Q\':\'15\',\'L\':4.5.K.L,\'M\':4.5.K.M})};6 1J(){I a=1y(g).1i().M;I b=1y(g).1i().L;4.5=16.2e("P");$(4.5).1Y(\'1M\');$(4.5).J({Q:\'15\',W:O.21(H.18)+\'S\',1f:O.21(H.19)+\'S\',1h:\'1r\',2T:3o,3p:\'2h\'});1k(H.Q){11"2m":a=(a+$(g).W()+O.T(H.1a)+H.18<$(16).W())?(a+$(g).W()+O.T(H.1a)):(a-H.18-10);1F=b+H.1b+H.19;b=(1F<$(16).1f()&&1F>0)?b+H.1b:b;N;11"M":a=(l.9.l-O.T(H.1a)-H.18>0)?(l.9.l-O.T(H.1a)-H.18):(l.9.l+l.w+10);1F=l.9.t+H.1b+H.19;b=(1F<$(16).1f()&&1F>0)?l.9.t+H.1b:l.9.t;N;11"L":b=(l.9.t-O.T(H.1b)-H.19>0)?(l.9.t-O.T(H.1b)-H.19):(l.9.t+l.h+10);1G=l.9.l+H.1a+H.18;a=(1G<$(16).W()&&1G>0)?l.9.l+H.1a:l.9.l;N;11"3q":b=(l.9.b+O.T(H.1b)+H.19<$(16).1f())?(l.9.b+O.T(H.1b)):(l.9.t-H.19-10);1G=l.9.l+H.1a+H.18;a=(1G<$(16).W()&&1G>0)?l.9.l+H.1a:l.9.l;N;1l:a=(l.9.l+l.w+H.1a+H.18<$(16).W())?(l.9.l+l.w+O.T(H.1a)):(l.9.l-H.18-O.T(H.1a));b=(l.9.b+O.T(H.1b)+H.19<$(16).1f())?(l.9.b+O.T(H.1b)):(l.9.t-H.19-O.T(H.1b));N}4.5.K.M=a+\'S\';4.5.K.L=b+\'S\';R 4};1J.13.1d=6(){8(!4.5.3r)4.5.1N(s.5);8(H.14){r.2g()}16.2j.1N(4.5);1k(H.2q){11\'1g\':$(4.5).1g();N;11\'3s\':$(4.5).2P(H.2s);N;1l:$(4.5).1g();N}$(4.5).1g();8($.1e.1O&&$.1e.2i<7){4.3t=$(\'<2U 3u="2b" 3v="3w" 3x="0"  1m="#"  K="3y-3z: 2V" 3A="2V"></2U>\').J({Q:"15",M:4.5.K.M,L:4.5.K.L,2T:3B,W:(H.18+2),1f:(H.19)}).3C(4.5)};s.5.K.1h=\'1X\'};1J.13.Z=6(){1k(H.2r){11\'23\':$(\'.1M\').Z();N;11\'3D\':$(\'.1M\').2Q(H.2t);N;1l:$(\'.1M\').Z();N}};6 27(){4.5=1y(\'<P />\').1Y(\'2a\').2W(\'\'+q+\'\');4.2g=6(){8(H.17==\'1j\'){$(4.5).J({Q:\'15\',L:l.9.b+3,M:(l.9.l+1),W:l.w}).2k(\'2j\')}V{$(4.5).2k(z.5)}}};27.13.Z=6(){$(\'.2a\').Z()};6 1R(){4.5=16.2e("P");$(4.5).1Y(\'1D\');$(4.5).2W(H.2w);$(4.5).2k(a).J(\'20\',\'2h\');4.1g=6(){1k(H.2x){11\'1t\':2X=(l.h-$(4.5).1f())/2;2Y=(l.w-$(4.5).W())/2;$(4.5).J({L:2X,M:2Y});N;1l:I a=4.1P();N}$(4.5).J({Q:\'15\',20:\'2K\'})};R 4};1R.13.1P=6(){I o=1u;o=$(\'P.1D\').1i();R o}})}})(1y);6 26(a){2Z(a.22(0,1)==\' \'){a=a.22(1,a.Y)}2Z(a.22(a.Y-1,a.Y)==\' \'){a=a.22(0,a.Y-1)}R a};', 62, 226, '||||this|node|function||if|pos|||||||||||||||||||||||||||||||||||var|css|style|top|left|break|Math|div|position|return|px|abs|new|else|width|jqZoomPup|length|remove||case|false|prototype|title|absolute|document|zoomType|zoomWidth|zoomHeight|xOffset|yOffset|Lens|activate|browser|height|show|display|offset|innerzoom|switch|default|src|substr|setposition|alwaysOn|attr|none|true|center|null|Largeimage|pageX|pageY|jQuery|image|parseInt|lensbtop|lensbleft|preload|ceil|topwindow|leftwindow|img|loadimage|Stage|reverse|mousemove|jqZoomWindow|appendChild|msie|getoffset|removeAttr|Loader|setpos|opacity|for|isNaN|eval|block|addClass|Image|visibility|round|substring|hide|fast|Smallimage|trim|zoomTitle|findborder|unbind|jqZoomTitle|zoom_ieframe|setcenter|parent|createElement|bind|loadtitle|hidden|version|body|appendTo|200|right|lens|lensReset|imageOpacity|showEffect|hideEffect|fadeinSpeed|fadeoutSpeed|preloadImages|showPreload|preloadText|preloadPosition|href|deactivate|setTimeout|safari|border|onload|cursor|crosshair|relative|0px|loadlens|setinner|visible|overleft|overright|overtop|overbottom|fadeIn|fadeOut|split|url|zIndex|iframe|transparent|html|loadertop|loaderleft|while|fn|jqzoom|standard|slow|Loading|zoom|extend|each|outline|text|decoration|rel|click|hover|150|blur|opera|onerror|borderWidth|append|borderTop|borderLeft|5000px|10px|10000|overflow|bottom|firstChild|fadein|ieframe|class|name|content|frameborder|background|color|bgcolor|99|insertBefore|fadeout'.split('|'), 0, {}))

/*pshow2.js*/

$(function() {
    if ($(".proviewbox").length) {
        var h = 0;
        var e = $(".ul_prothumb"),
        i = $(".ul_prothumb li");
        var c = i.length;
        var d = $(".probigshow");
        var j = '<div class="zoomplepopup"></div><div id="probig_preview" ><img  alt="" /></div>';
        d.append(j);
        var o = $("#probig_preview");
        var a = $(".probigshow");
        var n = $(".probigshow .zoomplepopup");
        var g = $("#a_enlarge").attr("href");
        var k = Math.floor(c / 4),
        f = i.width() * 4;
        var m;
        function l() {
            if (h == 0) {
                $(".span_prev").addClass("span_prevb")
            } else {
                $(".span_prev").removeClass("span_prevb")
            }
            if (h == k) {
                $(".span_next").addClass("span_nextb")
            } else {
                $(".span_next").removeClass("span_nextb")
            }
        }
        if (h < 1) {
            var b = $(".a_probigshow:first").attr("ref");
            a.attr("src", b)
        } else {
            a.attr("src", i.find("a").attr("href"))
        }
        l();
        $("#a_enlarge").attr("href", g + "#0");
        $(".span_prev").click(function() {
            if (h > 0) {
                h--;
                $(".ul_prothumb").animate({
                    left: "+=" + f
                })
            }
            l()
        });
        $(".span_next").click(function() {
            if (h < k) {
                h++;
                $(".ul_prothumb").animate({
                    left: "-=" + f
                })
            }
            l()
        });
        window.lichange = function(p) {
            var q = i.eq(p);
            if (typeof(OBJ_TITLE) != "undefined") {
                a.find("img").attr({
                    src: (q.find("a").attr("href")),
                    title: OBJ_TITLE
                });
                a.find("a").attr({
                    href: (q.find("a").attr("href")),
                    title: OBJ_TITLE
                })
            } else {
                a.find("img").attr("src", (q.find("a").attr("href")));
                a.find("a").attr("href", (q.find("a").attr("href")))
            }
            $(".a_probigshow img").attr("src", q.find("img").attr("longdesc"));
            $("#a_enlarge").attr("href", g + "#" + p);
            i.removeClass("now").eq(p).addClass("now")
        };
        i.mouseenter(function() {
            var p = i.index($(this));
            m = setTimeout("lichange(" + p + ")", 150)
        }).mouseleave(function() {
            clearTimeout(m)
        }).click(function() {
            var p = i.index($(this));
            lichange(p);
            return false
        })
    }
});

$(function() {
    if (!$.trim($("div.pd_attr").text())) {
        $("div.pd_attr").remove()
    }
});

function muneCur2() {
    var e = location.href.substring(location.href.replace("//", "").indexOf("/") + 2).toLowerCase();
    e.indexOf("/") > 0 && (e = e.substring(0, e.length - 1));
    var t = $(".h_nav").find("li"),
    n = "";
    for (var r = 0; r < t.length; ++r) {
        n = $(t[r]).find("a").attr("href").toLowerCase(),
        $(".h_nav  li").removeClass("cur");
        if (n.indexOf(e) > 0) {
            if ($(t[r]).attr("class") == "nobg") {
                $(t[r]).attr("class", "nobg cur");
                break
            }
            $(t[r]).attr("class", "cur");
            break
        }
    }
}

function postComment(e, c, d) {

    showProc(e);

    var imgs = $("#imgShow").attr("src");

    var pimg = "";

    if (imgs != "/UploadFiles/Others/20140701183317_13218.png") {

        pimg = imgs

    }

    var a = $tv("txtCmtContent");

    var b = $tv("txtCmtVerCode");

    if (a == "") {

        $a("内容必填。");

        showProc(e, false);

        return

    }

    if ($g("txtVerCode") != null && s_verCode == "") {

        $a("验证码不可空。");

        showProc(e, false);

        return

    }

    $.post("/ajax.ashx?action=postcomment&t=" + Math.random(), {

        content: a,

        oid: c,

        verCode: b,

        mark: d,

        pimg: pimg

    },

    function(h) {

        var k = gav(h, "state");

        var j = gav(h, "msg");

        if (k == "") {

            $a(h, -1)

        } else {

            if (k == "2") {

                $a(j, 1);

                emptyText("tbCmt")

            } else {

                if (k == "1") {

                    var o = gav(h, "time");

                    var g = gav(h, "username");

                    var p = gav(h, "ip");

                    var m = gav(h, "comment");

                    var f = gav(h, "feedback");

                    var l = gav(h, "num");

                    var n = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";

                    var q = n.replace("{$username$}", g).replace("{$ip$}", p).replace("{$time$}", o).replace("{$feedback$}", f).replace("{$content$}", m);

                    var r = $j("divComments").html();

                    if (r == "暂无评论") {

                        r = ""

                    }

                    $j("divComments").html(q + r);

                    $j("spCommentCount").html(l);

                    $a(j, 1);

                    emptyText("tbCmt")

                } else {

                    $a(j)

                }

            }

        }

        showProc(e, false)

    })

}

function writeComment(a, b) {

    $.post("/ajax.ashx?action=getcomment&t=" + Math.random(), {

        oid: a,

        mark: b

    },

    function(e) {

        var h = $(e).find("count").text();

        $j("spCommentCount").html(h);

        var n = $(e).find("comment");

        var m = "";

        var k = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";

        for (var f = 0; f < n.length; ++f) {

            var o = $(n[f]);

            var d = o.find("username").text();

            var g = o.find("content").html();

            var l = o.find("ip").text();

            var j = o.find("inputTime").text();

            var c = o.find("feedback").text();

            m += k.replace("{$username$}", d).replace("{$ip$}", l).replace("{$time$}", j).replace("{$content$}", g).replace("{$feedback$}", c)

        }

        if (m.length > 0) {

            $j("divComments").html(m)

        } else {

            $j("divComments").html("暂无评论")

        }

    })

}

function getAd(b, a) {

    $.post("/ajax.ashx?action=getadd", {

        keyname: b

    },

    function(c) {

        $j(a).html(c)

    })

};