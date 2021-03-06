'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我'
    }, _this.components = {}, _this.data = {
      avatarUrl: "",
      nickName: "",
      bShowBind: false //判断是否绑定手机号
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(phone, code) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};

                console.log(userSpecialInfo);
                openId = userSpecialInfo.openid;
                _context.next = 6;
                return _api2.default.getUserInfo({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context.sent;

                console.log(json);
                if (json.data.code == 0) {
                  if (json.data.user && json.data.user.mobile.length > 0) {
                    this.bShowBind = false;
                  } else {
                    this.bShowBind = true;
                  }
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      this.getUserInfo();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImJTaG93QmluZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBob25lIiwiY29kZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJjb25zb2xlIiwibG9nIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwiZ2V0VXNlckluZm8iLCJxdWVyeSIsImpzb24iLCJ1c2VyIiwibW9iaWxlIiwibGVuZ3RoIiwiJGFwcGx5IiwidGlwIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxpQkFBVSxLQUhMLENBR1c7QUFIWCxLLFFBdUNQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7OzJGQXhDU0MsSyxFQUFNQyxJOzs7Ozs7QUFDbEJDLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkMsZUFBS0MsY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7O0FBQ2pFQyx3QkFBUUMsR0FBUixDQUFZTCxlQUFaO0FBQ0lNLHNCLEdBQVNOLGdCQUFnQk8sTTs7dUJBQ1ZDLGNBQUlDLFdBQUosQ0FBZ0I7QUFDakNDLHlCQUFPO0FBQ0xKLDRCQUFRQTtBQURIO0FBRDBCLGlCQUFoQixDOzs7QUFBYkssb0I7O0FBS05QLHdCQUFRQyxHQUFSLENBQVlNLElBQVo7QUFDQSxvQkFBSUEsS0FBS3JCLElBQUwsQ0FBVVEsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixzQkFBSWEsS0FBS3JCLElBQUwsQ0FBVXNCLElBQVYsSUFBZ0JELEtBQUtyQixJQUFMLENBQVVzQixJQUFWLENBQWVDLE1BQWYsQ0FBc0JDLE1BQXRCLEdBQTZCLENBQWpELEVBQW9EO0FBQ2xELHlCQUFLckIsU0FBTCxHQUFlLEtBQWY7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNETSx1QkFBS2dCLE1BQUw7QUFDRCxpQkFQRCxNQU9PO0FBQ0xDLGdDQUFJQyxLQUFKLENBQVVOLEtBQUtyQixJQUFMLENBQVU0QixHQUFwQjtBQUNEO0FBQ0RuQixxQkFBS29CLFdBQUwsR0FBbUIsS0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFVBQUlwQixPQUFPLElBQVg7QUFDQSxVQUFJcUIsV0FBV25CLGVBQUtDLGNBQUwsQ0FBb0JtQixtQkFBcEIsQ0FBZjtBQUNBdEIsV0FBS1IsU0FBTCxHQUFpQjZCLFNBQVM3QixTQUExQjtBQUNBUSxXQUFLUCxRQUFMLEdBQWdCNEIsU0FBUzVCLFFBQXpCO0FBQ0Q7Ozs2QkFDTztBQUNOLFVBQUlPLE9BQU8sSUFBWDtBQUNBLFdBQUtVLFdBQUw7QUFDRDs7OztFQTlDZ0NSLGVBQUtxQixJOztrQkFBbkJwQyxLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCB7XG4gIFVTRVJfSU5GTyxVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiRJyxcbiAgfVxuICBjb21wb25lbnRzID0ge1xuXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGF2YXRhclVybDogXCJcIixcbiAgICBuaWNrTmFtZTogXCJcIixcbiAgICBiU2hvd0JpbmQ6ZmFsc2UsLy/liKTmlq3mmK/lkKbnu5HlrprmiYvmnLrlj7dcbiAgfVxuICBhc3luYyBnZXRVc2VySW5mbyhwaG9uZSxjb2RlKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgY29uc29sZS5sb2codXNlclNwZWNpYWxJbmZvKVxuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBpZiAoanNvbi5kYXRhLnVzZXImJmpzb24uZGF0YS51c2VyLm1vYmlsZS5sZW5ndGg+MCkge1xuICAgICAgICB0aGlzLmJTaG93QmluZD1mYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYlNob3dCaW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKTtcbiAgICB0aGF0LmF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcbiAgICB0aGF0Lm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XG4gIH1cbiAgb25TaG93KCl7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxufVxuXG4iXX0=