'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../../utils/constant.js');

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WepySignTime = function (_wepy$component) {
  _inherits(WepySignTime, _wepy$component);

  function WepySignTime() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WepySignTime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WepySignTime.__proto__ || Object.getPrototypeOf(WepySignTime)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [],
      aways: 0
      // arry : {
      //   days: [],
      //   aways: 0
      // }
    }, _this.methods = {
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list[this.list.length - 1].signed = true;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WepySignTime, [{
    key: 'getSignDate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("getSignDate");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 6;
                return _api2.default.getSignDate({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.list = json.data.list;
                  console.log("console.log(this.list);");
                  console.log(this.list);
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                this.$apply();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSignDate() {
        return _ref2.apply(this, arguments);
      }

      return getSignDate;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getSignDate();
      // let arry = {
      //   days: [],
      //   aways: 0
      // }
      // this.list = arry;
      // console.log(this.arry)
      // this.list = this.arry.days;
      // this.aways = this.arry.aways;
    }
  }]);

  return WepySignTime;
}(_wepy2.default.component);

exports.default = WepySignTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktc2lnbi10aW1lLmpzIl0sIm5hbWVzIjpbIldlcHlTaWduVGltZSIsImRhdGEiLCJsaXN0IiwiYXdheXMiLCJtZXRob2RzIiwicmVmcmVzaExpc3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2lnbmVkIiwiJGFwcGx5IiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsImdldFNpZ25EYXRlIiwicXVlcnkiLCJqc29uIiwiY29kZSIsInRpcCIsImVycm9yIiwibXNnIiwic2hvd0xvYWRpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7SUFFdUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxhQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFOSyxLLFFBeUNQQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLEdBREosRUFDUTtBQUNkLFlBQUlBLE9BQUtDLFNBQVQsRUFBb0I7QUFDcEJDLGdCQUFRQyxHQUFSLENBQVksVUFBWixFQUF1QkgsR0FBdkI7QUFDQSxhQUFLSixJQUFMLENBQVUsS0FBS0EsSUFBTCxDQUFVUSxNQUFWLEdBQWlCLENBQTNCLEVBQThCQyxNQUE5QixHQUF1QyxJQUF2QztBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQU5PLEs7Ozs7Ozs7Ozs7OztBQS9CUkosd0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0lJLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkMsZUFBS0MsY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7QUFDN0RDLHNCLEdBQVNKLGdCQUFnQkssTTs7dUJBQ1ZDLGNBQUlDLFdBQUosQ0FBZ0I7QUFDakNDLHlCQUFPO0FBQ0xKLDRCQUFRQTtBQURIO0FBRDBCLGlCQUFoQixDOzs7QUFBYkssb0I7O0FBS04sb0JBQUlBLEtBQUt0QixJQUFMLENBQVV1QixJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHVCQUFLdEIsSUFBTCxHQUFZcUIsS0FBS3RCLElBQUwsQ0FBVUMsSUFBdEI7QUFDQU0sMEJBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBRCwwQkFBUUMsR0FBUixDQUFZLEtBQUtQLElBQWpCO0FBQ0QsaUJBSkQsTUFJTztBQUNMdUIsZ0NBQUlDLEtBQUosQ0FBVUgsS0FBS3RCLElBQUwsQ0FBVTBCLEdBQXBCO0FBQ0Q7QUFDRGQscUJBQUtlLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxxQkFBS2hCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFdBQUtTLFdBQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF6Q3VDTixlQUFLYyxTOztrQkFBMUI3QixZIiwiZmlsZSI6IndlcHktc2lnbi10aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VweVNpZ25UaW1lIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGF3YXlzOiAwXG4gICAgICAvLyBhcnJ5IDoge1xuICAgICAgLy8gICBkYXlzOiBbXSxcbiAgICAgIC8vICAgYXdheXM6IDBcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRTaWduRGF0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0U2lnbkRhdGVcIik7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFNpZ25EYXRlKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnNvbGUubG9nKHRoaXMubGlzdCk7XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgICB9XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5nZXRTaWduRGF0ZSgpO1xuICAgICAgLy8gbGV0IGFycnkgPSB7XG4gICAgICAvLyAgIGRheXM6IFtdLFxuICAgICAgLy8gICBhd2F5czogMFxuICAgICAgLy8gfVxuICAgICAgLy8gdGhpcy5saXN0ID0gYXJyeTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJyeSlcbiAgICAgIC8vIHRoaXMubGlzdCA9IHRoaXMuYXJyeS5kYXlzO1xuICAgICAgLy8gdGhpcy5hd2F5cyA9IHRoaXMuYXJyeS5hd2F5cztcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHJlZnJlc2hMaXN0KHZhbCl7XG4gICAgICAgIGlmICh2YWw9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbC4uLi4uXCIsdmFsKTtcbiAgICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGgtMV0uc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgfVxuICB9XG4iXX0=