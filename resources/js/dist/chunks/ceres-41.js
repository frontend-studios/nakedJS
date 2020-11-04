(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
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
    marginClasses: {
      type: String,
      default: null
    },
    marginInlineStyles: {
      type: String,
      default: null
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    tagList: state => state.itemList.selectedFacets
  }),
  methods: {
    removeTag(tag) {
      this.selectFacet({
        facetValue: tag
      });
      this.loadItemList();
    },

    resetAllTags() {
      this.resetAllSelectedFacets();
      this.loadItemList();
    },

    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["resetAllSelectedFacets"]),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["selectFacet", "loadItemList"])
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432& ***!
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
    "div",
    { staticClass: "selected-filters clearfix" },
    [
      _vm._l(_vm.tagList, function(tag) {
        return _c(
          "span",
          {
            class:
              "text-appearance selected-filter filter-" +
              tag.id +
              " " +
              _vm.marginClasses,
            style: _vm.marginInlineStyles,
            on: {
              click: function($event) {
                return _vm.removeTag(tag)
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-times",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" " + _vm._s(tag.name) + "\n    ")
          ]
        )
      }),
      _vm._v(" "),
      _vm.tagList.length >= 2
        ? _c(
            "span",
            {
              class:
                "bg-appearance selected-filter reset-all" +
                " " +
                _vm.marginClasses,
              style: _vm.marginInlineStyles,
              on: {
                click: function($event) {
                  return _vm.resetAllTags()
                }
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$translate("Ceres::Template.itemFilterReset")) +
                  "\n    "
              )
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFilterTagList.vue?vue&type=template&id=6da91432& */ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432&");
/* harmony import */ var _ItemFilterTagList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemFilterTagList.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemFilterTagList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemFilterTagList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemFilterTagList.vue?vue&type=template&id=6da91432& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-41.js.map