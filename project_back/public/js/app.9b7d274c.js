;(function (e) {
  function n(n) {
    for (
      var r, a, u = n[0], s = n[1], i = n[2], d = 0, f = [];
      d < u.length;
      d++
    )
      (a = u[d]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        (o[a] = 0)
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
    l && l(n)
    while (f.length) f.shift()()
    return c.push.apply(c, i || []), t()
  }
  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], r = !0, a = 1; a < t.length; a++) {
        var u = t[a]
        0 !== o[u] && (r = !1)
      }
      r && (c.splice(n--, 1), (e = s((s.s = t[0]))))
    }
    return e
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    c = []
  function u(e) {
    return (
      s.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      {
        'chunk-2d0c42b6': 'ccda6833',
        'chunk-2d0d36c2': '48401f77',
        'chunk-2d0e26d8': '3723dba3',
        'chunk-2d221a33': '83282a30',
        'chunk-2d22cab4': '2d8a5e1c',
        'chunk-3b12f262': '6c4526d4',
        'chunk-4c697399': '7fbcbdc6',
        'chunk-f8a65acc': 'ffb67681',
        'chunk-3e4b6e98': '90b171f5',
        'chunk-5fccca21': '6e77ff4b',
        'chunk-62f5cf8c': '3817cb50',
        'chunk-c583b688': 'f1032c7c',
        'chunk-c687e3a8': '571ef666',
        'chunk-e591ccee': '723f1ec9'
      }[e] +
      '.js'
    )
  }
  function s(n) {
    if (r[n]) return r[n].exports
    var t = (r[n] = { i: n, l: !1, exports: {} })
    return e[n].call(t.exports, t, t.exports, s), (t.l = !0), t.exports
  }
  ;(s.e = function (e) {
    var n = [],
      t = {
        'chunk-3b12f262': 1,
        'chunk-f8a65acc': 1,
        'chunk-3e4b6e98': 1,
        'chunk-5fccca21': 1,
        'chunk-62f5cf8c': 1,
        'chunk-c583b688': 1,
        'chunk-c687e3a8': 1,
        'chunk-e591ccee': 1
      }
    a[e]
      ? n.push(a[e])
      : 0 !== a[e] &&
        t[e] &&
        n.push(
          (a[e] = new Promise(function (n, t) {
            for (
              var r =
                  'css/' +
                  ({}[e] || e) +
                  '.' +
                  {
                    'chunk-2d0c42b6': '31d6cfe0',
                    'chunk-2d0d36c2': '31d6cfe0',
                    'chunk-2d0e26d8': '31d6cfe0',
                    'chunk-2d221a33': '31d6cfe0',
                    'chunk-2d22cab4': '31d6cfe0',
                    'chunk-3b12f262': '0817d366',
                    'chunk-4c697399': '31d6cfe0',
                    'chunk-f8a65acc': '8db43a40',
                    'chunk-3e4b6e98': 'aff1008f',
                    'chunk-5fccca21': '04e3ca14',
                    'chunk-62f5cf8c': 'd2a323c7',
                    'chunk-c583b688': 'd2a323c7',
                    'chunk-c687e3a8': '58c40f4f',
                    'chunk-e591ccee': 'ad0c3d53'
                  }[e] +
                  '.css',
                o = s.p + r,
                c = document.getElementsByTagName('link'),
                u = 0;
              u < c.length;
              u++
            ) {
              var i = c[u],
                d = i.getAttribute('data-href') || i.getAttribute('href')
              if ('stylesheet' === i.rel && (d === r || d === o)) return n()
            }
            var f = document.getElementsByTagName('style')
            for (u = 0; u < f.length; u++) {
              ;(i = f[u]), (d = i.getAttribute('data-href'))
              if (d === r || d === o) return n()
            }
            var l = document.createElement('link')
            ;(l.rel = 'stylesheet'),
              (l.type = 'text/css'),
              (l.onload = n),
              (l.onerror = function (n) {
                var r = (n && n.target && n.target.src) || o,
                  c = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + r + ')'
                  )
                ;(c.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (c.request = r),
                  delete a[e],
                  l.parentNode.removeChild(l),
                  t(c)
              }),
              (l.href = o)
            var h = document.getElementsByTagName('head')[0]
            h.appendChild(l)
          }).then(function () {
            a[e] = 0
          }))
        )
    var r = o[e]
    if (0 !== r)
      if (r) n.push(r[2])
      else {
        var c = new Promise(function (n, t) {
          r = o[e] = [n, t]
        })
        n.push((r[2] = c))
        var i,
          d = document.createElement('script')
        ;(d.charset = 'utf-8'),
          (d.timeout = 120),
          s.nc && d.setAttribute('nonce', s.nc),
          (d.src = u(e))
        var f = new Error()
        i = function (n) {
          ;(d.onerror = d.onload = null), clearTimeout(l)
          var t = o[e]
          if (0 !== t) {
            if (t) {
              var r = n && ('load' === n.type ? 'missing' : n.type),
                a = n && n.target && n.target.src
              ;(f.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + a + ')'),
                (f.name = 'ChunkLoadError'),
                (f.type = r),
                (f.request = a),
                t[1](f)
            }
            o[e] = void 0
          }
        }
        var l = setTimeout(function () {
          i({ type: 'timeout', target: d })
        }, 12e4)
        ;(d.onerror = d.onload = i), document.head.appendChild(d)
      }
    return Promise.all(n)
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, n, t) {
      s.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
    }),
    (s.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (s.t = function (e, n) {
      if ((1 & n && (e = s(e)), 8 & n)) return e
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e
      var t = Object.create(null)
      if (
        (s.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            t,
            r,
            function (n) {
              return e[n]
            }.bind(null, r)
          )
      return t
    }),
    (s.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return s.d(n, 'a', n), n
    }),
    (s.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (s.p = ''),
    (s.oe = function (e) {
      throw (console.error(e), e)
    })
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    d = i.push.bind(i)
  ;(i.push = n), (i = i.slice())
  for (var f = 0; f < i.length; f++) n(i[f])
  var l = d
  c.push([0, 'chunk-vendors']), t()
})({
  0: function (e, n, t) {
    e.exports = t('cd49')
  },
  '012e': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-2d0d36c2').then(t.bind(null, '5d63'))
    }
    n['default'] = {
      path: '/main/story/chat',
      name: 'chat',
      component: r,
      children: []
    }
  },
  '0613': function (e, n, t) {
    'use strict'
    t.d(n, 'b', function () {
      return z
    }),
      t.d(n, 'c', function () {
        return B
      })
    var r = t('1da1'),
      a = (t('96cf'), t('5502')),
      o = (t('159b'), t('d80c')),
      c = t('afbc'),
      u = t('5530'),
      s = (t('5415'), t('d559')),
      i = t.n(s),
      d = t('d4ec'),
      f = t('bee2'),
      l = (t('d3b7'), t('bc3a')),
      h = t.n(l),
      p = !0,
      g = (function () {
        function e(n) {
          var t,
            r,
            a,
            o,
            c,
            u = this
          Object(d['a'])(this, e),
            (this.instance = h.a.create(n)),
            (this.showLoading =
              null !== (t = n.showLoading) && void 0 !== t ? t : p),
            (this.interceptors = n.interceptors),
            this.instance.interceptors.request.use(
              null === (r = this.interceptors) || void 0 === r
                ? void 0
                : r.requestInterceptor,
              null === (a = this.interceptors) || void 0 === a
                ? void 0
                : a.requrestInterceptorCatch
            ),
            this.instance.interceptors.response.use(
              null === (o = this.interceptors) || void 0 === o
                ? void 0
                : o.responseInterceptor,
              null === (c = this.interceptors) || void 0 === c
                ? void 0
                : c.responseInterceptorCatch
            ),
            this.instance.interceptors.request.use(
              function (e) {
                return (
                  console.log('所有实例的拦截器：请求成功的拦截'),
                  u.showLoading &&
                    (u.loading = i.a.service({
                      lock: !0,
                      text: '正在加载~~~',
                      background: 'rgba(0, 0, 0, 0.5)'
                    })),
                  e
                )
              },
              function (e) {
                return console.log('所有实例的拦截器：请求失败的拦截'), e
              }
            ),
            this.instance.interceptors.response.use(
              function (e) {
                console.log('所有实例的拦截器：响应成功的拦截'),
                  setTimeout(function () {
                    var e
                    null === (e = u.loading) || void 0 === e || e.close()
                  }, 100)
                var n = e.data
                if ((console.log(n), '-1001' !== n.returnCode)) return n
                console.log('请求失败~错误信息')
              },
              function (e) {
                var n
                return (
                  console.log('所有实例的拦截器：相应失败的拦截'),
                  null === (n = u.loading) || void 0 === n || n.close(),
                  404 === e.response.status && console.log('404的错误'),
                  e
                )
              }
            )
        }
        return (
          Object(f['a'])(e, [
            {
              key: 'request',
              value: function (e) {
                var n = this
                return new Promise(function (t, r) {
                  var a
                  null !== (a = e.interceptors) &&
                    void 0 !== a &&
                    a.requestInterceptor &&
                    (e = e.interceptors.requestInterceptor(e)),
                    !1 === e.showLoading && (n.showLoading = e.showLoading),
                    n.instance
                      .request(e)
                      .then(function (r) {
                        var a
                        null !== (a = e.interceptors) &&
                          void 0 !== a &&
                          a.responseInterceptor &&
                          (r = e.interceptors.responseInterceptor(r)),
                          (n.showLoading = p),
                          t(r)
                      })
                      .catch(function (e) {
                        return (n.showLoading = p), r(e), e
                      })
                })
              }
            },
            {
              key: 'get',
              value: function (e) {
                return this.request(
                  Object(u['a'])(Object(u['a'])({}, e), {}, { method: 'GET' })
                )
              }
            },
            {
              key: 'post',
              value: function (e) {
                return this.request(
                  Object(u['a'])(Object(u['a'])({}, e), {}, { method: 'POST' })
                )
              }
            },
            {
              key: 'delete',
              value: function (e) {
                return this.request(
                  Object(u['a'])(
                    Object(u['a'])({}, e),
                    {},
                    { method: 'DELETE' }
                  )
                )
              }
            },
            {
              key: 'patch',
              value: function (e) {
                return this.request(
                  Object(u['a'])(Object(u['a'])({}, e), {}, { method: 'PATCH' })
                )
              }
            }
          ]),
          e
        )
      })(),
      m = g,
      b = '',
      v = 1e3
    ;(b = 'http://127.0.0.1:2023/api'), console.log(b)
    var y,
      k = new m({
        baseURL: b,
        timeout: v,
        interceptors: {
          requestInterceptor: function (e) {
            var n = o['a'].getCache('token')
            return (
              n && (e.headers.Authorization = 'Bearer '.concat(n)),
              console.log('请求成功的拦截'),
              e
            )
          },
          requrestInterceptorCatch: function (e) {
            return console.log('请求失败的拦截'), e
          },
          responseInterceptor: function (e) {
            return console.log('响应成功的拦截'), e
          },
          responseInterceptorCatch: function (e) {
            return console.log('响应失败的拦截'), e
          }
        }
      }),
      w = k
    function O(e) {
      return w.post({ url: y.AccountLogin, data: e })
    }
    function C(e) {
      return w.get({ url: y.LoginUserInfo + e, showLoading: !1 })
    }
    function j(e) {
      return w.get({ url: y.UserMenus + e + '/menu', showLoading: !1 })
    }
    ;(function (e) {
      ;(e['AccountLogin'] = '/login'),
        (e['LoginUserInfo'] = '/users/'),
        (e['UserMenus'] = '/role/')
    })(y || (y = {}))
    var L = t('09e6'),
      x = {
        namespaced: !0,
        state: function () {
          return { token: '', userInfo: [], userMenus: [], permissions: [] }
        },
        mutations: {
          changeToken: function (e, n) {
            e.token = n
          },
          changeUserInfo: function (e, n) {
            e.userInfo = n
          },
          changeUserMenus: function (e, n) {
            e.userMenus = n
            var t = Object(L['c'])(n)
            t.forEach(function (e) {
              c['a'].addRoute('main', e)
            })
            var r = Object(L['b'])(n)
            e.permissions = r
          }
        },
        actions: {
          accountLoginAction: function (e, n) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var r, a, u, s, i, d, f, l, h, p
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.commit), (a = e.dispatch), (t.next = 3), O(n)
                        )
                      case 3:
                        return (
                          (u = t.sent),
                          (s = u.data),
                          (i = s.id),
                          (d = s.token),
                          r('changeToken', d),
                          o['a'].setCache('token', d),
                          a('getInitialDataAction', null, { root: !0 }),
                          (t.next = 10),
                          C(i)
                        )
                      case 10:
                        return (
                          (f = t.sent),
                          (l = f.data),
                          r('changeUserInfo', l),
                          o['a'].setCache('userInfo', l),
                          (t.next = 16),
                          j(i)
                        )
                      case 16:
                        ;(h = t.sent),
                          (p = h.data),
                          r('changeUserMenus', p),
                          o['a'].setCache('userMenus', p),
                          c['a'].push('/main')
                      case 21:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )()
          },
          phoneLoginAction: function (e, n) {
            e.commit
            console.log('执行phoneLoginAction', n)
          },
          loadLocalLogin: function (e) {
            var n = e.commit,
              t = e.dispatch,
              r = o['a'].getCache('token')
            r &&
              (n('changeToken', r),
              t('getInitialDataAction', null, { root: !0 }))
            var a = o['a'].getCache('userInfo')
            a && n('changeUserInfo', a)
            var c = o['a'].getCache('userMenus')
            c && n('changeUserMenus', c)
          }
        },
        getters: {}
      },
      I = x
    t('fb6a'), t('99af')
    function A(e, n) {
      return w.post({ url: e, data: n })
    }
    function S(e) {
      return w.delete({ url: e })
    }
    function E(e, n) {
      return w.post({ url: e, data: n })
    }
    function G(e, n) {
      return w.patch({ url: e, data: n })
    }
    var D,
      M = {
        namespaced: !0,
        state: function () {
          return {
            usersList: [],
            usersCount: 0,
            roleList: [],
            roleCount: 0,
            goodsList: [],
            goodsCount: 0,
            menuList: [],
            menuCount: 0
          }
        },
        mutations: {
          changeUsersList: function (e, n) {
            e.usersList = n
          },
          changeUsersCount: function (e, n) {
            e.usersCount = n
          },
          changeRoleList: function (e, n) {
            e.roleList = n
          },
          changeRoleCount: function (e, n) {
            e.roleCount = n
          },
          changeGoodsList: function (e, n) {
            e.goodsList = n
          },
          changeGoodsCount: function (e, n) {
            e.goodsCount = n
          },
          changeMenuList: function (e, n) {
            e.menuList = n
          },
          changeMenuCount: function (e, n) {
            e.menuCount = n
          }
        },
        getters: {
          pageListData: function (e) {
            return function (n) {
              return e[''.concat(n, 'List')]
            }
          },
          pageListCount: function (e) {
            return function (n) {
              return e[''.concat(n, 'Count')]
            }
          }
        },
        actions: {
          getPageListAction: function (e, n) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var r, a, o, c, u, s, i, d
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.commit),
                          console.log('payload', n),
                          (a = n.pageName),
                          console.log('pageName：', a),
                          (o = '/'.concat(a, '/list')),
                          (t.next = 7),
                          A(o, n.queryInfo)
                        )
                      case 7:
                        ;(c = t.sent),
                          console.log('页面数据:', c),
                          (u = c.data),
                          (s = u.list),
                          (i = u.totalCount),
                          console.log('totalCount', i),
                          (d = a.slice(0, 1).toUpperCase() + a.slice(1)),
                          console.log(d),
                          r('change'.concat(d, 'List'), s),
                          r('change'.concat(d, 'Count'), i)
                      case 15:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )()
          },
          deletePageDataAction: function (e, n) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var r, a, o, c, u
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.dispatch),
                          (a = n.pageName),
                          (o = n.id),
                          (c = '/'.concat(a, '/').concat(o)),
                          (t.next = 5),
                          S(c)
                        )
                      case 5:
                        ;(u = t.sent),
                          u.data,
                          r('getPageListAction', {
                            pageName: a,
                            queryInfo: { offset: 0, size: 10 }
                          })
                      case 8:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )()
          },
          createPageDataAction: function (e, n) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var r, a, o, c
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.dispatch),
                          (a = n.pageName),
                          (o = n.newData),
                          (c = ''.concat(a)),
                          (t.next = 5),
                          E(c, o)
                        )
                      case 5:
                        r('getPageListAction', {
                          pageName: a,
                          queryInfo: { offset: 0, size: 10 }
                        })
                      case 6:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )()
          },
          editPageDataAction: function (e, n) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var r, a, o, c, u
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = e.dispatch),
                          (a = n.pageName),
                          (o = n.editData),
                          (c = n.id),
                          (u = '/'.concat(a, '/').concat(c)),
                          (t.next = 5),
                          G(u, o)
                        )
                      case 5:
                        return (t.next = 7), E(u, o)
                      case 7:
                        r('getPageListAction', {
                          pageName: a,
                          queryInfo: { offset: 0, size: 10 }
                        })
                      case 8:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )()
          }
        }
      },
      P = M
    function R() {
      return w.get({ url: D.categoryGoodsCount })
    }
    function N() {
      return w.get({ url: D.categoryGoodsSale })
    }
    function q() {
      return w.get({ url: D.categoryGoodsFavor })
    }
    function U() {
      return w.get({ url: D.addressGoodsSale })
    }
    ;(function (e) {
      ;(e['categoryGoodsCount'] = '/goods/category/count'),
        (e['categoryGoodsSale'] = '/goods/category/sale'),
        (e['categoryGoodsFavor'] = '/goods/category/favor'),
        (e['addressGoodsSale'] = '/goods/address/sale')
    })(D || (D = {}))
    var T = {
        namespaced: !0,
        state: function () {
          return {
            categoryGoodsCount: [],
            categoryGoodsSale: [],
            categoryGoodsFavor: [],
            addressGoodsSale: []
          }
        },
        mutations: {
          changeCategoryGoodsCount: function (e, n) {
            e.categoryGoodsCount = n
          },
          changeCategoryGoodsSale: function (e, n) {
            e.categoryGoodsSale = n
          },
          changeCategoryGoodsFavor: function (e, n) {
            e.categoryGoodsFavor = n
          },
          changeAddressGoodsSale: function (e, n) {
            e.addressGoodsSale = n
          }
        },
        actions: {
          getDashboardDataAction: function (e) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function n() {
                var t, r, a, o, c
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (t = e.commit), (n.next = 3), R()
                      case 3:
                        return (
                          (r = n.sent),
                          t('changeCategoryGoodsCount', r.data),
                          (n.next = 7),
                          N()
                        )
                      case 7:
                        return (
                          (a = n.sent),
                          t('changeCategoryGoodsSale', a.data),
                          (n.next = 11),
                          q()
                        )
                      case 11:
                        return (
                          (o = n.sent),
                          t('changeCategoryGoodsFavor', o.data),
                          (n.next = 15),
                          U()
                        )
                      case 15:
                        ;(c = n.sent), t('changeAddressGoodsSale', c.data)
                      case 17:
                      case 'end':
                        return n.stop()
                    }
                }, n)
              })
            )()
          }
        }
      },
      _ = T,
      F = Object(a['a'])({
        state: function () {
          return {
            name: 'turnip',
            age: 19,
            entireDepartment: [],
            entireRole: [],
            entireMenu: []
          }
        },
        mutations: {
          changeEntireDepartment: function (e, n) {
            e.entireDepartment = n
          },
          changeEntireRole: function (e, n) {
            e.entireRole = n
          },
          changeEntireMenu: function (e, n) {
            e.entireMenu = n
          }
        },
        actions: {
          getInitialDataAction: function (e) {
            return Object(r['a'])(
              regeneratorRuntime.mark(function n() {
                var t, r, a, o, c, u, s
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = e.commit),
                          (n.next = 3),
                          A('/department/list', { offset: 0, size: 1e3 })
                        )
                      case 3:
                        return (
                          (r = n.sent),
                          (a = r.data.list),
                          (n.next = 7),
                          A('/role/list', { offset: 0, size: 1e3 })
                        )
                      case 7:
                        return (
                          (o = n.sent),
                          (c = o.data.list),
                          (n.next = 11),
                          A('/menu/list', {})
                        )
                      case 11:
                        ;(u = n.sent),
                          (s = u.data.list),
                          t('changeEntireDepartment', a),
                          t('changeEntireRole', c),
                          t('changeEntireMenu', s)
                      case 16:
                      case 'end':
                        return n.stop()
                    }
                }, n)
              })
            )()
          }
        },
        getters: {},
        modules: { login: I, system: P, dashboard: _ }
      })
    function z() {
      F.dispatch('login/loadLocalLogin')
    }
    function B() {
      return Object(a['b'])()
    }
    n['a'] = F
  },
  '09e6': function (e, n, t) {
    'use strict'
    t.d(n, 'c', function () {
      return o
    }),
      t.d(n, 'e', function () {
        return c
      }),
      t.d(n, 'f', function () {
        return u
      }),
      t.d(n, 'b', function () {
        return s
      }),
      t.d(n, 'd', function () {
        return i
      }),
      t.d(n, 'a', function () {
        return a
      })
    var r = t('b85c'),
      a =
        (t('159b'),
        t('d3b7'),
        t('ddb0'),
        t('ac1f'),
        t('1276'),
        t('7db0'),
        t('b0c0'),
        null)
    function o(e) {
      var n = [],
        o = [],
        c = t('d1d0')
      c.keys().forEach(function (e) {
        var n = t('b4c1')('./main' + e.split('.')[1])
        o.push(n.default)
      })
      var u = function e(t) {
        var c,
          u = Object(r['a'])(t)
        try {
          var s = function () {
            var t = c.value
            if (2 === t.type) {
              var r = o.find(function (e) {
                return e.path === t.url
              })
              r && n.push(r), a || (a = t)
            } else e(t.children)
          }
          for (u.s(); !(c = u.n()).done; ) s()
        } catch (i) {
          u.e(i)
        } finally {
          u.f()
        }
      }
      return u(e), n
    }
    function c(e, n) {
      var t = []
      return u(e, n, t), t
    }
    function u(e, n, t) {
      var a,
        o = Object(r['a'])(e)
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var c = a.value
          if (1 === c.type) {
            var s,
              i = u(null !== (s = c.children) && void 0 !== s ? s : [], n)
            if (i)
              return (
                null === t || void 0 === t || t.push({ name: c.name }),
                null === t || void 0 === t || t.push({ name: i.name }),
                i
              )
          } else if (2 === c.type && c.url === n) return c
        }
      } catch (d) {
        o.e(d)
      } finally {
        o.f()
      }
    }
    function s(e) {
      var n = [],
        t = function e(t) {
          var a,
            o = Object(r['a'])(t)
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var c,
                u = a.value
              if (1 === u.type || 2 === u.type)
                e(null !== (c = u.children) && void 0 !== c ? c : [])
              else 3 === u.type && n.push(u.permission)
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
        }
      return t(e), n
    }
    function i(e) {
      var n = [],
        t = function e(t) {
          var a,
            o = Object(r['a'])(t)
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var c = a.value
              c.children ? e(c.children) : n.push(c.id)
            }
          } catch (u) {
            o.e(u)
          } finally {
            o.f()
          }
        }
      return t(e), n
    }
  },
  '1d4b': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-c687e3a8').then(t.bind(null, 'b07e'))
    }
    n['default'] = {
      path: '/main/analysis/overview',
      name: 'overview',
      component: r,
      children: []
    }
  },
  4590: function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return Promise.all([t.e('chunk-3b12f262'), t.e('chunk-4c697399')]).then(
        t.bind(null, 'a4c2')
      )
    }
    n['default'] = {
      path: '/main/system/user',
      name: 'user',
      component: r,
      children: []
    }
  },
  '522b': function (e, n, t) {},
  5718: function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-3e4b6e98').then(t.bind(null, '9a43'))
    }
    n['default'] = {
      path: '/main/analysis/dashboard',
      name: 'dashboard',
      component: r,
      children: []
    }
  },
  '74bd': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-2d0c42b6').then(t.bind(null, '3a4f'))
    }
    n['default'] = {
      path: '/main/product/category',
      name: 'category',
      component: r,
      children: []
    }
  },
  '754c': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-2d221a33').then(t.bind(null, 'cacb'))
    }
    n['default'] = {
      path: '/main/system/department',
      name: 'department',
      component: r,
      children: []
    }
  },
  '7df4': function (e, n, t) {},
  8520: function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return Promise.all([t.e('chunk-3b12f262'), t.e('chunk-f8a65acc')]).then(
        t.bind(null, 'bf7e')
      )
    }
    n['default'] = {
      path: '/main/system/role',
      name: 'role',
      component: r,
      children: []
    }
  },
  '98d0': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-62f5cf8c').then(t.bind(null, '404f'))
    }
    n['default'] = {
      path: '/main/product/goods',
      name: 'goods',
      component: r,
      children: []
    }
  },
  '9c08': function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-2d22cab4').then(t.bind(null, 'f3e6'))
    }
    n['default'] = {
      path: '/main/story/list',
      name: 'list',
      component: r,
      children: []
    }
  },
  afbc: function (e, n, t) {
    'use strict'
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = t('6c02'),
      a = t('d80c'),
      o = t('09e6'),
      c = [
        { path: '/', redirect: '/main' },
        {
          path: '/login',
          name: 'login',
          component: function () {
            return t.e('chunk-e591ccee').then(t.bind(null, 'dc3f'))
          }
        },
        {
          path: '/main',
          name: 'main',
          component: function () {
            return t.e('chunk-5fccca21').then(t.bind(null, '85d4'))
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: function () {
            return t.e('chunk-2d0e26d8').then(t.bind(null, '7f3f'))
          }
        }
      ],
      u = Object(r['a'])({ routes: c, history: Object(r['b'])() })
    u.beforeEach(function (e) {
      if ('/login' !== e.path) {
        var n = a['a'].getCache('token')
        if (!n) return '/login'
      }
      if ('/main' === e.path) return o['a'].url
    }),
      (n['a'] = u)
  },
  b4c1: function (e, n, t) {
    var r = {
      './main/analysis/dashboard/dashboard': '5718',
      './main/analysis/dashboard/dashboard.ts': '5718',
      './main/analysis/overview/overview': '1d4b',
      './main/analysis/overview/overview.ts': '1d4b',
      './main/product/category/category': '74bd',
      './main/product/category/category.ts': '74bd',
      './main/product/goods/goods': '98d0',
      './main/product/goods/goods.ts': '98d0',
      './main/story/chat/chat': '012e',
      './main/story/chat/chat.ts': '012e',
      './main/story/list/list': '9c08',
      './main/story/list/list.ts': '9c08',
      './main/system/department/department': '754c',
      './main/system/department/department.ts': '754c',
      './main/system/menu/menu': 'e8c5',
      './main/system/menu/menu.ts': 'e8c5',
      './main/system/role/role': '8520',
      './main/system/role/role.ts': '8520',
      './main/system/user/user': '4590',
      './main/system/user/user.ts': '4590'
    }
    function a(e) {
      var n = o(e)
      return t(n)
    }
    function o(e) {
      if (!t.o(r, e)) {
        var n = new Error("Cannot find module '" + e + "'")
        throw ((n.code = 'MODULE_NOT_FOUND'), n)
      }
      return r[e]
    }
    ;(a.keys = function () {
      return Object.keys(r)
    }),
      (a.resolve = o),
      (e.exports = a),
      (a.id = 'b4c1')
  },
  cd49: function (e, n, t) {
    'use strict'
    t.r(n)
    t('e260'), t('e6cf'), t('cca6'), t('a79d')
    var r = t('7a23'),
      a = (t('f5df1'), t('522b'), t('afbc')),
      o = (t('0898'), t('9370')),
      c = t.n(o),
      u = t('3ef0'),
      s = t.n(u),
      i = { class: 'app' },
      d = Object(r['defineComponent'])({
        __name: 'App',
        setup: function (e) {
          return function (e, n) {
            var t = Object(r['resolveComponent'])('router-view')
            return (
              Object(r['openBlock'])(),
              Object(r['createElementBlock'])('div', i, [
                Object(r['createVNode'])(
                  Object(r['unref'])(c.a),
                  { locale: Object(r['unref'])(s.a) },
                  {
                    default: Object(r['withCtx'])(function () {
                      return [Object(r['createVNode'])(t)]
                    }),
                    _: 1
                  },
                  8,
                  ['locale']
                )
              ])
            )
          }
        }
      }),
      f = (t('fed2'), d),
      l = t('0613'),
      h = t('b85c'),
      p = (t('9fb0'), t('ab51')),
      g = t.n(p),
      m = (t('28cf'), t('683b')),
      b = t.n(m),
      v = (t('e943'), t('f14a')),
      y = t.n(v),
      k = (t('51bb'), t('28af')),
      w = t.n(k),
      O = (t('e750'), t('b3eb')),
      C = t.n(O),
      j = (t('d37b'), t('4c63')),
      L = t.n(j),
      x = (t('f60d'), t('a1dd')),
      I = t.n(x),
      A = (t('8989'), t('f5c0')),
      S = t.n(A),
      E = (t('4062'), t('1970')),
      G = t.n(E),
      D = (t('71ec'), t('e1fa')),
      M = t.n(D),
      P = (t('c0ba'), t('c082')),
      R = t.n(P),
      N = (t('8c51'), t('fe7e')),
      q = t.n(N),
      U = (t('5deb'), t('550a')),
      T = t.n(U),
      _ = (t('42dc'), t('19ec')),
      F = t.n(_),
      z = (t('accc'), t('d197')),
      B = t.n(z),
      H = (t('47b1'), t('5a1e')),
      J = t.n(H),
      Y = (t('828f'), t('015f')),
      V = t.n(Y),
      K = (t('3411'), t('4810')),
      $ = t.n(K),
      Q = (t('9792'), t('6142')),
      W = t.n(Q),
      X = (t('8c513'), t('6560')),
      Z = t.n(X),
      ee = (t('163c'), t('fa2a')),
      ne = t.n(ee),
      te = (t('3353'), t('5c8f')),
      re = t.n(te),
      ae = (t('737e'), t('7d11')),
      oe = t.n(ae),
      ce = (t('3b10'), t('4445')),
      ue = t.n(ce),
      se = (t('a1a7'), t('9ebf')),
      ie = t.n(se),
      de = (t('ab0d'), t('a2ec')),
      fe = t.n(de),
      le = (t('1e7f'), t('d94e')),
      he = t.n(le),
      pe = (t('efe7'), t('c026')),
      ge = t.n(pe),
      me = (t('884b'), t('0518')),
      be = t.n(me),
      ve = (t('f560'), t('c597')),
      ye = t.n(ve),
      ke = (t('dc92'), t('43f9')),
      we = t.n(ke),
      Oe = (t('43ea'), t('424b')),
      Ce = t.n(Oe),
      je = (t('398c'), t('b27e')),
      Le = t.n(je),
      xe = (t('cbe4'), t('6c9f')),
      Ie = t.n(xe),
      Ae = (t('34c0'), t('aff9')),
      Se = t.n(Ae),
      Ee = (t('0bd6'), t('05c2')),
      Ge = t.n(Ee),
      De = (t('8ac7'), t('e661')),
      Me = t.n(De),
      Pe = (t('4af4'), t('44fb')),
      Re = t.n(Pe),
      Ne =
        (t('b0c0'),
        t('f3fc'),
        [
          Re.a,
          Me.a,
          Ge.a,
          Se.a,
          Ie.a,
          Le.a,
          Ce.a,
          we.a,
          ye.a,
          be.a,
          ge.a,
          he.a,
          fe.a,
          ie.a,
          ue.a,
          oe.a,
          re.a,
          ne.a,
          Z.a,
          W.a,
          $.a,
          V.a,
          J.a,
          B.a,
          F.a,
          T.a,
          q.a,
          R.a,
          M.a,
          G.a,
          S.a,
          I.a,
          L.a,
          C.a,
          w.a,
          y.a,
          b.a,
          g.a
        ]),
      qe = function (e) {
        var n,
          t = Object(h['a'])(Ne)
        try {
          for (t.s(); !(n = t.n()).done; ) {
            var r = n.value
            e.component(r.name, r)
          }
        } catch (a) {
          t.e(a)
        } finally {
          t.f()
        }
      },
      Ue = t('5a0c'),
      Te = t.n(Ue),
      _e = t('0ecf'),
      Fe = t.n(_e)
    Te.a.extend(Fe.a)
    var ze = 'YYYY-MM-DD HH:mm:ss'
    function Be(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze
      return Te.a.utc(e).utcOffset(8).format(n)
    }
    function He(e) {
      e.config.globalProperties.$fliters = {
        foo: function () {
          console.log('foo')
        },
        formatTime: function (e) {
          return Be(e)
        }
      }
    }
    function Je(e) {
      e.use(qe), e.use(He)
    }
    var Ye = Object(r['createApp'])(f)
    Ye.use(Je),
      Ye.use(l['a']),
      Object(l['b'])(),
      Ye.use(a['a']),
      Ye.mount('#app'),
      console.log('kang'),
      console.log('http://127.0.0.1:3000/api')
  },
  d1d0: function (e, n, t) {
    var r = {
      './analysis/dashboard/dashboard.ts': '5718',
      './analysis/overview/overview.ts': '1d4b',
      './product/category/category.ts': '74bd',
      './product/goods/goods.ts': '98d0',
      './story/chat/chat.ts': '012e',
      './story/list/list.ts': '9c08',
      './system/department/department.ts': '754c',
      './system/menu/menu.ts': 'e8c5',
      './system/role/role.ts': '8520',
      './system/user/user.ts': '4590'
    }
    function a(e) {
      var n = o(e)
      return t(n)
    }
    function o(e) {
      if (!t.o(r, e)) {
        var n = new Error("Cannot find module '" + e + "'")
        throw ((n.code = 'MODULE_NOT_FOUND'), n)
      }
      return r[e]
    }
    ;(a.keys = function () {
      return Object.keys(r)
    }),
      (a.resolve = o),
      (e.exports = a),
      (a.id = 'd1d0')
  },
  d80c: function (e, n, t) {
    'use strict'
    var r = t('d4ec'),
      a = t('bee2'),
      o = (function () {
        function e() {
          Object(r['a'])(this, e)
        }
        return (
          Object(a['a'])(e, [
            {
              key: 'setCache',
              value: function (e, n) {
                window.localStorage.setItem(e, JSON.stringify(n))
              }
            },
            {
              key: 'getCache',
              value: function (e) {
                var n = window.localStorage.getItem(e)
                if (n) return JSON.parse(n)
              }
            },
            {
              key: 'deleteCache',
              value: function (e) {
                window.localStorage.removeItem(e)
              }
            },
            {
              key: 'clearCache',
              value: function () {
                window.localStorage.clear()
              }
            }
          ]),
          e
        )
      })()
    n['a'] = new o()
  },
  e8c5: function (e, n, t) {
    'use strict'
    t.r(n)
    t('d3b7'), t('3ca3'), t('ddb0')
    var r = function () {
      return t.e('chunk-c583b688').then(t.bind(null, 'ab96'))
    }
    n['default'] = {
      path: '/main/system/menu',
      name: 'menu',
      component: r,
      children: []
    }
  },
  fed2: function (e, n, t) {
    'use strict'
    t('7df4')
  }
})
//# sourceMappingURL=app.9b7d274c.js.map
