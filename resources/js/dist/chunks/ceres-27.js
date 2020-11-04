(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "graduated-prices",
  props: {
    paddingClasses: {
      type: String
    },
    paddingInlineStyles: {
      type: String
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    graduatedPrices() {
      const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
      let prices = currentVariation && currentVariation.prices.graduatedPrices;
      const minQuantity = currentVariation && currentVariation.variation.minimumOrderQuantity;
      prices = prices.filter(price => price.minimumOrderQuantity > minQuantity);
      return [...prices].sort((priceA, priceB) => {
        return priceA.minimumOrderQuantity - priceB.minimumOrderQuantity;
      });
    },

    activeGraduationIndex() {
      const prices = this.graduatedPrices.filter(price => this.variationOrderQuantity >= price.minimumOrderQuantity);

      if (!prices.length) {
        return -1;
      }

      const price = prices.reduce((prev, current) => prev.minimumOrderQuantity > current.minimumOrderQuantity ? prev : current);
      return this.graduatedPrices.indexOf(price);
    },

    variationOrderQuantity() {
      return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variationOrderQuantity;
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm.graduatedPrices[0]
    ? _c("div", [
        _c("b", [
          _vm._v(
            _vm._s(
              _vm.$translate("Ceres::Template.singleItemGraduatedPrices")
            ) + ":"
          )
        ]),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "graduated-prices-table text-muted" },
          _vm._l(_vm.graduatedPrices, function(price, index) {
            return _c("tr", [
              _c(
                "td",
                { class: _vm.paddingClasses, style: _vm.paddingInlineStyles },
                [
                  _vm._v(
                    _vm._s(
                      _vm.$translate(
                        "Ceres::Template.singleItemMinimumQuantity"
                      )
                    ) +
                      " " +
                      _vm._s(price.minimumOrderQuantity)
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "td",
                { class: _vm.paddingClasses, style: _vm.paddingInlineStyles },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(price.unitPrice.formatted) +
                      "\n                "
                  ),
                  _c("transition", { attrs: { name: "fade" } }, [
                    index === _vm.activeGraduationIndex
                      ? _c("i", {
                          staticClass:
                            "fa fa-lg fa-check-circle-o ml-1 text-appearance",
                          attrs: { "aria-hidden": "true" }
                        })
                      : _vm._e()
                  ])
                ],
                1
              )
            ])
          }),
          0
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraduatedPrices.vue?vue&type=template&id=0fc0278e& */ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e&");
/* harmony import */ var _GraduatedPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraduatedPrices.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GraduatedPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/GraduatedPrices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraduatedPrices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraduatedPrices.vue?vue&type=template&id=0fc0278e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-27.js.map