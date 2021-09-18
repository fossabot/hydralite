function t() {}
const e = (t) => t;
function n(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function r(t) {
	return t();
}
function i() {
	return Object.create(null);
}
function o(t) {
	t.forEach(r);
}
function s(t) {
	return 'function' == typeof t;
}
function u(t, e) {
	return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
}
let a;
function c(t, e) {
	return a || (a = document.createElement('a')), (a.href = e), t === a.href;
}
function h(e, ...n) {
	if (null == e) return t;
	const r = e.subscribe(...n);
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
function f(t, e, n) {
	t.$$.on_destroy.push(h(e, n));
}
function l(t, e, n, r) {
	if (t) {
		const i = p(t, e, n, r);
		return t[0](i);
	}
}
function p(t, e, r, i) {
	return t[1] && i ? n(r.ctx.slice(), t[1](i(e))) : r.ctx;
}
function d(t, e, n, r) {
	if (t[2] && r) {
		const i = t[2](r(n));
		if (void 0 === e.dirty) return i;
		if ('object' == typeof i) {
			const t = [],
				n = Math.max(e.dirty.length, i.length);
			for (let r = 0; r < n; r += 1) t[r] = e.dirty[r] | i[r];
			return t;
		}
		return e.dirty | i;
	}
	return e.dirty;
}
function v(t, e, n, r, i, o) {
	if (i) {
		const s = p(e, n, r, o);
		t.p(s, i);
	}
}
function y(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let t = 0; t < n; t++) e[t] = -1;
		return e;
	}
	return -1;
}
function g(t) {
	const e = {};
	for (const n in t) '$' !== n[0] && (e[n] = t[n]);
	return e;
}
function m(t) {
	const e = {};
	for (const n in t) e[n] = !0;
	return e;
}
function b(t) {
	return null == t ? '' : t;
}
const w = 'undefined' != typeof window;
let E = w ? () => window.performance.now() : () => Date.now(),
	I = w ? (t) => requestAnimationFrame(t) : t;
const _ = new Set();
function T(t) {
	_.forEach((e) => {
		e.c(t) || (_.delete(e), e.f());
	}),
		0 !== _.size && I(T);
}
function A(t) {
	let e;
	return (
		0 === _.size && I(T),
		{
			promise: new Promise((n) => {
				_.add((e = { c: t, f: n }));
			}),
			abort() {
				_.delete(e);
			}
		}
	);
}
let N = !1;
function S(t, e, n, r) {
	for (; t < e; ) {
		const i = t + ((e - t) >> 1);
		n(i) <= r ? (t = i + 1) : (e = i);
	}
	return t;
}
function D(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function k(t) {
	const e = P('style');
	return (
		(function (t, e) {
			!(function (t, e) {
				t.appendChild(e);
			})(t.head || t, e);
		})(D(t), e),
		e
	);
}
function x(t, e) {
	if (N) {
		for (
			!(function (t) {
				if (t.hydrate_init) return;
				t.hydrate_init = !0;
				let e = t.childNodes;
				if ('HEAD' === t.nodeName) {
					const t = [];
					for (let n = 0; n < e.length; n++) {
						const r = e[n];
						void 0 !== r.claim_order && t.push(r);
					}
					e = t;
				}
				const n = new Int32Array(e.length + 1),
					r = new Int32Array(e.length);
				n[0] = -1;
				let i = 0;
				for (let a = 0; a < e.length; a++) {
					const t = e[a].claim_order,
						o =
							(i > 0 && e[n[i]].claim_order <= t ? i + 1 : S(1, i, (t) => e[n[t]].claim_order, t)) -
							1;
					r[a] = n[o] + 1;
					const s = o + 1;
					(n[s] = a), (i = Math.max(s, i));
				}
				const o = [],
					s = [];
				let u = e.length - 1;
				for (let a = n[i] + 1; 0 != a; a = r[a - 1]) {
					for (o.push(e[a - 1]); u >= a; u--) s.push(e[u]);
					u--;
				}
				for (; u >= 0; u--) s.push(e[u]);
				o.reverse(), s.sort((t, e) => t.claim_order - e.claim_order);
				for (let a = 0, c = 0; a < s.length; a++) {
					for (; c < o.length && s[a].claim_order >= o[c].claim_order; ) c++;
					const e = c < o.length ? o[c] : null;
					t.insertBefore(s[a], e);
				}
			})(t),
				(void 0 === t.actual_end_child ||
					(null !== t.actual_end_child && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			null !== t.actual_end_child && void 0 === t.actual_end_child.claim_order;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (void 0 === e.claim_order && e.parentNode === t) || t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode === t && null === e.nextSibling) || t.appendChild(e);
}
function O(t, e, n) {
	N && !n ? x(t, e) : (e.parentNode === t && e.nextSibling == n) || t.insertBefore(e, n || null);
}
function L(t) {
	t.parentNode.removeChild(t);
}
function P(t) {
	return document.createElement(t);
}
function C(t) {
	return document.createTextNode(t);
}
function R() {
	return C(' ');
}
function U() {
	return C('');
}
function j(t, e, n, r) {
	return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function F(t, e, n) {
	null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function M(t) {
	return Array.from(t.childNodes);
}
function V(t, e, n, r, i = !1) {
	!(function (t) {
		void 0 === t.claim_info && (t.claim_info = { last_index: 0, total_claimed: 0 });
	})(t);
	const o = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r];
			if (e(o)) {
				const e = n(o);
				return void 0 === e ? t.splice(r, 1) : (t[r] = e), i || (t.claim_info.last_index = r), o;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r];
			if (e(o)) {
				const e = n(o);
				return (
					void 0 === e ? t.splice(r, 1) : (t[r] = e),
					i ? void 0 === e && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				);
			}
		}
		return r();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function q(t, e, n) {
	return (function (t, e, n, r) {
		return V(
			t,
			(t) => t.nodeName === e,
			(t) => {
				const e = [];
				for (let r = 0; r < t.attributes.length; r++) {
					const i = t.attributes[r];
					n[i.name] || e.push(i.name);
				}
				e.forEach((e) => t.removeAttribute(e));
			},
			() => r(e)
		);
	})(t, e, n, P);
}
function B(t, e) {
	return V(
		t,
		(t) => 3 === t.nodeType,
		(t) => {
			const n = '' + e;
			if (t.data.startsWith(n)) {
				if (t.data.length !== n.length) return t.splitText(n.length);
			} else t.data = n;
		},
		() => C(e),
		!0
	);
}
function G(t) {
	return B(t, ' ');
}
function z(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function H(t, e) {
	t.value = null == e ? '' : e;
}
function $(t, e, n, r) {
	t.style.setProperty(e, n, r ? 'important' : '');
}
function K(t, e = document.body) {
	return Array.from(e.querySelectorAll(t));
}
const W = new Set();
let Q,
	X = 0;
function Y(t, e, n, r, i, o, s, u = 0) {
	const a = 16.666 / r;
	let c = '{\n';
	for (let y = 0; y <= 1; y += a) {
		const t = e + (n - e) * o(y);
		c += 100 * y + `%{${s(t, 1 - t)}}\n`;
	}
	const h = c + `100% {${s(n, 1 - n)}}\n}`,
		f = `__svelte_${(function (t) {
			let e = 5381,
				n = t.length;
			for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
			return e >>> 0;
		})(h)}_${u}`,
		l = D(t);
	W.add(l);
	const p = l.__svelte_stylesheet || (l.__svelte_stylesheet = k(t).sheet),
		d = l.__svelte_rules || (l.__svelte_rules = {});
	d[f] || ((d[f] = !0), p.insertRule(`@keyframes ${f} ${h}`, p.cssRules.length));
	const v = t.style.animation || '';
	return (t.style.animation = `${v ? `${v}, ` : ''}${f} ${r}ms linear ${i}ms 1 both`), (X += 1), f;
}
function J(t, e) {
	const n = (t.style.animation || '').split(', '),
		r = n.filter(e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf('__svelte')),
		i = n.length - r.length;
	i &&
		((t.style.animation = r.join(', ')),
		(X -= i),
		X ||
			I(() => {
				X ||
					(W.forEach((t) => {
						const e = t.__svelte_stylesheet;
						let n = e.cssRules.length;
						for (; n--; ) e.deleteRule(n);
						t.__svelte_rules = {};
					}),
					W.clear());
			}));
}
function Z(n, r, i, o) {
	if (!r) return t;
	const s = n.getBoundingClientRect();
	if (r.left === s.left && r.right === s.right && r.top === s.top && r.bottom === s.bottom)
		return t;
	const {
		delay: u = 0,
		duration: a = 300,
		easing: c = e,
		start: h = E() + u,
		end: f = h + a,
		tick: l = t,
		css: p
	} = i(n, { from: r, to: s }, o);
	let d,
		v = !0,
		y = !1;
	function g() {
		p && J(n, d), (v = !1);
	}
	return (
		A((t) => {
			if ((!y && t >= h && (y = !0), y && t >= f && (l(1, 0), g()), !v)) return !1;
			if (y) {
				const e = 0 + 1 * c((t - h) / a);
				l(e, 1 - e);
			}
			return !0;
		}),
		p && (d = Y(n, 0, 1, a, u, c, p)),
		u || (y = !0),
		l(0, 1),
		g
	);
}
function tt(t) {
	const e = getComputedStyle(t);
	if ('absolute' !== e.position && 'fixed' !== e.position) {
		const { width: n, height: r } = e,
			i = t.getBoundingClientRect();
		(t.style.position = 'absolute'), (t.style.width = n), (t.style.height = r), et(t, i);
	}
}
function et(t, e) {
	const n = t.getBoundingClientRect();
	if (e.left !== n.left || e.top !== n.top) {
		const r = getComputedStyle(t),
			i = 'none' === r.transform ? '' : r.transform;
		t.style.transform = `${i} translate(${e.left - n.left}px, ${e.top - n.top}px)`;
	}
}
function nt(t) {
	Q = t;
}
function rt() {
	if (!Q) throw new Error('Function called outside component initialization');
	return Q;
}
function it(t) {
	rt().$$.on_mount.push(t);
}
function ot(t) {
	rt().$$.after_update.push(t);
}
function st(t, e) {
	rt().$$.context.set(t, e);
}
const ut = [],
	at = [],
	ct = [],
	ht = [],
	ft = Promise.resolve();
let lt = !1;
function pt(t) {
	ct.push(t);
}
let dt = !1;
const vt = new Set();
function yt() {
	if (!dt) {
		dt = !0;
		do {
			for (let t = 0; t < ut.length; t += 1) {
				const e = ut[t];
				nt(e), gt(e.$$);
			}
			for (nt(null), ut.length = 0; at.length; ) at.pop()();
			for (let t = 0; t < ct.length; t += 1) {
				const e = ct[t];
				vt.has(e) || (vt.add(e), e());
			}
			ct.length = 0;
		} while (ut.length);
		for (; ht.length; ) ht.pop()();
		(lt = !1), (dt = !1), vt.clear();
	}
}
function gt(t) {
	if (null !== t.fragment) {
		t.update(), o(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(pt);
	}
}
let mt;
function bt(t, e, n) {
	t.dispatchEvent(
		(function (t, e, n = !1) {
			const r = document.createEvent('CustomEvent');
			return r.initCustomEvent(t, n, !1, e), r;
		})(`${e ? 'intro' : 'outro'}${n}`)
	);
}
const wt = new Set();
let Et;
function It() {
	Et = { r: 0, c: [], p: Et };
}
function _t() {
	Et.r || o(Et.c), (Et = Et.p);
}
function Tt(t, e) {
	t && t.i && (wt.delete(t), t.i(e));
}
function At(t, e, n, r) {
	if (t && t.o) {
		if (wt.has(t)) return;
		wt.add(t),
			Et.c.push(() => {
				wt.delete(t), r && (n && t.d(1), r());
			}),
			t.o(e);
	}
}
const Nt = { duration: 0 };
function St(n, r, i, u) {
	let a = r(n, i),
		c = u ? 0 : 1,
		h = null,
		f = null,
		l = null;
	function p() {
		l && J(n, l);
	}
	function d(t, e) {
		const n = t.b - c;
		return (
			(e *= Math.abs(n)),
			{ a: c, b: t.b, d: n, duration: e, start: t.start, end: t.start + e, group: t.group }
		);
	}
	function v(r) {
		const { delay: i = 0, duration: s = 300, easing: u = e, tick: v = t, css: y } = a || Nt,
			g = { start: E() + i, b: r };
		r || ((g.group = Et), (Et.r += 1)),
			h || f
				? (f = g)
				: (y && (p(), (l = Y(n, c, r, s, i, u, y))),
				  r && v(0, 1),
				  (h = d(g, s)),
				  pt(() => bt(n, r, 'start')),
				  A((t) => {
						if (
							(f &&
								t > f.start &&
								((h = d(f, s)),
								(f = null),
								bt(n, h.b, 'start'),
								y && (p(), (l = Y(n, c, h.b, h.duration, 0, u, a.css)))),
							h)
						)
							if (t >= h.end)
								v((c = h.b), 1 - c),
									bt(n, h.b, 'end'),
									f || (h.b ? p() : --h.group.r || o(h.group.c)),
									(h = null);
							else if (t >= h.start) {
								const e = t - h.start;
								(c = h.a + h.d * u(e / h.duration)), v(c, 1 - c);
							}
						return !(!h && !f);
				  }));
	}
	return {
		run(t) {
			s(a)
				? (mt ||
						((mt = Promise.resolve()),
						mt.then(() => {
							mt = null;
						})),
				  mt).then(() => {
						(a = a()), v(t);
				  })
				: v(t);
		},
		end() {
			p(), (h = f = null);
		}
	};
}
function Dt(t, e) {
	t.f(),
		(function (t, e) {
			At(t, 1, 1, () => {
				e.delete(t.key);
			});
		})(t, e);
}
function kt(t, e, n, r, i, o, s, u, a, c, h, f) {
	let l = t.length,
		p = o.length,
		d = l;
	const v = {};
	for (; d--; ) v[t[d].key] = d;
	const y = [],
		g = new Map(),
		m = new Map();
	for (d = p; d--; ) {
		const t = f(i, o, d),
			u = n(t);
		let a = s.get(u);
		a ? r && a.p(t, e) : ((a = c(u, t)), a.c()),
			g.set(u, (y[d] = a)),
			u in v && m.set(u, Math.abs(d - v[u]));
	}
	const b = new Set(),
		w = new Set();
	function E(t) {
		Tt(t, 1), t.m(u, h), s.set(t.key, t), (h = t.first), p--;
	}
	for (; l && p; ) {
		const e = y[p - 1],
			n = t[l - 1],
			r = e.key,
			i = n.key;
		e === n
			? ((h = e.first), l--, p--)
			: g.has(i)
			? !s.has(r) || b.has(r)
				? E(e)
				: w.has(i)
				? l--
				: m.get(r) > m.get(i)
				? (w.add(r), E(e))
				: (b.add(i), l--)
			: (a(n, s), l--);
	}
	for (; l--; ) {
		const e = t[l];
		g.has(e.key) || a(e, s);
	}
	for (; p; ) E(y[p - 1]);
	return y;
}
function xt(t, e) {
	const n = {},
		r = {},
		i = { $$scope: 1 };
	let o = t.length;
	for (; o--; ) {
		const s = t[o],
			u = e[o];
		if (u) {
			for (const t in s) t in u || (r[t] = 1);
			for (const t in u) i[t] || ((n[t] = u[t]), (i[t] = 1));
			t[o] = u;
		} else for (const t in s) i[t] = 1;
	}
	for (const s in r) s in n || (n[s] = void 0);
	return n;
}
function Ot(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function Lt(t) {
	t && t.c();
}
function Pt(t, e) {
	t && t.l(e);
}
function Ct(t, e, n, i) {
	const { fragment: u, on_mount: a, on_destroy: c, after_update: h } = t.$$;
	u && u.m(e, n),
		i ||
			pt(() => {
				const e = a.map(r).filter(s);
				c ? c.push(...e) : o(e), (t.$$.on_mount = []);
			}),
		h.forEach(pt);
}
function Rt(t, e) {
	const n = t.$$;
	null !== n.fragment &&
		(o(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Ut(t, e) {
	-1 === t.$$.dirty[0] && (ut.push(t), lt || ((lt = !0), ft.then(yt)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function jt(e, n, r, s, u, a, c, h = [-1]) {
	const f = Q;
	nt(e);
	const l = (e.$$ = {
		fragment: null,
		ctx: null,
		props: a,
		update: t,
		not_equal: u,
		bound: i(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(f ? f.$$.context : n.context || []),
		callbacks: i(),
		dirty: h,
		skip_bound: !1,
		root: n.target || f.$$.root
	});
	c && c(l.root);
	let p = !1;
	if (
		((l.ctx = r
			? r(e, n.props || {}, (t, n, ...r) => {
					const i = r.length ? r[0] : n;
					return (
						l.ctx &&
							u(l.ctx[t], (l.ctx[t] = i)) &&
							(!l.skip_bound && l.bound[t] && l.bound[t](i), p && Ut(e, t)),
						n
					);
			  })
			: []),
		l.update(),
		(p = !0),
		o(l.before_update),
		(l.fragment = !!s && s(l.ctx)),
		n.target)
	) {
		if (n.hydrate) {
			N = !0;
			const t = M(n.target);
			l.fragment && l.fragment.l(t), t.forEach(L);
		} else l.fragment && l.fragment.c();
		n.intro && Tt(e.$$.fragment), Ct(e, n.target, n.anchor, n.customElement), (N = !1), yt();
	}
	nt(f);
}
class Ft {
	$destroy() {
		Rt(this, 1), (this.$destroy = t);
	}
	$on(t, e) {
		const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			n.push(e),
			() => {
				const t = n.indexOf(e);
				-1 !== t && n.splice(t, 1);
			}
		);
	}
	$set(t) {
		var e;
		this.$$set &&
			((e = t), 0 !== Object.keys(e).length) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const Mt = [];
function Vt(e, n = t) {
	let r;
	const i = new Set();
	function o(t) {
		if (u(e, t) && ((e = t), r)) {
			const t = !Mt.length;
			for (const n of i) n[1](), Mt.push(n, e);
			if (t) {
				for (let t = 0; t < Mt.length; t += 2) Mt[t][0](Mt[t + 1]);
				Mt.length = 0;
			}
		}
	}
	return {
		set: o,
		update: function (t) {
			o(t(e));
		},
		subscribe: function (s, u = t) {
			const a = [s, u];
			return (
				i.add(a),
				1 === i.size && (r = n(o) || t),
				s(e),
				() => {
					i.delete(a), 0 === i.size && (r(), (r = null));
				}
			);
		}
	};
}
function qt(e, n, r) {
	const i = !Array.isArray(e),
		u = i ? [e] : e,
		a = n.length < 2;
	return {
		subscribe: Vt(r, (e) => {
			let r = !1;
			const c = [];
			let f = 0,
				l = t;
			const p = () => {
					if (f) return;
					l();
					const r = n(i ? c[0] : c, e);
					a ? e(r) : (l = s(r) ? r : t);
				},
				d = u.map((t, e) =>
					h(
						t,
						(t) => {
							(c[e] = t), (f &= ~(1 << e)), r && p();
						},
						() => {
							f |= 1 << e;
						}
					)
				);
			return (
				(r = !0),
				p(),
				function () {
					o(d), l();
				}
			);
		}).subscribe
	};
}
'undefined' != typeof globalThis
	? globalThis
	: 'undefined' != typeof window
	? window
	: 'undefined' != typeof global
	? global
	: 'undefined' != typeof self && self;
function Bt(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
function Gt(t) {
	if (t.__esModule) return t;
	var e = Object.defineProperty({}, '__esModule', { value: !0 });
	return (
		Object.keys(t).forEach(function (n) {
			var r = Object.getOwnPropertyDescriptor(t, n);
			Object.defineProperty(
				e,
				n,
				r.get
					? r
					: {
							enumerable: !0,
							get: function () {
								return t[n];
							}
					  }
			);
		}),
		e
	);
}
var zt = { exports: {} },
	Ht = Bt(
		(zt.exports = (function (t) {
			var e = {};
			function n(r) {
				if (e[r]) return e[r].exports;
				var i = (e[r] = { exports: {}, id: r, loaded: !1 });
				return t[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
			}
			return (n.m = t), (n.c = e), (n.p = ''), n(0);
		})([
			function (t, e, n) {
				Object.defineProperty(e, '__esModule', { value: !0 });
				var r = (function () {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								(r.enumerable = r.enumerable || !1),
									(r.configurable = !0),
									'value' in r && (r.writable = !0),
									Object.defineProperty(t, r.key, r);
							}
						}
						return function (e, n, r) {
							return n && t(e.prototype, n), r && t(e, r), e;
						};
					})(),
					i = n(1),
					o = n(3),
					s = (function () {
						function t(e, n) {
							!(function (t, e) {
								if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
							})(this, t),
								i.initializer.load(this, n, e),
								this.begin();
						}
						return (
							r(t, [
								{
									key: 'toggle',
									value: function () {
										this.pause.status ? this.start() : this.stop();
									}
								},
								{
									key: 'stop',
									value: function () {
										this.typingComplete ||
											this.pause.status ||
											(this.toggleBlinking(!0),
											(this.pause.status = !0),
											this.options.onStop(this.arrayPos, this));
									}
								},
								{
									key: 'start',
									value: function () {
										this.typingComplete ||
											(this.pause.status &&
												((this.pause.status = !1),
												this.pause.typewrite
													? this.typewrite(this.pause.curString, this.pause.curStrPos)
													: this.backspace(this.pause.curString, this.pause.curStrPos),
												this.options.onStart(this.arrayPos, this)));
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.reset(!1), this.options.onDestroy(this);
									}
								},
								{
									key: 'reset',
									value: function () {
										var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
										clearInterval(this.timeout),
											this.replaceText(''),
											this.cursor &&
												this.cursor.parentNode &&
												(this.cursor.parentNode.removeChild(this.cursor), (this.cursor = null)),
											(this.strPos = 0),
											(this.arrayPos = 0),
											(this.curLoop = 0),
											t && (this.insertCursor(), this.options.onReset(this), this.begin());
									}
								},
								{
									key: 'begin',
									value: function () {
										var t = this;
										this.options.onBegin(this),
											(this.typingComplete = !1),
											this.shuffleStringsIfNeeded(this),
											this.insertCursor(),
											this.bindInputFocusEvents && this.bindFocusEvents(),
											(this.timeout = setTimeout(function () {
												t.currentElContent && 0 !== t.currentElContent.length
													? t.backspace(t.currentElContent, t.currentElContent.length)
													: t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
											}, this.startDelay));
									}
								},
								{
									key: 'typewrite',
									value: function (t, e) {
										var n = this;
										this.fadeOut &&
											this.el.classList.contains(this.fadeOutClass) &&
											(this.el.classList.remove(this.fadeOutClass),
											this.cursor && this.cursor.classList.remove(this.fadeOutClass));
										var r = this.humanizer(this.typeSpeed),
											i = 1;
										!0 !== this.pause.status
											? (this.timeout = setTimeout(function () {
													e = o.htmlParser.typeHtmlChars(t, e, n);
													var r = 0,
														s = t.substr(e);
													if ('^' === s.charAt(0) && /^\^\d+/.test(s)) {
														var u = 1;
														(u += (s = /\d+/.exec(s)[0]).length),
															(r = parseInt(s)),
															(n.temporaryPause = !0),
															n.options.onTypingPaused(n.arrayPos, n),
															(t = t.substring(0, e) + t.substring(e + u)),
															n.toggleBlinking(!0);
													}
													if ('`' === s.charAt(0)) {
														for (
															;
															'`' !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length));

														);
														var a = t.substring(0, e),
															c = t.substring(a.length + 1, e + i),
															h = t.substring(e + i + 1);
														(t = a + c + h), i--;
													}
													n.timeout = setTimeout(function () {
														n.toggleBlinking(!1),
															e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, i),
															n.temporaryPause &&
																((n.temporaryPause = !1), n.options.onTypingResumed(n.arrayPos, n));
													}, r);
											  }, r))
											: this.setPauseStatus(t, e, !0);
									}
								},
								{
									key: 'keepTyping',
									value: function (t, e, n) {
										0 === e &&
											(this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
											(e += n);
										var r = t.substr(0, e);
										this.replaceText(r), this.typewrite(t, e);
									}
								},
								{
									key: 'doneTyping',
									value: function (t, e) {
										var n = this;
										this.options.onStringTyped(this.arrayPos, this),
											this.toggleBlinking(!0),
											(this.arrayPos === this.strings.length - 1 &&
												(this.complete(), !1 === this.loop || this.curLoop === this.loopCount)) ||
												(this.timeout = setTimeout(function () {
													n.backspace(t, e);
												}, this.backDelay));
									}
								},
								{
									key: 'backspace',
									value: function (t, e) {
										var n = this;
										if (!0 !== this.pause.status) {
											if (this.fadeOut) return this.initFadeOut();
											this.toggleBlinking(!1);
											var r = this.humanizer(this.backSpeed);
											this.timeout = setTimeout(function () {
												e = o.htmlParser.backSpaceHtmlChars(t, e, n);
												var r = t.substr(0, e);
												if ((n.replaceText(r), n.smartBackspace)) {
													var i = n.strings[n.arrayPos + 1];
													i && r === i.substr(0, e) ? (n.stopNum = e) : (n.stopNum = 0);
												}
												e > n.stopNum
													? (e--, n.backspace(t, e))
													: e <= n.stopNum &&
													  (n.arrayPos++,
													  n.arrayPos === n.strings.length
															? ((n.arrayPos = 0),
															  n.options.onLastStringBackspaced(),
															  n.shuffleStringsIfNeeded(),
															  n.begin())
															: n.typewrite(n.strings[n.sequence[n.arrayPos]], e));
											}, r);
										} else this.setPauseStatus(t, e, !1);
									}
								},
								{
									key: 'complete',
									value: function () {
										this.options.onComplete(this),
											this.loop ? this.curLoop++ : (this.typingComplete = !0);
									}
								},
								{
									key: 'setPauseStatus',
									value: function (t, e, n) {
										(this.pause.typewrite = n),
											(this.pause.curString = t),
											(this.pause.curStrPos = e);
									}
								},
								{
									key: 'toggleBlinking',
									value: function (t) {
										this.cursor &&
											(this.pause.status ||
												(this.cursorBlinking !== t &&
													((this.cursorBlinking = t),
													t
														? this.cursor.classList.add('typed-cursor--blink')
														: this.cursor.classList.remove('typed-cursor--blink'))));
									}
								},
								{
									key: 'humanizer',
									value: function (t) {
										return Math.round((Math.random() * t) / 2) + t;
									}
								},
								{
									key: 'shuffleStringsIfNeeded',
									value: function () {
										this.shuffle &&
											(this.sequence = this.sequence.sort(function () {
												return Math.random() - 0.5;
											}));
									}
								},
								{
									key: 'initFadeOut',
									value: function () {
										var t = this;
										return (
											(this.el.className += ' ' + this.fadeOutClass),
											this.cursor && (this.cursor.className += ' ' + this.fadeOutClass),
											setTimeout(function () {
												t.arrayPos++,
													t.replaceText(''),
													t.strings.length > t.arrayPos
														? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
														: (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
											}, this.fadeOutDelay)
										);
									}
								},
								{
									key: 'replaceText',
									value: function (t) {
										this.attr
											? this.el.setAttribute(this.attr, t)
											: this.isInput
											? (this.el.value = t)
											: 'html' === this.contentType
											? (this.el.innerHTML = t)
											: (this.el.textContent = t);
									}
								},
								{
									key: 'bindFocusEvents',
									value: function () {
										var t = this;
										this.isInput &&
											(this.el.addEventListener('focus', function (e) {
												t.stop();
											}),
											this.el.addEventListener('blur', function (e) {
												(t.el.value && 0 !== t.el.value.length) || t.start();
											}));
									}
								},
								{
									key: 'insertCursor',
									value: function () {
										this.showCursor &&
											(this.cursor ||
												((this.cursor = document.createElement('span')),
												(this.cursor.className = 'typed-cursor'),
												this.cursor.setAttribute('aria-hidden', !0),
												(this.cursor.innerHTML = this.cursorChar),
												this.el.parentNode &&
													this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
									}
								}
							]),
							t
						);
					})();
				(e.default = s), (t.exports = e.default);
			},
			function (t, e, n) {
				Object.defineProperty(e, '__esModule', { value: !0 });
				var r,
					i =
						Object.assign ||
						function (t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = arguments[e];
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
							}
							return t;
						},
					o = (function () {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								(r.enumerable = r.enumerable || !1),
									(r.configurable = !0),
									'value' in r && (r.writable = !0),
									Object.defineProperty(t, r.key, r);
							}
						}
						return function (e, n, r) {
							return n && t(e.prototype, n), r && t(e, r), e;
						};
					})(),
					s = n(2),
					u = (r = s) && r.__esModule ? r : { default: r },
					a = (function () {
						function t() {
							!(function (t, e) {
								if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
							})(this, t);
						}
						return (
							o(t, [
								{
									key: 'load',
									value: function (t, e, n) {
										if (
											((t.el = 'string' == typeof n ? document.querySelector(n) : n),
											(t.options = i({}, u.default, e)),
											(t.isInput = 'input' === t.el.tagName.toLowerCase()),
											(t.attr = t.options.attr),
											(t.bindInputFocusEvents = t.options.bindInputFocusEvents),
											(t.showCursor = !t.isInput && t.options.showCursor),
											(t.cursorChar = t.options.cursorChar),
											(t.cursorBlinking = !0),
											(t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent),
											(t.contentType = t.options.contentType),
											(t.typeSpeed = t.options.typeSpeed),
											(t.startDelay = t.options.startDelay),
											(t.backSpeed = t.options.backSpeed),
											(t.smartBackspace = t.options.smartBackspace),
											(t.backDelay = t.options.backDelay),
											(t.fadeOut = t.options.fadeOut),
											(t.fadeOutClass = t.options.fadeOutClass),
											(t.fadeOutDelay = t.options.fadeOutDelay),
											(t.isPaused = !1),
											(t.strings = t.options.strings.map(function (t) {
												return t.trim();
											})),
											'string' == typeof t.options.stringsElement
												? (t.stringsElement = document.querySelector(t.options.stringsElement))
												: (t.stringsElement = t.options.stringsElement),
											t.stringsElement)
										) {
											(t.strings = []), (t.stringsElement.style.display = 'none');
											var r = Array.prototype.slice.apply(t.stringsElement.children),
												o = r.length;
											if (o)
												for (var s = 0; s < o; s += 1) {
													var a = r[s];
													t.strings.push(a.innerHTML.trim());
												}
										}
										for (var s in ((t.strPos = 0),
										(t.arrayPos = 0),
										(t.stopNum = 0),
										(t.loop = t.options.loop),
										(t.loopCount = t.options.loopCount),
										(t.curLoop = 0),
										(t.shuffle = t.options.shuffle),
										(t.sequence = []),
										(t.pause = { status: !1, typewrite: !0, curString: '', curStrPos: 0 }),
										(t.typingComplete = !1),
										t.strings))
											t.sequence[s] = s;
										(t.currentElContent = this.getCurrentElContent(t)),
											(t.autoInsertCss = t.options.autoInsertCss),
											this.appendAnimationCss(t);
									}
								},
								{
									key: 'getCurrentElContent',
									value: function (t) {
										return t.attr
											? t.el.getAttribute(t.attr)
											: t.isInput
											? t.el.value
											: 'html' === t.contentType
											? t.el.innerHTML
											: t.el.textContent;
									}
								},
								{
									key: 'appendAnimationCss',
									value: function (t) {
										var e = 'data-typed-js-css';
										if (
											t.autoInsertCss &&
											(t.showCursor || t.fadeOut) &&
											!document.querySelector('[' + e + ']')
										) {
											var n = document.createElement('style');
											(n.type = 'text/css'), n.setAttribute(e, !0);
											var r = '';
											t.showCursor &&
												(r +=
													'\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),
												t.fadeOut &&
													(r +=
														'\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      '),
												0 !== n.length && ((n.innerHTML = r), document.body.appendChild(n));
										}
									}
								}
							]),
							t
						);
					})();
				e.default = a;
				var c = new a();
				e.initializer = c;
			},
			function (t, e) {
				Object.defineProperty(e, '__esModule', { value: !0 });
				var n = {
					strings: [
						'These are the default values...',
						'You know what you should do?',
						'Use your own!',
						'Have a great day!'
					],
					stringsElement: null,
					typeSpeed: 0,
					startDelay: 0,
					backSpeed: 0,
					smartBackspace: !0,
					shuffle: !1,
					backDelay: 700,
					fadeOut: !1,
					fadeOutClass: 'typed-fade-out',
					fadeOutDelay: 500,
					loop: !1,
					loopCount: 1 / 0,
					showCursor: !0,
					cursorChar: '|',
					autoInsertCss: !0,
					attr: null,
					bindInputFocusEvents: !1,
					contentType: 'html',
					onBegin: function (t) {},
					onComplete: function (t) {},
					preStringTyped: function (t, e) {},
					onStringTyped: function (t, e) {},
					onLastStringBackspaced: function (t) {},
					onTypingPaused: function (t, e) {},
					onTypingResumed: function (t, e) {},
					onReset: function (t) {},
					onStop: function (t, e) {},
					onStart: function (t, e) {},
					onDestroy: function (t) {}
				};
				(e.default = n), (t.exports = e.default);
			},
			function (t, e) {
				Object.defineProperty(e, '__esModule', { value: !0 });
				var n = (function () {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								(r.enumerable = r.enumerable || !1),
									(r.configurable = !0),
									'value' in r && (r.writable = !0),
									Object.defineProperty(t, r.key, r);
							}
						}
						return function (e, n, r) {
							return n && t(e.prototype, n), r && t(e, r), e;
						};
					})(),
					r = (function () {
						function t() {
							!(function (t, e) {
								if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
							})(this, t);
						}
						return (
							n(t, [
								{
									key: 'typeHtmlChars',
									value: function (t, e, n) {
										if ('html' !== n.contentType) return e;
										var r = t.substr(e).charAt(0);
										if ('<' === r || '&' === r) {
											var i = '';
											for (
												i = '<' === r ? '>' : ';';
												t.substr(e + 1).charAt(0) !== i && !(1 + ++e > t.length);

											);
											e++;
										}
										return e;
									}
								},
								{
									key: 'backSpaceHtmlChars',
									value: function (t, e, n) {
										if ('html' !== n.contentType) return e;
										var r = t.substr(e).charAt(0);
										if ('>' === r || ';' === r) {
											var i = '';
											for (
												i = '>' === r ? '<' : '&';
												t.substr(e - 1).charAt(0) !== i && !(--e < 0);

											);
											e--;
										}
										return e;
									}
								}
							]),
							t
						);
					})();
				e.default = r;
				var i = new r();
				e.htmlParser = i;
			}
		]))
	);
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */ function $t(t) {
	const e = t - 1;
	return e * e * e + 1;
}
var Kt = {
	$: (t) => ('string' == typeof t ? document.querySelector(t) : t),
	extend: (...t) => Object.assign(...t),
	cumulativeOffset(t) {
		let e = 0,
			n = 0;
		do {
			(e += t.offsetTop || 0), (n += t.offsetLeft || 0), (t = t.offsetParent);
		} while (t);
		return { top: e, left: n };
	},
	directScroll: (t) => t && t !== document && t !== document.body,
	scrollTop(t, e) {
		let n = void 0 !== e;
		return this.directScroll(t)
			? n
				? (t.scrollTop = e)
				: t.scrollTop
			: n
			? (document.documentElement.scrollTop = document.body.scrollTop = e)
			: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	},
	scrollLeft(t, e) {
		let n = void 0 !== e;
		return this.directScroll(t)
			? n
				? (t.scrollLeft = e)
				: t.scrollLeft
			: n
			? (document.documentElement.scrollLeft = document.body.scrollLeft = e)
			: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
	}
};
const Wt = {
		container: 'body',
		duration: 500,
		delay: 0,
		offset: 0,
		easing: function (t) {
			return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
		},
		onStart: t,
		onDone: t,
		onAborting: t,
		scrollX: !1,
		scrollY: !0
	},
	Qt = (t) => {
		let {
			offset: e,
			duration: n,
			delay: r,
			easing: i,
			x: o = 0,
			y: s = 0,
			scrollX: u,
			scrollY: a,
			onStart: c,
			onDone: h,
			container: f,
			onAborting: l,
			element: p
		} = t;
		'function' == typeof e && (e = e());
		var d = Kt.cumulativeOffset(f),
			v = p ? Kt.cumulativeOffset(p) : { top: s, left: o },
			y = Kt.scrollLeft(f),
			g = Kt.scrollTop(f),
			m = v.left - d.left + e,
			b = v.top - d.top + e,
			w = m - y,
			I = b - g;
		let _ = !0,
			T = !1,
			N = E() + r,
			S = N + n;
		function D(t) {
			t || ((T = !0), c(p, { x: o, y: s }));
		}
		function k(t) {
			var e, n, r;
			(e = f), (n = g + I * t), (r = y + w * t), u && Kt.scrollLeft(e, r), a && Kt.scrollTop(e, n);
		}
		function x() {
			_ = !1;
		}
		return (
			A((t) => {
				if ((!T && t >= N && D(!1), T && t >= S && (k(1), x(), h(p, { x: o, y: s })), !_))
					return l(p, { x: o, y: s }), !1;
				if (T) {
					k(0 + 1 * i((t - N) / n));
				}
				return !0;
			}),
			D(r),
			k(0),
			x
		);
	},
	Xt = (t) =>
		Qt(
			((t) => {
				let e = Kt.extend({}, Wt, t);
				return (e.container = Kt.$(e.container)), (e.element = Kt.$(e.element)), e;
			})(t)
		);
function Yt(t, { from: e, to: n }, r = {}) {
	const i = getComputedStyle(t),
		o = 'none' === i.transform ? '' : i.transform,
		[u, a] = i.transformOrigin.split(' ').map(parseFloat),
		c = e.left + (e.width * u) / n.width - (n.left + u),
		h = e.top + (e.height * a) / n.height - (n.top + a),
		{ delay: f = 0, duration: l = (t) => 120 * Math.sqrt(t), easing: p = $t } = r;
	return {
		delay: f,
		duration: s(l) ? l(Math.sqrt(c * c + h * h)) : l,
		easing: p,
		css: (t, r) => {
			const i = r * c,
				s = r * h,
				u = t + (r * e.width) / n.width,
				a = t + (r * e.height) / n.height;
			return `transform: ${o} translate(${i}px, ${s}px) scale(${u}, ${a});`;
		}
	};
}
function Jt(
	t,
	{ delay: e = 0, duration: n = 400, easing: r = $t, x: i = 0, y: o = 0, opacity: s = 0 } = {}
) {
	const u = getComputedStyle(t),
		a = +u.opacity,
		c = 'none' === u.transform ? '' : u.transform,
		h = a * (1 - s);
	return {
		delay: e,
		duration: n,
		easing: r,
		css: (t, e) =>
			`\n\t\t\ttransform: ${c} translate(${(1 - t) * i}px, ${(1 - t) * o}px);\n\t\t\topacity: ${
				a - h * e
			}`
	};
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Zt = function (
	t,
	e
) {
	return (Zt =
		Object.setPrototypeOf ||
		({ __proto__: [] } instanceof Array &&
			function (t, e) {
				t.__proto__ = e;
			}) ||
		function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		})(t, e);
};
function te(t, e) {
	function n() {
		this.constructor = t;
	}
	Zt(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
}
var ee = function () {
	return (ee =
		Object.assign ||
		function (t) {
			for (var e, n = 1, r = arguments.length; n < r; n++)
				for (var i in (e = arguments[n]))
					Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			return t;
		}).apply(this, arguments);
};
function ne(t, e, n, r) {
	return new (n || (n = Promise))(function (i, o) {
		function s(t) {
			try {
				a(r.next(t));
			} catch (e) {
				o(e);
			}
		}
		function u(t) {
			try {
				a(r.throw(t));
			} catch (e) {
				o(e);
			}
		}
		function a(t) {
			var e;
			t.done
				? i(t.value)
				: ((e = t.value),
				  e instanceof n
						? e
						: new n(function (t) {
								t(e);
						  })).then(s, u);
		}
		a((r = r.apply(t, e || [])).next());
	});
}
function re(t, e) {
	var n,
		r,
		i,
		o,
		s = {
			label: 0,
			sent: function () {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		};
	return (
		(o = { next: u(0), throw: u(1), return: u(2) }),
		'function' == typeof Symbol &&
			(o[Symbol.iterator] = function () {
				return this;
			}),
		o
	);
	function u(o) {
		return function (u) {
			return (function (o) {
				if (n) throw new TypeError('Generator is already executing.');
				for (; s; )
					try {
						if (
							((n = 1),
							r &&
								(i =
									2 & o[0]
										? r.return
										: o[0]
										? r.throw || ((i = r.return) && i.call(r), 0)
										: r.next) &&
								!(i = i.call(r, o[1])).done)
						)
							return i;
						switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
							case 0:
							case 1:
								i = o;
								break;
							case 4:
								return s.label++, { value: o[1], done: !1 };
							case 5:
								s.label++, (r = o[1]), (o = [0]);
								continue;
							case 7:
								(o = s.ops.pop()), s.trys.pop();
								continue;
							default:
								if (
									!((i = s.trys),
									(i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))
								) {
									s = 0;
									continue;
								}
								if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
									s.label = o[1];
									break;
								}
								if (6 === o[0] && s.label < i[1]) {
									(s.label = i[1]), (i = o);
									break;
								}
								if (i && s.label < i[2]) {
									(s.label = i[2]), s.ops.push(o);
									break;
								}
								i[2] && s.ops.pop(), s.trys.pop();
								continue;
						}
						o = e.call(t, s);
					} catch (u) {
						(o = [6, u]), (r = 0);
					} finally {
						n = i = 0;
					}
				if (5 & o[0]) throw o[1];
				return { value: o[0] ? o[1] : void 0, done: !0 };
			})([o, u]);
		};
	}
}
function ie(t) {
	var e = 'function' == typeof Symbol && Symbol.iterator,
		n = e && t[e],
		r = 0;
	if (n) return n.call(t);
	if (t && 'number' == typeof t.length)
		return {
			next: function () {
				return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
			}
		};
	throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function oe() {
	for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
	var r = Array(t),
		i = 0;
	for (e = 0; e < n; e++)
		for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
	return r;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var se = function (
	t,
	e
) {
	return (se =
		Object.setPrototypeOf ||
		({ __proto__: [] } instanceof Array &&
			function (t, e) {
				t.__proto__ = e;
			}) ||
		function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		})(t, e);
};
function ue(t, e) {
	if (!(e instanceof Object)) return e;
	switch (e.constructor) {
		case Date:
			return new Date(e.getTime());
		case Object:
			void 0 === t && (t = {});
			break;
		case Array:
			t = [];
			break;
		default:
			return e;
	}
	for (var n in e) e.hasOwnProperty(n) && (t[n] = ue(t[n], e[n]));
	return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ae = (function () {
	function t() {
		var t = this;
		(this.reject = function () {}),
			(this.resolve = function () {}),
			(this.promise = new Promise(function (e, n) {
				(t.resolve = e), (t.reject = n);
			}));
	}
	return (
		(t.prototype.wrapCallback = function (t) {
			var e = this;
			return function (n, r) {
				n ? e.reject(n) : e.resolve(r),
					'function' == typeof t &&
						(e.promise.catch(function () {}), 1 === t.length ? t(n) : t(n, r));
			};
		}),
		t
	);
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ce() {
	return 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent
		? navigator.userAgent
		: '';
}
function he() {
	try {
		return '[object process]' === Object.prototype.toString.call(global.process);
	} catch (t) {
		return !1;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fe = (function (t) {
		function e(n, r) {
			var i = t.call(this, r) || this;
			return (
				(i.code = n),
				(i.name = 'FirebaseError'),
				Object.setPrototypeOf(i, e.prototype),
				Error.captureStackTrace && Error.captureStackTrace(i, le.prototype.create),
				i
			);
		}
		return (
			(function (t, e) {
				function n() {
					this.constructor = t;
				}
				se(t, e),
					(t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
			})(
				/**
				 * @license
				 * Copyright 2017 Google LLC
				 *
				 * Licensed under the Apache License, Version 2.0 (the "License");
				 * you may not use this file except in compliance with the License.
				 * You may obtain a copy of the License at
				 *
				 *   http://www.apache.org/licenses/LICENSE-2.0
				 *
				 * Unless required by applicable law or agreed to in writing, software
				 * distributed under the License is distributed on an "AS IS" BASIS,
				 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
				 * See the License for the specific language governing permissions and
				 * limitations under the License.
				 */ e,
				t
			),
			e
		);
	})(Error),
	le = (function () {
		function t(t, e, n) {
			(this.service = t), (this.serviceName = e), (this.errors = n);
		}
		return (
			(t.prototype.create = function (t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				for (
					var r = e[0] || {},
						i = this.service + '/' + t,
						o = this.errors[t],
						s = o ? pe(o, r) : 'Error',
						u = this.serviceName + ': ' + s + ' (' + i + ').',
						a = new fe(i, u),
						c = 0,
						h = Object.keys(r);
					c < h.length;
					c++
				) {
					var f = h[c];
					'_' !== f.slice(-1) &&
						(f in a &&
							console.warn(
								'Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'
							),
						(a[f] = r[f]));
				}
				return a;
			}),
			t
		);
	})();
function pe(t, e) {
	return t.replace(de, function (t, n) {
		var r = e[n];
		return null != r ? String(r) : '<' + n + '?>';
	});
}
var de = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ve(t, e) {
	return Object.prototype.hasOwnProperty.call(t, e);
}
function ye(t, e) {
	var n = new ge(t, e);
	return n.subscribe.bind(n);
}
var ge = (function () {
	function t(t, e) {
		var n = this;
		(this.observers = []),
			(this.unsubscribes = []),
			(this.observerCount = 0),
			(this.task = Promise.resolve()),
			(this.finalized = !1),
			(this.onNoObservers = e),
			this.task
				.then(function () {
					t(n);
				})
				.catch(function (t) {
					n.error(t);
				});
	}
	return (
		(t.prototype.next = function (t) {
			this.forEachObserver(function (e) {
				e.next(t);
			});
		}),
		(t.prototype.error = function (t) {
			this.forEachObserver(function (e) {
				e.error(t);
			}),
				this.close(t);
		}),
		(t.prototype.complete = function () {
			this.forEachObserver(function (t) {
				t.complete();
			}),
				this.close();
		}),
		(t.prototype.subscribe = function (t, e, n) {
			var r,
				i = this;
			if (void 0 === t && void 0 === e && void 0 === n) throw new Error('Missing Observer.');
			void 0 ===
				(r = (function (t, e) {
					if ('object' != typeof t || null === t) return !1;
					for (var n = 0, r = e; n < r.length; n++) {
						var i = r[n];
						if (i in t && 'function' == typeof t[i]) return !0;
					}
					return !1;
				})(t, ['next', 'error', 'complete'])
					? t
					: { next: t, error: e, complete: n }).next && (r.next = me),
				void 0 === r.error && (r.error = me),
				void 0 === r.complete && (r.complete = me);
			var o = this.unsubscribeOne.bind(this, this.observers.length);
			return (
				this.finalized &&
					this.task.then(function () {
						try {
							i.finalError ? r.error(i.finalError) : r.complete();
						} catch (t) {}
					}),
				this.observers.push(r),
				o
			);
		}),
		(t.prototype.unsubscribeOne = function (t) {
			void 0 !== this.observers &&
				void 0 !== this.observers[t] &&
				(delete this.observers[t],
				(this.observerCount -= 1),
				0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
		}),
		(t.prototype.forEachObserver = function (t) {
			if (!this.finalized) for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t);
		}),
		(t.prototype.sendOne = function (t, e) {
			var n = this;
			this.task.then(function () {
				if (void 0 !== n.observers && void 0 !== n.observers[t])
					try {
						e(n.observers[t]);
					} catch (r) {
						'undefined' != typeof console && console.error && console.error(r);
					}
			});
		}),
		(t.prototype.close = function (t) {
			var e = this;
			this.finalized ||
				((this.finalized = !0),
				void 0 !== t && (this.finalError = t),
				this.task.then(function () {
					(e.observers = void 0), (e.onNoObservers = void 0);
				}));
		}),
		t
	);
})();
function me() {}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var be =
	function () {
		return (be =
			Object.assign ||
			function (t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var i in (e = arguments[n]))
						Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
				return t;
			}).apply(this, arguments);
	};
function we(t, e, n, r) {
	return new (n || (n = Promise))(function (i, o) {
		function s(t) {
			try {
				a(r.next(t));
			} catch (e) {
				o(e);
			}
		}
		function u(t) {
			try {
				a(r.throw(t));
			} catch (e) {
				o(e);
			}
		}
		function a(t) {
			var e;
			t.done
				? i(t.value)
				: ((e = t.value),
				  e instanceof n
						? e
						: new n(function (t) {
								t(e);
						  })).then(s, u);
		}
		a((r = r.apply(t, e || [])).next());
	});
}
function Ee(t, e) {
	var n,
		r,
		i,
		o,
		s = {
			label: 0,
			sent: function () {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: []
		};
	return (
		(o = { next: u(0), throw: u(1), return: u(2) }),
		'function' == typeof Symbol &&
			(o[Symbol.iterator] = function () {
				return this;
			}),
		o
	);
	function u(o) {
		return function (u) {
			return (function (o) {
				if (n) throw new TypeError('Generator is already executing.');
				for (; s; )
					try {
						if (
							((n = 1),
							r &&
								(i =
									2 & o[0]
										? r.return
										: o[0]
										? r.throw || ((i = r.return) && i.call(r), 0)
										: r.next) &&
								!(i = i.call(r, o[1])).done)
						)
							return i;
						switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
							case 0:
							case 1:
								i = o;
								break;
							case 4:
								return s.label++, { value: o[1], done: !1 };
							case 5:
								s.label++, (r = o[1]), (o = [0]);
								continue;
							case 7:
								(o = s.ops.pop()), s.trys.pop();
								continue;
							default:
								if (
									!((i = s.trys),
									(i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))
								) {
									s = 0;
									continue;
								}
								if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
									s.label = o[1];
									break;
								}
								if (6 === o[0] && s.label < i[1]) {
									(s.label = i[1]), (i = o);
									break;
								}
								if (i && s.label < i[2]) {
									(s.label = i[2]), s.ops.push(o);
									break;
								}
								i[2] && s.ops.pop(), s.trys.pop();
								continue;
						}
						o = e.call(t, s);
					} catch (u) {
						(o = [6, u]), (r = 0);
					} finally {
						n = i = 0;
					}
				if (5 & o[0]) throw o[1];
				return { value: o[0] ? o[1] : void 0, done: !0 };
			})([o, u]);
		};
	}
}
function Ie(t, e) {
	var n = 'function' == typeof Symbol && t[Symbol.iterator];
	if (!n) return t;
	var r,
		i,
		o = n.call(t),
		s = [];
	try {
		for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) s.push(r.value);
	} catch (u) {
		i = { error: u };
	} finally {
		try {
			r && !r.done && (n = o.return) && n.call(o);
		} finally {
			if (i) throw i.error;
		}
	}
	return s;
}
function _e() {
	for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Ie(arguments[e]));
	return t;
}
var Te = (function () {
		function t(t, e, n) {
			(this.name = t),
				(this.instanceFactory = e),
				(this.type = n),
				(this.multipleInstances = !1),
				(this.serviceProps = {}),
				(this.instantiationMode = 'LAZY');
		}
		return (
			(t.prototype.setInstantiationMode = function (t) {
				return (this.instantiationMode = t), this;
			}),
			(t.prototype.setMultipleInstances = function (t) {
				return (this.multipleInstances = t), this;
			}),
			(t.prototype.setServiceProps = function (t) {
				return (this.serviceProps = t), this;
			}),
			t
		);
	})(),
	Ae = (function () {
		function t(t, e) {
			(this.name = t),
				(this.container = e),
				(this.component = null),
				(this.instances = new Map()),
				(this.instancesDeferred = new Map());
		}
		return (
			(t.prototype.get = function (t) {
				void 0 === t && (t = '[DEFAULT]');
				var e = this.normalizeInstanceIdentifier(t);
				if (!this.instancesDeferred.has(e)) {
					var n = new ae();
					this.instancesDeferred.set(e, n);
					try {
						var r = this.getOrInitializeService(e);
						r && n.resolve(r);
					} catch (i) {}
				}
				return this.instancesDeferred.get(e).promise;
			}),
			(t.prototype.getImmediate = function (t) {
				var e = be({ identifier: '[DEFAULT]', optional: !1 }, t),
					n = e.identifier,
					r = e.optional,
					i = this.normalizeInstanceIdentifier(n);
				try {
					var o = this.getOrInitializeService(i);
					if (!o) {
						if (r) return null;
						throw Error('Service ' + this.name + ' is not available');
					}
					return o;
				} catch (s) {
					if (r) return null;
					throw s;
				}
			}),
			(t.prototype.getComponent = function () {
				return this.component;
			}),
			(t.prototype.setComponent = function (t) {
				var e, n;
				if (t.name !== this.name)
					throw Error('Mismatching Component ' + t.name + ' for Provider ' + this.name + '.');
				if (this.component)
					throw Error('Component for ' + this.name + ' has already been provided');
				if (
					((this.component = t),
					(function (t) {
						return 'EAGER' === t.instantiationMode;
					})(
						/**
						 * @license
						 * Copyright 2019 Google LLC
						 *
						 * Licensed under the Apache License, Version 2.0 (the "License");
						 * you may not use this file except in compliance with the License.
						 * You may obtain a copy of the License at
						 *
						 *   http://www.apache.org/licenses/LICENSE-2.0
						 *
						 * Unless required by applicable law or agreed to in writing, software
						 * distributed under the License is distributed on an "AS IS" BASIS,
						 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
						 * See the License for the specific language governing permissions and
						 * limitations under the License.
						 */ t
					))
				)
					try {
						this.getOrInitializeService('[DEFAULT]');
					} catch (h) {}
				try {
					for (
						var r = (function (t) {
								var e = 'function' == typeof Symbol && Symbol.iterator,
									n = e && t[e],
									r = 0;
								if (n) return n.call(t);
								if (t && 'number' == typeof t.length)
									return {
										next: function () {
											return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
										}
									};
								throw new TypeError(
									e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
								);
							})(this.instancesDeferred.entries()),
							i = r.next();
						!i.done;
						i = r.next()
					) {
						var o = Ie(i.value, 2),
							s = o[0],
							u = o[1],
							a = this.normalizeInstanceIdentifier(s);
						try {
							var c = this.getOrInitializeService(a);
							u.resolve(c);
						} catch (h) {}
					}
				} catch (f) {
					e = { error: f };
				} finally {
					try {
						i && !i.done && (n = r.return) && n.call(r);
					} finally {
						if (e) throw e.error;
					}
				}
			}),
			(t.prototype.clearInstance = function (t) {
				void 0 === t && (t = '[DEFAULT]'),
					this.instancesDeferred.delete(t),
					this.instances.delete(t);
			}),
			(t.prototype.delete = function () {
				return we(this, void 0, void 0, function () {
					var t;
					return Ee(this, function (e) {
						switch (e.label) {
							case 0:
								return (
									(t = Array.from(this.instances.values())),
									[
										4,
										Promise.all(
											_e(
												t
													.filter(function (t) {
														return 'INTERNAL' in t;
													})
													.map(function (t) {
														return t.INTERNAL.delete();
													}),
												t
													.filter(function (t) {
														return '_delete' in t;
													})
													.map(function (t) {
														return t._delete();
													})
											)
										)
									]
								);
							case 1:
								return e.sent(), [2];
						}
					});
				});
			}),
			(t.prototype.isComponentSet = function () {
				return null != this.component;
			}),
			(t.prototype.getOrInitializeService = function (t) {
				var e = this.instances.get(t);
				return (
					!e &&
						this.component &&
						((e = this.component.instanceFactory(
							this.container,
							(function (t) {
								return '[DEFAULT]' === t ? void 0 : t;
							})(t)
						)),
						this.instances.set(t, e)),
					e || null
				);
			}),
			(t.prototype.normalizeInstanceIdentifier = function (t) {
				return this.component ? (this.component.multipleInstances ? t : '[DEFAULT]') : t;
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ne,
	Se = (function () {
		function t(t) {
			(this.name = t), (this.providers = new Map());
		}
		return (
			(t.prototype.addComponent = function (t) {
				var e = this.getProvider(t.name);
				if (e.isComponentSet())
					throw new Error('Component ' + t.name + ' has already been registered with ' + this.name);
				e.setComponent(t);
			}),
			(t.prototype.addOrOverwriteComponent = function (t) {
				this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
					this.addComponent(t);
			}),
			(t.prototype.getProvider = function (t) {
				if (this.providers.has(t)) return this.providers.get(t);
				var e = new Ae(t, this);
				return this.providers.set(t, e), e;
			}),
			(t.prototype.getProviders = function () {
				return Array.from(this.providers.values());
			}),
			t
		);
	})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function De() {
	for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
	var r = Array(t),
		i = 0;
	for (e = 0; e < n; e++)
		for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
	return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ke,
	xe,
	Oe = [];
((xe = ke || (ke = {}))[(xe.DEBUG = 0)] = 'DEBUG'),
	(xe[(xe.VERBOSE = 1)] = 'VERBOSE'),
	(xe[(xe.INFO = 2)] = 'INFO'),
	(xe[(xe.WARN = 3)] = 'WARN'),
	(xe[(xe.ERROR = 4)] = 'ERROR'),
	(xe[(xe.SILENT = 5)] = 'SILENT');
var Le,
	Pe = {
		debug: ke.DEBUG,
		verbose: ke.VERBOSE,
		info: ke.INFO,
		warn: ke.WARN,
		error: ke.ERROR,
		silent: ke.SILENT
	},
	Ce = ke.INFO,
	Re =
		(((Ne = {})[ke.DEBUG] = 'log'),
		(Ne[ke.VERBOSE] = 'log'),
		(Ne[ke.INFO] = 'info'),
		(Ne[ke.WARN] = 'warn'),
		(Ne[ke.ERROR] = 'error'),
		Ne),
	Ue = function (t, e) {
		for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
		if (!(e < t.logLevel)) {
			var i = new Date().toISOString(),
				o = Re[e];
			if (!o)
				throw new Error('Attempted to log a message with an invalid logType (value: ' + e + ')');
			console[o].apply(console, De(['[' + i + ']  ' + t.name + ':'], n));
		}
	},
	je = (function () {
		function t(t) {
			(this.name = t),
				(this._logLevel = Ce),
				(this._logHandler = Ue),
				(this._userLogHandler = null),
				Oe.push(this);
		}
		return (
			Object.defineProperty(t.prototype, 'logLevel', {
				get: function () {
					return this._logLevel;
				},
				set: function (t) {
					if (!(t in ke)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
					this._logLevel = t;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.setLogLevel = function (t) {
				this._logLevel = 'string' == typeof t ? Pe[t] : t;
			}),
			Object.defineProperty(t.prototype, 'logHandler', {
				get: function () {
					return this._logHandler;
				},
				set: function (t) {
					if ('function' != typeof t)
						throw new TypeError('Value assigned to `logHandler` must be a function');
					this._logHandler = t;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'userLogHandler', {
				get: function () {
					return this._userLogHandler;
				},
				set: function (t) {
					this._userLogHandler = t;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.debug = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._userLogHandler && this._userLogHandler.apply(this, De([this, ke.DEBUG], t)),
					this._logHandler.apply(this, De([this, ke.DEBUG], t));
			}),
			(t.prototype.log = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._userLogHandler && this._userLogHandler.apply(this, De([this, ke.VERBOSE], t)),
					this._logHandler.apply(this, De([this, ke.VERBOSE], t));
			}),
			(t.prototype.info = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._userLogHandler && this._userLogHandler.apply(this, De([this, ke.INFO], t)),
					this._logHandler.apply(this, De([this, ke.INFO], t));
			}),
			(t.prototype.warn = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._userLogHandler && this._userLogHandler.apply(this, De([this, ke.WARN], t)),
					this._logHandler.apply(this, De([this, ke.WARN], t));
			}),
			(t.prototype.error = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				this._userLogHandler && this._userLogHandler.apply(this, De([this, ke.ERROR], t)),
					this._logHandler.apply(this, De([this, ke.ERROR], t));
			}),
			t
		);
	})();
function Fe(t) {
	Oe.forEach(function (e) {
		e.setLogLevel(t);
	});
}
var Me,
	Ve =
		(((Le = {})['no-app'] =
			"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
		(Le['bad-app-name'] = "Illegal App name: '{$appName}"),
		(Le['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
		(Le['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
		(Le['invalid-app-argument'] =
			'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
		(Le['invalid-log-argument'] = 'First argument to `onLog` must be null or a function.'),
		Le),
	qe = new le('app', 'Firebase', Ve),
	Be =
		(((Me = {})['@firebase/app'] = 'fire-core'),
		(Me['@firebase/analytics'] = 'fire-analytics'),
		(Me['@firebase/auth'] = 'fire-auth'),
		(Me['@firebase/database'] = 'fire-rtdb'),
		(Me['@firebase/functions'] = 'fire-fn'),
		(Me['@firebase/installations'] = 'fire-iid'),
		(Me['@firebase/messaging'] = 'fire-fcm'),
		(Me['@firebase/performance'] = 'fire-perf'),
		(Me['@firebase/remote-config'] = 'fire-rc'),
		(Me['@firebase/storage'] = 'fire-gcs'),
		(Me['@firebase/firestore'] = 'fire-fst'),
		(Me['fire-js'] = 'fire-js'),
		(Me['firebase-wrapper'] = 'fire-js-all'),
		Me),
	Ge = new je('@firebase/app'),
	ze = (function () {
		function t(t, e, n) {
			var r,
				i,
				o = this;
			(this.firebase_ = n),
				(this.isDeleted_ = !1),
				(this.name_ = e.name),
				(this.automaticDataCollectionEnabled_ = e.automaticDataCollectionEnabled || !1),
				(this.options_ = ue(void 0, t)),
				(this.container = new Se(e.name)),
				this._addComponent(
					new Te(
						'app',
						function () {
							return o;
						},
						'PUBLIC'
					)
				);
			try {
				for (
					var s = ie(this.firebase_.INTERNAL.components.values()), u = s.next();
					!u.done;
					u = s.next()
				) {
					var a = u.value;
					this._addComponent(a);
				}
			} catch (c) {
				r = { error: c };
			} finally {
				try {
					u && !u.done && (i = s.return) && i.call(s);
				} finally {
					if (r) throw r.error;
				}
			}
		}
		return (
			Object.defineProperty(t.prototype, 'automaticDataCollectionEnabled', {
				get: function () {
					return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
				},
				set: function (t) {
					this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = t);
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'name', {
				get: function () {
					return this.checkDestroyed_(), this.name_;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'options', {
				get: function () {
					return this.checkDestroyed_(), this.options_;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.delete = function () {
				var t = this;
				return new Promise(function (e) {
					t.checkDestroyed_(), e();
				})
					.then(function () {
						return (
							t.firebase_.INTERNAL.removeApp(t.name_),
							Promise.all(
								t.container.getProviders().map(function (t) {
									return t.delete();
								})
							)
						);
					})
					.then(function () {
						t.isDeleted_ = !0;
					});
			}),
			(t.prototype._getService = function (t, e) {
				return (
					void 0 === e && (e = '[DEFAULT]'),
					this.checkDestroyed_(),
					this.container.getProvider(t).getImmediate({ identifier: e })
				);
			}),
			(t.prototype._removeServiceInstance = function (t, e) {
				void 0 === e && (e = '[DEFAULT]'), this.container.getProvider(t).clearInstance(e);
			}),
			(t.prototype._addComponent = function (t) {
				try {
					this.container.addComponent(t);
				} catch (e) {
					Ge.debug('Component ' + t.name + ' failed to register with FirebaseApp ' + this.name, e);
				}
			}),
			(t.prototype._addOrOverwriteComponent = function (t) {
				this.container.addOrOverwriteComponent(t);
			}),
			(t.prototype.checkDestroyed_ = function () {
				if (this.isDeleted_) throw qe.create('app-deleted', { appName: this.name_ });
			}),
			t
		);
	})();
(ze.prototype.name && ze.prototype.options) || ze.prototype.delete || console.log('dc');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(t) {
	var e = {},
		n = new Map(),
		r = {
			__esModule: !0,
			initializeApp: function (n, i) {
				void 0 === i && (i = {});
				if ('object' != typeof i || null === i) {
					i = { name: i };
				}
				var o = i;
				void 0 === o.name && (o.name = '[DEFAULT]');
				var s = o.name;
				if ('string' != typeof s || !s) throw qe.create('bad-app-name', { appName: String(s) });
				if (ve(e, s)) throw qe.create('duplicate-app', { appName: s });
				var u = new t(n, o, r);
				return (e[s] = u), u;
			},
			app: i,
			registerVersion: function (t, e, n) {
				var r,
					i = null !== (r = Be[t]) && void 0 !== r ? r : t;
				n && (i += '-' + n);
				var s = i.match(/\s|\//),
					u = e.match(/\s|\//);
				if (s || u) {
					var a = ['Unable to register library "' + i + '" with version "' + e + '":'];
					return (
						s && a.push('library name "' + i + '" contains illegal characters (whitespace or "/")'),
						s && u && a.push('and'),
						u && a.push('version name "' + e + '" contains illegal characters (whitespace or "/")'),
						void Ge.warn(a.join(' '))
					);
				}
				o(
					new Te(
						i + '-version',
						function () {
							return { library: i, version: e };
						},
						'VERSION'
					)
				);
			},
			setLogLevel: Fe,
			onLog: function (t, e) {
				if (null !== t && 'function' != typeof t)
					throw qe.create('invalid-log-argument', { appName: name });
				!(function (t, e) {
					for (
						var n = function (n) {
								var r = null;
								e && e.level && (r = Pe[e.level]),
									(n.userLogHandler =
										null === t
											? null
											: function (e, n) {
													for (var i = [], o = 2; o < arguments.length; o++)
														i[o - 2] = arguments[o];
													var s = i
														.map(function (t) {
															if (null == t) return null;
															if ('string' == typeof t) return t;
															if ('number' == typeof t || 'boolean' == typeof t)
																return t.toString();
															if (t instanceof Error) return t.message;
															try {
																return JSON.stringify(t);
															} catch (e) {
																return null;
															}
														})
														.filter(function (t) {
															return t;
														})
														.join(' ');
													n >= (null != r ? r : e.logLevel) &&
														t({ level: ke[n].toLowerCase(), message: s, args: i, type: e.name });
											  });
							},
							r = 0,
							i = Oe;
						r < i.length;
						r++
					)
						n(i[r]);
				})(
					/**
					 * @license
					 * Copyright 2019 Google LLC
					 *
					 * Licensed under the Apache License, Version 2.0 (the "License");
					 * you may not use this file except in compliance with the License.
					 * You may obtain a copy of the License at
					 *
					 *   http://www.apache.org/licenses/LICENSE-2.0
					 *
					 * Unless required by applicable law or agreed to in writing, software
					 * distributed under the License is distributed on an "AS IS" BASIS,
					 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
					 * See the License for the specific language governing permissions and
					 * limitations under the License.
					 */ t,
					e
				);
			},
			apps: null,
			SDK_VERSION: '7.20.0',
			INTERNAL: {
				registerComponent: o,
				removeApp: function (t) {
					delete e[t];
				},
				components: n,
				useAsService: function (t, e) {
					if ('serverAuth' === e) return null;
					return e;
				}
			}
		};
	function i(t) {
		if (!ve(e, (t = t || '[DEFAULT]'))) throw qe.create('no-app', { appName: t });
		return e[t];
	}
	function o(o) {
		var s,
			u,
			a = o.name;
		if (n.has(a))
			return (
				Ge.debug('There were multiple attempts to register component ' + a + '.'),
				'PUBLIC' === o.type ? r[a] : null
			);
		if ((n.set(a, o), 'PUBLIC' === o.type)) {
			var c = function (t) {
				if ((void 0 === t && (t = i()), 'function' != typeof t[a]))
					throw qe.create('invalid-app-argument', { appName: a });
				return t[a]();
			};
			void 0 !== o.serviceProps && ue(c, o.serviceProps),
				(r[a] = c),
				(t.prototype[a] = function () {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					var n = this._getService.bind(this, a);
					return n.apply(this, o.multipleInstances ? t : []);
				});
		}
		try {
			for (var h = ie(Object.keys(e)), f = h.next(); !f.done; f = h.next()) {
				var l = f.value;
				e[l]._addComponent(o);
			}
		} catch (p) {
			s = { error: p };
		} finally {
			try {
				f && !f.done && (u = h.return) && u.call(h);
			} finally {
				if (s) throw s.error;
			}
		}
		return 'PUBLIC' === o.type ? r[a] : null;
	}
	return (
		(r.default = r),
		Object.defineProperty(r, 'apps', {
			get: function () {
				return Object.keys(e).map(function (t) {
					return e[t];
				});
			}
		}),
		(i.App = t),
		r
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $e = (function t() {
		var e = He(ze);
		return (
			(e.INTERNAL = ee(ee({}, e.INTERNAL), {
				createFirebaseNamespace: t,
				extendNamespace: function (t) {
					ue(e, t);
				},
				createSubscribe: ye,
				ErrorFactory: le,
				deepExtend: ue
			})),
			e
		);
	})(),
	Ke = (function () {
		function t(t) {
			this.container = t;
		}
		return (
			(t.prototype.getPlatformInfoString = function () {
				return this.container
					.getProviders()
					.map(function (t) {
						if (
							(function (t) {
								var e = t.getComponent();
								return 'VERSION' === (null == e ? void 0 : e.type);
							})(
								/**
								 * @license
								 * Copyright 2019 Google LLC
								 *
								 * Licensed under the Apache License, Version 2.0 (the "License");
								 * you may not use this file except in compliance with the License.
								 * You may obtain a copy of the License at
								 *
								 *   http://www.apache.org/licenses/LICENSE-2.0
								 *
								 * Unless required by applicable law or agreed to in writing, software
								 * distributed under the License is distributed on an "AS IS" BASIS,
								 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
								 * See the License for the specific language governing permissions and
								 * limitations under the License.
								 */ t
							)
						) {
							var e = t.getImmediate();
							return e.library + '/' + e.version;
						}
						return null;
					})
					.filter(function (t) {
						return t;
					})
					.join(' ');
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if ('object' == typeof self && self.self === self && void 0 !== self.firebase) {
	Ge.warn(
		'\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
	);
	var We = self.firebase.SDK_VERSION;
	We &&
		We.indexOf('LITE') >= 0 &&
		Ge.warn(
			'\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
		);
}
var Qe = $e.initializeApp;
$e.initializeApp = function () {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	return (
		he() &&
			Ge.warn(
				'\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
			),
		Qe.apply(void 0, t)
	);
};
var Xe,
	Ye,
	Je = $e;
function Ze(t) {
	return t && 'object' == typeof t && 'default' in t ? t : { default: t };
}
(Xe = Je).INTERNAL.registerComponent(
	new Te(
		'platform-logger',
		function (t) {
			return new Ke(t);
		},
		'PRIVATE'
	)
),
	Xe.registerVersion('@firebase/app', '0.6.11', Ye),
	Xe.registerVersion('fire-js', '');
var tn = Ze(
	Gt(Object.freeze({ __proto__: null, [Symbol.toStringTag]: 'Module', default: Je, firebase: Je }))
);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn.default.registerVersion('firebase', '7.24.0', 'app');
var en = tn.default,
	nn = function (t, e) {
		return (nn =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (t, e) {
					t.__proto__ = e;
				}) ||
			function (t, e) {
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			})(t, e);
	};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function rn(t) {
	var e = 'function' == typeof Symbol && Symbol.iterator,
		n = e && t[e],
		r = 0;
	if (n) return n.call(t);
	if (t && 'number' == typeof t.length)
		return {
			next: function () {
				return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
			}
		};
	throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
var on,
	sn =
		'undefined' != typeof globalThis
			? globalThis
			: 'undefined' != typeof window
			? window
			: 'undefined' != typeof global
			? global
			: 'undefined' != typeof self
			? self
			: {},
	un = un || {},
	an = sn || self;
function cn() {}
function hn(t) {
	var e = typeof t;
	return 'object' != e ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null';
}
function fn(t) {
	var e = hn(t);
	return 'array' == e || ('object' == e && 'number' == typeof t.length);
}
function ln(t) {
	var e = typeof t;
	return ('object' == e && null != t) || 'function' == e;
}
var pn = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
	dn = 0;
function vn(t, e, n) {
	return t.call.apply(t.bind, arguments);
}
function yn(t, e, n) {
	if (!t) throw Error();
	if (2 < arguments.length) {
		var r = Array.prototype.slice.call(arguments, 2);
		return function () {
			var n = Array.prototype.slice.call(arguments);
			return Array.prototype.unshift.apply(n, r), t.apply(e, n);
		};
	}
	return function () {
		return t.apply(e, arguments);
	};
}
function gn(t, e, n) {
	return (gn =
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code')
			? vn
			: yn).apply(null, arguments);
}
function mn(t, e) {
	var n = Array.prototype.slice.call(arguments, 1);
	return function () {
		var e = n.slice();
		return e.push.apply(e, arguments), t.apply(this, e);
	};
}
var bn = Date.now;
function wn(t, e) {
	function n() {}
	(n.prototype = e.prototype),
		(t.S = e.prototype),
		(t.prototype = new n()),
		(t.prototype.constructor = t);
}
function En() {
	(this.j = this.j), (this.i = this.i);
}
(En.prototype.j = !1),
	(En.prototype.ja = function () {
		var t;
		!this.j &&
			((this.j = !0), this.G(), 0) &&
			((t = this), (Object.prototype.hasOwnProperty.call(t, pn) && t[pn]) || (t[pn] = ++dn));
	}),
	(En.prototype.G = function () {
		if (this.i) for (; this.i.length; ) this.i.shift()();
	});
var In = Array.prototype.indexOf
		? function (t, e) {
				return Array.prototype.indexOf.call(t, e, void 0);
		  }
		: function (t, e) {
				if ('string' == typeof t)
					return 'string' != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
				for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
				return -1;
		  },
	_n = Array.prototype.forEach
		? function (t, e, n) {
				Array.prototype.forEach.call(t, e, n);
		  }
		: function (t, e, n) {
				for (var r = t.length, i = 'string' == typeof t ? t.split('') : t, o = 0; o < r; o++)
					o in i && e.call(n, i[o], o, t);
		  };
function Tn(t) {
	return Array.prototype.concat.apply([], arguments);
}
function An(t) {
	var e = t.length;
	if (0 < e) {
		for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
		return n;
	}
	return [];
}
function Nn(t) {
	return /^[\s\xa0]*$/.test(t);
}
var Sn,
	Dn = String.prototype.trim
		? function (t) {
				return t.trim();
		  }
		: function (t) {
				return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
		  };
function kn(t, e) {
	return -1 != t.indexOf(e);
}
function xn(t, e) {
	return t < e ? -1 : t > e ? 1 : 0;
}
t: {
	var On = an.navigator;
	if (On) {
		var Ln = On.userAgent;
		if (Ln) {
			Sn = Ln;
			break t;
		}
	}
	Sn = '';
}
function Pn(t, e, n) {
	for (var r in t) e.call(n, t[r], r, t);
}
function Cn(t) {
	var e = {};
	for (var n in t) e[n] = t[n];
	return e;
}
var Rn =
	'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
		' '
	);
function Un(t, e) {
	for (var n, r, i = 1; i < arguments.length; i++) {
		for (n in (r = arguments[i])) t[n] = r[n];
		for (var o = 0; o < Rn.length; o++)
			(n = Rn[o]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
	}
}
function jn(t) {
	return jn[' '](t), t;
}
jn[' '] = cn;
var Fn,
	Mn,
	Vn = kn(Sn, 'Opera'),
	qn = kn(Sn, 'Trident') || kn(Sn, 'MSIE'),
	Bn = kn(Sn, 'Edge'),
	Gn = Bn || qn,
	zn =
		kn(Sn, 'Gecko') &&
		!(kn(Sn.toLowerCase(), 'webkit') && !kn(Sn, 'Edge')) &&
		!(kn(Sn, 'Trident') || kn(Sn, 'MSIE')) &&
		!kn(Sn, 'Edge'),
	Hn = kn(Sn.toLowerCase(), 'webkit') && !kn(Sn, 'Edge');
function $n() {
	var t = an.document;
	return t ? t.documentMode : void 0;
}
t: {
	var Kn = '',
		Wn =
			((Mn = Sn),
			zn
				? /rv:([^\);]+)(\)|;)/.exec(Mn)
				: Bn
				? /Edge\/([\d\.]+)/.exec(Mn)
				: qn
				? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Mn)
				: Hn
				? /WebKit\/(\S+)/.exec(Mn)
				: Vn
				? /(?:Version)[ \/]?(\S+)/.exec(Mn)
				: void 0);
	if ((Wn && (Kn = Wn ? Wn[1] : ''), qn)) {
		var Qn = $n();
		if (null != Qn && Qn > parseFloat(Kn)) {
			Fn = String(Qn);
			break t;
		}
	}
	Fn = Kn;
}
var Xn,
	Yn = {};
function Jn(t) {
	return (function (t, e) {
		var n = Yn;
		return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t));
	})(t, function () {
		for (
			var e = 0,
				n = Dn(String(Fn)).split('.'),
				r = Dn(String(t)).split('.'),
				i = Math.max(n.length, r.length),
				o = 0;
			0 == e && o < i;
			o++
		) {
			var s = n[o] || '',
				u = r[o] || '';
			do {
				if (
					((s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
					(u = /(\d*)(\D*)(.*)/.exec(u) || ['', '', '', '']),
					0 == s[0].length && 0 == u[0].length)
				)
					break;
				(e =
					xn(
						0 == s[1].length ? 0 : parseInt(s[1], 10),
						0 == u[1].length ? 0 : parseInt(u[1], 10)
					) ||
					xn(0 == s[2].length, 0 == u[2].length) ||
					xn(s[2], u[2])),
					(s = s[3]),
					(u = u[3]);
			} while (0 == e);
		}
		return 0 <= e;
	});
}
if (an.document && qn) {
	var Zn = $n();
	Xn = Zn || parseInt(Fn, 10) || void 0;
} else Xn = void 0;
var tr = Xn,
	er = !qn || 9 <= Number(tr),
	nr = qn && !Jn('9'),
	rr = (function () {
		if (!an.addEventListener || !Object.defineProperty) return !1;
		var t = !1,
			e = Object.defineProperty({}, 'passive', {
				get: function () {
					t = !0;
				}
			});
		try {
			an.addEventListener('test', cn, e), an.removeEventListener('test', cn, e);
		} catch (n) {}
		return t;
	})();
function ir(t, e) {
	(this.type = t), (this.a = this.target = e), (this.defaultPrevented = !1);
}
function or(t, e) {
	if (
		(ir.call(this, t ? t.type : ''),
		(this.relatedTarget = this.a = this.target = null),
		(this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
		(this.key = ''),
		(this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
		(this.pointerId = 0),
		(this.pointerType = ''),
		(this.c = null),
		t)
	) {
		var n = (this.type = t.type),
			r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
		if (((this.target = t.target || t.srcElement), (this.a = e), (e = t.relatedTarget))) {
			if (zn) {
				t: {
					try {
						jn(e.nodeName);
						var i = !0;
						break t;
					} catch (o) {}
					i = !1;
				}
				i || (e = null);
			}
		} else 'mouseover' == n ? (e = t.fromElement) : 'mouseout' == n && (e = t.toElement);
		(this.relatedTarget = e),
			r
				? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
				  (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
				  (this.screenX = r.screenX || 0),
				  (this.screenY = r.screenY || 0))
				: ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
				  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
				  (this.screenX = t.screenX || 0),
				  (this.screenY = t.screenY || 0)),
			(this.button = t.button),
			(this.key = t.key || ''),
			(this.ctrlKey = t.ctrlKey),
			(this.altKey = t.altKey),
			(this.shiftKey = t.shiftKey),
			(this.metaKey = t.metaKey),
			(this.pointerId = t.pointerId || 0),
			(this.pointerType =
				'string' == typeof t.pointerType ? t.pointerType : sr[t.pointerType] || ''),
			(this.c = t),
			t.defaultPrevented && this.b();
	}
}
(ir.prototype.b = function () {
	this.defaultPrevented = !0;
}),
	wn(or, ir);
var sr = { 2: 'touch', 3: 'pen', 4: 'mouse' };
or.prototype.b = function () {
	or.S.b.call(this);
	var t = this.c;
	if (t.preventDefault) t.preventDefault();
	else if (((t.returnValue = !1), nr))
		try {
			(t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) && (t.keyCode = -1);
		} catch (e) {}
};
var ur = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
	ar = 0;
function cr(t, e, n, r, i) {
	(this.listener = t),
		(this.proxy = null),
		(this.src = e),
		(this.type = n),
		(this.capture = !!r),
		(this.ca = i),
		(this.key = ++ar),
		(this.Y = this.Z = !1);
}
function hr(t) {
	(t.Y = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.ca = null);
}
function fr(t) {
	(this.src = t), (this.a = {}), (this.b = 0);
}
function lr(t, e) {
	var n = e.type;
	if (n in t.a) {
		var r,
			i = t.a[n],
			o = In(i, e);
		(r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
			r && (hr(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
	}
}
function pr(t, e, n, r) {
	for (var i = 0; i < t.length; ++i) {
		var o = t[i];
		if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r) return i;
	}
	return -1;
}
fr.prototype.add = function (t, e, n, r, i) {
	var o = t.toString();
	(t = this.a[o]) || ((t = this.a[o] = []), this.b++);
	var s = pr(t, e, r, i);
	return (
		-1 < s
			? ((e = t[s]), n || (e.Z = !1))
			: (((e = new cr(e, this.src, o, !!r, i)).Z = n), t.push(e)),
		e
	);
};
var dr = 'closure_lm_' + ((1e6 * Math.random()) | 0),
	vr = {};
function yr(t, e, n, r, i) {
	if (r && r.once) return mr(t, e, n, r, i);
	if (Array.isArray(e)) {
		for (var o = 0; o < e.length; o++) yr(t, e[o], n, r, i);
		return null;
	}
	return (n = Nr(n)), t && t[ur] ? t.va(e, n, ln(r) ? !!r.capture : !!r, i) : gr(t, e, n, !1, r, i);
}
function gr(t, e, n, r, i, o) {
	if (!e) throw Error('Invalid event type');
	var s = ln(i) ? !!i.capture : !!i;
	if (s && !er) return null;
	var u = Tr(t);
	if ((u || (t[dr] = u = new fr(t)), (n = u.add(e, n, r, s, o)).proxy)) return n;
	if (
		((r = (function () {
			var t = _r,
				e = er
					? function (n) {
							return t.call(e.src, e.listener, n);
					  }
					: function (n) {
							if (!(n = t.call(e.src, e.listener, n))) return n;
					  };
			return e;
		})()),
		(n.proxy = r),
		(r.src = t),
		(r.listener = n),
		t.addEventListener)
	)
		rr || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
	else if (t.attachEvent) t.attachEvent(Er(e.toString()), r);
	else {
		if (!t.addListener || !t.removeListener)
			throw Error('addEventListener and attachEvent are unavailable.');
		t.addListener(r);
	}
	return n;
}
function mr(t, e, n, r, i) {
	if (Array.isArray(e)) {
		for (var o = 0; o < e.length; o++) mr(t, e[o], n, r, i);
		return null;
	}
	return (n = Nr(n)), t && t[ur] ? t.wa(e, n, ln(r) ? !!r.capture : !!r, i) : gr(t, e, n, !0, r, i);
}
function br(t, e, n, r, i) {
	if (Array.isArray(e)) for (var o = 0; o < e.length; o++) br(t, e[o], n, r, i);
	else
		(r = ln(r) ? !!r.capture : !!r),
			(n = Nr(n)),
			t && t[ur]
				? ((t = t.c),
				  (e = String(e).toString()) in t.a &&
						-1 < (n = pr((o = t.a[e]), n, r, i)) &&
						(hr(o[n]),
						Array.prototype.splice.call(o, n, 1),
						0 == o.length && (delete t.a[e], t.b--)))
				: t &&
				  (t = Tr(t)) &&
				  ((e = t.a[e.toString()]),
				  (t = -1),
				  e && (t = pr(e, n, r, i)),
				  (n = -1 < t ? e[t] : null) && wr(n));
}
function wr(t) {
	if ('number' != typeof t && t && !t.Y) {
		var e = t.src;
		if (e && e[ur]) lr(e.c, t);
		else {
			var n = t.type,
				r = t.proxy;
			e.removeEventListener
				? e.removeEventListener(n, r, t.capture)
				: e.detachEvent
				? e.detachEvent(Er(n), r)
				: e.addListener && e.removeListener && e.removeListener(r),
				(n = Tr(e)) ? (lr(n, t), 0 == n.b && ((n.src = null), (e[dr] = null))) : hr(t);
		}
	}
}
function Er(t) {
	return t in vr ? vr[t] : (vr[t] = 'on' + t);
}
function Ir(t, e) {
	var n = t.listener,
		r = t.ca || t.src;
	return t.Z && wr(t), n.call(r, e);
}
function _r(t, e) {
	if (t.Y) return !0;
	if (!er) {
		if (!e)
			t: {
				e = ['window', 'event'];
				for (var n = an, r = 0; r < e.length; r++)
					if (null == (n = n[e[r]])) {
						e = null;
						break t;
					}
				e = n;
			}
		return Ir(t, (e = new or(e, this)));
	}
	return Ir(t, new or(e, this));
}
function Tr(t) {
	return (t = t[dr]) instanceof fr ? t : null;
}
var Ar = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function Nr(t) {
	return 'function' == hn(t)
		? t
		: (t[Ar] ||
				(t[Ar] = function (e) {
					return t.handleEvent(e);
				}),
		  t[Ar]);
}
function Sr() {
	En.call(this), (this.c = new fr(this)), (this.J = this), (this.C = null);
}
function Dr(t, e, n, r) {
	if (!(e = t.c.a[String(e)])) return !0;
	e = e.concat();
	for (var i = !0, o = 0; o < e.length; ++o) {
		var s = e[o];
		if (s && !s.Y && s.capture == n) {
			var u = s.listener,
				a = s.ca || s.src;
			s.Z && lr(t.c, s), (i = !1 !== u.call(a, r) && i);
		}
	}
	return i && !r.defaultPrevented;
}
wn(Sr, En),
	(Sr.prototype[ur] = !0),
	((on = Sr.prototype).addEventListener = function (t, e, n, r) {
		yr(this, t, e, n, r);
	}),
	(on.removeEventListener = function (t, e, n, r) {
		br(this, t, e, n, r);
	}),
	(on.dispatchEvent = function (t) {
		var e,
			n = this.C;
		if (n) for (e = []; n; n = n.C) e.push(n);
		n = this.J;
		var r = t.type || t;
		if ('string' == typeof t) t = new ir(t, n);
		else if (t instanceof ir) t.target = t.target || n;
		else {
			var i = t;
			Un((t = new ir(r, n)), i);
		}
		if (((i = !0), e))
			for (var o = e.length - 1; 0 <= o; o--) {
				var s = (t.a = e[o]);
				i = Dr(s, r, !0, t) && i;
			}
		if (((i = Dr((s = t.a = n), r, !0, t) && i), (i = Dr(s, r, !1, t) && i), e))
			for (o = 0; o < e.length; o++) i = Dr((s = t.a = e[o]), r, !1, t) && i;
		return i;
	}),
	(on.G = function () {
		if ((Sr.S.G.call(this), this.c)) {
			var t,
				e = this.c;
			for (t in e.a) {
				for (var n = e.a[t], r = 0; r < n.length; r++) hr(n[r]);
				delete e.a[t], e.b--;
			}
		}
		this.C = null;
	}),
	(on.va = function (t, e, n, r) {
		return this.c.add(String(t), e, !1, n, r);
	}),
	(on.wa = function (t, e, n, r) {
		return this.c.add(String(t), e, !0, n, r);
	});
var kr = an.JSON.stringify;
function xr() {
	this.b = this.a = null;
}
var Or,
	Lr = new ((function () {
		function t(t, e, n) {
			(this.f = n), (this.c = t), (this.g = e), (this.b = 0), (this.a = null);
		}
		return (
			(t.prototype.get = function () {
				var t;
				return (
					0 < this.b
						? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
						: (t = this.c()),
					t
				);
			}),
			t
		);
	})())(
		function () {
			return new Cr();
		},
		function (t) {
			t.reset();
		},
		100
	);
function Pr() {
	var t = Fr,
		e = null;
	return t.a && ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)), e;
}
function Cr() {
	this.next = this.b = this.a = null;
}
function Rr(t) {
	an.setTimeout(function () {
		throw t;
	}, 0);
}
function Ur(t, e) {
	Or ||
		(function () {
			var t = an.Promise.resolve(void 0);
			Or = function () {
				t.then(Mr);
			};
		})(),
		jr || (Or(), (jr = !0)),
		Fr.add(t, e);
}
(xr.prototype.add = function (t, e) {
	var n = Lr.get();
	n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
}),
	(Cr.prototype.set = function (t, e) {
		(this.a = t), (this.b = e), (this.next = null);
	}),
	(Cr.prototype.reset = function () {
		this.next = this.b = this.a = null;
	});
var jr = !1,
	Fr = new xr();
function Mr() {
	for (var t; (t = Pr()); ) {
		try {
			t.a.call(t.b);
		} catch (n) {
			Rr(n);
		}
		var e = Lr;
		e.g(t), e.b < e.f && (e.b++, (t.next = e.a), (e.a = t));
	}
	jr = !1;
}
function Vr(t, e) {
	Sr.call(this),
		(this.b = t || 1),
		(this.a = e || an),
		(this.f = gn(this.Ya, this)),
		(this.g = bn());
}
function qr(t) {
	(t.aa = !1), t.M && (t.a.clearTimeout(t.M), (t.M = null));
}
function Br(t, e, n) {
	if ('function' == hn(t)) n && (t = gn(t, n));
	else {
		if (!t || 'function' != typeof t.handleEvent) throw Error('Invalid listener argument');
		t = gn(t.handleEvent, t);
	}
	return 2147483647 < Number(e) ? -1 : an.setTimeout(t, e || 0);
}
function Gr(t) {
	t.a = Br(function () {
		(t.a = null), t.c && ((t.c = !1), Gr(t));
	}, t.h);
	var e = t.b;
	(t.b = null), t.g.apply(null, e);
}
wn(Vr, Sr),
	((on = Vr.prototype).aa = !1),
	(on.M = null),
	(on.Ya = function () {
		if (this.aa) {
			var t = bn() - this.g;
			0 < t && t < 0.8 * this.b
				? (this.M = this.a.setTimeout(this.f, this.b - t))
				: (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
				  this.dispatchEvent('tick'),
				  this.aa && (qr(this), this.start()));
		}
	}),
	(on.start = function () {
		(this.aa = !0), this.M || ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = bn()));
	}),
	(on.G = function () {
		Vr.S.G.call(this), qr(this), delete this.a;
	});
var zr = (function (t) {
	function e(e, n, r) {
		var i = t.call(this) || this;
		return (i.g = null != r ? e.bind(r) : e), (i.h = n), (i.b = null), (i.c = !1), (i.a = null), i;
	}
	return (
		(function (t, e) {
			function n() {
				this.constructor = t;
			}
			nn(t, e),
				(t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
		})(e, t),
		(e.prototype.f = function (t) {
			(this.b = arguments), this.a ? (this.c = !0) : Gr(this);
		}),
		(e.prototype.G = function () {
			t.prototype.G.call(this),
				this.a && (an.clearTimeout(this.a), (this.a = null), (this.c = !1), (this.b = null));
		}),
		e
	);
})(En);
function Hr(t) {
	En.call(this), (this.b = t), (this.a = {});
}
wn(Hr, En);
var $r = [];
function Kr(t, e, n, r) {
	Array.isArray(n) || (n && ($r[0] = n.toString()), (n = $r));
	for (var i = 0; i < n.length; i++) {
		var o = yr(e, n[i], r || t.handleEvent, !1, t.b || t);
		if (!o) break;
		t.a[o.key] = o;
	}
}
function Wr(t) {
	Pn(
		t.a,
		function (t, e) {
			this.a.hasOwnProperty(e) && wr(t);
		},
		t
	),
		(t.a = {});
}
function Qr() {
	this.a = !0;
}
function Xr(t, e, n, r) {
	t.info(function () {
		return (
			'XMLHTTP TEXT (' +
			e +
			'): ' +
			(function (t, e) {
				if (!t.a) return e;
				if (!e) return null;
				try {
					var n = JSON.parse(e);
					if (n)
						for (t = 0; t < n.length; t++)
							if (Array.isArray(n[t])) {
								var r = n[t];
								if (!(2 > r.length)) {
									var i = r[1];
									if (Array.isArray(i) && !(1 > i.length)) {
										var o = i[0];
										if ('noop' != o && 'stop' != o && 'close' != o)
											for (var s = 1; s < i.length; s++) i[s] = '';
									}
								}
							}
					return kr(n);
				} catch (u) {
					return e;
				}
			})(t, n) +
			(r ? ' ' + r : '')
		);
	});
}
(Hr.prototype.G = function () {
	Hr.S.G.call(this), Wr(this);
}),
	(Hr.prototype.handleEvent = function () {
		throw Error('EventHandler.handleEvent not implemented');
	}),
	(Qr.prototype.info = function () {});
var Yr = null;
function Jr() {
	return (Yr = Yr || new Sr());
}
function Zr(t) {
	ir.call(this, 'serverreachability', t);
}
function ti(t) {
	var e = Jr();
	e.dispatchEvent(new Zr(e, t));
}
function ei(t) {
	ir.call(this, 'statevent', t);
}
function ni(t) {
	var e = Jr();
	e.dispatchEvent(new ei(e, t));
}
function ri(t) {
	ir.call(this, 'timingevent', t);
}
function ii(t, e) {
	if ('function' != hn(t)) throw Error('Fn must not be null and must be a function');
	return an.setTimeout(function () {
		t();
	}, e);
}
wn(Zr, ir), wn(ei, ir), wn(ri, ir);
var oi = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 },
	si = {
		ab: 'complete',
		ob: 'success',
		Ea: 'error',
		Da: 'abort',
		mb: 'ready',
		nb: 'readystatechange',
		TIMEOUT: 'timeout',
		ib: 'incrementaldata',
		lb: 'progress',
		cb: 'downloadprogress',
		pb: 'uploadprogress'
	};
function ui() {}
function ai(t) {
	var e;
	return (e = t.a) || (e = t.a = {}), e;
}
function ci() {}
ui.prototype.a = null;
var hi,
	fi = { OPEN: 'a', $a: 'b', Ea: 'c', jb: 'd' };
function li() {
	ir.call(this, 'd');
}
function pi() {
	ir.call(this, 'c');
}
function di() {}
function vi(t, e, n, r) {
	(this.g = t),
		(this.c = e),
		(this.f = n),
		(this.T = r || 1),
		(this.J = new Hr(this)),
		(this.P = yi),
		(t = Gn ? 125 : void 0),
		(this.R = new Vr(t)),
		(this.B = null),
		(this.b = !1),
		(this.j = this.l = this.i = this.H = this.u = this.U = this.o = null),
		(this.s = []),
		(this.a = null),
		(this.D = 0),
		(this.h = this.m = null),
		(this.N = -1),
		(this.A = !1),
		(this.O = 0),
		(this.F = null),
		(this.W = this.C = this.V = this.I = !1);
}
wn(li, ir), wn(pi, ir), wn(di, ui), (hi = new di());
var yi = 45e3,
	gi = {},
	mi = {};
function bi(t, e, n) {
	(t.H = 1), (t.i = qi(Ri(e))), (t.j = n), (t.I = !0), wi(t, null);
}
function wi(t, e) {
	(t.u = bn()), _i(t), (t.l = Ri(t.i));
	var n = t.l,
		r = t.T;
	Array.isArray(r) || (r = [String(r)]),
		to(n.b, 't', r),
		(t.D = 0),
		(t.a = Qo(t.g, t.g.C ? e : null)),
		0 < t.O && (t.F = new zr(gn(t.Ca, t, t.a), t.O)),
		Kr(t.J, t.a, 'readystatechange', t.Wa),
		(e = t.B ? Cn(t.B) : {}),
		t.j
			? (t.m || (t.m = 'POST'),
			  (e['Content-Type'] = 'application/x-www-form-urlencoded'),
			  t.a.ba(t.l, t.m, t.j, e))
			: ((t.m = 'GET'), t.a.ba(t.l, t.m, null, e)),
		ti(1),
		(function (t, e, n, r, i, o) {
			t.info(function () {
				if (t.a)
					if (o)
						for (var s = '', u = o.split('&'), a = 0; a < u.length; a++) {
							var c = u[a].split('=');
							if (1 < c.length) {
								var h = c[0];
								c = c[1];
								var f = h.split('_');
								s =
									2 <= f.length && 'type' == f[1]
										? s + (h + '=') + c + '&'
										: s + (h + '=redacted&');
							}
						}
					else s = null;
				else s = o;
				return 'XMLHTTP REQ (' + r + ') [attempt ' + i + ']: ' + e + '\n' + n + '\n' + s;
			});
		})(t.c, t.m, t.l, t.f, t.T, t.j);
}
function Ei(t, e, n) {
	for (var r = !0; !t.A && t.D < n.length; ) {
		var i = Ii(t, n);
		if (i == mi) {
			4 == e && ((t.h = 4), ni(14), (r = !1)), Xr(t.c, t.f, null, '[Incomplete Response]');
			break;
		}
		if (i == gi) {
			(t.h = 4), ni(15), Xr(t.c, t.f, n, '[Invalid Chunk]'), (r = !1);
			break;
		}
		Xr(t.c, t.f, i, null), Di(t, i);
	}
	4 == e && 0 == n.length && ((t.h = 1), ni(16), (r = !1)),
		(t.b = t.b && r),
		r
			? 0 < n.length &&
			  !t.W &&
			  ((t.W = !0),
			  (e = t.g).a == t &&
					e.V &&
					!e.F &&
					(e.c.info('Great, no buffering proxy detected. Bytes received: ' + n.length),
					qo(e),
					(e.F = !0)))
			: (Xr(t.c, t.f, n, '[Invalid Chunked Response]'), Si(t), Ni(t));
}
function Ii(t, e) {
	var n = t.D,
		r = e.indexOf('\n', n);
	return -1 == r
		? mi
		: ((n = Number(e.substring(n, r))),
		  isNaN(n) ? gi : (r += 1) + n > e.length ? mi : ((e = e.substr(r, n)), (t.D = r + n), e));
}
function _i(t) {
	(t.U = bn() + t.P), Ti(t, t.P);
}
function Ti(t, e) {
	if (null != t.o) throw Error('WatchDog timer not null');
	t.o = ii(gn(t.Ua, t), e);
}
function Ai(t) {
	t.o && (an.clearTimeout(t.o), (t.o = null));
}
function Ni(t) {
	0 == t.g.v || t.A || zo(t.g, t);
}
function Si(t) {
	Ai(t);
	var e = t.F;
	e && 'function' == typeof e.ja && e.ja(),
		(t.F = null),
		qr(t.R),
		Wr(t.J),
		t.a && ((e = t.a), (t.a = null), e.abort(), e.ja());
}
function Di(t, e) {
	try {
		var n = t.g;
		if (0 != n.v && (n.a == t || uo(n.b, t)))
			if (((n.I = t.N), !t.C && uo(n.b, t) && 3 == n.v)) {
				try {
					var r = n.ka.a.parse(e);
				} catch (y) {
					r = null;
				}
				if (Array.isArray(r) && 3 == r.length) {
					var i = r;
					if (0 == i[0]) {
						t: if (!n.j) {
							if (n.a) {
								if (!(n.a.u + 3e3 < t.u)) break t;
								Go(n), Lo(n);
							}
							Vo(n), ni(18);
						}
					} else
						(n.oa = i[1]),
							0 < n.oa - n.P &&
								37500 > i[2] &&
								n.H &&
								0 == n.o &&
								!n.m &&
								(n.m = ii(gn(n.Ra, n), 6e3));
					if (1 >= so(n.b) && n.ea) {
						try {
							n.ea();
						} catch (y) {}
						n.ea = void 0;
					}
				} else $o(n, 11);
			} else if (((t.C || n.a == t) && Go(n), !Nn(e)))
				for (e = r = n.ka.a.parse(e), r = 0; r < e.length; r++)
					if (((i = e[r]), (n.P = i[0]), (i = i[1]), 2 == n.v))
						if ('c' == i[0]) {
							(n.J = i[1]), (n.ga = i[2]);
							var o = i[3];
							null != o && ((n.ha = o), n.c.info('VER=' + n.ha));
							var s = i[4];
							null != s && ((n.pa = s), n.c.info('SVER=' + n.pa));
							var u = i[5];
							if (null != u && 'number' == typeof u && 0 < u) {
								var a = 1.5 * u;
								(n.D = a), n.c.info('backChannelRequestTimeoutMs_=' + a);
							}
							a = n;
							var c = t.a;
							if (c) {
								var h = c.a ? c.a.getResponseHeader('X-Client-Wire-Protocol') : null;
								if (h) {
									var f = a.b;
									!f.a &&
										(kn(h, 'spdy') || kn(h, 'quic') || kn(h, 'h2')) &&
										((f.f = f.g), (f.a = new Set()), f.b && (ao(f, f.b), (f.b = null)));
								}
								if (a.A) {
									var l = c.a ? c.a.getResponseHeader('X-HTTP-Session-Id') : null;
									l && ((a.na = l), Vi(a.B, a.A, l));
								}
							}
							(n.v = 3),
								n.f && n.f.ta(),
								n.V && ((n.N = bn() - t.u), n.c.info('Handshake RTT: ' + n.N + 'ms'));
							var p = t;
							if ((((a = n).la = Wo(a, a.C ? a.ga : null, a.fa)), p.C)) {
								co(a.b, p);
								var d = p,
									v = a.D;
								v && d.setTimeout(v), d.o && (Ai(d), _i(d)), (a.a = p);
							} else Mo(a);
							0 < n.g.length && Ro(n);
						} else ('stop' != i[0] && 'close' != i[0]) || $o(n, 7);
					else
						3 == n.v &&
							('stop' == i[0] || 'close' == i[0]
								? 'stop' == i[0]
									? $o(n, 7)
									: Oo(n)
								: 'noop' != i[0] && n.f && n.f.sa(i),
							(n.o = 0));
		ti(4);
	} catch (y) {}
}
function ki(t, e) {
	if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
	else if (fn(t) || 'string' == typeof t) _n(t, e, void 0);
	else {
		if (t.L && 'function' == typeof t.L) var n = t.L();
		else if (t.K && 'function' == typeof t.K) n = void 0;
		else if (fn(t) || 'string' == typeof t) {
			n = [];
			for (var r = t.length, i = 0; i < r; i++) n.push(i);
		} else for (i in ((n = []), (r = 0), t)) n[r++] = i;
		i = (r = (function (t) {
			if (t.K && 'function' == typeof t.K) return t.K();
			if ('string' == typeof t) return t.split('');
			if (fn(t)) {
				for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
				return e;
			}
			for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
			return e;
		})(t)).length;
		for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
	}
}
function xi(t, e) {
	(this.b = {}), (this.a = []), (this.c = 0);
	var n = arguments.length;
	if (1 < n) {
		if (n % 2) throw Error('Uneven number of arguments');
		for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
	} else if (t)
		if (t instanceof xi) for (n = t.L(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
		else for (r in t) this.set(r, t[r]);
}
function Oi(t) {
	if (t.c != t.a.length) {
		for (var e = 0, n = 0; e < t.a.length; ) {
			var r = t.a[e];
			Li(t.b, r) && (t.a[n++] = r), e++;
		}
		t.a.length = n;
	}
	if (t.c != t.a.length) {
		var i = {};
		for (n = e = 0; e < t.a.length; ) Li(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++;
		t.a.length = n;
	}
}
function Li(t, e) {
	return Object.prototype.hasOwnProperty.call(t, e);
}
((on = vi.prototype).setTimeout = function (t) {
	this.P = t;
}),
	(on.Wa = function (t) {
		t = t.target;
		var e = this.F;
		e && 3 == So(t) ? e.f() : this.Ca(t);
	}),
	(on.Ca = function (t) {
		try {
			if (t == this.a)
				t: {
					var e = So(this.a),
						n = this.a.ua(),
						r = this.a.X();
					if (!(3 > e || (3 == e && !Gn && !this.a.$()))) {
						this.A || 4 != e || 7 == n || ti(8 == n || 0 >= r ? 3 : 2), Ai(this);
						var i = this.a.X();
						this.N = i;
						var o = this.a.$();
						if (
							((this.b = 200 == i),
							(function (t, e, n, r, i, o, s) {
								t.info(function () {
									return (
										'XMLHTTP RESP (' +
										r +
										') [ attempt ' +
										i +
										']: ' +
										e +
										'\n' +
										n +
										'\n' +
										o +
										' ' +
										s
									);
								});
							})(this.c, this.m, this.l, this.f, this.T, e, i),
							this.b)
						) {
							if (this.V && !this.C) {
								e: {
									if (this.a) {
										var s,
											u = this.a;
										if (
											(s = u.a ? u.a.getResponseHeader('X-HTTP-Initial-Response') : null) &&
											!Nn(s)
										) {
											var a = s;
											break e;
										}
									}
									a = null;
								}
								if (!a) {
									(this.b = !1), (this.h = 3), ni(12), Si(this), Ni(this);
									break t;
								}
								Xr(this.c, this.f, a, 'Initial handshake response via X-HTTP-Initial-Response'),
									(this.C = !0),
									Di(this, a);
							}
							this.I
								? (Ei(this, e, o),
								  Gn && this.b && 3 == e && (Kr(this.J, this.R, 'tick', this.Va), this.R.start()))
								: (Xr(this.c, this.f, o, null), Di(this, o)),
								4 == e && Si(this),
								this.b && !this.A && (4 == e ? zo(this.g, this) : ((this.b = !1), _i(this)));
						} else
							400 == i && 0 < o.indexOf('Unknown SID')
								? ((this.h = 3), ni(12))
								: ((this.h = 0), ni(13)),
								Si(this),
								Ni(this);
					}
				}
		} catch (yv) {}
	}),
	(on.Va = function () {
		if (this.a) {
			var t = So(this.a),
				e = this.a.$();
			this.D < e.length && (Ai(this), Ei(this, t, e), this.b && 4 != t && _i(this));
		}
	}),
	(on.cancel = function () {
		(this.A = !0), Si(this);
	}),
	(on.Ua = function () {
		this.o = null;
		var t = bn();
		0 <= t - this.U
			? ((function (t, e) {
					t.info(function () {
						return 'TIMEOUT: ' + e;
					});
			  })(this.c, this.l),
			  2 != this.H && (ti(3), ni(17)),
			  Si(this),
			  (this.h = 2),
			  Ni(this))
			: Ti(this, this.U - t);
	}),
	((on = xi.prototype).K = function () {
		Oi(this);
		for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
		return t;
	}),
	(on.L = function () {
		return Oi(this), this.a.concat();
	}),
	(on.get = function (t, e) {
		return Li(this.b, t) ? this.b[t] : e;
	}),
	(on.set = function (t, e) {
		Li(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
	}),
	(on.forEach = function (t, e) {
		for (var n = this.L(), r = 0; r < n.length; r++) {
			var i = n[r],
				o = this.get(i);
			t.call(e, o, i, this);
		}
	});
var Pi =
	/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Ci(t, e) {
	if (
		((this.c = this.j = this.f = ''),
		(this.h = null),
		(this.i = this.g = ''),
		(this.a = !1),
		t instanceof Ci)
	) {
		(this.a = void 0 !== e ? e : t.a),
			Ui(this, t.f),
			(this.j = t.j),
			ji(this, t.c),
			Fi(this, t.h),
			(this.g = t.g),
			(e = t.b);
		var n = new Xi();
		(n.c = e.c), e.a && ((n.a = new xi(e.a)), (n.b = e.b)), Mi(this, n), (this.i = t.i);
	} else
		t && (n = String(t).match(Pi))
			? ((this.a = !!e),
			  Ui(this, n[1] || '', !0),
			  (this.j = Bi(n[2] || '')),
			  ji(this, n[3] || '', !0),
			  Fi(this, n[4]),
			  (this.g = Bi(n[5] || '', !0)),
			  Mi(this, n[6] || '', !0),
			  (this.i = Bi(n[7] || '')))
			: ((this.a = !!e), (this.b = new Xi(null, this.a)));
}
function Ri(t) {
	return new Ci(t);
}
function Ui(t, e, n) {
	(t.f = n ? Bi(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
}
function ji(t, e, n) {
	t.c = n ? Bi(e, !0) : e;
}
function Fi(t, e) {
	if (e) {
		if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
		t.h = e;
	} else t.h = null;
}
function Mi(t, e, n) {
	e instanceof Xi
		? ((t.b = e),
		  (function (t, e) {
				e &&
					!t.f &&
					(Yi(t),
					(t.c = null),
					t.a.forEach(function (t, e) {
						var n = e.toLowerCase();
						e != n && (Ji(this, e), to(this, n, t));
					}, t)),
					(t.f = e);
		  })(t.b, t.a))
		: (n || (e = Gi(e, Wi)), (t.b = new Xi(e, t.a)));
}
function Vi(t, e, n) {
	t.b.set(e, n);
}
function qi(t) {
	return (
		Vi(
			t,
			'zx',
			Math.floor(2147483648 * Math.random()).toString(36) +
				Math.abs(Math.floor(2147483648 * Math.random()) ^ bn()).toString(36)
		),
		t
	);
}
function Bi(t, e) {
	return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
}
function Gi(t, e, n) {
	return 'string' == typeof t
		? ((t = encodeURI(t).replace(e, zi)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
		: null;
}
function zi(t) {
	return '%' + (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) + (15 & t).toString(16);
}
Ci.prototype.toString = function () {
	var t = [],
		e = this.f;
	e && t.push(Gi(e, Hi, !0), ':');
	var n = this.c;
	return (
		(n || 'file' == e) &&
			(t.push('//'),
			(e = this.j) && t.push(Gi(e, Hi, !0), '@'),
			t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
			null != (n = this.h) && t.push(':', String(n))),
		(n = this.g) &&
			(this.c && '/' != n.charAt(0) && t.push('/'),
			t.push(Gi(n, '/' == n.charAt(0) ? Ki : $i, !0))),
		(n = this.b.toString()) && t.push('?', n),
		(n = this.i) && t.push('#', Gi(n, Qi)),
		t.join('')
	);
};
var Hi = /[#\/\?@]/g,
	$i = /[#\?:]/g,
	Ki = /[#\?]/g,
	Wi = /[#\?@]/g,
	Qi = /#/g;
function Xi(t, e) {
	(this.b = this.a = null), (this.c = t || null), (this.f = !!e);
}
function Yi(t) {
	t.a ||
		((t.a = new xi()),
		(t.b = 0),
		t.c &&
			(function (t, e) {
				if (t) {
					t = t.split('&');
					for (var n = 0; n < t.length; n++) {
						var r = t[n].indexOf('='),
							i = null;
						if (0 <= r) {
							var o = t[n].substring(0, r);
							i = t[n].substring(r + 1);
						} else o = t[n];
						e(o, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
					}
				}
			})(t.c, function (e, n) {
				t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
			}));
}
function Ji(t, e) {
	Yi(t),
		(e = eo(t, e)),
		Li(t.a.b, e) &&
			((t.c = null),
			(t.b -= t.a.get(e).length),
			Li((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Oi(t)));
}
function Zi(t, e) {
	return Yi(t), (e = eo(t, e)), Li(t.a.b, e);
}
function to(t, e, n) {
	Ji(t, e), 0 < n.length && ((t.c = null), t.a.set(eo(t, e), An(n)), (t.b += n.length));
}
function eo(t, e) {
	return (e = String(e)), t.f && (e = e.toLowerCase()), e;
}
function no(t, e) {
	(this.b = t), (this.a = e);
}
function ro(t) {
	(this.g = t || io),
		an.PerformanceNavigationTiming
			? (t =
					0 < (t = an.performance.getEntriesByType('navigation')).length &&
					('hq' == t[0].nextHopProtocol || 'h2' == t[0].nextHopProtocol))
			: (t = !!(an.ia && an.ia.ya && an.ia.ya() && an.ia.ya().qb)),
		(this.f = t ? this.g : 1),
		(this.a = null),
		1 < this.f && (this.a = new Set()),
		(this.b = null),
		(this.c = []);
}
((on = Xi.prototype).add = function (t, e) {
	Yi(this), (this.c = null), (t = eo(this, t));
	var n = this.a.get(t);
	return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
}),
	(on.forEach = function (t, e) {
		Yi(this),
			this.a.forEach(function (n, r) {
				_n(
					n,
					function (n) {
						t.call(e, n, r, this);
					},
					this
				);
			}, this);
	}),
	(on.L = function () {
		Yi(this);
		for (var t = this.a.K(), e = this.a.L(), n = [], r = 0; r < e.length; r++)
			for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
		return n;
	}),
	(on.K = function (t) {
		Yi(this);
		var e = [];
		if ('string' == typeof t) Zi(this, t) && (e = Tn(e, this.a.get(eo(this, t))));
		else {
			t = this.a.K();
			for (var n = 0; n < t.length; n++) e = Tn(e, t[n]);
		}
		return e;
	}),
	(on.set = function (t, e) {
		return (
			Yi(this),
			(this.c = null),
			Zi(this, (t = eo(this, t))) && (this.b -= this.a.get(t).length),
			this.a.set(t, [e]),
			(this.b += 1),
			this
		);
	}),
	(on.get = function (t, e) {
		return t && 0 < (t = this.K(t)).length ? String(t[0]) : e;
	}),
	(on.toString = function () {
		if (this.c) return this.c;
		if (!this.a) return '';
		for (var t = [], e = this.a.L(), n = 0; n < e.length; n++) {
			var r = e[n],
				i = encodeURIComponent(String(r));
			r = this.K(r);
			for (var o = 0; o < r.length; o++) {
				var s = i;
				'' !== r[o] && (s += '=' + encodeURIComponent(String(r[o]))), t.push(s);
			}
		}
		return (this.c = t.join('&'));
	});
var io = 10;
function oo(t) {
	return !!t.b || (!!t.a && t.a.size >= t.f);
}
function so(t) {
	return t.b ? 1 : t.a ? t.a.size : 0;
}
function uo(t, e) {
	return t.b ? t.b == e : !!t.a && t.a.has(e);
}
function ao(t, e) {
	t.a ? t.a.add(e) : (t.b = e);
}
function co(t, e) {
	t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
}
function ho(t) {
	var e, n;
	if (null != t.b) return t.c.concat(t.b.s);
	if (null != t.a && 0 !== t.a.size) {
		var r = t.c;
		try {
			for (var i = rn(t.a.values()), o = i.next(); !o.done; o = i.next()) {
				var s = o.value;
				r = r.concat(s.s);
			}
		} catch (u) {
			e = { error: u };
		} finally {
			try {
				o && !o.done && (n = i.return) && n.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return r;
	}
	return An(t.c);
}
function fo() {}
function lo() {
	this.a = new fo();
}
function po(t, e, n) {
	var r = n || '';
	try {
		ki(t, function (t, n) {
			var i = t;
			ln(t) && (i = kr(t)), e.push(r + n + '=' + encodeURIComponent(i));
		});
	} catch (i) {
		throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i);
	}
}
function vo(t, e, n, r, i) {
	try {
		(e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
	} catch (o) {}
}
(ro.prototype.cancel = function () {
	var t, e;
	if (((this.c = ho(this)), this.b)) this.b.cancel(), (this.b = null);
	else if (this.a && 0 !== this.a.size) {
		try {
			for (var n = rn(this.a.values()), r = n.next(); !r.done; r = n.next()) {
				r.value.cancel();
			}
		} catch (i) {
			t = { error: i };
		} finally {
			try {
				r && !r.done && (e = n.return) && e.call(n);
			} finally {
				if (t) throw t.error;
			}
		}
		this.a.clear();
	}
}),
	(fo.prototype.stringify = function (t) {
		return an.JSON.stringify(t, void 0);
	}),
	(fo.prototype.parse = function (t) {
		return an.JSON.parse(t, void 0);
	});
var yo = an.JSON.parse;
function go(t) {
	Sr.call(this),
		(this.headers = new xi()),
		(this.H = t || null),
		(this.b = !1),
		(this.s = this.a = null),
		(this.B = ''),
		(this.h = 0),
		(this.f = ''),
		(this.g = this.A = this.l = this.u = !1),
		(this.o = 0),
		(this.m = null),
		(this.I = mo),
		(this.D = this.F = !1);
}
wn(go, Sr);
var mo = '',
	bo = /^https?$/i,
	wo = ['POST', 'PUT'];
function Eo(t) {
	return 'content-type' == t.toLowerCase();
}
function Io(t, e) {
	(t.b = !1), t.a && ((t.g = !0), t.a.abort(), (t.g = !1)), (t.f = e), (t.h = 5), _o(t), Ao(t);
}
function _o(t) {
	t.u || ((t.u = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'));
}
function To(t) {
	if (t.b && void 0 !== un && (!t.s[1] || 4 != So(t) || 2 != t.X()))
		if (t.l && 4 == So(t)) Br(t.za, 0, t);
		else if ((t.dispatchEvent('readystatechange'), 4 == So(t))) {
			t.b = !1;
			try {
				var e,
					n = t.X();
				t: switch (n) {
					case 200:
					case 201:
					case 202:
					case 204:
					case 206:
					case 304:
					case 1223:
						var r = !0;
						break t;
					default:
						r = !1;
				}
				if (!(e = r)) {
					var i;
					if ((i = 0 === n)) {
						var o = String(t.B).match(Pi)[1] || null;
						if (!o && an.self && an.self.location) {
							var s = an.self.location.protocol;
							o = s.substr(0, s.length - 1);
						}
						i = !bo.test(o ? o.toLowerCase() : '');
					}
					e = i;
				}
				if (e) t.dispatchEvent('complete'), t.dispatchEvent('success');
				else {
					t.h = 6;
					try {
						var u = 2 < So(t) ? t.a.statusText : '';
					} catch (a) {
						u = '';
					}
					(t.f = u + ' [' + t.X() + ']'), _o(t);
				}
			} finally {
				Ao(t);
			}
		}
}
function Ao(t, e) {
	if (t.a) {
		No(t);
		var n = t.a,
			r = t.s[0] ? cn : null;
		(t.a = null), (t.s = null), e || t.dispatchEvent('ready');
		try {
			n.onreadystatechange = r;
		} catch (i) {}
	}
}
function No(t) {
	t.a && t.D && (t.a.ontimeout = null), t.m && (an.clearTimeout(t.m), (t.m = null));
}
function So(t) {
	return t.a ? t.a.readyState : 0;
}
function Do(t, e, n) {
	t: {
		for (r in n) {
			var r = !1;
			break t;
		}
		r = !0;
	}
	r ||
		((n = (function (t) {
			var e = '';
			return (
				Pn(t, function (t, n) {
					(e += n), (e += ':'), (e += t), (e += '\r\n');
				}),
				e
			);
		})(n)),
		'string' == typeof t ? null != n && encodeURIComponent(String(n)) : Vi(t, e, n));
}
function ko(t, e, n) {
	return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function xo(t) {
	(this.pa = 0),
		(this.g = []),
		(this.c = new Qr()),
		(this.ga =
			this.la =
			this.B =
			this.fa =
			this.a =
			this.na =
			this.A =
			this.W =
			this.i =
			this.O =
			this.l =
				null),
		(this.La = this.R = 0),
		(this.Ia = ko('failFast', !1, t)),
		(this.H = this.m = this.j = this.h = this.f = null),
		(this.T = !0),
		(this.I = this.oa = this.P = -1),
		(this.U = this.o = this.u = 0),
		(this.Fa = ko('baseRetryDelayMs', 5e3, t)),
		(this.Ma = ko('retryDelaySeedMs', 1e4, t)),
		(this.Ja = ko('forwardChannelMaxRetries', 2, t)),
		(this.ma = ko('forwardChannelRequestTimeoutMs', 2e4, t)),
		(this.Ka = (t && t.g) || void 0),
		(this.D = void 0),
		(this.C = (t && t.supportsCrossDomainXhr) || !1),
		(this.J = ''),
		(this.b = new ro(t && t.concurrentRequestLimit)),
		(this.ka = new lo()),
		(this.da = (t && t.fastHandshake) || !1),
		(this.Ga = (t && t.b) || !1),
		t && t.f && (this.c.a = !1),
		t && t.forceLongPolling && (this.T = !1),
		(this.V = (!this.da && this.T && t && t.c) || !1),
		(this.ea = void 0),
		(this.N = 0),
		(this.F = !1),
		(this.s = null);
}
function Oo(t) {
	if ((Po(t), 3 == t.v)) {
		var e = t.R++,
			n = Ri(t.B);
		Vi(n, 'SID', t.J),
			Vi(n, 'RID', e),
			Vi(n, 'TYPE', 'terminate'),
			jo(t, n),
			((e = new vi(t, t.c, e, void 0)).H = 2),
			(e.i = qi(Ri(n))),
			(n = !1),
			an.navigator && an.navigator.sendBeacon && (n = an.navigator.sendBeacon(e.i.toString(), '')),
			!n && an.Image && ((new Image().src = e.i), (n = !0)),
			n || ((e.a = Qo(e.g, null)), e.a.ba(e.i)),
			(e.u = bn()),
			_i(e);
	}
	Ko(t);
}
function Lo(t) {
	t.a && (qo(t), t.a.cancel(), (t.a = null));
}
function Po(t) {
	Lo(t),
		t.j && (an.clearTimeout(t.j), (t.j = null)),
		Go(t),
		t.b.cancel(),
		t.h && ('number' == typeof t.h && an.clearTimeout(t.h), (t.h = null));
}
function Co(t, e) {
	t.g.push(new no(t.La++, e)), 3 == t.v && Ro(t);
}
function Ro(t) {
	oo(t.b) || t.h || ((t.h = !0), Ur(t.Ba, t), (t.u = 0));
}
function Uo(t, e) {
	var n;
	n = e ? e.f : t.R++;
	var r = Ri(t.B);
	Vi(r, 'SID', t.J),
		Vi(r, 'RID', n),
		Vi(r, 'AID', t.P),
		jo(t, r),
		t.i && t.l && Do(r, t.i, t.l),
		(n = new vi(t, t.c, n, t.u + 1)),
		null === t.i && (n.B = t.l),
		e && (t.g = e.s.concat(t.g)),
		(e = Fo(t, n, 1e3)),
		n.setTimeout(Math.round(0.5 * t.ma) + Math.round(0.5 * t.ma * Math.random())),
		ao(t.b, n),
		bi(n, r, e);
}
function jo(t, e) {
	t.f &&
		ki({}, function (t, n) {
			Vi(e, n, t);
		});
}
function Fo(t, e, n) {
	n = Math.min(t.g.length, n);
	var r = t.f ? gn(t.f.Ha, t.f, t) : null;
	t: for (var i = t.g, o = -1; ; ) {
		var s = ['count=' + n];
		-1 == o ? (0 < n ? ((o = i[0].b), s.push('ofs=' + o)) : (o = 0)) : s.push('ofs=' + o);
		for (var u = !0, a = 0; a < n; a++) {
			var c = i[a].b,
				h = i[a].a;
			if (0 > (c -= o)) (o = Math.max(0, i[a].b - 100)), (u = !1);
			else
				try {
					po(h, s, 'req' + c + '_');
				} catch (f) {
					r && r(h);
				}
		}
		if (u) {
			r = s.join('&');
			break t;
		}
	}
	return (t = t.g.splice(0, n)), (e.s = t), r;
}
function Mo(t) {
	t.a || t.j || ((t.U = 1), Ur(t.Aa, t), (t.o = 0));
}
function Vo(t) {
	return !(t.a || t.j || 3 <= t.o) && (t.U++, (t.j = ii(gn(t.Aa, t), Ho(t, t.o))), t.o++, !0);
}
function qo(t) {
	null != t.s && (an.clearTimeout(t.s), (t.s = null));
}
function Bo(t) {
	(t.a = new vi(t, t.c, 'rpc', t.U)), null === t.i && (t.a.B = t.l), (t.a.O = 0);
	var e = Ri(t.la);
	Vi(e, 'RID', 'rpc'),
		Vi(e, 'SID', t.J),
		Vi(e, 'CI', t.H ? '0' : '1'),
		Vi(e, 'AID', t.P),
		jo(t, e),
		Vi(e, 'TYPE', 'xmlhttp'),
		t.i && t.l && Do(e, t.i, t.l),
		t.D && t.a.setTimeout(t.D);
	var n = t.a;
	(t = t.ga), (n.H = 1), (n.i = qi(Ri(e))), (n.j = null), (n.I = !0), wi(n, t);
}
function Go(t) {
	null != t.m && (an.clearTimeout(t.m), (t.m = null));
}
function zo(t, e) {
	var n = null;
	if (t.a == e) {
		Go(t), qo(t), (t.a = null);
		var r = 2;
	} else {
		if (!uo(t.b, e)) return;
		(n = e.s), co(t.b, e), (r = 1);
	}
	if (((t.I = e.N), 0 != t.v))
		if (e.b)
			if (1 == r) {
				(n = e.j ? e.j.length : 0), (e = bn() - e.u);
				var i = t.u;
				(r = Jr()).dispatchEvent(new ri(r, n, e, i)), Ro(t);
			} else Mo(t);
		else if (
			3 == (i = e.h) ||
			(0 == i && 0 < t.I) ||
			!(
				(1 == r &&
					(function (t, e) {
						return !(
							so(t.b) >= t.b.f - (t.h ? 1 : 0) ||
							(t.h
								? ((t.g = e.s.concat(t.g)), 0)
								: 1 == t.v ||
								  2 == t.v ||
								  t.u >= (t.Ia ? 0 : t.Ja) ||
								  ((t.h = ii(gn(t.Ba, t, e), Ho(t, t.u))), t.u++, 0))
						);
					})(t, e)) ||
				(2 == r && Vo(t))
			)
		)
			switch ((n && 0 < n.length && ((e = t.b), (e.c = e.c.concat(n))), i)) {
				case 1:
					$o(t, 5);
					break;
				case 4:
					$o(t, 10);
					break;
				case 3:
					$o(t, 6);
					break;
				default:
					$o(t, 2);
			}
}
function Ho(t, e) {
	var n = t.Fa + Math.floor(Math.random() * t.Ma);
	return t.f || (n *= 2), n * e;
}
function $o(t, e) {
	if ((t.c.info('Error code ' + e), 2 == e)) {
		var n = null;
		t.f && (n = null);
		var r = gn(t.Xa, t);
		n ||
			((n = new Ci('//www.google.com/images/cleardot.gif')),
			(an.location && 'http' == an.location.protocol) || Ui(n, 'https'),
			qi(n)),
			(function (t, e) {
				var n = new Qr();
				if (an.Image) {
					var r = new Image();
					(r.onload = mn(vo, n, r, 'TestLoadImage: loaded', !0, e)),
						(r.onerror = mn(vo, n, r, 'TestLoadImage: error', !1, e)),
						(r.onabort = mn(vo, n, r, 'TestLoadImage: abort', !1, e)),
						(r.ontimeout = mn(vo, n, r, 'TestLoadImage: timeout', !1, e)),
						an.setTimeout(function () {
							r.ontimeout && r.ontimeout();
						}, 1e4),
						(r.src = t);
				} else e(!1);
			})(n.toString(), r);
	} else ni(2);
	(t.v = 0), t.f && t.f.ra(e), Ko(t), Po(t);
}
function Ko(t) {
	(t.v = 0),
		(t.I = -1),
		t.f &&
			((0 == ho(t.b).length && 0 == t.g.length) || ((t.b.c.length = 0), An(t.g), (t.g.length = 0)),
			t.f.qa());
}
function Wo(t, e, n) {
	var r = (function (t) {
		return t instanceof Ci ? Ri(t) : new Ci(t, void 0);
	})(n);
	if ('' != r.c) e && ji(r, e + '.' + r.c), Fi(r, r.h);
	else {
		var i = an.location;
		r = (function (t, e, n, r) {
			var i = new Ci(null, void 0);
			return t && Ui(i, t), e && ji(i, e), n && Fi(i, n), r && (i.g = r), i;
		})(i.protocol, e ? e + '.' + i.hostname : i.hostname, +i.port, n);
	}
	return (
		t.W &&
			Pn(t.W, function (t, e) {
				Vi(r, e, t);
			}),
		(e = t.A),
		(n = t.na),
		e && n && Vi(r, e, n),
		Vi(r, 'VER', t.ha),
		jo(t, r),
		r
	);
}
function Qo(t, e) {
	if (e && !t.C) throw Error("Can't create secondary domain capable XhrIo object.");
	return ((e = new go(t.Ka)).F = t.C), e;
}
function Xo() {}
function Yo() {
	if (qn && !(10 <= Number(tr))) throw Error('Environmental error: no available transport.');
}
function Jo(t, e) {
	Sr.call(this),
		(this.a = new xo(e)),
		(this.l = t),
		(this.b = (e && e.messageUrlParams) || null),
		(t = (e && e.messageHeaders) || null),
		e &&
			e.clientProtocolHeaderRequired &&
			(t ? (t['X-Client-Protocol'] = 'webchannel') : (t = { 'X-Client-Protocol': 'webchannel' })),
		(this.a.l = t),
		(t = (e && e.initMessageHeaders) || null),
		e &&
			e.messageContentType &&
			(t
				? (t['X-WebChannel-Content-Type'] = e.messageContentType)
				: (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
		e &&
			e.a &&
			(t ? (t['X-WebChannel-Client-Profile'] = e.a) : (t = { 'X-WebChannel-Client-Profile': e.a })),
		(this.a.O = t),
		(t = e && e.httpHeadersOverwriteParam) && !Nn(t) && (this.a.i = t),
		(this.h = (e && e.supportsCrossDomainXhr) || !1),
		(this.g = (e && e.sendRawJson) || !1),
		(e = e && e.httpSessionIdParam) &&
			!Nn(e) &&
			((this.a.A = e), null !== (t = this.b) && e in t && e in (t = this.b) && delete t[e]),
		(this.f = new es(this));
}
function Zo(t) {
	li.call(this);
	var e = t.__sm__;
	if (e) {
		t: {
			for (var n in e) {
				t = n;
				break t;
			}
			t = void 0;
		}
		(this.c = t)
			? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
			: (this.data = e);
	} else this.data = t;
}
function ts() {
	pi.call(this), (this.status = 1);
}
function es(t) {
	this.a = t;
}
((on = go.prototype).ba = function (t, e, n, r) {
	if (this.a)
		throw Error(
			'[goog.net.XhrIo] Object is active with another request=' + this.B + '; newUri=' + t
		);
	(e = e ? e.toUpperCase() : 'GET'),
		(this.B = t),
		(this.f = ''),
		(this.h = 0),
		(this.u = !1),
		(this.b = !0),
		(this.a = new XMLHttpRequest()),
		(this.s = this.H ? ai(this.H) : ai(hi)),
		(this.a.onreadystatechange = gn(this.za, this));
	try {
		(this.A = !0), this.a.open(e, String(t), !0), (this.A = !1);
	} catch (o) {
		return void Io(this, o);
	}
	t = n || '';
	var i = new xi(this.headers);
	r &&
		ki(r, function (t, e) {
			i.set(e, t);
		}),
		(r = (function (t) {
			t: {
				for (
					var e = Eo, n = t.length, r = 'string' == typeof t ? t.split('') : t, i = 0;
					i < n;
					i++
				)
					if (i in r && e.call(void 0, r[i], i, t)) {
						e = i;
						break t;
					}
				e = -1;
			}
			return 0 > e ? null : 'string' == typeof t ? t.charAt(e) : t[e];
		})(i.L())),
		(n = an.FormData && t instanceof an.FormData),
		!(0 <= In(wo, e)) ||
			r ||
			n ||
			i.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
		i.forEach(function (t, e) {
			this.a.setRequestHeader(e, t);
		}, this),
		this.I && (this.a.responseType = this.I),
		'withCredentials' in this.a &&
			this.a.withCredentials !== this.F &&
			(this.a.withCredentials = this.F);
	try {
		No(this),
			0 < this.o &&
				((this.D = (function (t) {
					return qn && Jn(9) && 'number' == typeof t.timeout && void 0 !== t.ontimeout;
				})(this.a))
					? ((this.a.timeout = this.o), (this.a.ontimeout = gn(this.xa, this)))
					: (this.m = Br(this.xa, this.o, this))),
			(this.l = !0),
			this.a.send(t),
			(this.l = !1);
	} catch (o) {
		Io(this, o);
	}
}),
	(on.xa = function () {
		void 0 !== un &&
			this.a &&
			((this.f = 'Timed out after ' + this.o + 'ms, aborting'),
			(this.h = 8),
			this.dispatchEvent('timeout'),
			this.abort(8));
	}),
	(on.abort = function (t) {
		this.a &&
			this.b &&
			((this.b = !1),
			(this.g = !0),
			this.a.abort(),
			(this.g = !1),
			(this.h = t || 7),
			this.dispatchEvent('complete'),
			this.dispatchEvent('abort'),
			Ao(this));
	}),
	(on.G = function () {
		this.a &&
			(this.b && ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)), Ao(this, !0)),
			go.S.G.call(this);
	}),
	(on.za = function () {
		this.j || (this.A || this.l || this.g ? To(this) : this.Ta());
	}),
	(on.Ta = function () {
		To(this);
	}),
	(on.X = function () {
		try {
			return 2 < So(this) ? this.a.status : -1;
		} catch (Mn) {
			return -1;
		}
	}),
	(on.$ = function () {
		try {
			return this.a ? this.a.responseText : '';
		} catch (Mn) {
			return '';
		}
	}),
	(on.Na = function (t) {
		if (this.a) {
			var e = this.a.responseText;
			return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), yo(e);
		}
	}),
	(on.ua = function () {
		return this.h;
	}),
	(on.Qa = function () {
		return 'string' == typeof this.f ? this.f : String(this.f);
	}),
	((on = xo.prototype).ha = 8),
	(on.v = 1),
	(on.Ba = function (t) {
		if (this.h)
			if (((this.h = null), 1 == this.v)) {
				if (!t) {
					(this.R = Math.floor(1e5 * Math.random())), (t = this.R++);
					var e,
						n = new vi(this, this.c, t, void 0),
						r = this.l;
					if (
						(this.O && (r ? Un((r = Cn(r)), this.O) : (r = this.O)),
						null === this.i && (n.B = r),
						this.da)
					)
						t: {
							for (var i = (e = 0); i < this.g.length; i++) {
								var o = this.g[i];
								if (
									void 0 ===
									(o =
										'__data__' in o.a && 'string' == typeof (o = o.a.__data__) ? o.length : void 0)
								)
									break;
								if (4096 < (e += o)) {
									e = i;
									break t;
								}
								if (4096 === e || i === this.g.length - 1) {
									e = i + 1;
									break t;
								}
							}
							e = 1e3;
						}
					else e = 1e3;
					(e = Fo(this, n, e)),
						Vi((i = Ri(this.B)), 'RID', t),
						Vi(i, 'CVER', 22),
						this.A && Vi(i, 'X-HTTP-Session-Id', this.A),
						jo(this, i),
						this.i && r && Do(i, this.i, r),
						ao(this.b, n),
						this.Ga && Vi(i, 'TYPE', 'init'),
						this.da
							? (Vi(i, '$req', e), Vi(i, 'SID', 'null'), (n.V = !0), bi(n, i, null))
							: bi(n, i, e),
						(this.v = 2);
				}
			} else 3 == this.v && (t ? Uo(this, t) : 0 == this.g.length || oo(this.b) || Uo(this));
	}),
	(on.Aa = function () {
		if (((this.j = null), Bo(this), this.V && !(this.F || null == this.a || 0 >= this.N))) {
			var t = 2 * this.N;
			this.c.info('BP detection timer enabled: ' + t), (this.s = ii(gn(this.Sa, this), t));
		}
	}),
	(on.Sa = function () {
		this.s &&
			((this.s = null),
			this.c.info('BP detection timeout reached.'),
			this.c.info('Buffering proxy detected and switch to long-polling!'),
			(this.H = !1),
			(this.F = !0),
			Lo(this),
			Bo(this));
	}),
	(on.Ra = function () {
		null != this.m && ((this.m = null), Lo(this), Vo(this), ni(19));
	}),
	(on.Xa = function (t) {
		t
			? (this.c.info('Successfully pinged google.com'), ni(2))
			: (this.c.info('Failed to ping google.com'), ni(1));
	}),
	((on = Xo.prototype).ta = function () {}),
	(on.sa = function () {}),
	(on.ra = function () {}),
	(on.qa = function () {}),
	(on.Ha = function () {}),
	(Yo.prototype.a = function (t, e) {
		return new Jo(t, e);
	}),
	wn(Jo, Sr),
	((on = Jo.prototype).addEventListener = function (t, e, n, r) {
		Jo.S.addEventListener.call(this, t, e, n, r);
	}),
	(on.removeEventListener = function (t, e, n, r) {
		Jo.S.removeEventListener.call(this, t, e, n, r);
	}),
	(on.Oa = function () {
		(this.a.f = this.f), this.h && (this.a.C = !0);
		var t = this.a,
			e = this.l,
			n = this.b || void 0;
		ni(0), (t.fa = e), (t.W = n || {}), (t.H = t.T), (t.B = Wo(t, null, t.fa)), Ro(t);
	}),
	(on.close = function () {
		Oo(this.a);
	}),
	(on.Pa = function (t) {
		if ('string' == typeof t) {
			var e = {};
			(e.__data__ = t), Co(this.a, e);
		} else this.g ? (((e = {}).__data__ = kr(t)), Co(this.a, e)) : Co(this.a, t);
	}),
	(on.G = function () {
		(this.a.f = null), delete this.f, Oo(this.a), delete this.a, Jo.S.G.call(this);
	}),
	wn(Zo, li),
	wn(ts, pi),
	wn(es, Xo),
	(es.prototype.ta = function () {
		this.a.dispatchEvent('a');
	}),
	(es.prototype.sa = function (t) {
		this.a.dispatchEvent(new Zo(t));
	}),
	(es.prototype.ra = function (t) {
		this.a.dispatchEvent(new ts(t));
	}),
	(es.prototype.qa = function () {
		this.a.dispatchEvent('b');
	}),
	(Yo.prototype.createWebChannel = Yo.prototype.a),
	(Jo.prototype.send = Jo.prototype.Pa),
	(Jo.prototype.open = Jo.prototype.Oa),
	(Jo.prototype.close = Jo.prototype.close),
	(oi.NO_ERROR = 0),
	(oi.TIMEOUT = 8),
	(oi.HTTP_ERROR = 6),
	(si.COMPLETE = 'complete'),
	(ci.EventType = fi),
	(fi.OPEN = 'a'),
	(fi.CLOSE = 'b'),
	(fi.ERROR = 'c'),
	(fi.MESSAGE = 'd'),
	(Sr.prototype.listen = Sr.prototype.va),
	(go.prototype.listenOnce = go.prototype.wa),
	(go.prototype.getLastError = go.prototype.Qa),
	(go.prototype.getLastErrorCode = go.prototype.ua),
	(go.prototype.getStatus = go.prototype.X),
	(go.prototype.getResponseJson = go.prototype.Na),
	(go.prototype.getResponseText = go.prototype.$),
	(go.prototype.send = go.prototype.ba);
var ns = oi,
	rs = si,
	is = ci,
	os = go,
	ss = {
		OK: 'ok',
		CANCELLED: 'cancelled',
		UNKNOWN: 'unknown',
		INVALID_ARGUMENT: 'invalid-argument',
		DEADLINE_EXCEEDED: 'deadline-exceeded',
		NOT_FOUND: 'not-found',
		ALREADY_EXISTS: 'already-exists',
		PERMISSION_DENIED: 'permission-denied',
		UNAUTHENTICATED: 'unauthenticated',
		RESOURCE_EXHAUSTED: 'resource-exhausted',
		FAILED_PRECONDITION: 'failed-precondition',
		ABORTED: 'aborted',
		OUT_OF_RANGE: 'out-of-range',
		UNIMPLEMENTED: 'unimplemented',
		INTERNAL: 'internal',
		UNAVAILABLE: 'unavailable',
		DATA_LOSS: 'data-loss'
	},
	us = (function (t) {
		function e(e, n) {
			var r = this;
			return (
				((r = t.call(this, n) || this).code = e),
				(r.message = n),
				(r.name = 'FirebaseError'),
				(r.toString = function () {
					return r.name + ': [code=' + r.code + ']: ' + r.message;
				}),
				r
			);
		}
		return te(e, t), e;
	})(Error),
	as = new je('@firebase/firestore');
function cs() {
	return as.logLevel;
}
function hs(t) {
	for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
	if (as.logLevel <= ke.DEBUG) {
		var r = e.map(ps);
		as.debug.apply(as, oe(['Firestore (7.24.0): ' + t], r));
	}
}
function fs(t) {
	for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
	if (as.logLevel <= ke.ERROR) {
		var r = e.map(ps);
		as.error.apply(as, oe(['Firestore (7.24.0): ' + t], r));
	}
}
function ls(t) {
	for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
	if (as.logLevel <= ke.WARN) {
		var r = e.map(ps);
		as.warn.apply(as, oe(['Firestore (7.24.0): ' + t], r));
	}
}
function ps(t) {
	if ('string' == typeof t) return t;
	try {
		return (e = t), JSON.stringify(e);
	} catch (n) {
		return t;
	}
	/**
	 * @license
	 * Copyright 2020 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ds(t) {
	void 0 === t && (t = 'Unexpected state');
	var e = 'FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: ' + t;
	throw (fs(e), new Error(e));
}
function vs(t, e) {
	t || ds();
}
function ys(t, e) {
	return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gs(t) {
	var e = 0;
	for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
	return e;
}
function ms(t, e) {
	for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function bs(t) {
	for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
	return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ws = (function () {
		function t(t, e, n) {
			void 0 === e ? (e = 0) : e > t.length && ds(),
				void 0 === n ? (n = t.length - e) : n > t.length - e && ds(),
				(this.segments = t),
				(this.offset = e),
				(this.t = n);
		}
		return (
			Object.defineProperty(t.prototype, 'length', {
				get: function () {
					return this.t;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (e) {
				return 0 === t.i(this, e);
			}),
			(t.prototype.child = function (e) {
				var n = this.segments.slice(this.offset, this.limit());
				return (
					e instanceof t
						? e.forEach(function (t) {
								n.push(t);
						  })
						: n.push(e),
					this.o(n)
				);
			}),
			(t.prototype.limit = function () {
				return this.offset + this.length;
			}),
			(t.prototype.u = function (t) {
				return (t = void 0 === t ? 1 : t), this.o(this.segments, this.offset + t, this.length - t);
			}),
			(t.prototype.h = function () {
				return this.o(this.segments, this.offset, this.length - 1);
			}),
			(t.prototype.l = function () {
				return this.segments[this.offset];
			}),
			(t.prototype._ = function () {
				return this.get(this.length - 1);
			}),
			(t.prototype.get = function (t) {
				return this.segments[this.offset + t];
			}),
			(t.prototype.m = function () {
				return 0 === this.length;
			}),
			(t.prototype.T = function (t) {
				if (t.length < this.length) return !1;
				for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
				return !0;
			}),
			(t.prototype.I = function (t) {
				if (this.length + 1 !== t.length) return !1;
				for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
				return !0;
			}),
			(t.prototype.forEach = function (t) {
				for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
			}),
			(t.prototype.A = function () {
				return this.segments.slice(this.offset, this.limit());
			}),
			(t.i = function (t, e) {
				for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
					var i = t.get(r),
						o = e.get(r);
					if (i < o) return -1;
					if (i > o) return 1;
				}
				return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
			}),
			t
		);
	})(),
	Es = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.o = function (t, n, r) {
				return new e(t, n, r);
			}),
			(e.prototype.R = function () {
				return this.A().join('/');
			}),
			(e.prototype.toString = function () {
				return this.R();
			}),
			(e.g = function () {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				for (var r = [], i = 0, o = t; i < o.length; i++) {
					var s = o[i];
					if (s.indexOf('//') >= 0)
						throw new us(
							ss.INVALID_ARGUMENT,
							'Invalid segment (' + s + '). Paths must not contain // in them.'
						);
					r.push.apply(
						r,
						s.split('/').filter(function (t) {
							return t.length > 0;
						})
					);
				}
				return new e(r);
			}),
			(e.P = function () {
				return new e([]);
			}),
			e
		);
	})(ws),
	Is = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
	_s = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.o = function (t, n, r) {
				return new e(t, n, r);
			}),
			(e.V = function (t) {
				return Is.test(t);
			}),
			(e.prototype.R = function () {
				return this.A()
					.map(function (t) {
						return (
							(t = t.replace('\\', '\\\\').replace('`', '\\`')), e.V(t) || (t = '`' + t + '`'), t
						);
					})
					.join('.');
			}),
			(e.prototype.toString = function () {
				return this.R();
			}),
			(e.prototype.p = function () {
				return 1 === this.length && '__name__' === this.get(0);
			}),
			(e.v = function () {
				return new e(['__name__']);
			}),
			(e.S = function (t) {
				for (
					var n = [],
						r = '',
						i = 0,
						o = function () {
							if (0 === r.length)
								throw new us(
									ss.INVALID_ARGUMENT,
									'Invalid field path (' +
										t +
										"). Paths must not be empty, begin with '.', end with '.', or contain '..'"
								);
							n.push(r), (r = '');
						},
						s = !1;
					i < t.length;

				) {
					var u = t[i];
					if ('\\' === u) {
						if (i + 1 === t.length)
							throw new us(ss.INVALID_ARGUMENT, 'Path has trailing escape character: ' + t);
						var a = t[i + 1];
						if ('\\' !== a && '.' !== a && '`' !== a)
							throw new us(ss.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + t);
						(r += a), (i += 2);
					} else '`' === u ? ((s = !s), i++) : '.' !== u || s ? ((r += u), i++) : (o(), i++);
				}
				if ((o(), s)) throw new us(ss.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
				return new e(n);
			}),
			(e.P = function () {
				return new e([]);
			}),
			e
		);
	})(ws),
	Ts = (function () {
		function t(t) {
			this.path = t;
		}
		return (
			(t.D = function (e) {
				return new t(Es.g(e));
			}),
			(t.C = function (e) {
				return new t(Es.g(e).u(5));
			}),
			(t.prototype.N = function (t) {
				return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
			}),
			(t.prototype.isEqual = function (t) {
				return null !== t && 0 === Es.i(this.path, t.path);
			}),
			(t.prototype.toString = function () {
				return this.path.toString();
			}),
			(t.i = function (t, e) {
				return Es.i(t.path, e.path);
			}),
			(t.F = function (t) {
				return t.length % 2 == 0;
			}),
			(t.$ = function (e) {
				return new t(new Es(e.slice()));
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function As(t, e) {
	if (0 !== e.length)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				t +
				'() does not support arguments, but was called with ' +
				Gs(e.length, 'argument') +
				'.'
		);
}
function Ns(t, e, n) {
	if (e.length !== n)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				t +
				'() requires ' +
				Gs(n, 'argument') +
				', but was called with ' +
				Gs(e.length, 'argument') +
				'.'
		);
}
function Ss(t, e, n) {
	if (e.length < n)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				t +
				'() requires at least ' +
				Gs(n, 'argument') +
				', but was called with ' +
				Gs(e.length, 'argument') +
				'.'
		);
}
function Ds(t, e, n, r) {
	if (e.length < n || e.length > r)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				t +
				'() requires between ' +
				n +
				' and ' +
				r +
				' arguments, but was called with ' +
				Gs(e.length, 'argument') +
				'.'
		);
}
function ks(t, e, n, r) {
	Rs(t, e, Bs(n) + ' argument', r);
}
function xs(t, e, n, r) {
	void 0 !== r && ks(t, e, n, r);
}
function Os(t, e, n, r) {
	Rs(t, e, n + ' option', r);
}
function Ls(t, e, n, r) {
	void 0 !== r && Os(t, e, n, r);
}
function Ps(t, e, n, r, i) {
	void 0 !== r &&
		(function (t, e, n, r, i) {
			for (var o = [], s = 0, u = i; s < u.length; s++) {
				var a = u[s];
				if (a === r) return;
				o.push(js(a));
			}
			var c = js(r);
			throw new us(
				ss.INVALID_ARGUMENT,
				'Invalid value ' +
					c +
					' provided to function ' +
					t +
					'() for option "' +
					n +
					'". Acceptable values: ' +
					o.join(', ')
			);
		})(t, 0, n, r, i);
}
function Cs(t, e, n, r) {
	if (
		!e.some(function (t) {
			return t === r;
		})
	)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Invalid value ' +
				js(r) +
				' provided to function ' +
				t +
				'() for its ' +
				Bs(n) +
				' argument. Acceptable values: ' +
				e.join(', ')
		);
	return r;
}
function Rs(t, e, n, r) {
	if (
		!('object' === e
			? Us(r)
			: 'non-empty string' === e
			? 'string' == typeof r && '' !== r
			: typeof r === e)
	) {
		var i = js(r);
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' + t + '() requires its ' + n + ' to be of type ' + e + ', but it was: ' + i
		);
	}
}
function Us(t) {
	return (
		'object' == typeof t &&
		null !== t &&
		(Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
	);
}
function js(t) {
	if (void 0 === t) return 'undefined';
	if (null === t) return 'null';
	if ('string' == typeof t)
		return t.length > 20 && (t = t.substring(0, 20) + '...'), JSON.stringify(t);
	if ('number' == typeof t || 'boolean' == typeof t) return '' + t;
	if ('object' == typeof t) {
		if (t instanceof Array) return 'an array';
		var e = (function (t) {
			if (t.constructor) {
				var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
				if (e && e.length > 1) return e[1];
			}
			return null;
		})(t);
		return e ? 'a custom ' + e + ' object' : 'an object';
	}
	return 'function' == typeof t ? 'a function' : ds();
}
function Fs(t, e, n) {
	if (void 0 === n)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' + t + '() requires a valid ' + Bs(e) + ' argument, but it was undefined.'
		);
}
function Ms(t, e, n) {
	ms(e, function (e, r) {
		if (n.indexOf(e) < 0)
			throw new us(
				ss.INVALID_ARGUMENT,
				"Unknown option '" +
					e +
					"' passed to function " +
					t +
					'(). Available options: ' +
					n.join(', ')
			);
	});
}
function Vs(t, e, n, r) {
	var i = js(r);
	return new us(
		ss.INVALID_ARGUMENT,
		'Function ' + t + '() requires its ' + Bs(n) + ' argument to be a ' + e + ', but it was: ' + i
	);
}
function qs(t, e, n) {
	if (n <= 0)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				t +
				'() requires its ' +
				Bs(e) +
				' argument to be a positive number, but it was: ' +
				n +
				'.'
		);
}
function Bs(t) {
	switch (t) {
		case 1:
			return 'first';
		case 2:
			return 'second';
		case 3:
			return 'third';
		default:
			return t + 'th';
	}
}
function Gs(t, e) {
	return t + ' ' + e + (1 === t ? '' : 's');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zs(t) {
	var e = 'undefined' != typeof self && (self.crypto || self.msCrypto),
		n = new Uint8Array(t);
	if (e && 'function' == typeof e.getRandomValues) e.getRandomValues(n);
	else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
	return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Hs = (function () {
	function t() {}
	return (
		(t.k = function () {
			for (
				var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
					e = Math.floor(256 / t.length) * t.length,
					n = '';
				n.length < 20;

			)
				for (var r = zs(40), i = 0; i < r.length; ++i)
					n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
			return n;
		}),
		t
	);
})();
function $s(t, e) {
	return t < e ? -1 : t > e ? 1 : 0;
}
function Ks(t, e, n) {
	return (
		t.length === e.length &&
		t.every(function (t, r) {
			return n(t, e[r]);
		})
	);
}
function Ws(t) {
	return t + '\0';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Qs = (function () {
	function t(t) {
		this.M = t;
	}
	return (
		(t.fromBase64String = function (e) {
			return new t(atob(e));
		}),
		(t.fromUint8Array = function (e) {
			return new t(
				(function (t) {
					for (var e = '', n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
					return e;
				})(e)
			);
		}),
		(t.prototype.toBase64 = function () {
			return (t = this.M), btoa(t);
			var t;
		}),
		(t.prototype.toUint8Array = function () {
			return (function (t) {
				for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
				return e;
			})(this.M);
		}),
		(t.prototype.O = function () {
			return 2 * this.M.length;
		}),
		(t.prototype.L = function (t) {
			return $s(this.M, t.M);
		}),
		(t.prototype.isEqual = function (t) {
			return this.M === t.M;
		}),
		t
	);
})();
Qs.B = new Qs('');
var Xs = (function () {
	function t(t) {
		this.q = t;
	}
	return (
		(t.fromBase64String = function (e) {
			try {
				return new t(Qs.fromBase64String(e));
			} catch (n) {
				throw new us(ss.INVALID_ARGUMENT, 'Failed to construct Bytes from Base64 string: ' + n);
			}
		}),
		(t.fromUint8Array = function (e) {
			return new t(Qs.fromUint8Array(e));
		}),
		(t.prototype.toBase64 = function () {
			return this.q.toBase64();
		}),
		(t.prototype.toUint8Array = function () {
			return this.q.toUint8Array();
		}),
		(t.prototype.toString = function () {
			return 'Bytes(base64: ' + this.toBase64() + ')';
		}),
		(t.prototype.isEqual = function (t) {
			return this.q.isEqual(t.q);
		}),
		t
	);
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ys() {
	if ('undefined' == typeof Uint8Array)
		throw new us(ss.UNIMPLEMENTED, 'Uint8Arrays are not available in this environment.');
}
function Js() {
	if ('undefined' == typeof atob)
		throw new us(ss.UNIMPLEMENTED, 'Blobs are unavailable in Firestore in this environment.');
}
var Zs = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.fromBase64String = function (t) {
				Ns('Blob.fromBase64String', arguments, 1),
					ks('Blob.fromBase64String', 'string', 1, t),
					Js();
				try {
					return new e(Qs.fromBase64String(t));
				} catch (n) {
					throw new us(ss.INVALID_ARGUMENT, 'Failed to construct Blob from Base64 string: ' + n);
				}
			}),
			(e.fromUint8Array = function (t) {
				if ((Ns('Blob.fromUint8Array', arguments, 1), Ys(), !(t instanceof Uint8Array)))
					throw Vs('Blob.fromUint8Array', 'Uint8Array', 1, t);
				return new e(Qs.fromUint8Array(t));
			}),
			(e.prototype.toBase64 = function () {
				return Ns('Blob.toBase64', arguments, 0), Js(), t.prototype.toBase64.call(this);
			}),
			(e.prototype.toUint8Array = function () {
				return Ns('Blob.toUint8Array', arguments, 0), Ys(), t.prototype.toUint8Array.call(this);
			}),
			(e.prototype.toString = function () {
				return 'Blob(base64: ' + this.toBase64() + ')';
			}),
			e
		);
	})(Xs),
	tu = function (t, e, n, r, i, o) {
		(this.U = t),
			(this.persistenceKey = e),
			(this.host = n),
			(this.ssl = r),
			(this.forceLongPolling = i),
			(this.W = o);
	},
	eu = (function () {
		function t(t, e) {
			(this.projectId = t), (this.database = e || '(default)');
		}
		return (
			Object.defineProperty(t.prototype, 'j', {
				get: function () {
					return '(default)' === this.database;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (e) {
				return e instanceof t && e.projectId === this.projectId && e.database === this.database;
			}),
			(t.prototype.L = function (t) {
				return $s(this.projectId, t.projectId) || $s(this.database, t.database);
			}),
			t
		);
	})(),
	nu = (function () {
		function t(t, e) {
			(this.K = t), (this.G = e), (this.H = {});
		}
		return (
			(t.prototype.get = function (t) {
				var e = this.K(t),
					n = this.H[e];
				if (void 0 !== n)
					for (var r = 0, i = n; r < i.length; r++) {
						var o = i[r],
							s = o[0],
							u = o[1];
						if (this.G(s, t)) return u;
					}
			}),
			(t.prototype.has = function (t) {
				return void 0 !== this.get(t);
			}),
			(t.prototype.set = function (t, e) {
				var n = this.K(t),
					r = this.H[n];
				if (void 0 !== r) {
					for (var i = 0; i < r.length; i++) if (this.G(r[i][0], t)) return void (r[i] = [t, e]);
					r.push([t, e]);
				} else this.H[n] = [[t, e]];
			}),
			(t.prototype.delete = function (t) {
				var e = this.K(t),
					n = this.H[e];
				if (void 0 === n) return !1;
				for (var r = 0; r < n.length; r++)
					if (this.G(n[r][0], t)) return 1 === n.length ? delete this.H[e] : n.splice(r, 1), !0;
				return !1;
			}),
			(t.prototype.forEach = function (t) {
				ms(this.H, function (e, n) {
					for (var r = 0, i = n; r < i.length; r++) {
						var o = i[r],
							s = o[0],
							u = o[1];
						t(s, u);
					}
				});
			}),
			(t.prototype.m = function () {
				return bs(this.H);
			}),
			t
		);
	})(),
	ru = (function () {
		function t(t, e) {
			if (((this.seconds = t), (this.nanoseconds = e), e < 0))
				throw new us(ss.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + e);
			if (e >= 1e9) throw new us(ss.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + e);
			if (t < -62135596800)
				throw new us(ss.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
			if (t >= 253402300800)
				throw new us(ss.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
		}
		return (
			(t.now = function () {
				return t.fromMillis(Date.now());
			}),
			(t.fromDate = function (e) {
				return t.fromMillis(e.getTime());
			}),
			(t.fromMillis = function (e) {
				var n = Math.floor(e / 1e3);
				return new t(n, 1e6 * (e - 1e3 * n));
			}),
			(t.prototype.toDate = function () {
				return new Date(this.toMillis());
			}),
			(t.prototype.toMillis = function () {
				return 1e3 * this.seconds + this.nanoseconds / 1e6;
			}),
			(t.prototype.Y = function (t) {
				return this.seconds === t.seconds
					? $s(this.nanoseconds, t.nanoseconds)
					: $s(this.seconds, t.seconds);
			}),
			(t.prototype.isEqual = function (t) {
				return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
			}),
			(t.prototype.toString = function () {
				return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
			}),
			(t.prototype.toJSON = function () {
				return { seconds: this.seconds, nanoseconds: this.nanoseconds };
			}),
			(t.prototype.valueOf = function () {
				var t = this.seconds - -62135596800;
				return String(t).padStart(12, '0') + '.' + String(this.nanoseconds).padStart(9, '0');
			}),
			t
		);
	})(),
	iu = (function () {
		function t(t) {
			this.timestamp = t;
		}
		return (
			(t.J = function (e) {
				return new t(e);
			}),
			(t.min = function () {
				return new t(new ru(0, 0));
			}),
			(t.prototype.L = function (t) {
				return this.timestamp.Y(t.timestamp);
			}),
			(t.prototype.isEqual = function (t) {
				return this.timestamp.isEqual(t.timestamp);
			}),
			(t.prototype.X = function () {
				return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
			}),
			(t.prototype.toString = function () {
				return 'SnapshotVersion(' + this.timestamp.toString() + ')';
			}),
			(t.prototype.Z = function () {
				return this.timestamp;
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ou(t) {
	return null == t;
}
function su(t) {
	return 0 === t && 1 / t == -1 / 0;
}
function uu(t) {
	return (
		'number' == typeof t &&
		Number.isInteger(t) &&
		!su(t) &&
		t <= Number.MAX_SAFE_INTEGER &&
		t >= Number.MIN_SAFE_INTEGER
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var au = function (t, e, n, r, i, o, s) {
	void 0 === e && (e = null),
		void 0 === n && (n = []),
		void 0 === r && (r = []),
		void 0 === i && (i = null),
		void 0 === o && (o = null),
		void 0 === s && (s = null),
		(this.path = t),
		(this.collectionGroup = e),
		(this.orderBy = n),
		(this.filters = r),
		(this.limit = i),
		(this.startAt = o),
		(this.endAt = s),
		(this.tt = null);
};
function cu(t, e, n, r, i, o, s) {
	return (
		void 0 === e && (e = null),
		void 0 === n && (n = []),
		void 0 === r && (r = []),
		void 0 === i && (i = null),
		void 0 === o && (o = null),
		void 0 === s && (s = null),
		new au(t, e, n, r, i, o, s)
	);
}
function hu(t) {
	var e = ys(t);
	if (null === e.tt) {
		var n = e.path.R();
		null !== e.collectionGroup && (n += '|cg:' + e.collectionGroup),
			(n += '|f:'),
			(n += e.filters
				.map(function (t) {
					return (e = t).field.R() + e.op.toString() + ea(e.value);
					var e;
				})
				.join(',')),
			(n += '|ob:'),
			(n += e.orderBy
				.map(function (t) {
					return (e = t).field.R() + e.dir;
					var e;
				})
				.join(',')),
			ou(e.limit) || ((n += '|l:'), (n += e.limit)),
			e.startAt && ((n += '|lb:'), (n += oh(e.startAt))),
			e.endAt && ((n += '|ub:'), (n += oh(e.endAt))),
			(e.tt = n);
	}
	return e.tt;
}
function fu(t, e) {
	if (t.limit !== e.limit) return !1;
	if (t.orderBy.length !== e.orderBy.length) return !1;
	for (var n = 0; n < t.orderBy.length; n++) if (!hh(t.orderBy[n], e.orderBy[n])) return !1;
	if (t.filters.length !== e.filters.length) return !1;
	for (var r = 0; r < t.filters.length; r++)
		if (
			((i = t.filters[r]),
			(o = e.filters[r]),
			i.op !== o.op || !i.field.isEqual(o.field) || !Yu(i.value, o.value))
		)
			return !1;
	var i, o;
	return (
		t.collectionGroup === e.collectionGroup &&
		!!t.path.isEqual(e.path) &&
		!!uh(t.startAt, e.startAt) &&
		uh(t.endAt, e.endAt)
	);
}
function lu(t) {
	return Ts.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var pu,
	du,
	vu = (function () {
		function t(t, e, n, r, i, o, s) {
			void 0 === i && (i = iu.min()),
				void 0 === o && (o = iu.min()),
				void 0 === s && (s = Qs.B),
				(this.target = t),
				(this.targetId = e),
				(this.et = n),
				(this.sequenceNumber = r),
				(this.nt = i),
				(this.lastLimboFreeSnapshotVersion = o),
				(this.resumeToken = s);
		}
		return (
			(t.prototype.st = function (e) {
				return new t(
					this.target,
					this.targetId,
					this.et,
					e,
					this.nt,
					this.lastLimboFreeSnapshotVersion,
					this.resumeToken
				);
			}),
			(t.prototype.it = function (e, n) {
				return new t(
					this.target,
					this.targetId,
					this.et,
					this.sequenceNumber,
					n,
					this.lastLimboFreeSnapshotVersion,
					e
				);
			}),
			(t.prototype.rt = function (e) {
				return new t(
					this.target,
					this.targetId,
					this.et,
					this.sequenceNumber,
					this.nt,
					e,
					this.resumeToken
				);
			}),
			t
		);
	})(),
	yu = function (t) {
		this.count = t;
	};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gu(t) {
	switch (t) {
		case ss.OK:
			return ds();
		case ss.CANCELLED:
		case ss.UNKNOWN:
		case ss.DEADLINE_EXCEEDED:
		case ss.RESOURCE_EXHAUSTED:
		case ss.INTERNAL:
		case ss.UNAVAILABLE:
		case ss.UNAUTHENTICATED:
			return !1;
		case ss.INVALID_ARGUMENT:
		case ss.NOT_FOUND:
		case ss.ALREADY_EXISTS:
		case ss.PERMISSION_DENIED:
		case ss.FAILED_PRECONDITION:
		case ss.ABORTED:
		case ss.OUT_OF_RANGE:
		case ss.UNIMPLEMENTED:
		case ss.DATA_LOSS:
			return !0;
		default:
			return ds();
	}
}
function mu(t) {
	if (void 0 === t) return fs('GRPC error has no .code'), ss.UNKNOWN;
	switch (t) {
		case pu.OK:
			return ss.OK;
		case pu.CANCELLED:
			return ss.CANCELLED;
		case pu.UNKNOWN:
			return ss.UNKNOWN;
		case pu.DEADLINE_EXCEEDED:
			return ss.DEADLINE_EXCEEDED;
		case pu.RESOURCE_EXHAUSTED:
			return ss.RESOURCE_EXHAUSTED;
		case pu.INTERNAL:
			return ss.INTERNAL;
		case pu.UNAVAILABLE:
			return ss.UNAVAILABLE;
		case pu.UNAUTHENTICATED:
			return ss.UNAUTHENTICATED;
		case pu.INVALID_ARGUMENT:
			return ss.INVALID_ARGUMENT;
		case pu.NOT_FOUND:
			return ss.NOT_FOUND;
		case pu.ALREADY_EXISTS:
			return ss.ALREADY_EXISTS;
		case pu.PERMISSION_DENIED:
			return ss.PERMISSION_DENIED;
		case pu.FAILED_PRECONDITION:
			return ss.FAILED_PRECONDITION;
		case pu.ABORTED:
			return ss.ABORTED;
		case pu.OUT_OF_RANGE:
			return ss.OUT_OF_RANGE;
		case pu.UNIMPLEMENTED:
			return ss.UNIMPLEMENTED;
		case pu.DATA_LOSS:
			return ss.DATA_LOSS;
		default:
			return ds();
	}
}
((du = pu || (pu = {}))[(du.OK = 0)] = 'OK'),
	(du[(du.CANCELLED = 1)] = 'CANCELLED'),
	(du[(du.UNKNOWN = 2)] = 'UNKNOWN'),
	(du[(du.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
	(du[(du.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
	(du[(du.NOT_FOUND = 5)] = 'NOT_FOUND'),
	(du[(du.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
	(du[(du.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
	(du[(du.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
	(du[(du.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
	(du[(du.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
	(du[(du.ABORTED = 10)] = 'ABORTED'),
	(du[(du.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
	(du[(du.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
	(du[(du.INTERNAL = 13)] = 'INTERNAL'),
	(du[(du.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
	(du[(du.DATA_LOSS = 15)] = 'DATA_LOSS');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bu = (function () {
		function t(t, e) {
			(this.i = t), (this.root = e || Eu.EMPTY);
		}
		return (
			(t.prototype.ot = function (e, n) {
				return new t(this.i, this.root.ot(e, n, this.i).copy(null, null, Eu.at, null, null));
			}),
			(t.prototype.remove = function (e) {
				return new t(this.i, this.root.remove(e, this.i).copy(null, null, Eu.at, null, null));
			}),
			(t.prototype.get = function (t) {
				for (var e = this.root; !e.m(); ) {
					var n = this.i(t, e.key);
					if (0 === n) return e.value;
					n < 0 ? (e = e.left) : n > 0 && (e = e.right);
				}
				return null;
			}),
			(t.prototype.indexOf = function (t) {
				for (var e = 0, n = this.root; !n.m(); ) {
					var r = this.i(t, n.key);
					if (0 === r) return e + n.left.size;
					r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right));
				}
				return -1;
			}),
			(t.prototype.m = function () {
				return this.root.m();
			}),
			Object.defineProperty(t.prototype, 'size', {
				get: function () {
					return this.root.size;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.ct = function () {
				return this.root.ct();
			}),
			(t.prototype.ut = function () {
				return this.root.ut();
			}),
			(t.prototype.ht = function (t) {
				return this.root.ht(t);
			}),
			(t.prototype.forEach = function (t) {
				this.ht(function (e, n) {
					return t(e, n), !1;
				});
			}),
			(t.prototype.toString = function () {
				var t = [];
				return (
					this.ht(function (e, n) {
						return t.push(e + ':' + n), !1;
					}),
					'{' + t.join(', ') + '}'
				);
			}),
			(t.prototype.lt = function (t) {
				return this.root.lt(t);
			}),
			(t.prototype._t = function () {
				return new wu(this.root, null, this.i, !1);
			}),
			(t.prototype.ft = function (t) {
				return new wu(this.root, t, this.i, !1);
			}),
			(t.prototype.dt = function () {
				return new wu(this.root, null, this.i, !0);
			}),
			(t.prototype.wt = function (t) {
				return new wu(this.root, t, this.i, !0);
			}),
			t
		);
	})(),
	wu = (function () {
		function t(t, e, n, r) {
			(this.Tt = r), (this.Et = []);
			for (var i = 1; !t.m(); )
				if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0)) t = this.Tt ? t.left : t.right;
				else {
					if (0 === i) {
						this.Et.push(t);
						break;
					}
					this.Et.push(t), (t = this.Tt ? t.right : t.left);
				}
		}
		return (
			(t.prototype.It = function () {
				var t = this.Et.pop(),
					e = { key: t.key, value: t.value };
				if (this.Tt) for (t = t.left; !t.m(); ) this.Et.push(t), (t = t.right);
				else for (t = t.right; !t.m(); ) this.Et.push(t), (t = t.left);
				return e;
			}),
			(t.prototype.At = function () {
				return this.Et.length > 0;
			}),
			(t.prototype.Rt = function () {
				if (0 === this.Et.length) return null;
				var t = this.Et[this.Et.length - 1];
				return { key: t.key, value: t.value };
			}),
			t
		);
	})(),
	Eu = (function () {
		function t(e, n, r, i, o) {
			(this.key = e),
				(this.value = n),
				(this.color = null != r ? r : t.RED),
				(this.left = null != i ? i : t.EMPTY),
				(this.right = null != o ? o : t.EMPTY),
				(this.size = this.left.size + 1 + this.right.size);
		}
		return (
			(t.prototype.copy = function (e, n, r, i, o) {
				return new t(
					null != e ? e : this.key,
					null != n ? n : this.value,
					null != r ? r : this.color,
					null != i ? i : this.left,
					null != o ? o : this.right
				);
			}),
			(t.prototype.m = function () {
				return !1;
			}),
			(t.prototype.ht = function (t) {
				return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t);
			}),
			(t.prototype.lt = function (t) {
				return this.right.lt(t) || t(this.key, this.value) || this.left.lt(t);
			}),
			(t.prototype.min = function () {
				return this.left.m() ? this : this.left.min();
			}),
			(t.prototype.ct = function () {
				return this.min().key;
			}),
			(t.prototype.ut = function () {
				return this.right.m() ? this.key : this.right.ut();
			}),
			(t.prototype.ot = function (t, e, n) {
				var r = this,
					i = n(t, r.key);
				return (r =
					i < 0
						? r.copy(null, null, null, r.left.ot(t, e, n), null)
						: 0 === i
						? r.copy(null, e, null, null, null)
						: r.copy(null, null, null, null, r.right.ot(t, e, n))).gt();
			}),
			(t.prototype.Pt = function () {
				if (this.left.m()) return t.EMPTY;
				var e = this;
				return (
					e.left.yt() || e.left.left.yt() || (e = e.Vt()),
					(e = e.copy(null, null, null, e.left.Pt(), null)).gt()
				);
			}),
			(t.prototype.remove = function (e, n) {
				var r,
					i = this;
				if (n(e, i.key) < 0)
					i.left.m() || i.left.yt() || i.left.left.yt() || (i = i.Vt()),
						(i = i.copy(null, null, null, i.left.remove(e, n), null));
				else {
					if (
						(i.left.yt() && (i = i.bt()),
						i.right.m() || i.right.yt() || i.right.left.yt() || (i = i.vt()),
						0 === n(e, i.key))
					) {
						if (i.right.m()) return t.EMPTY;
						(r = i.right.min()), (i = i.copy(r.key, r.value, null, null, i.right.Pt()));
					}
					i = i.copy(null, null, null, null, i.right.remove(e, n));
				}
				return i.gt();
			}),
			(t.prototype.yt = function () {
				return this.color;
			}),
			(t.prototype.gt = function () {
				var t = this;
				return (
					t.right.yt() && !t.left.yt() && (t = t.St()),
					t.left.yt() && t.left.left.yt() && (t = t.bt()),
					t.left.yt() && t.right.yt() && (t = t.Dt()),
					t
				);
			}),
			(t.prototype.Vt = function () {
				var t = this.Dt();
				return (
					t.right.left.yt() &&
						(t = (t = (t = t.copy(null, null, null, null, t.right.bt())).St()).Dt()),
					t
				);
			}),
			(t.prototype.vt = function () {
				var t = this.Dt();
				return t.left.left.yt() && (t = (t = t.bt()).Dt()), t;
			}),
			(t.prototype.St = function () {
				var e = this.copy(null, null, t.RED, null, this.right.left);
				return this.right.copy(null, null, this.color, e, null);
			}),
			(t.prototype.bt = function () {
				var e = this.copy(null, null, t.RED, this.left.right, null);
				return this.left.copy(null, null, this.color, null, e);
			}),
			(t.prototype.Dt = function () {
				var t = this.left.copy(null, null, !this.left.color, null, null),
					e = this.right.copy(null, null, !this.right.color, null, null);
				return this.copy(null, null, !this.color, t, e);
			}),
			(t.prototype.Ct = function () {
				var t = this.Nt();
				return Math.pow(2, t) <= this.size + 1;
			}),
			(t.prototype.Nt = function () {
				if (this.yt() && this.left.yt()) throw ds();
				if (this.right.yt()) throw ds();
				var t = this.left.Nt();
				if (t !== this.right.Nt()) throw ds();
				return t + (this.yt() ? 0 : 1);
			}),
			t
		);
	})();
(Eu.EMPTY = null),
	(Eu.RED = !0),
	(Eu.at = !1),
	(Eu.EMPTY = new ((function () {
		function t() {
			this.size = 0;
		}
		return (
			Object.defineProperty(t.prototype, 'key', {
				get: function () {
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'value', {
				get: function () {
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'color', {
				get: function () {
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'left', {
				get: function () {
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'right', {
				get: function () {
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.copy = function (t, e, n, r, i) {
				return this;
			}),
			(t.prototype.ot = function (t, e, n) {
				return new Eu(t, e);
			}),
			(t.prototype.remove = function (t, e) {
				return this;
			}),
			(t.prototype.m = function () {
				return !0;
			}),
			(t.prototype.ht = function (t) {
				return !1;
			}),
			(t.prototype.lt = function (t) {
				return !1;
			}),
			(t.prototype.ct = function () {
				return null;
			}),
			(t.prototype.ut = function () {
				return null;
			}),
			(t.prototype.yt = function () {
				return !1;
			}),
			(t.prototype.Ct = function () {
				return !0;
			}),
			(t.prototype.Nt = function () {
				return 0;
			}),
			t
		);
	})())());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Iu = (function () {
		function t(t) {
			(this.i = t), (this.data = new bu(this.i));
		}
		return (
			(t.prototype.has = function (t) {
				return null !== this.data.get(t);
			}),
			(t.prototype.first = function () {
				return this.data.ct();
			}),
			(t.prototype.last = function () {
				return this.data.ut();
			}),
			Object.defineProperty(t.prototype, 'size', {
				get: function () {
					return this.data.size;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.indexOf = function (t) {
				return this.data.indexOf(t);
			}),
			(t.prototype.forEach = function (t) {
				this.data.ht(function (e, n) {
					return t(e), !1;
				});
			}),
			(t.prototype.Ft = function (t, e) {
				for (var n = this.data.ft(t[0]); n.At(); ) {
					var r = n.It();
					if (this.i(r.key, t[1]) >= 0) return;
					e(r.key);
				}
			}),
			(t.prototype.xt = function (t, e) {
				var n;
				for (n = void 0 !== e ? this.data.ft(e) : this.data._t(); n.At(); )
					if (!t(n.It().key)) return;
			}),
			(t.prototype.$t = function (t) {
				var e = this.data.ft(t);
				return e.At() ? e.It().key : null;
			}),
			(t.prototype._t = function () {
				return new _u(this.data._t());
			}),
			(t.prototype.ft = function (t) {
				return new _u(this.data.ft(t));
			}),
			(t.prototype.add = function (t) {
				return this.copy(this.data.remove(t).ot(t, !0));
			}),
			(t.prototype.delete = function (t) {
				return this.has(t) ? this.copy(this.data.remove(t)) : this;
			}),
			(t.prototype.m = function () {
				return this.data.m();
			}),
			(t.prototype.kt = function (t) {
				var e = this;
				return (
					e.size < t.size && ((e = t), (t = this)),
					t.forEach(function (t) {
						e = e.add(t);
					}),
					e
				);
			}),
			(t.prototype.isEqual = function (e) {
				if (!(e instanceof t)) return !1;
				if (this.size !== e.size) return !1;
				for (var n = this.data._t(), r = e.data._t(); n.At(); ) {
					var i = n.It().key,
						o = r.It().key;
					if (0 !== this.i(i, o)) return !1;
				}
				return !0;
			}),
			(t.prototype.A = function () {
				var t = [];
				return (
					this.forEach(function (e) {
						t.push(e);
					}),
					t
				);
			}),
			(t.prototype.toString = function () {
				var t = [];
				return (
					this.forEach(function (e) {
						return t.push(e);
					}),
					'SortedSet(' + t.toString() + ')'
				);
			}),
			(t.prototype.copy = function (e) {
				var n = new t(this.i);
				return (n.data = e), n;
			}),
			t
		);
	})(),
	_u = (function () {
		function t(t) {
			this.Mt = t;
		}
		return (
			(t.prototype.It = function () {
				return this.Mt.It().key;
			}),
			(t.prototype.At = function () {
				return this.Mt.At();
			}),
			t
		);
	})(),
	Tu = new bu(Ts.i);
function Au() {
	return Tu;
}
function Nu() {
	return Au();
}
var Su = new bu(Ts.i);
function Du() {
	return Su;
}
var ku = new bu(Ts.i),
	xu = new Iu(Ts.i);
function Ou() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	for (var n = xu, r = 0, i = t; r < i.length; r++) {
		var o = i[r];
		n = n.add(o);
	}
	return n;
}
var Lu = new Iu($s);
function Pu() {
	return Lu;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Cu = (function () {
		function t(t) {
			(this.i = t
				? function (e, n) {
						return t(e, n) || Ts.i(e.key, n.key);
				  }
				: function (t, e) {
						return Ts.i(t.key, e.key);
				  }),
				(this.Ot = Du()),
				(this.Lt = new bu(this.i));
		}
		return (
			(t.Bt = function (e) {
				return new t(e.i);
			}),
			(t.prototype.has = function (t) {
				return null != this.Ot.get(t);
			}),
			(t.prototype.get = function (t) {
				return this.Ot.get(t);
			}),
			(t.prototype.first = function () {
				return this.Lt.ct();
			}),
			(t.prototype.last = function () {
				return this.Lt.ut();
			}),
			(t.prototype.m = function () {
				return this.Lt.m();
			}),
			(t.prototype.indexOf = function (t) {
				var e = this.Ot.get(t);
				return e ? this.Lt.indexOf(e) : -1;
			}),
			Object.defineProperty(t.prototype, 'size', {
				get: function () {
					return this.Lt.size;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.forEach = function (t) {
				this.Lt.ht(function (e, n) {
					return t(e), !1;
				});
			}),
			(t.prototype.add = function (t) {
				var e = this.delete(t.key);
				return e.copy(e.Ot.ot(t.key, t), e.Lt.ot(t, null));
			}),
			(t.prototype.delete = function (t) {
				var e = this.get(t);
				return e ? this.copy(this.Ot.remove(t), this.Lt.remove(e)) : this;
			}),
			(t.prototype.isEqual = function (e) {
				if (!(e instanceof t)) return !1;
				if (this.size !== e.size) return !1;
				for (var n = this.Lt._t(), r = e.Lt._t(); n.At(); ) {
					var i = n.It().key,
						o = r.It().key;
					if (!i.isEqual(o)) return !1;
				}
				return !0;
			}),
			(t.prototype.toString = function () {
				var t = [];
				return (
					this.forEach(function (e) {
						t.push(e.toString());
					}),
					0 === t.length ? 'DocumentSet ()' : 'DocumentSet (\n  ' + t.join('  \n') + '\n)'
				);
			}),
			(t.prototype.copy = function (e, n) {
				var r = new t();
				return (r.i = this.i), (r.Ot = e), (r.Lt = n), r;
			}),
			t
		);
	})(),
	Ru = (function () {
		function t() {
			this.qt = new bu(Ts.i);
		}
		return (
			(t.prototype.track = function (t) {
				var e = t.doc.key,
					n = this.qt.get(e);
				n
					? 0 !== t.type && 3 === n.type
						? (this.qt = this.qt.ot(e, t))
						: 3 === t.type && 1 !== n.type
						? (this.qt = this.qt.ot(e, { type: n.type, doc: t.doc }))
						: 2 === t.type && 2 === n.type
						? (this.qt = this.qt.ot(e, { type: 2, doc: t.doc }))
						: 2 === t.type && 0 === n.type
						? (this.qt = this.qt.ot(e, { type: 0, doc: t.doc }))
						: 1 === t.type && 0 === n.type
						? (this.qt = this.qt.remove(e))
						: 1 === t.type && 2 === n.type
						? (this.qt = this.qt.ot(e, { type: 1, doc: n.doc }))
						: 0 === t.type && 1 === n.type
						? (this.qt = this.qt.ot(e, { type: 2, doc: t.doc }))
						: ds()
					: (this.qt = this.qt.ot(e, t));
			}),
			(t.prototype.Ut = function () {
				var t = [];
				return (
					this.qt.ht(function (e, n) {
						t.push(n);
					}),
					t
				);
			}),
			t
		);
	})(),
	Uu = (function () {
		function t(t, e, n, r, i, o, s, u) {
			(this.query = t),
				(this.docs = e),
				(this.Qt = n),
				(this.docChanges = r),
				(this.Wt = i),
				(this.fromCache = o),
				(this.jt = s),
				(this.Kt = u);
		}
		return (
			(t.Gt = function (e, n, r, i) {
				var o = [];
				return (
					n.forEach(function (t) {
						o.push({ type: 0, doc: t });
					}),
					new t(e, n, Cu.Bt(n), o, r, i, !0, !1)
				);
			}),
			Object.defineProperty(t.prototype, 'hasPendingWrites', {
				get: function () {
					return !this.Wt.m();
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (t) {
				if (
					!(
						this.fromCache === t.fromCache &&
						this.jt === t.jt &&
						this.Wt.isEqual(t.Wt) &&
						zc(this.query, t.query) &&
						this.docs.isEqual(t.docs) &&
						this.Qt.isEqual(t.Qt)
					)
				)
					return !1;
				var e = this.docChanges,
					n = t.docChanges;
				if (e.length !== n.length) return !1;
				for (var r = 0; r < e.length; r++)
					if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
				return !0;
			}),
			t
		);
	})(),
	ju = (function () {
		function t(t, e, n, r, i) {
			(this.nt = t), (this.zt = e), (this.Ht = n), (this.Yt = r), (this.Jt = i);
		}
		return (
			(t.Xt = function (e, n) {
				var r = new Map();
				return r.set(e, Fu.Zt(e, n)), new t(iu.min(), r, Pu(), Au(), Ou());
			}),
			t
		);
	})(),
	Fu = (function () {
		function t(t, e, n, r, i) {
			(this.resumeToken = t), (this.te = e), (this.ee = n), (this.ne = r), (this.se = i);
		}
		return (
			(t.Zt = function (e, n) {
				return new t(Qs.B, n, Ou(), Ou(), Ou());
			}),
			t
		);
	})(),
	Mu = function (t, e, n, r) {
		(this.ie = t), (this.removedTargetIds = e), (this.key = n), (this.re = r);
	},
	Vu = function (t, e) {
		(this.targetId = t), (this.oe = e);
	},
	qu = function (t, e, n, r) {
		void 0 === n && (n = Qs.B),
			void 0 === r && (r = null),
			(this.state = t),
			(this.targetIds = e),
			(this.resumeToken = n),
			(this.cause = r);
	},
	Bu = (function () {
		function t() {
			(this.ae = 0), (this.ce = Hu()), (this.ue = Qs.B), (this.he = !1), (this.le = !0);
		}
		return (
			Object.defineProperty(t.prototype, 'te', {
				get: function () {
					return this.he;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'resumeToken', {
				get: function () {
					return this.ue;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, '_e', {
				get: function () {
					return 0 !== this.ae;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'fe', {
				get: function () {
					return this.le;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.de = function (t) {
				t.O() > 0 && ((this.le = !0), (this.ue = t));
			}),
			(t.prototype.we = function () {
				var t = Ou(),
					e = Ou(),
					n = Ou();
				return (
					this.ce.forEach(function (r, i) {
						switch (i) {
							case 0:
								t = t.add(r);
								break;
							case 2:
								e = e.add(r);
								break;
							case 1:
								n = n.add(r);
								break;
							default:
								ds();
						}
					}),
					new Fu(this.ue, this.he, t, e, n)
				);
			}),
			(t.prototype.me = function () {
				(this.le = !1), (this.ce = Hu());
			}),
			(t.prototype.Te = function (t, e) {
				(this.le = !0), (this.ce = this.ce.ot(t, e));
			}),
			(t.prototype.Ee = function (t) {
				(this.le = !0), (this.ce = this.ce.remove(t));
			}),
			(t.prototype.Ie = function () {
				this.ae += 1;
			}),
			(t.prototype.Ae = function () {
				this.ae -= 1;
			}),
			(t.prototype.Re = function () {
				(this.le = !0), (this.he = !0);
			}),
			t
		);
	})(),
	Gu = (function () {
		function t(t) {
			(this.ge = t),
				(this.Pe = new Map()),
				(this.ye = Au()),
				(this.Ve = zu()),
				(this.pe = new Iu($s));
		}
		return (
			(t.prototype.be = function (t) {
				for (var e = 0, n = t.ie; e < n.length; e++) {
					var r = n[e];
					t.re instanceof Dc ? this.ve(r, t.re) : t.re instanceof kc && this.Se(r, t.key, t.re);
				}
				for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
					var s = o[i];
					this.Se(s, t.key, t.re);
				}
			}),
			(t.prototype.De = function (t) {
				var e = this;
				this.Ce(t, function (n) {
					var r = e.Ne(n);
					switch (t.state) {
						case 0:
							e.Fe(n) && r.de(t.resumeToken);
							break;
						case 1:
							r.Ae(), r._e || r.me(), r.de(t.resumeToken);
							break;
						case 2:
							r.Ae(), r._e || e.removeTarget(n);
							break;
						case 3:
							e.Fe(n) && (r.Re(), r.de(t.resumeToken));
							break;
						case 4:
							e.Fe(n) && (e.xe(n), r.de(t.resumeToken));
							break;
						default:
							ds();
					}
				});
			}),
			(t.prototype.Ce = function (t, e) {
				var n = this;
				t.targetIds.length > 0
					? t.targetIds.forEach(e)
					: this.Pe.forEach(function (t, r) {
							n.Fe(r) && e(r);
					  });
			}),
			(t.prototype.$e = function (t) {
				var e = t.targetId,
					n = t.oe.count,
					r = this.ke(e);
				if (r) {
					var i = r.target;
					if (lu(i))
						if (0 === n) {
							var o = new Ts(i.path);
							this.Se(e, o, new kc(o, iu.min()));
						} else vs(1 === n);
					else this.Me(e) !== n && (this.xe(e), (this.pe = this.pe.add(e)));
				}
			}),
			(t.prototype.Oe = function (t) {
				var e = this,
					n = new Map();
				this.Pe.forEach(function (r, i) {
					var o = e.ke(i);
					if (o) {
						if (r.te && lu(o.target)) {
							var s = new Ts(o.target.path);
							null !== e.ye.get(s) || e.Le(i, s) || e.Se(i, s, new kc(s, t));
						}
						r.fe && (n.set(i, r.we()), r.me());
					}
				});
				var r = Ou();
				this.Ve.forEach(function (t, n) {
					var i = !0;
					n.xt(function (t) {
						var n = e.ke(t);
						return !n || 2 === n.et || ((i = !1), !1);
					}),
						i && (r = r.add(t));
				});
				var i = new ju(t, n, this.pe, this.ye, r);
				return (this.ye = Au()), (this.Ve = zu()), (this.pe = new Iu($s)), i;
			}),
			(t.prototype.ve = function (t, e) {
				if (this.Fe(t)) {
					var n = this.Le(t, e.key) ? 2 : 0;
					this.Ne(t).Te(e.key, n),
						(this.ye = this.ye.ot(e.key, e)),
						(this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t)));
				}
			}),
			(t.prototype.Se = function (t, e, n) {
				if (this.Fe(t)) {
					var r = this.Ne(t);
					this.Le(t, e) ? r.Te(e, 1) : r.Ee(e),
						(this.Ve = this.Ve.ot(e, this.Be(e).delete(t))),
						n && (this.ye = this.ye.ot(e, n));
				}
			}),
			(t.prototype.removeTarget = function (t) {
				this.Pe.delete(t);
			}),
			(t.prototype.Me = function (t) {
				var e = this.Ne(t).we();
				return this.ge.qe(t).size + e.ee.size - e.se.size;
			}),
			(t.prototype.Ie = function (t) {
				this.Ne(t).Ie();
			}),
			(t.prototype.Ne = function (t) {
				var e = this.Pe.get(t);
				return e || ((e = new Bu()), this.Pe.set(t, e)), e;
			}),
			(t.prototype.Be = function (t) {
				var e = this.Ve.get(t);
				return e || ((e = new Iu($s)), (this.Ve = this.Ve.ot(t, e))), e;
			}),
			(t.prototype.Fe = function (t) {
				var e = null !== this.ke(t);
				return e || hs('WatchChangeAggregator', 'Detected inactive target', t), e;
			}),
			(t.prototype.ke = function (t) {
				var e = this.Pe.get(t);
				return e && e._e ? null : this.ge.Ue(t);
			}),
			(t.prototype.xe = function (t) {
				var e = this;
				this.Pe.set(t, new Bu()),
					this.ge.qe(t).forEach(function (n) {
						e.Se(t, n, null);
					});
			}),
			(t.prototype.Le = function (t, e) {
				return this.ge.qe(t).has(e);
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zu() {
	return new bu(Ts.i);
}
function Hu() {
	return new bu(Ts.i);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $u(t) {
	var e, n;
	return (
		'server_timestamp' ===
		(null ===
			(n = (
				(null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}
			).__type__) || void 0 === n
			? void 0
			: n.stringValue)
	);
}
function Ku(t) {
	var e = t.mapValue.fields.__previous_value__;
	return $u(e) ? Ku(e) : e;
}
function Wu(t) {
	var e = ra(t.mapValue.fields.__local_write_time__.timestampValue);
	return new ru(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Qu = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Xu(t) {
	return 'nullValue' in t
		? 0
		: 'booleanValue' in t
		? 1
		: 'integerValue' in t || 'doubleValue' in t
		? 2
		: 'timestampValue' in t
		? 3
		: 'stringValue' in t
		? 5
		: 'bytesValue' in t
		? 6
		: 'referenceValue' in t
		? 7
		: 'geoPointValue' in t
		? 8
		: 'arrayValue' in t
		? 9
		: 'mapValue' in t
		? $u(t)
			? 4
			: 10
		: ds();
}
function Yu(t, e) {
	var n,
		r = Xu(t);
	if (r !== Xu(e)) return !1;
	switch (r) {
		case 0:
			return !0;
		case 1:
			return t.booleanValue === e.booleanValue;
		case 4:
			return Wu(t).isEqual(Wu(e));
		case 3:
			return (function (t, e) {
				if (
					'string' == typeof t.timestampValue &&
					'string' == typeof e.timestampValue &&
					t.timestampValue.length === e.timestampValue.length
				)
					return t.timestampValue === e.timestampValue;
				var n = ra(t.timestampValue),
					r = ra(e.timestampValue);
				return n.seconds === r.seconds && n.nanos === r.nanos;
			})(t, e);
		case 5:
			return t.stringValue === e.stringValue;
		case 6:
			return (n = e), oa(t.bytesValue).isEqual(oa(n.bytesValue));
		case 7:
			return t.referenceValue === e.referenceValue;
		case 8:
			return (function (t, e) {
				return (
					ia(t.geoPointValue.latitude) === ia(e.geoPointValue.latitude) &&
					ia(t.geoPointValue.longitude) === ia(e.geoPointValue.longitude)
				);
			})(t, e);
		case 2:
			return (function (t, e) {
				if ('integerValue' in t && 'integerValue' in e)
					return ia(t.integerValue) === ia(e.integerValue);
				if ('doubleValue' in t && 'doubleValue' in e) {
					var n = ia(t.doubleValue),
						r = ia(e.doubleValue);
					return n === r ? su(n) === su(r) : isNaN(n) && isNaN(r);
				}
				return !1;
			})(t, e);
		case 9:
			return Ks(t.arrayValue.values || [], e.arrayValue.values || [], Yu);
		case 10:
			return (function (t, e) {
				var n = t.mapValue.fields || {},
					r = e.mapValue.fields || {};
				if (gs(n) !== gs(r)) return !1;
				for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Yu(n[i], r[i]))) return !1;
				return !0;
			})(t, e);
		default:
			return ds();
	}
}
function Ju(t, e) {
	return (
		void 0 !==
		(t.values || []).find(function (t) {
			return Yu(t, e);
		})
	);
}
function Zu(t, e) {
	var n,
		r,
		i,
		o,
		s = Xu(t),
		u = Xu(e);
	if (s !== u) return $s(s, u);
	switch (s) {
		case 0:
			return 0;
		case 1:
			return $s(t.booleanValue, e.booleanValue);
		case 2:
			return (
				(r = e),
				(i = ia((n = t).integerValue || n.doubleValue)),
				(o = ia(r.integerValue || r.doubleValue)),
				i < o ? -1 : i > o ? 1 : i === o ? 0 : isNaN(i) ? (isNaN(o) ? 0 : -1) : 1
			);
		case 3:
			return ta(t.timestampValue, e.timestampValue);
		case 4:
			return ta(Wu(t), Wu(e));
		case 5:
			return $s(t.stringValue, e.stringValue);
		case 6:
			return (function (t, e) {
				var n = oa(t),
					r = oa(e);
				return n.L(r);
			})(t.bytesValue, e.bytesValue);
		case 7:
			return (function (t, e) {
				for (var n = t.split('/'), r = e.split('/'), i = 0; i < n.length && i < r.length; i++) {
					var o = $s(n[i], r[i]);
					if (0 !== o) return o;
				}
				return $s(n.length, r.length);
			})(t.referenceValue, e.referenceValue);
		case 8:
			return (function (t, e) {
				var n = $s(ia(t.latitude), ia(e.latitude));
				return 0 !== n ? n : $s(ia(t.longitude), ia(e.longitude));
			})(t.geoPointValue, e.geoPointValue);
		case 9:
			return (function (t, e) {
				for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
					var o = Zu(n[i], r[i]);
					if (o) return o;
				}
				return $s(n.length, r.length);
			})(t.arrayValue, e.arrayValue);
		case 10:
			return (function (t, e) {
				var n = t.fields || {},
					r = Object.keys(n),
					i = e.fields || {},
					o = Object.keys(i);
				r.sort(), o.sort();
				for (var s = 0; s < r.length && s < o.length; ++s) {
					var u = $s(r[s], o[s]);
					if (0 !== u) return u;
					var a = Zu(n[r[s]], i[o[s]]);
					if (0 !== a) return a;
				}
				return $s(r.length, o.length);
			})(t.mapValue, e.mapValue);
		default:
			throw ds();
	}
}
function ta(t, e) {
	if ('string' == typeof t && 'string' == typeof e && t.length === e.length) return $s(t, e);
	var n = ra(t),
		r = ra(e),
		i = $s(n.seconds, r.seconds);
	return 0 !== i ? i : $s(n.nanos, r.nanos);
}
function ea(t) {
	return na(t);
}
function na(t) {
	return 'nullValue' in t
		? 'null'
		: 'booleanValue' in t
		? '' + t.booleanValue
		: 'integerValue' in t
		? '' + t.integerValue
		: 'doubleValue' in t
		? '' + t.doubleValue
		: 'timestampValue' in t
		? ((e = t.timestampValue), 'time(' + (n = ra(e)).seconds + ',' + n.nanos + ')')
		: 'stringValue' in t
		? t.stringValue
		: 'bytesValue' in t
		? oa(t.bytesValue).toBase64()
		: 'referenceValue' in t
		? ((i = t.referenceValue), Ts.C(i).toString())
		: 'geoPointValue' in t
		? 'geo(' + (r = t.geoPointValue).latitude + ',' + r.longitude + ')'
		: 'arrayValue' in t
		? (function (t) {
				for (var e = '[', n = !0, r = 0, i = t.values || []; r < i.length; r++)
					n ? (n = !1) : (e += ','), (e += na(i[r]));
				return e + ']';
		  })(t.arrayValue)
		: 'mapValue' in t
		? (function (t) {
				for (
					var e = '{', n = !0, r = 0, i = Object.keys(t.fields || {}).sort();
					r < i.length;
					r++
				) {
					var o = i[r];
					n ? (n = !1) : (e += ','), (e += o + ':' + na(t.fields[o]));
				}
				return e + '}';
		  })(t.mapValue)
		: ds();
	var e, n, r, i;
}
function ra(t) {
	if ((vs(!!t), 'string' == typeof t)) {
		var e = 0,
			n = Qu.exec(t);
		if ((vs(!!n), n[1])) {
			var r = n[1];
			(r = (r + '000000000').substr(0, 9)), (e = Number(r));
		}
		var i = new Date(t);
		return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
	}
	return { seconds: ia(t.seconds), nanos: ia(t.nanos) };
}
function ia(t) {
	return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
}
function oa(t) {
	return 'string' == typeof t ? Qs.fromBase64String(t) : Qs.fromUint8Array(t);
}
function sa(t, e) {
	return {
		referenceValue:
			'projects/' + t.projectId + '/databases/' + t.database + '/documents/' + e.path.R()
	};
}
function ua(t) {
	return !!t && 'integerValue' in t;
}
function aa(t) {
	return !!t && 'arrayValue' in t;
}
function ca(t) {
	return !!t && 'nullValue' in t;
}
function ha(t) {
	return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
}
function fa(t) {
	return !!t && 'mapValue' in t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var la = { asc: 'ASCENDING', desc: 'DESCENDING' },
	pa = {
		'<': 'LESS_THAN',
		'<=': 'LESS_THAN_OR_EQUAL',
		'>': 'GREATER_THAN',
		'>=': 'GREATER_THAN_OR_EQUAL',
		'==': 'EQUAL',
		'!=': 'NOT_EQUAL',
		'array-contains': 'ARRAY_CONTAINS',
		in: 'IN',
		'not-in': 'NOT_IN',
		'array-contains-any': 'ARRAY_CONTAINS_ANY'
	},
	da = function (t, e) {
		(this.U = t), (this.Qe = e);
	};
function va(t) {
	return { integerValue: '' + t };
}
function ya(t, e) {
	if (t.Qe) {
		if (isNaN(e)) return { doubleValue: 'NaN' };
		if (e === 1 / 0) return { doubleValue: 'Infinity' };
		if (e === -1 / 0) return { doubleValue: '-Infinity' };
	}
	return { doubleValue: su(e) ? '-0' : e };
}
function ga(t, e) {
	return uu(e) ? va(e) : ya(t, e);
}
function ma(t, e) {
	return t.Qe
		? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '') +
				'.' +
				('000000000' + e.nanoseconds).slice(-9) +
				'Z'
		: { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function ba(t, e) {
	return t.Qe ? e.toBase64() : e.toUint8Array();
}
function wa(t, e) {
	return ma(t, e.Z());
}
function Ea(t) {
	return vs(!!t), iu.J(((e = ra(t)), new ru(e.seconds, e.nanos)));
	var e;
}
function Ia(t, e) {
	return ((n = t), new Es(['projects', n.projectId, 'databases', n.database]))
		.child('documents')
		.child(e)
		.R();
	var n;
}
function _a(t) {
	var e = Es.g(t);
	return vs($a(e)), e;
}
function Ta(t, e) {
	return Ia(t.U, e.path);
}
function Aa(t, e) {
	var n = _a(e);
	return (
		vs(n.get(1) === t.U.projectId),
		vs((!n.get(3) && !t.U.database) || n.get(3) === t.U.database),
		new Ts(ka(n))
	);
}
function Na(t, e) {
	return Ia(t.U, e);
}
function Sa(t) {
	var e = _a(t);
	return 4 === e.length ? Es.P() : ka(e);
}
function Da(t) {
	return new Es(['projects', t.U.projectId, 'databases', t.U.database]).R();
}
function ka(t) {
	return vs(t.length > 4 && 'documents' === t.get(4)), t.u(5);
}
function xa(t, e, n) {
	return { name: Ta(t, e), fields: n.proto.mapValue.fields };
}
function Oa(t, e) {
	var n, r, i;
	if (e instanceof yc) n = { update: xa(t, e.key, e.value) };
	else if (e instanceof Ic) n = { delete: Ta(t, e.key) };
	else if (e instanceof gc) n = { update: xa(t, e.key, e.data), updateMask: Ha(e.We) };
	else if (e instanceof bc)
		n = {
			transform: {
				document: Ta(t, e.key),
				fieldTransforms: e.fieldTransforms.map(function (t) {
					return (function (t, e) {
						var n = e.transform;
						if (n instanceof Ya)
							return { fieldPath: e.field.R(), setToServerValue: 'REQUEST_TIME' };
						if (n instanceof Ja)
							return { fieldPath: e.field.R(), appendMissingElements: { values: n.elements } };
						if (n instanceof tc)
							return { fieldPath: e.field.R(), removeAllFromArray: { values: n.elements } };
						if (n instanceof nc) return { fieldPath: e.field.R(), increment: n.je };
						throw ds();
					})(0, t);
				})
			}
		};
	else {
		if (!(e instanceof _c)) return ds();
		n = { verify: Ta(t, e.key) };
	}
	return (
		e.Ge.Ke ||
			(n.currentDocument =
				((r = t),
				void 0 !== (i = e.Ge).updateTime
					? { updateTime: wa(r, i.updateTime) }
					: void 0 !== i.exists
					? { exists: i.exists }
					: ds())),
		n
	);
}
function La(t, e) {
	var n,
		r = e.currentDocument
			? void 0 !== (n = e.currentDocument).updateTime
				? ac.updateTime(Ea(n.updateTime))
				: void 0 !== n.exists
				? ac.exists(n.exists)
				: ac.ze()
			: ac.ze();
	if (e.update) {
		e.update.name;
		var i = Aa(t, e.update.name),
			o = new Tc({ mapValue: { fields: e.update.fields } });
		if (e.updateMask) {
			var s = (function (t) {
				var e = t.fieldPaths || [];
				return new oc(
					e.map(function (t) {
						return _s.S(t);
					})
				);
			})(e.updateMask);
			return new gc(i, o, s, r);
		}
		return new yc(i, o, r);
	}
	if (e.delete) {
		var u = Aa(t, e.delete);
		return new Ic(u, r);
	}
	if (e.transform) {
		var a = Aa(t, e.transform.document),
			c = e.transform.fieldTransforms.map(function (e) {
				return (function (t, e) {
					var n = null;
					if ('setToServerValue' in e) vs('REQUEST_TIME' === e.setToServerValue), (n = new Ya());
					else if ('appendMissingElements' in e) {
						var r = e.appendMissingElements.values || [];
						n = new Ja(r);
					} else if ('removeAllFromArray' in e) {
						var i = e.removeAllFromArray.values || [];
						n = new tc(i);
					} else 'increment' in e ? (n = new nc(t, e.increment)) : ds();
					var o = _s.S(e.fieldPath);
					return new sc(o, n);
				})(t, e);
			});
		return vs(!0 === r.exists), new bc(a, c);
	}
	if (e.verify) {
		var h = Aa(t, e.verify);
		return new _c(h, r);
	}
	return ds();
}
function Pa(t, e) {
	return { documents: [Na(t, e.path)] };
}
function Ca(t, e) {
	var n = { structuredQuery: {} },
		r = e.path;
	null !== e.collectionGroup
		? ((n.parent = Na(t, r)),
		  (n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
		: ((n.parent = Na(t, r.h())), (n.structuredQuery.from = [{ collectionId: r._() }]));
	var i = (function (t) {
		if (0 !== t.length) {
			var e = t.map(function (t) {
				return (function (t) {
					if ('==' === t.op) {
						if (ha(t.value)) return { unaryFilter: { field: qa(t.field), op: 'IS_NAN' } };
						if (ca(t.value)) return { unaryFilter: { field: qa(t.field), op: 'IS_NULL' } };
					} else if ('!=' === t.op) {
						if (ha(t.value)) return { unaryFilter: { field: qa(t.field), op: 'IS_NOT_NAN' } };
						if (ca(t.value)) return { unaryFilter: { field: qa(t.field), op: 'IS_NOT_NULL' } };
					}
					return { fieldFilter: { field: qa(t.field), op: Va(t.op), value: t.value } };
				})(t);
			});
			return 1 === e.length ? e[0] : { compositeFilter: { op: 'AND', filters: e } };
		}
	})(e.filters);
	i && (n.structuredQuery.where = i);
	var o = (function (t) {
		if (0 !== t.length)
			return t.map(function (t) {
				return { field: qa((e = t).field), direction: Ma(e.dir) };
				var e;
			});
	})(e.orderBy);
	o && (n.structuredQuery.orderBy = o);
	var s,
		u,
		a = ((s = t), (u = e.limit), s.Qe || ou(u) ? u : { value: u });
	return (
		null !== a && (n.structuredQuery.limit = a),
		e.startAt && (n.structuredQuery.startAt = ja(e.startAt)),
		e.endAt && (n.structuredQuery.endAt = ja(e.endAt)),
		n
	);
}
function Ra(t) {
	var e = Sa(t.parent),
		n = t.structuredQuery,
		r = n.from ? n.from.length : 0,
		i = null;
	if (r > 0) {
		vs(1 === r);
		var o = n.from[0];
		o.allDescendants ? (i = o.collectionId) : (e = e.child(o.collectionId));
	}
	var s = [];
	n.where && (s = Ua(n.where));
	var u = [];
	n.orderBy &&
		(u = n.orderBy.map(function (t) {
			return new ah(
				Ba((e = t).field),
				(function (t) {
					switch (t) {
						case 'ASCENDING':
							return 'asc';
						case 'DESCENDING':
							return 'desc';
						default:
							return;
					}
				})(e.direction)
			);
			var e;
		}));
	var a,
		c,
		h = null;
	n.limit && ((a = n.limit), (h = ou((c = 'object' == typeof a ? a.value : a)) ? null : c));
	var f = null;
	n.startAt && (f = Fa(n.startAt));
	var l = null;
	return n.endAt && (l = Fa(n.endAt)), Vc(Lc(e, i, u, s, h, 'F', f, l));
}
function Ua(t) {
	return t
		? void 0 !== t.unaryFilter
			? [za(t)]
			: void 0 !== t.fieldFilter
			? [Ga(t)]
			: void 0 !== t.compositeFilter
			? t.compositeFilter.filters
					.map(function (t) {
						return Ua(t);
					})
					.reduce(function (t, e) {
						return t.concat(e);
					})
			: ds()
		: [];
}
function ja(t) {
	return { before: t.before, values: t.position };
}
function Fa(t) {
	var e = !!t.before,
		n = t.values || [];
	return new ih(n, e);
}
function Ma(t) {
	return la[t];
}
function Va(t) {
	return pa[t];
}
function qa(t) {
	return { fieldPath: t.R() };
}
function Ba(t) {
	return _s.S(t.fieldPath);
}
function Ga(t) {
	return Qc.create(
		Ba(t.fieldFilter.field),
		(function (t) {
			switch (t) {
				case 'EQUAL':
					return '==';
				case 'NOT_EQUAL':
					return '!=';
				case 'GREATER_THAN':
					return '>';
				case 'GREATER_THAN_OR_EQUAL':
					return '>=';
				case 'LESS_THAN':
					return '<';
				case 'LESS_THAN_OR_EQUAL':
					return '<=';
				case 'ARRAY_CONTAINS':
					return 'array-contains';
				case 'IN':
					return 'in';
				case 'NOT_IN':
					return 'not-in';
				case 'ARRAY_CONTAINS_ANY':
					return 'array-contains-any';
				case 'OPERATOR_UNSPECIFIED':
				default:
					return ds();
			}
		})(t.fieldFilter.op),
		t.fieldFilter.value
	);
}
function za(t) {
	switch (t.unaryFilter.op) {
		case 'IS_NAN':
			var e = Ba(t.unaryFilter.field);
			return Qc.create(e, '==', { doubleValue: NaN });
		case 'IS_NULL':
			var n = Ba(t.unaryFilter.field);
			return Qc.create(n, '==', { nullValue: 'NULL_VALUE' });
		case 'IS_NOT_NAN':
			var r = Ba(t.unaryFilter.field);
			return Qc.create(r, '!=', { doubleValue: NaN });
		case 'IS_NOT_NULL':
			var i = Ba(t.unaryFilter.field);
			return Qc.create(i, '!=', { nullValue: 'NULL_VALUE' });
		case 'OPERATOR_UNSPECIFIED':
		default:
			return ds();
	}
}
function Ha(t) {
	var e = [];
	return (
		t.fields.forEach(function (t) {
			return e.push(t.R());
		}),
		{ fieldPaths: e }
	);
}
function $a(t) {
	return t.length >= 4 && 'projects' === t.get(0) && 'databases' === t.get(2);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ka = function () {
	this.He = void 0;
};
function Wa(t, e, n) {
	return t instanceof Ya
		? ((i = e),
		  (o = {
				fields: {
					__type__: { stringValue: 'server_timestamp' },
					__local_write_time__: {
						timestampValue: { seconds: (r = n).seconds, nanos: r.nanoseconds }
					}
				}
		  }),
		  i && (o.fields.__previous_value__ = i),
		  { mapValue: o })
		: t instanceof Ja
		? Za(t, e)
		: t instanceof tc
		? ec(t, e)
		: (function (t, e) {
				var n = Xa(t, e),
					r = rc(n) + rc(t.je);
				return ua(n) && ua(t.je) ? va(r) : ya(t.serializer, r);
		  })(t, e);
	var r, i, o;
}
function Qa(t, e, n) {
	return t instanceof Ja ? Za(t, e) : t instanceof tc ? ec(t, e) : n;
}
function Xa(t, e) {
	return t instanceof nc
		? ua((r = e)) || ((n = r) && 'doubleValue' in n)
			? e
			: { integerValue: 0 }
		: null;
	var n, r;
}
var Ya = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return te(e, t), e;
	})(Ka),
	Ja = (function (t) {
		function e(e) {
			var n = this;
			return ((n = t.call(this) || this).elements = e), n;
		}
		return te(e, t), e;
	})(Ka);
function Za(t, e) {
	for (
		var n = ic(e),
			r = function (t) {
				n.some(function (e) {
					return Yu(e, t);
				}) || n.push(t);
			},
			i = 0,
			o = t.elements;
		i < o.length;
		i++
	)
		r(o[i]);
	return { arrayValue: { values: n } };
}
var tc = (function (t) {
	function e(e) {
		var n = this;
		return ((n = t.call(this) || this).elements = e), n;
	}
	return te(e, t), e;
})(Ka);
function ec(t, e) {
	for (
		var n = ic(e),
			r = function (t) {
				n = n.filter(function (e) {
					return !Yu(e, t);
				});
			},
			i = 0,
			o = t.elements;
		i < o.length;
		i++
	)
		r(o[i]);
	return { arrayValue: { values: n } };
}
var nc = (function (t) {
	function e(e, n) {
		var r = this;
		return ((r = t.call(this) || this).serializer = e), (r.je = n), r;
	}
	return te(e, t), e;
})(Ka);
function rc(t) {
	return ia(t.integerValue || t.doubleValue);
}
function ic(t) {
	return aa(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var oc = (function () {
		function t(t) {
			(this.fields = t), t.sort(_s.i);
		}
		return (
			(t.prototype.Ye = function (t) {
				for (var e = 0, n = this.fields; e < n.length; e++) if (n[e].T(t)) return !0;
				return !1;
			}),
			(t.prototype.isEqual = function (t) {
				return Ks(this.fields, t.fields, function (t, e) {
					return t.isEqual(e);
				});
			}),
			t
		);
	})(),
	sc = function (t, e) {
		(this.field = t), (this.transform = e);
	},
	uc = function (t, e) {
		(this.version = t), (this.transformResults = e);
	},
	ac = (function () {
		function t(t, e) {
			(this.updateTime = t), (this.exists = e);
		}
		return (
			(t.ze = function () {
				return new t();
			}),
			(t.exists = function (e) {
				return new t(void 0, e);
			}),
			(t.updateTime = function (e) {
				return new t(e);
			}),
			Object.defineProperty(t.prototype, 'Ke', {
				get: function () {
					return void 0 === this.updateTime && void 0 === this.exists;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (t) {
				return (
					this.exists === t.exists &&
					(this.updateTime
						? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
						: !t.updateTime)
				);
			}),
			t
		);
	})();
function cc(t, e) {
	return void 0 !== t.updateTime
		? e instanceof Dc && e.version.isEqual(t.updateTime)
		: void 0 === t.exists || t.exists === e instanceof Dc;
}
var hc = function () {};
function fc(t, e, n) {
	return t instanceof yc
		? ((i = n), new Dc((r = t).key, i.version, r.value, { hasCommittedMutations: !0 }))
		: t instanceof gc
		? (function (t, e, n) {
				if (!cc(t.Ge, e)) return new xc(t.key, n.version);
				var r = mc(t, e);
				return new Dc(t.key, n.version, r, { hasCommittedMutations: !0 });
		  })(t, e, n)
		: t instanceof bc
		? (function (t, e, n) {
				if ((vs(null != n.transformResults), !cc(t.Ge, e))) return new xc(t.key, n.version);
				var r = wc(t, e),
					i = (function (t, e, n) {
						var r = [];
						vs(t.length === n.length);
						for (var i = 0; i < n.length; i++) {
							var o = t[i],
								s = o.transform,
								u = null;
							e instanceof Dc && (u = e.field(o.field)), r.push(Qa(s, u, n[i]));
						}
						return r;
					})(t.fieldTransforms, e, n.transformResults),
					o = n.version,
					s = Ec(t, r.data(), i);
				return new Dc(t.key, o, s, { hasCommittedMutations: !0 });
		  })(t, e, n)
		: (function (t, e, n) {
				return new kc(t.key, n.version, { hasCommittedMutations: !0 });
		  })(t, 0, n);
	var r, i;
}
function lc(t, e, n, r) {
	return t instanceof yc
		? (function (t, e) {
				if (!cc(t.Ge, e)) return e;
				var n = vc(e);
				return new Dc(t.key, n, t.value, { Je: !0 });
		  })(t, e)
		: t instanceof gc
		? (function (t, e) {
				if (!cc(t.Ge, e)) return e;
				var n = vc(e),
					r = mc(t, e);
				return new Dc(t.key, n, r, { Je: !0 });
		  })(t, e)
		: t instanceof bc
		? (function (t, e, n, r) {
				if (!cc(t.Ge, e)) return e;
				var i = wc(t, e),
					o = (function (t, e, n, r) {
						for (var i = [], o = 0, s = t; o < s.length; o++) {
							var u = s[o],
								a = u.transform,
								c = null;
							n instanceof Dc && (c = n.field(u.field)),
								null === c && r instanceof Dc && (c = r.field(u.field)),
								i.push(Wa(a, c, e));
						}
						return i;
					})(t.fieldTransforms, n, e, r),
					s = Ec(t, i.data(), o);
				return new Dc(t.key, i.version, s, { Je: !0 });
		  })(t, e, r, n)
		: ((o = e), cc((i = t).Ge, o) ? new kc(i.key, iu.min()) : o);
	var i, o;
}
function pc(t, e) {
	return t instanceof bc
		? (function (t, e) {
				for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
					var o = i[r],
						s = e instanceof Dc ? e.field(o.field) : void 0,
						u = Xa(o.transform, s || null);
					null != u && (n = null == n ? new Ac().set(o.field, u) : n.set(o.field, u));
				}
				return n ? n.Xe() : null;
		  })(t, e)
		: null;
}
function dc(t, e) {
	return (
		t.type === e.type &&
		!!t.key.isEqual(e.key) &&
		!!t.Ge.isEqual(e.Ge) &&
		(0 === t.type
			? t.value.isEqual(e.value)
			: 1 === t.type
			? t.data.isEqual(e.data) && t.We.isEqual(e.We)
			: 2 !== t.type ||
			  Ks(t.fieldTransforms, t.fieldTransforms, function (t, e) {
					return (
						(r = e),
						(n = t).field.isEqual(r.field) &&
							((i = n.transform),
							(o = r.transform),
							(i instanceof Ja && o instanceof Ja) || (i instanceof tc && o instanceof tc)
								? Ks(i.elements, o.elements, Yu)
								: i instanceof nc && o instanceof nc
								? Yu(i.je, o.je)
								: i instanceof Ya && o instanceof Ya)
					);
					var n, r, i, o;
			  }))
	);
}
function vc(t) {
	return t instanceof Dc ? t.version : iu.min();
}
var yc = (function (t) {
		function e(e, n, r) {
			var i = this;
			return ((i = t.call(this) || this).key = e), (i.value = n), (i.Ge = r), (i.type = 0), i;
		}
		return te(e, t), e;
	})(hc),
	gc = (function (t) {
		function e(e, n, r, i) {
			var o = this;
			return (
				((o = t.call(this) || this).key = e), (o.data = n), (o.We = r), (o.Ge = i), (o.type = 1), o
			);
		}
		return te(e, t), e;
	})(hc);
function mc(t, e) {
	return (
		(n = t),
		(r = e instanceof Dc ? e.data() : Tc.empty()),
		(i = new Ac(r)),
		n.We.fields.forEach(function (t) {
			if (!t.m()) {
				var e = n.data.field(t);
				null !== e ? i.set(t, e) : i.delete(t);
			}
		}),
		i.Xe()
	);
	var n, r, i;
}
var bc = (function (t) {
	function e(e, n) {
		var r = this;
		return (
			((r = t.call(this) || this).key = e),
			(r.fieldTransforms = n),
			(r.type = 2),
			(r.Ge = ac.exists(!0)),
			r
		);
	}
	return te(e, t), e;
})(hc);
function wc(t, e) {
	return e;
}
function Ec(t, e, n) {
	for (var r = new Ac(e), i = 0; i < t.fieldTransforms.length; i++) {
		var o = t.fieldTransforms[i];
		r.set(o.field, n[i]);
	}
	return r.Xe();
}
var Ic = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this) || this).key = e), (r.Ge = n), (r.type = 3), r;
		}
		return te(e, t), e;
	})(hc),
	_c = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this) || this).key = e), (r.Ge = n), (r.type = 4), r;
		}
		return te(e, t), e;
	})(hc),
	Tc = (function () {
		function t(t) {
			this.proto = t;
		}
		return (
			(t.empty = function () {
				return new t({ mapValue: {} });
			}),
			(t.prototype.field = function (t) {
				if (t.m()) return this.proto;
				for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
					if (!e.mapValue.fields) return null;
					if (!fa((e = e.mapValue.fields[t.get(n)]))) return null;
				}
				return (e = (e.mapValue.fields || {})[t._()]) || null;
			}),
			(t.prototype.isEqual = function (t) {
				return Yu(this.proto, t.proto);
			}),
			t
		);
	})(),
	Ac = (function () {
		function t(t) {
			void 0 === t && (t = Tc.empty()), (this.Ze = t), (this.tn = new Map());
		}
		return (
			(t.prototype.set = function (t, e) {
				return this.en(t, e), this;
			}),
			(t.prototype.delete = function (t) {
				return this.en(t, null), this;
			}),
			(t.prototype.en = function (t, e) {
				for (var n = this.tn, r = 0; r < t.length - 1; ++r) {
					var i = t.get(r),
						o = n.get(i);
					o instanceof Map
						? (n = o)
						: o && 10 === Xu(o)
						? ((o = new Map(Object.entries(o.mapValue.fields || {}))), n.set(i, o), (n = o))
						: ((o = new Map()), n.set(i, o), (n = o));
				}
				n.set(t._(), e);
			}),
			(t.prototype.Xe = function () {
				var t = this.nn(_s.P(), this.tn);
				return null != t ? new Tc(t) : this.Ze;
			}),
			(t.prototype.nn = function (t, e) {
				var n = this,
					r = !1,
					i = this.Ze.field(t),
					o = fa(i) ? Object.assign({}, i.mapValue.fields) : {};
				return (
					e.forEach(function (e, i) {
						if (e instanceof Map) {
							var s = n.nn(t.child(i), e);
							null != s && ((o[i] = s), (r = !0));
						} else null !== e ? ((o[i] = e), (r = !0)) : o.hasOwnProperty(i) && (delete o[i], (r = !0));
					}),
					r ? { mapValue: { fields: o } } : null
				);
			}),
			t
		);
	})();
function Nc(t) {
	var e = [];
	return (
		ms(t.fields || {}, function (t, n) {
			var r = new _s([t]);
			if (fa(n)) {
				var i = Nc(n.mapValue).fields;
				if (0 === i.length) e.push(r);
				else
					for (var o = 0, s = i; o < s.length; o++) {
						var u = s[o];
						e.push(r.child(u));
					}
			} else e.push(r);
		}),
		new oc(e)
	);
}
var Sc = function (t, e) {
		(this.key = t), (this.version = e);
	},
	Dc = (function (t) {
		function e(e, n, r, i) {
			var o = this;
			return (
				((o = t.call(this, e, n) || this).sn = r),
				(o.Je = !!i.Je),
				(o.hasCommittedMutations = !!i.hasCommittedMutations),
				o
			);
		}
		return (
			te(e, t),
			(e.prototype.field = function (t) {
				return this.sn.field(t);
			}),
			(e.prototype.data = function () {
				return this.sn;
			}),
			(e.prototype.rn = function () {
				return this.sn.proto;
			}),
			(e.prototype.isEqual = function (t) {
				return (
					t instanceof e &&
					this.key.isEqual(t.key) &&
					this.version.isEqual(t.version) &&
					this.Je === t.Je &&
					this.hasCommittedMutations === t.hasCommittedMutations &&
					this.sn.isEqual(t.sn)
				);
			}),
			(e.prototype.toString = function () {
				return (
					'Document(' +
					this.key +
					', ' +
					this.version +
					', ' +
					this.sn.toString() +
					', {hasLocalMutations: ' +
					this.Je +
					'}), {hasCommittedMutations: ' +
					this.hasCommittedMutations +
					'})'
				);
			}),
			Object.defineProperty(e.prototype, 'hasPendingWrites', {
				get: function () {
					return this.Je || this.hasCommittedMutations;
				},
				enumerable: !1,
				configurable: !0
			}),
			e
		);
	})(Sc),
	kc = (function (t) {
		function e(e, n, r) {
			var i = this;
			return (
				((i = t.call(this, e, n) || this).hasCommittedMutations = !(
					!r || !r.hasCommittedMutations
				)),
				i
			);
		}
		return (
			te(e, t),
			(e.prototype.toString = function () {
				return 'NoDocument(' + this.key + ', ' + this.version + ')';
			}),
			Object.defineProperty(e.prototype, 'hasPendingWrites', {
				get: function () {
					return this.hasCommittedMutations;
				},
				enumerable: !1,
				configurable: !0
			}),
			(e.prototype.isEqual = function (t) {
				return (
					t instanceof e &&
					t.hasCommittedMutations === this.hasCommittedMutations &&
					t.version.isEqual(this.version) &&
					t.key.isEqual(this.key)
				);
			}),
			e
		);
	})(Sc),
	xc = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.toString = function () {
				return 'UnknownDocument(' + this.key + ', ' + this.version + ')';
			}),
			Object.defineProperty(e.prototype, 'hasPendingWrites', {
				get: function () {
					return !0;
				},
				enumerable: !1,
				configurable: !0
			}),
			(e.prototype.isEqual = function (t) {
				return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key);
			}),
			e
		);
	})(Sc),
	Oc = function (t, e, n, r, i, o, s, u) {
		void 0 === e && (e = null),
			void 0 === n && (n = []),
			void 0 === r && (r = []),
			void 0 === i && (i = null),
			void 0 === o && (o = 'F'),
			void 0 === s && (s = null),
			void 0 === u && (u = null),
			(this.path = t),
			(this.collectionGroup = e),
			(this.on = n),
			(this.filters = r),
			(this.limit = i),
			(this.an = o),
			(this.startAt = s),
			(this.endAt = u),
			(this.cn = null),
			(this.un = null),
			this.startAt,
			this.endAt;
	};
function Lc(t, e, n, r, i, o, s, u) {
	return new Oc(t, e, n, r, i, o, s, u);
}
function Pc(t) {
	return new Oc(t);
}
function Cc(t) {
	return !ou(t.limit) && 'F' === t.an;
}
function Rc(t) {
	return !ou(t.limit) && 'L' === t.an;
}
function Uc(t) {
	return t.on.length > 0 ? t.on[0].field : null;
}
function jc(t) {
	for (var e = 0, n = t.filters; e < n.length; e++) {
		var r = n[e];
		if (r.hn()) return r.field;
	}
	return null;
}
function Fc(t) {
	return null !== t.collectionGroup;
}
function Mc(t) {
	var e = ys(t);
	if (null === e.cn) {
		e.cn = [];
		var n = jc(e),
			r = Uc(e);
		if (null !== n && null === r) n.p() || e.cn.push(new ah(n)), e.cn.push(new ah(_s.v(), 'asc'));
		else {
			for (var i = !1, o = 0, s = e.on; o < s.length; o++) {
				var u = s[o];
				e.cn.push(u), u.field.p() && (i = !0);
			}
			if (!i) {
				var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : 'asc';
				e.cn.push(new ah(_s.v(), a));
			}
		}
	}
	return e.cn;
}
function Vc(t) {
	var e = ys(t);
	if (!e.un)
		if ('F' === e.an)
			e.un = cu(e.path, e.collectionGroup, Mc(e), e.filters, e.limit, e.startAt, e.endAt);
		else {
			for (var n = [], r = 0, i = Mc(e); r < i.length; r++) {
				var o = i[r],
					s = 'desc' === o.dir ? 'asc' : 'desc';
				n.push(new ah(o.field, s));
			}
			var u = e.endAt ? new ih(e.endAt.position, !e.endAt.before) : null,
				a = e.startAt ? new ih(e.startAt.position, !e.startAt.before) : null;
			e.un = cu(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
		}
	return e.un;
}
function qc(t, e, n) {
	return new Oc(
		t.path,
		t.collectionGroup,
		t.on.slice(),
		t.filters.slice(),
		e,
		n,
		t.startAt,
		t.endAt
	);
}
function Bc(t, e) {
	return new Oc(
		t.path,
		t.collectionGroup,
		t.on.slice(),
		t.filters.slice(),
		t.limit,
		t.an,
		e,
		t.endAt
	);
}
function Gc(t, e) {
	return new Oc(
		t.path,
		t.collectionGroup,
		t.on.slice(),
		t.filters.slice(),
		t.limit,
		t.an,
		t.startAt,
		e
	);
}
function zc(t, e) {
	return fu(Vc(t), Vc(e)) && t.an === e.an;
}
function Hc(t) {
	return hu(Vc(t)) + '|lt:' + t.an;
}
function $c(t) {
	return (
		'Query(target=' +
		((e = Vc(t)),
		(n = e.path.R()),
		null !== e.collectionGroup && (n += ' collectionGroup=' + e.collectionGroup),
		e.filters.length > 0 &&
			(n +=
				', filters: [' +
				e.filters
					.map(function (t) {
						return (e = t).field.R() + ' ' + e.op + ' ' + ea(e.value);
						var e;
					})
					.join(', ') +
				']'),
		ou(e.limit) || (n += ', limit: ' + e.limit),
		e.orderBy.length > 0 &&
			(n +=
				', orderBy: [' +
				e.orderBy
					.map(function (t) {
						return (e = t).field.R() + ' (' + e.dir + ')';
						var e;
					})
					.join(', ') +
				']'),
		e.startAt && (n += ', startAt: ' + oh(e.startAt)),
		e.endAt && (n += ', endAt: ' + oh(e.endAt)),
		'Target(' + n + '); limitType=') +
		t.an +
		')'
	);
	var e, n;
}
function Kc(t, e) {
	return (
		(n = t),
		(i = (r = e).key.path),
		(null !== n.collectionGroup
			? r.key.N(n.collectionGroup) && n.path.T(i)
			: Ts.F(n.path)
			? n.path.isEqual(i)
			: n.path.I(i)) &&
			(function (t, e) {
				for (var n = 0, r = t.on; n < r.length; n++) {
					var i = r[n];
					if (!i.field.p() && null === e.field(i.field)) return !1;
				}
				return !0;
			})(t, e) &&
			(function (t, e) {
				for (var n = 0, r = t.filters; n < r.length; n++) if (!r[n].matches(e)) return !1;
				return !0;
			})(t, e) &&
			(function (t, e) {
				return !((t.startAt && !sh(t.startAt, Mc(t), e)) || (t.endAt && sh(t.endAt, Mc(t), e)));
			})(t, e)
	);
	var n, r, i;
}
function Wc(t) {
	return function (e, n) {
		for (var r = !1, i = 0, o = Mc(t); i < o.length; i++) {
			var s = o[i],
				u = ch(s, e, n);
			if (0 !== u) return u;
			r = r || s.field.p();
		}
		return 0;
	};
}
var Qc = (function (t) {
		function e(e, n, r) {
			var i = this;
			return ((i = t.call(this) || this).field = e), (i.op = n), (i.value = r), i;
		}
		return (
			te(e, t),
			(e.create = function (t, n, r) {
				if (t.p()) return 'in' === n || 'not-in' === n ? this.ln(t, n, r) : new Xc(t, n, r);
				if (ca(r)) {
					if ('==' !== n && '!=' !== n)
						throw new us(
							ss.INVALID_ARGUMENT,
							"Invalid query. Null only supports '==' and '!=' comparisons."
						);
					return new e(t, n, r);
				}
				if (ha(r)) {
					if ('==' !== n && '!=' !== n)
						throw new us(
							ss.INVALID_ARGUMENT,
							"Invalid query. NaN only supports '==' and '!=' comparisons."
						);
					return new e(t, n, r);
				}
				return 'array-contains' === n
					? new th(t, r)
					: 'in' === n
					? new eh(t, r)
					: 'not-in' === n
					? new nh(t, r)
					: 'array-contains-any' === n
					? new rh(t, r)
					: new e(t, n, r);
			}),
			(e.ln = function (t, e, n) {
				return 'in' === e ? new Yc(t, n) : new Jc(t, n);
			}),
			(e.prototype.matches = function (t) {
				var e = t.field(this.field);
				return '!=' === this.op
					? null !== e && this._n(Zu(e, this.value))
					: null !== e && Xu(this.value) === Xu(e) && this._n(Zu(e, this.value));
			}),
			(e.prototype._n = function (t) {
				switch (this.op) {
					case '<':
						return t < 0;
					case '<=':
						return t <= 0;
					case '==':
						return 0 === t;
					case '!=':
						return 0 !== t;
					case '>':
						return t > 0;
					case '>=':
						return t >= 0;
					default:
						return ds();
				}
			}),
			(e.prototype.hn = function () {
				return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
			}),
			e
		);
	})(function () {}),
	Xc = (function (t) {
		function e(e, n, r) {
			var i = this;
			return ((i = t.call(this, e, n, r) || this).key = Ts.C(r.referenceValue)), i;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				var e = Ts.i(t.key, this.key);
				return this._n(e);
			}),
			e
		);
	})(Qc),
	Yc = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this, e, 'in', n) || this).keys = Zc('in', n)), r;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				return this.keys.some(function (e) {
					return e.isEqual(t.key);
				});
			}),
			e
		);
	})(Qc),
	Jc = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this, e, 'not-in', n) || this).keys = Zc('not-in', n)), r;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				return !this.keys.some(function (e) {
					return e.isEqual(t.key);
				});
			}),
			e
		);
	})(Qc);
function Zc(t, e) {
	var n;
	return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (
		t
	) {
		return Ts.C(t.referenceValue);
	});
}
var th = (function (t) {
		function e(e, n) {
			return t.call(this, e, 'array-contains', n) || this;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				var e = t.field(this.field);
				return aa(e) && Ju(e.arrayValue, this.value);
			}),
			e
		);
	})(Qc),
	eh = (function (t) {
		function e(e, n) {
			return t.call(this, e, 'in', n) || this;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				var e = t.field(this.field);
				return null !== e && Ju(this.value.arrayValue, e);
			}),
			e
		);
	})(Qc),
	nh = (function (t) {
		function e(e, n) {
			return t.call(this, e, 'not-in', n) || this;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				if (Ju(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
				var e = t.field(this.field);
				return null !== e && !Ju(this.value.arrayValue, e);
			}),
			e
		);
	})(Qc),
	rh = (function (t) {
		function e(e, n) {
			return t.call(this, e, 'array-contains-any', n) || this;
		}
		return (
			te(e, t),
			(e.prototype.matches = function (t) {
				var e = this,
					n = t.field(this.field);
				return (
					!(!aa(n) || !n.arrayValue.values) &&
					n.arrayValue.values.some(function (t) {
						return Ju(e.value.arrayValue, t);
					})
				);
			}),
			e
		);
	})(Qc),
	ih = function (t, e) {
		(this.position = t), (this.before = e);
	};
function oh(t) {
	return (
		(t.before ? 'b' : 'a') +
		':' +
		t.position
			.map(function (t) {
				return ea(t);
			})
			.join(',')
	);
}
function sh(t, e, n) {
	for (var r = 0, i = 0; i < t.position.length; i++) {
		var o = e[i],
			s = t.position[i];
		if (
			((r = o.field.p() ? Ts.i(Ts.C(s.referenceValue), n.key) : Zu(s, n.field(o.field))),
			'desc' === o.dir && (r *= -1),
			0 !== r)
		)
			break;
	}
	return t.before ? r <= 0 : r < 0;
}
function uh(t, e) {
	if (null === t) return null === e;
	if (null === e) return !1;
	if (t.before !== e.before || t.position.length !== e.position.length) return !1;
	for (var n = 0; n < t.position.length; n++) if (!Yu(t.position[n], e.position[n])) return !1;
	return !0;
}
var ah = function (t, e) {
	void 0 === e && (e = 'asc'), (this.field = t), (this.dir = e);
};
function ch(t, e, n) {
	var r,
		i,
		o,
		s,
		u = t.field.p()
			? Ts.i(e.key, n.key)
			: ((r = t.field),
			  (i = n),
			  (o = e.field(r)),
			  (s = i.field(r)),
			  null !== o && null !== s ? Zu(o, s) : ds());
	switch (t.dir) {
		case 'asc':
			return u;
		case 'desc':
			return -1 * u;
		default:
			return ds();
	}
}
function hh(t, e) {
	return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var fh = function () {
		var t = this;
		this.promise = new Promise(function (e, n) {
			(t.resolve = e), (t.reject = n);
		});
	},
	lh = (function () {
		function t(t, e, n, r, i) {
			void 0 === n && (n = 1e3),
				void 0 === r && (r = 1.5),
				void 0 === i && (i = 6e4),
				(this.fn = t),
				(this.dn = e),
				(this.wn = n),
				(this.mn = r),
				(this.Tn = i),
				(this.En = 0),
				(this.In = null),
				(this.An = Date.now()),
				this.reset();
		}
		return (
			(t.prototype.reset = function () {
				this.En = 0;
			}),
			(t.prototype.Rn = function () {
				this.En = this.Tn;
			}),
			(t.prototype.gn = function (t) {
				var e = this;
				this.cancel();
				var n = Math.floor(this.En + this.Pn()),
					r = Math.max(0, Date.now() - this.An),
					i = Math.max(0, n - r);
				i > 0 &&
					hs(
						'ExponentialBackoff',
						'Backing off for ' +
							i +
							' ms (base delay: ' +
							this.En +
							' ms, delay with jitter: ' +
							n +
							' ms, last attempt: ' +
							r +
							' ms ago)'
					),
					(this.In = this.fn.yn(this.dn, i, function () {
						return (e.An = Date.now()), t();
					})),
					(this.En *= this.mn),
					this.En < this.wn && (this.En = this.wn),
					this.En > this.Tn && (this.En = this.Tn);
			}),
			(t.prototype.Vn = function () {
				null !== this.In && (this.In.pn(), (this.In = null));
			}),
			(t.prototype.cancel = function () {
				null !== this.In && (this.In.cancel(), (this.In = null));
			}),
			(t.prototype.Pn = function () {
				return (Math.random() - 0.5) * this.En;
			}),
			t
		);
	})(),
	ph = (function () {
		function t(t) {
			var e = this;
			(this.bn = null),
				(this.vn = null),
				(this.result = void 0),
				(this.error = void 0),
				(this.Sn = !1),
				(this.Dn = !1),
				t(
					function (t) {
						(e.Sn = !0), (e.result = t), e.bn && e.bn(t);
					},
					function (t) {
						(e.Sn = !0), (e.error = t), e.vn && e.vn(t);
					}
				);
		}
		return (
			(t.prototype.catch = function (t) {
				return this.next(void 0, t);
			}),
			(t.prototype.next = function (e, n) {
				var r = this;
				return (
					this.Dn && ds(),
					(this.Dn = !0),
					this.Sn
						? this.error
							? this.Cn(n, this.error)
							: this.Nn(e, this.result)
						: new t(function (t, i) {
								(r.bn = function (n) {
									r.Nn(e, n).next(t, i);
								}),
									(r.vn = function (e) {
										r.Cn(n, e).next(t, i);
									});
						  })
				);
			}),
			(t.prototype.Fn = function () {
				var t = this;
				return new Promise(function (e, n) {
					t.next(e, n);
				});
			}),
			(t.prototype.xn = function (e) {
				try {
					var n = e();
					return n instanceof t ? n : t.resolve(n);
				} catch (r) {
					return t.reject(r);
				}
			}),
			(t.prototype.Nn = function (e, n) {
				return e
					? this.xn(function () {
							return e(n);
					  })
					: t.resolve(n);
			}),
			(t.prototype.Cn = function (e, n) {
				return e
					? this.xn(function () {
							return e(n);
					  })
					: t.reject(n);
			}),
			(t.resolve = function (e) {
				return new t(function (t, n) {
					t(e);
				});
			}),
			(t.reject = function (e) {
				return new t(function (t, n) {
					n(e);
				});
			}),
			(t.$n = function (e) {
				return new t(function (t, n) {
					var r = 0,
						i = 0,
						o = !1;
					e.forEach(function (e) {
						++r,
							e.next(
								function () {
									++i, o && i === r && t();
								},
								function (t) {
									return n(t);
								}
							);
					}),
						(o = !0),
						i === r && t();
				});
			}),
			(t.kn = function (e) {
				for (
					var n = t.resolve(!1),
						r = function (e) {
							n = n.next(function (n) {
								return n ? t.resolve(n) : e();
							});
						},
						i = 0,
						o = e;
					i < o.length;
					i++
				)
					r(o[i]);
				return n;
			}),
			(t.forEach = function (t, e) {
				var n = this,
					r = [];
				return (
					t.forEach(function (t, i) {
						r.push(e.call(n, t, i));
					}),
					this.$n(r)
				);
			}),
			t
		);
	})(),
	dh = (function () {
		function t(e, n, r) {
			(this.name = e),
				(this.version = n),
				(this.Mn = r),
				12.2 === t.On(ce()) &&
					fs(
						'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
					);
		}
		return (
			(t.delete = function (t) {
				return hs('SimpleDb', 'Removing database:', t), wh(window.indexedDB.deleteDatabase(t)).Fn();
			}),
			(t.Ln = function () {
				if ('undefined' == typeof indexedDB) return !1;
				if (t.Bn()) return !0;
				var e = ce(),
					n = t.On(e),
					r = 0 < n && n < 10,
					i = t.qn(e),
					o = 0 < i && i < 4.5;
				return !(
					e.indexOf('MSIE ') > 0 ||
					e.indexOf('Trident/') > 0 ||
					e.indexOf('Edge/') > 0 ||
					r ||
					o
				);
			}),
			(t.Bn = function () {
				var t;
				return (
					'undefined' != typeof process &&
					'YES' === (null === (t = process.env) || void 0 === t ? void 0 : t.Un)
				);
			}),
			(t.Qn = function (t, e) {
				return t.store(e);
			}),
			(t.On = function (t) {
				var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
					n = e ? e[1].split('_').slice(0, 2).join('.') : '-1';
				return Number(n);
			}),
			(t.qn = function (t) {
				var e = t.match(/Android ([\d.]+)/i),
					n = e ? e[1].split('.').slice(0, 2).join('.') : '-1';
				return Number(n);
			}),
			(t.prototype.Wn = function (t) {
				return ne(this, void 0, void 0, function () {
					var e,
						n = this;
					return re(this, function (r) {
						switch (r.label) {
							case 0:
								return this.db
									? [3, 2]
									: (hs('SimpleDb', 'Opening database:', this.name),
									  (e = this),
									  [
											4,
											new Promise(function (e, r) {
												var i = indexedDB.open(n.name, n.version);
												(i.onsuccess = function (t) {
													var n = t.target.result;
													e(n);
												}),
													(i.onblocked = function () {
														r(
															new yh(
																t,
																'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
															)
														);
													}),
													(i.onerror = function (e) {
														var n = e.target.error;
														'VersionError' === n.name
															? r(
																	new us(
																		ss.FAILED_PRECONDITION,
																		'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
																	)
															  )
															: r(new yh(t, n));
													}),
													(i.onupgradeneeded = function (t) {
														hs(
															'SimpleDb',
															'Database "' + n.name + '" requires upgrade from version:',
															t.oldVersion
														);
														var e = t.target.result;
														n.Mn.createOrUpgrade(e, i.transaction, t.oldVersion, n.version).next(
															function () {
																hs(
																	'SimpleDb',
																	'Database upgrade to version ' + n.version + ' complete'
																);
															}
														);
													});
											})
									  ]);
							case 1:
								(e.db = r.sent()), (r.label = 2);
							case 2:
								return [
									2,
									(this.jn &&
										(this.db.onversionchange = function (t) {
											return n.jn(t);
										}),
									this.db)
								];
						}
					});
				});
			}),
			(t.prototype.Kn = function (t) {
				(this.jn = t),
					this.db &&
						(this.db.onversionchange = function (e) {
							return t(e);
						});
			}),
			(t.prototype.runTransaction = function (t, e, n, r) {
				return ne(this, void 0, void 0, function () {
					var i, o, s, u, a;
					return re(this, function (c) {
						switch (c.label) {
							case 0:
								(i = 'readonly' === e),
									(o = 0),
									(s = function () {
										var e, s, a, c, h;
										return re(this, function (f) {
											switch (f.label) {
												case 0:
													++o, (f.label = 1);
												case 1:
													return f.trys.push([1, 4, , 5]), [4, u.Wn(t)];
												case 2:
													return (
														(u.db = f.sent()),
														(e = mh.open(u.db, t, i ? 'readonly' : 'readwrite', n)),
														(s = r(e)
															.catch(function (t) {
																return e.abort(t), ph.reject(t);
															})
															.Fn()),
														(a = {}),
														s.catch(function () {}),
														[4, e.Gn]
													);
												case 3:
													return [2, ((a.value = (f.sent(), s)), a)];
												case 4:
													return (
														(c = f.sent()),
														(h = 'FirebaseError' !== c.name && o < 3),
														hs(
															'SimpleDb',
															'Transaction failed with error:',
															c.message,
															'Retrying:',
															h
														),
														u.close(),
														h ? [3, 5] : [2, { value: Promise.reject(c) }]
													);
												case 5:
													return [2];
											}
										});
									}),
									(u = this),
									(c.label = 1);
							case 1:
								return [5, s()];
							case 2:
								if ('object' == typeof (a = c.sent())) return [2, a.value];
								c.label = 3;
							case 3:
								return [3, 1];
							case 4:
								return [2];
						}
					});
				});
			}),
			(t.prototype.close = function () {
				this.db && this.db.close(), (this.db = void 0);
			}),
			t
		);
	})(),
	vh = (function () {
		function t(t) {
			(this.zn = t), (this.Hn = !1), (this.Yn = null);
		}
		return (
			Object.defineProperty(t.prototype, 'Sn', {
				get: function () {
					return this.Hn;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'Jn', {
				get: function () {
					return this.Yn;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'cursor', {
				set: function (t) {
					this.zn = t;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.done = function () {
				this.Hn = !0;
			}),
			(t.prototype.Xn = function (t) {
				this.Yn = t;
			}),
			(t.prototype.delete = function () {
				return wh(this.zn.delete());
			}),
			t
		);
	})(),
	yh = (function (t) {
		function e(e, n) {
			var r = this;
			return (
				((r =
					t.call(this, ss.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) ||
					this).name = 'IndexedDbTransactionError'),
				r
			);
		}
		return te(e, t), e;
	})(us);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gh(t) {
	return 'IndexedDbTransactionError' === t.name;
}
var mh = (function () {
		function t(t, e) {
			var n = this;
			(this.action = t),
				(this.transaction = e),
				(this.aborted = !1),
				(this.Zn = new fh()),
				(this.transaction.oncomplete = function () {
					n.Zn.resolve();
				}),
				(this.transaction.onabort = function () {
					e.error ? n.Zn.reject(new yh(t, e.error)) : n.Zn.resolve();
				}),
				(this.transaction.onerror = function (e) {
					var r = Ih(e.target.error);
					n.Zn.reject(new yh(t, r));
				});
		}
		return (
			(t.open = function (e, n, r, i) {
				try {
					return new t(n, e.transaction(i, r));
				} catch (o) {
					throw new yh(n, o);
				}
			}),
			Object.defineProperty(t.prototype, 'Gn', {
				get: function () {
					return this.Zn.promise;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.abort = function (t) {
				t && this.Zn.reject(t),
					this.aborted ||
						(hs('SimpleDb', 'Aborting transaction:', t ? t.message : 'Client-initiated abort'),
						(this.aborted = !0),
						this.transaction.abort());
			}),
			(t.prototype.store = function (t) {
				var e = this.transaction.objectStore(t);
				return new bh(e);
			}),
			t
		);
	})(),
	bh = (function () {
		function t(t) {
			this.store = t;
		}
		return (
			(t.prototype.put = function (t, e) {
				var n;
				return (
					void 0 !== e
						? (hs('SimpleDb', 'PUT', this.store.name, t, e), (n = this.store.put(e, t)))
						: (hs('SimpleDb', 'PUT', this.store.name, '<auto-key>', t), (n = this.store.put(t))),
					wh(n)
				);
			}),
			(t.prototype.add = function (t) {
				return hs('SimpleDb', 'ADD', this.store.name, t, t), wh(this.store.add(t));
			}),
			(t.prototype.get = function (t) {
				var e = this;
				return wh(this.store.get(t)).next(function (n) {
					return void 0 === n && (n = null), hs('SimpleDb', 'GET', e.store.name, t, n), n;
				});
			}),
			(t.prototype.delete = function (t) {
				return hs('SimpleDb', 'DELETE', this.store.name, t), wh(this.store.delete(t));
			}),
			(t.prototype.count = function () {
				return hs('SimpleDb', 'COUNT', this.store.name), wh(this.store.count());
			}),
			(t.prototype.ts = function (t, e) {
				var n = this.cursor(this.options(t, e)),
					r = [];
				return this.es(n, function (t, e) {
					r.push(e);
				}).next(function () {
					return r;
				});
			}),
			(t.prototype.ns = function (t, e) {
				hs('SimpleDb', 'DELETE ALL', this.store.name);
				var n = this.options(t, e);
				n.ss = !1;
				var r = this.cursor(n);
				return this.es(r, function (t, e, n) {
					return n.delete();
				});
			}),
			(t.prototype.rs = function (t, e) {
				var n;
				e ? (n = t) : ((n = {}), (e = t));
				var r = this.cursor(n);
				return this.es(r, e);
			}),
			(t.prototype.os = function (t) {
				var e = this.cursor({});
				return new ph(function (n, r) {
					(e.onerror = function (t) {
						var e = Ih(t.target.error);
						r(e);
					}),
						(e.onsuccess = function (e) {
							var r = e.target.result;
							r
								? t(r.primaryKey, r.value).next(function (t) {
										t ? r.continue() : n();
								  })
								: n();
						});
				});
			}),
			(t.prototype.es = function (t, e) {
				var n = [];
				return new ph(function (r, i) {
					(t.onerror = function (t) {
						i(t.target.error);
					}),
						(t.onsuccess = function (t) {
							var i = t.target.result;
							if (i) {
								var o = new vh(i),
									s = e(i.primaryKey, i.value, o);
								if (s instanceof ph) {
									var u = s.catch(function (t) {
										return o.done(), ph.reject(t);
									});
									n.push(u);
								}
								o.Sn ? r() : null === o.Jn ? i.continue() : i.continue(o.Jn);
							} else r();
						});
				}).next(function () {
					return ph.$n(n);
				});
			}),
			(t.prototype.options = function (t, e) {
				var n = void 0;
				return void 0 !== t && ('string' == typeof t ? (n = t) : (e = t)), { index: n, range: e };
			}),
			(t.prototype.cursor = function (t) {
				var e = 'next';
				if ((t.reverse && (e = 'prev'), t.index)) {
					var n = this.store.index(t.index);
					return t.ss ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
				}
				return this.store.openCursor(t.range, e);
			}),
			t
		);
	})();
function wh(t) {
	return new ph(function (e, n) {
		(t.onsuccess = function (t) {
			var n = t.target.result;
			e(n);
		}),
			(t.onerror = function (t) {
				var e = Ih(t.target.error);
				n(e);
			});
	});
}
var Eh = !1;
function Ih(t) {
	var e = dh.On(ce());
	if (e >= 12.2 && e < 13) {
		var n = 'An internal error was encountered in the Indexed Database server';
		if (t.message.indexOf(n) >= 0) {
			var r = new us(
				'internal',
				"IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
					n +
					"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
			);
			return (
				Eh ||
					((Eh = !0),
					setTimeout(function () {
						throw r;
					}, 0)),
				r
			);
		}
	}
	return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _h() {
	return 'undefined' != typeof window ? window : null;
}
function Th() {
	return 'undefined' != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ah = (function () {
		function t(t, e, n, r, i) {
			(this.cs = t),
				(this.dn = e),
				(this.us = n),
				(this.op = r),
				(this.hs = i),
				(this.ls = new fh()),
				(this.then = this.ls.promise.then.bind(this.ls.promise)),
				this.ls.promise.catch(function (t) {});
		}
		return (
			(t._s = function (e, n, r, i, o) {
				var s = new t(e, n, Date.now() + r, i, o);
				return s.start(r), s;
			}),
			(t.prototype.start = function (t) {
				var e = this;
				this.fs = setTimeout(function () {
					return e.ds();
				}, t);
			}),
			(t.prototype.pn = function () {
				return this.ds();
			}),
			(t.prototype.cancel = function (t) {
				null !== this.fs &&
					(this.clearTimeout(),
					this.ls.reject(new us(ss.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))));
			}),
			(t.prototype.ds = function () {
				var t = this;
				this.cs.ws(function () {
					return null !== t.fs
						? (t.clearTimeout(),
						  t.op().then(function (e) {
								return t.ls.resolve(e);
						  }))
						: Promise.resolve();
				});
			}),
			(t.prototype.clearTimeout = function () {
				null !== this.fs && (this.hs(this), clearTimeout(this.fs), (this.fs = null));
			}),
			t
		);
	})(),
	Nh = (function () {
		function t() {
			var t = this;
			(this.Ts = Promise.resolve()),
				(this.Es = []),
				(this.Is = !1),
				(this.As = []),
				(this.Rs = null),
				(this.gs = !1),
				(this.Ps = []),
				(this.ys = new lh(this, 'async_queue_retry')),
				(this.Vs = function () {
					var e = Th();
					e && hs('AsyncQueue', 'Visibility state changed to  ', e.visibilityState), t.ys.Vn();
				});
			var e = Th();
			e &&
				'function' == typeof e.addEventListener &&
				e.addEventListener('visibilitychange', this.Vs);
		}
		return (
			Object.defineProperty(t.prototype, 'ps', {
				get: function () {
					return this.Is;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.ws = function (t) {
				this.enqueue(t);
			}),
			(t.prototype.bs = function (t) {
				this.vs(), this.Ss(t);
			}),
			(t.prototype.Ds = function () {
				if (!this.Is) {
					this.Is = !0;
					var t = Th();
					t &&
						'function' == typeof t.removeEventListener &&
						t.removeEventListener('visibilitychange', this.Vs);
				}
			}),
			(t.prototype.enqueue = function (t) {
				return this.vs(), this.Is ? new Promise(function (t) {}) : this.Ss(t);
			}),
			(t.prototype.Cs = function (t) {
				var e = this;
				this.ws(function () {
					return e.Es.push(t), e.Ns();
				});
			}),
			(t.prototype.Ns = function () {
				return ne(this, void 0, void 0, function () {
					var t,
						e = this;
					return re(this, function (n) {
						switch (n.label) {
							case 0:
								if (0 === this.Es.length) return [3, 5];
								n.label = 1;
							case 1:
								return n.trys.push([1, 3, , 4]), [4, this.Es[0]()];
							case 2:
								return n.sent(), this.Es.shift(), this.ys.reset(), [3, 4];
							case 3:
								if (!gh((t = n.sent()))) throw t;
								return hs('AsyncQueue', 'Operation failed with retryable error: ' + t), [3, 4];
							case 4:
								this.Es.length > 0 &&
									this.ys.gn(function () {
										return e.Ns();
									}),
									(n.label = 5);
							case 5:
								return [2];
						}
					});
				});
			}),
			(t.prototype.Ss = function (t) {
				var e = this,
					n = this.Ts.then(function () {
						return (
							(e.gs = !0),
							t()
								.catch(function (t) {
									throw (
										((e.Rs = t),
										(e.gs = !1),
										fs(
											'INTERNAL UNHANDLED ERROR: ',
											((r = (n = t).message || ''),
											n.stack &&
												(r = n.stack.includes(n.message) ? n.stack : n.message + '\n' + n.stack),
											r)
										),
										t)
									);
									var n, r;
								})
								.then(function (t) {
									return (e.gs = !1), t;
								})
						);
					});
				return (this.Ts = n), n;
			}),
			(t.prototype.yn = function (t, e, n) {
				var r = this;
				this.vs(), this.Ps.indexOf(t) > -1 && (e = 0);
				var i = Ah._s(this, t, e, n, function (t) {
					return r.Fs(t);
				});
				return this.As.push(i), i;
			}),
			(t.prototype.vs = function () {
				this.Rs && ds();
			}),
			(t.prototype.xs = function () {}),
			(t.prototype.$s = function () {
				return ne(this, void 0, void 0, function () {
					var t;
					return re(this, function (e) {
						switch (e.label) {
							case 0:
								return [4, (t = this.Ts)];
							case 1:
								e.sent(), (e.label = 2);
							case 2:
								if (t !== this.Ts) return [3, 0];
								e.label = 3;
							case 3:
								return [2];
						}
					});
				});
			}),
			(t.prototype.ks = function (t) {
				for (var e = 0, n = this.As; e < n.length; e++) if (n[e].dn === t) return !0;
				return !1;
			}),
			(t.prototype.Ms = function (t) {
				var e = this;
				return this.$s().then(function () {
					e.As.sort(function (t, e) {
						return t.us - e.us;
					});
					for (var n = 0, r = e.As; n < r.length; n++) {
						var i = r[n];
						if ((i.pn(), 'all' !== t && i.dn === t)) break;
					}
					return e.$s();
				});
			}),
			(t.prototype.Os = function (t) {
				this.Ps.push(t);
			}),
			(t.prototype.Fs = function (t) {
				var e = this.As.indexOf(t);
				this.As.splice(e, 1);
			}),
			t
		);
	})();
function Sh(t, e) {
	if ((fs('AsyncQueue', e + ': ' + t), gh(t))) return new us(ss.UNAVAILABLE, e + ': ' + t);
	throw t;
}
var Dh = function () {
		(this.Ls = void 0), (this.listeners = []);
	},
	kh = function () {
		(this.Bs = new nu(function (t) {
			return Hc(t);
		}, zc)),
			(this.onlineState = 'Unknown'),
			(this.qs = new Set());
	};
function xh(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i, o, s, u, a;
		return re(this, function (c) {
			switch (c.label) {
				case 0:
					if (
						((n = ys(t)),
						(r = e.query),
						(i = !1),
						(o = n.Bs.get(r)) || ((i = !0), (o = new Dh())),
						!i)
					)
						return [3, 4];
					c.label = 1;
				case 1:
					return c.trys.push([1, 3, , 4]), (s = o), [4, n.Us(r)];
				case 2:
					return (s.Ls = c.sent()), [3, 4];
				case 3:
					return (
						(u = c.sent()),
						(a = Sh(u, "Initialization of query '" + $c(e.query) + "' failed")),
						[2, void e.onError(a)]
					);
				case 4:
					return (
						n.Bs.set(r, o),
						o.listeners.push(e),
						e.Qs(n.onlineState),
						o.Ls && e.Ws(o.Ls) && Ch(n),
						[2]
					);
			}
		});
	});
}
function Oh(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i, o, s;
		return re(this, function (u) {
			return (
				(n = ys(t)),
				(r = e.query),
				(i = !1),
				(o = n.Bs.get(r)) &&
					(s = o.listeners.indexOf(e)) >= 0 &&
					(o.listeners.splice(s, 1), (i = 0 === o.listeners.length)),
				i ? [2, (n.Bs.delete(r), n.js(r))] : [2]
			);
		});
	});
}
function Lh(t, e) {
	for (var n = ys(t), r = !1, i = 0, o = e; i < o.length; i++) {
		var s = o[i],
			u = s.query,
			a = n.Bs.get(u);
		if (a) {
			for (var c = 0, h = a.listeners; c < h.length; c++) h[c].Ws(s) && (r = !0);
			a.Ls = s;
		}
	}
	r && Ch(n);
}
function Ph(t, e, n) {
	var r = ys(t),
		i = r.Bs.get(e);
	if (i) for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
	r.Bs.delete(e);
}
function Ch(t) {
	t.qs.forEach(function (t) {
		t.next();
	});
}
var Rh = (function () {
		function t(t, e, n) {
			(this.query = t),
				(this.Ks = e),
				(this.Gs = !1),
				(this.zs = null),
				(this.onlineState = 'Unknown'),
				(this.options = n || {});
		}
		return (
			(t.prototype.Ws = function (t) {
				if (!this.options.includeMetadataChanges) {
					for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
						var i = r[n];
						3 !== i.type && e.push(i);
					}
					t = new Uu(t.query, t.docs, t.Qt, e, t.Wt, t.fromCache, t.jt, !0);
				}
				var o = !1;
				return (
					this.Gs
						? this.Hs(t) && (this.Ks.next(t), (o = !0))
						: this.Ys(t, this.onlineState) && (this.Js(t), (o = !0)),
					(this.zs = t),
					o
				);
			}),
			(t.prototype.onError = function (t) {
				this.Ks.error(t);
			}),
			(t.prototype.Qs = function (t) {
				this.onlineState = t;
				var e = !1;
				return this.zs && !this.Gs && this.Ys(this.zs, t) && (this.Js(this.zs), (e = !0)), e;
			}),
			(t.prototype.Ys = function (t, e) {
				if (!t.fromCache) return !0;
				var n = 'Offline' !== e;
				return !((this.options.Xs && n) || (t.docs.m() && 'Offline' !== e));
			}),
			(t.prototype.Hs = function (t) {
				if (t.docChanges.length > 0) return !0;
				var e = this.zs && this.zs.hasPendingWrites !== t.hasPendingWrites;
				return !(!t.jt && !e) && !0 === this.options.includeMetadataChanges;
			}),
			(t.prototype.Js = function (t) {
				(t = Uu.Gt(t.query, t.docs, t.Wt, t.fromCache)), (this.Gs = !0), this.Ks.next(t);
			}),
			t
		);
	})(),
	Uh = (function () {
		function t(t) {
			this.uid = t;
		}
		return (
			(t.prototype.Zs = function () {
				return null != this.uid;
			}),
			(t.prototype.ti = function () {
				return this.Zs() ? 'uid:' + this.uid : 'anonymous-user';
			}),
			(t.prototype.isEqual = function (t) {
				return t.uid === this.uid;
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (Uh.UNAUTHENTICATED = new Uh(null)),
	(Uh.ei = new Uh('google-credentials-uid')),
	(Uh.ni = new Uh('first-party-uid'));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jh = (function () {
	function t(t, e) {
		var n = this;
		(this.previousValue = t),
			e &&
				((e.si = function (t) {
					return n.ii(t);
				}),
				(this.ri = function (t) {
					return e.oi(t);
				}));
	}
	return (
		(t.prototype.ii = function (t) {
			return (this.previousValue = Math.max(t, this.previousValue)), this.previousValue;
		}),
		(t.prototype.next = function () {
			var t = ++this.previousValue;
			return this.ri && this.ri(t), t;
		}),
		t
	);
})();
function Fh(t, e) {
	return 'firestore_clients_' + t + '_' + e;
}
function Mh(t, e, n) {
	var r = 'firestore_mutations_' + t + '_' + n;
	return e.Zs() && (r += '_' + e.uid), r;
}
function Vh(t, e) {
	return 'firestore_targets_' + t + '_' + e;
}
jh.ai = -1;
var qh = (function () {
		function t(t, e, n, r) {
			(this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
		}
		return (
			(t.ci = function (e, n, r) {
				var i = JSON.parse(r),
					o =
						'object' == typeof i &&
						-1 !== ['pending', 'acknowledged', 'rejected'].indexOf(i.state) &&
						(void 0 === i.error || 'object' == typeof i.error),
					s = void 0;
				return (
					o &&
						i.error &&
						(o = 'string' == typeof i.error.message && 'string' == typeof i.error.code) &&
						(s = new us(i.error.code, i.error.message)),
					o
						? new t(e, n, i.state, s)
						: (fs('SharedClientState', "Failed to parse mutation state for ID '" + n + "': " + r),
						  null)
				);
			}),
			(t.prototype.ui = function () {
				var t = { state: this.state, updateTimeMs: Date.now() };
				return (
					this.error && (t.error = { code: this.error.code, message: this.error.message }),
					JSON.stringify(t)
				);
			}),
			t
		);
	})(),
	Bh = (function () {
		function t(t, e, n) {
			(this.targetId = t), (this.state = e), (this.error = n);
		}
		return (
			(t.ci = function (e, n) {
				var r = JSON.parse(n),
					i =
						'object' == typeof r &&
						-1 !== ['not-current', 'current', 'rejected'].indexOf(r.state) &&
						(void 0 === r.error || 'object' == typeof r.error),
					o = void 0;
				return (
					i &&
						r.error &&
						(i = 'string' == typeof r.error.message && 'string' == typeof r.error.code) &&
						(o = new us(r.error.code, r.error.message)),
					i
						? new t(e, r.state, o)
						: (fs('SharedClientState', "Failed to parse target state for ID '" + e + "': " + n),
						  null)
				);
			}),
			(t.prototype.ui = function () {
				var t = { state: this.state, updateTimeMs: Date.now() };
				return (
					this.error && (t.error = { code: this.error.code, message: this.error.message }),
					JSON.stringify(t)
				);
			}),
			t
		);
	})(),
	Gh = (function () {
		function t(t, e) {
			(this.clientId = t), (this.activeTargetIds = e);
		}
		return (
			(t.ci = function (e, n) {
				for (
					var r = JSON.parse(n),
						i = 'object' == typeof r && r.activeTargetIds instanceof Array,
						o = Pu(),
						s = 0;
					i && s < r.activeTargetIds.length;
					++s
				)
					(i = uu(r.activeTargetIds[s])), (o = o.add(r.activeTargetIds[s]));
				return i
					? new t(e, o)
					: (fs('SharedClientState', "Failed to parse client data for instance '" + e + "': " + n),
					  null);
			}),
			t
		);
	})(),
	zh = (function () {
		function t(t, e) {
			(this.clientId = t), (this.onlineState = e);
		}
		return (
			(t.ci = function (e) {
				var n = JSON.parse(e);
				return 'object' == typeof n &&
					-1 !== ['Unknown', 'Online', 'Offline'].indexOf(n.onlineState) &&
					'string' == typeof n.clientId
					? new t(n.clientId, n.onlineState)
					: (fs('SharedClientState', 'Failed to parse online state: ' + e), null);
			}),
			t
		);
	})(),
	Hh = (function () {
		function t() {
			this.activeTargetIds = Pu();
		}
		return (
			(t.prototype.hi = function (t) {
				this.activeTargetIds = this.activeTargetIds.add(t);
			}),
			(t.prototype.li = function (t) {
				this.activeTargetIds = this.activeTargetIds.delete(t);
			}),
			(t.prototype.ui = function () {
				var t = { activeTargetIds: this.activeTargetIds.A(), updateTimeMs: Date.now() };
				return JSON.stringify(t);
			}),
			t
		);
	})(),
	$h = (function () {
		function t(t, e, n, r, i) {
			(this.window = t),
				(this.fn = e),
				(this.persistenceKey = n),
				(this._i = r),
				(this.fi = null),
				(this.di = null),
				(this.si = null),
				(this.wi = this.mi.bind(this)),
				(this.Ti = new bu($s)),
				(this.Ei = !1),
				(this.Ii = []);
			var o = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			(this.storage = this.window.localStorage),
				(this.currentUser = i),
				(this.Ai = Fh(this.persistenceKey, this._i)),
				(this.Ri = 'firestore_sequence_number_' + this.persistenceKey),
				(this.Ti = this.Ti.ot(this._i, new Hh())),
				(this.gi = new RegExp('^firestore_clients_' + o + '_([^_]*)$')),
				(this.Pi = new RegExp('^firestore_mutations_' + o + '_(\\d+)(?:_(.*))?$')),
				(this.yi = new RegExp('^firestore_targets_' + o + '_(\\d+)$')),
				(this.Vi = (function (t) {
					return 'firestore_online_state_' + t;
				})(this.persistenceKey)),
				this.window.addEventListener('storage', this.wi);
		}
		return (
			(t.Ln = function (t) {
				return !(!t || !t.localStorage);
			}),
			(t.prototype.start = function () {
				return ne(this, void 0, void 0, function () {
					var t,
						e,
						n,
						r,
						i,
						o,
						s,
						u,
						a,
						c,
						h,
						f = this;
					return re(this, function (l) {
						switch (l.label) {
							case 0:
								return [4, this.fi.pi()];
							case 1:
								for (t = l.sent(), e = 0, n = t; e < n.length; e++)
									(r = n[e]) !== this._i &&
										(i = this.getItem(Fh(this.persistenceKey, r))) &&
										(o = Gh.ci(r, i)) &&
										(this.Ti = this.Ti.ot(o.clientId, o));
								for (
									this.bi(),
										(s = this.storage.getItem(this.Vi)) && (u = this.vi(s)) && this.Si(u),
										a = 0,
										c = this.Ii;
									a < c.length;
									a++
								)
									(h = c[a]), this.mi(h);
								return (
									(this.Ii = []),
									this.window.addEventListener('unload', function () {
										return f.Di();
									}),
									(this.Ei = !0),
									[2]
								);
						}
					});
				});
			}),
			(t.prototype.oi = function (t) {
				this.setItem(this.Ri, JSON.stringify(t));
			}),
			(t.prototype.Ci = function () {
				return this.Ni(this.Ti);
			}),
			(t.prototype.Fi = function (t) {
				var e = !1;
				return (
					this.Ti.forEach(function (n, r) {
						r.activeTargetIds.has(t) && (e = !0);
					}),
					e
				);
			}),
			(t.prototype.xi = function (t) {
				this.$i(t, 'pending');
			}),
			(t.prototype.ki = function (t, e, n) {
				this.$i(t, e, n), this.Mi(t);
			}),
			(t.prototype.Oi = function (t) {
				var e = 'not-current';
				if (this.Fi(t)) {
					var n = this.storage.getItem(Vh(this.persistenceKey, t));
					if (n) {
						var r = Bh.ci(t, n);
						r && (e = r.state);
					}
				}
				return this.Li.hi(t), this.bi(), e;
			}),
			(t.prototype.Bi = function (t) {
				this.Li.li(t), this.bi();
			}),
			(t.prototype.qi = function (t) {
				return this.Li.activeTargetIds.has(t);
			}),
			(t.prototype.Ui = function (t) {
				this.removeItem(Vh(this.persistenceKey, t));
			}),
			(t.prototype.Qi = function (t, e, n) {
				this.Wi(t, e, n);
			}),
			(t.prototype.ji = function (t, e, n) {
				var r = this;
				e.forEach(function (t) {
					r.Mi(t);
				}),
					(this.currentUser = t),
					n.forEach(function (t) {
						r.xi(t);
					});
			}),
			(t.prototype.Ki = function (t) {
				this.Gi(t);
			}),
			(t.prototype.Di = function () {
				this.Ei &&
					(this.window.removeEventListener('storage', this.wi),
					this.removeItem(this.Ai),
					(this.Ei = !1));
			}),
			(t.prototype.getItem = function (t) {
				var e = this.storage.getItem(t);
				return hs('SharedClientState', 'READ', t, e), e;
			}),
			(t.prototype.setItem = function (t, e) {
				hs('SharedClientState', 'SET', t, e), this.storage.setItem(t, e);
			}),
			(t.prototype.removeItem = function (t) {
				hs('SharedClientState', 'REMOVE', t), this.storage.removeItem(t);
			}),
			(t.prototype.mi = function (t) {
				var e = this,
					n = t;
				if (n.storageArea === this.storage) {
					if ((hs('SharedClientState', 'EVENT', n.key, n.newValue), n.key === this.Ai))
						return void fs(
							'Received WebStorage notification for local change. Another client might have garbage-collected our state'
						);
					this.fn.Cs(function () {
						return ne(e, void 0, void 0, function () {
							var t, e, r, i, o, s;
							return re(this, function (u) {
								if (this.Ei) {
									if (null !== n.key)
										if (this.gi.test(n.key)) {
											if (null == n.newValue) return (t = this.zi(n.key)), [2, this.Hi(t, null)];
											if ((e = this.Yi(n.key, n.newValue))) return [2, this.Hi(e.clientId, e)];
										} else if (this.Pi.test(n.key)) {
											if (null !== n.newValue && (r = this.Ji(n.key, n.newValue)))
												return [2, this.Xi(r)];
										} else if (this.yi.test(n.key)) {
											if (null !== n.newValue && (i = this.Zi(n.key, n.newValue)))
												return [2, this.tr(i)];
										} else if (n.key === this.Vi) {
											if (null !== n.newValue && (o = this.vi(n.newValue))) return [2, this.Si(o)];
										} else
											n.key === this.Ri &&
												(s = (function (t) {
													var e = jh.ai;
													if (null != t)
														try {
															var n = JSON.parse(t);
															vs('number' == typeof n), (e = n);
														} catch (r) {
															fs(
																'SharedClientState',
																'Failed to read sequence number from WebStorage',
																r
															);
														}
													return e;
												})(n.newValue)) !== jh.ai &&
												this.si(s);
								} else this.Ii.push(n);
								return [2];
							});
						});
					});
				}
			}),
			Object.defineProperty(t.prototype, 'Li', {
				get: function () {
					return this.Ti.get(this._i);
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.bi = function () {
				this.setItem(this.Ai, this.Li.ui());
			}),
			(t.prototype.$i = function (t, e, n) {
				var r = new qh(this.currentUser, t, e, n),
					i = Mh(this.persistenceKey, this.currentUser, t);
				this.setItem(i, r.ui());
			}),
			(t.prototype.Mi = function (t) {
				var e = Mh(this.persistenceKey, this.currentUser, t);
				this.removeItem(e);
			}),
			(t.prototype.Gi = function (t) {
				var e = { clientId: this._i, onlineState: t };
				this.storage.setItem(this.Vi, JSON.stringify(e));
			}),
			(t.prototype.Wi = function (t, e, n) {
				var r = Vh(this.persistenceKey, t),
					i = new Bh(t, e, n);
				this.setItem(r, i.ui());
			}),
			(t.prototype.zi = function (t) {
				var e = this.gi.exec(t);
				return e ? e[1] : null;
			}),
			(t.prototype.Yi = function (t, e) {
				var n = this.zi(t);
				return Gh.ci(n, e);
			}),
			(t.prototype.Ji = function (t, e) {
				var n = this.Pi.exec(t),
					r = Number(n[1]),
					i = void 0 !== n[2] ? n[2] : null;
				return qh.ci(new Uh(i), r, e);
			}),
			(t.prototype.Zi = function (t, e) {
				var n = this.yi.exec(t),
					r = Number(n[1]);
				return Bh.ci(r, e);
			}),
			(t.prototype.vi = function (t) {
				return zh.ci(t);
			}),
			(t.prototype.Xi = function (t) {
				return ne(this, void 0, void 0, function () {
					return re(this, function (e) {
						return t.user.uid === this.currentUser.uid
							? [2, this.fi.er(t.batchId, t.state, t.error)]
							: (hs('SharedClientState', 'Ignoring mutation for non-active user ' + t.user.uid),
							  [2]);
					});
				});
			}),
			(t.prototype.tr = function (t) {
				return this.fi.nr(t.targetId, t.state, t.error);
			}),
			(t.prototype.Hi = function (t, e) {
				var n = this,
					r = e ? this.Ti.ot(t, e) : this.Ti.remove(t),
					i = this.Ni(this.Ti),
					o = this.Ni(r),
					s = [],
					u = [];
				return (
					o.forEach(function (t) {
						i.has(t) || s.push(t);
					}),
					i.forEach(function (t) {
						o.has(t) || u.push(t);
					}),
					this.fi.sr(s, u).then(function () {
						n.Ti = r;
					})
				);
			}),
			(t.prototype.Si = function (t) {
				this.Ti.get(t.clientId) && this.di(t.onlineState);
			}),
			(t.prototype.Ni = function (t) {
				var e = Pu();
				return (
					t.forEach(function (t, n) {
						e = e.kt(n.activeTargetIds);
					}),
					e
				);
			}),
			t
		);
	})(),
	Kh = (function () {
		function t() {
			(this.ir = new Hh()), (this.rr = {}), (this.di = null), (this.si = null);
		}
		return (
			(t.prototype.xi = function (t) {}),
			(t.prototype.ki = function (t, e, n) {}),
			(t.prototype.Oi = function (t) {
				return this.ir.hi(t), this.rr[t] || 'not-current';
			}),
			(t.prototype.Qi = function (t, e, n) {
				this.rr[t] = e;
			}),
			(t.prototype.Bi = function (t) {
				this.ir.li(t);
			}),
			(t.prototype.qi = function (t) {
				return this.ir.activeTargetIds.has(t);
			}),
			(t.prototype.Ui = function (t) {
				delete this.rr[t];
			}),
			(t.prototype.Ci = function () {
				return this.ir.activeTargetIds;
			}),
			(t.prototype.Fi = function (t) {
				return this.ir.activeTargetIds.has(t);
			}),
			(t.prototype.start = function () {
				return (this.ir = new Hh()), Promise.resolve();
			}),
			(t.prototype.ji = function (t, e, n) {}),
			(t.prototype.Ki = function (t) {}),
			(t.prototype.Di = function () {}),
			(t.prototype.oi = function (t) {}),
			t
		);
	})(),
	Wh = (function () {
		function t(t, e, n, r) {
			(this.batchId = t), (this.ar = e), (this.baseMutations = n), (this.mutations = r);
		}
		return (
			(t.prototype.cr = function (t, e, n) {
				for (var r = n.ur, i = 0; i < this.mutations.length; i++) {
					var o = this.mutations[i];
					o.key.isEqual(t) && (e = fc(o, e, r[i]));
				}
				return e;
			}),
			(t.prototype.hr = function (t, e) {
				for (var n = 0, r = this.baseMutations; n < r.length; n++) {
					var i = r[n];
					i.key.isEqual(t) && (e = lc(i, e, e, this.ar));
				}
				for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
					var a = u[s];
					a.key.isEqual(t) && (e = lc(a, e, o, this.ar));
				}
				return e;
			}),
			(t.prototype.lr = function (t) {
				var e = this,
					n = t;
				return (
					this.mutations.forEach(function (r) {
						var i = e.hr(r.key, t.get(r.key));
						i && (n = n.ot(r.key, i));
					}),
					n
				);
			}),
			(t.prototype.keys = function () {
				return this.mutations.reduce(function (t, e) {
					return t.add(e.key);
				}, Ou());
			}),
			(t.prototype.isEqual = function (t) {
				return (
					this.batchId === t.batchId &&
					Ks(this.mutations, t.mutations, function (t, e) {
						return dc(t, e);
					}) &&
					Ks(this.baseMutations, t.baseMutations, function (t, e) {
						return dc(t, e);
					})
				);
			}),
			t
		);
	})(),
	Qh = (function () {
		function t(t, e, n, r) {
			(this.batch = t), (this._r = e), (this.ur = n), (this.dr = r);
		}
		return (
			(t.from = function (e, n, r) {
				vs(e.mutations.length === r.length);
				for (var i = ku, o = e.mutations, s = 0; s < o.length; s++)
					i = i.ot(o[s].key, r[s].version);
				return new t(e, n, r, i);
			}),
			t
		);
	})(),
	Xh = (function () {
		function t() {
			(this.wr = new nu(
				function (t) {
					return t.toString();
				},
				function (t, e) {
					return t.isEqual(e);
				}
			)),
				(this.mr = !1);
		}
		return (
			Object.defineProperty(t.prototype, 'readTime', {
				get: function () {
					return this.Tr;
				},
				set: function (t) {
					this.Tr = t;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.Er = function (t, e) {
				this.Ir(), (this.readTime = e), this.wr.set(t.key, t);
			}),
			(t.prototype.Ar = function (t, e) {
				this.Ir(), e && (this.readTime = e), this.wr.set(t, null);
			}),
			(t.prototype.Rr = function (t, e) {
				this.Ir();
				var n = this.wr.get(e);
				return void 0 !== n ? ph.resolve(n) : this.gr(t, e);
			}),
			(t.prototype.getEntries = function (t, e) {
				return this.Pr(t, e);
			}),
			(t.prototype.apply = function (t) {
				return this.Ir(), (this.mr = !0), this.yr(t);
			}),
			(t.prototype.Ir = function () {}),
			t
		);
	})(),
	Yh =
		'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.',
	Jh = (function () {
		function t() {
			this.Vr = [];
		}
		return (
			(t.prototype.pr = function (t) {
				this.Vr.push(t);
			}),
			(t.prototype.br = function () {
				this.Vr.forEach(function (t) {
					return t();
				});
			}),
			t
		);
	})(),
	Zh = (function () {
		function t(t, e, n) {
			(this.vr = t), (this.Sr = e), (this.Dr = n);
		}
		return (
			(t.prototype.Cr = function (t, e) {
				var n = this;
				return this.Sr.Nr(t, e).next(function (r) {
					return n.Fr(t, e, r);
				});
			}),
			(t.prototype.Fr = function (t, e, n) {
				return this.vr.Rr(t, e).next(function (t) {
					for (var r = 0, i = n; r < i.length; r++) t = i[r].hr(e, t);
					return t;
				});
			}),
			(t.prototype.$r = function (t, e, n) {
				var r = Nu();
				return (
					e.forEach(function (t, e) {
						for (var i = 0, o = n; i < o.length; i++) e = o[i].hr(t, e);
						r = r.ot(t, e);
					}),
					r
				);
			}),
			(t.prototype.kr = function (t, e) {
				var n = this;
				return this.vr.getEntries(t, e).next(function (e) {
					return n.Mr(t, e);
				});
			}),
			(t.prototype.Mr = function (t, e) {
				var n = this;
				return this.Sr.Or(t, e).next(function (r) {
					var i = n.$r(t, e, r),
						o = Au();
					return (
						i.forEach(function (t, e) {
							e || (e = new kc(t, iu.min())), (o = o.ot(t, e));
						}),
						o
					);
				});
			}),
			(t.prototype.Lr = function (t, e, n) {
				return (
					(r = e),
					Ts.F(r.path) && null === r.collectionGroup && 0 === r.filters.length
						? this.Br(t, e.path)
						: Fc(e)
						? this.qr(t, e, n)
						: this.Ur(t, e, n)
				);
				var r;
			}),
			(t.prototype.Br = function (t, e) {
				return this.Cr(t, new Ts(e)).next(function (t) {
					var e = Du();
					return t instanceof Dc && (e = e.ot(t.key, t)), e;
				});
			}),
			(t.prototype.qr = function (t, e, n) {
				var r = this,
					i = e.collectionGroup,
					o = Du();
				return this.Dr.Qr(t, i).next(function (s) {
					return ph
						.forEach(s, function (s) {
							var u,
								a,
								c =
									((u = e),
									(a = s.child(i)),
									new Oc(
										a,
										null,
										u.on.slice(),
										u.filters.slice(),
										u.limit,
										u.an,
										u.startAt,
										u.endAt
									));
							return r.Ur(t, c, n).next(function (t) {
								t.forEach(function (t, e) {
									o = o.ot(t, e);
								});
							});
						})
						.next(function () {
							return o;
						});
				});
			}),
			(t.prototype.Ur = function (t, e, n) {
				var r,
					i,
					o = this;
				return this.vr
					.Lr(t, e, n)
					.next(function (n) {
						return (r = n), o.Sr.Wr(t, e);
					})
					.next(function (e) {
						return (
							(i = e),
							o.jr(t, i, r).next(function (t) {
								r = t;
								for (var e = 0, n = i; e < n.length; e++)
									for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
										var a = u[s],
											c = a.key,
											h = r.get(c),
											f = lc(a, h, h, o.ar);
										r = f instanceof Dc ? r.ot(c, f) : r.remove(c);
									}
							})
						);
					})
					.next(function () {
						return (
							r.forEach(function (t, n) {
								Kc(e, n) || (r = r.remove(t));
							}),
							r
						);
					});
			}),
			(t.prototype.jr = function (t, e, n) {
				for (var r = Ou(), i = 0, o = e; i < o.length; i++)
					for (var s = 0, u = o[i].mutations; s < u.length; s++) {
						var a = u[s];
						a instanceof gc && null === n.get(a.key) && (r = r.add(a.key));
					}
				var c = n;
				return this.vr.getEntries(t, r).next(function (t) {
					return (
						t.forEach(function (t, e) {
							null !== e && e instanceof Dc && (c = c.ot(t, e));
						}),
						c
					);
				});
			}),
			t
		);
	})(),
	tf = (function () {
		function t(t, e, n, r) {
			(this.targetId = t), (this.fromCache = e), (this.Kr = n), (this.Gr = r);
		}
		return (
			(t.zr = function (e, n) {
				for (var r = Ou(), i = Ou(), o = 0, s = n.docChanges; o < s.length; o++) {
					var u = s[o];
					switch (u.type) {
						case 0:
							r = r.add(u.doc.key);
							break;
						case 1:
							i = i.add(u.doc.key);
					}
				}
				return new t(e, n.fromCache, r, i);
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ef(t, e) {
	var n = t[0],
		r = t[1],
		i = e[0],
		o = e[1],
		s = $s(n, i);
	return 0 === s ? $s(r, o) : s;
}
var nf = (function () {
		function t(t) {
			(this.Hr = t), (this.buffer = new Iu(ef)), (this.Yr = 0);
		}
		return (
			(t.prototype.Jr = function () {
				return ++this.Yr;
			}),
			(t.prototype.Xr = function (t) {
				var e = [t, this.Jr()];
				if (this.buffer.size < this.Hr) this.buffer = this.buffer.add(e);
				else {
					var n = this.buffer.last();
					ef(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
				}
			}),
			Object.defineProperty(t.prototype, 'maxValue', {
				get: function () {
					return this.buffer.last()[0];
				},
				enumerable: !1,
				configurable: !0
			}),
			t
		);
	})(),
	rf = { Zr: !1, eo: 0, no: 0, so: 0 },
	of = (function () {
		function t(t, e, n) {
			(this.io = t), (this.ro = e), (this.oo = n);
		}
		return (
			(t.ao = function (e) {
				return new t(e, t.co, t.uo);
			}),
			t
		);
	})();
(of.ho = -1),
	(of.lo = 1048576),
	(of._o = 41943040),
	(of.co = 10),
	(of.uo = 1e3),
	(of.fo = new of(of._o, of.co, of.uo)),
	(of.do = new of(of.ho, 0, 0));
var sf = (function () {
		function t(t, e) {
			(this.wo = t), (this.cs = e), (this.mo = !1), (this.To = null);
		}
		return (
			(t.prototype.start = function (t) {
				this.wo.params.io !== of.ho && this.Eo(t);
			}),
			(t.prototype.stop = function () {
				this.To && (this.To.cancel(), (this.To = null));
			}),
			Object.defineProperty(t.prototype, 'Ei', {
				get: function () {
					return null !== this.To;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.Eo = function (t) {
				var e = this,
					n = this.mo ? 3e5 : 6e4;
				hs('LruGarbageCollector', 'Garbage collection scheduled in ' + n + 'ms'),
					(this.To = this.cs.yn('lru_garbage_collection', n, function () {
						return ne(e, void 0, void 0, function () {
							var e;
							return re(this, function (n) {
								switch (n.label) {
									case 0:
										(this.To = null), (this.mo = !0), (n.label = 1);
									case 1:
										return n.trys.push([1, 3, , 7]), [4, t.Io(this.wo)];
									case 2:
										return n.sent(), [3, 7];
									case 3:
										return gh((e = n.sent()))
											? (hs(
													'LruGarbageCollector',
													'Ignoring IndexedDB error during garbage collection: ',
													e
											  ),
											  [3, 6])
											: [3, 4];
									case 4:
										return [4, Al(e)];
									case 5:
										n.sent(), (n.label = 6);
									case 6:
										return [3, 7];
									case 7:
										return [4, this.Eo(t)];
									case 8:
										return n.sent(), [2];
								}
							});
						});
					}));
			}),
			t
		);
	})(),
	uf = (function () {
		function t(t, e) {
			(this.Ao = t), (this.params = e);
		}
		return (
			(t.prototype.Ro = function (t, e) {
				return this.Ao.Po(t).next(function (t) {
					return Math.floor((e / 100) * t);
				});
			}),
			(t.prototype.yo = function (t, e) {
				var n = this;
				if (0 === e) return ph.resolve(jh.ai);
				var r = new nf(e);
				return this.Ao.Ce(t, function (t) {
					return r.Xr(t.sequenceNumber);
				})
					.next(function () {
						return n.Ao.Vo(t, function (t) {
							return r.Xr(t);
						});
					})
					.next(function () {
						return r.maxValue;
					});
			}),
			(t.prototype.po = function (t, e, n) {
				return this.Ao.po(t, e, n);
			}),
			(t.prototype.bo = function (t, e) {
				return this.Ao.bo(t, e);
			}),
			(t.prototype.vo = function (t, e) {
				var n = this;
				return this.params.io === of.ho
					? (hs('LruGarbageCollector', 'Garbage collection skipped; disabled'), ph.resolve(rf))
					: this.So(t).next(function (r) {
							return r < n.params.io
								? (hs(
										'LruGarbageCollector',
										'Garbage collection skipped; Cache size ' +
											r +
											' is lower than threshold ' +
											n.params.io
								  ),
								  rf)
								: n.Do(t, e);
					  });
			}),
			(t.prototype.So = function (t) {
				return this.Ao.So(t);
			}),
			(t.prototype.Do = function (t, e) {
				var n,
					r,
					i,
					o,
					s,
					u,
					a,
					c = this,
					h = Date.now();
				return this.Ro(t, this.params.ro)
					.next(function (e) {
						return (
							e > c.params.oo
								? (hs(
										'LruGarbageCollector',
										'Capping sequence numbers to collect down to the maximum of ' +
											c.params.oo +
											' from ' +
											e
								  ),
								  (r = c.params.oo))
								: (r = e),
							(o = Date.now()),
							c.yo(t, r)
						);
					})
					.next(function (r) {
						return (n = r), (s = Date.now()), c.po(t, n, e);
					})
					.next(function (e) {
						return (i = e), (u = Date.now()), c.bo(t, n);
					})
					.next(function (t) {
						return (
							(a = Date.now()),
							cs() <= ke.DEBUG &&
								hs(
									'LruGarbageCollector',
									'LRU Garbage Collection\n\tCounted targets in ' +
										(o - h) +
										'ms\n\tDetermined least recently used ' +
										r +
										' in ' +
										(s - o) +
										'ms\n\tRemoved ' +
										i +
										' targets in ' +
										(u - s) +
										'ms\n\tRemoved ' +
										t +
										' documents in ' +
										(a - u) +
										'ms\nTotal Duration: ' +
										(a - h) +
										'ms'
								),
							ph.resolve({ Zr: !0, eo: r, no: i, so: t })
						);
					});
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function af(t) {
	for (var e = '', n = 0; n < t.length; n++) e.length > 0 && (e = hf(e)), (e = cf(t.get(n), e));
	return hf(e);
}
function cf(t, e) {
	for (var n = e, r = t.length, i = 0; i < r; i++) {
		var o = t.charAt(i);
		switch (o) {
			case '\0':
				n += '';
				break;
			case '':
				n += '';
				break;
			default:
				n += o;
		}
	}
	return n;
}
function hf(t) {
	return t + '';
}
function ff(t) {
	var e = t.length;
	if ((vs(e >= 2), 2 === e)) return vs('' === t.charAt(0) && '' === t.charAt(1)), Es.P();
	for (var n = e - 2, r = [], i = '', o = 0; o < e; ) {
		var s = t.indexOf('', o);
		switch (((s < 0 || s > n) && ds(), t.charAt(s + 1))) {
			case '':
				var u = t.substring(o, s),
					a = void 0;
				0 === i.length ? (a = u) : ((a = i += u), (i = '')), r.push(a);
				break;
			case '':
				(i += t.substring(o, s)), (i += '\0');
				break;
			case '':
				i += t.substring(o, s + 1);
				break;
			default:
				ds();
		}
		o = s + 2;
	}
	return new Es(r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var lf = function (t) {
	this.Co = t;
};
function pf(t, e) {
	if (e.document)
		return (
			(n = t.Co),
			(r = e.document),
			(i = !!e.hasCommittedMutations),
			(o = Aa(n, r.name)),
			(s = Ea(r.updateTime)),
			(u = new Tc({ mapValue: { fields: r.fields } })),
			new Dc(o, s, u, { hasCommittedMutations: !!i })
		);
	var n, r, i, o, s, u;
	if (e.noDocument) {
		var a = Ts.$(e.noDocument.path),
			c = mf(e.noDocument.readTime);
		return new kc(a, c, { hasCommittedMutations: !!e.hasCommittedMutations });
	}
	if (e.unknownDocument) {
		var h = Ts.$(e.unknownDocument.path),
			f = mf(e.unknownDocument.version);
		return new xc(h, f);
	}
	return ds();
}
function df(t, e, n) {
	var r,
		i,
		o = vf(n),
		s = e.key.path.h().A();
	if (e instanceof Dc) {
		var u = {
				name: Ta((r = t.Co), (i = e).key),
				fields: i.rn().mapValue.fields,
				updateTime: ma(r, i.version.Z())
			},
			a = e.hasCommittedMutations;
		return new zf(null, null, u, a, o, s);
	}
	if (e instanceof kc) {
		var c = e.key.path.A(),
			h = gf(e.version),
			f = e.hasCommittedMutations;
		return new zf(null, new Bf(c, h), null, f, o, s);
	}
	if (e instanceof xc) {
		var l = e.key.path.A(),
			p = gf(e.version);
		return new zf(new Gf(l, p), null, null, !0, o, s);
	}
	return ds();
}
function vf(t) {
	var e = t.Z();
	return [e.seconds, e.nanoseconds];
}
function yf(t) {
	var e = new ru(t[0], t[1]);
	return iu.J(e);
}
function gf(t) {
	var e = t.Z();
	return new jf(e.seconds, e.nanoseconds);
}
function mf(t) {
	var e = new ru(t.seconds, t.nanoseconds);
	return iu.J(e);
}
function bf(t, e) {
	var n = (e.baseMutations || []).map(function (e) {
			return La(t.Co, e);
		}),
		r = e.mutations.map(function (e) {
			return La(t.Co, e);
		}),
		i = ru.fromMillis(e.localWriteTimeMs);
	return new Wh(e.batchId, i, n, r);
}
function wf(t) {
	var e,
		n,
		r = mf(t.readTime),
		i = void 0 !== t.lastLimboFreeSnapshotVersion ? mf(t.lastLimboFreeSnapshotVersion) : iu.min();
	return (
		void 0 !== t.query.documents
			? (vs(1 === (n = t.query).documents.length), (e = Vc(Pc(Sa(n.documents[0])))))
			: (e = Ra(t.query)),
		new vu(e, t.targetId, 0, t.lastListenSequenceNumber, r, i, Qs.fromBase64String(t.resumeToken))
	);
}
function Ef(t, e) {
	var n,
		r = gf(e.nt),
		i = gf(e.lastLimboFreeSnapshotVersion);
	n = lu(e.target) ? Pa(t.Co, e.target) : Ca(t.Co, e.target);
	var o = e.resumeToken.toBase64();
	return new $f(e.targetId, hu(e.target), r, o, e.sequenceNumber, i, n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var If = (function () {
	function t(t, e, n, r) {
		(this.userId = t), (this.serializer = e), (this.Dr = n), (this.No = r), (this.Fo = {});
	}
	return (
		(t.xo = function (e, n, r, i) {
			return vs('' !== e.uid), new t(e.Zs() ? e.uid : '', n, r, i);
		}),
		(t.prototype.$o = function (t) {
			var e = !0,
				n = IDBKeyRange.bound(
					[this.userId, Number.NEGATIVE_INFINITY],
					[this.userId, Number.POSITIVE_INFINITY]
				);
			return Af(t)
				.rs({ index: Vf.userMutationsIndex, range: n }, function (t, n, r) {
					(e = !1), r.done();
				})
				.next(function () {
					return e;
				});
		}),
		(t.prototype.ko = function (t, e, n, r) {
			var i = this,
				o = Nf(t),
				s = Af(t);
			return s.add({}).next(function (u) {
				vs('number' == typeof u);
				for (
					var a = new Wh(u, e, n, r),
						c = (function (t, e, n) {
							var r = n.baseMutations.map(function (e) {
									return Oa(t.Co, e);
								}),
								i = n.mutations.map(function (e) {
									return Oa(t.Co, e);
								});
							return new Vf(e, n.batchId, n.ar.toMillis(), r, i);
						})(i.serializer, i.userId, a),
						h = [],
						f = new Iu(function (t, e) {
							return $s(t.R(), e.R());
						}),
						l = 0,
						p = r;
					l < p.length;
					l++
				) {
					var d = p[l],
						v = qf.key(i.userId, d.key.path, u);
					(f = f.add(d.key.path.h())), h.push(s.put(c)), h.push(o.put(v, qf.PLACEHOLDER));
				}
				return (
					f.forEach(function (e) {
						h.push(i.Dr.Mo(t, e));
					}),
					t.pr(function () {
						i.Fo[u] = a.keys();
					}),
					ph.$n(h).next(function () {
						return a;
					})
				);
			});
		}),
		(t.prototype.Oo = function (t, e) {
			var n = this;
			return Af(t)
				.get(e)
				.next(function (t) {
					return t ? (vs(t.userId === n.userId), bf(n.serializer, t)) : null;
				});
		}),
		(t.prototype.Lo = function (t, e) {
			var n = this;
			return this.Fo[e]
				? ph.resolve(this.Fo[e])
				: this.Oo(t, e).next(function (t) {
						if (t) {
							var r = t.keys();
							return (n.Fo[e] = r), r;
						}
						return null;
				  });
		}),
		(t.prototype.Bo = function (t, e) {
			var n = this,
				r = e + 1,
				i = IDBKeyRange.lowerBound([this.userId, r]),
				o = null;
			return Af(t)
				.rs({ index: Vf.userMutationsIndex, range: i }, function (t, e, i) {
					e.userId === n.userId && (vs(e.batchId >= r), (o = bf(n.serializer, e))), i.done();
				})
				.next(function () {
					return o;
				});
		}),
		(t.prototype.qo = function (t) {
			var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
				n = -1;
			return Af(t)
				.rs({ index: Vf.userMutationsIndex, range: e, reverse: !0 }, function (t, e, r) {
					(n = e.batchId), r.done();
				})
				.next(function () {
					return n;
				});
		}),
		(t.prototype.Uo = function (t) {
			var e = this,
				n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
			return Af(t)
				.ts(Vf.userMutationsIndex, n)
				.next(function (t) {
					return t.map(function (t) {
						return bf(e.serializer, t);
					});
				});
		}),
		(t.prototype.Nr = function (t, e) {
			var n = this,
				r = qf.prefixForPath(this.userId, e.path),
				i = IDBKeyRange.lowerBound(r),
				o = [];
			return Nf(t)
				.rs({ range: i }, function (r, i, s) {
					var u = r[0],
						a = r[1],
						c = r[2],
						h = ff(a);
					if (u === n.userId && e.path.isEqual(h))
						return Af(t)
							.get(c)
							.next(function (t) {
								if (!t) throw ds();
								vs(t.userId === n.userId), o.push(bf(n.serializer, t));
							});
					s.done();
				})
				.next(function () {
					return o;
				});
		}),
		(t.prototype.Or = function (t, e) {
			var n = this,
				r = new Iu($s),
				i = [];
			return (
				e.forEach(function (e) {
					var o = qf.prefixForPath(n.userId, e.path),
						s = IDBKeyRange.lowerBound(o),
						u = Nf(t).rs({ range: s }, function (t, i, o) {
							var s = t[0],
								u = t[1],
								a = t[2],
								c = ff(u);
							s === n.userId && e.path.isEqual(c) ? (r = r.add(a)) : o.done();
						});
					i.push(u);
				}),
				ph.$n(i).next(function () {
					return n.Qo(t, r);
				})
			);
		}),
		(t.prototype.Wr = function (t, e) {
			var n = this,
				r = e.path,
				i = r.length + 1,
				o = qf.prefixForPath(this.userId, r),
				s = IDBKeyRange.lowerBound(o),
				u = new Iu($s);
			return Nf(t)
				.rs({ range: s }, function (t, e, o) {
					var s = t[0],
						a = t[1],
						c = t[2],
						h = ff(a);
					s === n.userId && r.T(h) ? h.length === i && (u = u.add(c)) : o.done();
				})
				.next(function () {
					return n.Qo(t, u);
				});
		}),
		(t.prototype.Qo = function (t, e) {
			var n = this,
				r = [],
				i = [];
			return (
				e.forEach(function (e) {
					i.push(
						Af(t)
							.get(e)
							.next(function (t) {
								if (null === t) throw ds();
								vs(t.userId === n.userId), r.push(bf(n.serializer, t));
							})
					);
				}),
				ph.$n(i).next(function () {
					return r;
				})
			);
		}),
		(t.prototype.Wo = function (t, e) {
			var n = this;
			return Tf(t.jo, this.userId, e).next(function (r) {
				return (
					t.pr(function () {
						n.Ko(e.batchId);
					}),
					ph.forEach(r, function (e) {
						return n.No.Go(t, e);
					})
				);
			});
		}),
		(t.prototype.Ko = function (t) {
			delete this.Fo[t];
		}),
		(t.prototype.zo = function (t) {
			var e = this;
			return this.$o(t).next(function (n) {
				if (!n) return ph.resolve();
				var r = IDBKeyRange.lowerBound(qf.prefixForUser(e.userId)),
					i = [];
				return Nf(t)
					.rs({ range: r }, function (t, n, r) {
						if (t[0] === e.userId) {
							var o = ff(t[1]);
							i.push(o);
						} else r.done();
					})
					.next(function () {
						vs(0 === i.length);
					});
			});
		}),
		(t.prototype.Ho = function (t, e) {
			return _f(t, this.userId, e);
		}),
		(t.prototype.Yo = function (t) {
			var e = this;
			return Sf(t)
				.get(this.userId)
				.next(function (t) {
					return t || new Mf(e.userId, -1, '');
				});
		}),
		t
	);
})();
function _f(t, e, n) {
	var r = qf.prefixForPath(e, n.path),
		i = r[1],
		o = IDBKeyRange.lowerBound(r),
		s = !1;
	return Nf(t)
		.rs({ range: o, ss: !0 }, function (t, n, r) {
			var o = t[0],
				u = t[1];
			t[2], o === e && u === i && (s = !0), r.done();
		})
		.next(function () {
			return s;
		});
}
function Tf(t, e, n) {
	var r = t.store(Vf.store),
		i = t.store(qf.store),
		o = [],
		s = IDBKeyRange.only(n.batchId),
		u = 0,
		a = r.rs({ range: s }, function (t, e, n) {
			return u++, n.delete();
		});
	o.push(
		a.next(function () {
			vs(1 === u);
		})
	);
	for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
		var l = f[h],
			p = qf.key(e, l.key.path, n.batchId);
		o.push(i.delete(p)), c.push(l.key);
	}
	return ph.$n(o).next(function () {
		return c;
	});
}
function Af(t) {
	return al.Qn(t, Vf.store);
}
function Nf(t) {
	return al.Qn(t, qf.store);
}
function Sf(t) {
	return al.Qn(t, Mf.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Df = (function () {
		function t(t, e) {
			(this.serializer = t), (this.Dr = e);
		}
		return (
			(t.prototype.Er = function (t, e, n) {
				return Of(t).put(Lf(e), n);
			}),
			(t.prototype.Ar = function (t, e) {
				var n = Of(t),
					r = Lf(e);
				return n.delete(r);
			}),
			(t.prototype.updateMetadata = function (t, e) {
				var n = this;
				return this.getMetadata(t).next(function (r) {
					return (r.byteSize += e), n.Jo(t, r);
				});
			}),
			(t.prototype.Rr = function (t, e) {
				var n = this;
				return Of(t)
					.get(Lf(e))
					.next(function (t) {
						return n.Xo(t);
					});
			}),
			(t.prototype.Zo = function (t, e) {
				var n = this;
				return Of(t)
					.get(Lf(e))
					.next(function (t) {
						var e = n.Xo(t);
						return e ? { ta: e, size: Pf(t) } : null;
					});
			}),
			(t.prototype.getEntries = function (t, e) {
				var n = this,
					r = Nu();
				return this.ea(t, e, function (t, e) {
					var i = n.Xo(e);
					r = r.ot(t, i);
				}).next(function () {
					return r;
				});
			}),
			(t.prototype.na = function (t, e) {
				var n = this,
					r = Nu(),
					i = new bu(Ts.i);
				return this.ea(t, e, function (t, e) {
					var o = n.Xo(e);
					o ? ((r = r.ot(t, o)), (i = i.ot(t, Pf(e)))) : ((r = r.ot(t, null)), (i = i.ot(t, 0)));
				}).next(function () {
					return { sa: r, ia: i };
				});
			}),
			(t.prototype.ea = function (t, e, n) {
				if (e.m()) return ph.resolve();
				var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()),
					i = e._t(),
					o = i.It();
				return Of(t)
					.rs({ range: r }, function (t, e, r) {
						for (var s = Ts.$(t); o && Ts.i(o, s) < 0; ) n(o, null), (o = i.It());
						o && o.isEqual(s) && (n(o, e), (o = i.At() ? i.It() : null)),
							o ? r.Xn(o.path.A()) : r.done();
					})
					.next(function () {
						for (; o; ) n(o, null), (o = i.At() ? i.It() : null);
					});
			}),
			(t.prototype.Lr = function (t, e, n) {
				var r = this,
					i = Du(),
					o = e.path.length + 1,
					s = {};
				if (n.isEqual(iu.min())) {
					var u = e.path.A();
					s.range = IDBKeyRange.lowerBound(u);
				} else {
					var a = e.path.A(),
						c = vf(n);
					(s.range = IDBKeyRange.lowerBound([a, c], !0)), (s.index = zf.collectionReadTimeIndex);
				}
				return Of(t)
					.rs(s, function (t, n, s) {
						if (t.length === o) {
							var u = pf(r.serializer, n);
							e.path.T(u.key.path) ? u instanceof Dc && Kc(e, u) && (i = i.ot(u.key, u)) : s.done();
						}
					})
					.next(function () {
						return i;
					});
			}),
			(t.prototype.ra = function (t) {
				return new kf(this, !!t && t.oa);
			}),
			(t.prototype.aa = function (t) {
				return this.getMetadata(t).next(function (t) {
					return t.byteSize;
				});
			}),
			(t.prototype.getMetadata = function (t) {
				return xf(t)
					.get(Hf.key)
					.next(function (t) {
						return vs(!!t), t;
					});
			}),
			(t.prototype.Jo = function (t, e) {
				return xf(t).put(Hf.key, e);
			}),
			(t.prototype.Xo = function (t) {
				if (t) {
					var e = pf(this.serializer, t);
					return e instanceof kc && e.version.isEqual(iu.min()) ? null : e;
				}
				return null;
			}),
			t
		);
	})(),
	kf = (function (t) {
		function e(e, n) {
			var r = this;
			return (
				((r = t.call(this) || this).ca = e),
				(r.oa = n),
				(r.ua = new nu(
					function (t) {
						return t.toString();
					},
					function (t, e) {
						return t.isEqual(e);
					}
				)),
				r
			);
		}
		return (
			te(e, t),
			(e.prototype.yr = function (t) {
				var e = this,
					n = [],
					r = 0,
					i = new Iu(function (t, e) {
						return $s(t.R(), e.R());
					});
				return (
					this.wr.forEach(function (o, s) {
						var u = e.ua.get(o);
						if (s) {
							var a = df(e.ca.serializer, s, e.readTime);
							i = i.add(o.path.h());
							var c = Pf(a);
							(r += c - u), n.push(e.ca.Er(t, o, a));
						} else if (((r -= u), e.oa)) {
							var h = df(e.ca.serializer, new kc(o, iu.min()), e.readTime);
							n.push(e.ca.Er(t, o, h));
						} else n.push(e.ca.Ar(t, o));
					}),
					i.forEach(function (r) {
						n.push(e.ca.Dr.Mo(t, r));
					}),
					n.push(this.ca.updateMetadata(t, r)),
					ph.$n(n)
				);
			}),
			(e.prototype.gr = function (t, e) {
				var n = this;
				return this.ca.Zo(t, e).next(function (t) {
					return null === t ? (n.ua.set(e, 0), null) : (n.ua.set(e, t.size), t.ta);
				});
			}),
			(e.prototype.Pr = function (t, e) {
				var n = this;
				return this.ca.na(t, e).next(function (t) {
					var e = t.sa;
					return (
						t.ia.forEach(function (t, e) {
							n.ua.set(t, e);
						}),
						e
					);
				});
			}),
			e
		);
	})(Xh);
function xf(t) {
	return al.Qn(t, Hf.store);
}
function Of(t) {
	return al.Qn(t, zf.store);
}
function Lf(t) {
	return t.path.A();
}
function Pf(t) {
	var e;
	if (t.document) e = t.document;
	else if (t.unknownDocument) e = t.unknownDocument;
	else {
		if (!t.noDocument) throw ds();
		e = t.noDocument;
	}
	return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Cf = (function () {
		function t() {
			this.ha = new Rf();
		}
		return (
			(t.prototype.Mo = function (t, e) {
				return this.ha.add(e), ph.resolve();
			}),
			(t.prototype.Qr = function (t, e) {
				return ph.resolve(this.ha.getEntries(e));
			}),
			t
		);
	})(),
	Rf = (function () {
		function t() {
			this.index = {};
		}
		return (
			(t.prototype.add = function (t) {
				var e = t._(),
					n = t.h(),
					r = this.index[e] || new Iu(Es.i),
					i = !r.has(n);
				return (this.index[e] = r.add(n)), i;
			}),
			(t.prototype.has = function (t) {
				var e = t._(),
					n = t.h(),
					r = this.index[e];
				return r && r.has(n);
			}),
			(t.prototype.getEntries = function (t) {
				return (this.index[t] || new Iu(Es.i)).A();
			}),
			t
		);
	})(),
	Uf = (function () {
		function t(t) {
			this.serializer = t;
		}
		return (
			(t.prototype.createOrUpgrade = function (t, e, n, r) {
				var i = this;
				vs(n < r && n >= 0 && r <= 10);
				var o = new mh('createOrUpgrade', e);
				n < 1 &&
					r >= 1 &&
					(t.createObjectStore(Ff.store),
					(function (t) {
						t.createObjectStore(Mf.store, { keyPath: Mf.keyPath }),
							t
								.createObjectStore(Vf.store, { keyPath: Vf.keyPath, autoIncrement: !0 })
								.createIndex(Vf.userMutationsIndex, Vf.userMutationsKeyPath, { unique: !0 }),
							t.createObjectStore(qf.store);
					})(t),
					Xf(t),
					(function (t) {
						t.createObjectStore(zf.store);
					})(t));
				var s = ph.resolve();
				return (
					n < 3 &&
						r >= 3 &&
						(0 !== n &&
							((function (t) {
								t.deleteObjectStore(Kf.store),
									t.deleteObjectStore($f.store),
									t.deleteObjectStore(Wf.store);
							})(t),
							Xf(t)),
						(s = s.next(function () {
							return (function (t) {
								var e = t.store(Wf.store),
									n = new Wf(0, 0, iu.min().Z(), 0);
								return e.put(Wf.key, n);
							})(o);
						}))),
					n < 4 &&
						r >= 4 &&
						(0 !== n &&
							(s = s.next(function () {
								return (function (t, e) {
									return e
										.store(Vf.store)
										.ts()
										.next(function (n) {
											t.deleteObjectStore(Vf.store),
												t
													.createObjectStore(Vf.store, { keyPath: Vf.keyPath, autoIncrement: !0 })
													.createIndex(Vf.userMutationsIndex, Vf.userMutationsKeyPath, {
														unique: !0
													});
											var r = e.store(Vf.store),
												i = n.map(function (t) {
													return r.put(t);
												});
											return ph.$n(i);
										});
								})(t, o);
							})),
						(s = s.next(function () {
							!(function (t) {
								t.createObjectStore(Yf.store, { keyPath: Yf.keyPath });
							})(t);
						}))),
					n < 5 &&
						r >= 5 &&
						(s = s.next(function () {
							return i.removeAcknowledgedMutations(o);
						})),
					n < 6 &&
						r >= 6 &&
						(s = s.next(function () {
							return (
								(function (t) {
									t.createObjectStore(Hf.store);
								})(t),
								i.addDocumentGlobal(o)
							);
						})),
					n < 7 &&
						r >= 7 &&
						(s = s.next(function () {
							return i.ensureSequenceNumbers(o);
						})),
					n < 8 &&
						r >= 8 &&
						(s = s.next(function () {
							return i.createCollectionParentIndex(t, o);
						})),
					n < 9 &&
						r >= 9 &&
						(s = s.next(function () {
							!(function (t) {
								t.objectStoreNames.contains('remoteDocumentChanges') &&
									t.deleteObjectStore('remoteDocumentChanges');
							})(t),
								(function (t) {
									var e = t.objectStore(zf.store);
									e.createIndex(zf.readTimeIndex, zf.readTimeIndexPath, { unique: !1 }),
										e.createIndex(zf.collectionReadTimeIndex, zf.collectionReadTimeIndexPath, {
											unique: !1
										});
								})(e);
						})),
					n < 10 &&
						r >= 10 &&
						(s = s.next(function () {
							return i.rewriteCanonicalIds(o);
						})),
					s
				);
			}),
			(t.prototype.addDocumentGlobal = function (t) {
				var e = 0;
				return t
					.store(zf.store)
					.rs(function (t, n) {
						e += Pf(n);
					})
					.next(function () {
						var n = new Hf(e);
						return t.store(Hf.store).put(Hf.key, n);
					});
			}),
			(t.prototype.removeAcknowledgedMutations = function (t) {
				var e = this,
					n = t.store(Mf.store),
					r = t.store(Vf.store);
				return n.ts().next(function (n) {
					return ph.forEach(n, function (n) {
						var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
						return r.ts(Vf.userMutationsIndex, i).next(function (r) {
							return ph.forEach(r, function (r) {
								vs(r.userId === n.userId);
								var i = bf(e.serializer, r);
								return Tf(t, n.userId, i).next(function () {});
							});
						});
					});
				});
			}),
			(t.prototype.ensureSequenceNumbers = function (t) {
				var e = t.store(Kf.store),
					n = t.store(zf.store);
				return t
					.store(Wf.store)
					.get(Wf.key)
					.next(function (t) {
						var r = [];
						return n
							.rs(function (n, i) {
								var o = new Es(n),
									s = [0, af(o)];
								r.push(
									e.get(s).next(function (n) {
										return n
											? ph.resolve()
											: ((r = o), e.put(new Kf(0, af(r), t.highestListenSequenceNumber)));
										var r;
									})
								);
							})
							.next(function () {
								return ph.$n(r);
							});
					});
			}),
			(t.prototype.createCollectionParentIndex = function (t, e) {
				t.createObjectStore(Qf.store, { keyPath: Qf.keyPath });
				var n = e.store(Qf.store),
					r = new Rf(),
					i = function (t) {
						if (r.add(t)) {
							var e = t._(),
								i = t.h();
							return n.put({ collectionId: e, parent: af(i) });
						}
					};
				return e
					.store(zf.store)
					.rs({ ss: !0 }, function (t, e) {
						var n = new Es(t);
						return i(n.h());
					})
					.next(function () {
						return e.store(qf.store).rs({ ss: !0 }, function (t, e) {
							t[0];
							var n = t[1],
								r = (t[2], ff(n));
							return i(r.h());
						});
					});
			}),
			(t.prototype.rewriteCanonicalIds = function (t) {
				var e = this,
					n = t.store($f.store);
				return n.rs(function (t, r) {
					var i = wf(r),
						o = Ef(e.serializer, i);
					return n.put(o);
				});
			}),
			t
		);
	})(),
	jf = function (t, e) {
		(this.seconds = t), (this.nanoseconds = e);
	},
	Ff = function (t, e, n) {
		(this.ownerId = t), (this.allowTabSynchronization = e), (this.leaseTimestampMs = n);
	};
(Ff.store = 'owner'), (Ff.key = 'owner');
var Mf = function (t, e, n) {
	(this.userId = t), (this.lastAcknowledgedBatchId = e), (this.lastStreamToken = n);
};
(Mf.store = 'mutationQueues'), (Mf.keyPath = 'userId');
var Vf = function (t, e, n, r, i) {
	(this.userId = t),
		(this.batchId = e),
		(this.localWriteTimeMs = n),
		(this.baseMutations = r),
		(this.mutations = i);
};
(Vf.store = 'mutations'),
	(Vf.keyPath = 'batchId'),
	(Vf.userMutationsIndex = 'userMutationsIndex'),
	(Vf.userMutationsKeyPath = ['userId', 'batchId']);
var qf = (function () {
	function t() {}
	return (
		(t.prefixForUser = function (t) {
			return [t];
		}),
		(t.prefixForPath = function (t, e) {
			return [t, af(e)];
		}),
		(t.key = function (t, e, n) {
			return [t, af(e), n];
		}),
		t
	);
})();
(qf.store = 'documentMutations'), (qf.PLACEHOLDER = new qf());
var Bf = function (t, e) {
		(this.path = t), (this.readTime = e);
	},
	Gf = function (t, e) {
		(this.path = t), (this.version = e);
	},
	zf = function (t, e, n, r, i, o) {
		(this.unknownDocument = t),
			(this.noDocument = e),
			(this.document = n),
			(this.hasCommittedMutations = r),
			(this.readTime = i),
			(this.parentPath = o);
	};
(zf.store = 'remoteDocuments'),
	(zf.readTimeIndex = 'readTimeIndex'),
	(zf.readTimeIndexPath = 'readTime'),
	(zf.collectionReadTimeIndex = 'collectionReadTimeIndex'),
	(zf.collectionReadTimeIndexPath = ['parentPath', 'readTime']);
var Hf = function (t) {
	this.byteSize = t;
};
(Hf.store = 'remoteDocumentGlobal'), (Hf.key = 'remoteDocumentGlobalKey');
var $f = function (t, e, n, r, i, o, s) {
	(this.targetId = t),
		(this.canonicalId = e),
		(this.readTime = n),
		(this.resumeToken = r),
		(this.lastListenSequenceNumber = i),
		(this.lastLimboFreeSnapshotVersion = o),
		(this.query = s);
};
($f.store = 'targets'),
	($f.keyPath = 'targetId'),
	($f.queryTargetsIndexName = 'queryTargetsIndex'),
	($f.queryTargetsKeyPath = ['canonicalId', 'targetId']);
var Kf = function (t, e, n) {
	(this.targetId = t), (this.path = e), (this.sequenceNumber = n);
};
(Kf.store = 'targetDocuments'),
	(Kf.keyPath = ['targetId', 'path']),
	(Kf.documentTargetsIndex = 'documentTargetsIndex'),
	(Kf.documentTargetsKeyPath = ['path', 'targetId']);
var Wf = function (t, e, n, r) {
	(this.highestTargetId = t),
		(this.highestListenSequenceNumber = e),
		(this.lastRemoteSnapshotVersion = n),
		(this.targetCount = r);
};
(Wf.key = 'targetGlobalKey'), (Wf.store = 'targetGlobal');
var Qf = function (t, e) {
	(this.collectionId = t), (this.parent = e);
};
function Xf(t) {
	t
		.createObjectStore(Kf.store, { keyPath: Kf.keyPath })
		.createIndex(Kf.documentTargetsIndex, Kf.documentTargetsKeyPath, { unique: !0 }),
		t
			.createObjectStore($f.store, { keyPath: $f.keyPath })
			.createIndex($f.queryTargetsIndexName, $f.queryTargetsKeyPath, { unique: !0 }),
		t.createObjectStore(Wf.store);
}
(Qf.store = 'collectionParents'), (Qf.keyPath = ['collectionId', 'parent']);
var Yf = function (t, e, n, r) {
	(this.clientId = t), (this.updateTimeMs = e), (this.networkEnabled = n), (this.inForeground = r);
};
(Yf.store = 'clientMetadata'), (Yf.keyPath = 'clientId');
var Jf = oe(
		oe(
			oe(
				[Mf.store, Vf.store, qf.store, zf.store, $f.store, Ff.store, Wf.store, Kf.store],
				[Yf.store]
			),
			[Hf.store]
		),
		[Qf.store]
	),
	Zf = (function () {
		function t() {
			this.la = new Rf();
		}
		return (
			(t.prototype.Mo = function (t, e) {
				var n = this;
				if (!this.la.has(e)) {
					var r = e._(),
						i = e.h();
					t.pr(function () {
						n.la.add(e);
					});
					var o = { collectionId: r, parent: af(i) };
					return tl(t).put(o);
				}
				return ph.resolve();
			}),
			(t.prototype.Qr = function (t, e) {
				var n = [],
					r = IDBKeyRange.bound([e, ''], [Ws(e), ''], !1, !0);
				return tl(t)
					.ts(r)
					.next(function (t) {
						for (var r = 0, i = t; r < i.length; r++) {
							var o = i[r];
							if (o.collectionId !== e) break;
							n.push(ff(o.parent));
						}
						return n;
					});
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tl(t) {
	return al.Qn(t, Qf.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var el = (function () {
		function t(t) {
			this._a = t;
		}
		return (
			(t.prototype.next = function () {
				return (this._a += 2), this._a;
			}),
			(t.fa = function () {
				return new t(0);
			}),
			(t.da = function () {
				return new t(-1);
			}),
			t
		);
	})(),
	nl = (function () {
		function t(t, e) {
			(this.No = t), (this.serializer = e);
		}
		return (
			(t.prototype.wa = function (t) {
				var e = this;
				return this.ma(t).next(function (n) {
					var r = new el(n.highestTargetId);
					return (
						(n.highestTargetId = r.next()),
						e.Ta(t, n).next(function () {
							return n.highestTargetId;
						})
					);
				});
			}),
			(t.prototype.Ea = function (t) {
				return this.ma(t).next(function (t) {
					return iu.J(
						new ru(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)
					);
				});
			}),
			(t.prototype.Ia = function (t) {
				return this.ma(t).next(function (t) {
					return t.highestListenSequenceNumber;
				});
			}),
			(t.prototype.Aa = function (t, e, n) {
				var r = this;
				return this.ma(t).next(function (i) {
					return (
						(i.highestListenSequenceNumber = e),
						n && (i.lastRemoteSnapshotVersion = n.Z()),
						e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e),
						r.Ta(t, i)
					);
				});
			}),
			(t.prototype.Ra = function (t, e) {
				var n = this;
				return this.ga(t, e).next(function () {
					return n.ma(t).next(function (r) {
						return (r.targetCount += 1), n.Pa(e, r), n.Ta(t, r);
					});
				});
			}),
			(t.prototype.ya = function (t, e) {
				return this.ga(t, e);
			}),
			(t.prototype.Va = function (t, e) {
				var n = this;
				return this.pa(t, e.targetId)
					.next(function () {
						return rl(t).delete(e.targetId);
					})
					.next(function () {
						return n.ma(t);
					})
					.next(function (e) {
						return vs(e.targetCount > 0), (e.targetCount -= 1), n.Ta(t, e);
					});
			}),
			(t.prototype.po = function (t, e, n) {
				var r = this,
					i = 0,
					o = [];
				return rl(t)
					.rs(function (s, u) {
						var a = wf(u);
						a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Va(t, a)));
					})
					.next(function () {
						return ph.$n(o);
					})
					.next(function () {
						return i;
					});
			}),
			(t.prototype.Ce = function (t, e) {
				return rl(t).rs(function (t, n) {
					var r = wf(n);
					e(r);
				});
			}),
			(t.prototype.ma = function (t) {
				return il(t)
					.get(Wf.key)
					.next(function (t) {
						return vs(null !== t), t;
					});
			}),
			(t.prototype.Ta = function (t, e) {
				return il(t).put(Wf.key, e);
			}),
			(t.prototype.ga = function (t, e) {
				return rl(t).put(Ef(this.serializer, e));
			}),
			(t.prototype.Pa = function (t, e) {
				var n = !1;
				return (
					t.targetId > e.highestTargetId && ((e.highestTargetId = t.targetId), (n = !0)),
					t.sequenceNumber > e.highestListenSequenceNumber &&
						((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
					n
				);
			}),
			(t.prototype.ba = function (t) {
				return this.ma(t).next(function (t) {
					return t.targetCount;
				});
			}),
			(t.prototype.va = function (t, e) {
				var n = hu(e),
					r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
					i = null;
				return rl(t)
					.rs({ range: r, index: $f.queryTargetsIndexName }, function (t, n, r) {
						var o = wf(n);
						fu(e, o.target) && ((i = o), r.done());
					})
					.next(function () {
						return i;
					});
			}),
			(t.prototype.Sa = function (t, e, n) {
				var r = this,
					i = [],
					o = ol(t);
				return (
					e.forEach(function (e) {
						var s = af(e.path);
						i.push(o.put(new Kf(n, s))), i.push(r.No.Da(t, n, e));
					}),
					ph.$n(i)
				);
			}),
			(t.prototype.Ca = function (t, e, n) {
				var r = this,
					i = ol(t);
				return ph.forEach(e, function (e) {
					var o = af(e.path);
					return ph.$n([i.delete([n, o]), r.No.Na(t, n, e)]);
				});
			}),
			(t.prototype.pa = function (t, e) {
				var n = ol(t),
					r = IDBKeyRange.bound([e], [e + 1], !1, !0);
				return n.delete(r);
			}),
			(t.prototype.Fa = function (t, e) {
				var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
					r = ol(t),
					i = Ou();
				return r
					.rs({ range: n, ss: !0 }, function (t, e, n) {
						var r = ff(t[1]),
							o = new Ts(r);
						i = i.add(o);
					})
					.next(function () {
						return i;
					});
			}),
			(t.prototype.Ho = function (t, e) {
				var n = af(e.path),
					r = IDBKeyRange.bound([n], [Ws(n)], !1, !0),
					i = 0;
				return ol(t)
					.rs({ index: Kf.documentTargetsIndex, ss: !0, range: r }, function (t, e, n) {
						var r = t[0];
						t[1], 0 !== r && (i++, n.done());
					})
					.next(function () {
						return i > 0;
					});
			}),
			(t.prototype.Ue = function (t, e) {
				return rl(t)
					.get(e)
					.next(function (t) {
						return t ? wf(t) : null;
					});
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rl(t) {
	return al.Qn(t, $f.store);
}
function il(t) {
	return al.Qn(t, Wf.store);
}
function ol(t) {
	return al.Qn(t, Kf.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var sl =
		'Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.',
	ul = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this) || this).jo = e), (r.xa = n), r;
		}
		return te(e, t), e;
	})(Jh),
	al = (function () {
		function t(e, n, r, i, o, s, u, a, c, h) {
			if (
				((this.allowTabSynchronization = e),
				(this.persistenceKey = n),
				(this.clientId = r),
				(this.fn = o),
				(this.window = s),
				(this.document = u),
				(this.$a = c),
				(this.ka = h),
				(this.Ma = null),
				(this.Oa = !1),
				(this.isPrimary = !1),
				(this.networkEnabled = !0),
				(this.La = null),
				(this.inForeground = !1),
				(this.Ba = null),
				(this.qa = null),
				(this.Ua = Number.NEGATIVE_INFINITY),
				(this.Qa = function (t) {
					return Promise.resolve();
				}),
				!t.Ln())
			)
				throw new us(
					ss.UNIMPLEMENTED,
					'This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.'
				);
			var f, l;
			(this.No = new fl(this, i)),
				(this.Wa = n + 'main'),
				(this.serializer = new lf(a)),
				(this.ja = new dh(this.Wa, 10, new Uf(this.serializer))),
				(this.Ka = new nl(this.No, this.serializer)),
				(this.Dr = new Zf()),
				(this.vr = ((f = this.serializer), (l = this.Dr), new Df(f, l))),
				this.window && this.window.localStorage
					? (this.Ga = this.window.localStorage)
					: ((this.Ga = null),
					  !1 === h &&
							fs(
								'IndexedDbPersistence',
								'LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.'
							));
		}
		return (
			(t.Qn = function (t, e) {
				if (t instanceof ul) return dh.Qn(t.jo, e);
				throw ds();
			}),
			(t.prototype.start = function () {
				var t = this;
				return this.za()
					.then(function () {
						if (!t.isPrimary && !t.allowTabSynchronization)
							throw new us(ss.FAILED_PRECONDITION, sl);
						return (
							t.Ha(),
							t.Ya(),
							t.Ja(),
							t.runTransaction('getHighestListenSequenceNumber', 'readonly', function (e) {
								return t.Ka.Ia(e);
							})
						);
					})
					.then(function (e) {
						t.Ma = new jh(e, t.$a);
					})
					.then(function () {
						t.Oa = !0;
					})
					.catch(function (e) {
						return t.ja && t.ja.close(), Promise.reject(e);
					});
			}),
			(t.prototype.Xa = function (t) {
				var e = this;
				return (
					(this.Qa = function (n) {
						return ne(e, void 0, void 0, function () {
							return re(this, function (e) {
								return this.Ei ? [2, t(n)] : [2];
							});
						});
					}),
					t(this.isPrimary)
				);
			}),
			(t.prototype.Za = function (t) {
				var e = this;
				this.ja.Kn(function (n) {
					return ne(e, void 0, void 0, function () {
						return re(this, function (e) {
							switch (e.label) {
								case 0:
									return null === n.newVersion ? [4, t()] : [3, 2];
								case 1:
									e.sent(), (e.label = 2);
								case 2:
									return [2];
							}
						});
					});
				});
			}),
			(t.prototype.tc = function (t) {
				var e = this;
				this.networkEnabled !== t &&
					((this.networkEnabled = t),
					this.fn.ws(function () {
						return ne(e, void 0, void 0, function () {
							return re(this, function (t) {
								switch (t.label) {
									case 0:
										return this.Ei ? [4, this.za()] : [3, 2];
									case 1:
										t.sent(), (t.label = 2);
									case 2:
										return [2];
								}
							});
						});
					}));
			}),
			(t.prototype.za = function () {
				var t = this;
				return this.runTransaction(
					'updateClientMetadataAndTryBecomePrimary',
					'readwrite',
					function (e) {
						return hl(e)
							.put(new Yf(t.clientId, Date.now(), t.networkEnabled, t.inForeground))
							.next(function () {
								if (t.isPrimary)
									return t.ec(e).next(function (e) {
										e ||
											((t.isPrimary = !1),
											t.fn.Cs(function () {
												return t.Qa(!1);
											}));
									});
							})
							.next(function () {
								return t.nc(e);
							})
							.next(function (n) {
								return t.isPrimary && !n
									? t.sc(e).next(function () {
											return !1;
									  })
									: !!n &&
											t.ic(e).next(function () {
												return !0;
											});
							});
					}
				)
					.catch(function (e) {
						if (gh(e))
							return hs('IndexedDbPersistence', 'Failed to extend owner lease: ', e), t.isPrimary;
						if (!t.allowTabSynchronization) throw e;
						return (
							hs(
								'IndexedDbPersistence',
								'Releasing owner lease after error during lease refresh',
								e
							),
							!1
						);
					})
					.then(function (e) {
						t.isPrimary !== e &&
							t.fn.Cs(function () {
								return t.Qa(e);
							}),
							(t.isPrimary = e);
					});
			}),
			(t.prototype.ec = function (t) {
				var e = this;
				return cl(t)
					.get(Ff.key)
					.next(function (t) {
						return ph.resolve(e.rc(t));
					});
			}),
			(t.prototype.oc = function (t) {
				return hl(t).delete(this.clientId);
			}),
			(t.prototype.ac = function () {
				return ne(this, void 0, void 0, function () {
					var e,
						n,
						r,
						i,
						o = this;
					return re(this, function (s) {
						switch (s.label) {
							case 0:
								return !this.isPrimary || this.cc(this.Ua, 18e5)
									? [3, 2]
									: ((this.Ua = Date.now()),
									  [
											4,
											this.runTransaction(
												'maybeGarbageCollectMultiClientState',
												'readwrite-primary',
												function (e) {
													var n = t.Qn(e, Yf.store);
													return n.ts().next(function (t) {
														var e = o.uc(t, 18e5),
															r = t.filter(function (t) {
																return -1 === e.indexOf(t);
															});
														return ph
															.forEach(r, function (t) {
																return n.delete(t.clientId);
															})
															.next(function () {
																return r;
															});
													});
												}
											).catch(function () {
												return [];
											})
									  ]);
							case 1:
								if (((e = s.sent()), this.Ga))
									for (n = 0, r = e; n < r.length; n++)
										(i = r[n]), this.Ga.removeItem(this.hc(i.clientId));
								s.label = 2;
							case 2:
								return [2];
						}
					});
				});
			}),
			(t.prototype.Ja = function () {
				var t = this;
				this.qa = this.fn.yn('client_metadata_refresh', 4e3, function () {
					return t
						.za()
						.then(function () {
							return t.ac();
						})
						.then(function () {
							return t.Ja();
						});
				});
			}),
			(t.prototype.rc = function (t) {
				return !!t && t.ownerId === this.clientId;
			}),
			(t.prototype.nc = function (t) {
				var e = this;
				return this.ka
					? ph.resolve(!0)
					: cl(t)
							.get(Ff.key)
							.next(function (n) {
								if (null !== n && e.cc(n.leaseTimestampMs, 5e3) && !e.lc(n.ownerId)) {
									if (e.rc(n) && e.networkEnabled) return !0;
									if (!e.rc(n)) {
										if (!n.allowTabSynchronization) throw new us(ss.FAILED_PRECONDITION, sl);
										return !1;
									}
								}
								return (
									!(!e.networkEnabled || !e.inForeground) ||
									hl(t)
										.ts()
										.next(function (t) {
											return (
												void 0 ===
												e.uc(t, 5e3).find(function (t) {
													if (e.clientId !== t.clientId) {
														var n = !e.networkEnabled && t.networkEnabled,
															r = !e.inForeground && t.inForeground,
															i = e.networkEnabled === t.networkEnabled;
														if (n || (r && i)) return !0;
													}
													return !1;
												})
											);
										})
								);
							})
							.next(function (t) {
								return (
									e.isPrimary !== t &&
										hs(
											'IndexedDbPersistence',
											'Client ' + (t ? 'is' : 'is not') + ' eligible for a primary lease.'
										),
									t
								);
							});
			}),
			(t.prototype.Di = function () {
				return ne(this, void 0, void 0, function () {
					var t = this;
					return re(this, function (e) {
						switch (e.label) {
							case 0:
								return (
									(this.Oa = !1),
									this._c(),
									this.qa && (this.qa.cancel(), (this.qa = null)),
									this.fc(),
									this.dc(),
									[
										4,
										this.ja.runTransaction(
											'shutdown',
											'readwrite',
											[Ff.store, Yf.store],
											function (e) {
												var n = new ul(e, jh.ai);
												return t.sc(n).next(function () {
													return t.oc(n);
												});
											}
										)
									]
								);
							case 1:
								return e.sent(), this.ja.close(), this.wc(), [2];
						}
					});
				});
			}),
			(t.prototype.uc = function (t, e) {
				var n = this;
				return t.filter(function (t) {
					return n.cc(t.updateTimeMs, e) && !n.lc(t.clientId);
				});
			}),
			(t.prototype.pi = function () {
				var t = this;
				return this.runTransaction('getActiveClients', 'readonly', function (e) {
					return hl(e)
						.ts()
						.next(function (e) {
							return t.uc(e, 18e5).map(function (t) {
								return t.clientId;
							});
						});
				});
			}),
			Object.defineProperty(t.prototype, 'Ei', {
				get: function () {
					return this.Oa;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.mc = function (t) {
				return If.xo(t, this.serializer, this.Dr, this.No);
			}),
			(t.prototype.Tc = function () {
				return this.Ka;
			}),
			(t.prototype.Ec = function () {
				return this.vr;
			}),
			(t.prototype.Ic = function () {
				return this.Dr;
			}),
			(t.prototype.runTransaction = function (t, e, n) {
				var r = this;
				hs('IndexedDbPersistence', 'Starting transaction:', t);
				var i,
					o = 'readonly' === e ? 'readonly' : 'readwrite';
				return this.ja
					.runTransaction(t, o, Jf, function (o) {
						return (
							(i = new ul(o, r.Ma ? r.Ma.next() : jh.ai)),
							'readwrite-primary' === e
								? r
										.ec(i)
										.next(function (t) {
											return !!t || r.nc(i);
										})
										.next(function (e) {
											if (!e)
												throw (
													(fs("Failed to obtain primary lease for action '" + t + "'."),
													(r.isPrimary = !1),
													r.fn.Cs(function () {
														return r.Qa(!1);
													}),
													new us(ss.FAILED_PRECONDITION, Yh))
												);
											return n(i);
										})
										.next(function (t) {
											return r.ic(i).next(function () {
												return t;
											});
										})
								: r.Ac(i).next(function () {
										return n(i);
								  })
						);
					})
					.then(function (t) {
						return i.br(), t;
					});
			}),
			(t.prototype.Ac = function (t) {
				var e = this;
				return cl(t)
					.get(Ff.key)
					.next(function (t) {
						if (
							null !== t &&
							e.cc(t.leaseTimestampMs, 5e3) &&
							!e.lc(t.ownerId) &&
							!e.rc(t) &&
							!(e.ka || (e.allowTabSynchronization && t.allowTabSynchronization))
						)
							throw new us(ss.FAILED_PRECONDITION, sl);
					});
			}),
			(t.prototype.ic = function (t) {
				var e = new Ff(this.clientId, this.allowTabSynchronization, Date.now());
				return cl(t).put(Ff.key, e);
			}),
			(t.Ln = function () {
				return dh.Ln();
			}),
			(t.prototype.sc = function (t) {
				var e = this,
					n = cl(t);
				return n.get(Ff.key).next(function (t) {
					return e.rc(t)
						? (hs('IndexedDbPersistence', 'Releasing primary lease.'), n.delete(Ff.key))
						: ph.resolve();
				});
			}),
			(t.prototype.cc = function (t, e) {
				var n = Date.now();
				return !(
					t < n - e ||
					(t > n && (fs('Detected an update time that is in the future: ' + t + ' > ' + n), 1))
				);
			}),
			(t.prototype.Ha = function () {
				var t = this;
				null !== this.document &&
					'function' == typeof this.document.addEventListener &&
					((this.Ba = function () {
						t.fn.ws(function () {
							return (t.inForeground = 'visible' === t.document.visibilityState), t.za();
						});
					}),
					this.document.addEventListener('visibilitychange', this.Ba),
					(this.inForeground = 'visible' === this.document.visibilityState));
			}),
			(t.prototype.fc = function () {
				this.Ba &&
					(this.document.removeEventListener('visibilitychange', this.Ba), (this.Ba = null));
			}),
			(t.prototype.Ya = function () {
				var t,
					e = this;
				'function' ==
					typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) &&
					((this.La = function () {
						e._c(),
							e.fn.ws(function () {
								return e.Di();
							});
					}),
					this.window.addEventListener('unload', this.La));
			}),
			(t.prototype.dc = function () {
				this.La && (this.window.removeEventListener('unload', this.La), (this.La = null));
			}),
			(t.prototype.lc = function (t) {
				var e;
				try {
					var n =
						null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.hc(t)));
					return (
						hs(
							'IndexedDbPersistence',
							"Client '" + t + "' " + (n ? 'is' : 'is not') + ' zombied in LocalStorage'
						),
						n
					);
				} catch (r) {
					return fs('IndexedDbPersistence', 'Failed to get zombied client id.', r), !1;
				}
			}),
			(t.prototype._c = function () {
				if (this.Ga)
					try {
						this.Ga.setItem(this.hc(this.clientId), String(Date.now()));
					} catch (t) {
						fs('Failed to set zombie client id.', t);
					}
			}),
			(t.prototype.wc = function () {
				if (this.Ga)
					try {
						this.Ga.removeItem(this.hc(this.clientId));
					} catch (t) {}
			}),
			(t.prototype.hc = function (t) {
				return 'firestore_zombie_' + this.persistenceKey + '_' + t;
			}),
			t
		);
	})();
function cl(t) {
	return al.Qn(t, Ff.store);
}
function hl(t) {
	return al.Qn(t, Yf.store);
}
var fl = (function () {
	function t(t, e) {
		(this.db = t), (this.wo = new uf(this, e));
	}
	return (
		(t.prototype.Po = function (t) {
			var e = this.Rc(t);
			return this.db
				.Tc()
				.ba(t)
				.next(function (t) {
					return e.next(function (e) {
						return t + e;
					});
				});
		}),
		(t.prototype.Rc = function (t) {
			var e = 0;
			return this.Vo(t, function (t) {
				e++;
			}).next(function () {
				return e;
			});
		}),
		(t.prototype.Ce = function (t, e) {
			return this.db.Tc().Ce(t, e);
		}),
		(t.prototype.Vo = function (t, e) {
			return this.gc(t, function (t, n) {
				return e(n);
			});
		}),
		(t.prototype.Da = function (t, e, n) {
			return ll(t, n);
		}),
		(t.prototype.Na = function (t, e, n) {
			return ll(t, n);
		}),
		(t.prototype.po = function (t, e, n) {
			return this.db.Tc().po(t, e, n);
		}),
		(t.prototype.Go = function (t, e) {
			return ll(t, e);
		}),
		(t.prototype.Pc = function (t, e) {
			return (
				(r = e),
				(i = !1),
				Sf((n = t))
					.os(function (t) {
						return _f(n, t, r).next(function (t) {
							return t && (i = !0), ph.resolve(!t);
						});
					})
					.next(function () {
						return i;
					})
			);
			var n, r, i;
		}),
		(t.prototype.bo = function (t, e) {
			var n = this,
				r = this.db.Ec().ra(),
				i = [],
				o = 0;
			return this.gc(t, function (s, u) {
				if (u <= e) {
					var a = n.Pc(t, s).next(function (e) {
						if (!e)
							return (
								o++,
								r.Rr(t, s).next(function () {
									return r.Ar(s), ol(t).delete([0, af(s.path)]);
								})
							);
					});
					i.push(a);
				}
			})
				.next(function () {
					return ph.$n(i);
				})
				.next(function () {
					return r.apply(t);
				})
				.next(function () {
					return o;
				});
		}),
		(t.prototype.removeTarget = function (t, e) {
			var n = e.st(t.xa);
			return this.db.Tc().ya(t, n);
		}),
		(t.prototype.yc = function (t, e) {
			return ll(t, e);
		}),
		(t.prototype.gc = function (t, e) {
			var n,
				r = ol(t),
				i = jh.ai;
			return r
				.rs({ index: Kf.documentTargetsIndex }, function (t, r) {
					var o = t[0],
						s = (t[1], r.path),
						u = r.sequenceNumber;
					0 === o ? (i !== jh.ai && e(new Ts(ff(n)), i), (i = u), (n = s)) : (i = jh.ai);
				})
				.next(function () {
					i !== jh.ai && e(new Ts(ff(n)), i);
				});
		}),
		(t.prototype.So = function (t) {
			return this.db.Ec().aa(t);
		}),
		t
	);
})();
function ll(t, e) {
	return ol(t).put(((n = e), (r = t.xa), new Kf(0, af(n.path), r)));
	var n, r;
}
function pl(t, e) {
	var n = t.projectId;
	return t.j || (n += '.' + t.database), 'firestore/' + e + '/' + n + '/';
}
var dl = (function () {
	function t(t, e, n) {
		(this.persistence = t),
			(this.Vc = e),
			(this.bc = new bu($s)),
			(this.vc = new nu(function (t) {
				return hu(t);
			}, fu)),
			(this.Sc = iu.min()),
			(this.Sr = t.mc(n)),
			(this.Dc = t.Ec()),
			(this.Ka = t.Tc()),
			(this.Cc = new Zh(this.Dc, this.Sr, this.persistence.Ic())),
			this.Vc.Nc(this.Cc);
	}
	return (
		(t.prototype.Io = function (t) {
			var e = this;
			return this.persistence.runTransaction('Collect garbage', 'readwrite-primary', function (n) {
				return t.vo(n, e.bc);
			});
		}),
		t
	);
})();
function vl(t, e) {
	var n = ys(t);
	return n.persistence.runTransaction('Acknowledge batch', 'readwrite-primary', function (t) {
		var r,
			i,
			o,
			s,
			u,
			a,
			c,
			h = e.batch.keys(),
			f = n.Dc.ra({ oa: !0 });
		return ((r = n),
		(i = t),
		(o = e),
		(s = f),
		(u = o.batch),
		(a = u.keys()),
		(c = ph.resolve()),
		a.forEach(function (t) {
			c = c
				.next(function () {
					return s.Rr(i, t);
				})
				.next(function (e) {
					var n = e,
						r = o.dr.get(t);
					vs(null !== r), (!n || n.version.L(r) < 0) && (n = u.cr(t, n, o)) && s.Er(n, o._r);
				});
		}),
		c.next(function () {
			return r.Sr.Wo(i, u);
		}))
			.next(function () {
				return f.apply(t);
			})
			.next(function () {
				return n.Sr.zo(t);
			})
			.next(function () {
				return n.Cc.kr(t, h);
			});
	});
}
function yl(t) {
	var e = ys(t);
	return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', function (t) {
		return e.Ka.Ea(t);
	});
}
function gl(t, e) {
	var n = ys(t),
		r = e.nt,
		i = n.bc;
	return n.persistence
		.runTransaction('Apply remote event', 'readwrite-primary', function (t) {
			var o = n.Dc.ra({ oa: !0 });
			i = n.bc;
			var s = [];
			e.zt.forEach(function (e, o) {
				var u,
					a,
					c,
					h = i.get(o);
				if (h) {
					s.push(
						n.Ka.Ca(t, e.se, o).next(function () {
							return n.Ka.Sa(t, e.ee, o);
						})
					);
					var f = e.resumeToken;
					if (f.O() > 0) {
						var l = h.it(f, r).st(t.xa);
						(i = i.ot(o, l)),
							(u = h),
							(c = e),
							vs((a = l).resumeToken.O() > 0),
							(0 === u.resumeToken.O() ||
								a.nt.X() - u.nt.X() >= 3e8 ||
								c.ee.size + c.ne.size + c.se.size > 0) &&
								s.push(n.Ka.ya(t, l));
					}
				}
			});
			var u = Au(),
				a = Ou();
			if (
				(e.Yt.forEach(function (t, e) {
					a = a.add(t);
				}),
				s.push(
					o.getEntries(t, a).next(function (i) {
						e.Yt.forEach(function (a, c) {
							var h = i.get(a);
							c instanceof kc && c.version.isEqual(iu.min())
								? (o.Ar(a, r), (u = u.ot(a, c)))
								: null == h ||
								  c.version.L(h.version) > 0 ||
								  (0 === c.version.L(h.version) && h.hasPendingWrites)
								? (o.Er(c, r), (u = u.ot(a, c)))
								: hs(
										'LocalStore',
										'Ignoring outdated watch update for ',
										a,
										'. Current version:',
										h.version,
										' Watch version:',
										c.version
								  ),
								e.Jt.has(a) && s.push(n.persistence.No.yc(t, a));
						});
					})
				),
				!r.isEqual(iu.min()))
			) {
				var c = n.Ka.Ea(t).next(function (e) {
					return n.Ka.Aa(t, t.xa, r);
				});
				s.push(c);
			}
			return ph
				.$n(s)
				.next(function () {
					return o.apply(t);
				})
				.next(function () {
					return n.Cc.Mr(t, u);
				});
		})
		.then(function (t) {
			return (n.bc = i), t;
		});
}
function ml(t, e) {
	var n = ys(t);
	return n.persistence.runTransaction('Get next mutation batch', 'readonly', function (t) {
		return void 0 === e && (e = -1), n.Sr.Bo(t, e);
	});
}
function bl(t, e) {
	var n = ys(t);
	return n.persistence
		.runTransaction('Allocate target', 'readwrite', function (t) {
			var r;
			return n.Ka.va(t, e).next(function (i) {
				return i
					? ((r = i), ph.resolve(r))
					: n.Ka.wa(t).next(function (i) {
							return (
								(r = new vu(e, i, 0, t.xa)),
								n.Ka.Ra(t, r).next(function () {
									return r;
								})
							);
					  });
			});
		})
		.then(function (t) {
			var r = n.bc.get(t.targetId);
			return (
				(null === r || t.nt.L(r.nt) > 0) &&
					((n.bc = n.bc.ot(t.targetId, t)), n.vc.set(e, t.targetId)),
				t
			);
		});
}
function wl(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i, o, s;
		return re(this, function (u) {
			switch (u.label) {
				case 0:
					(r = ys(t)),
						(i = r.bc.get(e)),
						(o = n ? 'readwrite' : 'readwrite-primary'),
						(u.label = 1);
				case 1:
					return (
						u.trys.push([1, 4, , 5]),
						n
							? [3, 3]
							: [
									4,
									r.persistence.runTransaction('Release target', o, function (t) {
										return r.persistence.No.removeTarget(t, i);
									})
							  ]
					);
				case 2:
					u.sent(), (u.label = 3);
				case 3:
					return [3, 5];
				case 4:
					if (!gh((s = u.sent()))) throw s;
					return (
						hs('LocalStore', 'Failed to update sequence numbers for target ' + e + ': ' + s), [3, 5]
					);
				case 5:
					return (r.bc = r.bc.remove(e)), r.vc.delete(i.target), [2];
			}
		});
	});
}
function El(t, e, n) {
	var r = ys(t),
		i = iu.min(),
		o = Ou();
	return r.persistence.runTransaction('Execute query', 'readonly', function (t) {
		return ((s = r),
		(u = t),
		(a = Vc(e)),
		(c = ys(s)),
		(h = c.vc.get(a)),
		void 0 !== h ? ph.resolve(c.bc.get(h)) : c.Ka.va(u, a))
			.next(function (e) {
				if (e)
					return (
						(i = e.lastLimboFreeSnapshotVersion),
						r.Ka.Fa(t, e.targetId).next(function (t) {
							o = t;
						})
					);
			})
			.next(function () {
				return r.Vc.Lr(t, e, n ? i : iu.min(), n ? o : Ou());
			})
			.next(function (t) {
				return { documents: t, Fc: o };
			});
		var s, u, a, c, h;
	});
}
function Il(t, e) {
	var n = ys(t),
		r = ys(n.Ka),
		i = n.bc.get(e);
	return i
		? Promise.resolve(i.target)
		: n.persistence.runTransaction('Get target data', 'readonly', function (t) {
				return r.Ue(t, e).next(function (t) {
					return t ? t.target : null;
				});
		  });
}
function _l(t) {
	var e = ys(t);
	return e.persistence
		.runTransaction('Get new document changes', 'readonly', function (t) {
			return (
				(n = e.Dc),
				(r = t),
				(i = e.Sc),
				(o = ys(n)),
				(s = Au()),
				(u = vf(i)),
				(a = Of(r)),
				(c = IDBKeyRange.lowerBound(u, !0)),
				a
					.rs({ index: zf.readTimeIndex, range: c }, function (t, e) {
						var n = pf(o.serializer, e);
						(s = s.ot(n.key, n)), (u = e.readTime);
					})
					.next(function () {
						return { xc: s, readTime: yf(u) };
					})
			);
			var n, r, i, o, s, u, a, c;
		})
		.then(function (t) {
			var n = t.xc,
				r = t.readTime;
			return (e.Sc = r), n;
		});
}
function Tl(t) {
	return ne(this, void 0, void 0, function () {
		var e;
		return re(this, function (n) {
			return [
				2,
				(e = ys(t)).persistence
					.runTransaction('Synchronize last document change read time', 'readonly', function (t) {
						return (
							(e = Of(t)),
							(n = iu.min()),
							e
								.rs({ index: zf.readTimeIndex, reverse: !0 }, function (t, e, r) {
									e.readTime && (n = yf(e.readTime)), r.done();
								})
								.next(function () {
									return n;
								})
						);
						var e, n;
					})
					.then(function (t) {
						e.Sc = t;
					})
			];
		});
	});
}
function Al(t) {
	return ne(this, void 0, void 0, function () {
		return re(this, function (e) {
			if (t.code !== ss.FAILED_PRECONDITION || t.message !== Yh) throw t;
			return hs('LocalStore', 'Unexpectedly lost primary lease'), [2];
		});
	});
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Nl = (function () {
		function t() {
			(this.$c = new Iu(Sl.kc)), (this.Mc = new Iu(Sl.Oc));
		}
		return (
			(t.prototype.m = function () {
				return this.$c.m();
			}),
			(t.prototype.Da = function (t, e) {
				var n = new Sl(t, e);
				(this.$c = this.$c.add(n)), (this.Mc = this.Mc.add(n));
			}),
			(t.prototype.Lc = function (t, e) {
				var n = this;
				t.forEach(function (t) {
					return n.Da(t, e);
				});
			}),
			(t.prototype.Na = function (t, e) {
				this.Bc(new Sl(t, e));
			}),
			(t.prototype.qc = function (t, e) {
				var n = this;
				t.forEach(function (t) {
					return n.Na(t, e);
				});
			}),
			(t.prototype.Uc = function (t) {
				var e = this,
					n = new Ts(new Es([])),
					r = new Sl(n, t),
					i = new Sl(n, t + 1),
					o = [];
				return (
					this.Mc.Ft([r, i], function (t) {
						e.Bc(t), o.push(t.key);
					}),
					o
				);
			}),
			(t.prototype.Qc = function () {
				var t = this;
				this.$c.forEach(function (e) {
					return t.Bc(e);
				});
			}),
			(t.prototype.Bc = function (t) {
				(this.$c = this.$c.delete(t)), (this.Mc = this.Mc.delete(t));
			}),
			(t.prototype.Wc = function (t) {
				var e = new Ts(new Es([])),
					n = new Sl(e, t),
					r = new Sl(e, t + 1),
					i = Ou();
				return (
					this.Mc.Ft([n, r], function (t) {
						i = i.add(t.key);
					}),
					i
				);
			}),
			(t.prototype.Ho = function (t) {
				var e = new Sl(t, 0),
					n = this.$c.$t(e);
				return null !== n && t.isEqual(n.key);
			}),
			t
		);
	})(),
	Sl = (function () {
		function t(t, e) {
			(this.key = t), (this.jc = e);
		}
		return (
			(t.kc = function (t, e) {
				return Ts.i(t.key, e.key) || $s(t.jc, e.jc);
			}),
			(t.Oc = function (t, e) {
				return $s(t.jc, e.jc) || Ts.i(t.key, e.key);
			}),
			t
		);
	})(),
	Dl = function (t, e) {
		(this.user = e), (this.type = 'OAuth'), (this.Kc = {}), (this.Kc.Authorization = 'Bearer ' + t);
	},
	kl = (function () {
		function t() {
			this.Gc = null;
		}
		return (
			(t.prototype.getToken = function () {
				return Promise.resolve(null);
			}),
			(t.prototype.zc = function () {}),
			(t.prototype.Hc = function (t) {
				(this.Gc = t), t(Uh.UNAUTHENTICATED);
			}),
			(t.prototype.Yc = function () {
				this.Gc = null;
			}),
			t
		);
	})(),
	xl = (function () {
		function t(t) {
			var e = this;
			(this.Jc = null),
				(this.currentUser = Uh.UNAUTHENTICATED),
				(this.Xc = !1),
				(this.Zc = 0),
				(this.Gc = null),
				(this.forceRefresh = !1),
				(this.Jc = function () {
					e.Zc++, (e.currentUser = e.tu()), (e.Xc = !0), e.Gc && e.Gc(e.currentUser);
				}),
				(this.Zc = 0),
				(this.auth = t.getImmediate({ optional: !0 })),
				this.auth
					? this.auth.addAuthTokenListener(this.Jc)
					: (this.Jc(null),
					  t.get().then(
							function (t) {
								(e.auth = t), e.Jc && e.auth.addAuthTokenListener(e.Jc);
							},
							function () {}
					  ));
		}
		return (
			(t.prototype.getToken = function () {
				var t = this,
					e = this.Zc,
					n = this.forceRefresh;
				return (
					(this.forceRefresh = !1),
					this.auth
						? this.auth.getToken(n).then(function (n) {
								return t.Zc !== e
									? (hs('FirebaseCredentialsProvider', 'getToken aborted due to token change.'),
									  t.getToken())
									: n
									? (vs('string' == typeof n.accessToken), new Dl(n.accessToken, t.currentUser))
									: null;
						  })
						: Promise.resolve(null)
				);
			}),
			(t.prototype.zc = function () {
				this.forceRefresh = !0;
			}),
			(t.prototype.Hc = function (t) {
				(this.Gc = t), this.Xc && t(this.currentUser);
			}),
			(t.prototype.Yc = function () {
				this.auth && this.auth.removeAuthTokenListener(this.Jc), (this.Jc = null), (this.Gc = null);
			}),
			(t.prototype.tu = function () {
				var t = this.auth && this.auth.getUid();
				return vs(null === t || 'string' == typeof t), new Uh(t);
			}),
			t
		);
	})(),
	Ol = (function () {
		function t(t, e) {
			(this.eu = t), (this.nu = e), (this.type = 'FirstParty'), (this.user = Uh.ni);
		}
		return (
			Object.defineProperty(t.prototype, 'Kc', {
				get: function () {
					var t = { 'X-Goog-AuthUser': this.nu },
						e = this.eu.auth.getAuthHeaderValueForFirstParty([]);
					return e && (t.Authorization = e), t;
				},
				enumerable: !1,
				configurable: !0
			}),
			t
		);
	})(),
	Ll = (function () {
		function t(t, e) {
			(this.eu = t), (this.nu = e);
		}
		return (
			(t.prototype.getToken = function () {
				return Promise.resolve(new Ol(this.eu, this.nu));
			}),
			(t.prototype.Hc = function (t) {
				t(Uh.ni);
			}),
			(t.prototype.Yc = function () {}),
			(t.prototype.zc = function () {}),
			t
		);
	})(),
	Pl = (function () {
		function t(t, e, n, r, i, o) {
			(this.fn = t),
				(this.su = n),
				(this.iu = r),
				(this.ru = i),
				(this.listener = o),
				(this.state = 0),
				(this.ou = 0),
				(this.au = null),
				(this.stream = null),
				(this.ys = new lh(t, e));
		}
		return (
			(t.prototype.cu = function () {
				return 1 === this.state || 2 === this.state || 4 === this.state;
			}),
			(t.prototype.uu = function () {
				return 2 === this.state;
			}),
			(t.prototype.start = function () {
				3 !== this.state ? this.auth() : this.hu();
			}),
			(t.prototype.stop = function () {
				return ne(this, void 0, void 0, function () {
					return re(this, function (t) {
						switch (t.label) {
							case 0:
								return this.cu() ? [4, this.close(0)] : [3, 2];
							case 1:
								t.sent(), (t.label = 2);
							case 2:
								return [2];
						}
					});
				});
			}),
			(t.prototype.lu = function () {
				(this.state = 0), this.ys.reset();
			}),
			(t.prototype._u = function () {
				var t = this;
				this.uu() &&
					null === this.au &&
					(this.au = this.fn.yn(this.su, 6e4, function () {
						return t.fu();
					}));
			}),
			(t.prototype.du = function (t) {
				this.wu(), this.stream.send(t);
			}),
			(t.prototype.fu = function () {
				return ne(this, void 0, void 0, function () {
					return re(this, function (t) {
						return this.uu() ? [2, this.close(0)] : [2];
					});
				});
			}),
			(t.prototype.wu = function () {
				this.au && (this.au.cancel(), (this.au = null));
			}),
			(t.prototype.close = function (t, e) {
				return ne(this, void 0, void 0, function () {
					return re(this, function (n) {
						switch (n.label) {
							case 0:
								return (
									this.wu(),
									this.ys.cancel(),
									this.ou++,
									3 !== t
										? this.ys.reset()
										: e && e.code === ss.RESOURCE_EXHAUSTED
										? (fs(e.toString()),
										  fs('Using maximum backoff delay to prevent overloading the backend.'),
										  this.ys.Rn())
										: e && e.code === ss.UNAUTHENTICATED && this.ru.zc(),
									null !== this.stream && (this.mu(), this.stream.close(), (this.stream = null)),
									(this.state = t),
									[4, this.listener.Tu(e)]
								);
							case 1:
								return n.sent(), [2];
						}
					});
				});
			}),
			(t.prototype.mu = function () {}),
			(t.prototype.auth = function () {
				var t = this;
				this.state = 1;
				var e = this.Eu(this.ou),
					n = this.ou;
				this.ru.getToken().then(
					function (e) {
						t.ou === n && t.Iu(e);
					},
					function (n) {
						e(function () {
							var e = new us(ss.UNKNOWN, 'Fetching auth token failed: ' + n.message);
							return t.Au(e);
						});
					}
				);
			}),
			(t.prototype.Iu = function (t) {
				var e = this,
					n = this.Eu(this.ou);
				(this.stream = this.Ru(t)),
					this.stream.gu(function () {
						n(function () {
							return (e.state = 2), e.listener.gu();
						});
					}),
					this.stream.Tu(function (t) {
						n(function () {
							return e.Au(t);
						});
					}),
					this.stream.onMessage(function (t) {
						n(function () {
							return e.onMessage(t);
						});
					});
			}),
			(t.prototype.hu = function () {
				var t = this;
				(this.state = 4),
					this.ys.gn(function () {
						return ne(t, void 0, void 0, function () {
							return re(this, function (t) {
								return (this.state = 0), this.start(), [2];
							});
						});
					});
			}),
			(t.prototype.Au = function (t) {
				return (
					hs('PersistentStream', 'close with error: ' + t), (this.stream = null), this.close(3, t)
				);
			}),
			(t.prototype.Eu = function (t) {
				var e = this;
				return function (n) {
					e.fn.ws(function () {
						return e.ou === t
							? n()
							: (hs('PersistentStream', 'stream callback skipped by getCloseGuardedDispatcher.'),
							  Promise.resolve());
					});
				};
			}),
			t
		);
	})(),
	Cl = (function (t) {
		function e(e, n, r, i, o) {
			var s = this;
			return (
				((s =
					t.call(this, e, 'listen_stream_connection_backoff', 'listen_stream_idle', n, r, o) ||
					this).serializer = i),
				s
			);
		}
		return (
			te(e, t),
			(e.prototype.Ru = function (t) {
				return this.iu.Pu('Listen', t);
			}),
			(e.prototype.onMessage = function (t) {
				this.ys.reset();
				var e = (function (t, e) {
						var n, r;
						if ('targetChange' in e) {
							e.targetChange;
							var i =
									'NO_CHANGE' === (r = e.targetChange.targetChangeType || 'NO_CHANGE')
										? 0
										: 'ADD' === r
										? 1
										: 'REMOVE' === r
										? 2
										: 'CURRENT' === r
										? 3
										: 'RESET' === r
										? 4
										: ds(),
								o = e.targetChange.targetIds || [],
								s = (function (t, e) {
									return t.Qe
										? (vs(void 0 === e || 'string' == typeof e), Qs.fromBase64String(e || ''))
										: (vs(void 0 === e || e instanceof Uint8Array),
										  Qs.fromUint8Array(e || new Uint8Array()));
								})(t, e.targetChange.resumeToken),
								u = e.targetChange.cause,
								a =
									u &&
									(function (t) {
										var e = void 0 === t.code ? ss.UNKNOWN : mu(t.code);
										return new us(e, t.message || '');
									})(u);
							n = new qu(i, o, s, a || null);
						} else if ('documentChange' in e) {
							e.documentChange;
							var c = e.documentChange;
							c.document, c.document.name, c.document.updateTime;
							var h = Aa(t, c.document.name),
								f = Ea(c.document.updateTime),
								l = new Tc({ mapValue: { fields: c.document.fields } }),
								p = new Dc(h, f, l, {}),
								d = c.targetIds || [],
								v = c.removedTargetIds || [];
							n = new Mu(d, v, p.key, p);
						} else if ('documentDelete' in e) {
							e.documentDelete;
							var y = e.documentDelete;
							y.document;
							var g = Aa(t, y.document),
								m = y.readTime ? Ea(y.readTime) : iu.min(),
								b = new kc(g, m),
								w = y.removedTargetIds || [];
							n = new Mu([], w, b.key, b);
						} else if ('documentRemove' in e) {
							e.documentRemove;
							var E = e.documentRemove;
							E.document;
							var I = Aa(t, E.document),
								_ = E.removedTargetIds || [];
							n = new Mu([], _, I, null);
						} else {
							if (!('filter' in e)) return ds();
							e.filter;
							var T = e.filter;
							T.targetId;
							var A = T.count || 0,
								N = new yu(A),
								S = T.targetId;
							n = new Vu(S, N);
						}
						return n;
					})(this.serializer, t),
					n = (function (t) {
						if (!('targetChange' in t)) return iu.min();
						var e = t.targetChange;
						return e.targetIds && e.targetIds.length
							? iu.min()
							: e.readTime
							? Ea(e.readTime)
							: iu.min();
					})(t);
				return this.listener.yu(e, n);
			}),
			(e.prototype.Vu = function (t) {
				var e,
					n,
					r,
					i,
					o = {};
				(o.database = Da(this.serializer)),
					(o.addTarget =
						((e = this.serializer),
						(i = (n = t).target),
						((r = lu(i) ? { documents: Pa(e, i) } : { query: Ca(e, i) }).targetId = n.targetId),
						n.resumeToken.O() > 0 && (r.resumeToken = ba(e, n.resumeToken)),
						r));
				var s = (function (t, e) {
					var n = (function (t, e) {
						switch (e) {
							case 0:
								return null;
							case 1:
								return 'existence-filter-mismatch';
							case 2:
								return 'limbo-document';
							default:
								return ds();
						}
					})(0, e.et);
					return null == n ? null : { 'goog-listen-tags': n };
				})(this.serializer, t);
				s && (o.labels = s), this.du(o);
			}),
			(e.prototype.pu = function (t) {
				var e = {};
				(e.database = Da(this.serializer)), (e.removeTarget = t), this.du(e);
			}),
			e
		);
	})(Pl),
	Rl = (function (t) {
		function e(e, n, r, i, o) {
			var s = this;
			return (
				((s =
					t.call(this, e, 'write_stream_connection_backoff', 'write_stream_idle', n, r, o) ||
					this).serializer = i),
				(s.bu = !1),
				s
			);
		}
		return (
			te(e, t),
			Object.defineProperty(e.prototype, 'vu', {
				get: function () {
					return this.bu;
				},
				enumerable: !1,
				configurable: !0
			}),
			(e.prototype.start = function () {
				(this.bu = !1), (this.lastStreamToken = void 0), t.prototype.start.call(this);
			}),
			(e.prototype.mu = function () {
				this.bu && this.Su([]);
			}),
			(e.prototype.Ru = function (t) {
				return this.iu.Pu('Write', t);
			}),
			(e.prototype.onMessage = function (t) {
				if ((vs(!!t.streamToken), (this.lastStreamToken = t.streamToken), this.bu)) {
					this.ys.reset();
					var e =
							((r = t.writeResults),
							(i = t.commitTime),
							r && r.length > 0
								? (vs(void 0 !== i),
								  r.map(function (t) {
										return (function (t, e) {
											var n = t.updateTime ? Ea(t.updateTime) : Ea(e);
											n.isEqual(iu.min()) && (n = Ea(e));
											var r = null;
											return (
												t.transformResults &&
													t.transformResults.length > 0 &&
													(r = t.transformResults),
												new uc(n, r)
											);
										})(t, i);
								  }))
								: []),
						n = Ea(t.commitTime);
					return this.listener.Du(n, e);
				}
				var r, i;
				return (
					vs(!t.writeResults || 0 === t.writeResults.length), (this.bu = !0), this.listener.Cu()
				);
			}),
			(e.prototype.Nu = function () {
				var t = {};
				(t.database = Da(this.serializer)), this.du(t);
			}),
			(e.prototype.Su = function (t) {
				var e = this,
					n = {
						streamToken: this.lastStreamToken,
						writes: t.map(function (t) {
							return Oa(e.serializer, t);
						})
					};
				this.du(n);
			}),
			e
		);
	})(Pl),
	Ul = (function (t) {
		function e(e, n, r) {
			var i = this;
			return (
				((i = t.call(this) || this).credentials = e), (i.iu = n), (i.serializer = r), (i.Fu = !1), i
			);
		}
		return (
			te(e, t),
			(e.prototype.xu = function () {
				if (this.Fu)
					throw new us(ss.FAILED_PRECONDITION, 'The client has already been terminated.');
			}),
			(e.prototype.$u = function (t, e, n) {
				var r = this;
				return (
					this.xu(),
					this.credentials
						.getToken()
						.then(function (i) {
							return r.iu.$u(t, e, n, i);
						})
						.catch(function (t) {
							throw (t.code === ss.UNAUTHENTICATED && r.credentials.zc(), t);
						})
				);
			}),
			(e.prototype.ku = function (t, e, n) {
				var r = this;
				return (
					this.xu(),
					this.credentials
						.getToken()
						.then(function (i) {
							return r.iu.ku(t, e, n, i);
						})
						.catch(function (t) {
							throw (t.code === ss.UNAUTHENTICATED && r.credentials.zc(), t);
						})
				);
			}),
			(e.prototype.terminate = function () {
				this.Fu = !1;
			}),
			e
		);
	})(function () {}),
	jl = (function () {
		function t(t, e) {
			(this.cs = t),
				(this.di = e),
				(this.state = 'Unknown'),
				(this.Mu = 0),
				(this.Ou = null),
				(this.Lu = !0);
		}
		return (
			(t.prototype.Bu = function () {
				var t = this;
				0 === this.Mu &&
					(this.qu('Unknown'),
					(this.Ou = this.cs.yn('online_state_timeout', 1e4, function () {
						return (
							(t.Ou = null),
							t.Uu("Backend didn't respond within 10 seconds."),
							t.qu('Offline'),
							Promise.resolve()
						);
					})));
			}),
			(t.prototype.Qu = function (t) {
				'Online' === this.state
					? this.qu('Unknown')
					: (this.Mu++,
					  this.Mu >= 1 &&
							(this.Wu(),
							this.Uu('Connection failed 1 times. Most recent error: ' + t.toString()),
							this.qu('Offline')));
			}),
			(t.prototype.set = function (t) {
				this.Wu(), (this.Mu = 0), 'Online' === t && (this.Lu = !1), this.qu(t);
			}),
			(t.prototype.qu = function (t) {
				t !== this.state && ((this.state = t), this.di(t));
			}),
			(t.prototype.Uu = function (t) {
				var e =
					'Could not reach Cloud Firestore backend. ' +
					t +
					'\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.';
				this.Lu ? (fs(e), (this.Lu = !1)) : hs('OnlineStateTracker', e);
			}),
			(t.prototype.Wu = function () {
				null !== this.Ou && (this.Ou.cancel(), (this.Ou = null));
			}),
			t
		);
	})(),
	Fl = function (t, e, n, r, i) {
		var o = this;
		(this.ju = t),
			(this.Ku = e),
			(this.cs = n),
			(this.Gu = {}),
			(this.zu = []),
			(this.Hu = new Map()),
			(this.Yu = new Set()),
			(this.Ju = []),
			(this.Xu = i),
			this.Xu.Zu(function (t) {
				n.ws(function () {
					return ne(o, void 0, void 0, function () {
						return re(this, function (t) {
							switch (t.label) {
								case 0:
									return Wl(this)
										? (hs('RemoteStore', 'Restarting streams for network reachability change.'),
										  [
												4,
												(function (t) {
													return ne(this, void 0, void 0, function () {
														var e;
														return re(this, function (n) {
															switch (n.label) {
																case 0:
																	return (e = ys(t)).Yu.add(4), [4, Vl(e)];
																case 1:
																	return n.sent(), e.th.set('Unknown'), e.Yu.delete(4), [4, Ml(e)];
																case 2:
																	return n.sent(), [2];
															}
														});
													});
												})(this)
										  ])
										: [3, 2];
								case 1:
									t.sent(), (t.label = 2);
								case 2:
									return [2];
							}
						});
					});
				});
			}),
			(this.th = new jl(n, r));
	};
function Ml(t) {
	return ne(this, void 0, void 0, function () {
		var e, n;
		return re(this, function (r) {
			switch (r.label) {
				case 0:
					if (!Wl(t)) return [3, 4];
					(e = 0), (n = t.Ju), (r.label = 1);
				case 1:
					return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
				case 2:
					r.sent(), (r.label = 3);
				case 3:
					return e++, [3, 1];
				case 4:
					return [2];
			}
		});
	});
}
function Vl(t) {
	return ne(this, void 0, void 0, function () {
		var e, n;
		return re(this, function (r) {
			switch (r.label) {
				case 0:
					(e = 0), (n = t.Ju), (r.label = 1);
				case 1:
					return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
				case 2:
					r.sent(), (r.label = 3);
				case 3:
					return e++, [3, 1];
				case 4:
					return [2];
			}
		});
	});
}
function ql(t) {
	return ne(this, void 0, void 0, function () {
		var e;
		return re(this, function (n) {
			switch (n.label) {
				case 0:
					return (
						(e = ys(t)), hs('RemoteStore', 'RemoteStore shutting down.'), e.Yu.add(5), [4, Vl(e)]
					);
				case 1:
					return n.sent(), e.Xu.Di(), e.th.set('Unknown'), [2];
			}
		});
	});
}
function Bl(t, e) {
	var n = ys(t);
	n.Hu.has(e.targetId) || (n.Hu.set(e.targetId, e), Kl(n) ? $l(n) : cp(n).uu() && zl(n, e));
}
function Gl(t, e) {
	var n = ys(t),
		r = cp(n);
	n.Hu.delete(e),
		r.uu() && Hl(n, e),
		0 === n.Hu.size && (r.uu() ? r._u() : Wl(n) && n.th.set('Unknown'));
}
function zl(t, e) {
	t.eh.Ie(e.targetId), cp(t).Vu(e);
}
function Hl(t, e) {
	t.eh.Ie(e), cp(t).pu(e);
}
function $l(t) {
	(t.eh = new Gu({
		qe: function (e) {
			return t.Gu.qe(e);
		},
		Ue: function (e) {
			return t.Hu.get(e) || null;
		}
	})),
		cp(t).start(),
		t.th.Bu();
}
function Kl(t) {
	return Wl(t) && !cp(t).cu() && t.Hu.size > 0;
}
function Wl(t) {
	return 0 === ys(t).Yu.size;
}
function Ql(t) {
	t.eh = void 0;
}
function Xl(t) {
	return ne(this, void 0, void 0, function () {
		return re(this, function (e) {
			return (
				t.Hu.forEach(function (e, n) {
					zl(t, e);
				}),
				[2]
			);
		});
	});
}
function Yl(t, e) {
	return ne(this, void 0, void 0, function () {
		return re(this, function (n) {
			return Ql(t), Kl(t) ? (t.th.Qu(e), $l(t)) : t.th.set('Unknown'), [2];
		});
	});
}
function Jl(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i, o;
		return re(this, function (s) {
			switch (s.label) {
				case 0:
					if ((t.th.set('Online'), !(e instanceof qu && 2 === e.state && e.cause))) return [3, 6];
					s.label = 1;
				case 1:
					return (
						s.trys.push([1, 3, , 5]),
						[
							4,
							(function (t, e) {
								return ne(this, void 0, void 0, function () {
									var n, r, i, o;
									return re(this, function (s) {
										switch (s.label) {
											case 0:
												(n = e.cause), (r = 0), (i = e.targetIds), (s.label = 1);
											case 1:
												return r < i.length
													? ((o = i[r]), t.Hu.has(o) ? [4, t.Gu.nh(o, n)] : [3, 3])
													: [3, 5];
											case 2:
												s.sent(), t.Hu.delete(o), t.eh.removeTarget(o), (s.label = 3);
											case 3:
												s.label = 4;
											case 4:
												return r++, [3, 1];
											case 5:
												return [2];
										}
									});
								});
							})(t, e)
						]
					);
				case 2:
					return s.sent(), [3, 5];
				case 3:
					return (
						(r = s.sent()),
						hs('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
						[4, Zl(t, r)]
					);
				case 4:
					return s.sent(), [3, 5];
				case 5:
					return [3, 13];
				case 6:
					if (
						(e instanceof Mu ? t.eh.be(e) : e instanceof Vu ? t.eh.$e(e) : t.eh.De(e),
						n.isEqual(iu.min()))
					)
						return [3, 13];
					s.label = 7;
				case 7:
					return s.trys.push([7, 11, , 13]), [4, yl(t.ju)];
				case 8:
					return (
						(i = s.sent()),
						n.L(i) >= 0
							? [
									4,
									((u = t),
									(a = n),
									(c = u.eh.Oe(a)),
									c.zt.forEach(function (t, e) {
										if (t.resumeToken.O() > 0) {
											var n = u.Hu.get(e);
											n && u.Hu.set(e, n.it(t.resumeToken, a));
										}
									}),
									c.Ht.forEach(function (t) {
										var e = u.Hu.get(t);
										if (e) {
											u.Hu.set(t, e.it(Qs.B, e.nt)), Hl(u, t);
											var n = new vu(e.target, t, 1, e.sequenceNumber);
											zl(u, n);
										}
									}),
									u.Gu.sh(c))
							  ]
							: [3, 10]
					);
				case 9:
					s.sent(), (s.label = 10);
				case 10:
					return [3, 13];
				case 11:
					return hs('RemoteStore', 'Failed to raise snapshot:', (o = s.sent())), [4, Zl(t, o)];
				case 12:
					return s.sent(), [3, 13];
				case 13:
					return [2];
			}
			var u, a, c;
		});
	});
}
function Zl(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r = this;
		return re(this, function (i) {
			switch (i.label) {
				case 0:
					if (!gh(e)) throw e;
					return t.Yu.add(1), [4, Vl(t)];
				case 1:
					return (
						i.sent(),
						t.th.set('Offline'),
						n ||
							(n = function () {
								return yl(t.ju);
							}),
						t.cs.Cs(function () {
							return ne(r, void 0, void 0, function () {
								return re(this, function (e) {
									switch (e.label) {
										case 0:
											return hs('RemoteStore', 'Retrying IndexedDB access'), [4, n()];
										case 1:
											return e.sent(), t.Yu.delete(1), [4, Ml(t)];
										case 2:
											return e.sent(), [2];
									}
								});
							});
						}),
						[2]
					);
			}
		});
	});
}
function tp(t, e) {
	return e().catch(function (n) {
		return Zl(t, n, e);
	});
}
function ep(t) {
	return ne(this, void 0, void 0, function () {
		var e, n, r, i, o;
		return re(this, function (s) {
			switch (s.label) {
				case 0:
					(e = ys(t)),
						(n = hp(e)),
						(r = e.zu.length > 0 ? e.zu[e.zu.length - 1].batchId : -1),
						(s.label = 1);
				case 1:
					if (!(Wl((u = e)) && u.zu.length < 10)) return [3, 7];
					s.label = 2;
				case 2:
					return s.trys.push([2, 4, , 6]), [4, ml(e.ju, r)];
				case 3:
					return null === (i = s.sent())
						? (0 === e.zu.length && n._u(), [3, 7])
						: ((r = i.batchId),
						  (function (t, e) {
								t.zu.push(e);
								var n = hp(t);
								n.uu() && n.vu && n.Su(e.mutations);
						  })(e, i),
						  [3, 6]);
				case 4:
					return (o = s.sent()), [4, Zl(e, o)];
				case 5:
					return s.sent(), [3, 6];
				case 6:
					return [3, 1];
				case 7:
					return np(e) && rp(e), [2];
			}
			var u;
		});
	});
}
function np(t) {
	return Wl(t) && !hp(t).cu() && t.zu.length > 0;
}
function rp(t) {
	hp(t).start();
}
function ip(t) {
	return ne(this, void 0, void 0, function () {
		return re(this, function (e) {
			return hp(t).Nu(), [2];
		});
	});
}
function op(t) {
	return ne(this, void 0, void 0, function () {
		var e, n, r, i;
		return re(this, function (o) {
			for (e = hp(t), n = 0, r = t.zu; n < r.length; n++) (i = r[n]), e.Su(i.mutations);
			return [2];
		});
	});
}
function sp(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i;
		return re(this, function (o) {
			switch (o.label) {
				case 0:
					return (
						(r = t.zu.shift()),
						(i = Qh.from(r, e, n)),
						[
							4,
							tp(t, function () {
								return t.Gu.ih(i);
							})
						]
					);
				case 1:
					return o.sent(), [4, ep(t)];
				case 2:
					return o.sent(), [2];
			}
		});
	});
}
function up(t, e) {
	return ne(this, void 0, void 0, function () {
		return re(this, function (n) {
			switch (n.label) {
				case 0:
					return e && hp(t).vu
						? [
								4,
								(function (t, e) {
									return ne(this, void 0, void 0, function () {
										var n, r;
										return re(this, function (i) {
											switch (i.label) {
												case 0:
													return gu((r = e.code)) && r !== ss.ABORTED
														? ((n = t.zu.shift()),
														  hp(t).lu(),
														  [
																4,
																tp(t, function () {
																	return t.Gu.rh(n.batchId, e);
																})
														  ])
														: [3, 3];
												case 1:
													return i.sent(), [4, ep(t)];
												case 2:
													i.sent(), (i.label = 3);
												case 3:
													return [2];
											}
										});
									});
								})(t, e)
						  ]
						: [3, 2];
				case 1:
					n.sent(), (n.label = 2);
				case 2:
					return np(t) && rp(t), [2];
			}
		});
	});
}
function ap(t, e) {
	return ne(this, void 0, void 0, function () {
		var n;
		return re(this, function (r) {
			switch (r.label) {
				case 0:
					return (n = ys(t)), e ? (n.Yu.delete(2), [4, Ml(n)]) : [3, 2];
				case 1:
					return r.sent(), [3, 5];
				case 2:
					return e ? [3, 4] : (n.Yu.add(2), [4, Vl(n)]);
				case 3:
					r.sent(), n.th.set('Unknown'), (r.label = 4);
				case 4:
					r.label = 5;
				case 5:
					return [2];
			}
		});
	});
}
function cp(t) {
	var e,
		n,
		r,
		i,
		o = this;
	return (
		t.oh ||
			((t.oh =
				((e = t.Ku),
				(n = t.cs),
				(r = { gu: Xl.bind(null, t), Tu: Yl.bind(null, t), yu: Jl.bind(null, t) }),
				(i = ys(e)).xu(),
				new Cl(n, i.iu, i.credentials, i.serializer, r))),
			t.Ju.push(function (e) {
				return ne(o, void 0, void 0, function () {
					return re(this, function (n) {
						switch (n.label) {
							case 0:
								return e ? (t.oh.lu(), Kl(t) ? $l(t) : t.th.set('Unknown'), [3, 3]) : [3, 1];
							case 1:
								return [4, t.oh.stop()];
							case 2:
								n.sent(), Ql(t), (n.label = 3);
							case 3:
								return [2];
						}
					});
				});
			})),
		t.oh
	);
}
function hp(t) {
	var e,
		n,
		r,
		i,
		o = this;
	return (
		t.ah ||
			((t.ah =
				((e = t.Ku),
				(n = t.cs),
				(r = {
					gu: ip.bind(null, t),
					Tu: up.bind(null, t),
					Cu: op.bind(null, t),
					Du: sp.bind(null, t)
				}),
				(i = ys(e)).xu(),
				new Rl(n, i.iu, i.credentials, i.serializer, r))),
			t.Ju.push(function (e) {
				return ne(o, void 0, void 0, function () {
					return re(this, function (n) {
						switch (n.label) {
							case 0:
								return e ? (t.ah.lu(), [4, ep(t)]) : [3, 2];
							case 1:
								return n.sent(), [3, 4];
							case 2:
								return [4, t.ah.stop()];
							case 3:
								n.sent(),
									t.zu.length > 0 &&
										(hs(
											'RemoteStore',
											'Stopping write stream with ' + t.zu.length + ' pending writes'
										),
										(t.zu = [])),
									(n.label = 4);
							case 4:
								return [2];
						}
					});
				});
			})),
		t.ah
	);
}
var fp = function (t) {
		this.key = t;
	},
	lp = function (t) {
		this.key = t;
	},
	pp = (function () {
		function t(t, e) {
			(this.query = t),
				(this.uh = e),
				(this.hh = null),
				(this.te = !1),
				(this.lh = Ou()),
				(this.Wt = Ou()),
				(this._h = Wc(t)),
				(this.fh = new Cu(this._h));
		}
		return (
			Object.defineProperty(t.prototype, 'dh', {
				get: function () {
					return this.uh;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.wh = function (t, e) {
				var n = this,
					r = e ? e.mh : new Ru(),
					i = e ? e.fh : this.fh,
					o = e ? e.Wt : this.Wt,
					s = i,
					u = !1,
					a = Cc(this.query) && i.size === this.query.limit ? i.last() : null,
					c = Rc(this.query) && i.size === this.query.limit ? i.first() : null;
				if (
					(t.ht(function (t, e) {
						var h = i.get(t),
							f = e instanceof Dc ? e : null;
						f && (f = Kc(n.query, f) ? f : null);
						var l = !!h && n.Wt.has(h.key),
							p = !!f && (f.Je || (n.Wt.has(f.key) && f.hasCommittedMutations)),
							d = !1;
						h && f
							? h.data().isEqual(f.data())
								? l !== p && (r.track({ type: 3, doc: f }), (d = !0))
								: n.Th(h, f) ||
								  (r.track({ type: 2, doc: f }),
								  (d = !0),
								  ((a && n._h(f, a) > 0) || (c && n._h(f, c) < 0)) && (u = !0))
							: !h && f
							? (r.track({ type: 0, doc: f }), (d = !0))
							: h && !f && (r.track({ type: 1, doc: h }), (d = !0), (a || c) && (u = !0)),
							d &&
								(f
									? ((s = s.add(f)), (o = p ? o.add(t) : o.delete(t)))
									: ((s = s.delete(t)), (o = o.delete(t))));
					}),
					Cc(this.query) || Rc(this.query))
				)
					for (; s.size > this.query.limit; ) {
						var h = Cc(this.query) ? s.last() : s.first();
						(s = s.delete(h.key)), (o = o.delete(h.key)), r.track({ type: 1, doc: h });
					}
				return { fh: s, mh: r, Eh: u, Wt: o };
			}),
			(t.prototype.Th = function (t, e) {
				return t.Je && e.hasCommittedMutations && !e.Je;
			}),
			(t.prototype.yr = function (t, e, n) {
				var r = this,
					i = this.fh;
				(this.fh = t.fh), (this.Wt = t.Wt);
				var o = t.mh.Ut();
				o.sort(function (t, e) {
					return (
						(n = t.type),
						(i = e.type),
						(o = function (t) {
							switch (t) {
								case 0:
									return 1;
								case 2:
								case 3:
									return 2;
								case 1:
									return 0;
								default:
									return ds();
							}
						})(n) - o(i) || r._h(t.doc, e.doc)
					);
					var n, i, o;
				}),
					this.Ih(n);
				var s = e ? this.Ah() : [],
					u = 0 === this.lh.size && this.te ? 1 : 0,
					a = u !== this.hh;
				return (
					(this.hh = u),
					0 !== o.length || a
						? { snapshot: new Uu(this.query, t.fh, i, o, t.Wt, 0 === u, a, !1), Rh: s }
						: { Rh: s }
				);
			}),
			(t.prototype.Qs = function (t) {
				return this.te && 'Offline' === t
					? ((this.te = !1), this.yr({ fh: this.fh, mh: new Ru(), Wt: this.Wt, Eh: !1 }, !1))
					: { Rh: [] };
			}),
			(t.prototype.gh = function (t) {
				return !this.uh.has(t) && !!this.fh.has(t) && !this.fh.get(t).Je;
			}),
			(t.prototype.Ih = function (t) {
				var e = this;
				t &&
					(t.ee.forEach(function (t) {
						return (e.uh = e.uh.add(t));
					}),
					t.ne.forEach(function (t) {}),
					t.se.forEach(function (t) {
						return (e.uh = e.uh.delete(t));
					}),
					(this.te = t.te));
			}),
			(t.prototype.Ah = function () {
				var t = this;
				if (!this.te) return [];
				var e = this.lh;
				(this.lh = Ou()),
					this.fh.forEach(function (e) {
						t.gh(e.key) && (t.lh = t.lh.add(e.key));
					});
				var n = [];
				return (
					e.forEach(function (e) {
						t.lh.has(e) || n.push(new lp(e));
					}),
					this.lh.forEach(function (t) {
						e.has(t) || n.push(new fp(t));
					}),
					n
				);
			}),
			(t.prototype.Ph = function (t) {
				(this.uh = t.Fc), (this.lh = Ou());
				var e = this.wh(t.documents);
				return this.yr(e, !0);
			}),
			(t.prototype.yh = function () {
				return Uu.Gt(this.query, this.fh, this.Wt, 0 === this.hh);
			}),
			t
		);
	})(),
	dp = function (t, e, n) {
		(this.query = t), (this.targetId = e), (this.view = n);
	},
	vp = function (t) {
		(this.key = t), (this.Vh = !1);
	},
	yp = (function () {
		function t(t, e, n, r, i, o) {
			(this.ju = t),
				(this.ph = e),
				(this.bh = n),
				(this.Sh = r),
				(this.currentUser = i),
				(this.Dh = o),
				(this.Ch = {}),
				(this.Nh = new nu(function (t) {
					return Hc(t);
				}, zc)),
				(this.Fh = new Map()),
				(this.xh = []),
				(this.$h = new bu(Ts.i)),
				(this.kh = new Map()),
				(this.Mh = new Nl()),
				(this.Oh = {}),
				(this.Lh = new Map()),
				(this.Bh = el.da()),
				(this.onlineState = 'Unknown'),
				(this.qh = void 0);
		}
		return (
			Object.defineProperty(t.prototype, 'Uh', {
				get: function () {
					return !0 === this.qh;
				},
				enumerable: !1,
				configurable: !0
			}),
			t
		);
	})();
function gp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i, o, s, u;
		return re(this, function (a) {
			switch (a.label) {
				case 0:
					return (
						(n = Gp(t)),
						(o = n.Nh.get(e)) ? ((r = o.targetId), n.Sh.Oi(r), (i = o.view.yh()), [3, 4]) : [3, 1]
					);
				case 1:
					return [4, bl(n.ju, Vc(e))];
				case 2:
					return (
						(s = a.sent()),
						(u = n.Sh.Oi(s.targetId)),
						(r = s.targetId),
						[4, mp(n, e, r, 'current' === u)]
					);
				case 3:
					(i = a.sent()), n.Uh && Bl(n.ph, s), (a.label = 4);
				case 4:
					return [2, i];
			}
		});
	});
}
function mp(t, e, n, r) {
	return ne(this, void 0, void 0, function () {
		var i, o, s, u, a, c;
		return re(this, function (h) {
			switch (h.label) {
				case 0:
					return (
						(t.Qh = function (e, n, r) {
							return (function (t, e, n, r) {
								return ne(this, void 0, void 0, function () {
									var i, o, s;
									return re(this, function (u) {
										switch (u.label) {
											case 0:
												return (i = e.view.wh(n)).Eh
													? [
															4,
															El(t.ju, e.query, !1).then(function (t) {
																var n = t.documents;
																return e.view.wh(n, i);
															})
													  ]
													: [3, 2];
											case 1:
												(i = u.sent()), (u.label = 2);
											case 2:
												return (
													(o = r && r.zt.get(e.targetId)),
													(s = e.view.yr(i, t.Uh, o)),
													[2, (kp(t, e.targetId, s.Rh), s.snapshot)]
												);
										}
									});
								});
							})(t, e, n, r);
						}),
						[4, El(t.ju, e, !0)]
					);
				case 1:
					return (
						(i = h.sent()),
						(o = new pp(e, i.Fc)),
						(s = o.wh(i.documents)),
						(u = Fu.Zt(n, r && 'Offline' !== t.onlineState)),
						(a = o.yr(s, t.Uh, u)),
						kp(t, n, a.Rh),
						(c = new dp(e, n, o)),
						[2, (t.Nh.set(e, c), t.Fh.has(n) ? t.Fh.get(n).push(e) : t.Fh.set(n, [e]), a.snapshot)]
					);
			}
		});
	});
}
function bp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i;
		return re(this, function (o) {
			switch (o.label) {
				case 0:
					return (
						(n = ys(t)),
						(r = n.Nh.get(e)),
						(i = n.Fh.get(r.targetId)).length > 1
							? [
									2,
									(n.Fh.set(
										r.targetId,
										i.filter(function (t) {
											return !zc(t, e);
										})
									),
									void n.Nh.delete(e))
							  ]
							: n.Uh
							? (n.Sh.Bi(r.targetId),
							  n.Sh.Fi(r.targetId)
									? [3, 2]
									: [
											4,
											wl(n.ju, r.targetId, !1)
												.then(function () {
													n.Sh.Ui(r.targetId), Gl(n.ph, r.targetId), Sp(n, r.targetId);
												})
												.catch(Al)
									  ])
							: [3, 3]
					);
				case 1:
					o.sent(), (o.label = 2);
				case 2:
					return [3, 5];
				case 3:
					return Sp(n, r.targetId), [4, wl(n.ju, r.targetId, !0)];
				case 4:
					o.sent(), (o.label = 5);
				case 5:
					return [2];
			}
		});
	});
}
function wp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r;
		return re(this, function (i) {
			switch (i.label) {
				case 0:
					(n = ys(t)), (i.label = 1);
				case 1:
					return i.trys.push([1, 4, , 6]), [4, gl(n.ju, e)];
				case 2:
					return (
						(r = i.sent()),
						e.zt.forEach(function (t, e) {
							var r = n.kh.get(e);
							r &&
								(vs(t.ee.size + t.ne.size + t.se.size <= 1),
								t.ee.size > 0
									? (r.Vh = !0)
									: t.ne.size > 0
									? vs(r.Vh)
									: t.se.size > 0 && (vs(r.Vh), (r.Vh = !1)));
						}),
						[4, Lp(n, r, e)]
					);
				case 3:
					return i.sent(), [3, 6];
				case 4:
					return [4, Al(i.sent())];
				case 5:
					return i.sent(), [3, 6];
				case 6:
					return [2];
			}
		});
	});
}
function Ep(t, e, n) {
	var r = ys(t);
	if ((r.Uh && 0 === n) || (!r.Uh && 1 === n)) {
		var i = [];
		r.Nh.forEach(function (t, n) {
			var r = n.view.Qs(e);
			r.snapshot && i.push(r.snapshot);
		}),
			(function (t, e) {
				var n = ys(t);
				n.onlineState = e;
				var r = !1;
				n.Bs.forEach(function (t, n) {
					for (var i = 0, o = n.listeners; i < o.length; i++) o[i].Qs(e) && (r = !0);
				}),
					r && Ch(n);
			})(r.bh, e),
			i.length && r.Ch.yu(i),
			(r.onlineState = e),
			r.Uh && r.Sh.Ki(e);
	}
}
function Ip(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i, o, s, u, a;
		return re(this, function (c) {
			switch (c.label) {
				case 0:
					return (
						(r = ys(t)).Sh.Qi(e, 'rejected', n),
						(i = r.kh.get(e)),
						(o = i && i.key)
							? ((s = (s = new bu(Ts.i)).ot(o, new kc(o, iu.min()))),
							  (u = Ou().add(o)),
							  (a = new ju(iu.min(), new Map(), new Iu($s), s, u)),
							  [4, wp(r, a)])
							: [3, 2]
					);
				case 1:
					return c.sent(), (r.$h = r.$h.remove(o)), r.kh.delete(e), Op(r), [3, 4];
				case 2:
					return [
						4,
						wl(r.ju, e, !1)
							.then(function () {
								return Sp(r, e, n);
							})
							.catch(Al)
					];
				case 3:
					c.sent(), (c.label = 4);
				case 4:
					return [2];
			}
		});
	});
}
function _p(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i;
		return re(this, function (o) {
			switch (o.label) {
				case 0:
					(n = ys(t)), (r = e.batch.batchId), (o.label = 1);
				case 1:
					return o.trys.push([1, 4, , 6]), [4, vl(n.ju, e)];
				case 2:
					return (
						(i = o.sent()), Np(n, r, null), Ap(n, r), n.Sh.ki(r, 'acknowledged'), [4, Lp(n, i)]
					);
				case 3:
					return o.sent(), [3, 6];
				case 4:
					return [4, Al(o.sent())];
				case 5:
					return o.sent(), [3, 6];
				case 6:
					return [2];
			}
		});
	});
}
function Tp(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i;
		return re(this, function (o) {
			switch (o.label) {
				case 0:
					(r = ys(t)), (o.label = 1);
				case 1:
					return (
						o.trys.push([1, 4, , 6]),
						[
							4,
							((s = r.ju),
							(u = e),
							(a = ys(s)),
							a.persistence.runTransaction('Reject batch', 'readwrite-primary', function (t) {
								var e;
								return a.Sr.Oo(t, u)
									.next(function (n) {
										return vs(null !== n), (e = n.keys()), a.Sr.Wo(t, n);
									})
									.next(function () {
										return a.Sr.zo(t);
									})
									.next(function () {
										return a.Cc.kr(t, e);
									});
							}))
						]
					);
				case 2:
					return (i = o.sent()), Np(r, e, n), Ap(r, e), r.Sh.ki(e, 'rejected', n), [4, Lp(r, i)];
				case 3:
					return o.sent(), [3, 6];
				case 4:
					return [4, Al(o.sent())];
				case 5:
					return o.sent(), [3, 6];
				case 6:
					return [2];
			}
			var s, u, a;
		});
	});
}
function Ap(t, e) {
	(t.Lh.get(e) || []).forEach(function (t) {
		t.resolve();
	}),
		t.Lh.delete(e);
}
function Np(t, e, n) {
	var r = ys(t),
		i = r.Oh[r.currentUser.ti()];
	if (i) {
		var o = i.get(e);
		o && (n ? o.reject(n) : o.resolve(), (i = i.remove(e))), (r.Oh[r.currentUser.ti()] = i);
	}
}
function Sp(t, e, n) {
	void 0 === n && (n = null), t.Sh.Bi(e);
	for (var r = 0, i = t.Fh.get(e); r < i.length; r++) {
		var o = i[r];
		t.Nh.delete(o), n && t.Ch.Wh(o, n);
	}
	t.Fh.delete(e),
		t.Uh &&
			t.Mh.Uc(e).forEach(function (e) {
				t.Mh.Ho(e) || Dp(t, e);
			});
}
function Dp(t, e) {
	var n = t.$h.get(e);
	null !== n && (Gl(t.ph, n), (t.$h = t.$h.remove(e)), t.kh.delete(n), Op(t));
}
function kp(t, e, n) {
	for (var r = 0, i = n; r < i.length; r++) {
		var o = i[r];
		o instanceof fp
			? (t.Mh.Da(o.key, e), xp(t, o))
			: o instanceof lp
			? (hs('SyncEngine', 'Document no longer in limbo: ' + o.key),
			  t.Mh.Na(o.key, e),
			  t.Mh.Ho(o.key) || Dp(t, o.key))
			: ds();
	}
}
function xp(t, e) {
	var n = e.key;
	t.$h.get(n) || (hs('SyncEngine', 'New document in limbo: ' + n), t.xh.push(n), Op(t));
}
function Op(t) {
	for (; t.xh.length > 0 && t.$h.size < t.Dh; ) {
		var e = t.xh.shift(),
			n = t.Bh.next();
		t.kh.set(n, new vp(e)), (t.$h = t.$h.ot(e, n)), Bl(t.ph, new vu(Vc(Pc(e.path)), n, 2, jh.ai));
	}
}
function Lp(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i, o, s;
		return re(this, function (u) {
			switch (u.label) {
				case 0:
					return (
						(r = ys(t)),
						(i = []),
						(o = []),
						(s = []),
						r.Nh.m()
							? [3, 3]
							: (r.Nh.forEach(function (t, u) {
									s.push(
										r.Qh(u, e, n).then(function (t) {
											if (t) {
												r.Uh && r.Sh.Qi(u.targetId, t.fromCache ? 'not-current' : 'current'),
													i.push(t);
												var e = tf.zr(u.targetId, t);
												o.push(e);
											}
										})
									);
							  }),
							  [4, Promise.all(s)])
					);
				case 1:
					return (
						u.sent(),
						r.Ch.yu(i),
						[
							4,
							(function (t, e) {
								return ne(this, void 0, void 0, function () {
									var n, r, i, o, s, u, a, c, h;
									return re(this, function (f) {
										switch (f.label) {
											case 0:
												(n = ys(t)), (f.label = 1);
											case 1:
												return (
													f.trys.push([1, 3, , 4]),
													[
														4,
														n.persistence.runTransaction(
															'notifyLocalViewChanges',
															'readwrite',
															function (t) {
																return ph.forEach(e, function (e) {
																	return ph
																		.forEach(e.Kr, function (r) {
																			return n.persistence.No.Da(t, e.targetId, r);
																		})
																		.next(function () {
																			return ph.forEach(e.Gr, function (r) {
																				return n.persistence.No.Na(t, e.targetId, r);
																			});
																		});
																});
															}
														)
													]
												);
											case 2:
												return f.sent(), [3, 4];
											case 3:
												if (!gh((r = f.sent()))) throw r;
												return hs('LocalStore', 'Failed to update sequence numbers: ' + r), [3, 4];
											case 4:
												for (i = 0, o = e; i < o.length; i++)
													(s = o[i]),
														(u = s.targetId),
														s.fromCache ||
															((a = n.bc.get(u)),
															(c = a.nt),
															(h = a.rt(c)),
															(n.bc = n.bc.ot(u, h)));
												return [2];
										}
									});
								});
							})(r.ju, o)
						]
					);
				case 2:
					u.sent(), (u.label = 3);
				case 3:
					return [2];
			}
		});
	});
}
function Pp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r;
		return re(this, function (i) {
			switch (i.label) {
				case 0:
					return (n = ys(t)).currentUser.isEqual(e)
						? [3, 3]
						: (hs('SyncEngine', 'User change. New user:', e.ti()),
						  [
								4,
								(function (t, e) {
									return ne(this, void 0, void 0, function () {
										var n, r, i, o;
										return re(this, function (s) {
											switch (s.label) {
												case 0:
													return (
														(n = ys(t)),
														(r = n.Sr),
														(i = n.Cc),
														[
															4,
															n.persistence.runTransaction(
																'Handle user change',
																'readonly',
																function (t) {
																	var o;
																	return n.Sr.Uo(t)
																		.next(function (s) {
																			return (
																				(o = s),
																				(r = n.persistence.mc(e)),
																				(i = new Zh(n.Dc, r, n.persistence.Ic())),
																				r.Uo(t)
																			);
																		})
																		.next(function (e) {
																			for (
																				var n = [], r = [], s = Ou(), u = 0, a = o;
																				u < a.length;
																				u++
																			) {
																				var c = a[u];
																				n.push(c.batchId);
																				for (var h = 0, f = c.mutations; h < f.length; h++) {
																					var l = f[h];
																					s = s.add(l.key);
																				}
																			}
																			for (var p = 0, d = e; p < d.length; p++) {
																				var v = d[p];
																				r.push(v.batchId);
																				for (var y = 0, g = v.mutations; y < g.length; y++) {
																					var m = g[y];
																					s = s.add(m.key);
																				}
																			}
																			return i.kr(t, s).next(function (t) {
																				return { jh: t, Kh: n, Gh: r };
																			});
																		});
																}
															)
														]
													);
												case 1:
													return (o = s.sent()), [2, ((n.Sr = r), (n.Cc = i), n.Vc.Nc(n.Cc), o)];
											}
										});
									});
								})(n.ju, e)
						  ]);
				case 1:
					return (
						(r = i.sent()),
						(n.currentUser = e),
						(o = n).Lh.forEach(function (t) {
							t.forEach(function (t) {
								t.reject(
									new us(
										ss.CANCELLED,
										"'waitForPendingWrites' promise is rejected due to a user change."
									)
								);
							});
						}),
						o.Lh.clear(),
						n.Sh.ji(e, r.Kh, r.Gh),
						[4, Lp(n, r.jh)]
					);
				case 2:
					i.sent(), (i.label = 3);
				case 3:
					return [2];
			}
			var o;
		});
	});
}
function Cp(t, e) {
	var n = ys(t),
		r = n.kh.get(e);
	if (r && r.Vh) return Ou().add(r.key);
	var i = Ou(),
		o = n.Fh.get(e);
	if (!o) return i;
	for (var s = 0, u = o; s < u.length; s++) {
		var a = u[s],
			c = n.Nh.get(a);
		i = i.kt(c.view.dh);
	}
	return i;
}
function Rp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i;
		return re(this, function (o) {
			switch (o.label) {
				case 0:
					return [4, El((n = ys(t)).ju, e.query, !0)];
				case 1:
					return (r = o.sent()), (i = e.view.Ph(r)), [2, (n.Uh && kp(n, e.targetId, i.Rh), i)];
			}
		});
	});
}
function Up(t, e, n, r) {
	return ne(this, void 0, void 0, function () {
		var i, o;
		return re(this, function (s) {
			switch (s.label) {
				case 0:
					return [
						4,
						((u = (i = ys(t)).ju),
						(a = e),
						(c = ys(u)),
						(h = ys(c.Sr)),
						c.persistence.runTransaction('Lookup mutation documents', 'readonly', function (t) {
							return h.Lo(t, a).next(function (e) {
								return e ? c.Cc.kr(t, e) : ph.resolve(null);
							});
						}))
					];
				case 1:
					return null === (o = s.sent()) ? [3, 6] : 'pending' !== n ? [3, 3] : [4, ep(i.ph)];
				case 2:
					return s.sent(), [3, 4];
				case 3:
					'acknowledged' === n || 'rejected' === n
						? (Np(i, e, r || null),
						  Ap(i, e),
						  (function (t, e) {
								ys(ys(t).Sr).Ko(e);
						  })(i.ju, e))
						: ds(),
						(s.label = 4);
				case 4:
					return [4, Lp(i, o)];
				case 5:
					return s.sent(), [3, 7];
				case 6:
					hs('SyncEngine', 'Cannot apply mutation batch with id: ' + e), (s.label = 7);
				case 7:
					return [2];
			}
			var u, a, c, h;
		});
	});
}
function jp(t, e) {
	return ne(this, void 0, void 0, function () {
		var n, r, i, o, s, u, a, c;
		return re(this, function (h) {
			switch (h.label) {
				case 0:
					return (
						Gp((n = ys(t))),
						zp(n),
						!0 !== e || !0 === n.qh ? [3, 3] : ((r = n.Sh.Ci()), [4, Fp(n, r.A())])
					);
				case 1:
					return (i = h.sent()), (n.qh = !0), [4, ap(n.ph, !0)];
				case 2:
					for (h.sent(), o = 0, s = i; o < s.length; o++) (u = s[o]), Bl(n.ph, u);
					return [3, 7];
				case 3:
					return !1 !== e || !1 === n.qh
						? [3, 7]
						: ((a = []),
						  (c = Promise.resolve()),
						  n.Fh.forEach(function (t, e) {
								n.Sh.qi(e)
									? a.push(e)
									: (c = c.then(function () {
											return Sp(n, e), wl(n.ju, e, !0);
									  })),
									Gl(n.ph, e);
						  }),
						  [4, c]);
				case 4:
					return h.sent(), [4, Fp(n, a)];
				case 5:
					return (
						h.sent(),
						(f = ys(n)).kh.forEach(function (t, e) {
							Gl(f.ph, e);
						}),
						f.Mh.Qc(),
						(f.kh = new Map()),
						(f.$h = new bu(Ts.i)),
						(n.qh = !1),
						[4, ap(n.ph, !1)]
					);
				case 6:
					h.sent(), (h.label = 7);
				case 7:
					return [2];
			}
			var f;
		});
	});
}
function Fp(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var n, r, i, o, s, u, a, c, h, f, l, p, d, v;
		return re(this, function (y) {
			switch (y.label) {
				case 0:
					(n = ys(t)), (r = []), (i = []), (o = 0), (s = e), (y.label = 1);
				case 1:
					return o < s.length
						? ((u = s[o]),
						  (a = void 0),
						  (c = n.Fh.get(u)) && 0 !== c.length ? [4, bl(n.ju, Vc(c[0]))] : [3, 7])
						: [3, 13];
				case 2:
					(a = y.sent()), (h = 0), (f = c), (y.label = 3);
				case 3:
					return h < f.length ? ((l = f[h]), (p = n.Nh.get(l)), [4, Rp(n, p)]) : [3, 6];
				case 4:
					(d = y.sent()).snapshot && i.push(d.snapshot), (y.label = 5);
				case 5:
					return h++, [3, 3];
				case 6:
					return [3, 11];
				case 7:
					return [4, Il(n.ju, u)];
				case 8:
					return (v = y.sent()), [4, bl(n.ju, v)];
				case 9:
					return (a = y.sent()), [4, mp(n, Mp(v), u, !1)];
				case 10:
					y.sent(), (y.label = 11);
				case 11:
					r.push(a), (y.label = 12);
				case 12:
					return o++, [3, 1];
				case 13:
					return [2, (n.Ch.yu(i), r)];
			}
		});
	});
}
function Mp(t) {
	return Lc(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, 'F', t.startAt, t.endAt);
}
function Vp(t) {
	var e = ys(t);
	return ys(ys(e.ju).persistence).pi();
}
function qp(t, e, n, r) {
	return ne(this, void 0, void 0, function () {
		var i, o, s;
		return re(this, function (u) {
			switch (u.label) {
				case 0:
					return (i = ys(t)).qh
						? (hs('SyncEngine', 'Ignoring unexpected query state notification.'), [3, 8])
						: [3, 1];
				case 1:
					if (!i.Fh.has(e)) return [3, 8];
					switch (n) {
						case 'current':
						case 'not-current':
							return [3, 2];
						case 'rejected':
							return [3, 5];
					}
					return [3, 7];
				case 2:
					return [4, _l(i.ju)];
				case 3:
					return (o = u.sent()), (s = ju.Xt(e, 'current' === n)), [4, Lp(i, o, s)];
				case 4:
					return u.sent(), [3, 8];
				case 5:
					return [4, wl(i.ju, e, !0)];
				case 6:
					return u.sent(), Sp(i, e, r), [3, 8];
				case 7:
					ds(), (u.label = 8);
				case 8:
					return [2];
			}
		});
	});
}
function Bp(t, e, n) {
	return ne(this, void 0, void 0, function () {
		var r, i, o, s, u, a, c, h, f, l;
		return re(this, function (p) {
			switch (p.label) {
				case 0:
					if (!(r = Gp(t)).qh) return [3, 10];
					(i = 0), (o = e), (p.label = 1);
				case 1:
					return i < o.length
						? ((s = o[i]),
						  r.Fh.has(s)
								? (hs('SyncEngine', 'Adding an already active target ' + s), [3, 5])
								: [4, Il(r.ju, s)])
						: [3, 6];
				case 2:
					return (u = p.sent()), [4, bl(r.ju, u)];
				case 3:
					return (a = p.sent()), [4, mp(r, Mp(u), a.targetId, !1)];
				case 4:
					p.sent(), Bl(r.ph, a), (p.label = 5);
				case 5:
					return i++, [3, 1];
				case 6:
					(c = function (t) {
						return re(this, function (e) {
							switch (e.label) {
								case 0:
									return r.Fh.has(t)
										? [
												4,
												wl(r.ju, t, !1)
													.then(function () {
														Gl(r.ph, t), Sp(r, t);
													})
													.catch(Al)
										  ]
										: [3, 2];
								case 1:
									e.sent(), (e.label = 2);
								case 2:
									return [2];
							}
						});
					}),
						(h = 0),
						(f = n),
						(p.label = 7);
				case 7:
					return h < f.length ? ((l = f[h]), [5, c(l)]) : [3, 10];
				case 8:
					p.sent(), (p.label = 9);
				case 9:
					return h++, [3, 7];
				case 10:
					return [2];
			}
		});
	});
}
function Gp(t) {
	var e = ys(t);
	return (
		(e.ph.Gu.sh = wp.bind(null, e)),
		(e.ph.Gu.qe = Cp.bind(null, e)),
		(e.ph.Gu.nh = Ip.bind(null, e)),
		(e.Ch.yu = Lh.bind(null, e.bh)),
		(e.Ch.Wh = Ph.bind(null, e.bh)),
		e
	);
}
function zp(t) {
	var e = ys(t);
	return (e.ph.Gu.ih = _p.bind(null, e)), (e.ph.Gu.rh = Tp.bind(null, e)), e;
	/**
	 * @license
	 * Copyright 2019 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
}
var Hp = (function () {
		function t() {}
		return (
			(t.prototype.Nc = function (t) {
				this.zh = t;
			}),
			(t.prototype.Lr = function (t, e, n, r) {
				var i,
					o = this;
				return (0 === (i = e).filters.length &&
					null === i.limit &&
					null == i.startAt &&
					null == i.endAt &&
					(0 === i.on.length || (1 === i.on.length && i.on[0].field.p()))) ||
					n.isEqual(iu.min())
					? this.Hh(t, e)
					: this.zh.kr(t, r).next(function (i) {
							var s = o.Yh(e, i);
							return (Cc(e) || Rc(e)) && o.Eh(e.an, s, r, n)
								? o.Hh(t, e)
								: (cs() <= ke.DEBUG &&
										hs(
											'IndexFreeQueryEngine',
											'Re-using previous result from %s to execute query: %s',
											n.toString(),
											$c(e)
										),
								  o.zh.Lr(t, e, n).next(function (t) {
										return (
											s.forEach(function (e) {
												t = t.ot(e.key, e);
											}),
											t
										);
								  }));
					  });
			}),
			(t.prototype.Yh = function (t, e) {
				var n = new Iu(Wc(t));
				return (
					e.forEach(function (e, r) {
						r instanceof Dc && Kc(t, r) && (n = n.add(r));
					}),
					n
				);
			}),
			(t.prototype.Eh = function (t, e, n, r) {
				if (n.size !== e.size) return !0;
				var i = 'F' === t ? e.last() : e.first();
				return !!i && (i.hasPendingWrites || i.version.L(r) > 0);
			}),
			(t.prototype.Hh = function (t, e) {
				return (
					cs() <= ke.DEBUG &&
						hs('IndexFreeQueryEngine', 'Using full collection scan to execute query:', $c(e)),
					this.zh.Lr(t, e, iu.min())
				);
			}),
			t
		);
	})(),
	$p = (function () {
		function t(t, e) {
			(this.Dr = t), (this.No = e), (this.Sr = []), (this.Jh = 1), (this.Xh = new Iu(Sl.kc));
		}
		return (
			(t.prototype.$o = function (t) {
				return ph.resolve(0 === this.Sr.length);
			}),
			(t.prototype.ko = function (t, e, n, r) {
				var i = this.Jh;
				this.Jh++, this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
				var o = new Wh(i, e, n, r);
				this.Sr.push(o);
				for (var s = 0, u = r; s < u.length; s++) {
					var a = u[s];
					(this.Xh = this.Xh.add(new Sl(a.key, i))), this.Dr.Mo(t, a.key.path.h());
				}
				return ph.resolve(o);
			}),
			(t.prototype.Oo = function (t, e) {
				return ph.resolve(this.Zh(e));
			}),
			(t.prototype.Bo = function (t, e) {
				var n = e + 1,
					r = this.tl(n),
					i = r < 0 ? 0 : r;
				return ph.resolve(this.Sr.length > i ? this.Sr[i] : null);
			}),
			(t.prototype.qo = function () {
				return ph.resolve(0 === this.Sr.length ? -1 : this.Jh - 1);
			}),
			(t.prototype.Uo = function (t) {
				return ph.resolve(this.Sr.slice());
			}),
			(t.prototype.Nr = function (t, e) {
				var n = this,
					r = new Sl(e, 0),
					i = new Sl(e, Number.POSITIVE_INFINITY),
					o = [];
				return (
					this.Xh.Ft([r, i], function (t) {
						var e = n.Zh(t.jc);
						o.push(e);
					}),
					ph.resolve(o)
				);
			}),
			(t.prototype.Or = function (t, e) {
				var n = this,
					r = new Iu($s);
				return (
					e.forEach(function (t) {
						var e = new Sl(t, 0),
							i = new Sl(t, Number.POSITIVE_INFINITY);
						n.Xh.Ft([e, i], function (t) {
							r = r.add(t.jc);
						});
					}),
					ph.resolve(this.el(r))
				);
			}),
			(t.prototype.Wr = function (t, e) {
				var n = e.path,
					r = n.length + 1,
					i = n;
				Ts.F(i) || (i = i.child(''));
				var o = new Sl(new Ts(i), 0),
					s = new Iu($s);
				return (
					this.Xh.xt(function (t) {
						var e = t.key.path;
						return !!n.T(e) && (e.length === r && (s = s.add(t.jc)), !0);
					}, o),
					ph.resolve(this.el(s))
				);
			}),
			(t.prototype.el = function (t) {
				var e = this,
					n = [];
				return (
					t.forEach(function (t) {
						var r = e.Zh(t);
						null !== r && n.push(r);
					}),
					n
				);
			}),
			(t.prototype.Wo = function (t, e) {
				var n = this;
				vs(0 === this.nl(e.batchId, 'removed')), this.Sr.shift();
				var r = this.Xh;
				return ph
					.forEach(e.mutations, function (i) {
						var o = new Sl(i.key, e.batchId);
						return (r = r.delete(o)), n.No.Go(t, i.key);
					})
					.next(function () {
						n.Xh = r;
					});
			}),
			(t.prototype.Ko = function (t) {}),
			(t.prototype.Ho = function (t, e) {
				var n = new Sl(e, 0),
					r = this.Xh.$t(n);
				return ph.resolve(e.isEqual(r && r.key));
			}),
			(t.prototype.zo = function (t) {
				return this.Sr.length, ph.resolve();
			}),
			(t.prototype.nl = function (t, e) {
				return this.tl(t);
			}),
			(t.prototype.tl = function (t) {
				return 0 === this.Sr.length ? 0 : t - this.Sr[0].batchId;
			}),
			(t.prototype.Zh = function (t) {
				var e = this.tl(t);
				return e < 0 || e >= this.Sr.length ? null : this.Sr[e];
			}),
			t
		);
	})(),
	Kp = (function () {
		function t(t, e) {
			(this.Dr = t), (this.sl = e), (this.docs = new bu(Ts.i)), (this.size = 0);
		}
		return (
			(t.prototype.Er = function (t, e, n) {
				var r = e.key,
					i = this.docs.get(r),
					o = i ? i.size : 0,
					s = this.sl(e);
				return (
					(this.docs = this.docs.ot(r, { ta: e, size: s, readTime: n })),
					(this.size += s - o),
					this.Dr.Mo(t, r.path.h())
				);
			}),
			(t.prototype.Ar = function (t) {
				var e = this.docs.get(t);
				e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
			}),
			(t.prototype.Rr = function (t, e) {
				var n = this.docs.get(e);
				return ph.resolve(n ? n.ta : null);
			}),
			(t.prototype.getEntries = function (t, e) {
				var n = this,
					r = Nu();
				return (
					e.forEach(function (t) {
						var e = n.docs.get(t);
						r = r.ot(t, e ? e.ta : null);
					}),
					ph.resolve(r)
				);
			}),
			(t.prototype.Lr = function (t, e, n) {
				for (var r = Du(), i = new Ts(e.path.child('')), o = this.docs.ft(i); o.At(); ) {
					var s = o.It(),
						u = s.key,
						a = s.value,
						c = a.ta,
						h = a.readTime;
					if (!e.path.T(u.path)) break;
					h.L(n) <= 0 || (c instanceof Dc && Kc(e, c) && (r = r.ot(c.key, c)));
				}
				return ph.resolve(r);
			}),
			(t.prototype.il = function (t, e) {
				return ph.forEach(this.docs, function (t) {
					return e(t);
				});
			}),
			(t.prototype.ra = function (t) {
				return new Wp(this);
			}),
			(t.prototype.aa = function (t) {
				return ph.resolve(this.size);
			}),
			t
		);
	})(),
	Wp = (function (t) {
		function e(e) {
			var n = this;
			return ((n = t.call(this) || this).ca = e), n;
		}
		return (
			te(e, t),
			(e.prototype.yr = function (t) {
				var e = this,
					n = [];
				return (
					this.wr.forEach(function (r, i) {
						i ? n.push(e.ca.Er(t, i, e.readTime)) : e.ca.Ar(r);
					}),
					ph.$n(n)
				);
			}),
			(e.prototype.gr = function (t, e) {
				return this.ca.Rr(t, e);
			}),
			(e.prototype.Pr = function (t, e) {
				return this.ca.getEntries(t, e);
			}),
			e
		);
	})(Xh),
	Qp = (function () {
		function t(t) {
			(this.persistence = t),
				(this.rl = new nu(function (t) {
					return hu(t);
				}, fu)),
				(this.lastRemoteSnapshotVersion = iu.min()),
				(this.highestTargetId = 0),
				(this.ol = 0),
				(this.al = new Nl()),
				(this.targetCount = 0),
				(this.cl = el.fa());
		}
		return (
			(t.prototype.Ce = function (t, e) {
				return (
					this.rl.forEach(function (t, n) {
						return e(n);
					}),
					ph.resolve()
				);
			}),
			(t.prototype.Ea = function (t) {
				return ph.resolve(this.lastRemoteSnapshotVersion);
			}),
			(t.prototype.Ia = function (t) {
				return ph.resolve(this.ol);
			}),
			(t.prototype.wa = function (t) {
				return (this.highestTargetId = this.cl.next()), ph.resolve(this.highestTargetId);
			}),
			(t.prototype.Aa = function (t, e, n) {
				return (
					n && (this.lastRemoteSnapshotVersion = n), e > this.ol && (this.ol = e), ph.resolve()
				);
			}),
			(t.prototype.ga = function (t) {
				this.rl.set(t.target, t);
				var e = t.targetId;
				e > this.highestTargetId && ((this.cl = new el(e)), (this.highestTargetId = e)),
					t.sequenceNumber > this.ol && (this.ol = t.sequenceNumber);
			}),
			(t.prototype.Ra = function (t, e) {
				return this.ga(e), (this.targetCount += 1), ph.resolve();
			}),
			(t.prototype.ya = function (t, e) {
				return this.ga(e), ph.resolve();
			}),
			(t.prototype.Va = function (t, e) {
				return (
					this.rl.delete(e.target), this.al.Uc(e.targetId), (this.targetCount -= 1), ph.resolve()
				);
			}),
			(t.prototype.po = function (t, e, n) {
				var r = this,
					i = 0,
					o = [];
				return (
					this.rl.forEach(function (s, u) {
						u.sequenceNumber <= e &&
							null === n.get(u.targetId) &&
							(r.rl.delete(s), o.push(r.pa(t, u.targetId)), i++);
					}),
					ph.$n(o).next(function () {
						return i;
					})
				);
			}),
			(t.prototype.ba = function (t) {
				return ph.resolve(this.targetCount);
			}),
			(t.prototype.va = function (t, e) {
				var n = this.rl.get(e) || null;
				return ph.resolve(n);
			}),
			(t.prototype.Sa = function (t, e, n) {
				return this.al.Lc(e, n), ph.resolve();
			}),
			(t.prototype.Ca = function (t, e, n) {
				this.al.qc(e, n);
				var r = this.persistence.No,
					i = [];
				return (
					r &&
						e.forEach(function (e) {
							i.push(r.Go(t, e));
						}),
					ph.$n(i)
				);
			}),
			(t.prototype.pa = function (t, e) {
				return this.al.Uc(e), ph.resolve();
			}),
			(t.prototype.Fa = function (t, e) {
				var n = this.al.Wc(e);
				return ph.resolve(n);
			}),
			(t.prototype.Ho = function (t, e) {
				return ph.resolve(this.al.Ho(e));
			}),
			t
		);
	})(),
	Xp = (function () {
		function t(t) {
			var e,
				n = this;
			(this.ul = {}),
				(this.Ma = new jh(0)),
				(this.Oa = !1),
				(this.Oa = !0),
				(this.No = t(this)),
				(this.Ka = new Qp(this)),
				(this.Dr = new Cf()),
				(this.vr =
					((e = this.Dr),
					new Kp(e, function (t) {
						return n.No.hl(t);
					})));
		}
		return (
			(t.prototype.start = function () {
				return Promise.resolve();
			}),
			(t.prototype.Di = function () {
				return (this.Oa = !1), Promise.resolve();
			}),
			Object.defineProperty(t.prototype, 'Ei', {
				get: function () {
					return this.Oa;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.Za = function () {}),
			(t.prototype.tc = function () {}),
			(t.prototype.Ic = function () {
				return this.Dr;
			}),
			(t.prototype.mc = function (t) {
				var e = this.ul[t.ti()];
				return e || ((e = new $p(this.Dr, this.No)), (this.ul[t.ti()] = e)), e;
			}),
			(t.prototype.Tc = function () {
				return this.Ka;
			}),
			(t.prototype.Ec = function () {
				return this.vr;
			}),
			(t.prototype.runTransaction = function (t, e, n) {
				var r = this;
				hs('MemoryPersistence', 'Starting transaction:', t);
				var i = new Yp(this.Ma.next());
				return (
					this.No.ll(),
					n(i)
						.next(function (t) {
							return r.No._l(i).next(function () {
								return t;
							});
						})
						.Fn()
						.then(function (t) {
							return i.br(), t;
						})
				);
			}),
			(t.prototype.fl = function (t, e) {
				return ph.kn(
					Object.values(this.ul).map(function (n) {
						return function () {
							return n.Ho(t, e);
						};
					})
				);
			}),
			t
		);
	})(),
	Yp = (function (t) {
		function e(e) {
			var n = this;
			return ((n = t.call(this) || this).xa = e), n;
		}
		return te(e, t), e;
	})(Jh),
	Jp = (function () {
		function t(t) {
			(this.persistence = t), (this.dl = new Nl()), (this.wl = null);
		}
		return (
			(t.ml = function (e) {
				return new t(e);
			}),
			Object.defineProperty(t.prototype, 'Tl', {
				get: function () {
					if (this.wl) return this.wl;
					throw ds();
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.Da = function (t, e, n) {
				return this.dl.Da(n, e), this.Tl.delete(n.toString()), ph.resolve();
			}),
			(t.prototype.Na = function (t, e, n) {
				return this.dl.Na(n, e), this.Tl.add(n.toString()), ph.resolve();
			}),
			(t.prototype.Go = function (t, e) {
				return this.Tl.add(e.toString()), ph.resolve();
			}),
			(t.prototype.removeTarget = function (t, e) {
				var n = this;
				this.dl.Uc(e.targetId).forEach(function (t) {
					return n.Tl.add(t.toString());
				});
				var r = this.persistence.Tc();
				return r
					.Fa(t, e.targetId)
					.next(function (t) {
						t.forEach(function (t) {
							return n.Tl.add(t.toString());
						});
					})
					.next(function () {
						return r.Va(t, e);
					});
			}),
			(t.prototype.ll = function () {
				this.wl = new Set();
			}),
			(t.prototype._l = function (t) {
				var e = this,
					n = this.persistence.Ec().ra();
				return ph
					.forEach(this.Tl, function (r) {
						var i = Ts.D(r);
						return e.El(t, i).next(function (t) {
							t || n.Ar(i);
						});
					})
					.next(function () {
						return (e.wl = null), n.apply(t);
					});
			}),
			(t.prototype.yc = function (t, e) {
				var n = this;
				return this.El(t, e).next(function (t) {
					t ? n.Tl.delete(e.toString()) : n.Tl.add(e.toString());
				});
			}),
			(t.prototype.hl = function (t) {
				return 0;
			}),
			(t.prototype.El = function (t, e) {
				var n = this;
				return ph.kn([
					function () {
						return ph.resolve(n.dl.Ho(e));
					},
					function () {
						return n.persistence.Tc().Ho(t, e);
					},
					function () {
						return n.persistence.fl(t, e);
					}
				]);
			}),
			t
		);
	})(),
	Zp = (function () {
		function t(t) {
			(this.Il = t.Il), (this.Al = t.Al);
		}
		return (
			(t.prototype.gu = function (t) {
				this.Rl = t;
			}),
			(t.prototype.Tu = function (t) {
				this.gl = t;
			}),
			(t.prototype.onMessage = function (t) {
				this.Pl = t;
			}),
			(t.prototype.close = function () {
				this.Al();
			}),
			(t.prototype.send = function (t) {
				this.Il(t);
			}),
			(t.prototype.yl = function () {
				this.Rl();
			}),
			(t.prototype.Vl = function (t) {
				this.gl(t);
			}),
			(t.prototype.pl = function (t) {
				this.Pl(t);
			}),
			t
		);
	})(),
	td = { BatchGetDocuments: 'batchGet', Commit: 'commit', RunQuery: 'runQuery' },
	ed = (function (t) {
		function e(e) {
			var n = this;
			return ((n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling), (n.W = e.W), n;
		}
		return (
			te(e, t),
			(e.prototype.Nl = function (t, e, n, r) {
				return new Promise(function (i, o) {
					var s = new os();
					s.listenOnce(rs.COMPLETE, function () {
						try {
							switch (s.getLastErrorCode()) {
								case ns.NO_ERROR:
									var e = s.getResponseJson();
									hs('Connection', 'XHR received:', JSON.stringify(e)), i(e);
									break;
								case ns.TIMEOUT:
									hs('Connection', 'RPC "' + t + '" timed out'),
										o(new us(ss.DEADLINE_EXCEEDED, 'Request time out'));
									break;
								case ns.HTTP_ERROR:
									var n = s.getStatus();
									if (
										(hs(
											'Connection',
											'RPC "' + t + '" failed with status:',
											n,
											'response text:',
											s.getResponseText()
										),
										n > 0)
									) {
										var r = s.getResponseJson().error;
										if (r && r.status && r.message) {
											var u =
												((a = r.status),
												(c = a.toLowerCase().replace('_', '-')),
												Object.values(ss).indexOf(c) >= 0 ? c : ss.UNKNOWN);
											o(new us(u, r.message));
										} else o(new us(ss.UNKNOWN, 'Server responded with status ' + s.getStatus()));
									} else o(new us(ss.UNAVAILABLE, 'Connection failed.'));
									break;
								default:
									ds();
							}
						} finally {
							hs('Connection', 'RPC "' + t + '" completed.');
						}
						var a, c;
					});
					var u = JSON.stringify(r);
					s.send(e, 'POST', u, n, 15);
				});
			}),
			(e.prototype.Pu = function (t, e) {
				var n,
					r,
					i = [this.vl, '/', 'google.firestore.v1.Firestore', '/', t, '/channel'],
					o = new Yo(),
					s = {
						httpSessionIdParam: 'gsessionid',
						initMessageHeaders: {},
						messageUrlParams: {
							database: 'projects/' + this.U.projectId + '/databases/' + this.U.database
						},
						sendRawJson: !0,
						supportsCrossDomainXhr: !0,
						internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
						forceLongPolling: this.forceLongPolling,
						detectBufferingProxy: this.W
					};
				this.Cl(s.initMessageHeaders, e),
					('undefined' != typeof window &&
						(window.cordova || window.phonegap || window.PhoneGap) &&
						/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())) ||
						('object' == typeof navigator && 'ReactNative' === navigator.product) ||
						ce().indexOf('Electron/') >= 0 ||
						(r = ce()).indexOf('MSIE ') >= 0 ||
						r.indexOf('Trident/') >= 0 ||
						ce().indexOf('MSAppHost/') >= 0 ||
						('object' ==
							typeof (n =
								'object' == typeof chrome
									? chrome.runtime
									: 'object' == typeof browser
									? browser.runtime
									: void 0) &&
							void 0 !== n.id) ||
						(s.httpHeadersOverwriteParam = '$httpHeaders');
				var u = i.join('');
				hs('Connection', 'Creating WebChannel: ' + u, s);
				var a = o.createWebChannel(u, s),
					c = !1,
					h = !1,
					f = new Zp({
						Il: function (t) {
							h
								? hs('Connection', 'Not sending because WebChannel is closed:', t)
								: (c || (hs('Connection', 'Opening WebChannel transport.'), a.open(), (c = !0)),
								  hs('Connection', 'WebChannel sending:', t),
								  a.send(t));
						},
						Al: function () {
							return a.close();
						}
					}),
					l = function (t, e) {
						a.listen(t, function (t) {
							try {
								e(t);
							} catch (n) {
								setTimeout(function () {
									throw n;
								}, 0);
							}
						});
					};
				return (
					l(is.EventType.OPEN, function () {
						h || hs('Connection', 'WebChannel transport opened.');
					}),
					l(is.EventType.CLOSE, function () {
						h || ((h = !0), hs('Connection', 'WebChannel transport closed'), f.Vl());
					}),
					l(is.EventType.ERROR, function (t) {
						h ||
							((h = !0),
							ls('Connection', 'WebChannel transport errored:', t),
							f.Vl(new us(ss.UNAVAILABLE, 'The operation could not be completed')));
					}),
					l(is.EventType.MESSAGE, function (t) {
						var e;
						if (!h) {
							var n = t.data[0];
							vs(!!n);
							var r = n,
								i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
							if (i) {
								hs('Connection', 'WebChannel received error:', i);
								var o = i.status,
									s = (function (t) {
										var e = pu[t];
										if (void 0 !== e) return mu(e);
									})(o),
									u = i.message;
								void 0 === s &&
									((s = ss.INTERNAL),
									(u = 'Unknown error status: ' + o + ' with message ' + i.message)),
									(h = !0),
									f.Vl(new us(s, u)),
									a.close();
							} else hs('Connection', 'WebChannel received:', n), f.pl(n);
						}
					}),
					setTimeout(function () {
						f.yl();
					}, 0),
					f
				);
			}),
			e
		);
	})(
		(function () {
			function t(t) {
				(this.bl = t), (this.U = t.U);
				var e = t.ssl ? 'https' : 'http';
				(this.vl = e + '://' + t.host),
					(this.Sl =
						'projects/' + this.U.projectId + '/databases/' + this.U.database + '/documents');
			}
			return (
				(t.prototype.$u = function (t, e, n, r) {
					var i = this.Dl(t, e);
					hs('RestConnection', 'Sending: ', i, n);
					var o = {};
					return (
						this.Cl(o, r),
						this.Nl(t, i, o, n).then(
							function (t) {
								return hs('RestConnection', 'Received: ', t), t;
							},
							function (e) {
								throw (
									(ls('RestConnection', t + ' failed with error: ', e, 'url: ', i, 'request:', n),
									e)
								);
							}
						)
					);
				}),
				(t.prototype.ku = function (t, e, n, r) {
					return this.$u(t, e, n, r);
				}),
				(t.prototype.Cl = function (t, e) {
					if (
						((t['X-Goog-Api-Client'] = 'gl-js/ fire/7.24.0'), (t['Content-Type'] = 'text/plain'), e)
					)
						for (var n in e.Kc) e.Kc.hasOwnProperty(n) && (t[n] = e.Kc[n]);
				}),
				(t.prototype.Dl = function (t, e) {
					var n = td[t];
					return this.vl + '/v1/' + e + ':' + n;
				}),
				t
			);
		})()
	),
	nd = (function () {
		function t() {
			var t = this;
			(this.Fl = function () {
				return t.xl();
			}),
				(this.$l = function () {
					return t.kl();
				}),
				(this.Ml = []),
				this.Ol();
		}
		return (
			(t.prototype.Zu = function (t) {
				this.Ml.push(t);
			}),
			(t.prototype.Di = function () {
				window.removeEventListener('online', this.Fl),
					window.removeEventListener('offline', this.$l);
			}),
			(t.prototype.Ol = function () {
				window.addEventListener('online', this.Fl), window.addEventListener('offline', this.$l);
			}),
			(t.prototype.xl = function () {
				hs('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
				for (var t = 0, e = this.Ml; t < e.length; t++) (0, e[t])(0);
			}),
			(t.prototype.kl = function () {
				hs('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
				for (var t = 0, e = this.Ml; t < e.length; t++) (0, e[t])(1);
			}),
			(t.Ln = function () {
				return (
					'undefined' != typeof window &&
					void 0 !== window.addEventListener &&
					void 0 !== window.removeEventListener
				);
			}),
			t
		);
	})(),
	rd = (function () {
		function t() {}
		return (t.prototype.Zu = function (t) {}), (t.prototype.Di = function () {}), t;
	})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function id(t) {
	return new da(t, !0);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var od =
		'You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.',
	sd = (function () {
		function t() {}
		return (
			(t.prototype.initialize = function (t) {
				return ne(this, void 0, void 0, function () {
					return re(this, function (e) {
						switch (e.label) {
							case 0:
								return (
									(this.Sh = this.Ll(t)),
									(this.persistence = this.Bl(t)),
									[4, this.persistence.start()]
								);
							case 1:
								return e.sent(), (this.ql = this.Ul(t)), (this.ju = this.Ql(t)), [2];
						}
					});
				});
			}),
			(t.prototype.Ul = function (t) {
				return null;
			}),
			(t.prototype.Ql = function (t) {
				return (e = this.persistence), (n = new Hp()), (r = t.Wl), new dl(e, n, r);
				var e, n, r;
			}),
			(t.prototype.Bl = function (t) {
				if (t.persistenceSettings.jl) throw new us(ss.FAILED_PRECONDITION, od);
				return new Xp(Jp.ml);
			}),
			(t.prototype.Ll = function (t) {
				return new Kh();
			}),
			(t.prototype.terminate = function () {
				return ne(this, void 0, void 0, function () {
					return re(this, function (t) {
						switch (t.label) {
							case 0:
								return this.ql && this.ql.stop(), [4, this.Sh.Di()];
							case 1:
								return t.sent(), [4, this.persistence.Di()];
							case 2:
								return t.sent(), [2];
						}
					});
				});
			}),
			(t.prototype.clearPersistence = function (t, e) {
				throw new us(ss.FAILED_PRECONDITION, od);
			}),
			t
		);
	})(),
	ud = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.initialize = function (e) {
				return ne(this, void 0, void 0, function () {
					var n,
						r = this;
					return re(this, function (i) {
						switch (i.label) {
							case 0:
								return [4, t.prototype.initialize.call(this, e)];
							case 1:
								return (
									i.sent(),
									(n = this.Kl.fi),
									this.Sh instanceof $h
										? ((this.Sh.fi = {
												er: Up.bind(null, n),
												nr: qp.bind(null, n),
												sr: Bp.bind(null, n),
												pi: Vp.bind(null, n)
										  }),
										  [4, this.Sh.start()])
										: [3, 3]
								);
							case 2:
								i.sent(), (i.label = 3);
							case 3:
								return [
									4,
									this.persistence.Xa(function (t) {
										return ne(r, void 0, void 0, function () {
											return re(this, function (e) {
												switch (e.label) {
													case 0:
														return [4, jp(this.Kl.fi, t)];
													case 1:
														return (
															e.sent(),
															this.ql &&
																(t && !this.ql.Ei ? this.ql.start(this.ju) : t || this.ql.stop()),
															[2]
														);
												}
											});
										});
									})
								];
							case 4:
								return i.sent(), [2];
						}
					});
				});
			}),
			(e.prototype.Ll = function (t) {
				if (t.persistenceSettings.jl && t.persistenceSettings.synchronizeTabs) {
					var e = _h();
					if (!$h.Ln(e))
						throw new us(
							ss.UNIMPLEMENTED,
							'IndexedDB persistence is only available on platforms that support LocalStorage.'
						);
					var n = pl(t.bl.U, t.bl.persistenceKey);
					return new $h(e, t.cs, n, t.clientId, t.Wl);
				}
				return new Kh();
			}),
			e
		);
	})(
		(function (t) {
			function e(e) {
				var n = this;
				return ((n = t.call(this) || this).Kl = e), n;
			}
			return (
				te(e, t),
				(e.prototype.initialize = function (e) {
					return ne(this, void 0, void 0, function () {
						return re(this, function (n) {
							switch (n.label) {
								case 0:
									return [4, t.prototype.initialize.call(this, e)];
								case 1:
									return n.sent(), [4, Tl(this.ju)];
								case 2:
									return n.sent(), [4, this.Kl.initialize(this, e)];
								case 3:
									return n.sent(), [4, zp(this.Kl.fi)];
								case 4:
									return n.sent(), [4, ep(this.Kl.ph)];
								case 5:
									return n.sent(), [2];
							}
						});
					});
				}),
				(e.prototype.Ul = function (t) {
					var e = this.persistence.No.wo;
					return new sf(e, t.cs);
				}),
				(e.prototype.Bl = function (t) {
					var e = pl(t.bl.U, t.bl.persistenceKey),
						n = id(t.bl.U);
					return new al(
						t.persistenceSettings.synchronizeTabs,
						e,
						t.clientId,
						of.ao(t.persistenceSettings.cacheSizeBytes),
						t.cs,
						_h(),
						Th(),
						n,
						this.Sh,
						t.persistenceSettings.ka
					);
				}),
				(e.prototype.Ll = function (t) {
					return new Kh();
				}),
				(e.prototype.clearPersistence = function (t, e) {
					return (function (t) {
						return ne(this, void 0, void 0, function () {
							var e;
							return re(this, function (n) {
								switch (n.label) {
									case 0:
										return dh.Ln() ? ((e = t + 'main'), [4, dh.delete(e)]) : [2, Promise.resolve()];
									case 1:
										return n.sent(), [2];
								}
							});
						});
					})(pl(t, e));
				}),
				e
			);
		})(sd)
	),
	ad = (function () {
		function t() {}
		return (
			(t.prototype.initialize = function (t, e) {
				return ne(this, void 0, void 0, function () {
					var n = this;
					return re(this, function (r) {
						switch (r.label) {
							case 0:
								return this.ju
									? [3, 2]
									: ((this.ju = t.ju),
									  (this.Sh = t.Sh),
									  (this.Ku = this.Gl(e)),
									  (this.ph = this.zl(e)),
									  (this.bh = this.Hl(e)),
									  (this.fi = this.Yl(e)),
									  (this.Sh.di = function (t) {
											return Ep(n.fi, t, 1);
									  }),
									  (this.ph.Gu.Jl = Pp.bind(null, this.fi)),
									  [4, ap(this.ph, this.fi.Uh)]);
							case 1:
								r.sent(), (r.label = 2);
							case 2:
								return [2];
						}
					});
				});
			}),
			(t.prototype.Hl = function (t) {
				return new kh();
			}),
			(t.prototype.Gl = function (t) {
				var e,
					n,
					r = id(t.bl.U),
					i = ((e = t.bl), new ed(e));
				return (n = t.credentials), new Ul(n, i, r);
			}),
			(t.prototype.zl = function (t) {
				var e,
					n,
					r,
					i,
					o,
					s = this;
				return (
					(e = this.ju),
					(n = this.Ku),
					(r = t.cs),
					(i = function (t) {
						return Ep(s.fi, t, 0);
					}),
					(o = nd.Ln() ? new nd() : new rd()),
					new Fl(e, n, r, i, o)
				);
			}),
			(t.prototype.Yl = function (t) {
				return (
					(e = this.ju),
					(n = this.ph),
					(r = this.bh),
					(i = this.Sh),
					(o = t.Wl),
					(s = t.Dh),
					(u = !t.persistenceSettings.jl || !t.persistenceSettings.synchronizeTabs),
					(a = new yp(e, n, r, i, o, s)),
					u && (a.qh = !0),
					a
				);
				var e, n, r, i, o, s, u, a;
			}),
			(t.prototype.terminate = function () {
				return ql(this.ph);
			}),
			t
		);
	})(),
	cd = (function () {
		function t(t) {
			(this.observer = t), (this.muted = !1);
		}
		return (
			(t.prototype.next = function (t) {
				this.observer.next && this.Xl(this.observer.next, t);
			}),
			(t.prototype.error = function (t) {
				this.observer.error
					? this.Xl(this.observer.error, t)
					: console.error('Uncaught Error in snapshot listener:', t);
			}),
			(t.prototype.Zl = function () {
				this.muted = !0;
			}),
			(t.prototype.Xl = function (t, e) {
				var n = this;
				this.muted ||
					setTimeout(function () {
						n.muted || t(e);
					}, 0);
			}),
			t
		);
	})(),
	hd = function (t) {
		!(function (t, e, n, r) {
			if (!(e instanceof Array) || e.length < 1)
				throw new us(
					ss.INVALID_ARGUMENT,
					'Function FieldPath() requires its fieldNames argument to be an array with at least ' +
						Gs(1, 'element') +
						'.'
				);
		})(0, t);
		for (var e = 0; e < t.length; ++e)
			if ((ks('FieldPath', 'string', e, t[e]), 0 === t[e].length))
				throw new us(
					ss.INVALID_ARGUMENT,
					'Invalid field name at argument $(i + 1). Field names must not be empty.'
				);
		this.t_ = new _s(t);
	},
	fd = (function (t) {
		function e() {
			for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
			return t.call(this, e) || this;
		}
		return (
			te(e, t),
			(e.documentId = function () {
				return new e(_s.v().R());
			}),
			(e.prototype.isEqual = function (t) {
				if (!(t instanceof e)) throw Vs('isEqual', 'FieldPath', 1, t);
				return this.t_.isEqual(t.t_);
			}),
			e
		);
	})(hd),
	ld = new RegExp('[~\\*/\\[\\]]'),
	pd = function (t) {
		this.e_ = t;
	},
	dd = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.n_ = function (t) {
				if (2 !== t.s_)
					throw 1 === t.s_
						? t.i_(this.e_ + '() can only appear at the top level of your update data')
						: t.i_(this.e_ + '() cannot be used with set() unless you pass {merge:true}');
				return t.We.push(t.path), null;
			}),
			(e.prototype.isEqual = function (t) {
				return t instanceof e;
			}),
			e
		);
	})(pd);
function vd(t, e, n) {
	return new Sd(
		{ s_: 3, r_: e.settings.r_, methodName: t.e_, o_: n },
		e.U,
		e.serializer,
		e.ignoreUndefinedProperties
	);
}
var yd = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.n_ = function (t) {
				return new sc(t.path, new Ya());
			}),
			(e.prototype.isEqual = function (t) {
				return t instanceof e;
			}),
			e
		);
	})(pd),
	gd = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this, e) || this).a_ = n), r;
		}
		return (
			te(e, t),
			(e.prototype.n_ = function (t) {
				var e = vd(this, t, !0),
					n = this.a_.map(function (t) {
						return Pd(t, e);
					}),
					r = new Ja(n);
				return new sc(t.path, r);
			}),
			(e.prototype.isEqual = function (t) {
				return this === t;
			}),
			e
		);
	})(pd),
	md = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this, e) || this).a_ = n), r;
		}
		return (
			te(e, t),
			(e.prototype.n_ = function (t) {
				var e = vd(this, t, !0),
					n = this.a_.map(function (t) {
						return Pd(t, e);
					}),
					r = new tc(n);
				return new sc(t.path, r);
			}),
			(e.prototype.isEqual = function (t) {
				return this === t;
			}),
			e
		);
	})(pd),
	bd = (function (t) {
		function e(e, n) {
			var r = this;
			return ((r = t.call(this, e) || this).c_ = n), r;
		}
		return (
			te(e, t),
			(e.prototype.n_ = function (t) {
				var e = new nc(t.serializer, ga(t.serializer, this.c_));
				return new sc(t.path, e);
			}),
			(e.prototype.isEqual = function (t) {
				return this === t;
			}),
			e
		);
	})(pd),
	wd = (function () {
		function t(t, e) {
			if (
				(Ns('GeoPoint', arguments, 2),
				ks('GeoPoint', 'number', 1, t),
				ks('GeoPoint', 'number', 2, e),
				!isFinite(t) || t < -90 || t > 90)
			)
				throw new us(
					ss.INVALID_ARGUMENT,
					'Latitude must be a number between -90 and 90, but was: ' + t
				);
			if (!isFinite(e) || e < -180 || e > 180)
				throw new us(
					ss.INVALID_ARGUMENT,
					'Longitude must be a number between -180 and 180, but was: ' + e
				);
			(this.u_ = t), (this.h_ = e);
		}
		return (
			Object.defineProperty(t.prototype, 'latitude', {
				get: function () {
					return this.u_;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'longitude', {
				get: function () {
					return this.h_;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (t) {
				return this.u_ === t.u_ && this.h_ === t.h_;
			}),
			(t.prototype.toJSON = function () {
				return { latitude: this.u_, longitude: this.h_ };
			}),
			(t.prototype.Y = function (t) {
				return $s(this.u_, t.u_) || $s(this.h_, t.h_);
			}),
			t
		);
	})(),
	Ed = function (t) {
		this.l_ = t;
	},
	Id = /^__.*__$/,
	_d = function (t, e, n) {
		(this.__ = t), (this.f_ = e), (this.d_ = n);
	},
	Td = (function () {
		function t(t, e, n) {
			(this.data = t), (this.We = e), (this.fieldTransforms = n);
		}
		return (
			(t.prototype.w_ = function (t, e) {
				var n = [];
				return (
					null !== this.We
						? n.push(new gc(t, this.data, this.We, e))
						: n.push(new yc(t, this.data, e)),
					this.fieldTransforms.length > 0 && n.push(new bc(t, this.fieldTransforms)),
					n
				);
			}),
			t
		);
	})(),
	Ad = (function () {
		function t(t, e, n) {
			(this.data = t), (this.We = e), (this.fieldTransforms = n);
		}
		return (
			(t.prototype.w_ = function (t, e) {
				var n = [new gc(t, this.data, this.We, e)];
				return this.fieldTransforms.length > 0 && n.push(new bc(t, this.fieldTransforms)), n;
			}),
			t
		);
	})();
function Nd(t) {
	switch (t) {
		case 0:
		case 2:
		case 1:
			return !0;
		case 3:
		case 4:
			return !1;
		default:
			throw ds();
	}
}
var Sd = (function () {
		function t(t, e, n, r, i, o) {
			(this.settings = t),
				(this.U = e),
				(this.serializer = n),
				(this.ignoreUndefinedProperties = r),
				void 0 === i && this.m_(),
				(this.fieldTransforms = i || []),
				(this.We = o || []);
		}
		return (
			Object.defineProperty(t.prototype, 'path', {
				get: function () {
					return this.settings.path;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 's_', {
				get: function () {
					return this.settings.s_;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.T_ = function (e) {
				return new t(
					Object.assign(Object.assign({}, this.settings), e),
					this.U,
					this.serializer,
					this.ignoreUndefinedProperties,
					this.fieldTransforms,
					this.We
				);
			}),
			(t.prototype.E_ = function (t) {
				var e,
					n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
					r = this.T_({ path: n, o_: !1 });
				return r.I_(t), r;
			}),
			(t.prototype.A_ = function (t) {
				var e,
					n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
					r = this.T_({ path: n, o_: !1 });
				return r.m_(), r;
			}),
			(t.prototype.R_ = function (t) {
				return this.T_({ path: void 0, o_: !0 });
			}),
			(t.prototype.i_ = function (t) {
				return Md(t, this.settings.methodName, this.settings.g_ || !1, this.path, this.settings.r_);
			}),
			(t.prototype.contains = function (t) {
				return (
					void 0 !==
						this.We.find(function (e) {
							return t.T(e);
						}) ||
					void 0 !==
						this.fieldTransforms.find(function (e) {
							return t.T(e.field);
						})
				);
			}),
			(t.prototype.m_ = function () {
				if (this.path) for (var t = 0; t < this.path.length; t++) this.I_(this.path.get(t));
			}),
			(t.prototype.I_ = function (t) {
				if (0 === t.length) throw this.i_('Document fields must not be empty');
				if (Nd(this.s_) && Id.test(t))
					throw this.i_('Document fields cannot begin and end with "__"');
			}),
			t
		);
	})(),
	Dd = (function () {
		function t(t, e, n) {
			(this.U = t), (this.ignoreUndefinedProperties = e), (this.serializer = n || id(t));
		}
		return (
			(t.prototype.P_ = function (t, e, n, r) {
				return (
					void 0 === r && (r = !1),
					new Sd(
						{ s_: t, methodName: e, r_: n, path: _s.P(), o_: !1, g_: r },
						this.U,
						this.serializer,
						this.ignoreUndefinedProperties
					)
				);
			}),
			t
		);
	})();
function kd(t, e, n, r, i, o) {
	void 0 === o && (o = {});
	var s = t.P_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
	Ud('Data must be an object, but it was:', s, r);
	var u,
		a,
		c = Cd(r, s);
	if (o.merge) (u = new oc(s.We)), (a = s.fieldTransforms);
	else if (o.mergeFields) {
		for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
			var p = l[f],
				d = void 0;
			if (p instanceof hd) d = p.t_;
			else {
				if ('string' != typeof p) throw ds();
				d = Fd(e, p, n);
			}
			if (!s.contains(d))
				throw new us(
					ss.INVALID_ARGUMENT,
					"Field '" + d + "' is specified in your field mask but missing from your input data."
				);
			Vd(h, d) || h.push(d);
		}
		(u = new oc(h)),
			(a = s.fieldTransforms.filter(function (t) {
				return u.Ye(t.field);
			}));
	} else (u = null), (a = s.fieldTransforms);
	return new Td(new Tc(c), u, a);
}
function xd(t, e, n, r) {
	var i = t.P_(1, e, n);
	Ud('Data must be an object, but it was:', i, r);
	var o = [],
		s = new Ac();
	ms(r, function (t, r) {
		var u = Fd(e, t, n),
			a = i.A_(u);
		if (r instanceof dd || (r instanceof Ed && r.l_ instanceof dd)) o.push(u);
		else {
			var c = Pd(r, a);
			null != c && (o.push(u), s.set(u, c));
		}
	});
	var u = new oc(o);
	return new Ad(s.Xe(), u, i.fieldTransforms);
}
function Od(t, e, n, r, i, o) {
	var s = t.P_(1, e, n),
		u = [jd(e, r, n)],
		a = [i];
	if (o.length % 2 != 0)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Function ' +
				e +
				'() needs to be called with an even number of arguments that alternate between field names and values.'
		);
	for (var c = 0; c < o.length; c += 2) u.push(jd(e, o[c])), a.push(o[c + 1]);
	for (var h = [], f = new Ac(), l = u.length - 1; l >= 0; --l)
		if (!Vd(h, u[l])) {
			var p = u[l],
				d = a[l],
				v = s.A_(p);
			if (d instanceof dd || (d instanceof Ed && d.l_ instanceof dd)) h.push(p);
			else {
				var y = Pd(d, v);
				null != y && (h.push(p), f.set(p, y));
			}
		}
	var g = new oc(h);
	return new Ad(f.Xe(), g, s.fieldTransforms);
}
function Ld(t, e, n, r) {
	return void 0 === r && (r = !1), Pd(n, t.P_(r ? 4 : 3, e));
}
function Pd(t, e) {
	if ((t instanceof Ed && (t = t.l_), Rd(t))) return Ud('Unsupported field value:', e, t), Cd(t, e);
	if (t instanceof pd)
		return (
			(function (t, e) {
				if (!Nd(e.s_)) throw e.i_(t.e_ + '() can only be used with update() and set()');
				if (!e.path) throw e.i_(t.e_ + '() is not currently supported inside arrays');
				var n = t.n_(e);
				n && e.fieldTransforms.push(n);
			})(t, e),
			null
		);
	if ((e.path && e.We.push(e.path), t instanceof Array)) {
		if (e.settings.o_ && 4 !== e.s_) throw e.i_('Nested arrays are not supported');
		return (function (t, e) {
			for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
				var s = Pd(o[i], e.R_(r));
				null == s && (s = { nullValue: 'NULL_VALUE' }), n.push(s), r++;
			}
			return { arrayValue: { values: n } };
		})(t, e);
	}
	return (function (t, e) {
		if (null === t) return { nullValue: 'NULL_VALUE' };
		if ('number' == typeof t) return ga(e.serializer, t);
		if ('boolean' == typeof t) return { booleanValue: t };
		if ('string' == typeof t) return { stringValue: t };
		if (t instanceof Date) {
			var n = ru.fromDate(t);
			return { timestampValue: ma(e.serializer, n) };
		}
		if (t instanceof ru) {
			var r = new ru(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
			return { timestampValue: ma(e.serializer, r) };
		}
		if (t instanceof wd) return { geoPointValue: { latitude: t.latitude, longitude: t.longitude } };
		if (t instanceof Xs) return { bytesValue: ba(e.serializer, t.q) };
		if (t instanceof _d) {
			var i = e.U,
				o = t.__;
			if (!o.isEqual(i))
				throw e.i_(
					'Document reference is for database ' +
						o.projectId +
						'/' +
						o.database +
						' but should be for database ' +
						i.projectId +
						'/' +
						i.database
				);
			return { referenceValue: Ia(t.__ || e.U, t.f_.path) };
		}
		if (void 0 === t && e.ignoreUndefinedProperties) return null;
		throw e.i_('Unsupported field value: ' + js(t));
	})(t, e);
}
function Cd(t, e) {
	var n = {};
	return (
		bs(t)
			? e.path && e.path.length > 0 && e.We.push(e.path)
			: ms(t, function (t, r) {
					var i = Pd(r, e.E_(t));
					null != i && (n[t] = i);
			  }),
		{ mapValue: { fields: n } }
	);
}
function Rd(t) {
	return !(
		'object' != typeof t ||
		null === t ||
		t instanceof Array ||
		t instanceof Date ||
		t instanceof ru ||
		t instanceof wd ||
		t instanceof Xs ||
		t instanceof _d ||
		t instanceof pd
	);
}
function Ud(t, e, n) {
	if (!Rd(n) || !Us(n)) {
		var r = js(n);
		throw 'an object' === r ? e.i_(t + ' a custom object') : e.i_(t + ' ' + r);
	}
}
function jd(t, e, n) {
	if (e instanceof hd) return e.t_;
	if ('string' == typeof e) return Fd(t, e);
	throw Md('Field path arguments must be of type string or FieldPath.', t, !1, void 0, n);
}
function Fd(t, e, n) {
	try {
		return (function (t) {
			if (t.search(ld) >= 0)
				throw new us(
					ss.INVALID_ARGUMENT,
					'Invalid field path (' + t + "). Paths must not contain '~', '*', '/', '[', or ']'"
				);
			try {
				return new (fd.bind.apply(fd, oe([void 0], t.split('.'))))();
			} catch (e) {
				throw new us(
					ss.INVALID_ARGUMENT,
					'Invalid field path (' +
						t +
						"). Paths must not be empty, begin with '.', end with '.', or contain '..'"
				);
			}
		})(e).t_;
	} catch (i) {
		throw Md((r = i) instanceof Error ? r.message : r.toString(), t, !1, void 0, n);
	}
	var r;
}
function Md(t, e, n, r, i) {
	var o = r && !r.m(),
		s = void 0 !== i,
		u = 'Function ' + e + '() called with invalid data';
	n && (u += ' (via `toFirestore()`)');
	var a = '';
	return (
		(o || s) &&
			((a += ' (found'), o && (a += ' in field ' + r), s && (a += ' in document ' + i), (a += ')')),
		new us(ss.INVALID_ARGUMENT, (u += '. ') + t + a)
	);
}
function Vd(t, e) {
	return t.some(function (t) {
		return t.isEqual(e);
	});
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var qd = (function () {
		function t(t) {
			(this.Ku = t),
				(this.y_ = new Map()),
				(this.mutations = []),
				(this.V_ = !1),
				(this.p_ = null),
				(this.b_ = new Set());
		}
		return (
			(t.prototype.v_ = function (t) {
				return ne(this, void 0, void 0, function () {
					var e,
						n = this;
					return re(this, function (r) {
						switch (r.label) {
							case 0:
								if ((this.S_(), this.mutations.length > 0))
									throw new us(
										ss.INVALID_ARGUMENT,
										'Firestore transactions require all reads to be executed before all writes.'
									);
								return [
									4,
									(function (t, e) {
										return ne(this, void 0, void 0, function () {
											var n, r, i, o, s, u;
											return re(this, function (a) {
												switch (a.label) {
													case 0:
														return (
															(n = ys(t)),
															(r = Da(n.serializer) + '/documents'),
															(i = {
																documents: e.map(function (t) {
																	return Ta(n.serializer, t);
																})
															}),
															[4, n.ku('BatchGetDocuments', r, i)]
														);
													case 1:
														return (
															(o = a.sent()),
															(s = new Map()),
															o.forEach(function (t) {
																var e,
																	r,
																	i =
																		((e = n.serializer),
																		'found' in (r = t)
																			? (function (t, e) {
																					vs(!!e.found), e.found.name, e.found.updateTime;
																					var n = Aa(t, e.found.name),
																						r = Ea(e.found.updateTime),
																						i = new Tc({ mapValue: { fields: e.found.fields } });
																					return new Dc(n, r, i, {});
																			  })(e, r)
																			: 'missing' in r
																			? (function (t, e) {
																					vs(!!e.missing), vs(!!e.readTime);
																					var n = Aa(t, e.missing),
																						r = Ea(e.readTime);
																					return new kc(n, r);
																			  })(e, r)
																			: ds());
																s.set(i.key.toString(), i);
															}),
															(u = []),
															[
																2,
																(e.forEach(function (t) {
																	var e = s.get(t.toString());
																	vs(!!e), u.push(e);
																}),
																u)
															]
														);
												}
											});
										});
									})(this.Ku, t)
								];
							case 1:
								return [
									2,
									((e = r.sent()).forEach(function (t) {
										t instanceof kc || t instanceof Dc ? n.D_(t) : ds();
									}),
									e)
								];
						}
					});
				});
			}),
			(t.prototype.set = function (t, e) {
				this.write(e.w_(t, this.Ge(t))), this.b_.add(t.toString());
			}),
			(t.prototype.update = function (t, e) {
				try {
					this.write(e.w_(t, this.C_(t)));
				} catch (n) {
					this.p_ = n;
				}
				this.b_.add(t.toString());
			}),
			(t.prototype.delete = function (t) {
				this.write([new Ic(t, this.Ge(t))]), this.b_.add(t.toString());
			}),
			(t.prototype.commit = function () {
				return ne(this, void 0, void 0, function () {
					var t,
						e = this;
					return re(this, function (n) {
						switch (n.label) {
							case 0:
								if ((this.S_(), this.p_)) throw this.p_;
								return (
									(t = this.y_),
									this.mutations.forEach(function (e) {
										t.delete(e.key.toString());
									}),
									t.forEach(function (t, n) {
										var r = Ts.D(n);
										e.mutations.push(new _c(r, e.Ge(r)));
									}),
									[
										4,
										(function (t, e) {
											return ne(this, void 0, void 0, function () {
												var n, r, i;
												return re(this, function (o) {
													switch (o.label) {
														case 0:
															return (
																(n = ys(t)),
																(r = Da(n.serializer) + '/documents'),
																(i = {
																	writes: e.map(function (t) {
																		return Oa(n.serializer, t);
																	})
																}),
																[4, n.$u('Commit', r, i)]
															);
														case 1:
															return o.sent(), [2];
													}
												});
											});
										})(this.Ku, this.mutations)
									]
								);
							case 1:
								return n.sent(), (this.V_ = !0), [2];
						}
					});
				});
			}),
			(t.prototype.D_ = function (t) {
				var e;
				if (t instanceof Dc) e = t.version;
				else {
					if (!(t instanceof kc)) throw ds();
					e = iu.min();
				}
				var n = this.y_.get(t.key.toString());
				if (n) {
					if (!e.isEqual(n))
						throw new us(ss.ABORTED, 'Document version changed between two reads.');
				} else this.y_.set(t.key.toString(), e);
			}),
			(t.prototype.Ge = function (t) {
				var e = this.y_.get(t.toString());
				return !this.b_.has(t.toString()) && e ? ac.updateTime(e) : ac.ze();
			}),
			(t.prototype.C_ = function (t) {
				var e = this.y_.get(t.toString());
				if (!this.b_.has(t.toString()) && e) {
					if (e.isEqual(iu.min()))
						throw new us(ss.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
					return ac.updateTime(e);
				}
				return ac.exists(!0);
			}),
			(t.prototype.write = function (t) {
				this.S_(), (this.mutations = this.mutations.concat(t));
			}),
			(t.prototype.S_ = function () {}),
			t
		);
	})(),
	Bd = (function () {
		function t(t, e, n, r) {
			(this.cs = t),
				(this.Ku = e),
				(this.updateFunction = n),
				(this.ls = r),
				(this.N_ = 5),
				(this.ys = new lh(this.cs, 'transaction_retry'));
		}
		return (
			(t.prototype.run = function () {
				this.F_();
			}),
			(t.prototype.F_ = function () {
				var t = this;
				this.ys.gn(function () {
					return ne(t, void 0, void 0, function () {
						var t,
							e,
							n = this;
						return re(this, function (r) {
							return (
								(t = new qd(this.Ku)),
								(e = this.x_(t)) &&
									e
										.then(function (e) {
											n.cs.ws(function () {
												return t
													.commit()
													.then(function () {
														n.ls.resolve(e);
													})
													.catch(function (t) {
														n.k_(t);
													});
											});
										})
										.catch(function (t) {
											n.k_(t);
										}),
								[2]
							);
						});
					});
				});
			}),
			(t.prototype.x_ = function (t) {
				try {
					var e = this.updateFunction(t);
					return !ou(e) && e.catch && e.then
						? e
						: (this.ls.reject(Error('Transaction callback must return a Promise')), null);
				} catch (n) {
					return this.ls.reject(n), null;
				}
			}),
			(t.prototype.k_ = function (t) {
				var e = this;
				this.N_ > 0 && this.M_(t)
					? ((this.N_ -= 1),
					  this.cs.ws(function () {
							return e.F_(), Promise.resolve();
					  }))
					: this.ls.reject(t);
			}),
			(t.prototype.M_ = function (t) {
				if ('FirebaseError' === t.name) {
					var e = t.code;
					return 'aborted' === e || 'failed-precondition' === e || !gu(e);
				}
				return !1;
			}),
			t
		);
	})(),
	Gd = (function () {
		function t(t, e) {
			(this.credentials = t), (this.cs = e), (this.clientId = Hs.k()), (this.O_ = new fh());
		}
		return (
			(t.prototype.start = function (t, e, n, r) {
				var i = this;
				this.L_(), (this.bl = t);
				var o = new fh(),
					s = !1;
				return (
					this.credentials.Hc(function (t) {
						if (!s)
							return (
								(s = !0),
								hs('FirestoreClient', 'Initializing. user=', t.uid),
								i.B_(e, n, r, t, o).then(i.O_.resolve, i.O_.reject)
							);
						i.cs.Cs(function () {
							return (function (t, e) {
								return ne(this, void 0, void 0, function () {
									var n, r;
									return re(this, function (i) {
										switch (i.label) {
											case 0:
												return (
													(n = ys(t)).cs.xs(),
													hs('RemoteStore', 'RemoteStore received new credentials'),
													(r = Wl(n)),
													n.Yu.add(3),
													[4, Vl(n)]
												);
											case 1:
												return i.sent(), r && n.th.set('Unknown'), [4, n.Gu.Jl(e)];
											case 2:
												return i.sent(), n.Yu.delete(3), [4, Ml(n)];
											case 3:
												return i.sent(), [2];
										}
									});
								});
							})(i.ph, t);
						});
					}),
					this.cs.ws(function () {
						return i.O_.promise;
					}),
					o.promise
				);
			}),
			(t.prototype.enableNetwork = function () {
				var t = this;
				return (
					this.L_(),
					this.cs.enqueue(function () {
						return t.persistence.tc(!0), (e = t.ph), (n = ys(e)).Yu.delete(0), Ml(n);
						var e, n;
					})
				);
			}),
			(t.prototype.B_ = function (t, e, n, r, i) {
				return ne(this, void 0, void 0, function () {
					var o,
						s,
						u = this;
					return re(this, function (a) {
						switch (a.label) {
							case 0:
								return (
									a.trys.push([0, 3, , 4]),
									(o = {
										cs: this.cs,
										bl: this.bl,
										clientId: this.clientId,
										credentials: this.credentials,
										Wl: r,
										Dh: 100,
										persistenceSettings: n
									}),
									[4, t.initialize(o)]
								);
							case 1:
								return a.sent(), [4, e.initialize(t, o)];
							case 2:
								return (
									a.sent(),
									(this.persistence = t.persistence),
									(this.Sh = t.Sh),
									(this.ju = t.ju),
									(this.ql = t.ql),
									(this.Ku = e.Ku),
									(this.ph = e.ph),
									(this.fi = e.fi),
									(this.q_ = e.bh),
									(this.q_.Us = gp.bind(null, this.fi)),
									(this.q_.js = bp.bind(null, this.fi)),
									this.persistence.Za(function () {
										return ne(u, void 0, void 0, function () {
											return re(this, function (t) {
												switch (t.label) {
													case 0:
														return [4, this.terminate()];
													case 1:
														return t.sent(), [2];
												}
											});
										});
									}),
									i.resolve(),
									[3, 4]
								);
							case 3:
								if (((s = a.sent()), i.reject(s), !this.U_(s))) throw s;
								return [
									2,
									(console.warn(
										'Error enabling offline persistence. Falling back to persistence disabled: ' + s
									),
									this.B_(new sd(), new ad(), { jl: !1 }, r, i))
								];
							case 4:
								return [2];
						}
					});
				});
			}),
			(t.prototype.U_ = function (t) {
				return 'FirebaseError' === t.name
					? t.code === ss.FAILED_PRECONDITION || t.code === ss.UNIMPLEMENTED
					: !('undefined' != typeof DOMException && t instanceof DOMException) ||
							22 === t.code ||
							20 === t.code ||
							11 === t.code;
			}),
			(t.prototype.L_ = function () {
				if (this.cs.ps)
					throw new us(ss.FAILED_PRECONDITION, 'The client has already been terminated.');
			}),
			(t.prototype.disableNetwork = function () {
				var t = this;
				return (
					this.L_(),
					this.cs.enqueue(function () {
						return (
							t.persistence.tc(!1),
							(function (t) {
								return ne(this, void 0, void 0, function () {
									var e;
									return re(this, function (n) {
										switch (n.label) {
											case 0:
												return (e = ys(t)).Yu.add(0), [4, Vl(e)];
											case 1:
												return n.sent(), e.th.set('Offline'), [2];
										}
									});
								});
							})(t.ph)
						);
					})
				);
			}),
			(t.prototype.terminate = function () {
				var t = this;
				this.cs.Ds();
				var e = new fh();
				return (
					this.cs.bs(function () {
						return ne(t, void 0, void 0, function () {
							var t, n;
							return re(this, function (r) {
								switch (r.label) {
									case 0:
										return r.trys.push([0, 4, , 5]), this.ql && this.ql.stop(), [4, ql(this.ph)];
									case 1:
										return r.sent(), [4, this.Sh.Di()];
									case 2:
										return r.sent(), [4, this.persistence.Di()];
									case 3:
										return r.sent(), this.credentials.Yc(), e.resolve(), [3, 5];
									case 4:
										return (
											(t = r.sent()),
											(n = Sh(t, 'Failed to shutdown persistence')),
											e.reject(n),
											[3, 5]
										);
									case 5:
										return [2];
								}
							});
						});
					}),
					e.promise
				);
			}),
			(t.prototype.waitForPendingWrites = function () {
				var t = this;
				this.L_();
				var e = new fh();
				return (
					this.cs.ws(function () {
						return (function (t, e) {
							return ne(this, void 0, void 0, function () {
								var n, r, i, o, s;
								return re(this, function (u) {
									switch (u.label) {
										case 0:
											Wl((n = ys(t)).ph) ||
												hs(
													'SyncEngine',
													"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
												),
												(u.label = 1);
										case 1:
											return (
												u.trys.push([1, 3, , 4]),
												[
													4,
													((a = n.ju),
													(c = ys(a)),
													c.persistence.runTransaction(
														'Get highest unacknowledged batch id',
														'readonly',
														function (t) {
															return c.Sr.qo(t);
														}
													))
												]
											);
										case 2:
											return -1 === (r = u.sent())
												? [2, void e.resolve()]
												: ((i = n.Lh.get(r) || []).push(e), n.Lh.set(r, i), [3, 4]);
										case 3:
											return (
												(o = u.sent()),
												(s = Sh(o, 'Initialization of waitForPendingWrites() operation failed')),
												e.reject(s),
												[3, 4]
											);
										case 4:
											return [2];
									}
									var a, c;
								});
							});
						})(t.fi, e);
					}),
					e.promise
				);
			}),
			(t.prototype.listen = function (t, e, n) {
				var r = this;
				this.L_();
				var i = new cd(n),
					o = new Rh(t, i, e);
				return (
					this.cs.ws(function () {
						return xh(r.q_, o);
					}),
					function () {
						i.Zl(),
							r.cs.ws(function () {
								return Oh(r.q_, o);
							});
					}
				);
			}),
			(t.prototype.Q_ = function (t) {
				return ne(this, void 0, void 0, function () {
					var e,
						n = this;
					return re(this, function (r) {
						switch (r.label) {
							case 0:
								return this.L_(), [4, this.O_.promise];
							case 1:
								return (
									r.sent(),
									(e = new fh()),
									[
										2,
										(this.cs.ws(function () {
											return (function (t, e, n) {
												return ne(this, void 0, void 0, function () {
													var r, i, o;
													return re(this, function (s) {
														switch (s.label) {
															case 0:
																return (
																	s.trys.push([0, 2, , 3]),
																	[
																		4,
																		((u = t),
																		(a = e),
																		(c = ys(u)),
																		c.persistence.runTransaction(
																			'read document',
																			'readonly',
																			function (t) {
																				return c.Cc.Cr(t, a);
																			}
																		))
																	]
																);
															case 1:
																return (
																	(r = s.sent()) instanceof Dc
																		? n.resolve(r)
																		: r instanceof kc
																		? n.resolve(null)
																		: n.reject(
																				new us(
																					ss.UNAVAILABLE,
																					"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
																				)
																		  ),
																	[3, 3]
																);
															case 2:
																return (
																	(i = s.sent()),
																	(o = Sh(i, "Failed to get document '" + e + ' from cache')),
																	n.reject(o),
																	[3, 3]
																);
															case 3:
																return [2];
														}
														var u, a, c;
													});
												});
											})(n.ju, t, e);
										}),
										e.promise)
									]
								);
						}
					});
				});
			}),
			(t.prototype.W_ = function (t, e) {
				return (
					void 0 === e && (e = {}),
					ne(this, void 0, void 0, function () {
						var n,
							r = this;
						return re(this, function (i) {
							switch (i.label) {
								case 0:
									return this.L_(), [4, this.O_.promise];
								case 1:
									return (
										i.sent(),
										(n = new fh()),
										[
											2,
											(this.cs.ws(function () {
												return (
													(i = r.q_),
													(o = r.cs),
													(s = t),
													(u = e),
													(a = n),
													(c = new cd({
														next: function (t) {
															o.ws(function () {
																return Oh(i, h);
															});
															var e = t.docs.has(s);
															!e && t.fromCache
																? a.reject(
																		new us(
																			ss.UNAVAILABLE,
																			'Failed to get document because the client is offline.'
																		)
																  )
																: e && t.fromCache && u && 'server' === u.source
																? a.reject(
																		new us(
																			ss.UNAVAILABLE,
																			'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
																		)
																  )
																: a.resolve(t);
														},
														error: function (t) {
															return a.reject(t);
														}
													})),
													(h = new Rh(Pc(s.path), c, { includeMetadataChanges: !0, Xs: !0 })),
													xh(i, h)
												);
												var i, o, s, u, a, c, h;
											}),
											n.promise)
										]
									);
							}
						});
					})
				);
			}),
			(t.prototype.j_ = function (t) {
				return ne(this, void 0, void 0, function () {
					var e,
						n = this;
					return re(this, function (r) {
						switch (r.label) {
							case 0:
								return this.L_(), [4, this.O_.promise];
							case 1:
								return (
									r.sent(),
									(e = new fh()),
									[
										2,
										(this.cs.ws(function () {
											return (function (t, e, n) {
												return ne(this, void 0, void 0, function () {
													var r, i, o, s, u, a;
													return re(this, function (c) {
														switch (c.label) {
															case 0:
																return c.trys.push([0, 2, , 3]), [4, El(t, e, !0)];
															case 1:
																return (
																	(r = c.sent()),
																	(i = new pp(e, r.Fc)),
																	(o = i.wh(r.documents)),
																	(s = i.yr(o, !1)),
																	n.resolve(s.snapshot),
																	[3, 3]
																);
															case 2:
																return (
																	(u = c.sent()),
																	(a = Sh(u, "Failed to execute query '" + e + ' against cache')),
																	n.reject(a),
																	[3, 3]
																);
															case 3:
																return [2];
														}
													});
												});
											})(n.ju, t, e);
										}),
										e.promise)
									]
								);
						}
					});
				});
			}),
			(t.prototype.K_ = function (t, e) {
				return (
					void 0 === e && (e = {}),
					ne(this, void 0, void 0, function () {
						var n,
							r = this;
						return re(this, function (i) {
							switch (i.label) {
								case 0:
									return this.L_(), [4, this.O_.promise];
								case 1:
									return (
										i.sent(),
										(n = new fh()),
										[
											2,
											(this.cs.ws(function () {
												return (
													(i = r.q_),
													(o = r.cs),
													(s = t),
													(u = e),
													(a = n),
													(c = new cd({
														next: function (t) {
															o.ws(function () {
																return Oh(i, h);
															}),
																t.fromCache && 'server' === u.source
																	? a.reject(
																			new us(
																				ss.UNAVAILABLE,
																				'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
																			)
																	  )
																	: a.resolve(t);
														},
														error: function (t) {
															return a.reject(t);
														}
													})),
													(h = new Rh(s, c, { includeMetadataChanges: !0, Xs: !0 })),
													xh(i, h)
												);
												var i, o, s, u, a, c, h;
											}),
											n.promise)
										]
									);
							}
						});
					})
				);
			}),
			(t.prototype.write = function (t) {
				var e = this;
				this.L_();
				var n = new fh();
				return (
					this.cs.ws(function () {
						return (function (t, e, n) {
							return ne(this, void 0, void 0, function () {
								var r, i, o, s;
								return re(this, function (u) {
									switch (u.label) {
										case 0:
											(r = zp(t)), (u.label = 1);
										case 1:
											return (
												u.trys.push([1, 5, , 6]),
												[
													4,
													((a = r.ju),
													(c = e),
													(f = ys(a)),
													(l = ru.now()),
													(p = c.reduce(function (t, e) {
														return t.add(e.key);
													}, Ou())),
													f.persistence
														.runTransaction('Locally write mutations', 'readwrite', function (t) {
															return f.Cc.kr(t, p).next(function (e) {
																h = e;
																for (var n = [], r = 0, i = c; r < i.length; r++) {
																	var o = i[r],
																		s = pc(o, h.get(o.key));
																	null != s &&
																		n.push(new gc(o.key, s, Nc(s.proto.mapValue), ac.exists(!0)));
																}
																return f.Sr.ko(t, l, n, c);
															});
														})
														.then(function (t) {
															var e = t.lr(h);
															return { batchId: t.batchId, wr: e };
														}))
												]
											);
										case 2:
											return (
												(i = u.sent()),
												r.Sh.xi(i.batchId),
												(function (t, e, n) {
													var r = t.Oh[t.currentUser.ti()];
													r || (r = new bu($s)), (r = r.ot(e, n)), (t.Oh[t.currentUser.ti()] = r);
												})(r, i.batchId, n),
												[4, Lp(r, i.wr)]
											);
										case 3:
											return u.sent(), [4, ep(r.ph)];
										case 4:
											return u.sent(), [3, 6];
										case 5:
											return (
												(o = u.sent()), (s = Sh(o, 'Failed to persist write')), n.reject(s), [3, 6]
											);
										case 6:
											return [2];
									}
									var a, c, h, f, l, p;
								});
							});
						})(e.fi, t, n);
					}),
					n.promise
				);
			}),
			(t.prototype.U = function () {
				return this.bl.U;
			}),
			(t.prototype.G_ = function (t) {
				var e = this;
				this.L_();
				var n = new cd(t);
				return (
					this.cs.ws(function () {
						return ne(e, void 0, void 0, function () {
							return re(this, function (t) {
								return [2, ((e = this.q_), (r = n), ys(e).qs.add(r), void r.next())];
								var e, r;
							});
						});
					}),
					function () {
						n.Zl(),
							e.cs.ws(function () {
								return ne(e, void 0, void 0, function () {
									return re(this, function (t) {
										return [2, ((e = this.q_), (r = n), void ys(e).qs.delete(r))];
										var e, r;
									});
								});
							});
					}
				);
			}),
			Object.defineProperty(t.prototype, 'z_', {
				get: function () {
					return this.cs.ps;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.transaction = function (t) {
				var e = this;
				this.L_();
				var n = new fh();
				return (
					this.cs.ws(function () {
						return new Bd(e.cs, e.Ku, t, n).run(), Promise.resolve();
					}),
					n.promise
				);
			}),
			t
		);
	})();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zd(t) {
	return (function (t, e) {
		if ('object' != typeof t || null === t) return !1;
		for (var n = t, r = 0, i = ['next', 'error', 'complete']; r < i.length; r++) {
			var o = i[r];
			if (o in n && 'function' == typeof n[o]) return !0;
		}
		return !1;
	})(t);
}
var Hd = (function () {
		function t(t, e, n, r, i) {
			(this.U = t), (this.timestampsInSnapshots = e), (this.H_ = n), (this.Y_ = r), (this.J_ = i);
		}
		return (
			(t.prototype.X_ = function (t) {
				switch (Xu(t)) {
					case 0:
						return null;
					case 1:
						return t.booleanValue;
					case 2:
						return ia(t.integerValue || t.doubleValue);
					case 3:
						return this.Z_(t.timestampValue);
					case 4:
						return this.tf(t);
					case 5:
						return t.stringValue;
					case 6:
						return this.J_(oa(t.bytesValue));
					case 7:
						return this.ef(t.referenceValue);
					case 8:
						return this.nf(t.geoPointValue);
					case 9:
						return this.sf(t.arrayValue);
					case 10:
						return this.if(t.mapValue);
					default:
						throw ds();
				}
			}),
			(t.prototype.if = function (t) {
				var e = this,
					n = {};
				return (
					ms(t.fields || {}, function (t, r) {
						n[t] = e.X_(r);
					}),
					n
				);
			}),
			(t.prototype.nf = function (t) {
				return new wd(ia(t.latitude), ia(t.longitude));
			}),
			(t.prototype.sf = function (t) {
				var e = this;
				return (t.values || []).map(function (t) {
					return e.X_(t);
				});
			}),
			(t.prototype.tf = function (t) {
				switch (this.H_) {
					case 'previous':
						var e = Ku(t);
						return null == e ? null : this.X_(e);
					case 'estimate':
						return this.Z_(Wu(t));
					default:
						return null;
				}
			}),
			(t.prototype.Z_ = function (t) {
				var e = ra(t),
					n = new ru(e.seconds, e.nanos);
				return this.timestampsInSnapshots ? n : n.toDate();
			}),
			(t.prototype.ef = function (t) {
				var e = Es.g(t);
				vs($a(e));
				var n = new eu(e.get(1), e.get(3)),
					r = new Ts(e.u(5));
				return (
					n.isEqual(this.U) ||
						fs(
							'Document ' +
								r +
								' contains a document reference within a different database (' +
								n.projectId +
								'/' +
								n.database +
								') which is not supported. It will be treated as a reference in the current database (' +
								this.U.projectId +
								'/' +
								this.U.database +
								') instead.'
						),
					this.Y_(r)
				);
			}),
			t
		);
	})(),
	$d = of.ho,
	Kd = (function () {
		function t(t) {
			var e, n, r, i, o;
			if (void 0 === t.host) {
				if (void 0 !== t.ssl)
					throw new us(ss.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
				(this.host = 'firestore.googleapis.com'), (this.ssl = !0);
			} else
				Os('settings', 'non-empty string', 'host', t.host),
					(this.host = t.host),
					Ls('settings', 'boolean', 'ssl', t.ssl),
					(this.ssl = null === (e = t.ssl) || void 0 === e || e);
			if (
				(Ms('settings', t, [
					'host',
					'ssl',
					'credentials',
					'timestampsInSnapshots',
					'cacheSizeBytes',
					'experimentalForceLongPolling',
					'experimentalAutoDetectLongPolling',
					'ignoreUndefinedProperties'
				]),
				Ls('settings', 'object', 'credentials', t.credentials),
				(this.credentials = t.credentials),
				Ls('settings', 'boolean', 'timestampsInSnapshots', t.timestampsInSnapshots),
				Ls('settings', 'boolean', 'ignoreUndefinedProperties', t.ignoreUndefinedProperties),
				!0 === t.timestampsInSnapshots
					? fs(
							"The setting 'timestampsInSnapshots: true' is no longer required and should be removed."
					  )
					: !1 === t.timestampsInSnapshots &&
					  fs(
							"Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."
					  ),
				(this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n),
				(this.ignoreUndefinedProperties =
					null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r),
				Ls('settings', 'number', 'cacheSizeBytes', t.cacheSizeBytes),
				void 0 === t.cacheSizeBytes)
			)
				this.cacheSizeBytes = of._o;
			else {
				if (t.cacheSizeBytes !== $d && t.cacheSizeBytes < of.lo)
					throw new us(ss.INVALID_ARGUMENT, 'cacheSizeBytes must be at least ' + of.lo);
				this.cacheSizeBytes = t.cacheSizeBytes;
			}
			Ls('settings', 'boolean', 'experimentalForceLongPolling', t.experimentalForceLongPolling),
				(this.experimentalForceLongPolling =
					null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i),
				Ls(
					'settings',
					'boolean',
					'experimentalAutoDetectLongPolling',
					t.experimentalAutoDetectLongPolling
				),
				(this.experimentalAutoDetectLongPolling =
					null !== (o = t.experimentalAutoDetectLongPolling) && void 0 !== o && o),
				(function (t, e, n, r) {
					if (!0 === e && !0 === r)
						throw new us(
							ss.INVALID_ARGUMENT,
							'experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.'
						);
				})(0, t.experimentalForceLongPolling, 0, t.experimentalAutoDetectLongPolling);
		}
		return (
			(t.prototype.isEqual = function (t) {
				return (
					this.host === t.host &&
					this.ssl === t.ssl &&
					this.timestampsInSnapshots === t.timestampsInSnapshots &&
					this.credentials === t.credentials &&
					this.cacheSizeBytes === t.cacheSizeBytes &&
					this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
					this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling &&
					this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
				);
			}),
			t
		);
	})(),
	Wd = (function () {
		function t(e, n, r, i) {
			var o = this;
			if (
				(void 0 === r && (r = new sd()),
				void 0 === i && (i = new ad()),
				(this.rf = r),
				(this.af = i),
				(this.cf = null),
				(this.uf = new Nh()),
				(this.INTERNAL = {
					delete: function () {
						return ne(o, void 0, void 0, function () {
							return re(this, function (t) {
								switch (t.label) {
									case 0:
										return this.hf(), [4, this.lf.terminate()];
									case 1:
										return t.sent(), [2];
								}
							});
						});
					}
				}),
				'object' == typeof e.options)
			) {
				var s = e;
				(this.cf = s), (this.__ = t._f(s)), (this.ff = s.name), (this.df = new xl(n));
			} else {
				var u = e;
				if (!u.projectId) throw new us(ss.INVALID_ARGUMENT, 'Must provide projectId');
				(this.__ = new eu(u.projectId, u.database)), (this.ff = '[DEFAULT]'), (this.df = new kl());
			}
			this.wf = new Kd({});
		}
		return (
			Object.defineProperty(t.prototype, 'mf', {
				get: function () {
					return this.Tf || (this.Tf = new Dd(this.__, this.wf.ignoreUndefinedProperties)), this.Tf;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.settings = function (t) {
				Ns('Firestore.settings', arguments, 1),
					ks('Firestore.settings', 'object', 1, t),
					t.merge && delete (t = Object.assign(Object.assign({}, this.wf), t)).merge;
				var e = new Kd(t);
				if (this.lf && !this.wf.isEqual(e))
					throw new us(
						ss.FAILED_PRECONDITION,
						'Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.'
					);
				(this.wf = e),
					void 0 !== e.credentials &&
						(this.df = (function (t) {
							if (!t) return new kl();
							switch (t.type) {
								case 'gapi':
									var e = t.client;
									return (
										vs(
											!(
												'object' != typeof e ||
												null === e ||
												!e.auth ||
												!e.auth.getAuthHeaderValueForFirstParty
											)
										),
										new Ll(e, t.sessionIndex || '0')
									);
								case 'provider':
									return t.client;
								default:
									throw new us(
										ss.INVALID_ARGUMENT,
										'makeCredentialsProvider failed due to invalid credential type'
									);
							}
						})(e.credentials));
			}),
			(t.prototype.enableNetwork = function () {
				return this.hf(), this.lf.enableNetwork();
			}),
			(t.prototype.disableNetwork = function () {
				return this.hf(), this.lf.disableNetwork();
			}),
			(t.prototype.enablePersistence = function (t) {
				var e, n;
				if (this.lf)
					throw new us(
						ss.FAILED_PRECONDITION,
						'Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.'
					);
				var r = !1,
					i = !1;
				if (
					t &&
					(void 0 !== t.experimentalTabSynchronization &&
						fs(
							"The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."
						),
					(r =
						null !==
							(n =
								null !== (e = t.synchronizeTabs) && void 0 !== e
									? e
									: t.experimentalTabSynchronization) &&
						void 0 !== n &&
						n),
					(i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab),
					r && i)
				)
					throw new us(
						ss.INVALID_ARGUMENT,
						"The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'."
					);
				return this.Ef(this.rf, this.af, {
					jl: !0,
					cacheSizeBytes: this.wf.cacheSizeBytes,
					synchronizeTabs: r,
					ka: i
				});
			}),
			(t.prototype.clearPersistence = function () {
				return ne(this, void 0, void 0, function () {
					var t,
						e = this;
					return re(this, function (n) {
						if (void 0 !== this.lf && !this.lf.z_)
							throw new us(
								ss.FAILED_PRECONDITION,
								'Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.'
							);
						return (
							(t = new fh()),
							[
								2,
								(this.uf.bs(function () {
									return ne(e, void 0, void 0, function () {
										var e;
										return re(this, function (n) {
											switch (n.label) {
												case 0:
													return (
														n.trys.push([0, 2, , 3]),
														[4, this.rf.clearPersistence(this.__, this.ff)]
													);
												case 1:
													return n.sent(), t.resolve(), [3, 3];
												case 2:
													return (e = n.sent()), t.reject(e), [3, 3];
												case 3:
													return [2];
											}
										});
									});
								}),
								t.promise)
							]
						);
					});
				});
			}),
			(t.prototype.terminate = function () {
				return this.app._removeServiceInstance('firestore'), this.INTERNAL.delete();
			}),
			Object.defineProperty(t.prototype, 'If', {
				get: function () {
					return this.hf(), this.lf.z_;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.waitForPendingWrites = function () {
				return this.hf(), this.lf.waitForPendingWrites();
			}),
			(t.prototype.onSnapshotsInSync = function (t) {
				if ((this.hf(), zd(t))) return this.lf.G_(t);
				ks('Firestore.onSnapshotsInSync', 'function', 1, t);
				var e = { next: t };
				return this.lf.G_(e);
			}),
			(t.prototype.hf = function () {
				return this.lf || this.Ef(new sd(), new ad(), { jl: !1 }), this.lf;
			}),
			(t.prototype.Af = function () {
				return new tu(
					this.__,
					this.ff,
					this.wf.host,
					this.wf.ssl,
					this.wf.experimentalForceLongPolling,
					this.wf.experimentalAutoDetectLongPolling
				);
			}),
			(t.prototype.Ef = function (t, e, n) {
				var r = this.Af();
				return (this.lf = new Gd(this.df, this.uf)), this.lf.start(r, t, e, n);
			}),
			(t._f = function (t) {
				if (((e = t.options), !Object.prototype.hasOwnProperty.call(e, 'projectId')))
					throw new us(ss.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
				var e,
					n = t.options.projectId;
				if (!n || 'string' != typeof n)
					throw new us(ss.INVALID_ARGUMENT, 'projectId must be a string in FirebaseApp.options');
				return new eu(n);
			}),
			Object.defineProperty(t.prototype, 'app', {
				get: function () {
					if (!this.cf)
						throw new us(
							ss.FAILED_PRECONDITION,
							"Firestore was not initialized using the Firebase SDK. 'app' is not available"
						);
					return this.cf;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.collection = function (t) {
				return (
					Ns('Firestore.collection', arguments, 1),
					ks('Firestore.collection', 'non-empty string', 1, t),
					this.hf(),
					new cv(Es.g(t), this, null)
				);
			}),
			(t.prototype.doc = function (t) {
				return (
					Ns('Firestore.doc', arguments, 1),
					ks('Firestore.doc', 'non-empty string', 1, t),
					this.hf(),
					Yd.Rf(Es.g(t), this, null)
				);
			}),
			(t.prototype.collectionGroup = function (t) {
				if (
					(Ns('Firestore.collectionGroup', arguments, 1),
					ks('Firestore.collectionGroup', 'non-empty string', 1, t),
					t.indexOf('/') >= 0)
				)
					throw new us(
						ss.INVALID_ARGUMENT,
						"Invalid collection ID '" +
							t +
							"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'."
					);
				return this.hf(), new uv(((e = t), new Oc(Es.P(), e)), this, null);
				var e;
			}),
			(t.prototype.runTransaction = function (t) {
				var e = this;
				return (
					Ns('Firestore.runTransaction', arguments, 1),
					ks('Firestore.runTransaction', 'function', 1, t),
					this.hf().transaction(function (n) {
						return t(new Qd(e, n));
					})
				);
			}),
			(t.prototype.batch = function () {
				return this.hf(), new Xd(this);
			}),
			Object.defineProperty(t, 'logLevel', {
				get: function () {
					switch (cs()) {
						case ke.DEBUG:
							return 'debug';
						case ke.ERROR:
							return 'error';
						case ke.SILENT:
							return 'silent';
						case ke.WARN:
							return 'warn';
						case ke.INFO:
							return 'info';
						case ke.VERBOSE:
							return 'verbose';
						default:
							return 'error';
					}
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.setLogLevel = function (t) {
				var e;
				Ns('Firestore.setLogLevel', arguments, 1),
					Cs('setLogLevel', ['debug', 'error', 'silent', 'warn', 'info', 'verbose'], 1, t),
					(e = t),
					as.setLogLevel(e);
			}),
			(t.prototype.gf = function () {
				return this.wf.timestampsInSnapshots;
			}),
			(t.prototype.Pf = function () {
				return this.wf;
			}),
			t
		);
	})(),
	Qd = (function () {
		function t(t, e) {
			(this.yf = t), (this.Vf = e);
		}
		return (
			(t.prototype.get = function (t) {
				var e = this;
				Ns('Transaction.get', arguments, 1);
				var n = pv('Transaction.get', t, this.yf);
				return this.Vf.v_([n.f_]).then(function (t) {
					if (!t || 1 !== t.length) return ds();
					var r = t[0];
					if (r instanceof kc) return new Zd(e.yf, n.f_, null, !1, !1, n.d_);
					if (r instanceof Dc) return new Zd(e.yf, n.f_, r, !1, !1, n.d_);
					throw ds();
				});
			}),
			(t.prototype.set = function (t, e, n) {
				Ds('Transaction.set', arguments, 2, 3);
				var r = pv('Transaction.set', t, this.yf);
				n = hv('Transaction.set', n);
				var i = vv(r.d_, e, n),
					o = kd(this.yf.mf, 'Transaction.set', r.f_, i, null !== r.d_, n);
				return this.Vf.set(r.f_, o), this;
			}),
			(t.prototype.update = function (t, e, n) {
				for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
				return (
					'string' == typeof e || e instanceof fd
						? (Ss('Transaction.update', arguments, 3),
						  (r = pv('Transaction.update', t, this.yf)),
						  (i = Od(this.yf.mf, 'Transaction.update', r.f_, e, n, o)))
						: (Ns('Transaction.update', arguments, 2),
						  (r = pv('Transaction.update', t, this.yf)),
						  (i = xd(this.yf.mf, 'Transaction.update', r.f_, e))),
					this.Vf.update(r.f_, i),
					this
				);
			}),
			(t.prototype.delete = function (t) {
				Ns('Transaction.delete', arguments, 1);
				var e = pv('Transaction.delete', t, this.yf);
				return this.Vf.delete(e.f_), this;
			}),
			t
		);
	})(),
	Xd = (function () {
		function t(t) {
			(this.yf = t), (this.pf = []), (this.bf = !1);
		}
		return (
			(t.prototype.set = function (t, e, n) {
				Ds('WriteBatch.set', arguments, 2, 3), this.vf();
				var r = pv('WriteBatch.set', t, this.yf);
				n = hv('WriteBatch.set', n);
				var i = vv(r.d_, e, n),
					o = kd(this.yf.mf, 'WriteBatch.set', r.f_, i, null !== r.d_, n);
				return (this.pf = this.pf.concat(o.w_(r.f_, ac.ze()))), this;
			}),
			(t.prototype.update = function (t, e, n) {
				for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
				return (
					this.vf(),
					'string' == typeof e || e instanceof fd
						? (Ss('WriteBatch.update', arguments, 3),
						  (r = pv('WriteBatch.update', t, this.yf)),
						  (i = Od(this.yf.mf, 'WriteBatch.update', r.f_, e, n, o)))
						: (Ns('WriteBatch.update', arguments, 2),
						  (r = pv('WriteBatch.update', t, this.yf)),
						  (i = xd(this.yf.mf, 'WriteBatch.update', r.f_, e))),
					(this.pf = this.pf.concat(i.w_(r.f_, ac.exists(!0)))),
					this
				);
			}),
			(t.prototype.delete = function (t) {
				Ns('WriteBatch.delete', arguments, 1), this.vf();
				var e = pv('WriteBatch.delete', t, this.yf);
				return (this.pf = this.pf.concat(new Ic(e.f_, ac.ze()))), this;
			}),
			(t.prototype.commit = function () {
				return (
					this.vf(),
					(this.bf = !0),
					this.pf.length > 0 ? this.yf.hf().write(this.pf) : Promise.resolve()
				);
			}),
			(t.prototype.vf = function () {
				if (this.bf)
					throw new us(
						ss.FAILED_PRECONDITION,
						'A write batch can no longer be used after commit() has been called.'
					);
			}),
			t
		);
	})(),
	Yd = (function (t) {
		function e(e, n, r) {
			var i = this;
			return (
				((i = t.call(this, n.__, e, r) || this).f_ = e),
				(i.firestore = n),
				(i.d_ = r),
				(i.lf = i.firestore.hf()),
				i
			);
		}
		return (
			te(e, t),
			(e.Rf = function (t, n, r) {
				if (t.length % 2 != 0)
					throw new us(
						ss.INVALID_ARGUMENT,
						'Invalid document reference. Document references must have an even number of segments, but ' +
							t.R() +
							' has ' +
							t.length
					);
				return new e(new Ts(t), n, r);
			}),
			Object.defineProperty(e.prototype, 'id', {
				get: function () {
					return this.f_.path._();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, 'parent', {
				get: function () {
					return new cv(this.f_.path.h(), this.firestore, this.d_);
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, 'path', {
				get: function () {
					return this.f_.path.R();
				},
				enumerable: !1,
				configurable: !0
			}),
			(e.prototype.collection = function (t) {
				if (
					(Ns('DocumentReference.collection', arguments, 1),
					ks('DocumentReference.collection', 'non-empty string', 1, t),
					!t)
				)
					throw new us(
						ss.INVALID_ARGUMENT,
						'Must provide a non-empty collection name to collection()'
					);
				var e = Es.g(t);
				return new cv(this.f_.path.child(e), this.firestore, null);
			}),
			(e.prototype.isEqual = function (t) {
				if (!(t instanceof e)) throw Vs('isEqual', 'DocumentReference', 1, t);
				return this.firestore === t.firestore && this.f_.isEqual(t.f_) && this.d_ === t.d_;
			}),
			(e.prototype.set = function (t, e) {
				Ds('DocumentReference.set', arguments, 1, 2), (e = hv('DocumentReference.set', e));
				var n = vv(this.d_, t, e),
					r = kd(this.firestore.mf, 'DocumentReference.set', this.f_, n, null !== this.d_, e);
				return this.lf.write(r.w_(this.f_, ac.ze()));
			}),
			(e.prototype.update = function (t, e) {
				for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
				return (
					'string' == typeof t || t instanceof fd
						? (Ss('DocumentReference.update', arguments, 2),
						  (n = Od(this.firestore.mf, 'DocumentReference.update', this.f_, t, e, r)))
						: (Ns('DocumentReference.update', arguments, 1),
						  (n = xd(this.firestore.mf, 'DocumentReference.update', this.f_, t))),
					this.lf.write(n.w_(this.f_, ac.exists(!0)))
				);
			}),
			(e.prototype.delete = function () {
				return (
					Ns('DocumentReference.delete', arguments, 0), this.lf.write([new Ic(this.f_, ac.ze())])
				);
			}),
			(e.prototype.onSnapshot = function () {
				for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
				Ds('DocumentReference.onSnapshot', arguments, 1, 4);
				var s = { includeMetadataChanges: !1 },
					u = 0;
				'object' != typeof i[u] ||
					zd(i[u]) ||
					(Ms('DocumentReference.onSnapshot', (s = i[u]), ['includeMetadataChanges']),
					Ls(
						'DocumentReference.onSnapshot',
						'boolean',
						'includeMetadataChanges',
						s.includeMetadataChanges
					),
					u++);
				var a = { includeMetadataChanges: s.includeMetadataChanges };
				if (zd(i[u])) {
					var c = i[u];
					(i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c)),
						(i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c)),
						(i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c));
				} else
					ks('DocumentReference.onSnapshot', 'function', u, i[u]),
						xs('DocumentReference.onSnapshot', 'function', u + 1, i[u + 1]),
						xs('DocumentReference.onSnapshot', 'function', u + 2, i[u + 2]);
				var h = {
					next: function (t) {
						i[u] && i[u](r.Sf(t));
					},
					error: i[u + 1],
					complete: i[u + 2]
				};
				return this.lf.listen(Pc(this.f_.path), a, h);
			}),
			(e.prototype.get = function (t) {
				var e = this;
				Ds('DocumentReference.get', arguments, 0, 1), lv('DocumentReference.get', t);
				var n = this.firestore.hf();
				return t && 'cache' === t.source
					? n.Q_(this.f_).then(function (t) {
							return new Zd(e.firestore, e.f_, t, !0, t instanceof Dc && t.Je, e.d_);
					  })
					: n.W_(this.f_, t).then(function (t) {
							return e.Sf(t);
					  });
			}),
			(e.prototype.withConverter = function (t) {
				return new e(this.f_, this.firestore, t);
			}),
			(e.prototype.Sf = function (t) {
				var e = t.docs.get(this.f_);
				return new Zd(this.firestore, this.f_, e, t.fromCache, t.hasPendingWrites, this.d_);
			}),
			e
		);
	})(_d),
	Jd = (function () {
		function t(t, e) {
			(this.hasPendingWrites = t), (this.fromCache = e);
		}
		return (
			(t.prototype.isEqual = function (t) {
				return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
			}),
			t
		);
	})(),
	Zd = (function () {
		function t(t, e, n, r, i, o) {
			(this.yf = t), (this.f_ = e), (this.Df = n), (this.Cf = r), (this.Nf = i), (this.d_ = o);
		}
		return (
			(t.prototype.data = function (t) {
				var e = this;
				if (
					(Ds('DocumentSnapshot.data', arguments, 0, 1),
					(t = fv('DocumentSnapshot.data', t)),
					this.Df)
				) {
					if (this.d_) {
						var n = new tv(this.yf, this.f_, this.Df, this.Cf, this.Nf, null);
						return this.d_.fromFirestore(n, t);
					}
					return new Hd(
						this.yf.__,
						this.yf.gf(),
						t.serverTimestamps || 'none',
						function (t) {
							return new Yd(t, e.yf, null);
						},
						function (t) {
							return new Zs(t);
						}
					).X_(this.Df.rn());
				}
			}),
			(t.prototype.get = function (t, e) {
				var n = this;
				if (
					(Ds('DocumentSnapshot.get', arguments, 1, 2),
					(e = fv('DocumentSnapshot.get', e)),
					this.Df)
				) {
					var r = this.Df.data().field(jd('DocumentSnapshot.get', t, this.f_));
					if (null !== r)
						return new Hd(
							this.yf.__,
							this.yf.gf(),
							e.serverTimestamps || 'none',
							function (t) {
								return new Yd(t, n.yf, n.d_);
							},
							function (t) {
								return new Zs(t);
							}
						).X_(r);
				}
			}),
			Object.defineProperty(t.prototype, 'id', {
				get: function () {
					return this.f_.path._();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'ref', {
				get: function () {
					return new Yd(this.f_, this.yf, this.d_);
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'exists', {
				get: function () {
					return null !== this.Df;
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'metadata', {
				get: function () {
					return new Jd(this.Nf, this.Cf);
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.isEqual = function (e) {
				if (!(e instanceof t)) throw Vs('isEqual', 'DocumentSnapshot', 1, e);
				return (
					this.yf === e.yf &&
					this.Cf === e.Cf &&
					this.f_.isEqual(e.f_) &&
					(null === this.Df ? null === e.Df : this.Df.isEqual(e.Df)) &&
					this.d_ === e.d_
				);
			}),
			t
		);
	})(),
	tv = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.prototype.data = function (e) {
				return t.prototype.data.call(this, e);
			}),
			e
		);
	})(Zd);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ev(t, e, n, r, i, o, s) {
	var u;
	if (i.p()) {
		if ('array-contains' === o || 'array-contains-any' === o)
			throw new us(
				ss.INVALID_ARGUMENT,
				"Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId()."
			);
		if ('in' === o || 'not-in' === o) {
			iv(s, o);
			for (var a = [], c = 0, h = s; c < h.length; c++) {
				var f = h[c];
				a.push(rv(r, t, f));
			}
			u = { arrayValue: { values: a } };
		} else u = rv(r, t, s);
	} else
		('in' !== o && 'not-in' !== o && 'array-contains-any' !== o) || iv(s, o),
			(u = Ld(n, e, s, 'in' === o || 'not-in' === o));
	var l = Qc.create(i, o, u);
	return (
		(function (t, e) {
			if (e.hn()) {
				var n = jc(t);
				if (null !== n && !n.isEqual(e.field))
					throw new us(
						ss.INVALID_ARGUMENT,
						"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
							n.toString() +
							"' and '" +
							e.field.toString() +
							"'"
					);
				var r = Uc(t);
				null !== r && ov(t, e.field, r);
			}
			var i = (function (t, e) {
				for (var n = 0, r = t.filters; n < r.length; n++) {
					var i = r[n];
					if (e.indexOf(i.op) >= 0) return i.op;
				}
				return null;
			})(
				t,
				(function (t) {
					switch (t) {
						case '!=':
							return ['!=', 'not-in'];
						case 'array-contains':
							return ['array-contains', 'array-contains-any', 'not-in'];
						case 'in':
							return ['array-contains-any', 'in', 'not-in'];
						case 'array-contains-any':
							return ['array-contains', 'array-contains-any', 'in', 'not-in'];
						case 'not-in':
							return ['array-contains', 'array-contains-any', 'in', 'not-in', '!='];
						default:
							return [];
					}
				})(e.op)
			);
			if (null !== i)
				throw i === e.op
					? new us(
							ss.INVALID_ARGUMENT,
							"Invalid query. You cannot use more than one '" + e.op.toString() + "' filter."
					  )
					: new us(
							ss.INVALID_ARGUMENT,
							"Invalid query. You cannot use '" +
								e.op.toString() +
								"' filters with '" +
								i.toString() +
								"' filters."
					  );
		})(t, l),
		l
	);
}
function nv(t, e, n) {
	if (null !== t.startAt)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
		);
	if (null !== t.endAt)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
		);
	var r = new ah(e, n);
	return (
		(function (t, e) {
			if (null === Uc(t)) {
				var n = jc(t);
				null !== n && ov(t, n, e.field);
			}
		})(t, r),
		r
	);
}
function rv(t, e, n) {
	if ('string' == typeof n) {
		if ('' === n)
			throw new us(
				ss.INVALID_ARGUMENT,
				'Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.'
			);
		if (!Fc(e) && -1 !== n.indexOf('/'))
			throw new us(
				ss.INVALID_ARGUMENT,
				"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
					n +
					"' contains a '/' character."
			);
		var r = e.path.child(Es.g(n));
		if (!Ts.F(r))
			throw new us(
				ss.INVALID_ARGUMENT,
				"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
					r +
					"' is not because it has an odd number of segments (" +
					r.length +
					').'
			);
		return sa(t, new Ts(r));
	}
	if (n instanceof _d) return sa(t, n.f_);
	throw new us(
		ss.INVALID_ARGUMENT,
		'Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ' +
			js(n) +
			'.'
	);
}
function iv(t, e) {
	if (!Array.isArray(t) || 0 === t.length)
		throw new us(
			ss.INVALID_ARGUMENT,
			"Invalid Query. A non-empty array is required for '" + e.toString() + "' filters."
		);
	if (t.length > 10)
		throw new us(
			ss.INVALID_ARGUMENT,
			"Invalid Query. '" +
				e.toString() +
				"' filters support a maximum of 10 elements in the value array."
		);
	if ('in' === e || 'array-contains-any' === e) {
		if (t.indexOf(null) >= 0)
			throw new us(
				ss.INVALID_ARGUMENT,
				"Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array."
			);
		if (
			t.filter(function (t) {
				return Number.isNaN(t);
			}).length > 0
		)
			throw new us(
				ss.INVALID_ARGUMENT,
				"Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array."
			);
	}
}
function ov(t, e, n) {
	if (!n.isEqual(e))
		throw new us(
			ss.INVALID_ARGUMENT,
			"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
				e.toString() +
				"' and so you must also use '" +
				e.toString() +
				"' as your first orderBy(), but your first orderBy() is on field '" +
				n.toString() +
				"' instead."
		);
}
function sv(t) {
	if (Rc(t) && 0 === t.on.length)
		throw new us(
			ss.UNIMPLEMENTED,
			'limitToLast() queries require specifying at least one orderBy() clause'
		);
}
var uv = (function () {
		function t(t, e, n) {
			(this.Ff = t), (this.firestore = e), (this.d_ = n);
		}
		return (
			(t.prototype.where = function (e, n, r) {
				Ns('Query.where', arguments, 3), Fs('Query.where', 3, r);
				var i,
					o,
					s,
					u = Cs(
						'Query.where',
						[
							'<',
							'<=',
							'==',
							'!=',
							'>=',
							'>',
							'array-contains',
							'in',
							'array-contains-any',
							'not-in'
						],
						2,
						n
					),
					a = jd('Query.where', e),
					c = ev(this.Ff, 'Query.where', this.firestore.mf, this.firestore.__, a, u, r);
				return new t(
					((i = this.Ff),
					(o = c),
					(s = i.filters.concat([o])),
					new Oc(i.path, i.collectionGroup, i.on.slice(), s, i.limit, i.an, i.startAt, i.endAt)),
					this.firestore,
					this.d_
				);
			}),
			(t.prototype.orderBy = function (e, n) {
				var r;
				if (
					(Ds('Query.orderBy', arguments, 1, 2),
					xs('Query.orderBy', 'non-empty string', 2, n),
					void 0 === n || 'asc' === n)
				)
					r = 'asc';
				else {
					if ('desc' !== n)
						throw new us(
							ss.INVALID_ARGUMENT,
							"Function Query.orderBy() has unknown direction '" +
								n +
								"', expected 'asc' or 'desc'."
						);
					r = 'desc';
				}
				var i,
					o,
					s,
					u = jd('Query.orderBy', e),
					a = nv(this.Ff, u, r);
				return new t(
					((i = this.Ff),
					(o = a),
					(s = i.on.concat([o])),
					new Oc(
						i.path,
						i.collectionGroup,
						s,
						i.filters.slice(),
						i.limit,
						i.an,
						i.startAt,
						i.endAt
					)),
					this.firestore,
					this.d_
				);
			}),
			(t.prototype.limit = function (e) {
				return (
					Ns('Query.limit', arguments, 1),
					ks('Query.limit', 'number', 1, e),
					qs('Query.limit', 1, e),
					new t(qc(this.Ff, e, 'F'), this.firestore, this.d_)
				);
			}),
			(t.prototype.limitToLast = function (e) {
				return (
					Ns('Query.limitToLast', arguments, 1),
					ks('Query.limitToLast', 'number', 1, e),
					qs('Query.limitToLast', 1, e),
					new t(qc(this.Ff, e, 'L'), this.firestore, this.d_)
				);
			}),
			(t.prototype.startAt = function (e) {
				for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				Ss('Query.startAt', arguments, 1);
				var i = this.xf('Query.startAt', e, n, !0);
				return new t(Bc(this.Ff, i), this.firestore, this.d_);
			}),
			(t.prototype.startAfter = function (e) {
				for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				Ss('Query.startAfter', arguments, 1);
				var i = this.xf('Query.startAfter', e, n, !1);
				return new t(Bc(this.Ff, i), this.firestore, this.d_);
			}),
			(t.prototype.endBefore = function (e) {
				for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				Ss('Query.endBefore', arguments, 1);
				var i = this.xf('Query.endBefore', e, n, !0);
				return new t(Gc(this.Ff, i), this.firestore, this.d_);
			}),
			(t.prototype.endAt = function (e) {
				for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				Ss('Query.endAt', arguments, 1);
				var i = this.xf('Query.endAt', e, n, !1);
				return new t(Gc(this.Ff, i), this.firestore, this.d_);
			}),
			(t.prototype.isEqual = function (e) {
				if (!(e instanceof t)) throw Vs('isEqual', 'Query', 1, e);
				return this.firestore === e.firestore && zc(this.Ff, e.Ff) && this.d_ === e.d_;
			}),
			(t.prototype.withConverter = function (e) {
				return new t(this.Ff, this.firestore, e);
			}),
			(t.prototype.xf = function (t, e, n, r) {
				if ((Fs(t, 1, e), e instanceof Zd))
					return (
						Ns(t, oe([e], n), 1),
						(function (t, e, n, r, i) {
							if (!r)
								throw new us(
									ss.NOT_FOUND,
									"Can't use a DocumentSnapshot that doesn't exist for " + n + '().'
								);
							for (var o = [], s = 0, u = Mc(t); s < u.length; s++) {
								var a = u[s];
								if (a.field.p()) o.push(sa(e, r.key));
								else {
									var c = r.field(a.field);
									if ($u(c))
										throw new us(
											ss.INVALID_ARGUMENT,
											'Invalid query. You are trying to start or end a query using a document for which the field "' +
												a.field +
												'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
										);
									if (null === c) {
										var h = a.field.R();
										throw new us(
											ss.INVALID_ARGUMENT,
											"Invalid query. You are trying to start or end a query using a document for which the field '" +
												h +
												"' (used as the orderBy) does not exist."
										);
									}
									o.push(c);
								}
							}
							return new ih(o, i);
						})(this.Ff, this.firestore.__, t, e.Df, r)
					);
				var i = [e].concat(n);
				return (function (t, e, n, r, i, o) {
					var s = t.on;
					if (i.length > s.length)
						throw new us(
							ss.INVALID_ARGUMENT,
							'Too many arguments provided to ' +
								r +
								'(). The number of arguments must be less than or equal to the number of orderBy() clauses'
						);
					for (var u = [], a = 0; a < i.length; a++) {
						var c = i[a];
						if (s[a].field.p()) {
							if ('string' != typeof c)
								throw new us(
									ss.INVALID_ARGUMENT,
									'Invalid query. Expected a string for document ID in ' +
										r +
										'(), but got a ' +
										typeof c
								);
							if (!Fc(t) && -1 !== c.indexOf('/'))
								throw new us(
									ss.INVALID_ARGUMENT,
									'Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ' +
										r +
										"() must be a plain document ID, but '" +
										c +
										"' contains a slash."
								);
							var h = t.path.child(Es.g(c));
							if (!Ts.F(h))
								throw new us(
									ss.INVALID_ARGUMENT,
									'Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ' +
										r +
										"() must result in a valid document path, but '" +
										h +
										"' is not because it contains an odd number of segments."
								);
							var f = new Ts(h);
							u.push(sa(e, f));
						} else {
							var l = Ld(n, r, c);
							u.push(l);
						}
					}
					return new ih(u, o);
				})(this.Ff, this.firestore.__, this.firestore.mf, t, i, r);
			}),
			(t.prototype.onSnapshot = function () {
				for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
				Ds('Query.onSnapshot', arguments, 1, 4);
				var s = {},
					u = 0;
				if (
					('object' != typeof i[u] ||
						zd(i[u]) ||
						(Ms('Query.onSnapshot', (s = i[u]), ['includeMetadataChanges']),
						Ls('Query.onSnapshot', 'boolean', 'includeMetadataChanges', s.includeMetadataChanges),
						u++),
					zd(i[u]))
				) {
					var a = i[u];
					(i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a)),
						(i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a)),
						(i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a));
				} else
					ks('Query.onSnapshot', 'function', u, i[u]),
						xs('Query.onSnapshot', 'function', u + 1, i[u + 1]),
						xs('Query.onSnapshot', 'function', u + 2, i[u + 2]);
				var c = {
					next: function (t) {
						i[u] && i[u](new av(r.firestore, r.Ff, t, r.d_));
					},
					error: i[u + 1],
					complete: i[u + 2]
				};
				return sv(this.Ff), this.firestore.hf().listen(this.Ff, s, c);
			}),
			(t.prototype.get = function (t) {
				var e = this;
				Ds('Query.get', arguments, 0, 1), lv('Query.get', t), sv(this.Ff);
				var n = this.firestore.hf();
				return (t && 'cache' === t.source ? n.j_(this.Ff) : n.K_(this.Ff, t)).then(function (t) {
					return new av(e.firestore, e.Ff, t, e.d_);
				});
			}),
			t
		);
	})(),
	av = (function () {
		function t(t, e, n, r) {
			(this.yf = t),
				(this.$f = e),
				(this.kf = n),
				(this.d_ = r),
				(this.Mf = null),
				(this.Of = null),
				(this.metadata = new Jd(n.hasPendingWrites, n.fromCache));
		}
		return (
			Object.defineProperty(t.prototype, 'docs', {
				get: function () {
					var t = [];
					return (
						this.forEach(function (e) {
							return t.push(e);
						}),
						t
					);
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'empty', {
				get: function () {
					return this.kf.docs.m();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, 'size', {
				get: function () {
					return this.kf.docs.size;
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.forEach = function (t, e) {
				var n = this;
				Ds('QuerySnapshot.forEach', arguments, 1, 2),
					ks('QuerySnapshot.forEach', 'function', 1, t),
					this.kf.docs.forEach(function (r) {
						t.call(e, n.Lf(r, n.metadata.fromCache, n.kf.Wt.has(r.key)));
					});
			}),
			Object.defineProperty(t.prototype, 'query', {
				get: function () {
					return new uv(this.$f, this.yf, this.d_);
				},
				enumerable: !1,
				configurable: !0
			}),
			(t.prototype.docChanges = function (t) {
				t &&
					(Ms('QuerySnapshot.docChanges', t, ['includeMetadataChanges']),
					Ls(
						'QuerySnapshot.docChanges',
						'boolean',
						'includeMetadataChanges',
						t.includeMetadataChanges
					));
				var e = !(!t || !t.includeMetadataChanges);
				if (e && this.kf.Kt)
					throw new us(
						ss.INVALID_ARGUMENT,
						'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
					);
				return (
					(this.Mf && this.Of === e) ||
						((this.Mf = (function (t, e, n) {
							if (t.Qt.m()) {
								var r = 0;
								return t.docChanges.map(function (e) {
									var i = n(e.doc, t.fromCache, t.Wt.has(e.doc.key));
									return e.doc, { type: 'added', doc: i, oldIndex: -1, newIndex: r++ };
								});
							}
							var i = t.Qt;
							return t.docChanges
								.filter(function (t) {
									return e || 3 !== t.type;
								})
								.map(function (e) {
									var r = n(e.doc, t.fromCache, t.Wt.has(e.doc.key)),
										o = -1,
										s = -1;
									return (
										0 !== e.type && ((o = i.indexOf(e.doc.key)), (i = i.delete(e.doc.key))),
										1 !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)),
										{ type: dv(e.type), doc: r, oldIndex: o, newIndex: s }
									);
								});
						})(this.kf, e, this.Lf.bind(this))),
						(this.Of = e)),
					this.Mf
				);
			}),
			(t.prototype.isEqual = function (e) {
				if (!(e instanceof t)) throw Vs('isEqual', 'QuerySnapshot', 1, e);
				return this.yf === e.yf && zc(this.$f, e.$f) && this.kf.isEqual(e.kf) && this.d_ === e.d_;
			}),
			(t.prototype.Lf = function (t, e, n) {
				return new tv(this.yf, t.key, t, e, n, this.d_);
			}),
			t
		);
	})(),
	cv = (function (t) {
		function e(e, n, r) {
			var i = this;
			if ((((i = t.call(this, Pc(e), n, r) || this).Bf = e), e.length % 2 != 1))
				throw new us(
					ss.INVALID_ARGUMENT,
					'Invalid collection reference. Collection references must have an odd number of segments, but ' +
						e.R() +
						' has ' +
						e.length
				);
			return i;
		}
		return (
			te(e, t),
			Object.defineProperty(e.prototype, 'id', {
				get: function () {
					return this.Ff.path._();
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, 'parent', {
				get: function () {
					var t = this.Ff.path.h();
					return t.m() ? null : new Yd(new Ts(t), this.firestore, null);
				},
				enumerable: !1,
				configurable: !0
			}),
			Object.defineProperty(e.prototype, 'path', {
				get: function () {
					return this.Ff.path.R();
				},
				enumerable: !1,
				configurable: !0
			}),
			(e.prototype.doc = function (t) {
				Ds('CollectionReference.doc', arguments, 0, 1),
					0 === arguments.length && (t = Hs.k()),
					ks('CollectionReference.doc', 'non-empty string', 1, t);
				var e = Es.g(t);
				return Yd.Rf(this.Ff.path.child(e), this.firestore, this.d_);
			}),
			(e.prototype.add = function (t) {
				Ns('CollectionReference.add', arguments, 1);
				var e = this.d_ ? this.d_.toFirestore(t) : t;
				ks('CollectionReference.add', 'object', 1, e);
				var n = this.doc();
				return new Yd(n.f_, this.firestore, null).set(e).then(function () {
					return n;
				});
			}),
			(e.prototype.withConverter = function (t) {
				return new e(this.Bf, this.firestore, t);
			}),
			e
		);
	})(uv);
function hv(t, e) {
	if (void 0 === e) return { merge: !1 };
	if (
		(Ms(t, e, ['merge', 'mergeFields']),
		Ls(t, 'boolean', 'merge', e.merge),
		(n = t),
		void 0 !== (r = e.mergeFields) &&
			(function (t, e, n, r, i) {
				if (!(r instanceof Array))
					throw new us(
						ss.INVALID_ARGUMENT,
						'Function ' +
							t +
							'() requires its ' +
							e +
							' option to be an array, but it was: ' +
							js(r)
					);
				for (var o = 0; o < r.length; ++o)
					if (!i(r[o]))
						throw new us(
							ss.INVALID_ARGUMENT,
							'Function ' +
								t +
								'() requires all ' +
								e +
								' elements to be a string or a FieldPath, but the value at index ' +
								o +
								' was: ' +
								js(r[o])
						);
			})(n, 'mergeFields', 0, r, function (t) {
				return 'string' == typeof t || t instanceof fd;
			}),
		void 0 !== e.mergeFields && void 0 !== e.merge)
	)
		throw new us(
			ss.INVALID_ARGUMENT,
			'Invalid options passed to function ' +
				t +
				'(): You cannot specify both "merge" and "mergeFields".'
		);
	var n, r;
	return e;
}
function fv(t, e) {
	return void 0 === e
		? {}
		: (Ms(t, e, ['serverTimestamps']),
		  Ps(t, 0, 'serverTimestamps', e.serverTimestamps, ['estimate', 'previous', 'none']),
		  e);
}
function lv(t, e) {
	xs(t, 'object', 1, e),
		e && (Ms(t, e, ['source']), Ps(t, 0, 'source', e.source, ['default', 'server', 'cache']));
}
function pv(t, e, n) {
	if (e instanceof _d) {
		if (e.firestore !== n)
			throw new us(
				ss.INVALID_ARGUMENT,
				'Provided document reference is from a different Firestore instance.'
			);
		return e;
	}
	throw Vs(t, 'DocumentReference', 1, e);
}
function dv(t) {
	switch (t) {
		case 0:
			return 'added';
		case 2:
		case 3:
			return 'modified';
		case 1:
			return 'removed';
		default:
			return ds();
	}
}
function vv(t, e, n) {
	return t ? (n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e)) : e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var yv,
	gv = (function (t) {
		function e() {
			return (null !== t && t.apply(this, arguments)) || this;
		}
		return (
			te(e, t),
			(e.serverTimestamp = function () {
				As('FieldValue.serverTimestamp', arguments);
				var t = new yd('serverTimestamp');
				return (t.e_ = 'FieldValue.serverTimestamp'), new e(t);
			}),
			(e.delete = function () {
				As('FieldValue.delete', arguments);
				var t = new dd('deleteField');
				return (t.e_ = 'FieldValue.delete'), new e(t);
			}),
			(e.arrayUnion = function () {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				Ss('FieldValue.arrayUnion', arguments, 1);
				var r = function () {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					return Ss('arrayUnion()', arguments, 1), new gd('arrayUnion', t);
				}.apply(void 0, t);
				return (r.e_ = 'FieldValue.arrayUnion'), new e(r);
			}),
			(e.arrayRemove = function () {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				Ss('FieldValue.arrayRemove', arguments, 1);
				var r = function () {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					return Ss('arrayRemove()', arguments, 1), new md('arrayRemove', t);
				}.apply(void 0, t);
				return (r.e_ = 'FieldValue.arrayRemove'), new e(r);
			}),
			(e.increment = function (t) {
				ks('FieldValue.increment', 'number', 1, t), Ns('FieldValue.increment', arguments, 1);
				var n = new bd('increment', t);
				return (n.e_ = 'FieldValue.increment'), new e(n);
			}),
			(e.prototype.isEqual = function (t) {
				return this.l_.isEqual(t.l_);
			}),
			e
		);
	})(Ed),
	mv = {
		Firestore: Wd,
		GeoPoint: wd,
		Timestamp: ru,
		Blob: Zs,
		Transaction: Qd,
		WriteBatch: Xd,
		DocumentReference: Yd,
		DocumentSnapshot: Zd,
		Query: uv,
		QueryDocumentSnapshot: tv,
		QuerySnapshot: av,
		CollectionReference: cv,
		FieldPath: fd,
		FieldValue: gv,
		setLogLevel: Wd.setLogLevel,
		CACHE_SIZE_UNLIMITED: $d
	};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (yv = Je).INTERNAL.registerComponent(
	new Te(
		'firestore',
		function (t) {
			return (
				(e = t.getProvider('app').getImmediate()),
				(n = t.getProvider('auth-internal')),
				(r = new ad()),
				(i = new ud(r)),
				new Wd(e, n, i, r)
			);
			var e, n, r, i;
		},
		'PUBLIC'
	).setServiceProps(Object.assign({}, mv))
),
	yv.registerVersion('@firebase/firestore', '1.18.0');
export {
	Jt as $,
	it as A,
	n as B,
	Vt as C,
	l as D,
	K as E,
	x as F,
	v as G,
	y as H,
	d as I,
	t as J,
	m as K,
	g as L,
	at as M,
	c as N,
	qt as O,
	$ as P,
	b as Q,
	tt as R,
	Ft as S,
	Ht as T,
	et as U,
	Z as V,
	pt as W,
	St as X,
	kt as Y,
	f as Z,
	Yt as _,
	M as a,
	Dt as a0,
	en as a1,
	H as a2,
	j as a3,
	o as a4,
	Xt as a5,
	F as b,
	q as c,
	L as d,
	P as e,
	O as f,
	B as g,
	z as h,
	jt as i,
	Lt as j,
	R as k,
	U as l,
	Pt as m,
	G as n,
	Ct as o,
	xt as p,
	Ot as q,
	It as r,
	u as s,
	C as t,
	At as u,
	Rt as v,
	_t as w,
	Tt as x,
	st as y,
	ot as z
};
