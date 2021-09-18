import {
	S as e,
	i as s,
	s as a,
	D as t,
	e as n,
	k as o,
	E as l,
	c,
	d as r,
	n as d,
	a as i,
	b as u,
	F as h,
	f as m,
	G as f,
	H as p,
	I as $,
	x as v,
	u as g
} from '../chunks/vendor-c3306e91.js';
function k(e) {
	let s, a, k, E, b;
	const x = e[1].default,
		y = t(x, e, e[0], null);
	return {
		c() {
			(s = n('meta')), (a = n('link')), (k = o()), (E = n('main')), y && y.c(), this.h();
		},
		l(e) {
			const t = l('[data-svelte="svelte-5a12gz"]', document.head);
			(s = c(t, 'META', { name: !0, content: !0 })),
				(a = c(t, 'LINK', { rel: !0, href: !0 })),
				t.forEach(r),
				(k = d(e)),
				(E = c(e, 'MAIN', {}));
			var n = i(E);
			y && y.l(n), n.forEach(r), this.h();
		},
		h() {
			(document.title = 'Hydralite'),
				u(s, 'name', 'description'),
				u(
					s,
					'content',
					'Connect with like-minded developers, onboard investors and seamlessly manage your codebase.'
				),
				u(a, 'rel', 'shortcut icon'),
				u(a, 'href', '/logo/logo.svg');
		},
		m(e, t) {
			h(document.head, s), h(document.head, a), m(e, k, t), m(e, E, t), y && y.m(E, null), (b = !0);
		},
		p(e, [s]) {
			y && y.p && (!b || 1 & s) && f(y, x, e, e[0], b ? $(x, e[0], s, null) : p(e[0]), null);
		},
		i(e) {
			b || (v(y, e), (b = !0));
		},
		o(e) {
			g(y, e), (b = !1);
		},
		d(e) {
			r(s), r(a), e && r(k), e && r(E), y && y.d(e);
		}
	};
}
function E(e, s, a) {
	let { $$slots: t = {}, $$scope: n } = s;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && a(0, (n = e.$$scope));
		}),
		[n, t]
	);
}
class b extends e {
	constructor(e) {
		super(), s(this, e, E, k, a, {});
	}
}
export { b as default };
