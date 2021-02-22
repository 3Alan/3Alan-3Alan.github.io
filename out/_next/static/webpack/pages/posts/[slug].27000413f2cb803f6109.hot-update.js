webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/navigator/index.js":
/*!***************************************!*\
  !*** ./components/navigator/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools */ \"./components/navigator/Tools.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ahooks */ \"./node_modules/ahooks/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/alan/Desktop/mygithub/3Alan.github.io/components/navigator/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction HomeIcon() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center pl-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__[\"IconContext\"].Provider, {\n    value: {\n      color: '#fbb01f'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"text-xl inline-block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaBasketballBall\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 29\n    }\n  }))), __jsx(\"span\", {\n    className: \"ml-3 text-xl text-gray-500 dark:text-gray-300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Alan\"))));\n}\n\n_c = HomeIcon;\n\nfunction NavItem(_ref) {\n  var name = _ref.name,\n      _ref$link = _ref.link,\n      link = _ref$link === void 0 ? '/' : _ref$link;\n  return __jsx(\"div\", {\n    className: \"px-4 font-semibold text-sm font-mono hover:text-blue-500  text-gray-500 dark:text-gray-300 dark:hover:text-blue-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, name)));\n}\n\n_c2 = NavItem;\n\nfunction NavList() {\n  return __jsx(\"div\", {\n    className: \"flex-1 flex items-center ml-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(NavItem, {\n    name: \"\\u5206\\u7C7B\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    name: \"\\u5F52\\u6863\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    name: \"\\u53CB\\u94FE\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    name: \"\\u7559\\u8A00\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    name: \"\\u5173\\u4E8E\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }));\n}\n\n_c3 = NavList;\nfunction Navigator() {\n  _s();\n\n  var scroll;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isFullPage = _useState[0],\n      setIsFullPage = _useState[1];\n\n  if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"CSR\"]) {\n    scroll = Object(ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"])(document);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"FULL_PAGE_LIST\"].includes(router.pathname)) {\n      console.log('hashshdfhds', isFullPage);\n      setIsFullPage(true);\n    }\n  }, [router]);\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(\"fixed transition-all bg-white hidden h-16 inset-0 z-50 dark:bg-dark-content\", {\n      'shadow-navigator': !isFullPage || scroll && scroll.top > 200,\n      'sm:flex': !isFullPage || scroll && scroll.top > 200\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-screen-lg mx-auto flex w-full justify-between items-center py-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(HomeIcon, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }), __jsx(NavList, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }), __jsx(_Tools__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Navigator, \"Hl8l6M36c14bautfYqpLy90tb78=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"]];\n});\n\n_c4 = Navigator;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HomeIcon\");\n$RefreshReg$(_c2, \"NavItem\");\n$RefreshReg$(_c3, \"NavList\");\n$RefreshReg$(_c4, \"Navigator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0b3IvaW5kZXguanM/NzYzMSJdLCJuYW1lcyI6WyJIb21lSWNvbiIsImNvbG9yIiwiTmF2SXRlbSIsIm5hbWUiLCJsaW5rIiwiTmF2TGlzdCIsIk5hdmlnYXRvciIsInNjcm9sbCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNGdWxsUGFnZSIsInNldElzRnVsbFBhZ2UiLCJDU1IiLCJ1c2VTY3JvbGwiLCJkb2N1bWVudCIsInVzZUVmZmVjdCIsIkZVTExfUEFHRV9MSVNUIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjbiIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNoQixTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosRUFNSTtBQUFNLGFBQVMsRUFBQywrQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHsgRmFCYXNrZXRiYWxsQmFsbCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9Ub29scyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRlVMTF9QQUdFX0xJU1QsIENTUiB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsIH0gZnJvbSAnYWhvb2tzJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuZnVuY3Rpb24gSG9tZUljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGwtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6ICcjZmJiMDFmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFCYXNrZXRiYWxsQmFsbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC14bCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPkFsYW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBOYXZJdGVtKHsgbmFtZSwgbGluayA9ICcvJyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBmb250LW1vbm8gaG92ZXI6dGV4dC1ibHVlLTUwMCAgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgICAgICAgICA8YT57bmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIE5hdkxpc3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIgbWwtMlwiPlxuICAgICAgICAgICAgPE5hdkl0ZW0gbmFtZT1cIuWIhuexu1wiIC8+XG4gICAgICAgICAgICA8TmF2SXRlbSBuYW1lPVwi5b2S5qGjXCIgLz5cbiAgICAgICAgICAgIDxOYXZJdGVtIG5hbWU9XCLlj4vpk75cIiAvPlxuICAgICAgICAgICAgPE5hdkl0ZW0gbmFtZT1cIueVmeiogFwiIC8+XG4gICAgICAgICAgICA8TmF2SXRlbSBuYW1lPVwi5YWz5LqOXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdG9yKCkge1xuICAgIGxldCBzY3JvbGw7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzRnVsbFBhZ2UsIHNldElzRnVsbFBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgaWYgKENTUikge1xuICAgICAgICBzY3JvbGwgPSB1c2VTY3JvbGwoZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChGVUxMX1BBR0VfTElTVC5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGFzaHNoZGZoZHMnLCBpc0Z1bGxQYWdlKTtcbiAgICAgICAgICAgIHNldElzRnVsbFBhZ2UodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKGBmaXhlZCB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZSBoaWRkZW4gaC0xNiBpbnNldC0wIHotNTAgZGFyazpiZy1kYXJrLWNvbnRlbnRgLCB7XG4gICAgICAgICAgICAgICAgJ3NoYWRvdy1uYXZpZ2F0b3InOiAhaXNGdWxsUGFnZSB8fCAoc2Nyb2xsICYmIHNjcm9sbC50b3AgPiAyMDApLFxuICAgICAgICAgICAgICAgICdzbTpmbGV4JzogIWlzRnVsbFBhZ2UgfHwgKHNjcm9sbCAmJiBzY3JvbGwudG9wID4gMjAwKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgPE5hdkxpc3QgLz5cbiAgICAgICAgICAgICAgICA8VG9vbHMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigator/index.js\n");

/***/ })

})