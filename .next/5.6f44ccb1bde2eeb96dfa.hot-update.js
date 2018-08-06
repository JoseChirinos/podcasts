webpackHotUpdate(5,{

/***/ "./components/ChannelGrid.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\projects\\curso-nextjs\\podcasts\\components\\ChannelGrid.js: Unexpected token (21:22)\n\n  19 |             <Link \n  20 |               route=\"channel\"\n> 21 |               params={...params}\n     |                       ^\n  22 |               prefetch \n  23 |               key={channel.id}>\n  24 | \n    at _class.raise (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.unexpected (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2063:16)\n    at _class.parseExprAtom (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:3125:20)\n    at _class.parseExprAtom (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprSubscripts (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2725:21)\n    at _class.parseMaybeUnary (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2704:21)\n    at _class.parseExprOps (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2616:21)\n    at _class.parseMaybeConditional (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2588:21)\n    at _class.parseMaybeAssign (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2546:21)\n    at _class.parseExpression (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:2499:21)\n    at _class.jsxParseExpressionContainer (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:7950:32)\n    at _class.jsxParseAttributeValue (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:7912:23)\n    at _class.jsxParseAttribute (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:7968:46)\n    at _class.jsxParseOpeningElementAt (C:\\projects\\curso-nextjs\\podcasts\\node_modules\\babylon\\lib\\index.js:7984:35)");

/***/ }),

/***/ "./helpers/slug.js":
false,

/***/ "./node_modules/next-routes/dist/index.js":
false,

/***/ "./node_modules/next-routes/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/slugify/index.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__ = __webpack_require__("./components/ChannelGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_error__ = __webpack_require__("./node_modules/next/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_error__);

var _jsxFileName = "C:\\projects\\curso-nextjs\\podcasts\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channels = _props.channels,
          statusCode = _props.statusCode;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_error___default.a, {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        title: "Podcasts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__["default"], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, req, _ref2, channels;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.prev = 1;
                _context.next = 4;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 4:
                req = _context.sent;
                _context.next = 7;
                return req.json();

              case 7:
                _ref2 = _context.sent;
                channels = _ref2.body;
                return _context.abrupt("return", {
                  channels: channels,
                  statusCode: 200
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channels: null,
                  statusCode: 503
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes.js":
false

})
//# sourceMappingURL=5.6f44ccb1bde2eeb96dfa.hot-update.js.map