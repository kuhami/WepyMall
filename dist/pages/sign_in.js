'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../utils/constant.js');

var _points_detail = require('./../components/points_detail.js');

var _points_detail2 = _interopRequireDefault(_points_detail);

var _points_rule = require('./../components/points_rule.js');

var _points_rule2 = _interopRequireDefault(_points_rule);

var _wepySignTime = require('./../components/common/wepy-sign-time.js');

var _wepySignTime2 = _interopRequireDefault(_wepySignTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_wepy$page) {
  _inherits(SignIn, _wepy$page);

  function SignIn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '签到有礼'
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" }, "pointsDetail": { "v-bind:is_empty.sync": "is_empty", "v-bind:list.sync": "signList" }, "pointsRule": {} }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      pointsDetail: _points_detail2.default,
      pointsRule: _points_rule2.default,
      wepySignTime: _wepySignTime2.default
    }, _this.data = {
      currentTab: 0,
      winHeight: 0,
      tabList: ["积分规则", "获得记录"],
      signed: false,
      score: 0,
      conDays: 0,
      signList: [],
      is_empty: false,
      signing: false
    }, _this.computed = {}, _this.methods = {
      getCurrentTab: function getCurrentTab(cur, evt) {
        var that = this;
        that.currentTab = cur;
        that.$apply();
      },

      /**
       * 滑动切换tab
       */
      bindChange: function bindChange(e) {
        var that = this;
        that.currentTab = e.detail.current;
        that.$apply();
      },
      sign: function sign() {
        var that = this;
        if (that.signed) {
          _tip2.default.alert("你今天已签过了!");
        } else {
          that.doSign();
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SignIn, [{
    key: 'getUserSign',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.userSginInfo({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.signed = json.data.hasSign;
                  that.conDays = json.data.conDays;
                  that.signList = json.data.list;
                  that.score = json.data.score;
                  console.log("jefe==", that.signList);
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserSign() {
        return _ref2.apply(this, arguments);
      }

      return getUserSign;
    }()
  }, {
    key: 'doSign',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;

                if (!that.signing) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return');

              case 3:
                that.signing = true;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 8;
                return _api2.default.doSign({
                  query: {
                    openId: openId
                  }
                });

              case 8:
                json = _context2.sent;

                if (json.data.code == 0) {
                  _tip2.default.success("恭喜获得10积分!", 3000);
                  that.signed = true;
                  that.conDays = that.conDays + 1;
                  that.siging = false;
                  this.getUserSign();
                  this.$invoke("wepySignTime", "refreshList", "");
                  that.$apply();
                } else {
                  _wepy2.default.showToast({
                    title: json.data.msg,
                    images: '../images/error.png',
                    duration: 5000
                  });
                }

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doSign() {
        return _ref3.apply(this, arguments);
      }

      return doSign;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      console.log("." + systemInfo.windowHeight);
      that.winHeight = systemInfo.windowHeight;
      that.getUserSign();
      that.$apply();
    }
  }]);

  return SignIn;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SignIn , 'pages/sign_in'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25faW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIlRhYiIsInBvaW50c0RldGFpbCIsIlBvaW50c0RldGFpbCIsInBvaW50c1J1bGUiLCJQb2ludHNSdWxlIiwid2VweVNpZ25UaW1lIiwiV2VweVNpZ25UaW1lIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJ3aW5IZWlnaHQiLCJ0YWJMaXN0Iiwic2lnbmVkIiwic2NvcmUiLCJjb25EYXlzIiwic2lnbkxpc3QiLCJpc19lbXB0eSIsInNpZ25pbmciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnZXRDdXJyZW50VGFiIiwiY3VyIiwiZXZ0IiwidGhhdCIsIiRhcHBseSIsImJpbmRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsInNpZ24iLCJ0aXAiLCJhbGVydCIsImRvU2lnbiIsImV2ZW50cyIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsInVzZXJTZ2luSW5mbyIsInF1ZXJ5IiwianNvbiIsImNvZGUiLCJoYXNTaWduIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1zZyIsInNob3dMb2FkaW5nIiwic3VjY2VzcyIsInNpZ2luZyIsImdldFVzZXJTaWduIiwiJGludm9rZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2VzIiwiZHVyYXRpb24iLCJzeXN0ZW1JbmZvIiwiU1lTVEVNX0lORk8iLCJ3aW5kb3dIZWlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7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VSx5QkFBTztBQUNMSiw0QkFBUUE7QUFESDtBQURxQixpQkFBWCxDOzs7QUFBYkssb0I7O0FBS04sb0JBQUlBLEtBQUtuQyxJQUFMLENBQVVvQyxJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCZCxnQ0FBSXNCLE9BQUosQ0FBWSxXQUFaLEVBQXlCLElBQXpCO0FBQ0E3Qix1QkFBS1gsTUFBTCxHQUFjLElBQWQ7QUFDQVcsdUJBQUtULE9BQUwsR0FBZVMsS0FBS1QsT0FBTCxHQUFlLENBQTlCO0FBQ0FTLHVCQUFLOEIsTUFBTCxHQUFjLEtBQWQ7QUFDQSx1QkFBS0MsV0FBTDtBQUNBLHVCQUFLQyxPQUFMLENBQWEsY0FBYixFQUE0QixhQUE1QixFQUEyQyxFQUEzQztBQUNBaEMsdUJBQUtDLE1BQUw7QUFDRCxpQkFSRCxNQVFPO0FBQ0xXLGlDQUFLcUIsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPZCxLQUFLbkMsSUFBTCxDQUFVMEMsR0FESjtBQUViUSw0QkFBUSxxQkFGSztBQUdiQyw4QkFBVTtBQUhHLG1CQUFmO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTTtBQUNQLFVBQUlwQyxPQUFPLElBQVg7QUFDQSxVQUFJcUMsYUFBYXpCLGVBQUtDLGNBQUwsQ0FBb0J5QixxQkFBcEIsQ0FBakI7QUFDQWQsY0FBUUMsR0FBUixDQUFZLE1BQU1ZLFdBQVdFLFlBQTdCO0FBQ0F2QyxXQUFLYixTQUFMLEdBQWlCa0QsV0FBV0UsWUFBNUI7QUFDQXZDLFdBQUsrQixXQUFMO0FBQ0EvQixXQUFLQyxNQUFMO0FBQ0Q7Ozs7RUFqRmlDVyxlQUFLNEIsSTs7a0JBQXBCdEUsTSIsImZpbGUiOiJzaWduX2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG4gIGltcG9ydCBUYWIgZnJvbSAnQC9jb21wb25lbnRzL3RhYidcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgaW1wb3J0IHtcbiAgICBTWVNURU1fSU5GTyxcbiAgICBVU0VSX1NQRUNJQ0FMX0lORk9cbiAgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbiAgaW1wb3J0IFBvaW50c0RldGFpbCBmcm9tICdAL2NvbXBvbmVudHMvcG9pbnRzX2RldGFpbCdcbiAgaW1wb3J0IFBvaW50c1J1bGUgZnJvbSAnQC9jb21wb25lbnRzL3BvaW50c19ydWxlJ1xuICBpbXBvcnQgV2VweVNpZ25UaW1lIGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vd2VweS1zaWduLXRpbWUnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnrb7liLDmnInnpLwnLFxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnRhYkxpc3Quc3luY1wiOlwidGFiTGlzdFwifSxcInBvaW50c0RldGFpbFwiOntcInYtYmluZDppc19lbXB0eS5zeW5jXCI6XCJpc19lbXB0eVwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwic2lnbkxpc3RcIn0sXCJwb2ludHNSdWxlXCI6e319O1xyXG4kZXZlbnRzID0ge1widGFiXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJnZXRDdXJyZW50VGFiXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB0YWI6IFRhYixcbiAgICAgIHBvaW50c0RldGFpbDogUG9pbnRzRGV0YWlsLFxuICAgICAgcG9pbnRzUnVsZTogUG9pbnRzUnVsZSxcbiAgICAgIHdlcHlTaWduVGltZTogV2VweVNpZ25UaW1lXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjdXJyZW50VGFiOiAwLFxuICAgICAgd2luSGVpZ2h0OiAwLFxuICAgICAgdGFiTGlzdDogW1wi56ev5YiG6KeE5YiZXCIsIFwi6I635b6X6K6w5b2VXCJdLFxuICAgICAgc2lnbmVkOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgY29uRGF5czogMCxcbiAgICAgIHNpZ25MaXN0OiBbXSxcbiAgICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICAgIHNpZ25pbmc6IGZhbHNlXG4gICAgfVxuICAgIGFzeW5jIGdldFVzZXJTaWduKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS51c2VyU2dpbkluZm8oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgdGhhdC5zaWduZWQgPSBqc29uLmRhdGEuaGFzU2lnbjtcbiAgICAgICAgdGhhdC5jb25EYXlzID0ganNvbi5kYXRhLmNvbkRheXM7XG4gICAgICAgIHRoYXQuc2lnbkxpc3QgPSBqc29uLmRhdGEubGlzdDtcbiAgICAgICAgdGhhdC5zY29yZSA9IGpzb24uZGF0YS5zY29yZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJqZWZlPT1cIiwgdGhhdC5zaWduTGlzdCk7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgIH1cbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgYXN5bmMgZG9TaWduKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYgKHRoYXQuc2lnbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGF0LnNpZ25pbmcgPSB0cnVlO1xuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5kb1NpZ24oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgdGlwLnN1Y2Nlc3MoXCLmga3llpzojrflvpcxMOenr+WIhiFcIiwgMzAwMCk7XG4gICAgICAgIHRoYXQuc2lnbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhhdC5jb25EYXlzID0gdGhhdC5jb25EYXlzICsgMTtcbiAgICAgICAgdGhhdC5zaWdpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nZXRVc2VyU2lnbigpO1xuICAgICAgICB0aGlzLiRpbnZva2UoXCJ3ZXB5U2lnblRpbWVcIixcInJlZnJlc2hMaXN0XCIsIFwiXCIpO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBqc29uLmRhdGEubXNnLFxuICAgICAgICAgIGltYWdlczogJy4uL2ltYWdlcy9lcnJvci5wbmcnLFxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTyk7XG4gICAgICBjb25zb2xlLmxvZyhcIi5cIiArIHN5c3RlbUluZm8ud2luZG93SGVpZ2h0KTtcbiAgICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgICB0aGF0LmdldFVzZXJTaWduKCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH1cbiAgICBjb21wdXRlZCA9IHt9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdldEN1cnJlbnRUYWIoY3VyLCBldnQpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGF0LmN1cnJlbnRUYWIgPSBjdXI7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDmu5HliqjliIfmjaJ0YWJcbiAgICAgICAqL1xuICAgICAgYmluZENoYW5nZShlKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH0sXG4gICAgICBzaWduKCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGF0LnNpZ25lZCkge1xuICAgICAgICAgIHRpcC5hbGVydChcIuS9oOS7iuWkqeW3suetvui/h+S6hiFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5kb1NpZ24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7fVxuICB9XG4iXX0=