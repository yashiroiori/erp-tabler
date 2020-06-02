(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user: Object,
    userModelData: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce& ***!
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
          _c(
            "inertia-link",
            {
              staticClass: "btn btn-sm btn-secondary d-none d-md-inline-block",
              attrs: { href: "route(`${userModelData.resource}.back`,user.id)" }
            },
            [_c("i", { staticClass: "fa fa-arrow-left" })]
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "btn btn-sm btn-secondary d-none d-md-inline-block",
              attrs: { href: "route(`${userModelData.resource}.next`,user.id)" }
            },
            [_c("i", { staticClass: "fa fa-arrow-right" })]
          ),
          _vm._v(" "),
          _vm.user.can_edit
            ? _c(
                "inertia-link",
                {
                  staticClass:
                    "btn btn-sm btn-secondary d-none d-md-inline-block",
                  attrs: {
                    href: _vm.route(
                      _vm.userModelData.resource + ".edit",
                      _vm.user.id
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
                      style: "background-image: url(" + _vm.user.avatar + ")"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("h4", { staticClass: "card-title m-0" }, [
                      _vm._v(_vm._s(_vm.user.name))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted" }, [
                      _vm._v("Actualizado: " + _vm._s(_vm.user.updated_ago))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted" }, [
                      _vm._v("Registrado: " + _vm._s(_vm.user.created_ago))
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
                        [_vm._v("Roles")]
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
                          _vm.user.roles.length > 0
                            ? _vm._l(_vm.user.roles, function(role) {
                                return _c(
                                  "div",
                                  { staticClass: "list-item" },
                                  [
                                    _c(
                                      "inertia-link",
                                      {
                                        attrs: {
                                          href: _vm.route("role.show", role.id)
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "avatar",
                                          style:
                                            "background-image: url(" +
                                            role.avatar +
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
                                                "role.show",
                                                role.id
                                              )
                                            }
                                          },
                                          [_vm._v(_vm._s(role.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            staticClass:
                                              "d-block text-muted text-truncate mt-n1"
                                          },
                                          [
                                            _vm._v(
                                              "Permisos: " +
                                                _vm._s(role.permission_count)
                                            )
                                          ]
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
                                    "\n                                        No se han asignado roles\n                                    "
                                  )
                                ])
                              ]
                        ],
                        2
                      )
                    ]
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

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue":
/*!*****************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserShow.vue?vue&type=template&id=5e314bce& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce&");
/* harmony import */ var _UserShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserShow.vue?vue&type=script&lang=js& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce&":
/*!************************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserShow.vue?vue&type=template&id=5e314bce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserShow.vue?vue&type=template&id=5e314bce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShow_vue_vue_type_template_id_5e314bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);