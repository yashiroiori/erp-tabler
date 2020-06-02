(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userModelData: Object,
    user: Object,
    modules: Array,
    roles: Array
  },
  data: function data() {
    return {
      form: {},
      loading: false,
      search: ''
    };
  },
  computed: {
    criteria: function criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase();
    },
    availableOptions: function availableOptions() {
      var _this = this;

      var criteria = this.criteria; // Filter out already selected options

      var options = this.roles.filter(function (opt) {
        if (_this.form.roles != undefined) {
          return _this.form.roles.indexOf(opt.text) === -1;
        }

        return true;
      });

      if (criteria) {
        // Show only options that match criteria
        return options.filter(function (opt) {
          return opt.text.toLowerCase().indexOf(criteria) > -1;
        });
      } // Show all options available


      return options;
    },
    searchDesc: function searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'No se encontraron resultados';
      }

      return '';
    }
  },
  mounted: function mounted() {
    this.form = this.user;
    this.form._method = 'PUT';
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.loading = true;
      this.$inertia.post(route('user.update', this.form.id), this.form).then(function (response) {
        _this2.loading = false;
      });
    },
    formUpdated: function formUpdated(data) {
      this.selectedRoles = data.roles != undefined ? data.roles : [];
    },
    addOption: function addOption(_ref) {
      var option = _ref.option,
          addTag = _ref.addTag;
      addTag(option.id);
      this.search = '';
    },
    getRoleNameById: function getRoleNameById(id) {
      var role = this.roles.find(function (role) {
        if (role.id == id) {
          return role;
        }
      });
      return role.text;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6& ***!
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
        "b-row",
        { staticClass: "justify-content-md-center" },
        [
          _c(
            "b-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "b-form",
                {
                  staticClass: "card",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h4", { staticClass: "card-title" }, [
                      _vm._v(_vm._s(_vm.userModelData.titles.edit))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body pt-2" },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Nombre",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              state:
                                _vm.$page.errors.name == undefined
                                  ? null
                                  : false
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.name != undefined
                                  ? _vm.$page.errors.name[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Apellido",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              state:
                                _vm.$page.errors.last_name == undefined
                                  ? null
                                  : false
                            },
                            model: {
                              value: _vm.form.last_name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.last_name != undefined
                                  ? _vm.$page.errors.last_name[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Correo Electrónico",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              type: "email",
                              state:
                                _vm.$page.errors.email == undefined
                                  ? null
                                  : false
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.email != undefined
                                  ? _vm.$page.errors.email[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Teléfono",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              state:
                                _vm.$page.errors.phone == undefined
                                  ? null
                                  : false
                            },
                            model: {
                              value: _vm.form.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.phone != undefined
                                  ? _vm.$page.errors.phone[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Celular",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              state:
                                _vm.$page.errors.cell_phone == undefined
                                  ? null
                                  : false
                            },
                            model: {
                              value: _vm.form.cell_phone,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "cell_phone", $$v)
                              },
                              expression: "form.cell_phone"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.cell_phone != undefined
                                  ? _vm.$page.errors.cell_phone[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Asignar Roles",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-tags", {
                            attrs: { "no-outer-focus": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var tags = ref.tags
                                  var disabled = ref.disabled
                                  var addTag = ref.addTag
                                  var removeTag = ref.removeTag
                                  return [
                                    tags.length > 0
                                      ? _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-inline d-inline-block mb-2"
                                          },
                                          _vm._l(tags, function(tag) {
                                            return _c(
                                              "li",
                                              {
                                                key: tag,
                                                staticClass: "list-inline-item"
                                              },
                                              [
                                                _c(
                                                  "b-form-tag",
                                                  {
                                                    attrs: {
                                                      title: tag,
                                                      disabled: disabled,
                                                      variant: "info"
                                                    },
                                                    on: {
                                                      remove: function($event) {
                                                        return removeTag(tag)
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.getRoleNameById(
                                                            tag
                                                          )
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          size: "sm",
                                          variant: "outline-secondary",
                                          block: "",
                                          "menu-class": "w-100"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "button-content",
                                              fn: function() {
                                                return [
                                                  _c("i", {
                                                    staticClass: "fa fa-lock"
                                                  }),
                                                  _vm._v(
                                                    " Asignar Roles\n                                    "
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-form",
                                          {
                                            on: {
                                              submit: function($event) {
                                                $event.stopPropagation()
                                                $event.preventDefault()
                                                return (function() {})($event)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                staticClass: "mb-0",
                                                attrs: {
                                                  "label-for":
                                                    "tag-search-input",
                                                  label: "Buscar",
                                                  "label-cols-md": "auto",
                                                  "label-size": "sm",
                                                  description: _vm.searchDesc,
                                                  disabled: disabled
                                                }
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    id: "tag-search-input",
                                                    type: "search",
                                                    size: "sm",
                                                    autocomplete: "off"
                                                  },
                                                  model: {
                                                    value: _vm.search,
                                                    callback: function($$v) {
                                                      _vm.search = $$v
                                                    },
                                                    expression: "search"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("b-dropdown-divider"),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticStyle: {
                                              "max-height": "200px",
                                              overflow: "auto"
                                            }
                                          },
                                          [
                                            _vm._l(
                                              _vm.availableOptions,
                                              function(option) {
                                                return _c(
                                                  "b-dropdown-item-button",
                                                  {
                                                    key: option.id,
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.addOption({
                                                          option: option,
                                                          addTag: addTag
                                                        })
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(option.text) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                )
                                              }
                                            ),
                                            _vm._v(" "),
                                            _vm.availableOptions.length === 0
                                              ? _c("b-dropdown-text", [
                                                  _vm._v(
                                                    "\n                                            No hay más roles por asignar\n                                        "
                                                  )
                                                ])
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.form.roles,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "roles", $$v)
                              },
                              expression: "form.roles"
                            }
                          }),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.roles != undefined
                                  ? _vm.$page.errors.roles[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "pt-2",
                          attrs: { label: "", "label-for": "input-default" }
                        },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: { plain: "" },
                              model: {
                                value: _vm.form.admin,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "admin", $$v)
                                },
                                expression: "form.admin"
                              }
                            },
                            [_vm._v("Super Administrador")]
                          ),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.admin != undefined
                                  ? _vm.$page.errors.admin[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        { attrs: { label: "", "label-for": "input-default" } },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: { plain: "" },
                              model: {
                                value: _vm.form.send_recover_email,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "send_recover_email", $$v)
                                },
                                expression: "form.send_recover_email"
                              }
                            },
                            [_vm._v("Enviar correo para reseteo de contraseña")]
                          ),
                          _vm._v(" "),
                          _c("b-form-invalid-feedback", [
                            _vm._v(
                              _vm._s(
                                _vm.$page.errors.admin != undefined
                                  ? _vm.$page.errors.admin[0]
                                  : ""
                              )
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer text-right" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass: "btn btn-sm  btn-link",
                            attrs: {
                              href: _vm.route(
                                _vm.userModelData.resource + ".index"
                              )
                            }
                          },
                          [_vm._v("Cancelar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-primary ml-auto",
                            class: _vm.loading ? "btn-loading" : "",
                            attrs: { type: "submit", disabled: _vm.loading }
                          },
                          [
                            _c("i", { staticClass: "fa fa-send mr-1" }),
                            _vm._v(" Enviar")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue":
/*!*****************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=44969ea6& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6&");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6&":
/*!************************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEdit.vue?vue&type=template&id=44969ea6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/UserEdit.vue?vue&type=template&id=44969ea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_44969ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);