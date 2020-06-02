(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    roleModelData: Object,
    modules: Array,
    users: Array
  },
  data: function data() {
    return {
      form: {},
      loading: false,
      search: '',
      selectedUsers: []
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

      var options = this.users.filter(function (opt) {
        if (_this.form.users != undefined) {
          return _this.form.users.indexOf(opt.id) === -1;
        }

        return true;
      });

      if (criteria) {
        // Show only options that match criteria
        return options.filter(function (opt) {
          return opt.name.toLowerCase().indexOf(criteria) > -1;
        });
      } // Show all options available


      return options;
    },
    searchDesc: function searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'There are no tags matching your search criteria';
      }

      return '';
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.loading = true;
      this.$inertia.post(route('role.store'), this.form).then(function (response) {
        _this2.loading = false;
      });
    },
    onOptionClick: function onOptionClick(_ref) {
      var option = _ref.option,
          addTag = _ref.addTag;
      addTag(option);
      this.search = '';
    },
    formUpdated: function formUpdated(data) {
      this.selectedUsers = data.users != undefined ? data.users : [];
    },
    addOption: function addOption(_ref2) {
      var option = _ref2.option,
          addTag = _ref2.addTag;
      addTag(option.id);
      this.search = '';
    },
    getUserNameById: function getUserNameById(id) {
      var user = this.users.find(function (user) {
        if (user.id == id) {
          return user;
        }
      });
      return user.text;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                      _vm._v(_vm._s(_vm.roleModelData.titles.create))
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
                          staticClass: "pt-2",
                          attrs: {
                            label: "Asignar Usuarios",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("b-form-tags", {
                            staticClass: "mb-2",
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
                                                          _vm.getUserNameById(
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
                                                    staticClass: "fa fa-user"
                                                  }),
                                                  _vm._v(
                                                    " Asignar usuarios\n                                    "
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
                                        _vm._l(_vm.availableOptions, function(
                                          option
                                        ) {
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
                                                "\n                                        " +
                                                  _vm._s(option.text) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _vm.availableOptions.length === 0
                                          ? _c("b-dropdown-text", [
                                              _vm._v(
                                                "\n                                        No hay más usuarios por asignar\n                                    "
                                              )
                                            ])
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.form.users,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "users", $$v)
                              },
                              expression: "form.users"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          staticClass: "pt-2",
                          attrs: {
                            label: "Asignar Permisos",
                            "label-for": "input-default"
                          }
                        },
                        [
                          _c("treeselect", {
                            attrs: {
                              placeholder: "Asignar permisos...",
                              multiple: true,
                              options: _vm.modules,
                              valueConsistsOf: "LEAF_PRIORITY"
                            },
                            model: {
                              value: _vm.form.permission,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "permission", $$v)
                              },
                              expression: "form.permission"
                            }
                          })
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
                            attrs: { href: _vm.route("role.index") }
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

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue":
/*!*******************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleCreate.vue?vue&type=template&id=46135afa& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa&");
/* harmony import */ var _RoleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleCreate.vue?vue&type=script&lang=js& */ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa&":
/*!**************************************************************************************************************!*\
  !*** ./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleCreate.vue?vue&type=template&id=46135afa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/yashiroiori/aclmanagertabler/resources/js/Pages/RoleCreate.vue?vue&type=template&id=46135afa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleCreate_vue_vue_type_template_id_46135afa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);