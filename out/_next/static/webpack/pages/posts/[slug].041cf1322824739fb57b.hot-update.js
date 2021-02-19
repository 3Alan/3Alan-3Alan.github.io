webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/navigator/index.js":
/*!***************************************!*\
  !*** ./components/navigator/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools */ \"./components/navigator/Tools.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ahooks */ \"./node_modules/ahooks/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/alan/Desktop/mygithub/3Alan.github.io/components/navigator/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction HomeIcon() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center pl-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__[\"IconContext\"].Provider, {\n    value: {\n      color: '#fbb01f'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"text-xl inline-block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaBasketballBall\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 29\n    }\n  }))), __jsx(\"span\", {\n    className: \"ml-3 text-xl text-gray-500 dark:text-gray-300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Alan\"))));\n}\n\n_c = HomeIcon;\n\nfunction NavItem(_ref) {\n  var name = _ref.name,\n      link = _ref.link;\n  return __jsx(\"div\", {\n    className: \"px-4 text-sm font-mono text-gray-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, name)));\n}\n\n_c2 = NavItem;\n\nfunction NavList() {\n  return __jsx(\"div\", {\n    className: \"flex-1 flex items-center ml-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(NavItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }));\n}\n\n_c3 = NavList;\nfunction Navigator() {\n  _s();\n\n  var scroll;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      opacityvalue = _useState[0],\n      setOpacityvalue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isFullPage = _useState2[0],\n      setIsFullPage = _useState2[1];\n\n  if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"CSR\"]) {\n    scroll = Object(ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"])(document, function (val) {\n      return val.top < 300;\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"FULL_PAGE_LIST\"].includes(router.pathname)) {\n      setOpacityvalue(0);\n      setIsFullPage(true);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isFullPage) {\n      setOpacityvalue(Math.floor(scroll.top / 20) * 10);\n      console.log(Math.floor(scroll.top / 20) * 10);\n    }\n  }, [scroll]);\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(\"fixed sm:flex bg-white hidden h-16 inset-0 overflow-hidden z-50 transition-colors bg-opacity-\".concat(opacityvalue, \" dark:bg-dark-content\"), {\n      'shadow-navigator': !isFullPage || opacityvalue > 50\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-screen-lg mx-auto flex w-full justify-between items-center py-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(HomeIcon, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }), __jsx(NavList, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }), __jsx(_Tools__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Navigator, \"9NzrWQx2V87P/EaVSq01ZYBVtDY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"]];\n});\n\n_c4 = Navigator;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HomeIcon\");\n$RefreshReg$(_c2, \"NavItem\");\n$RefreshReg$(_c3, \"NavList\");\n$RefreshReg$(_c4, \"Navigator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0b3IvaW5kZXguanM/NzYzMSJdLCJuYW1lcyI6WyJIb21lSWNvbiIsImNvbG9yIiwiTmF2SXRlbSIsIm5hbWUiLCJsaW5rIiwiTmF2TGlzdCIsIk5hdmlnYXRvciIsInNjcm9sbCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwib3BhY2l0eXZhbHVlIiwic2V0T3BhY2l0eXZhbHVlIiwiaXNGdWxsUGFnZSIsInNldElzRnVsbFBhZ2UiLCJDU1IiLCJ1c2VTY3JvbGwiLCJkb2N1bWVudCIsInZhbCIsInRvcCIsInVzZUVmZmVjdCIsIkZVTExfUEFHRV9MSVNUIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIk1hdGgiLCJmbG9vciIsImNvbnNvbGUiLCJsb2ciLCJjbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNoQixTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosRUFNSTtB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LHFELEVBS0ZPLGdEOzs7TUFQT1YsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2aWdhdG9yL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBGYUJhc2tldGJhbGxCYWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBUb29scyBmcm9tICcuL1Rvb2xzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGVUxMX1BBR0VfTElTVCwgQ1NSIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdhaG9va3MnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiBIb21lSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogJyNmYmIwMWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUJhc2tldGJhbGxCYWxsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+QWxhbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oe25hbWUsIGxpbmt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHRleHQtc20gZm9udC1tb25vIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+e25hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBOYXZMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIG1sLTJcIj5cbiAgICAgICAgICAgIDxOYXZJdGVtIC8+XG4gICAgICAgICAgICA8TmF2SXRlbSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0b3IoKSB7XG4gICAgbGV0IHNjcm9sbDtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbb3BhY2l0eXZhbHVlLCBzZXRPcGFjaXR5dmFsdWVdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2lzRnVsbFBhZ2UsIHNldElzRnVsbFBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgaWYgKENTUikge1xuICAgICAgICBzY3JvbGwgPSB1c2VTY3JvbGwoZG9jdW1lbnQsICh2YWwpID0+IHZhbC50b3AgPCAzMDApO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChGVUxMX1BBR0VfTElTVC5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBzZXRPcGFjaXR5dmFsdWUoMCk7XG4gICAgICAgICAgICBzZXRJc0Z1bGxQYWdlKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzRnVsbFBhZ2UpIHtcbiAgICAgICAgICAgIHNldE9wYWNpdHl2YWx1ZShNYXRoLmZsb29yKHNjcm9sbC50b3AgLyAyMCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKHNjcm9sbC50b3AgLyAyMCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICB9LCBbc2Nyb2xsXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIGBmaXhlZCBzbTpmbGV4IGJnLXdoaXRlIGhpZGRlbiBoLTE2IGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIHotNTAgdHJhbnNpdGlvbi1jb2xvcnMgYmctb3BhY2l0eS0ke29wYWNpdHl2YWx1ZX0gZGFyazpiZy1kYXJrLWNvbnRlbnRgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ3NoYWRvdy1uYXZpZ2F0b3InOiAhaXNGdWxsUGFnZSB8fCBvcGFjaXR5dmFsdWUgPiA1MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgPE5hdkxpc3QgLz5cbiAgICAgICAgICAgICAgICA8VG9vbHMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigator/index.js\n");

/***/ })

})