"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _placeholder = require('./common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointsDetail = function (_wepy$component) {
  _inherits(PointsDetail, _wepy$component);

  function PointsDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PointsDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PointsDetail.__proto__ || Object.getPrototypeOf(PointsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: [],
      is_empty: {
        default: false
      }
    }, _this.$repeat = {}, _this.$props = { "placeholder": { "xmlns:v-bind": "", "v-bind:show.sync": "is_empty", "message": "暂无积分数据" } }, _this.$events = {}, _this.components = {
      placeholder: _placeholder2.default
    }, _this.events = {
      // 'index-broadcast': (...args) => {
      //   let $event = args[args.length - 1]
      //   console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
      // }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PointsDetail, [{
    key: "onLoad",
    value: function onLoad() {
      // if (this.list.length == 0) {
      //   this.is_empty = true;
      //   this.$apply();

      // }
    }
  }]);

  return PointsDetail;
}(_wepy2.default.component);

exports.default = PointsDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50c19kZXRhaWwuanMiXSwibmFtZXMiOlsiUG9pbnRzRGV0YWlsIiwicHJvcHMiLCJsaXN0IiwiaXNfZW1wdHkiLCJkZWZhdWx0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGxhY2Vob2xkZXIiLCJQbGFjZWhvbGRlciIsImV2ZW50cyIsIm1ldGhvZHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU0sRUFEQTtBQUVOQyxnQkFBVTtBQUNSQyxpQkFBUztBQUREO0FBRkosSyxRQU1UQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVBQXRDLEVBQWlELFdBQVUsUUFBM0QsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxtQkFBYUM7QUFESCxLLFFBR1pDLE0sR0FBUztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBSk8sSyxRQU9UQyxPLEdBQVUsRTs7Ozs7NkJBSUQ7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDRDs7OztFQTlCdUNDLGVBQUtDLFM7O2tCQUExQmQsWSIsImZpbGUiOiJwb2ludHNfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludHNEZXRhaWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIGlzX2VtcHR5OiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicGxhY2Vob2xkZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOenr+WIhuaVsOaNrlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXG4gIH1cbiAgZXZlbnRzID0ge1xuICAgIC8vICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgIC8vICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgIC8vICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXG4gICAgLy8gfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIC8vIGlmICh0aGlzLmxpc3QubGVuZ3RoID09IDApIHtcbiAgICAvLyAgIHRoaXMuaXNfZW1wdHkgPSB0cnVlO1xuICAgIC8vICAgdGhpcy4kYXBwbHkoKTtcblxuICAgIC8vIH1cbiAgfVxufVxuXG4iXX0=