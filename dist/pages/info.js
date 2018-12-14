'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

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
      bShowBind: true //判断是否绑定手机号
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
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.getUserInfo({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;

                console.log(json);
                if (json.data.code == 0) {
                  if (json.data.user.mobile.length > 0) {
                    this.bShowBind = false;
                  } else {
                    this.bShowBind = true;
                  }
                  that.$apply();
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 9:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImJTaG93QmluZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBob25lIiwiY29kZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJnZXRVc2VySW5mbyIsInF1ZXJ5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibW9iaWxlIiwibGVuZ3RoIiwiJGFwcGx5IiwidGlwIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsaUJBQVUsSUFITCxDQUdVO0FBSFYsSyxRQXNDUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzsyRkF2Q1NDLEssRUFBTUMsSTs7Ozs7O0FBQ2xCQyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0JDLGVBQUtDLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFO0FBQzdEQyxzQixHQUFTSixnQkFBZ0JLLE07O3VCQUNWQyxjQUFJQyxXQUFKLENBQWdCO0FBQ2pDQyx5QkFBTztBQUNMSiw0QkFBUUE7QUFESDtBQUQwQixpQkFBaEIsQzs7O0FBQWJLLG9COztBQUtOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Esb0JBQUlBLEtBQUtuQixJQUFMLENBQVVRLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsc0JBQUlXLEtBQUtuQixJQUFMLENBQVVzQixJQUFWLENBQWVDLE1BQWYsQ0FBc0JDLE1BQXRCLEdBQTZCLENBQWpDLEVBQW9DO0FBQ2xDLHlCQUFLckIsU0FBTCxHQUFlLEtBQWY7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNETSx1QkFBS2dCLE1BQUw7QUFDRCxpQkFQRCxNQU9PO0FBQ0xDLHNCQUFJQyxLQUFKLENBQVVSLEtBQUtuQixJQUFMLENBQVU0QixHQUFwQjtBQUNEO0FBQ0RuQixxQkFBS29CLFdBQUwsR0FBbUIsS0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFVBQUlwQixPQUFPLElBQVg7QUFDQSxVQUFJcUIsV0FBV25CLGVBQUtDLGNBQUwsQ0FBb0JtQixtQkFBcEIsQ0FBZjtBQUNBdEIsV0FBS1IsU0FBTCxHQUFpQjZCLFNBQVM3QixTQUExQjtBQUNBUSxXQUFLUCxRQUFMLEdBQWdCNEIsU0FBUzVCLFFBQXpCO0FBQ0Q7Ozs2QkFDTztBQUNOLFVBQUlPLE9BQU8sSUFBWDtBQUNBLFdBQUtRLFdBQUw7QUFDRDs7OztFQTdDZ0NOLGVBQUtxQixJOztrQkFBbkJwQyxLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IHtcbiAgVVNFUl9JTkZPLFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJEnLFxuICB9XG4gIGNvbXBvbmVudHMgPSB7XG5cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYXZhdGFyVXJsOiBcIlwiLFxuICAgIG5pY2tOYW1lOiBcIlwiLFxuICAgIGJTaG93QmluZDp0cnVlLC8v5Yik5pat5piv5ZCm57uR5a6a5omL5py65Y+3XG4gIH1cbiAgYXN5bmMgZ2V0VXNlckluZm8ocGhvbmUsY29kZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBpZiAoanNvbi5kYXRhLnVzZXIubW9iaWxlLmxlbmd0aD4wKSB7XG4gICAgICAgIHRoaXMuYlNob3dCaW5kPWZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iU2hvd0JpbmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0lORk8pO1xuICAgIHRoYXQuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xuICAgIHRoYXQubmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcbiAgfVxuICBvblNob3coKXtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcblxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG59XG5cbiJdfQ==