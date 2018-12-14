"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bombScreen = function (_wepy$component) {
  _inherits(bombScreen, _wepy$component);

  function bombScreen() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, bombScreen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bombScreen.__proto__ || Object.getPrototypeOf(bombScreen)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
      show: {
        default: false
      },
      types: {
        default: 0
      }
    }, _this.events = {}, _this.methods = {
      close: function close() {
        this.show = false;
        this.$emit("close");
      },
      callback: function callback() {
        this.$emit("callback");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(bombScreen, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return bombScreen;
}(_wepy2.default.component);

exports.default = bombScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbWJfc2NyZWVuLmpzIl0sIm5hbWVzIjpbImJvbWJTY3JlZW4iLCJkYXRhIiwicHJvcHMiLCJzaG93IiwiZGVmYXVsdCIsInR5cGVzIiwiZXZlbnRzIiwibWV0aG9kcyIsImNsb3NlIiwiJGVtaXQiLCJjYWxsYmFjayIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSSxHQUFPLEUsUUFHUEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsaUJBQVM7QUFETCxPQURBO0FBSU5DLGFBQU87QUFDTEQsaUJBQVM7QUFESjtBQUpELEssUUFRUkUsTSxHQUFTLEUsUUFHVEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixhQUFLTCxJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtNLEtBQUwsQ0FBVyxPQUFYO0FBQ0QsT0FKTztBQUtSQyxjQUxRLHNCQUtHO0FBQ1QsYUFBS0QsS0FBTCxDQUFXLFVBQVg7QUFDRDtBQVBPLEs7Ozs7OzZCQVVELENBRVI7Ozs7RUEzQnFDRSxlQUFLQyxTOztrQkFBeEJaLFUiLCJmaWxlIjoiYm9tYl9zY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9tYlNjcmVlbiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcblxuICB9XG4gIHByb3BzID0ge1xuICAgIHNob3c6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0eXBlczoge1xuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xvc2VcIilcbiAgICB9LFxuICAgIGNhbGxiYWNrKCkge1xuICAgICAgdGhpcy4kZW1pdChcImNhbGxiYWNrXCIpXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn1cblxuIl19