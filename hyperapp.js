! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(e.hyperapp = {})
}(this, function(e) {
    "use strict";

    function n(e, n) {
        var t, o = [];
        for (r = arguments.length; r-- > 2;) a.push(arguments[r]);
        for (; a.length;)
            if (Array.isArray(t = a.pop()))
                for (r = t.length; r--;) a.push(t[r]);
            else null != t && !0 !== t && !1 !== t && ("number" == typeof t && (t += ""), o.push(t));
        return "string" == typeof e ? {
            tag: e,
            data: n || {},
            children: o
        } : e(n, o)
    }

    function t(e) {
        function n(e) {
            for (x = v(w, x, h, h = i("render", k)(p, y), g = !g); e = o.pop();) e()
        }

        function t() {
            k && !g && requestAnimationFrame(n, g = !g)
        }

        function r(e) {
            return e && (e = i("update", u(p, e))) && t(p = e), p
        }

        function a(e, n, t) {
            Object.keys(n || []).map(function(o) {
                var u = n[o],
                    f = t ? t + "." + o : o;
                "function" == typeof u ? e[o] = function(e) {
                    i("action", {
                        name: f,
                        data: e
                    });
                    var n = i("resolve", u(p, y, e));
                    return "function" == typeof n ? n(r) : r(n)
                } : a(e[o] || (e[o] = {}), u, f)
            })
        }

        function i(e, n) {
            return (m[e] || []).map(function(e) {
                var t = e(p, y, n);
                null != t && (n = t)
            }), n
        }

        function u(e, n) {
            var t = {};
            for (var r in e) t[r] = e[r];
            for (var r in n) t[r] = n[r];
            return t
        }

        function f(e) {
            if (e && (e = e.data)) return e.key
        }

        function c(e, n) {
            if ("string" == typeof e) var t = document.createTextNode(e);
            else {
                var t = (n = n || "svg" === e.tag) ? document.createElementNS("http://www.w3.org/2000/svg", e.tag) : document.createElement(e.tag);
                e.data && e.data.oncreate && o.push(function() {
                    e.data.oncreate(t)
                });
                for (var r in e.data) l(t, r, e.data[r]);
                for (var r = 0; r < e.children.length;) t.appendChild(c(e.children[r++], n))
            }
            return t
        }

        function l(e, n, t, r) {
            if ("key" === n);
            else if ("style" === n)
                for (var a in u(r, t = t || {})) e.style[a] = t[a] || "";
            else {
                try {
                    e[n] = t
                } catch (e) {}
                "function" != typeof t && (t ? e.setAttribute(n, t) : e.removeAttribute(n))
            }
        }

        function d(e, n, t) {
            for (var r in u(n, t)) {
                var a = t[r],
                    i = "value" === r || "checked" === r ? e[r] : n[r];
                a !== i && l(e, r, a, i)
            }
            t && t.onupdate && o.push(function() {
                t.onupdate(e, n)
            })
        }

        function s(e, n, t) {
            t && t.onremove ? t.onremove(n) : e.removeChild(n)
        }

        function v(e, n, t, r, a, o) {
            if (null == t) n = e.insertBefore(c(r, a), n);
            else if (null != r.tag && r.tag === t.tag) {
                d(n, t.data, r.data), a = a || "svg" === r.tag;
                for (var i = r.children.length, u = t.children.length, l = {}, p = [], h = {}, g = 0; g < u; g++) {
                    var y = p[g] = n.childNodes[g],
                        m = t.children[g],
                        b = f(m);
                    null != b && (l[b] = [y, m])
                }
                for (var g = 0, k = 0; k < i;) {
                    var y = p[g],
                        m = t.children[g],
                        w = r.children[k],
                        b = f(m);
                    if (h[b]) g++;
                    else {
                        var x = f(w),
                            A = l[x] || [];
                        null == x ? (null == b && (v(n, y, m, w, a), k++), g++) : (b === x ? (v(n, A[0], A[1], w, a), g++) : A[0] ? (n.insertBefore(A[0], y), v(n, A[0], A[1], w, a)) : v(n, y, null, w, a), k++, h[x] = w)
                    }
                }
                for (; g < u;) {
                    var m = t.children[g],
                        b = f(m);
                    null == b && s(n, p[g], m.data), g++
                }
                for (var g in l) {
                    var A = l[g],
                        j = A[1];
                    h[j.data.key] || s(n, A[0], j.data)
                }
            } else n && r !== n.nodeValue && (n = e.insertBefore(c(r, a), o = n), s(e, o, t.data));
            return n
        }
        for (var p, h, g, y = {}, m = {}, b = [], k = e.view, w = e.root || document.body, x = w.children[0], A = -1; A < b.length; A++) e = b[A] ? b[A](i) : e, Object.keys(e.events || []).map(function(n) {
            m[n] = (m[n] || []).concat(e.events[n])
        }), a(y, e.actions), b = b.concat(e.mixins || []), p = u(p, e.state);
        return t((h = i("load", x)) === x && (h = x = null)), i
    }
    var r, a = [],
        o = [];
    e.h = n, e.app = t
});
//# sourceMappingURL=hyperapp.js.map