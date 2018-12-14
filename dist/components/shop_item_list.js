'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopItemList = function (_wepy$component) {
  _inherits(ShopItemList, _wepy$component);

  function ShopItemList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopItemList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopItemList.__proto__ || Object.getPrototypeOf(ShopItemList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      goodsList: {
        default: []
      },
      list: []
    }, _this.events = {
      // 'index-broadcast': (...args) => {
      //   let $event = args[args.length - 1]
      //   console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
      // }
    }, _this.methods = {
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list = val;
        this.$apply();
      },
      refund: function refund(e) {
        var itemId = e.currentTarget.dataset.id;
        var that = this;
        wx.showModal({
          title: '提示',
          content: '确定要退货吗?',
          success: function success(res) {
            if (res.confirm) {
              that.applyRefund(itemId);
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopItemList, [{
    key: 'applyRefund',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(itemId) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 4;
                return _api2.default.refundApply({
                  query: {
                    openId: openId,
                    orderItemId: itemId
                  }
                });

              case 4:
                json = _context.sent;

                if (json.data.code == 0) {
                  wx.showModal({
                    title: '提示',
                    content: '你的退货申请已提交,等待审批!',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {} else if (res.cancel) {}
                    }
                  });
                } else {
                  _tip2.default.error(json.data.msg);
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function applyRefund(_x) {
        return _ref2.apply(this, arguments);
      }

      return applyRefund;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.list = [];
      console.log("加载list============");
      console.log(this.list);
    }
  }]);

  return ShopItemList;
}(_wepy2.default.component);

exports.default = ShopItemList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfaXRlbV9saXN0LmpzIl0sIm5hbWVzIjpbIlNob3BJdGVtTGlzdCIsInByb3BzIiwiZ29vZHNMaXN0IiwiZGVmYXVsdCIsImxpc3QiLCJldmVudHMiLCJtZXRob2RzIiwicmVmcmVzaExpc3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicmVmdW5kIiwiZSIsIml0ZW1JZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJ0aGF0Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImFwcGx5UmVmdW5kIiwiY2FuY2VsIiwidXNlclNwZWNpYWxJbmZvIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwicmVmdW5kQXBwbHkiLCJxdWVyeSIsIm9yZGVySXRlbUlkIiwianNvbiIsImRhdGEiLCJjb2RlIiwic2hvd0NhbmNlbCIsInRpcCIsImVycm9yIiwibXNnIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBS3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxpQkFBUztBQURBLE9BREw7QUFJTkMsWUFBSztBQUpDLEssUUFPUkMsTSxHQUFTO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFKTyxLLFFBaUNUQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLEdBREosRUFDUTtBQUNkLFlBQUlBLE9BQUtDLFNBQVQsRUFBb0I7QUFDcEJDLGdCQUFRQyxHQUFSLENBQVksVUFBWixFQUF1QkgsR0FBdkI7QUFDQSxhQUFLSixJQUFMLEdBQVlJLEdBQVo7QUFDQSxhQUFLSSxNQUFMO0FBQ0QsT0FOTztBQU9SQyxZQVBRLGtCQU9EQyxDQVBDLEVBT0U7QUFDUixZQUFJQyxTQUFTRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsRUFBckM7QUFDQSxZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLElBREk7QUFFWEMsbUJBQVMsU0FGRTtBQUdYQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQSxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZQLG1CQUFLUSxXQUFMLENBQWlCWixNQUFqQjtBQUNELGFBRkQsTUFFTyxJQUFJVSxJQUFJRyxNQUFSLEVBQWdCO0FBQ3JCbEIsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVRVLFNBQWI7QUFXRDtBQXJCTyxLOzs7Ozs7MkZBMUJRSSxNOzs7Ozs7QUFDWmMsK0IsR0FBa0JDLGVBQUtDLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFO0FBQzdEQyxzQixHQUFTSixnQkFBZ0JLLE07O3VCQUVWQyxjQUFJQyxXQUFKLENBQWdCO0FBQ2pDQyx5QkFBTTtBQUNKSiw0QkFBUUEsTUFESjtBQUVKSyxpQ0FBYXZCO0FBRlQ7QUFEMkIsaUJBQWhCLEM7OztBQUFid0Isb0I7O0FBTU4sb0JBQUlBLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixJQUFnQixDQUFwQixFQUF1QjtBQUNyQnJCLHFCQUFHQyxTQUFILENBQWE7QUFDWEMsMkJBQU8sSUFESTtBQUVYQyw2QkFBUyxpQkFGRTtBQUdYbUIsZ0NBQVksS0FIRDtBQUlYbEIsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwwQkFBSUEsSUFBSUMsT0FBUixFQUFpQixDQUNoQixDQURELE1BQ08sSUFBSUQsSUFBSUcsTUFBUixFQUFnQixDQUN0QjtBQUNGO0FBUlUsbUJBQWI7QUFVRCxpQkFYRCxNQVdPO0FBQ0xlLGdDQUFJQyxLQUFKLENBQVVMLEtBQUtDLElBQUwsQ0FBVUssR0FBcEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJCTTtBQUNQLFdBQUt6QyxJQUFMLEdBQVUsRUFBVjtBQUNBTSxjQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLEtBQUtQLElBQWpCO0FBQ0Q7Ozs7RUFyRXVDMEIsZUFBS2dCLFM7O2tCQUExQjlDLFkiLCJmaWxlIjoic2hvcF9pdGVtX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BJdGVtTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgZ29vZHNMaXN0OiB7XG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH0sXG4gICAgbGlzdDpbXVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgIC8vICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgIC8vICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgIC8vICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXG4gICAgLy8gfVxuICB9XG5cbiAgYXN5bmMgYXBwbHlSZWZ1bmQoaXRlbUlkKSB7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucmVmdW5kQXBwbHkoe1xuICAgICAgcXVlcnk6e1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgb3JkZXJJdGVtSWQ6IGl0ZW1JZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZT09MCkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5L2g55qE6YCA6LSn55Sz6K+35bey5o+Q5LqkLOetieW+heWuoeaJuSEnLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICByZWZyZXNoTGlzdCh2YWwpe1xuICAgICAgaWYgKHZhbD09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgICBjb25zb2xlLmxvZyhcInZhbC4uLi4uXCIsdmFsKTtcbiAgICAgIHRoaXMubGlzdCA9IHZhbDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICByZWZ1bmQoZSkge1xuICAgICAgbGV0IGl0ZW1JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn56Gu5a6a6KaB6YCA6LSn5ZCXPycsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhhdC5hcHBseVJlZnVuZChpdGVtSWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5saXN0PVtdO1xuICAgIGNvbnNvbGUubG9nKFwi5Yqg6L29bGlzdD09PT09PT09PT09PVwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpXG4gIH1cbn1cblxuIl19