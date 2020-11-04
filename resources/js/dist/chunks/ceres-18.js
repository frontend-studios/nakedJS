(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exceptions/ExceptionMap */ "./resources/js/src/app/exceptions/ExceptionMap.js");
/* harmony import */ var _services_TranslationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/TranslationService */ "./resources/js/src/app/services/TranslationService.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const NotificationService = __webpack_require__(/*! ../../services/NotificationService */ "./resources/js/src/app/services/NotificationService.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    template: {
      type: String,
      default: "#vue-coupon"
    }
  },

  data() {
    return {
      waiting: false,
      couponCode: ""
    };
  },

  watch: {
    redeemedCouponCode(val) {
      this.couponCode = val;
    }

  },
  computed: {
    disabled() {
      if (this.redeemedCouponCode) {
        return true;
      }

      return false;
    },

    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
      redeemedCouponCode: state => state.basket.data.couponCode,
      isBasketLoading: state => state.basket.isBasketLoading,
      isCheckoutReadonly: state => state.checkout.readOnly
    })
  },

  mounted() {
    this.$nextTick(() => {
      if (this.redeemedCouponCode) {
        this.couponCode = this.redeemedCouponCode;
      }
    });
  },

  methods: {
    redeemCode() {
      // remove whitespaces
      this.couponCode = this.couponCode.replace(/\s/g, "");

      if (this.couponCode.length > 0) {
        this.waiting = true;
        this.$store.dispatch("redeemCouponCode", this.couponCode).then(response => {
          this.waiting = false;
          NotificationService.success(_services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template.couponRedeemSuccess")).closeAfter(10000);
        }, error => {
          this.waiting = false;
          NotificationService.error(this.getCouponRedemptionErrorMessage(error)).closeAfter(10000);
        });
      } else {
        NotificationService.error(_services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template.couponIsEmpty")).closeAfter(10000);
      }
    },

    removeCode() {
      this.waiting = true;
      this.$store.dispatch("removeCouponCode", this.couponCode).then(response => {
        this.waiting = false;
        NotificationService.success(_services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template.couponRemoveSuccess")).closeAfter(10000);
      }, error => {
        this.waiting = false;
        NotificationService.error(_services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template.couponRemoveFailure")).closeAfter(10000);
      });
    },

    getCouponRedemptionErrorMessage(error) {
      const errorCode = error && error.warn && error.warn.code || 0;

      if (errorCode > 0 && _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_0__["default"].has(errorCode.toString())) {
        return _services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template." + _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_0__["default"].get(errorCode.toString()));
      }

      return _services_TranslationService__WEBPACK_IMPORTED_MODULE_1__["default"].translate("Ceres::Template.couponRedeemFailure");
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cmp" }, [
    _vm.isCheckoutReadonly &&
    !!_vm.$translate("Ceres::Template.couponReadonlyInfoText")
      ? _c("p", [
          _vm._v("\n        " + _vm._s(_vm.couponReadonlyInfoText) + "\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        class: {
          "input-group": true,
          "component-loading": _vm.isCheckoutReadonly,
          "is-loading": _vm.isCheckoutReadonly
        }
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.couponCode,
              expression: "couponCode"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: _vm.$translate("Ceres::Template.couponEnterCoupon"),
            disabled: _vm.disabled || _vm.isCheckoutReadonly
          },
          domProps: { value: _vm.couponCode },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.redeemCode()
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.couponCode = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn" }, [
          !_vm.disabled
            ? _c(
                "button",
                {
                  staticClass: "btn btn-medium btn-primary btn-appearance",
                  attrs: {
                    type: "button",
                    disabled: _vm.waiting || _vm.isCheckoutReadonly
                  },
                  on: {
                    click: function($event) {
                      return _vm.redeemCode()
                    }
                  }
                },
                [
                  _c("icon", { attrs: { icon: "gift", loading: _vm.waiting } }),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$translate("Ceres::Template.couponRedeem")) +
                      "\n            "
                  )
                ],
                1
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-medium btn-danger",
                  attrs: {
                    type: "button",
                    disabled: _vm.waiting || _vm.isCheckoutReadonly
                  },
                  on: {
                    click: function($event) {
                      return _vm.removeCode()
                    }
                  }
                },
                [
                  _c("icon", {
                    attrs: { icon: "trash", loading: _vm.waiting }
                  }),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$translate("Ceres::Template.couponRemove")) +
                      "\n            "
                  )
                ],
                1
              )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coupon.vue?vue&type=template&id=127bda26& */ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26&");
/* harmony import */ var _Coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coupon.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/basket/Coupon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Coupon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Coupon.vue?vue&type=template&id=127bda26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-18.js.map