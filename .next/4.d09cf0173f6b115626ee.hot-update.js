webpackHotUpdate(4,{

/***/ "./components/PodcastPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_slug__ = __webpack_require__("./helpers/slug.js");
var _jsxFileName = "C:\\projects\\curso-nextjs\\podcasts\\components\\PodcastPlayer.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    _classCallCheck(this, PodcastPlayer);

    return _possibleConstructorReturn(this, (PodcastPlayer.__proto__ || Object.getPrototypeOf(PodcastPlayer)).apply(this, arguments));
  }

  _createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          clip = _props.clip,
          onClose = _props.onClose;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-588420483" + " " + 'clip'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-588420483"
      }, onClose ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-588420483" + " " + 'close'
      }, "< Volver") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "channel",
        params: {
          slug: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(channel.title),
          id: channel.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-588420483" + " " + 'close'
      }, "< Volver"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-588420483"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-588420483"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-588420483" + " " + 'player'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-588420483"
      }, clip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-588420483"
      }, clip.channel.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-588420483"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-588420483"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "588420483",
        css: "nav.jsx-588420483{background:none;}nav.jsx-588420483 a.jsx-588420483{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-588420483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-588420483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-588420483 div.jsx-588420483{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-588420483{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-588420483{margin:0;}h6.jsx-588420483{margin:0;margin-top:1em;}audio.jsx-588420483{margin-top:2em;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NzQixBQUcrQixBQUdLLEFBT1IsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sU0FOakIsQUFHaUIsRUFmSCxFQU9lLEVBWWhCLENBN0NiLEtBR2UsRUF3QmUsQ0FlOUIsRUFJQSxRQTFDYyxNQThCTSxNQTdCSCxLQXVCUyxPQU8xQixHQTdCdUIsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ4QixRQXZCQSxxREFLcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzXFxQb2RjYXN0UGxheWVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxwcm9qZWN0c1xcY3Vyc28tbmV4dGpzXFxwb2RjYXN0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXHJcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7IGNsaXAsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpcCc+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgb25DbG9zZSA/XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjbG9zZScgb25DbGljaz17IG9uQ2xvc2UgfT4mbHQ7IFZvbHZlcjwvYT5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM9e3tcclxuICAgICAgICAgICAgICAgICAgc2x1Zzogc2x1ZyhjaGFubmVsLnRpdGxlKSxcclxuICAgICAgICAgICAgICAgICAgaWQ6IGNoYW5uZWwuaWRcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjbG9zZSc+XHJcbiAgICAgICAgICAgICAgICAgICZsdDsgVm9sdmVyXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbGlwLnVybHMuaW1hZ2UgfHwgY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxyXG4gICAgICAgICAgICA8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxyXG4gICAgICAgICAgICA8aDY+eyBjbGlwLmNoYW5uZWwudGl0bGUgfTwvaDY+XHJcbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cclxuICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaWN0dXJlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpY3R1cmUgZGl2IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxheWVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdWRpbyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components\\PodcastPlayer.js */"
      }));
    }
  }]);

  return PodcastPlayer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.d09cf0173f6b115626ee.hot-update.js.map