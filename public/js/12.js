(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    role: Object,
    modules: Array,
    roleModelData: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    [
      _c(
        "template",
        { slot: "right_toolbar" },
        [
          _vm.role.can_edit
            ? _c(
                "inertia-link",
                {
                  staticClass:
                    "btn btn-sm btn-secondary d-none d-md-inline-block",
                  attrs: {
                    href: _vm.route(
                      _vm.roleModelData.resource + ".edit",
                      _vm.role.id
                    )
                  }
                },
                [_c("i", { staticClass: "fa fa-edit" }), _vm._v(" Editar")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "justify-content-md-center" },
        [
          _c("b-col", { attrs: { cols: "8" } }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-status-top bg-primary" }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row row-sm align-items-center" }, [
                  _c("div", { staticClass: "col-auto" }, [
                    _c("span", {
                      staticClass: "avatar avatar-lg",
                      style: "background-image: url(" + _vm.role.avatar + ")"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("h4", { staticClass: "card-title m-0" }, [
                      _vm._v(_vm._s(_vm.role.name))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted" }, [
                      _vm._v("Actualizado: " + _vm._s(_vm.role.updated_ago))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted" }, [
                      _vm._v("Registrado: " + _vm._s(_vm.role.created_ago))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-0" }, [
                _c(
                  "ul",
                  {
                    staticClass: "nav nav-tabs",
                    attrs: { "data-toggle": "tabs" }
                  },
                  [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link active",
                          attrs: { href: "#tabs-users", "data-toggle": "tab" }
                        },
                        [_vm._v("Usuarios")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            href: "#tabs-permissions",
                            "data-toggle": "tab"
                          }
                        },
                        [_vm._v("Permisos")]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tab-content" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane active show",
                      attrs: { id: "tabs-users" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "list list-row list-hoverable" },
                        [
                          _vm.role.users.length > 0
                            ? _vm._l(_vm.role.users, function(user) {
                                return _c(
                                  "div",
                                  { staticClass: "list-item" },
                                  [
                                    _c(
                                      "inertia-link",
                                      {
                                        attrs: {
                                          href: _vm.route("user.show", user.id)
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "avatar",
                                          style:
                                            "background-image: url(" +
                                            user.avatar +
                                            ")"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-truncate" },
                                      [
                                        _c(
                                          "inertia-link",
                                          {
                                            staticClass: "text-body d-block",
                                            attrs: {
                                              href: _vm.route(
                                                "user.show",
                                                user.id
                                              )
                                            }
                                          },
                                          [_vm._v(_vm._s(user.full_name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            staticClass:
                                              "d-block text-muted text-truncate mt-n1"
                                          },
                                          [_vm._v(_vm._s(user.email))]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              })
                            : [
                                _c("div", { staticClass: "list-item" }, [
                                  _vm._v(
                                    "\n                                        No se han asignado usuarios\n                                    "
                                  )
                                ])
                              ]
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane",
                      attrs: { id: "tabs-permissions" }
                    },
                    _vm._l(_vm.modules, function(module) {
                      return _c("div", { staticClass: "card mb-0 border-0" }, [
                        _c("div", {
                          staticClass: "card-status-bottom bg-primary"
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-header p-1" }, [
                          _c("h3", { staticClass: "card-title" }, [
                            _vm._v(_vm._s(module.label))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "table-responsive mb-0" }, [
                          _c("table", { staticClass: "table table-nowrap" }, [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("Módulo")]),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Navegar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-th-list" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Leer" }
                                  },
                                  [_c("i", { staticClass: "fa fa-eye" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Agregar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-plus" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Editar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-edit" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Eliminar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Restaurar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-undo" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Importar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-upload" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    attrs: { title: "Exportar" }
                                  },
                                  [_c("i", { staticClass: "fa fa-download" })]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(module.children, function(children) {
                                return _c("tr", [
                                  _c("td", [_vm._v(_vm._s(children.label))]),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "browse-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "read-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "add-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "edit-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "delete-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "restore-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "import-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "text-center",
                                    staticStyle: { width: "60px" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.role.permission.includes(
                                          "export-" + children.slug
                                        )
                                          ? "<i class='fa fa-check'></i>"
                                          : "<i class='fa fa-times'></i>"
                                      )
                                    }
                                  })
                                ])
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue":
/*!*****************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleShow.vue?vue&type=template&id=e66fd878& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878&");
/* harmony import */ var _RoleShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleShow.vue?vue&type=script&lang=js& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878&":
/*!************************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleShow.vue?vue&type=template&id=e66fd878& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleShow.vue?vue&type=template&id=e66fd878&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleShow_vue_vue_type_template_id_e66fd878___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);