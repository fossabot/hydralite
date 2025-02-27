import {
	S as t,
	i as e,
	s,
	D as a,
	e as r,
	c as l,
	a as o,
	d as n,
	b as c,
	f as i,
	G as h,
	H as d,
	I as f,
	x as u,
	u as m,
	K as g,
	A as v,
	B as p,
	L as x,
	T as w,
	M as b,
	k as $,
	n as y,
	N as E,
	F as I,
	J as D,
	O as H,
	C as k,
	t as B,
	g as V,
	P as T,
	h as A,
	Q as R,
	R as S,
	U as j,
	V as O,
	W as N,
	X as G,
	r as C,
	Y as P,
	w as L,
	Z as M,
	_ as U,
	$ as J,
	a0 as F,
	a1 as W,
	j as z,
	m as _,
	o as Y,
	a2 as q,
	a3 as X,
	v as K,
	a4 as Q,
	E as Z,
	a5 as tt
} from '../chunks/vendor-c3306e91.js';
function et(t) {
	let e, s;
	const g = t[2].default,
		v = a(g, t, t[1], null);
	return {
		c() {
			(e = r('span')), v && v.c(), this.h();
		},
		l(t) {
			e = l(t, 'SPAN', { class: !0 });
			var s = o(e);
			v && v.l(s), s.forEach(n), this.h();
		},
		h() {
			c(e, 'class', 'typed-element ');
		},
		m(a, r) {
			i(a, e, r), v && v.m(e, null), t[3](e), (s = !0);
		},
		p(t, [e]) {
			v && v.p && (!s || 2 & e) && h(v, g, t, t[1], s ? f(g, t[1], e, null) : d(t[1]), null);
		},
		i(t) {
			s || (u(v, t), (s = !0));
		},
		o(t) {
			m(v, t), (s = !1);
		},
		d(s) {
			s && n(e), v && v.d(s), t[3](null);
		}
	};
}
function st(t, e, s) {
	let { $$slots: a = {}, $$scope: r } = e;
	const l = g(a);
	let o = null;
	function n() {
		const t = o.querySelector('.typing');
		null == l.default
			? (function (t) {
					throw new TypeError(t);
			  })('Just one child element allowed inside  component.')
			: 1 == l.default && new w(t, e);
	}
	return (
		v(() => {
			n();
		}),
		(t.$$set = (t) => {
			s(6, (e = p(p({}, e), x(t)))), '$$scope' in t && s(1, (r = t.$$scope));
		}),
		(e = x(e)),
		[
			o,
			r,
			a,
			function (t) {
				b[t ? 'unshift' : 'push'](() => {
					(o = t), s(0, o);
				});
			}
		]
	);
}
class at extends t {
	constructor(t) {
		super(), e(this, t, st, et, s, {});
	}
}
function rt(t) {
	let e, s, a, h, d, f, u, m, g, v, p, x;
	return {
		c() {
			(e = r('div')),
				(s = r('img')),
				(h = $()),
				(d = r('div')),
				(f = r('a')),
				(u = r('img')),
				(g = $()),
				(v = r('a')),
				(p = r('img')),
				this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var a = o(e);
			(s = l(a, 'IMG', { src: !0, alt: !0, class: !0 })),
				(h = y(a)),
				(d = l(a, 'DIV', { class: !0 }));
			var r = o(d);
			f = l(r, 'A', { href: !0, target: !0 });
			var c = o(f);
			(u = l(c, 'IMG', { src: !0, alt: !0, width: !0 })),
				c.forEach(n),
				(g = y(r)),
				(v = l(r, 'A', { href: !0, target: !0, class: !0 }));
			var i = o(v);
			(p = l(i, 'IMG', { src: !0, alt: !0, width: !0 })),
				i.forEach(n),
				r.forEach(n),
				a.forEach(n),
				this.h();
		},
		h() {
			E(s.src, (a = '/logo/logo.svg')) || c(s, 'src', '/logo/logo.svg'),
				c(s, 'alt', 'Logo'),
				c(s, 'class', 'w-20'),
				E(u.src, (m = '/assets/twitter.svg')) || c(u, 'src', '/assets/twitter.svg'),
				c(u, 'alt', ''),
				c(u, 'width', '75%'),
				c(f, 'href', 'https://twitter.com/hydraliteio'),
				c(f, 'target', '_blank'),
				E(p.src, (x = '/assets/discord.svg')) || c(p, 'src', '/assets/discord.svg'),
				c(p, 'alt', ''),
				c(p, 'width', '40%'),
				c(v, 'href', 'https://discord.gg/e2AP2Dmk8w'),
				c(v, 'target', '_blank'),
				c(v, 'class', 'w-full h-full'),
				c(d, 'class', 'flex gap-5 items-center'),
				c(e, 'class', 'h-[25vh] bg-dark-bg mt-40 flex items-center justify-around');
		},
		m(t, a) {
			i(t, e, a), I(e, s), I(e, h), I(e, d), I(d, f), I(f, u), I(d, g), I(d, v), I(v, p);
		},
		p: D,
		i: D,
		o: D,
		d(t) {
			t && n(e);
		}
	};
}
class lt extends t {
	constructor(t) {
		super(), e(this, t, null, rt, s, {});
	}
}
const ot = (function (t) {
	const e = k([]);
	function s(t, s = 'default', a) {
		e.update((e) => [
			...e,
			{ id: '_' + Math.random().toString(36).substr(2, 9), type: s, message: t, timeout: a }
		]);
	}
	const a = H(e, (t, s) => {
			if ((s(t), t.length > 0)) {
				const s = setTimeout(() => {
					e.update((t) => (t.shift(), t));
				}, t[0].timeout);
				return () => {
					clearTimeout(s);
				};
			}
		}),
		{ subscribe: r } = a;
	return {
		subscribe: r,
		send: s,
		default: (t, e) => s(t, 'default', e),
		danger: (t, e) => s(t, 'danger', e),
		warning: (t, e) => s(t, 'warning', e),
		info: (t, e) => s(t, 'info', e),
		success: (t, e) => s(t, 'success', e)
	};
})();
function nt(t, e, s) {
	const a = t.slice();
	return (a[2] = e[s]), a;
}
function ct(t) {
	let e, s;
	return {
		c() {
			(e = r('i')), this.h();
		},
		l(t) {
			(e = l(t, 'I', { class: !0 })), o(e).forEach(n), this.h();
		},
		h() {
			c(e, 'class', (s = R(t[2].icon) + ' svelte-u5ypha'));
		},
		m(t, s) {
			i(t, e, s);
		},
		p(t, a) {
			2 & a && s !== (s = R(t[2].icon) + ' svelte-u5ypha') && c(e, 'class', s);
		},
		d(t) {
			t && n(e);
		}
	};
}
function it(t, e) {
	let s,
		a,
		h,
		d,
		f,
		u,
		m,
		g,
		v = e[2].message + '',
		p = D,
		x = e[2].icon && ct(e);
	return {
		key: t,
		first: null,
		c() {
			(s = r('div')), (a = r('div')), (h = B(v)), (d = $()), x && x.c(), (f = $()), this.h();
		},
		l(t) {
			s = l(t, 'DIV', { class: !0, style: !0 });
			var e = o(s);
			a = l(e, 'DIV', { class: !0 });
			var r = o(a);
			(h = V(r, v)), r.forEach(n), (d = y(e)), x && x.l(e), (f = y(e)), e.forEach(n), this.h();
		},
		h() {
			c(a, 'class', 'content svelte-u5ypha'),
				c(s, 'class', 'toast svelte-u5ypha'),
				T(s, 'background', e[0][e[2].type]),
				(this.first = s);
		},
		m(t, e) {
			i(t, s, e), I(s, a), I(a, h), I(s, d), x && x.m(s, null), I(s, f), (g = !0);
		},
		p(t, a) {
			(e = t),
				(!g || 2 & a) && v !== (v = e[2].message + '') && A(h, v),
				e[2].icon ? (x ? x.p(e, a) : ((x = ct(e)), x.c(), x.m(s, f))) : x && (x.d(1), (x = null)),
				(!g || 3 & a) && T(s, 'background', e[0][e[2].type]);
		},
		r() {
			m = s.getBoundingClientRect();
		},
		f() {
			S(s), p(), j(s, m);
		},
		a() {
			p(), (p = O(s, m, U, {}));
		},
		i(t) {
			g ||
				(N(() => {
					u || (u = G(s, J, { y: 30 }, !0)), u.run(1);
				}),
				(g = !0));
		},
		o(t) {
			u || (u = G(s, J, { y: 30 }, !1)), u.run(0), (g = !1);
		},
		d(t) {
			t && n(s), x && x.d(), t && u && u.end();
		}
	};
}
function ht(t) {
	let e,
		s,
		a = [],
		h = new Map(),
		d = t[1];
	const f = (t) => t[2].id;
	for (let r = 0; r < d.length; r += 1) {
		let e = nt(t, d, r),
			s = f(e);
		h.set(s, (a[r] = it(s, e)));
	}
	return {
		c() {
			e = r('div');
			for (let t = 0; t < a.length; t += 1) a[t].c();
			this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var s = o(e);
			for (let e = 0; e < a.length; e += 1) a[e].l(s);
			s.forEach(n), this.h();
		},
		h() {
			c(e, 'class', 'notifications svelte-u5ypha');
		},
		m(t, r) {
			i(t, e, r);
			for (let s = 0; s < a.length; s += 1) a[s].m(e, null);
			s = !0;
		},
		p(t, [s]) {
			if (3 & s) {
				(d = t[1]), C();
				for (let t = 0; t < a.length; t += 1) a[t].r();
				a = P(a, s, f, 1, t, d, h, e, F, it, null, nt);
				for (let t = 0; t < a.length; t += 1) a[t].a();
				L();
			}
		},
		i(t) {
			if (!s) {
				for (let t = 0; t < d.length; t += 1) u(a[t]);
				s = !0;
			}
		},
		o(t) {
			for (let e = 0; e < a.length; e += 1) m(a[e]);
			s = !1;
		},
		d(t) {
			t && n(e);
			for (let e = 0; e < a.length; e += 1) a[e].d();
		}
	};
}
function dt(t, e, s) {
	let a;
	M(t, ot, (t) => s(1, (a = t)));
	let {
		themes: r = {
			danger: '#E26D69',
			success: '#84C991',
			warning: '#f0ad4e',
			info: '#5bc0de',
			default: '#aaaaaa'
		}
	} = e;
	return (
		(t.$$set = (t) => {
			'themes' in t && s(0, (r = t.themes));
		}),
		[r, a]
	);
}
class ft extends t {
	constructor(t) {
		super(), e(this, t, dt, ht, s, { themes: 0 });
	}
}
const ut = {
	apiKey: 'AIzaSyCp1s9A0OghuHrZ9nE2CDyEisA5Wx3c1G0',
	authDomain: 'hydraliteio.firebaseapp.com',
	projectId: 'hydraliteio',
	storageBucket: 'hydraliteio.appspot.com',
	messagingSenderId: '461061257841',
	appId: '1:461061257841:web:91348cd76181ae9ab7f9d0',
	measurementId: 'G-N4QBP0HYVV'
};
function mt(t) {
	let e,
		s,
		a,
		h,
		d,
		f,
		g,
		v,
		p,
		x,
		w,
		b,
		D,
		H,
		k,
		T,
		A,
		R,
		S,
		j,
		O,
		N,
		G,
		C,
		P,
		L,
		M,
		U,
		J,
		F,
		W,
		Z,
		tt,
		et,
		st,
		at,
		rt,
		lt,
		ot,
		nt,
		ct,
		it,
		ht,
		dt,
		ut,
		mt,
		vt,
		xt,
		wt,
		bt,
		$t,
		yt,
		Et,
		It,
		Dt,
		Ht,
		kt,
		Bt,
		Vt,
		Tt,
		At,
		Rt,
		St,
		jt,
		Ot,
		Nt,
		Gt,
		Ct,
		Pt,
		Lt;
	return (
		(a = new ft({})),
		{
			c() {
				(e = r('div')),
					(s = r('div')),
					z(a.$$.fragment),
					(h = $()),
					(d = r('div')),
					(f = r('div')),
					(g = r('div')),
					(v = r('div')),
					(p = r('h1')),
					(x = B('Join the ')),
					(w = r('span')),
					(b = B('waitlist!')),
					(D = $()),
					(H = r('div')),
					(k = r('h5')),
					(T = B('Become the first to know when Hydralite releases. ')),
					(A = r('br')),
					(R = B(' Just enter your email down\r\n\t\t\t\t\t\tbelow!')),
					(S = r('br')),
					(j = $()),
					(O = r('br')),
					(N = $()),
					(G = r('div')),
					(C = r('input')),
					(P = $()),
					(L = r('button')),
					(M = B('Submit')),
					(U = $()),
					(J = r('div')),
					(F = r('h1')),
					(W = B('Have ')),
					(Z = r('span')),
					(tt = B('queries?')),
					(et = $()),
					(st = r('h6')),
					(at = B('Email us at team@hydralite.io')),
					(rt = $()),
					(lt = r('div')),
					(ot = r('a')),
					(nt = r('div')),
					(ct = r('h1')),
					(it = B('Join our discord server')),
					(ht = $()),
					(dt = r('button')),
					(ut = r('img')),
					(vt = B('Take me\r\n\t\t\t\t\tthere!')),
					(xt = $()),
					(wt = r('a')),
					(bt = r('div')),
					($t = r('h1')),
					(yt = B('Follow us on twitter')),
					(Et = $()),
					(It = r('button')),
					(Dt = r('img')),
					(kt = B('Follow\r\n\t\t\t\t\t@hydraliteio')),
					(Bt = $()),
					(Vt = r('a')),
					(Tt = r('div')),
					(At = r('h1')),
					(Rt = B('Browse our GitHub')),
					(St = $()),
					(jt = r('button')),
					(Ot = r('img')),
					(Gt = B('GitHub')),
					this.h();
			},
			l(t) {
				e = l(t, 'DIV', { class: !0 });
				var r = o(e);
				s = l(r, 'DIV', { class: !0 });
				var c = o(s);
				_(a.$$.fragment, c), (h = y(c)), (d = l(c, 'DIV', { class: !0, id: !0 }));
				var i = o(d);
				f = l(i, 'DIV', { class: !0 });
				var u = o(f);
				g = l(u, 'DIV', { class: !0 });
				var m = o(g);
				v = l(m, 'DIV', { class: !0 });
				var $ = o(v);
				p = l($, 'H1', { class: !0 });
				var E = o(p);
				(x = V(E, 'Join the ')), (w = l(E, 'SPAN', { class: !0 }));
				var I = o(w);
				(b = V(I, 'waitlist!')),
					I.forEach(n),
					E.forEach(n),
					$.forEach(n),
					(D = y(m)),
					(H = l(m, 'DIV', { class: !0 }));
				var B = o(H);
				k = l(B, 'H5', { class: !0 });
				var z = o(k);
				(T = V(z, 'Become the first to know when Hydralite releases. ')),
					(A = l(z, 'BR', {})),
					(R = V(z, ' Just enter your email down\r\n\t\t\t\t\t\tbelow!')),
					(S = l(z, 'BR', {})),
					z.forEach(n),
					(j = y(B)),
					(O = l(B, 'BR', {})),
					(N = y(B)),
					(G = l(B, 'DIV', { class: !0 }));
				var Y = o(G);
				(C = l(Y, 'INPUT', { type: !0, name: !0, autocomplete: !0, placeholder: !0, class: !0 })),
					(P = y(Y)),
					(L = l(Y, 'BUTTON', { class: !0 }));
				var q = o(L);
				(M = V(q, 'Submit')),
					q.forEach(n),
					Y.forEach(n),
					B.forEach(n),
					m.forEach(n),
					u.forEach(n),
					(U = y(i)),
					(J = l(i, 'DIV', { class: !0 }));
				var X = o(J);
				F = l(X, 'H1', { class: !0 });
				var K = o(F);
				(W = V(K, 'Have ')), (Z = l(K, 'SPAN', { class: !0 }));
				var Q = o(Z);
				(tt = V(Q, 'queries?')),
					Q.forEach(n),
					K.forEach(n),
					(et = y(X)),
					(st = l(X, 'H6', { class: !0 }));
				var ft = o(st);
				(at = V(ft, 'Email us at team@hydralite.io')),
					ft.forEach(n),
					X.forEach(n),
					i.forEach(n),
					(rt = y(c)),
					(lt = l(c, 'DIV', { class: !0 }));
				var mt = o(lt);
				ot = l(mt, 'A', { href: !0, target: !0, class: !0 });
				var gt = o(ot);
				nt = l(gt, 'DIV', { class: !0 });
				var pt = o(nt);
				ct = l(pt, 'H1', { class: !0 });
				var Ht = o(ct);
				(it = V(Ht, 'Join our discord server')),
					Ht.forEach(n),
					(ht = y(pt)),
					(dt = l(pt, 'BUTTON', { class: !0 }));
				var Nt = o(dt);
				(ut = l(Nt, 'IMG', { src: !0, width: !0, height: !0, alt: !0 })),
					(vt = V(Nt, 'Take me\r\n\t\t\t\t\tthere!')),
					Nt.forEach(n),
					pt.forEach(n),
					gt.forEach(n),
					(xt = y(mt)),
					(wt = l(mt, 'A', { href: !0, target: !0, class: !0 }));
				var Ct = o(wt);
				bt = l(Ct, 'DIV', { class: !0 });
				var Pt = o(bt);
				$t = l(Pt, 'H1', { class: !0 });
				var Lt = o($t);
				(yt = V(Lt, 'Follow us on twitter')),
					Lt.forEach(n),
					(Et = y(Pt)),
					(It = l(Pt, 'BUTTON', { class: !0 }));
				var Mt = o(It);
				(Dt = l(Mt, 'IMG', { src: !0, width: !0, height: !0, alt: !0 })),
					(kt = V(Mt, 'Follow\r\n\t\t\t\t\t@hydraliteio')),
					Mt.forEach(n),
					Pt.forEach(n),
					Ct.forEach(n),
					(Bt = y(mt)),
					(Vt = l(mt, 'A', { href: !0 }));
				var Ut = o(Vt);
				Tt = l(Ut, 'DIV', { class: !0 });
				var Jt = o(Tt);
				At = l(Jt, 'H1', { class: !0 });
				var Ft = o(At);
				(Rt = V(Ft, 'Browse our GitHub')),
					Ft.forEach(n),
					(St = y(Jt)),
					(jt = l(Jt, 'BUTTON', { class: !0 }));
				var Wt = o(jt);
				(Ot = l(Wt, 'IMG', { src: !0, width: !0, height: !0, alt: !0 })),
					(Gt = V(Wt, 'GitHub')),
					Wt.forEach(n),
					Jt.forEach(n),
					Ut.forEach(n),
					mt.forEach(n),
					c.forEach(n),
					r.forEach(n),
					this.h();
			},
			h() {
				c(w, 'class', 'text-dark-color-accent font-extrabold'),
					c(p, 'class', 'text-2xl font-bold font-montserrat'),
					c(v, 'class', 'flex items-center flex-col'),
					c(k, 'class', 'text-center font-bold font-montserrat hidden lg:block 2xl:block'),
					c(C, 'type', 'text'),
					c(C, 'name', 'Email..'),
					c(C, 'autocomplete', 'off'),
					c(C, 'placeholder', 'Email..'),
					c(C, 'class', 'bg-transparent col-span-3 focus:outline-none text-black ml-4 '),
					c(
						L,
						'class',
						'col-span-1 flex items-center justify-center bg-dark-color-accent rounded-xl text-white font-montserrat'
					),
					c(
						G,
						'class',
						'grid grid-cols-4 w-full h-[3vh] bg-acrylic-20 p-1 rounded-xl h-[7vh] sm:h-[7vh] lg:h-[7vh] xl:h-[7vh]'
					),
					c(H, 'class', 'flex w-full h-full items-center justify-center flex-col'),
					c(
						g,
						'class',
						'w-full h-full bg-white rounded-xl drop-shadow-2xl flex items-center flex-col bg p-7 '
					),
					c(f, 'class', 'grid row-span-3 2xl:row-span-2 md:row-span-3'),
					c(Z, 'class', 'text-dark-color-accent'),
					c(F, 'class', 'text-3xl font-bold font-montserrat'),
					c(st, 'class', 'text-lg font-semibold font-montserrat'),
					c(
						J,
						'class',
						'w-full h-full bg-white rounded-xl drop-shadow-2xl p-5 hidden items-center flex-col justify-around 2xl:flex'
					),
					c(
						d,
						'class',
						'w-full h-full grid grid-rows-3 col-span-3 gap-3 p-4 sm:col-span-3 2xl:col-span-2'
					),
					c(d, 'id', 'waitlist'),
					c(ct, 'class', 'text-2xl font-montserrat font-bold'),
					E(ut.src, (mt = '/assets/discord.svg')) || c(ut, 'src', '/assets/discord.svg'),
					c(ut, 'width', '10%'),
					c(ut, 'height', '10%'),
					c(ut, 'alt', 'Discord logo'),
					c(
						dt,
						'class',
						'bg-dark-color-accent pl-7 py-2 rounded-xl font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3'
					),
					c(
						nt,
						'class',
						'w-full h-full bg-white rounded-xl drop-shadow-2xl flex flex-col items-center justify-around'
					),
					c(ot, 'href', 'https://discord.gg/e2AP2Dmk8w'),
					c(ot, 'target', '_blank'),
					c(ot, 'class', 'w-full h-full'),
					c($t, 'class', 'text-2xl font-montserrat font-bold'),
					E(Dt.src, (Ht = '/assets/twitter.svg')) || c(Dt, 'src', '/assets/twitter.svg'),
					c(Dt, 'width', '10%'),
					c(Dt, 'height', '10%'),
					c(Dt, 'alt', 'Discord logo'),
					c(
						It,
						'class',
						'bg-dark-color-accent pl-7 py-2 rounded-xl font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3'
					),
					c(
						bt,
						'class',
						'w-full h-full bg-white rounded-xl drop-shadow-2xl flex flex-col items-center justify-around'
					),
					c(wt, 'href', 'https://twitter.com/hydraliteio'),
					c(wt, 'target', '_blank'),
					c(wt, 'class', 'w-full h-full'),
					c(At, 'class', 'text-2xl font-montserrat font-bold'),
					E(Ot.src, (Nt = '/assets/github.svg')) || c(Ot, 'src', '/assets/github.svg'),
					c(Ot, 'width', '20%'),
					c(Ot, 'height', '20%'),
					c(Ot, 'alt', 'Discord logo'),
					c(
						jt,
						'class',
						'bg-dark-color-accent text-sm py-2 rounded-xl px-9 font-montserrat text-white hover:bg-opacity-90 duration-300 flex items-center gap-3'
					),
					c(
						Tt,
						'class',
						'w-full h-full bg-white rounded-xl drop-shadow-2xl flex flex-col items-center justify-around'
					),
					c(Vt, 'href', 'https://github.com/hydralite'),
					c(lt, 'class', 'w-full h-full hidden grid-rows-3 gap-3 py-4 pr-4 2xl:grid'),
					c(
						s,
						'class',
						'h-[50vh] w-[90vw] md:w-[75vw] lg:w-[75vw] bg-gray-200 mt-16 rounded-2xl grid grid-cols-3 gap-1'
					),
					c(e, 'class', 'flex w-screen items-center justify-center');
			},
			m(r, l) {
				i(r, e, l),
					I(e, s),
					Y(a, s, null),
					I(s, h),
					I(s, d),
					I(d, f),
					I(f, g),
					I(g, v),
					I(v, p),
					I(p, x),
					I(p, w),
					I(w, b),
					I(g, D),
					I(g, H),
					I(H, k),
					I(k, T),
					I(k, A),
					I(k, R),
					I(k, S),
					I(H, j),
					I(H, O),
					I(H, N),
					I(H, G),
					I(G, C),
					q(C, gt),
					I(G, P),
					I(G, L),
					I(L, M),
					I(d, U),
					I(d, J),
					I(J, F),
					I(F, W),
					I(F, Z),
					I(Z, tt),
					I(J, et),
					I(J, st),
					I(st, at),
					I(s, rt),
					I(s, lt),
					I(lt, ot),
					I(ot, nt),
					I(nt, ct),
					I(ct, it),
					I(nt, ht),
					I(nt, dt),
					I(dt, ut),
					I(dt, vt),
					I(lt, xt),
					I(lt, wt),
					I(wt, bt),
					I(bt, $t),
					I($t, yt),
					I(bt, Et),
					I(bt, It),
					I(It, Dt),
					I(It, kt),
					I(lt, Bt),
					I(lt, Vt),
					I(Vt, Tt),
					I(Tt, At),
					I(At, Rt),
					I(Tt, St),
					I(Tt, jt),
					I(jt, Ot),
					I(jt, Gt),
					(Ct = !0),
					Pt || ((Lt = [X(C, 'input', t[0]), X(L, 'click', pt)]), (Pt = !0));
			},
			p(t, [e]) {
				0 & e && C.value !== gt && q(C, gt);
			},
			i(t) {
				Ct || (u(a.$$.fragment, t), (Ct = !0));
			},
			o(t) {
				m(a.$$.fragment, t), (Ct = !1);
			},
			d(t) {
				t && n(e), K(a), (Pt = !1), Q(Lt);
			}
		}
	);
}
let gt = '',
	vt = new (class {
		initialize() {
			W.apps.length ? W.app() : W.initializeApp(ut);
		}
		validateEmail(t) {
			return new Promise(async (e, s) => {
				this.initialize();
				const a = W.firestore().collection('waitlist');
				await a
					.where('email', '==', t)
					.get()
					.then((t) => {
						t.forEach((t) => {
							t && (console.log('ASDASDASD'), e('Duplicate Waitlist Identified'));
						});
					})
					.catch((t) => {
						console.log('Error getting documents: ', t);
					});
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
					String(t).toLowerCase()
				)
					? e('Success')
					: e('Invalid Email Address');
			});
		}
		setEmail(t) {
			this.initialize(),
				W.firestore()
					.collection('waitlist')
					.doc(t)
					.set({ email: t })
					.then(() => {
						console.log('Document successfully written!');
					})
					.catch((t) => {
						console.error('Error writing document: ', t);
					});
		}
	})();
const pt = (t) => {
	vt.validateEmail(gt).then((t) => {
		console.log(t), 'Success' == t ? (vt.setEmail(gt), ot.success(t, 3e3)) : ot.danger(t, 3e3);
	}),
		console.log(gt);
};
function xt(t, e, s) {
	return [
		function () {
			gt = this.value;
		}
	];
}
class wt extends t {
	constructor(t) {
		super(), e(this, t, xt, mt, s, {});
	}
}
function bt(t) {
	let e, s, g, v, p;
	const x = t[2].default,
		w = a(x, t, t[1], null);
	return {
		c() {
			(e = r('div')), (s = r('img')), (v = $()), w && w.c(), this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0 });
			var a = o(e);
			(s = l(a, 'IMG', { class: !0, width: !0, src: !0, alt: !0 })),
				(v = y(a)),
				w && w.l(a),
				a.forEach(n),
				this.h();
		},
		h() {
			c(s, 'class', 'md:w-[5em] lg:w-[1em] xl:w-[3em]'),
				c(s, 'width', '50em'),
				E(s.src, (g = t[0])) || c(s, 'src', g),
				c(s, 'alt', t[0]),
				c(e, 'class', 'w-[25%] h-full flex flex-col items-center justify-around');
		},
		m(t, a) {
			i(t, e, a), I(e, s), I(e, v), w && w.m(e, null), (p = !0);
		},
		p(t, [e]) {
			(!p || (1 & e && !E(s.src, (g = t[0])))) && c(s, 'src', g),
				(!p || 1 & e) && c(s, 'alt', t[0]),
				w && w.p && (!p || 2 & e) && h(w, x, t, t[1], p ? f(x, t[1], e, null) : d(t[1]), null);
		},
		i(t) {
			p || (u(w, t), (p = !0));
		},
		o(t) {
			m(w, t), (p = !1);
		},
		d(t) {
			t && n(e), w && w.d(t);
		}
	};
}
function $t(t, e, s) {
	let { $$slots: a = {}, $$scope: r } = e,
		{ img: l = '/assets/integration.svg' } = e;
	return (
		(t.$$set = (t) => {
			'img' in t && s(0, (l = t.img)), '$$scope' in t && s(1, (r = t.$$scope));
		}),
		[l, r, a]
	);
}
class yt extends t {
	constructor(t) {
		super(), e(this, t, $t, bt, s, { img: 0 });
	}
}
function Et(t) {
	let e, s, a, h, d, f;
	return {
		c() {
			(e = r('h4')),
				(s = B('Hydralite’s tightly integrated with')),
				(a = r('br')),
				(h = B(' your favourite providers! You can ')),
				(d = r('br')),
				(f = B(' do it all\r\n\t\t\t\t\tthrough Hydralite.')),
				this.h();
		},
		l(t) {
			e = l(t, 'H4', { class: !0 });
			var r = o(e);
			(s = V(r, 'Hydralite’s tightly integrated with')),
				(a = l(r, 'BR', {})),
				(h = V(r, ' your favourite providers! You can ')),
				(d = l(r, 'BR', {})),
				(f = V(r, ' do it all\r\n\t\t\t\t\tthrough Hydralite.')),
				r.forEach(n),
				this.h();
		},
		h() {
			c(e, 'class', 'text-center font-bold font-montserrat md:text-xl lg:text-sm text-gray-800');
		},
		m(t, r) {
			i(t, e, r), I(e, s), I(e, a), I(e, h), I(e, d), I(e, f);
		},
		d(t) {
			t && n(e);
		}
	};
}
function It(t) {
	let e, s, a, h;
	return {
		c() {
			(e = r('h4')),
				(s = B('Integrated with Github,')),
				(a = r('br')),
				(h = B(' Bitbucket and Gitlab for seamless codebase management.')),
				this.h();
		},
		l(t) {
			e = l(t, 'H4', { class: !0 });
			var r = o(e);
			(s = V(r, 'Integrated with Github,')),
				(a = l(r, 'BR', {})),
				(h = V(r, ' Bitbucket and Gitlab for seamless codebase management.')),
				r.forEach(n),
				this.h();
		},
		h() {
			c(e, 'class', 'text-center font-bold font-montserrat md:text-xl lg:text-sm text-gray-800');
		},
		m(t, r) {
			i(t, e, r), I(e, s), I(e, a), I(e, h);
		},
		d(t) {
			t && n(e);
		}
	};
}
function Dt(t) {
	let e, s, a, h, d, f, u, m;
	return {
		c() {
			(e = r('h4')),
				(s = B('Hydralite allows you')),
				(a = r('br')),
				(h = B(' to handle releases')),
				(d = r('br')),
				(f = B(' easily using our')),
				(u = r('br')),
				(m = B(' integrations.')),
				this.h();
		},
		l(t) {
			e = l(t, 'H4', { class: !0 });
			var r = o(e);
			(s = V(r, 'Hydralite allows you')),
				(a = l(r, 'BR', {})),
				(h = V(r, ' to handle releases')),
				(d = l(r, 'BR', {})),
				(f = V(r, ' easily using our')),
				(u = l(r, 'BR', {})),
				(m = V(r, ' integrations.')),
				r.forEach(n),
				this.h();
		},
		h() {
			c(e, 'class', 'text-center font-bold font-montserrat md:text-xl lg:text-sm text-gray-800');
		},
		m(t, r) {
			i(t, e, r), I(e, s), I(e, a), I(e, h), I(e, d), I(e, f), I(e, u), I(e, m);
		},
		d(t) {
			t && n(e);
		}
	};
}
function Ht(t) {
	let e, s, a, h, d, f;
	return {
		c() {
			(e = r('h4')),
				(s = B('Build a community around your product.  Update them')),
				(a = r('br')),
				(h = B('  about your latest releases\r\n\t\t\t\t\t')),
				(d = r('br')),
				(f = B('and features.')),
				this.h();
		},
		l(t) {
			e = l(t, 'H4', { class: !0 });
			var r = o(e);
			(s = V(r, 'Build a community around your product.  Update them')),
				(a = l(r, 'BR', {})),
				(h = V(r, '  about your latest releases\r\n\t\t\t\t\t')),
				(d = l(r, 'BR', {})),
				(f = V(r, 'and features.')),
				r.forEach(n),
				this.h();
		},
		h() {
			c(
				e,
				'class',
				'text-center font-bold font-montserrat md:text-xl lg:text-sm text-gray-800 mr-3'
			);
		},
		m(t, r) {
			i(t, e, r), I(e, s), I(e, a), I(e, h), I(e, d), I(e, f);
		},
		d(t) {
			t && n(e);
		}
	};
}
function kt(t) {
	let e, s, a, h, d, f, g, v, p, x, w, b, D, H, k, T, A, R, S, j, O, N, G, C, P, L, M, U, J, F;
	return (
		(j = new yt({
			props: { img: '/assets/integration.svg', $$slots: { default: [Et] }, $$scope: { ctx: t } }
		})),
		(N = new yt({
			props: { img: '/assets/git.svg', $$slots: { default: [It] }, $$scope: { ctx: t } }
		})),
		(C = new yt({
			props: { img: '/assets/releases.svg', $$slots: { default: [Dt] }, $$scope: { ctx: t } }
		})),
		(L = new yt({
			props: { img: '/assets/community.svg', $$slots: { default: [Ht] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = r('div')),
					(s = r('div')),
					(a = r('h2')),
					(h = B('FAST, INTUITIVE, POWERFUL')),
					(d = $()),
					(f = r('h2')),
					(g = B('PROJECT MANAGEMENT')),
					(v = $()),
					(p = r('h5')),
					(x = B('Hydralite allows easy, intuitive project')),
					(w = r('br')),
					(b = B(' management, it allows brainstorming ')),
					(D = r('br')),
					(H = B('\r\n\t\t\tsessions, audio rooms, inbuilt source control, ')),
					(k = r('br')),
					(T = B('and many more!')),
					(A = $()),
					(R = r('div')),
					(S = r('div')),
					z(j.$$.fragment),
					(O = $()),
					z(N.$$.fragment),
					(G = $()),
					z(C.$$.fragment),
					(P = $()),
					z(L.$$.fragment),
					(M = $()),
					(U = r('img')),
					this.h();
			},
			l(t) {
				e = l(t, 'DIV', { class: !0 });
				var r = o(e);
				s = l(r, 'DIV', {});
				var c = o(s);
				a = l(c, 'H2', { class: !0 });
				var i = o(a);
				(h = V(i, 'FAST, INTUITIVE, POWERFUL')),
					i.forEach(n),
					(d = y(c)),
					(f = l(c, 'H2', { class: !0 }));
				var u = o(f);
				(g = V(u, 'PROJECT MANAGEMENT')), u.forEach(n), (v = y(c)), (p = l(c, 'H5', { class: !0 }));
				var m = o(p);
				(x = V(m, 'Hydralite allows easy, intuitive project')),
					(w = l(m, 'BR', {})),
					(b = V(m, ' management, it allows brainstorming ')),
					(D = l(m, 'BR', {})),
					(H = V(m, '\r\n\t\t\tsessions, audio rooms, inbuilt source control, ')),
					(k = l(m, 'BR', {})),
					(T = V(m, 'and many more!')),
					m.forEach(n),
					c.forEach(n),
					(A = y(r)),
					(R = l(r, 'DIV', { class: !0 }));
				var $ = o(R);
				S = l($, 'DIV', { class: !0 });
				var E = o(S);
				_(j.$$.fragment, E),
					(O = y(E)),
					_(N.$$.fragment, E),
					(G = y(E)),
					_(C.$$.fragment, E),
					(P = y(E)),
					_(L.$$.fragment, E),
					E.forEach(n),
					$.forEach(n),
					(M = y(r)),
					(U = l(r, 'IMG', { class: !0, src: !0, alt: !0, width: !0, height: !0 })),
					r.forEach(n),
					this.h();
			},
			h() {
				c(a, 'class', 'font-bold font-montserrat text-acrylic-20'),
					c(f, 'class', 'mt-5 font-extrabold text-3xl font-montserrat text-dark-color-accent'),
					c(p, 'class', 'mt-5 font-semibold text-acrylic-30'),
					c(
						S,
						'class',
						'z-50 absolute bg-white w-[calc(100%-30%)] h-[25vh] right-[15vw] bottom-[-15vh] drop-shadow-2xl rounded-xl flex'
					),
					c(R, 'class', 'hidden sm:hidden md:hidden lg:text-sm xl:hidden 2xl:inline-flex'),
					c(U, 'class', 'hidden lg:inline-flex xl:inline-flex 2xl:inline-flex'),
					E(U.src, (J = '/assets/Project.svg')) || c(U, 'src', '/assets/Project.svg'),
					c(U, 'alt', ''),
					c(U, 'width', '50%'),
					c(U, 'height', '50%'),
					c(e, 'class', 'h-[80vh] bg-dark-bg flex items-center justify-between px-[15vw] relative');
			},
			m(t, r) {
				i(t, e, r),
					I(e, s),
					I(s, a),
					I(a, h),
					I(s, d),
					I(s, f),
					I(f, g),
					I(s, v),
					I(s, p),
					I(p, x),
					I(p, w),
					I(p, b),
					I(p, D),
					I(p, H),
					I(p, k),
					I(p, T),
					I(e, A),
					I(e, R),
					I(R, S),
					Y(j, S, null),
					I(S, O),
					Y(N, S, null),
					I(S, G),
					Y(C, S, null),
					I(S, P),
					Y(L, S, null),
					I(e, M),
					I(e, U),
					(F = !0);
			},
			p(t, [e]) {
				const s = {};
				1 & e && (s.$$scope = { dirty: e, ctx: t }), j.$set(s);
				const a = {};
				1 & e && (a.$$scope = { dirty: e, ctx: t }), N.$set(a);
				const r = {};
				1 & e && (r.$$scope = { dirty: e, ctx: t }), C.$set(r);
				const l = {};
				1 & e && (l.$$scope = { dirty: e, ctx: t }), L.$set(l);
			},
			i(t) {
				F ||
					(u(j.$$.fragment, t),
					u(N.$$.fragment, t),
					u(C.$$.fragment, t),
					u(L.$$.fragment, t),
					(F = !0));
			},
			o(t) {
				m(j.$$.fragment, t),
					m(N.$$.fragment, t),
					m(C.$$.fragment, t),
					m(L.$$.fragment, t),
					(F = !1);
			},
			d(t) {
				t && n(e), K(j), K(N), K(C), K(L);
			}
		}
	);
}
class Bt extends t {
	constructor(t) {
		super(), e(this, t, null, kt, s, {});
	}
}
function Vt(t) {
	let e, s, a, h, d, f, g, v, p, x, w, b, H, k, T, A, R, S, j, O, N, G, C, P, L, M, U, J, F, W;
	return (
		(e = new Bt({})),
		{
			c() {
				z(e.$$.fragment),
					(s = $()),
					(a = r('div')),
					(h = r('img')),
					(f = $()),
					(g = r('div')),
					(v = r('h2')),
					(p = B('EXPLORE. CONNECT. BUILD.')),
					(x = $()),
					(w = r('h2')),
					(b = B('DISCOVER')),
					(H = $()),
					(k = r('h5')),
					(T = B(
						'Connect with like-minded developers and build a followership. Find your next project idea with\r\n\t\t\tHydralite’s built in project idea explorer. Discover other incredible projects, big or small!'
					)),
					(A = $()),
					(R = r('div')),
					(S = r('div')),
					(j = r('h2')),
					(O = B('COLLABORATE. INNOVATE. SHIP.')),
					(N = $()),
					(G = r('h2')),
					(C = B('COLLABORATE')),
					(P = $()),
					(L = r('h5')),
					(M = B(
						'Build your dream development team. Work with pioneers in the industry. Sign sponsorships and\r\n\t\t\tonboard investors.'
					)),
					(U = $()),
					(J = r('img')),
					this.h();
			},
			l(t) {
				_(e.$$.fragment, t), (s = y(t)), (a = l(t, 'DIV', { class: !0 }));
				var r = o(a);
				(h = l(r, 'IMG', { src: !0, class: !0, alt: !0, width: !0 })),
					(f = y(r)),
					(g = l(r, 'DIV', {}));
				var c = o(g);
				v = l(c, 'H2', { class: !0 });
				var i = o(v);
				(p = V(i, 'EXPLORE. CONNECT. BUILD.')),
					i.forEach(n),
					(x = y(c)),
					(w = l(c, 'H2', { class: !0 }));
				var d = o(w);
				(b = V(d, 'DISCOVER')), d.forEach(n), (H = y(c)), (k = l(c, 'H5', { class: !0 }));
				var u = o(k);
				(T = V(
					u,
					'Connect with like-minded developers and build a followership. Find your next project idea with\r\n\t\t\tHydralite’s built in project idea explorer. Discover other incredible projects, big or small!'
				)),
					u.forEach(n),
					c.forEach(n),
					r.forEach(n),
					(A = y(t)),
					(R = l(t, 'DIV', { class: !0 }));
				var m = o(R);
				S = l(m, 'DIV', {});
				var $ = o(S);
				j = l($, 'H2', { class: !0 });
				var E = o(j);
				(O = V(E, 'COLLABORATE. INNOVATE. SHIP.')),
					E.forEach(n),
					(N = y($)),
					(G = l($, 'H2', { class: !0 }));
				var I = o(G);
				(C = V(I, 'COLLABORATE')), I.forEach(n), (P = y($)), (L = l($, 'H5', { class: !0 }));
				var D = o(L);
				(M = V(
					D,
					'Build your dream development team. Work with pioneers in the industry. Sign sponsorships and\r\n\t\t\tonboard investors.'
				)),
					D.forEach(n),
					$.forEach(n),
					(U = y(m)),
					(J = l(m, 'IMG', { src: !0, class: !0, alt: !0, width: !0, height: !0 })),
					m.forEach(n),
					this.h();
			},
			h() {
				E(h.src, (d = '/assets/discover.svg')) || c(h, 'src', '/assets/discover.svg'),
					c(h, 'class', 'hidden lg:inline-flex xl:inline-flex 2xl:inline-flex drop-shadow-xl'),
					c(h, 'alt', ''),
					c(h, 'width', '60%'),
					c(v, 'class', 'font-bold font-montserrat text-base text-gray-700'),
					c(w, 'class', 'mt-5 font-extrabold text-4xl font-montserrat text-dark-color-accent'),
					c(k, 'class', 'mt-5 font-semibold text-gray-800'),
					c(a, 'class', 'h-[80vh] bg-white flex items-center justify-between px-[15vw] mt-[5vh]'),
					c(j, 'class', 'font-bold font-montserrat text-base text-gray-200'),
					c(G, 'class', 'mt-5 font-extrabold text-4xl font-montserrat text-dark-color-accent'),
					c(L, 'class', 'mt-5 font-semibold text-gray-200'),
					E(J.src, (F = '/assets/collaborate.svg')) || c(J, 'src', '/assets/collaborate.svg'),
					c(J, 'class', 'drop-shadow-xl hidden lg:inline-flex xl:inline-flex 2xl:inline-flex'),
					c(J, 'alt', ''),
					c(J, 'width', '60%'),
					c(J, 'height', '60%'),
					c(R, 'class', 'h-[80vh] bg-dark-bg flex items-center justify-between px-[15vw] mt-[5vh]');
			},
			m(t, r) {
				Y(e, t, r),
					i(t, s, r),
					i(t, a, r),
					I(a, h),
					I(a, f),
					I(a, g),
					I(g, v),
					I(v, p),
					I(g, x),
					I(g, w),
					I(w, b),
					I(g, H),
					I(g, k),
					I(k, T),
					i(t, A, r),
					i(t, R, r),
					I(R, S),
					I(S, j),
					I(j, O),
					I(S, N),
					I(S, G),
					I(G, C),
					I(S, P),
					I(S, L),
					I(L, M),
					I(R, U),
					I(R, J),
					(W = !0);
			},
			p: D,
			i(t) {
				W || (u(e.$$.fragment, t), (W = !0));
			},
			o(t) {
				m(e.$$.fragment, t), (W = !1);
			},
			d(t) {
				K(e, t), t && n(s), t && n(a), t && n(A), t && n(R);
			}
		}
	);
}
class Tt extends t {
	constructor(t) {
		super(), e(this, t, null, Vt, s, {});
	}
}
function At(t) {
	let e, s, a, h;
	return {
		c() {
			(e = B('The place for Developers to')),
				(s = r('br')),
				(a = r('span')),
				(h = B('Software')),
				this.h();
		},
		l(t) {
			(e = V(t, 'The place for Developers to')),
				(s = l(t, 'BR', {})),
				(a = l(t, 'SPAN', { class: !0 })),
				o(a).forEach(n),
				(h = V(t, 'Software')),
				this.h();
		},
		h() {
			c(a, 'class', 'typing text-iris-30 font-extrabold');
		},
		m(t, r) {
			i(t, e, r), i(t, s, r), i(t, a, r), i(t, h, r);
		},
		d(t) {
			t && n(e), t && n(s), t && n(a), t && n(h);
		}
	};
}
function Rt(t) {
	let e, s, a, h, d, f, g, v, p, x, w, b, D, H, k, T, A, R, S, j, O, N, G, C, P, L;
	return (
		(b = new at({
			props: {
				strings: ['Discover', 'Develop', 'Deploy'],
				loop: 'true',
				smartBackspace: 'true',
				typeSpeed: '10',
				backSpeed: '5',
				$$slots: { default: [At] },
				$$scope: { ctx: t }
			}
		})),
		(S = new Tt({})),
		(O = new wt({})),
		(G = new lt({})),
		{
			c() {
				(e = $()),
					(s = r('div')),
					(a = r('div')),
					(h = r('img')),
					(f = $()),
					(g = r('button')),
					(v = B('Join Waitlist')),
					(p = $()),
					(x = r('div')),
					(w = r('h1')),
					z(b.$$.fragment),
					(D = $()),
					(H = r('h4')),
					(k = B('Connect with like-minded developers, onboard investors ')),
					(T = r('br')),
					(A = B(' and seamlessly manage your codebase.')),
					(R = $()),
					z(S.$$.fragment),
					(j = $()),
					z(O.$$.fragment),
					(N = $()),
					z(G.$$.fragment),
					this.h();
			},
			l(t) {
				Z('[data-svelte="svelte-1anpopb"]', document.head).forEach(n),
					(e = y(t)),
					(s = l(t, 'DIV', { class: !0 }));
				var r = o(s);
				a = l(r, 'DIV', { class: !0 });
				var c = o(a);
				(h = l(c, 'IMG', { src: !0, alt: !0, class: !0 })),
					(f = y(c)),
					(g = l(c, 'BUTTON', { class: !0 }));
				var i = o(g);
				(v = V(i, 'Join Waitlist')),
					i.forEach(n),
					c.forEach(n),
					(p = y(r)),
					(x = l(r, 'DIV', { class: !0 }));
				var d = o(x);
				w = l(d, 'H1', { class: !0 });
				var u = o(w);
				_(b.$$.fragment, u), u.forEach(n), (D = y(d)), (H = l(d, 'H4', { class: !0 }));
				var m = o(H);
				(k = V(m, 'Connect with like-minded developers, onboard investors ')),
					(T = l(m, 'BR', {})),
					(A = V(m, ' and seamlessly manage your codebase.')),
					m.forEach(n),
					d.forEach(n),
					(R = y(r)),
					_(S.$$.fragment, r),
					(j = y(r)),
					_(O.$$.fragment, r),
					(N = y(r)),
					_(G.$$.fragment, r),
					r.forEach(n),
					this.h();
			},
			h() {
				(document.title = 'Home'),
					E(h.src, (d = '/logo/logo.svg')) || c(h, 'src', '/logo/logo.svg'),
					c(h, 'alt', 'Logo'),
					c(h, 'class', 'w-20'),
					c(g, 'class', 'font-bold text-gray-500'),
					c(a, 'class', 'flex items-center justify-between font-montserrat my-4 mx-16'),
					c(w, 'class', 'font-bold text-center text-5xl font-montserrat'),
					c(H, 'class', 'font-montserrat font-bold mt-6 text-[#656565] text-center'),
					c(x, 'class', 'h-[calc(100vh-10vh)] flex items-center justify-center w-screen flex-col'),
					c(s, 'class', 'overflow-x-hidden');
			},
			m(r, l) {
				i(r, e, l),
					i(r, s, l),
					I(s, a),
					I(a, h),
					I(a, f),
					I(a, g),
					I(g, v),
					I(s, p),
					I(s, x),
					I(x, w),
					Y(b, w, null),
					I(x, D),
					I(x, H),
					I(H, k),
					I(H, T),
					I(H, A),
					I(s, R),
					Y(S, s, null),
					I(s, j),
					Y(O, s, null),
					I(s, N),
					Y(G, s, null),
					(C = !0),
					P || ((L = X(g, 'click', t[0])), (P = !0));
			},
			p(t, [e]) {
				const s = {};
				2 & e && (s.$$scope = { dirty: e, ctx: t }), b.$set(s);
			},
			i(t) {
				C ||
					(u(b.$$.fragment, t),
					u(S.$$.fragment, t),
					u(O.$$.fragment, t),
					u(G.$$.fragment, t),
					(C = !0));
			},
			o(t) {
				m(b.$$.fragment, t),
					m(S.$$.fragment, t),
					m(O.$$.fragment, t),
					m(G.$$.fragment, t),
					(C = !1);
			},
			d(t) {
				t && n(e), t && n(s), K(b), K(S), K(O), K(G), (P = !1), L();
			}
		}
	);
}
const St = !0;
function jt(t) {
	return [
		() => {
			tt({ element: '#waitlist', duration: 1e3 }), console.log('as');
		}
	];
}
class Ot extends t {
	constructor(t) {
		super(), e(this, t, jt, Rt, s, {});
	}
}
export { Ot as default, St as prerender };
