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

var _points_detail = require('./../components/points_detail.js');

var _points_detail2 = _interopRequireDefault(_points_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Points = function (_wepy$page) {
  _inherits(Points, _wepy$page);

  function Points() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Points);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Points.__proto__ || Object.getPrototypeOf(Points)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的积分'
    }, _this.$repeat = {}, _this.$props = { "pointsDetail": { "xmlns:v-bind": "", "v-bind:is_empty.sync": "is_empty", "v-bind:list.sync": "list" } }, _this.$events = {}, _this.components = {
      pointsDetail: _points_detail2.default
    }, _this.data = {
      winHeight: 0,
      list: [],
      is_empty: false,
      avatarUrl: "",
      nickName: "",
      userPoint: 0
    }, _this.events = {
      // 'index-broadcast': (...args) => {
      //   let $event = args[args.length - 1]
      //   console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
      // }
    }, _this.computed = {}, _this.methods = {
      more: function more() {
        _wepy2.default.navigateTo({
          url: '/pages/points_more'
        });
      },
      jfRule: function jfRule() {
        _wepy2.default.navigateTo({
          url: '/pages/points_rule'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Points, [{
    key: 'getUserPoint',
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
                return _api2.default.pointInfo({
                  query: {
                    openId: openId,
                    page: "1",
                    size: "10"
                  }
                });

              case 5:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.list = json.data.list;
                  this.userPoint = json.data.userPoint;
                  that.$apply();
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserPoint() {
        return _ref2.apply(this, arguments);
      }

      return getUserPoint;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      var userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
      that.winHeight = systemInfo.windowHeight;
      console.log("winHeight===", that.winHeight);
      that.getUserPoint();
      that.$apply();
    }
  }]);

  return Points;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Points , 'pages/points'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50cy5qcyJdLCJuYW1lcyI6WyJQb2ludHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicG9pbnRzRGV0YWlsIiwiUG9pbnRzRGV0YWlsIiwiZGF0YSIsIndpbkhlaWdodCIsImxpc3QiLCJpc19lbXB0eSIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwidXNlclBvaW50IiwiZXZlbnRzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwibW9yZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiamZSdWxlIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwicG9pbnRJbmZvIiwicXVlcnkiLCJwYWdlIiwic2l6ZSIsImpzb24iLCJjb2RlIiwiJGFwcGx5IiwidGlwIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsInN5c3RlbUluZm8iLCJTWVNURU1fSU5GTyIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwid2luZG93SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImdldFVzZXJQb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUtBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBcUQsb0JBQW1CLE1BQXhFLEVBQWhCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLG9CQUFjQztBQURKLEssUUFJWkMsSSxHQUFPO0FBQ0xDLGlCQUFXLENBRE47QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxnQkFBVSxFQUxMO0FBTUxDLGlCQUFXO0FBTk4sSyxRQTRCUEMsTSxHQUFTO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFKTyxLLFFBa0JUQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDRDtBQUNMQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFlBTlEsb0JBTUM7QUFDUEgsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFWTyxLLFFBWVZOLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7QUFwRERRLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkwsZUFBS00sY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7QUFDN0RDLHNCLEdBQVNILGdCQUFnQkksTTs7dUJBQ1ZDLGNBQUlDLFNBQUosQ0FBYztBQUMvQkMseUJBQU87QUFDTEosNEJBQVFBLE1BREg7QUFFTEssMEJBQUssR0FGQTtBQUdMQywwQkFBSztBQUhBO0FBRHdCLGlCQUFkLEM7OztBQUFiQyxvQjs7QUFPTixvQkFBSUEsS0FBSzFCLElBQUwsQ0FBVTJCLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkJaLHVCQUFLYixJQUFMLEdBQVl3QixLQUFLMUIsSUFBTCxDQUFVRSxJQUF0QjtBQUNBLHVCQUFLSSxTQUFMLEdBQWlCb0IsS0FBSzFCLElBQUwsQ0FBVU0sU0FBM0I7QUFDQVMsdUJBQUthLE1BQUw7QUFDRCxpQkFKRCxNQUlPO0FBQ0xDLHNCQUFJQyxLQUFKLENBQVVKLEtBQUsxQixJQUFMLENBQVUrQixHQUFwQjtBQUNEO0FBQ0RoQixxQkFBS2lCLFdBQUwsR0FBbUIsS0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFTSztBQUNQLFVBQUlqQixPQUFPLElBQVg7QUFDQSxVQUFJa0IsYUFBYXRCLGVBQUtNLGNBQUwsQ0FBb0JpQixxQkFBcEIsQ0FBakI7QUFDQSxVQUFJQyxXQUFXeEIsZUFBS00sY0FBTCxDQUFvQm1CLG1CQUFwQixDQUFmO0FBQ0FyQixXQUFLWCxTQUFMLEdBQWlCK0IsU0FBUy9CLFNBQTFCO0FBQ0FXLFdBQUtWLFFBQUwsR0FBZ0I4QixTQUFTOUIsUUFBekI7QUFDQVUsV0FBS2QsU0FBTCxHQUFpQmdDLFdBQVdJLFlBQTVCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTJCeEIsS0FBS2QsU0FBaEM7QUFDQWMsV0FBS3lCLFlBQUw7QUFDQXpCLFdBQUthLE1BQUw7QUFDRDs7OztFQXhEaUNqQixlQUFLYSxJOztrQkFBcEJqQyxNIiwiZmlsZSI6InBvaW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPLFxuICBVU0VSX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5pbXBvcnQgUG9pbnRzRGV0YWlsIGZyb20gJ0AvY29tcG9uZW50cy9wb2ludHNfZGV0YWlsJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTnp6/liIYnLFxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwb2ludHNEZXRhaWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzX2VtcHR5LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBwb2ludHNEZXRhaWw6IFBvaW50c0RldGFpbFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgbGlzdDogW10sXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIGF2YXRhclVybDogXCJcIixcbiAgICBuaWNrTmFtZTogXCJcIixcbiAgICB1c2VyUG9pbnQ6IDBcbiAgfVxuICBhc3luYyBnZXRVc2VyUG9pbnQoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLnBvaW50SW5mbyh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgICAgcGFnZTpcIjFcIixcbiAgICAgICAgICBzaXplOlwiMTBcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIHRoYXQubGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgICB0aGlzLnVzZXJQb2ludCA9IGpzb24uZGF0YS51c2VyUG9pbnQ7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgIH1cbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIGV2ZW50cyA9IHtcbiAgICAvLyAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAvLyAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAvLyAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPKTtcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTyk7XG4gICAgdGhhdC5hdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmw7XG4gICAgdGhhdC5uaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lO1xuICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgY29uc29sZS5sb2coXCJ3aW5IZWlnaHQ9PT1cIix0aGF0LndpbkhlaWdodCk7XG4gICAgdGhhdC5nZXRVc2VyUG9pbnQoKTtcbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBtb3JlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3BvaW50c19tb3JlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGpmUnVsZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9wb2ludHNfcnVsZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG59XG5cbiJdfQ==