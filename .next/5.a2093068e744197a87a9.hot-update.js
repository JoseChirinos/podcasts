webpackHotUpdate(5,{

/***/ "./components/ChannelGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__("./helpers/slug.js");
var _jsxFileName = "C:\\projects\\curso-nextjs\\podcasts\\components\\ChannelGrid.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Link from 'next/link'



var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelGrid, _React$Component);

  function ChannelGrid() {
    _classCallCheck(this, ChannelGrid);

    return _possibleConstructorReturn(this, (ChannelGrid.__proto__ || Object.getPrototypeOf(ChannelGrid)).apply(this, arguments));
  }

  _createClass(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      var params = {
        slug: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(channel.title),
        id: channel.id
      };
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-3817236673" + " " + "channels"
      }, channels.map(function (channel) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
          route: "channel",
          params: params,
          prefetch: true,
          key: channel.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-3817236673" + " " + "linker"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-3817236673" + " " + "channel"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-3817236673"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          className: "jsx-3817236673"
        }, channel.title)));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3817236673",
        css: ".channels.jsx-3817236673{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr) );}.linker.jsx-3817236673{cursor:pointer;}.channel.jsx-3817236673{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;height:197px;overflow:hidden;}.channel.jsx-3817236673 img.jsx-3817236673{width:197px;height:197px;}h2.jsx-3817236673{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHMEIsQUFNRSxBQUdGLEFBUUQsQUFLQSxZQUpDLEFBS0csQ0F0QkYsQ0FTSSxDQUhwQixVQWFBLEVBbEJlLENBc0JFLElBYnlCLFFBUnFCLElBc0JyRCxTQUNVLGtCQUNwQixDQWZzQixvQkFDUixPQVRkLE1BVWlCLGdCQUNqQiIsImZpbGUiOiJjb21wb25lbnRzXFxDaGFubmVsR3JpZC5qcyIsInNvdXJjZVJvb3QiOiJDOlxccHJvamVjdHNcXGN1cnNvLW5leHRqc1xccG9kY2FzdHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICByZW5kZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLFxyXG4gICAgICBpZDogY2hhbm5lbC5pZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5uZWxzLm1hcCggKGNoYW5uZWwpPT4oXHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXHJcbiAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XHJcbiAgICAgICAgICAgICAgcHJlZmV0Y2ggXHJcbiAgICAgICAgICAgICAga2V5PXtjaGFubmVsLmlkfT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxoMj57IGNoYW5uZWwudGl0bGUgfTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY2hhbm5lbHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbmtlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoYW5uZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTk3cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOTdweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOTdweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components\\ChannelGrid.js */"
      }));
    }
  }]);

  return ChannelGrid;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.a2093068e744197a87a9.hot-update.js.map