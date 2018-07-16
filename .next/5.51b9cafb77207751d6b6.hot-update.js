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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-3817236673" + " " + "channels"
      }, channels.map(function (channel) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
          route: "channel",
          params: {
            slug: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_slug__["a" /* default */])(channel.title),
            id: channel.id
          },
          prefetch: true,
          key: channel.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          className: "jsx-3817236673" + " " + "linker"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-3817236673" + " " + "channel"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-3817236673"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-3817236673"
        }, channel.title)));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3817236673",
        css: ".channels.jsx-3817236673{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr) );}.linker.jsx-3817236673{cursor:pointer;}.channel.jsx-3817236673{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;height:197px;overflow:hidden;}.channel.jsx-3817236673 img.jsx-3817236673{width:197px;height:197px;}h2.jsx-3817236673{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENoYW5uZWxHcmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDb0IsQUFHMEIsQUFNRSxBQUdGLEFBUUQsQUFLQSxZQUpDLEFBS0csQ0F0QkYsQ0FTSSxDQUhwQixVQWFBLEVBbEJlLENBc0JFLElBYnlCLFFBUnFCLElBc0JyRCxTQUNVLGtCQUNwQixDQWZzQixvQkFDUixPQVRkLE1BVWlCLGdCQUNqQiIsImZpbGUiOiJjb21wb25lbnRzXFxDaGFubmVsR3JpZC5qcyIsInNvdXJjZVJvb3QiOiJDOlxccHJvamVjdHNcXGN1cnNvLW5leHRqc1xccG9kY2FzdHMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICByZW5kZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5uZWxzLm1hcCggKGNoYW5uZWwpPT4oXHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXHJcbiAgICAgICAgICAgICAgcGFyYW1zPXt7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGNoYW5uZWwuaWRcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHByZWZldGNoIFxyXG4gICAgICAgICAgICAgIGtleT17Y2hhbm5lbC5pZH0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNoYW5uZWxze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5rZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGFubmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OjE5N3B4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTk3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTk3cHg7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\ChannelGrid.js */"
      }));
    }
  }]);

  return ChannelGrid;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./helpers/slug.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = slug;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slugify__);

function slug(name) {
  return __WEBPACK_IMPORTED_MODULE_0_slugify___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),

/***/ "./node_modules/slugify/index.js":
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
    define(factory)
  }
  else {
    root[name] = factory()
  }
}('slugify', this, function () {
  /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .replace(/^\s+|\s+$/g, '')
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')
      // remove trailing separator
      .replace('#{replacement}$', '')

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ })

})
//# sourceMappingURL=5.51b9cafb77207751d6b6.hot-update.js.map