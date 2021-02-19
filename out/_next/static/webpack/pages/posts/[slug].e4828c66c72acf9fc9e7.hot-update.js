webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/navigator/index.js":
/*!***************************************!*\
  !*** ./components/navigator/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigator; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools */ \"./components/navigator/Tools.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ahooks */ \"./node_modules/ahooks/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/alan/Desktop/mygithub/3Alan.github.io/components/navigator/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction HomeIcon() {\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center pl-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__[\"IconContext\"].Provider, {\n    value: {\n      color: '#fbb01f'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"text-xl inline-block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaBasketballBall\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 29\n    }\n  }))), __jsx(\"span\", {\n    className: \"ml-3 text-xl text-gray-500 dark:text-gray-300\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Alan\"))));\n}\n\n_c = HomeIcon;\n\nfunction NavItem() {\n  return __jsx(\"div\", {\n    className: \"px-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"\\u5F52\\u6863\")));\n}\n\n_c2 = NavItem;\n\nfunction NavList() {\n  return __jsx(\"div\", {\n    className: \"flex-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(NavItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }), __jsx(NavItem, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }));\n}\n\n_c3 = NavList;\nfunction Navigator() {\n  _s();\n\n  var scroll;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      opacityvalue = _useState[0],\n      setOpacityvalue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isFullPage = _useState2[0],\n      setIsFullPage = _useState2[1];\n\n  if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"CSR\"]) {\n    scroll = Object(ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"])(document, function (val) {\n      return val.top < 300;\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_lib_constants__WEBPACK_IMPORTED_MODULE_6__[\"FULL_PAGE_LIST\"].includes(router.pathname)) {\n      setOpacityvalue(0);\n      setIsFullPage(true);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (isFullPage) {\n      setOpacityvalue(Math.floor(scroll.top / 20) * 10);\n      console.log(Math.floor(scroll.top / 20) * 10);\n    }\n  }, [scroll]);\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(\"fixed sm:flex bg-white hidden h-16 inset-0 overflow-hidden z-50 transition-colors bg-opacity-\".concat(opacityvalue, \" dark:bg-dark-content\"), {\n      'shadow-navigator': !isFullPage || opacityvalue > 50\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-screen-lg mx-auto flex w-full justify-between items-center py-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(HomeIcon, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }), __jsx(NavList, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }), __jsx(_Tools__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Navigator, \"9NzrWQx2V87P/EaVSq01ZYBVtDY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], ahooks__WEBPACK_IMPORTED_MODULE_7__[\"useScroll\"]];\n});\n\n_c4 = Navigator;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HomeIcon\");\n$RefreshReg$(_c2, \"NavItem\");\n$RefreshReg$(_c3, \"NavList\");\n$RefreshReg$(_c4, \"Navigator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0b3IvaW5kZXguanM/NzYzMSJdLCJuYW1lcyI6WyJIb21lSWNvbiIsImNvbG9yIiwiTmF2SXRlbSIsIk5hdkxpc3QiLCJOYXZpZ2F0b3IiLCJzY3JvbGwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9wYWNpdHl2YWx1ZSIsInNldE9wYWNpdHl2YWx1ZSIsImlzRnVsbFBhZ2UiLCJzZXRJc0Z1bGxQYWdlIiwiQ1NSIiwidXNlU2Nyb2xsIiwiZG9jdW1lbnQiLCJ2YWwiLCJ0b3AiLCJ1c2VFZmZlY3QiLCJGVUxMX1BBR0VfTElTVCIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJNYXRoIiwiZmxvb3IiLCJjb25zb2xlIiwibG9nIiwiY24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIsU0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBTUk7QUFBTSxhQUFTLEVBQUMs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bnQiOlsiaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XG5pbXBvcnQgeyBGYUJhc2tldGJhbGxCYWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBUb29scyBmcm9tICcuL1Rvb2xzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGVUxMX1BBR0VfTElTVCwgQ1NSIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdhaG9va3MnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiBIb21lSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvcjogJyNmYmIwMWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUJhc2tldGJhbGxCYWxsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+QWxhbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPuW9kuahozwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gTmF2TGlzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPE5hdkl0ZW0gLz5cbiAgICAgICAgICAgIDxOYXZJdGVtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRvcigpIHtcbiAgICBsZXQgc2Nyb2xsO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtvcGFjaXR5dmFsdWUsIHNldE9wYWNpdHl2YWx1ZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbaXNGdWxsUGFnZSwgc2V0SXNGdWxsUGFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBpZiAoQ1NSKSB7XG4gICAgICAgIHNjcm9sbCA9IHVzZVNjcm9sbChkb2N1bWVudCwgKHZhbCkgPT4gdmFsLnRvcCA8IDMwMCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKEZVTExfUEFHRV9MSVNULmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHNldE9wYWNpdHl2YWx1ZSgwKTtcbiAgICAgICAgICAgIHNldElzRnVsbFBhZ2UodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNGdWxsUGFnZSkge1xuICAgICAgICAgICAgc2V0T3BhY2l0eXZhbHVlKE1hdGguZmxvb3Ioc2Nyb2xsLnRvcCAvIDIwKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hdGguZmxvb3Ioc2Nyb2xsLnRvcCAvIDIwKSAqIDEwKTtcbiAgICAgICAgfVxuICAgIH0sIFtzY3JvbGxdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgYGZpeGVkIHNtOmZsZXggYmctd2hpdGUgaGlkZGVuIGgtMTYgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW4gei01MCB0cmFuc2l0aW9uLWNvbG9ycyBiZy1vcGFjaXR5LSR7b3BhY2l0eXZhbHVlfSBkYXJrOmJnLWRhcmstY29udGVudGAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnc2hhZG93LW5hdmlnYXRvcic6ICFpc0Z1bGxQYWdlIHx8IG9wYWNpdHl2YWx1ZSA+IDUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0byBmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8SG9tZUljb24gLz5cbiAgICAgICAgICAgICAgICA8TmF2TGlzdCAvPlxuICAgICAgICAgICAgICAgIDxUb29scyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigator/index.js\n");

/***/ })

})