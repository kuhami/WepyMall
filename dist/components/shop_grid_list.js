'use strict';

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

var ShopGridList = function (_wepy$component) {
  _inherits(ShopGridList, _wepy$component);

  function ShopGridList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopGridList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopGridList.__proto__ || Object.getPrototypeOf(ShopGridList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: [],
      purchasetype: {
        default: 1 //类型:1-商品订单;2-商品补单;
      },
      special: {
        default: 0 //0-正常入库;1-特价专区和换货专区
      },
      showTitle: {
        default: true
      }
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopGridList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ShopGridList;
}(_wepy2.default.component);

exports.default = ShopGridList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfZ3JpZF9saXN0LmpzIl0sIm5hbWVzIjpbIlNob3BHcmlkTGlzdCIsInByb3BzIiwibGlzdCIsInB1cmNoYXNldHlwZSIsImRlZmF1bHQiLCJzcGVjaWFsIiwic2hvd1RpdGxlIiwiZXZlbnRzIiwibWV0aG9kcyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU0sRUFEQTtBQUVOQyxvQkFBYztBQUNaQyxpQkFBUyxDQURHLENBQ0E7QUFEQSxPQUZSO0FBS05DLGVBQVE7QUFDTkQsaUJBQVMsQ0FESCxDQUNLO0FBREwsT0FMRjtBQVFORSxpQkFBVTtBQUNSRixpQkFBUTtBQURBO0FBUkosSyxRQWFSRyxNLEdBQVMsRSxRQUlUQyxPLEdBQVUsRTs7Ozs7NkJBSUQsQ0FFUjs7OztFQXhCdUNDLGVBQUtDLFM7O2tCQUExQlYsWSIsImZpbGUiOiJzaG9wX2dyaWRfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEdyaWRMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBwdXJjaGFzZXR5cGU6IHtcbiAgICAgIGRlZmF1bHQ6IDEgIC8v57G75Z6LOjEt5ZWG5ZOB6K6i5Y2VOzIt5ZWG5ZOB6KGl5Y2VO1xuICAgIH0sXG4gICAgc3BlY2lhbDp7XG4gICAgICBkZWZhdWx0OiAwIC8vMC3mraPluLjlhaXlupM7MS3nibnku7fkuJPljLrlkozmjaLotKfkuJPljLpcbiAgICB9LFxuICAgIHNob3dUaXRsZTp7XG4gICAgICBkZWZhdWx0OnRydWVcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICB9XG59XG5cbiJdfQ==