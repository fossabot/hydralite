var t = Object.defineProperty,
	e = Object.defineProperties,
	r = Object.getOwnPropertyDescriptors,
	s = Object.getOwnPropertySymbols,
	n = Object.prototype.hasOwnProperty,
	a = Object.prototype.propertyIsEnumerable,
	o = (e, r, s) =>
		r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[r] = s),
	i = (t, e) => {
		for (var r in e || (e = {})) n.call(e, r) && o(t, r, e[r]);
		if (s) for (var r of s(e)) a.call(e, r) && o(t, r, e[r]);
		return t;
	};
'undefined' != typeof require && require;
import {
	S as l,
	i as c,
	s as u,
	e as h,
	c as d,
	a as p,
	d as f,
	b as g,
	f as m,
	t as y,
	g as _,
	h as b,
	j as v,
	k as w,
	l as $,
	m as E,
	n as x,
	o as q,
	p as R,
	q as S,
	r as L,
	u as k,
	v as O,
	w as U,
	x as P,
	y as A,
	z as j,
	A as N,
	B as T,
	C as I
} from './chunks/vendor-c3306e91.js';
function C(t) {
	let e, r, s;
	const n = [t[2] || {}];
	var a = t[0][1];
	function o(t) {
		let e = { $$slots: { default: [D] }, $$scope: { ctx: t } };
		for (let r = 0; r < n.length; r += 1) e = T(e, n[r]);
		return { props: e };
	}
	return (
		a && (e = new a(o(t))),
		{
			c() {
				e && v(e.$$.fragment), (r = $());
			},
			l(t) {
				e && E(e.$$.fragment, t), (r = $());
			},
			m(t, n) {
				e && q(e, t, n), m(t, r, n), (s = !0);
			},
			p(t, s) {
				const i = 4 & s ? R(n, [S(t[2] || {})]) : {};
				if ((521 & s && (i.$$scope = { dirty: s, ctx: t }), a !== (a = t[0][1]))) {
					if (e) {
						L();
						const t = e;
						k(t.$$.fragment, 1, 0, () => {
							O(t, 1);
						}),
							U();
					}
					a
						? ((e = new a(o(t))), v(e.$$.fragment), P(e.$$.fragment, 1), q(e, r.parentNode, r))
						: (e = null);
				} else a && e.$set(i);
			},
			i(t) {
				s || (e && P(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && k(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && f(r), e && O(e, t);
			}
		}
	);
}
function V(t) {
	let e, r, s;
	const n = [t[3] || {}];
	var a = t[0][2];
	function o(t) {
		let e = {};
		for (let r = 0; r < n.length; r += 1) e = T(e, n[r]);
		return { props: e };
	}
	return (
		a && (e = new a(o())),
		{
			c() {
				e && v(e.$$.fragment), (r = $());
			},
			l(t) {
				e && E(e.$$.fragment, t), (r = $());
			},
			m(t, n) {
				e && q(e, t, n), m(t, r, n), (s = !0);
			},
			p(t, s) {
				const i = 8 & s ? R(n, [S(t[3] || {})]) : {};
				if (a !== (a = t[0][2])) {
					if (e) {
						L();
						const t = e;
						k(t.$$.fragment, 1, 0, () => {
							O(t, 1);
						}),
							U();
					}
					a
						? ((e = new a(o())), v(e.$$.fragment), P(e.$$.fragment, 1), q(e, r.parentNode, r))
						: (e = null);
				} else a && e.$set(i);
			},
			i(t) {
				s || (e && P(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && k(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && f(r), e && O(e, t);
			}
		}
	);
}
function D(t) {
	let e,
		r,
		s = t[0][2] && V(t);
	return {
		c() {
			s && s.c(), (e = $());
		},
		l(t) {
			s && s.l(t), (e = $());
		},
		m(t, n) {
			s && s.m(t, n), m(t, e, n), (r = !0);
		},
		p(t, r) {
			t[0][2]
				? s
					? (s.p(t, r), 1 & r && P(s, 1))
					: ((s = V(t)), s.c(), P(s, 1), s.m(e.parentNode, e))
				: s &&
				  (L(),
				  k(s, 1, 1, () => {
						s = null;
				  }),
				  U());
		},
		i(t) {
			r || (P(s), (r = !0));
		},
		o(t) {
			k(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && f(e);
		}
	};
}
function B(t) {
	let e,
		r,
		s = t[0][1] && C(t);
	return {
		c() {
			s && s.c(), (e = $());
		},
		l(t) {
			s && s.l(t), (e = $());
		},
		m(t, n) {
			s && s.m(t, n), m(t, e, n), (r = !0);
		},
		p(t, r) {
			t[0][1]
				? s
					? (s.p(t, r), 1 & r && P(s, 1))
					: ((s = C(t)), s.c(), P(s, 1), s.m(e.parentNode, e))
				: s &&
				  (L(),
				  k(s, 1, 1, () => {
						s = null;
				  }),
				  U());
		},
		i(t) {
			r || (P(s), (r = !0));
		},
		o(t) {
			k(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && f(e);
		}
	};
}
function K(t) {
	let e,
		r = t[5] && W(t);
	return {
		c() {
			(e = h('div')), r && r.c(), this.h();
		},
		l(t) {
			e = d(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var s = p(e);
			r && r.l(s), s.forEach(f), this.h();
		},
		h() {
			g(e, 'id', 'svelte-announcer'),
				g(e, 'aria-live', 'assertive'),
				g(e, 'aria-atomic', 'true'),
				g(e, 'class', 'svelte-1pdgbjn');
		},
		m(t, s) {
			m(t, e, s), r && r.m(e, null);
		},
		p(t, s) {
			t[5] ? (r ? r.p(t, s) : ((r = W(t)), r.c(), r.m(e, null))) : r && (r.d(1), (r = null));
		},
		d(t) {
			t && f(e), r && r.d();
		}
	};
}
function W(t) {
	let e;
	return {
		c() {
			e = y(t[6]);
		},
		l(r) {
			e = _(r, t[6]);
		},
		m(t, r) {
			m(t, e, r);
		},
		p(t, r) {
			64 & r && b(e, t[6]);
		},
		d(t) {
			t && f(e);
		}
	};
}
function G(t) {
	let e, r, s, n;
	const a = [t[1] || {}];
	var o = t[0][0];
	function i(t) {
		let e = { $$slots: { default: [B] }, $$scope: { ctx: t } };
		for (let r = 0; r < a.length; r += 1) e = T(e, a[r]);
		return { props: e };
	}
	o && (e = new o(i(t)));
	let l = t[4] && K(t);
	return {
		c() {
			e && v(e.$$.fragment), (r = w()), l && l.c(), (s = $());
		},
		l(t) {
			e && E(e.$$.fragment, t), (r = x(t)), l && l.l(t), (s = $());
		},
		m(t, a) {
			e && q(e, t, a), m(t, r, a), l && l.m(t, a), m(t, s, a), (n = !0);
		},
		p(t, [n]) {
			const c = 2 & n ? R(a, [S(t[1] || {})]) : {};
			if ((525 & n && (c.$$scope = { dirty: n, ctx: t }), o !== (o = t[0][0]))) {
				if (e) {
					L();
					const t = e;
					k(t.$$.fragment, 1, 0, () => {
						O(t, 1);
					}),
						U();
				}
				o
					? ((e = new o(i(t))), v(e.$$.fragment), P(e.$$.fragment, 1), q(e, r.parentNode, r))
					: (e = null);
			} else o && e.$set(c);
			t[4]
				? l
					? l.p(t, n)
					: ((l = K(t)), l.c(), l.m(s.parentNode, s))
				: l && (l.d(1), (l = null));
		},
		i(t) {
			n || (e && P(e.$$.fragment, t), (n = !0));
		},
		o(t) {
			e && k(e.$$.fragment, t), (n = !1);
		},
		d(t) {
			e && O(e, t), t && f(r), l && l.d(t), t && f(s);
		}
	};
}
function J(t, e, r) {
	let { stores: s } = e,
		{ page: n } = e,
		{ components: a } = e,
		{ props_0: o = null } = e,
		{ props_1: i = null } = e,
		{ props_2: l = null } = e;
	A('__svelte__', s), j(s.page.notify);
	let c = !1,
		u = !1,
		h = null;
	return (
		N(() => {
			const t = s.page.subscribe(() => {
				c && (r(5, (u = !0)), r(6, (h = document.title || 'untitled page')));
			});
			return r(4, (c = !0)), t;
		}),
		(t.$$set = (t) => {
			'stores' in t && r(7, (s = t.stores)),
				'page' in t && r(8, (n = t.page)),
				'components' in t && r(0, (a = t.components)),
				'props_0' in t && r(1, (o = t.props_0)),
				'props_1' in t && r(2, (i = t.props_1)),
				'props_2' in t && r(3, (l = t.props_2));
		}),
		(t.$$.update = () => {
			384 & t.$$.dirty && s.page.set(n);
		}),
		[a, o, i, l, c, u, h, s, n]
	);
}
class M extends l {
	constructor(t) {
		super(),
			c(this, t, J, G, u, {
				stores: 7,
				page: 8,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3
			});
	}
}
const z = {},
	X = function (t, e) {
		return e && 0 !== e.length
			? Promise.all(
					e.map((t) => {
						if ((t = `/_app/${t}`) in z) return;
						z[t] = !0;
						const e = t.endsWith('.css'),
							r = e ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${t}"]${r}`)) return;
						const s = document.createElement('link');
						return (
							(s.rel = e ? 'stylesheet' : 'modulepreload'),
							e || ((s.as = 'script'), (s.crossOrigin = '')),
							(s.href = t),
							document.head.appendChild(s),
							e
								? new Promise((t, e) => {
										s.addEventListener('load', t), s.addEventListener('error', e);
								  })
								: void 0
						);
					})
			  ).then(() => t())
			: t();
	},
	Y = [
		() =>
			X(
				() => import('./pages/__layout.svelte-f3c58152.js'),
				[
					'pages/__layout.svelte-f3c58152.js',
					'assets/pages/__layout.svelte-dd9d94d3.css',
					'chunks/vendor-c3306e91.js'
				]
			),
		() =>
			X(
				() => import('./error.svelte-7bf29900.js'),
				['error.svelte-7bf29900.js', 'chunks/vendor-c3306e91.js']
			),
		() =>
			X(
				() => import('./pages/index.svelte-ec2a9404.js'),
				[
					'pages/index.svelte-ec2a9404.js',
					'assets/pages/index.svelte-7abb02ec.css',
					'chunks/vendor-c3306e91.js'
				]
			)
	],
	F = [[/^\/$/, [Y[0], Y[2]], [Y[1]]]],
	H = [Y[0](), Y[1]()];
let Q = '';
function Z() {
	return { x: pageXOffset, y: pageYOffset };
}
function tt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
function et(t) {
	return t instanceof SVGAElement ? new URL(t.href.baseVal, document.baseURI) : new URL(t.href);
}
class rt {
	constructor({ base: t, routes: e, trailing_slash: r, renderer: s }) {
		(this.base = t),
			(this.routes = e),
			(this.trailing_slash = r),
			(this.renderer = s),
			(s.router = this),
			(this.enabled = !0),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	init_listeners() {
		let t;
		'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(t),
					(t = setTimeout(() => {
						const t =
							((s = i({}, history.state || {})), (n = { 'sveltekit:scroll': Z() }), e(s, r(n)));
						var s, n;
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = tt(t.target);
			e && e.href && e.hasAttribute('sveltekit:prefetch') && this.prefetch(et(e));
		};
		let n;
		addEventListener('touchstart', s),
			addEventListener('mousemove', (t) => {
				clearTimeout(n),
					(n = setTimeout(() => {
						s(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = tt(t.target);
				if (!e) return;
				if (!e.href) return;
				const r = et(e);
				if (r.toString() === location.href) return void (location.hash || t.preventDefault());
				const s = (e.getAttribute('rel') || '').split(/\s+/);
				if (e.hasAttribute('download') || (s && s.includes('external'))) return;
				if (e instanceof SVGAElement ? e.target.baseVal : e.target) return;
				if (!this.owns(r)) return;
				const n = e.hasAttribute('sveltekit:noscroll');
				history.pushState({}, '', r.href),
					this._navigate(r, n ? Z() : null, !1, [], r.hash),
					t.preventDefault();
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href);
					this._navigate(e, t.state['sveltekit:scroll'], !1, []);
				}
			});
	}
	owns(t) {
		return t.origin === location.origin && t.pathname.startsWith(this.base);
	}
	parse(t) {
		if (this.owns(t)) {
			const e = t.pathname.slice(this.base.length) || '/',
				r = this.routes.filter(([t]) => t.test(e)),
				s = new URLSearchParams(t.search);
			return { id: `${e}?${s}`, routes: r, path: e, query: s };
		}
	}
	async goto(
		t,
		{ noscroll: e = !1, replaceState: r = !1, keepfocus: s = !1, state: n = {} } = {},
		a
	) {
		const o = new URL(
			t,
			(function (t) {
				let e = t.baseURI;
				if (!e) {
					const r = t.getElementsByTagName('base');
					e = r.length ? r[0].href : t.URL;
				}
				return e;
			})(document)
		);
		return this.enabled && this.owns(o)
			? (history[r ? 'replaceState' : 'pushState'](n, '', t),
			  this._navigate(o, e ? Z() : null, s, a, o.hash))
			: ((location.href = o.href), new Promise(() => {}));
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(t) {
		const e = this.parse(t);
		if (!e) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return this.renderer.load(e);
	}
	async _navigate(t, e, r, s, n) {
		const a = this.parse(t);
		if (!a) throw new Error('Attempted to navigate to a URL that does not belong to this app');
		if ('/' !== a.path) {
			const t = a.path.endsWith('/');
			((t && 'never' === this.trailing_slash) ||
				(!t &&
					'always' === this.trailing_slash &&
					!(a.path.split('/').pop() || '').includes('.'))) &&
				((a.path = t ? a.path.slice(0, -1) : a.path + '/'),
				history.replaceState({}, '', `${this.base}${a.path}${location.search}`));
		}
		this.renderer.notify({ path: a.path, query: a.query }),
			await this.renderer.update(a, s, !1),
			r || document.body.focus();
		const o = n && document.getElementById(n.slice(1));
		e ? scrollTo(e.x, e.y) : o ? o.scrollIntoView() : scrollTo(0, 0);
	}
}
function st(t) {
	const e = I(t);
	let r = !0;
	return {
		notify: function () {
			(r = !0), e.update((t) => t);
		},
		set: function (t) {
			(r = !1), e.set(t);
		},
		subscribe: function (t) {
			let s;
			return e.subscribe((e) => {
				(void 0 === s || (r && e !== s)) && t((s = e));
			});
		}
	};
}
function nt(t, e) {
	let r = `script[data-type="svelte-data"][data-url="${'string' == typeof t ? t : t.url}"]`;
	e &&
		'string' == typeof e.body &&
		(r += `[data-body="${(function (t) {
			let e = 5381,
				r = t.length;
			if ('string' == typeof t) for (; r; ) e = (33 * e) ^ t.charCodeAt(--r);
			else for (; r; ) e = (33 * e) ^ t[--r];
			return (e >>> 0).toString(36);
		})(e.body)}"]`);
	const o = document.querySelector(r);
	if (o && o.textContent) {
		const t = JSON.parse(o.textContent),
			{ body: e } = t,
			r = ((t, e) => {
				var r = {};
				for (var o in t) n.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
				if (null != t && s) for (var o of s(t)) e.indexOf(o) < 0 && a.call(t, o) && (r[o] = t[o]);
				return r;
			})(t, ['body']);
		return Promise.resolve(new Response(e, r));
	}
	return fetch(t, e);
}
class at {
	constructor({ Root: t, fallback: e, target: r, session: s, host: n }) {
		(this.Root = t),
			(this.fallback = e),
			(this.host = n),
			this.router,
			(this.target = r),
			(this.started = !1),
			(this.session_id = 1),
			(this.invalid = new Set()),
			(this.invalidating = null),
			(this.current = { page: null, session_id: 0, branch: [] }),
			(this.cache = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: st({}), navigating: I(null), session: I(s) }),
			(this.$session = null),
			(this.root = null);
		let a = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !a || !this.router)) return;
			this.session_id += 1;
			const e = this.router.parse(new URL(location.href));
			e && this.update(e, [], !0);
		}),
			(a = !0);
	}
	async start({ status: t, error: e, nodes: r, page: s }) {
		const n = [];
		let a,
			o,
			l = {};
		try {
			for (let a = 0; a < r.length; a += 1) {
				const c = a === r.length - 1,
					u = await this._load_node({
						module: await r[a],
						page: s,
						context: l,
						status: c ? t : void 0,
						error: c ? e : void 0
					});
				if ((n.push(u), u && u.loaded))
					if (u.loaded.error) {
						if (e) throw u.loaded.error;
						o = { status: u.loaded.status, error: u.loaded.error, path: s.path, query: s.query };
					} else u.loaded.context && (l = i(i({}, l), u.loaded.context));
			}
			a = o
				? await this._load_error(o)
				: await this._get_navigation_result_from_branch({ page: s, branch: n });
		} catch (u) {
			if (e) throw u;
			a = await this._load_error({
				status: 500,
				error: ((c = u), c instanceof Error ? c : new Error(JSON.stringify(c))),
				path: s.path,
				query: s.query
			});
		}
		var c;
		a.redirect ? (location.href = new URL(a.redirect, location.href).href) : this._init(a);
	}
	notify({ path: t, query: e }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: t, query: e }
				});
	}
	async update(t, e, r) {
		const s = (this.token = {});
		let n = await this._get_navigation_result(t, r);
		if (s !== this.token) return;
		if ((this.invalid.clear(), n.redirect)) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(n.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(n.redirect, location.href).href));
			n = await this._load_error({
				status: 500,
				error: new Error('Redirect loop'),
				path: t.path,
				query: t.query
			});
		}
		if (
			(n.reload
				? location.reload()
				: this.started
				? ((this.current = n.state),
				  this.root.$set(n.props),
				  this.stores.navigating.set(null),
				  await 0)
				: this._init(n),
			dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null),
			!this.router)
		)
			return;
		const a = n.state.branch[n.state.branch.length - 1];
		a && !1 === a.module.router ? this.router.disable() : this.router.enable();
	}
	load(t) {
		return (
			(this.loading.promise = this._get_navigation_result(t, !1)),
			(this.loading.id = t.id),
			this.loading.promise
		);
	}
	invalidate(t) {
		return (
			this.invalid.add(t),
			this.invalidating ||
				(this.invalidating = Promise.resolve().then(async () => {
					const t = this.router && this.router.parse(new URL(location.href));
					t && (await this.update(t, [], !0)), (this.invalidating = null);
				})),
			this.invalidating
		);
	}
	_init(t) {
		this.current = t.state;
		const e = document.querySelector('style[data-svelte]');
		e && e.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: i({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _get_navigation_result(t, e) {
		if (this.loading.id === t.id && this.loading.promise) return this.loading.promise;
		for (let r = 0; r < t.routes.length; r += 1) {
			const s = t.routes[r];
			if (1 === s.length) return { reload: !0, props: {}, state: this.current };
			let n = r + 1;
			for (; n < t.routes.length; ) {
				const e = t.routes[n];
				if (e[0].toString() !== s[0].toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (n += 1);
			}
			const a = await this._load({ route: s, info: t }, e);
			if (a) return a;
		}
		return await this._load_error({
			status: 404,
			error: new Error(`Not found: ${t.path}`),
			path: t.path,
			query: t.query
		});
	}
	async _get_navigation_result_from_branch({ page: t, branch: e }) {
		const r = e.filter(Boolean),
			s = {
				state: { page: t, branch: e, session_id: this.session_id },
				props: { components: r.map((t) => t.module.default) }
			};
		for (let o = 0; o < r.length; o += 1) {
			const t = r[o].loaded;
			s.props[`props_${o}`] = t ? await t.props : null;
		}
		(this.current.page &&
			t.path === this.current.page.path &&
			t.query.toString() === this.current.page.query.toString()) ||
			(s.props.page = t);
		const n = r[r.length - 1],
			a = n.loaded && n.loaded.maxage;
		if (a) {
			const e = `${t.path}?${t.query}`;
			let r = !1;
			const n = () => {
					this.cache.get(e) === s && this.cache.delete(e), i(), clearTimeout(o);
				},
				o = setTimeout(n, 1e3 * a),
				i = this.stores.session.subscribe(() => {
					r && n();
				});
			(r = !0), this.cache.set(e, s);
		}
		return s;
	}
	async _load_node({ status: t, error: e, module: r, page: s, context: n }) {
		const a = {
				module: r,
				uses: {
					params: new Set(),
					path: !1,
					query: !1,
					session: !1,
					context: !1,
					dependencies: []
				},
				loaded: null,
				context: n
			},
			o = {};
		for (const i in s.params)
			Object.defineProperty(o, i, {
				get: () => (a.uses.params.add(i), s.params[i]),
				enumerable: !0
			});
		const l = this.$session;
		if (r.load) {
			const { started: c } = this,
				u = {
					page: {
						host: s.host,
						params: o,
						get path() {
							return (a.uses.path = !0), s.path;
						},
						get query() {
							return (a.uses.query = !0), s.query;
						}
					},
					get session() {
						return (a.uses.session = !0), l;
					},
					get context() {
						return (a.uses.context = !0), i({}, n);
					},
					fetch(t, e) {
						const r = 'string' == typeof t ? t : t.url,
							{ href: n } = new URL(r, new URL(s.path, document.baseURI));
						return a.uses.dependencies.push(n), c ? fetch(t, e) : nt(t, e);
					}
				};
			e && ((u.status = t), (u.error = e));
			const h = await r.load.call(null, u);
			if (!h) return;
			(a.loaded = (function (t) {
				const e = t.status && t.status >= 400 && t.status <= 599 && !t.redirect;
				if (t.error || e) {
					const r = t.status;
					if (!t.error && e) return { status: r || 500, error: new Error() };
					const s = 'string' == typeof t.error ? new Error(t.error) : t.error;
					return s instanceof Error
						? !r || r < 400 || r > 599
							? (console.warn(
									'"error" returned from load() without a valid status code — defaulting to 500'
							  ),
							  { status: 500, error: s })
							: { status: r, error: s }
						: {
								status: 500,
								error: new Error(
									`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`
								)
						  };
				}
				if (t.redirect) {
					if (!t.status || 3 !== Math.floor(t.status / 100))
						return {
							status: 500,
							error: new Error(
								'"redirect" property returned from load() must be accompanied by a 3xx status code'
							)
						};
					if ('string' != typeof t.redirect)
						return {
							status: 500,
							error: new Error('"redirect" property returned from load() must be a string')
						};
				}
				return t;
			})(h)),
				a.loaded.context && (a.context = a.loaded.context);
		}
		return a;
	}
	async _load({ route: t, info: { path: e, query: r } }, s) {
		const n = `${e}?${r}`;
		if (!s) {
			const t = this.cache.get(n);
			if (t) return t;
		}
		const [a, o, l, c] = t,
			u = c ? c(a.exec(e)) : {},
			h = this.current.page && {
				path: e !== this.current.page.path,
				params: Object.keys(u).filter((t) => this.current.page.params[t] !== u[t]),
				query: r.toString() !== this.current.page.query.toString(),
				session: this.session_id !== this.current.session_id
			},
			d = { host: this.host, path: e, query: r, params: u };
		let p,
			f = [],
			g = {},
			m = !1,
			y = 200;
		o.forEach((t) => t());
		t: for (let b = 0; b < o.length; b += 1) {
			let t;
			try {
				if (!o[b]) continue;
				const e = await o[b](),
					r = this.current.branch[b];
				if (
					!r ||
					e !== r.module ||
					(h.path && r.uses.path) ||
					h.params.some((t) => r.uses.params.has(t)) ||
					(h.query && r.uses.query) ||
					(h.session && r.uses.session) ||
					r.uses.dependencies.some((t) => this.invalid.has(t)) ||
					(m && r.uses.context)
				) {
					t = await this._load_node({ module: e, page: d, context: g });
					const r = b === o.length - 1;
					if (t && t.loaded) {
						if (
							(t.loaded.error && ((y = t.loaded.status), (p = t.loaded.error)), t.loaded.redirect)
						)
							return { redirect: t.loaded.redirect, props: {}, state: this.current };
						t.loaded.context && (m = !0);
					} else if (r && e.load) return;
				} else t = r;
			} catch (_) {
				(y = 500), (p = _);
			}
			if (p) {
				for (; b--; )
					if (l[b]) {
						let t,
							e,
							r = b;
						for (; !(e = f[r]); ) r -= 1;
						try {
							if (
								((t = await this._load_node({
									status: y,
									error: p,
									module: await l[b](),
									page: d,
									context: e.context
								})),
								t && t.loaded && t.loaded.error)
							)
								continue;
							f = f.slice(0, r + 1).concat(t);
							break t;
						} catch (_) {
							continue;
						}
					}
				return await this._load_error({ status: y, error: p, path: e, query: r });
			}
			t && t.loaded && t.loaded.context && (g = i(i({}, g), t.loaded.context)), f.push(t);
		}
		return await this._get_navigation_result_from_branch({ page: d, branch: f });
	}
	async _load_error({ status: t, error: e, path: r, query: s }) {
		const n = { host: this.host, path: r, query: s, params: {} },
			a = await this._load_node({ module: await this.fallback[0], page: n, context: {} }),
			o = [
				a,
				await this._load_node({
					status: t,
					error: e,
					module: await this.fallback[1],
					page: n,
					context: (a && a.loaded && a.loaded.context) || {}
				})
			];
		return await this._get_navigation_result_from_branch({ page: n, branch: o });
	}
}
async function ot({
	paths: t,
	target: e,
	session: r,
	host: s,
	route: n,
	spa: a,
	trailing_slash: o,
	hydrate: i
}) {
	const l = new at({ Root: M, fallback: H, target: e, session: r, host: s }),
		c = n ? new rt({ base: t.base, routes: F, trailing_slash: o, renderer: l }) : null;
	!(function (t) {
		(Q = t.base), t.assets;
	})(t),
		i && (await l.start(i)),
		c && (a && c.goto(location.href, { replaceState: !0 }, []), c.init_listeners()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { ot as start };
