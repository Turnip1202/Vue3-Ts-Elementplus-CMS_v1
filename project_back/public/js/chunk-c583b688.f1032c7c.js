;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-c583b688'],
  {
    '309c': function (e, t, n) {
      'use strict'
      var r = n('5530'),
        c = (n('4de4'), n('7a23')),
        o = (n('a9e3'), { class: 'tk-table' }),
        a = { class: 'header' },
        i = { class: 'title' },
        l = { class: 'handler' },
        u = { key: 0, class: 'footer' },
        s = Object(c['defineComponent'])({
          __name: 'table',
          props: {
            title: { type: String, default: '' },
            listData: { type: Array, required: !0 },
            listCount: { type: Number, default: 0 },
            propList: { type: Array, required: !0 },
            showIndexColumn: { type: Boolean, default: !1 },
            showSelectColumn: { type: Boolean, default: !1 },
            page: {
              type: Object,
              default: function () {
                return { currentPage: 0, pageSize: 10 }
              }
            },
            childrenProps: {
              type: Object,
              default: function () {
                return {}
              }
            },
            showFooter: { type: Boolean, default: !0 }
          },
          emits: ['selectChange', 'update:page'],
          setup: function (e, t) {
            var n = t.emit,
              s = e,
              p = function (e) {
                n('selectChange', e)
              },
              b = function (e) {
                n(
                  'update:page',
                  Object(r['a'])(
                    Object(r['a'])({}, s.page),
                    {},
                    { pageSize: e }
                  )
                )
              },
              d = function (e) {
                n(
                  'update:page',
                  Object(r['a'])(
                    Object(r['a'])({}, s.page),
                    {},
                    { currentPage: e }
                  )
                )
              }
            return function (t, n) {
              var r = Object(c['resolveComponent'])('el-table-column'),
                s = Object(c['resolveComponent'])('el-table'),
                f = Object(c['resolveComponent'])('el-pagination')
              return (
                Object(c['openBlock'])(),
                Object(c['createElementBlock'])('div', o, [
                  Object(c['createElementVNode'])('div', a, [
                    Object(c['renderSlot'])(
                      t.$slots,
                      'header',
                      {},
                      function () {
                        return [
                          Object(c['createElementVNode'])(
                            'div',
                            i,
                            Object(c['toDisplayString'])(e.title),
                            1
                          ),
                          Object(c['createElementVNode'])('div', l, [
                            Object(c['renderSlot'])(t.$slots, 'headerHandler')
                          ])
                        ]
                      }
                    )
                  ]),
                  Object(c['createVNode'])(
                    s,
                    Object(c['mergeProps'])(
                      {
                        data: e.listData,
                        border: '',
                        style: { width: '100%' },
                        onSelectionChange: p
                      },
                      e.childrenProps
                    ),
                    {
                      default: Object(c['withCtx'])(function () {
                        return [
                          e.showSelectColumn
                            ? (Object(c['openBlock'])(),
                              Object(c['createBlock'])(r, {
                                key: 0,
                                type: 'selection',
                                align: 'center'
                              }))
                            : Object(c['createCommentVNode'])('', !0),
                          e.showIndexColumn
                            ? (Object(c['openBlock'])(),
                              Object(c['createBlock'])(r, {
                                key: 1,
                                type: 'index',
                                label: '序号',
                                align: 'center',
                                width: '60'
                              }))
                            : Object(c['createCommentVNode'])('', !0),
                          (Object(c['openBlock'])(!0),
                          Object(c['createElementBlock'])(
                            c['Fragment'],
                            null,
                            Object(c['renderList'])(e.propList, function (e) {
                              return (
                                Object(c['openBlock'])(),
                                Object(c['createBlock'])(
                                  r,
                                  Object(c['mergeProps'])({ key: e.props }, e, {
                                    align: 'cneter',
                                    'show-overflow-tooltip': ''
                                  }),
                                  {
                                    default: Object(c['withCtx'])(function (n) {
                                      return [
                                        Object(c['renderSlot'])(
                                          t.$slots,
                                          e.slotName,
                                          { row: n.row },
                                          function () {
                                            return [
                                              Object(c['createTextVNode'])(
                                                Object(c['toDisplayString'])(
                                                  n.row[e.prop]
                                                ),
                                                1
                                              )
                                            ]
                                          }
                                        )
                                      ]
                                    }),
                                    _: 2
                                  },
                                  1040
                                )
                              )
                            }),
                            128
                          ))
                        ]
                      }),
                      _: 3
                    },
                    16,
                    ['data']
                  ),
                  e.showFooter
                    ? (Object(c['openBlock'])(),
                      Object(c['createElementBlock'])('div', u, [
                        Object(c['renderSlot'])(
                          t.$slots,
                          'footer',
                          {},
                          function () {
                            return [
                              Object(c['createVNode'])(
                                f,
                                {
                                  onSizeChange: b,
                                  onCurrentChange: d,
                                  'current-page': e.page.currentPage,
                                  'page-sizes': [10, 20, 30],
                                  'page-size': e.page.pageSize,
                                  layout:
                                    'total, sizes, prev, pager, next, jumper',
                                  total: e.listCount
                                },
                                null,
                                8,
                                ['current-page', 'page-size', 'total']
                              )
                            ]
                          }
                        )
                      ]))
                    : Object(c['createCommentVNode'])('', !0)
                ])
              )
            }
          }
        })
      n('3dcd')
      s.__scopeId = 'data-v-1c21027e'
      var p = s,
        b = p,
        d = n('0613')
      n('99af'), n('7db0')
      function f(e, t) {
        console.log('usepage', e)
        var n = Object(d['c'])(),
          r = n.state.login.permissions,
          c = 'system:'.concat(e, ':').concat(t)
        return !!r.find(function (e) {
          return e === c
        })
      }
      var m = { class: 'page-content' },
        O = { class: 'handle-btns' },
        j = Object(c['defineComponent'])({
          __name: 'page-content',
          props: {
            contentTableConfig: { type: Object, required: !0 },
            pageName: { type: String, required: !0 }
          },
          emits: ['newBtnClick', 'editBtnClick'],
          setup: function (e, t) {
            var n,
              o = t.expose,
              a = t.emit,
              i = e,
              l = f(i.pageName, 'create'),
              u = f(i.pageName, 'update'),
              s = f(i.pageName, 'delete'),
              p = f(i.pageName, 'query')
            console.log('isCreate', l)
            var j = Object(c['ref'])({ currentPage: 1, pageSize: 10 })
            Object(c['watch'])(j, function () {
              h()
            })
            var g = Object(d['c'])(),
              h = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                p &&
                  g.dispatch('system/getPageListAction', {
                    pageName: i.pageName,
                    queryInfo: Object(r['a'])(
                      {
                        offset: (j.value.currentPage - 1) * j.value.pageSize,
                        size: j.value.pageSize
                      },
                      e
                    )
                  })
              }
            o({ getPageData: h }), h()
            var N = Object(c['computed'])(function () {
                return g.getters['system/pageListData'](i.pageName)
              }),
              C = Object(c['computed'])(function () {
                return g.getters['system/pageListCount'](i.pageName)
              }),
              y =
                null === (n = i.contentTableConfig) || void 0 === n
                  ? void 0
                  : n.propList.filter(function (e) {
                      switch (e.slotName) {
                        case 'status':
                          return !1
                        case 'createAt':
                          return !1
                        case 'updateAt':
                          return !1
                        case 'handler':
                          return !1
                      }
                      return !0
                    }),
              v = function (e) {
                console.log(e),
                  g.dispatch('system/deletePageDataAction', {
                    pageName: i.pageName,
                    id: e.id
                  })
              },
              w = function () {
                a('newBtnClick')
              },
              k = function (e) {
                a('editBtnClick', e)
              }
            return function (t, n) {
              var r = Object(c['resolveComponent'])('el-button')
              return (
                Object(c['openBlock'])(),
                Object(c['createElementBlock'])('div', m, [
                  Object(c['createVNode'])(
                    Object(c['unref'])(b),
                    Object(c['mergeProps'])(
                      { listData: N.value, listCount: C.value },
                      e.contentTableConfig,
                      {
                        page: j.value,
                        'onUpdate:page':
                          n[0] ||
                          (n[0] = function (e) {
                            return (j.value = e)
                          })
                      }
                    ),
                    Object(c['createSlots'])(
                      {
                        headerHandler: Object(c['withCtx'])(function () {
                          return [
                            Object(c['unref'])(l)
                              ? (Object(c['openBlock'])(),
                                Object(c['createBlock'])(
                                  r,
                                  {
                                    key: 0,
                                    type: 'primary',
                                    size: 'medium',
                                    onClick: w
                                  },
                                  {
                                    default: Object(c['withCtx'])(function () {
                                      return [
                                        Object(c['createTextVNode'])('新建用户')
                                      ]
                                    }),
                                    _: 1
                                  }
                                ))
                              : Object(c['createCommentVNode'])('', !0)
                          ]
                        }),
                        status: Object(c['withCtx'])(function (e) {
                          return [
                            Object(c['createVNode'])(
                              r,
                              {
                                size: 'mini',
                                plain: '',
                                type: e.row.enable ? 'success' : 'danger'
                              },
                              {
                                default: Object(c['withCtx'])(function () {
                                  return [
                                    Object(c['createTextVNode'])(
                                      Object(c['toDisplayString'])(
                                        e.row.enable ? '启用' : '禁用'
                                      ),
                                      1
                                    )
                                  ]
                                }),
                                _: 2
                              },
                              1032,
                              ['type']
                            )
                          ]
                        }),
                        createAt: Object(c['withCtx'])(function (e) {
                          return [
                            Object(c['createElementVNode'])(
                              'strong',
                              null,
                              Object(c['toDisplayString'])(
                                t.$fliters.formatTime(e.row.createAt)
                              ),
                              1
                            )
                          ]
                        }),
                        updateAt: Object(c['withCtx'])(function (e) {
                          return [
                            Object(c['createElementVNode'])(
                              'strong',
                              null,
                              Object(c['toDisplayString'])(
                                t.$fliters.formatTime(e.row.updateAt)
                              ),
                              1
                            )
                          ]
                        }),
                        handler: Object(c['withCtx'])(function (e) {
                          return [
                            Object(c['createElementVNode'])('div', O, [
                              Object(c['unref'])(u)
                                ? (Object(c['openBlock'])(),
                                  Object(c['createBlock'])(
                                    r,
                                    {
                                      key: 0,
                                      icon: 'el-icon-edit',
                                      size: 'mini',
                                      type: 'text',
                                      onClick: function (t) {
                                        return k(e.row)
                                      }
                                    },
                                    {
                                      default: Object(c['withCtx'])(
                                        function () {
                                          return [
                                            Object(c['createTextVNode'])('编辑')
                                          ]
                                        }
                                      ),
                                      _: 2
                                    },
                                    1032,
                                    ['onClick']
                                  ))
                                : Object(c['createCommentVNode'])('', !0),
                              Object(c['unref'])(s)
                                ? (Object(c['openBlock'])(),
                                  Object(c['createBlock'])(
                                    r,
                                    {
                                      key: 1,
                                      icon: 'el-icon-delete',
                                      size: 'mini',
                                      type: 'text',
                                      onClick: function (t) {
                                        return v(e.row)
                                      }
                                    },
                                    {
                                      default: Object(c['withCtx'])(
                                        function () {
                                          return [
                                            Object(c['createTextVNode'])('删除')
                                          ]
                                        }
                                      ),
                                      _: 2
                                    },
                                    1032,
                                    ['onClick']
                                  ))
                                : Object(c['createCommentVNode'])('', !0)
                            ])
                          ]
                        }),
                        _: 2
                      },
                      [
                        Object(c['renderList'])(
                          Object(c['unref'])(y),
                          function (e) {
                            return {
                              name: e.slotName,
                              fn: Object(c['withCtx'])(function (n) {
                                return [
                                  e.slotName
                                    ? Object(c['renderSlot'])(
                                        t.$slots,
                                        e.slotName,
                                        { key: 0, row: n.row }
                                      )
                                    : Object(c['createCommentVNode'])('', !0)
                                ]
                              })
                            }
                          }
                        )
                      ]
                    ),
                    1040,
                    ['listData', 'listCount', 'page']
                  )
                ])
              )
            }
          }
        })
      n('9655')
      j.__scopeId = 'data-v-7921bb48'
      t['a'] = j
    },
    3573: function (e, t, n) {
      'use strict'
      var r = n('309c')
      t['a'] = r['a']
    },
    '3dcd': function (e, t, n) {
      'use strict'
      n('5512')
    },
    5512: function (e, t, n) {},
    5899: function (e, t) {
      e.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
    },
    '58a8': function (e, t, n) {
      var r = n('1d80'),
        c = n('5899'),
        o = '[' + c + ']',
        a = RegExp('^' + o + o + '*'),
        i = RegExp(o + o + '*$'),
        l = function (e) {
          return function (t) {
            var n = String(r(t))
            return (
              1 & e && (n = n.replace(a, '')),
              2 & e && (n = n.replace(i, '')),
              n
            )
          }
        }
      e.exports = { start: l(1), end: l(2), trim: l(3) }
    },
    7156: function (e, t, n) {
      var r = n('861d'),
        c = n('d2bb')
      e.exports = function (e, t, n) {
        var o, a
        return (
          c &&
            'function' == typeof (o = t.constructor) &&
            o !== n &&
            r((a = o.prototype)) &&
            a !== n.prototype &&
            c(e, a),
          e
        )
      }
    },
    '791b': function (e, t, n) {},
    9655: function (e, t, n) {
      'use strict'
      n('791b')
    },
    a9e3: function (e, t, n) {
      'use strict'
      var r = n('83ab'),
        c = n('da84'),
        o = n('94ca'),
        a = n('6eeb'),
        i = n('5135'),
        l = n('c6b6'),
        u = n('7156'),
        s = n('c04e'),
        p = n('d039'),
        b = n('7c73'),
        d = n('241c').f,
        f = n('06cf').f,
        m = n('9bf2').f,
        O = n('58a8').trim,
        j = 'Number',
        g = c[j],
        h = g.prototype,
        N = l(b(h)) == j,
        C = function (e) {
          var t,
            n,
            r,
            c,
            o,
            a,
            i,
            l,
            u = s(e, !1)
          if ('string' == typeof u && u.length > 2)
            if (((u = O(u)), (t = u.charCodeAt(0)), 43 === t || 45 === t)) {
              if (((n = u.charCodeAt(2)), 88 === n || 120 === n)) return NaN
            } else if (48 === t) {
              switch (u.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (c = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (c = 55)
                  break
                default:
                  return +u
              }
              for (o = u.slice(2), a = o.length, i = 0; i < a; i++)
                if (((l = o.charCodeAt(i)), l < 48 || l > c)) return NaN
              return parseInt(o, r)
            }
          return +u
        }
      if (o(j, !g(' 0o1') || !g('0b1') || g('+0x1'))) {
        for (
          var y,
            v = function (e) {
              var t = arguments.length < 1 ? 0 : e,
                n = this
              return n instanceof v &&
                (N
                  ? p(function () {
                      h.valueOf.call(n)
                    })
                  : l(n) != j)
                ? u(new g(C(t)), n, v)
                : C(t)
            },
            w = r
              ? d(g)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                  ','
                ),
            k = 0;
          w.length > k;
          k++
        )
          i(g, (y = w[k])) && !i(v, y) && m(v, y, f(g, y))
        ;(v.prototype = h), (h.constructor = v), a(c, j, v)
      }
    },
    ab96: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('7a23'),
        c = {
          title: '菜单列表',
          propList: [
            { prop: 'name', label: '菜单名称', minWidth: '100' },
            { prop: 'type', label: '类型', minWidth: '60' },
            { prop: 'url', label: '菜单url', minWidth: '100' },
            { prop: 'icon', label: '菜单icon', minWidth: '100' },
            { prop: 'permission', label: '按钮权限', minWidth: '100' },
            {
              prop: 'createAt',
              label: '创建时间',
              minWidth: '220',
              slotName: 'createAt'
            },
            {
              prop: 'updateAt',
              label: '更新时间',
              minWidth: '220',
              slotName: 'updateAt'
            },
            { label: '操作', minWidth: '120', slotName: 'handler' }
          ],
          showIndexColumn: !1,
          showSelectColumn: !1,
          childrenProps: { rowKey: 'id', treeProp: { children: 'children' } },
          showFooter: !1
        },
        o = n('3573'),
        a = { class: 'menu' },
        i = Object(r['defineComponent'])({
          __name: 'menu',
          setup: function (e) {
            return function (e, t) {
              return (
                Object(r['openBlock'])(),
                Object(r['createElementBlock'])('div', a, [
                  Object(r['createVNode'])(
                    Object(r['unref'])(o['a']),
                    {
                      'content-table-config': Object(r['unref'])(c),
                      'page-name': 'menu'
                    },
                    null,
                    8,
                    ['content-table-config']
                  )
                ])
              )
            }
          }
        })
      t['default'] = i
    }
  }
])
//# sourceMappingURL=chunk-c583b688.f1032c7c.js.map
