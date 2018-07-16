webpackHotUpdate(4,{

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__ = __webpack_require__("./components/ChannelGrid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PodcastList__ = __webpack_require__("./components/PodcastList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__("./pages/_error.js");

var _jsxFileName = "C:\\projects\\curso-nextjs\\podcasts\\pages\\channel.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "openPodcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, podcast) {
        event.preventDefault();

        _this.setState({
          openPodcast: podcast
        });
      }
    });
    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audioClips = _props.audioClips,
          series = _props.series,
          statusCode = _props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__error__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        title: channel.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-2796159076"
      }, channel.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-2796159076" + " " + "banner"
      }), series.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-2796159076"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-2796159076"
      }, "Series"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ChannelGrid__["a" /* default */], {
        channels: series,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-2796159076"
      }, "Ultimos Podcasts"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PodcastList__["a" /* default */], {
        audioClips: audioClips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "4114734981",
        css: "header.jsx-2796159076{color:#fff;background:#8756ca;padding:15px;text-align:center;}.banner.jsx-2796159076{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}h1.jsx-2796159076{font-weight:600;padding:15px;}h2.jsx-2796159076{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGb0IsQUFHd0IsQUFPQSxBQU9LLEFBSUosV0FqQk8sQUFPQSxDQVdILElBSkgsWUFLRyxDQUpsQixDQWRlLEFBT2UsYUFOVixDQWtCVCxTQUNTLEtBWkksR0FOeEIsVUFtQkEsU0Fad0Isc0JBQ3hCIiwiZmlsZSI6InBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlUm9vdCI6IkM6XFxwcm9qZWN0c1xcY3Vyc28tbmV4dGpzXFxwb2RjYXN0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBDaGFubmVsR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5uZWxHcmlkJ1xyXG5pbXBvcnQgUG9kY2FzdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0TGlzdCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG9wZW5Qb2RjYXN0Om51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Qb2RjYXN0ID0gKGV2ZW50LCBwb2RjYXN0KT0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG9wZW5Qb2RjYXN0OiBwb2RjYXN0XHJcbiAgICB9KSAgICBcclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcywgcXVlcnkgfSl7XHJcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcclxuICAgICAgXSlcclxuXHJcbiAgICAgIGlmKCByZXFDaGFubmVsLnN0YXR1cyA+PSA0MDApe1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcclxuICAgICAgICByZXR1cm4geyBjaGFubmVsOm51bGwsIGF1ZGlvQ2xpcHM6bnVsbCwgc2VyaWVzOm51bGwsIHN0YXR1c0NvZGU6NDA0fVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXHJcbiAgICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXHJcbiAgICAgIFxyXG4gICAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKVxyXG4gICAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xyXG5cclxuICAgICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXHJcbiAgICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcclxuICAgICAgLypcclxuICAgICAgbGV0IHJlcUNoYW5uZWwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKVxyXG4gICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxyXG4gICAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxyXG4gICAgICBcclxuICAgICAgbGV0IHJlcUF1ZGlvID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcclxuICAgICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpby5qc29uKClcclxuICAgICAgbGV0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHNcclxuXHJcbiAgICAgIGxldCByZXFTZXJpZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxyXG4gICAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcclxuICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xyXG4gICAgICAqL1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlOjIwMCB9XHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXHJcbiAgICAgIHJldHVybiB7IGNoYW5uZWw6bnVsbCwgYXVkaW9DbGlwczpudWxsLCBzZXJpZXM6bnVsbCwgc3RhdHVzQ29kZTo1MDMgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IG9wZW5Qb2RjYXN0IH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgaWYoIHN0YXR1c0NvZGUhPT0gMjAwKXtcclxuICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfS8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPXsgY2hhbm5lbC50aXRsZSB9PlxyXG4gICAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XHJcbiAgICAgICAgeyBzZXJpZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcblxyXG4gICAgICAgICAgICA8Q2hhbm5lbEdyaWQgY2hhbm5lbHM9eyBzZXJpZXMgfS8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgICAgPFBvZGNhc3RMaXN0IGF1ZGlvQ2xpcHM9eyBhdWRpb0NsaXBzIH0vPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\channel.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1768601800",
        css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIeUIsQUFHb0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoicGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiQzpcXHByb2plY3RzXFxjdXJzby1uZXh0anNcXHBvZGNhc3RzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQnXHJcbmltcG9ydCBQb2RjYXN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BvZGNhc3RMaXN0JztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3BlblBvZGNhc3Q6bnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlblBvZGNhc3QgPSAoZXZlbnQsIHBvZGNhc3QpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgb3BlblBvZGNhc3Q6IHBvZGNhc3RcclxuICAgIH0pICAgIFxyXG4gIH1cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBxdWVyeSB9KXtcclxuICAgIGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxyXG5cclxuICAgIHRyeXtcclxuICAgICAgbGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKVxyXG4gICAgICBdKVxyXG5cclxuICAgICAgaWYoIHJlcUNoYW5uZWwuc3RhdHVzID49IDQwMCl7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xyXG4gICAgICAgIHJldHVybiB7IGNoYW5uZWw6bnVsbCwgYXVkaW9DbGlwczpudWxsLCBzZXJpZXM6bnVsbCwgc3RhdHVzQ29kZTo0MDR9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcclxuICAgICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcclxuICAgICAgXHJcbiAgICAgIGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW8uanNvbigpXHJcbiAgICAgIGxldCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXHJcblxyXG4gICAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcclxuICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xyXG4gICAgICAvKlxyXG4gICAgICBsZXQgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApXHJcbiAgICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXHJcbiAgICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXHJcbiAgICAgIFxyXG4gICAgICBsZXQgcmVxQXVkaW8gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKVxyXG4gICAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKVxyXG4gICAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xyXG5cclxuICAgICAgbGV0IHJlcVNlcmllcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApXHJcbiAgICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxyXG4gICAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzXHJcbiAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGU6MjAwIH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcclxuICAgICAgcmV0dXJuIHsgY2hhbm5lbDpudWxsLCBhdWRpb0NsaXBzOm51bGwsIHNlcmllczpudWxsLCBzdGF0dXNDb2RlOjUwMyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICBpZiggc3RhdHVzQ29kZSE9PSAyMDApe1xyXG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9Lz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9eyBjaGFubmVsLnRpdGxlIH0+XHJcbiAgICAgICAgPGgxPnsgY2hhbm5lbC50aXRsZSB9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cclxuICAgICAgICB7IHNlcmllcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+U2VyaWVzPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxDaGFubmVsR3JpZCBjaGFubmVscz17IHNlcmllcyB9Lz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3RzPC9oMj5cclxuICAgICAgICA8UG9kY2FzdExpc3QgYXVkaW9DbGlwcz17IGF1ZGlvQ2xpcHMgfS8+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\channel.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, query, idChannel, _ref2, _ref3, reqChannel, reqSeries, reqAudio, dataChannel, channel, dataAudios, audioClips, dataSeries, series;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res, query = _ref.query;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                reqChannel = _ref3[0];
                reqSeries = _ref3[1];
                reqAudio = _ref3[2];

                if (!(reqChannel.status >= 400)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = reqChannel.status;
                return _context.abrupt("return", {
                  channel: null,
                  audioClips: null,
                  series: null,
                  statusCode: 404
                });

              case 13:
                _context.next = 15;
                return reqChannel.json();

              case 15:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 19;
                return reqAudio.json();

              case 19:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 23;
                return reqSeries.json();

              case 23:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                /*
                let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
                let dataChannel = await reqChannel.json()
                let channel = dataChannel.body.channel
                
                let reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
                let dataAudios = await reqAudio.json()
                let audioClips = dataAudios.body.audio_clips
                  let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
                let dataSeries = await reqSeries.json()
                let series = dataSeries.body.channels
                */

                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  series: series,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channel: null,
                  audioClips: null,
                  series: null,
                  statusCode: 503
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.51b29c7bfeca92f0e9e8.hot-update.js.map