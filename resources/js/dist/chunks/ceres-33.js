(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
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
    property: {
      type: Object,
      required: true
    }
  },
  computed: {
    valueLabel() {
      if (this.property.type === "selection") {
        const propertyId = parseInt(this.property.propertyId); // TODO: pass as property

        const basketItemId = parseInt(this.property.basketItemId);
        const basketItem = this.basketItems.find(basketItem => basketItem.id === basketItemId);

        if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(basketItem)) {
          const properties = basketItem.variation.data.properties;
          const property = properties.find(property => property.property.id === propertyId);

          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(property)) {
            return property.property.selectionValues[this.property.value].name;
          }
        }
      } // exclude properties of type 'none' (checkboxes)
      else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(this.property.type) && this.property.type.length) {
          return this.property.value;
        }

      return null;
    },

    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
      basketItems: state => state.basket.items
    })
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.property.type === "file"
    ? _c("span", [
        _c(
          "a",
          {
            attrs: {
              href: _vm._f("fileUploadPath")(_vm.property.value),
              target: "_blank"
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-external-link",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(
              "\n        " +
                _vm._s(_vm._f("fileName")(_vm.property.value)) +
                "\n    "
            )
          ]
        )
      ])
    : _c("span", [_vm._v(_vm._s(_vm.valueLabel))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/item/OrderPropertyValue.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/app/components/item/OrderPropertyValue.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPropertyValue.vue?vue&type=template&id=96d26c70& */ "./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70&");
/* harmony import */ var _OrderPropertyValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderPropertyValue.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderPropertyValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/OrderPropertyValue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPropertyValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPropertyValue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPropertyValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPropertyValue.vue?vue&type=template&id=96d26c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/OrderPropertyValue.vue?vue&type=template&id=96d26c70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPropertyValue_vue_vue_type_template_id_96d26c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-33.js.map