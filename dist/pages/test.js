'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exchangeGoods = function (_wepy$page) {
  _inherits(exchangeGoods, _wepy$page);

  function exchangeGoods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, exchangeGoods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = exchangeGoods.__proto__ || Object.getPrototypeOf(exchangeGoods)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '组件测试'
    }, _this.data = {
      list: [],
      aways: 0
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(exchangeGoods, [{
    key: 'onLoad',
    value: function onLoad() {
      var arry = {
        days: [{
          is_sign: true
        }, {
          is_sign: false
        }, {
          is_sign: false
        }, {
          is_sign: false
        }, {
          is_sign: false
        }, {
          is_sign: false
        }, {
          is_sign: false
        }],
        aways: 3
        // this.list = arry;
      };console.log(arry);
      this.list = arry.days;
      this.aways = arry.aways;
    }
  }]);

  return exchangeGoods;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(exchangeGoods , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZXhjaGFuZ2VHb29kcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImF3YXlzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiYXJyeSIsImRheXMiLCJpc19zaWduIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU87QUFGRixLLFFBbUNQQyxRLEdBQVcsRSxRQUNYQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRTs7Ozs7NkJBakNBO0FBQ1AsVUFBSUMsT0FBTztBQUNUQyxjQUFNLENBQUM7QUFDSEMsbUJBQVM7QUFETixTQUFELEVBR0o7QUFDRUEsbUJBQVM7QUFEWCxTQUhJLEVBTUo7QUFDRUEsbUJBQVM7QUFEWCxTQU5JLEVBU0o7QUFDRUEsbUJBQVM7QUFEWCxTQVRJLEVBWUo7QUFDRUEsbUJBQVM7QUFEWCxTQVpJLEVBZUo7QUFDRUEsbUJBQVM7QUFEWCxTQWZJLEVBa0JKO0FBQ0VBLG1CQUFTO0FBRFgsU0FsQkksQ0FERztBQXVCVE4sZUFBTztBQUVUO0FBekJXLE9BQVgsQ0EwQkFPLFFBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLFdBQUtMLElBQUwsR0FBWUssS0FBS0MsSUFBakI7QUFDQSxXQUFLTCxLQUFMLEdBQWFJLEtBQUtKLEtBQWxCO0FBQ0Q7Ozs7RUF0Q3dDUyxlQUFLQyxJOztrQkFBM0JmLGEiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhjaGFuZ2VHb29kcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7hOS7tua1i+ivlScsXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGF3YXlzOiAwXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBhcnJ5ID0ge1xuICAgICAgICBkYXlzOiBbe1xuICAgICAgICAgICAgaXNfc2lnbjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNfc2lnbjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzX3NpZ246IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc19zaWduOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNfc2lnbjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzX3NpZ246IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc19zaWduOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXdheXM6IDNcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMubGlzdCA9IGFycnk7XG4gICAgICBjb25zb2xlLmxvZyhhcnJ5KVxuICAgICAgdGhpcy5saXN0ID0gYXJyeS5kYXlzO1xuICAgICAgdGhpcy5hd2F5cyA9IGFycnkuYXdheXM7XG4gICAgfVxuICAgIGNvbXB1dGVkID0ge31cbiAgICBtZXRob2RzID0ge31cbiAgICBldmVudHMgPSB7fVxuICB9XG4iXX0=