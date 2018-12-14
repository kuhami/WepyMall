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

var Authorize = function (_wepy$page) {
  _inherits(Authorize, _wepy$page);

  function Authorize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Authorize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Authorize.__proto__ || Object.getPrototypeOf(Authorize)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '授权登录'
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Authorize, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, userInfo, data, _res, systemInfo, rlt, _data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getSetting();

              case 2:
                res = _context.sent;

                if (!res.authSetting['scope.userInfo']) {
                  _context.next = 21;
                  break;
                }

                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);

                if (userInfo.nickName) {
                  _context.next = 20;
                  break;
                }

                _context.next = 8;
                return _wepy2.default.getUserInfo();

              case 8:
                data = _context.sent;

                if (data) {
                  _wepy2.default.setStorageSync(_constant.USER_INFO, data.userInfo);
                }
                _context.next = 12;
                return _wepy2.default.login();

              case 12:
                _res = _context.sent;

                if (!_res.code) {
                  _context.next = 20;
                  break;
                }

                systemInfo = _wepy2.default.getSystemInfoSync();

                _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, systemInfo);
                _context.next = 18;
                return _api2.default.wxJsCode2Session({
                  query: {
                    jsCode: _res.code,
                    nickName: data.userInfo.nickName
                  }
                });

              case 18:
                rlt = _context.sent;

                if (rlt.data.result) {
                  _data = rlt.data;

                  if (_data.data.openid) {
                    _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, _data.data);
                  }
                }

              case 20:
                _wepy2.default.switchTab({
                  url: '/pages/home'
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onGotUserInfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        var res, systemInfo, rlt, data, _res2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(e.detail.errMsg == 'getUserInfo:ok')) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 3;
                return _wepy2.default.login();

              case 3:
                res = _context2.sent;

                if (!res.code) {
                  _context2.next = 20;
                  break;
                }

                _wepy2.default.setStorageSync(_constant.USER_INFO, e.detail.userInfo);
                systemInfo = _wepy2.default.getSystemInfoSync();

                _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, systemInfo);
                _context2.next = 10;
                return _api2.default.wxJsCode2Session({
                  query: {
                    jsCode: res.code,
                    nickName: e.detail.userInfo.nickName
                  }
                });

              case 10:
                rlt = _context2.sent;

                if (!rlt.data.result) {
                  _context2.next = 16;
                  break;
                }

                data = rlt.data;

                if (data.data.openid) {
                  _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, data.data);
                  _wepy2.default.switchTab({
                    url: '/pages/home'
                  });
                }
                _context2.next = 20;
                break;

              case 16:
                _context2.next = 18;
                return _wepy2.default.showModal({
                  title: 'appid有误',
                  content: '授权失败'
                });

              case 18:
                _res2 = _context2.sent;

                if (_res2.confirm) {
                  _wepy2.default.switchTab({
                    url: '/pages/home'
                  });
                }

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onGotUserInfo(_x) {
        return _ref3.apply(this, arguments);
      }

      return onGotUserInfo;
    }()
  }]);

  return Authorize;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Authorize , 'pages/authorize'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS5qcyJdLCJuYW1lcyI6WyJBdXRob3JpemUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJ1c2VySW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9JTkZPIiwibmlja05hbWUiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJzZXRTdG9yYWdlU3luYyIsImxvZ2luIiwiY29kZSIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlNZU1RFTV9JTkZPIiwiYXBpIiwid3hKc0NvZGUyU2Vzc2lvbiIsInF1ZXJ5IiwianNDb2RlIiwicmx0IiwicmVzdWx0Iiwib3BlbmlkIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwic3dpdGNoVGFiIiwidXJsIiwiZSIsImRldGFpbCIsImVyck1zZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUtxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUF1RVRDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7Ozt1QkF0RVNDLGVBQUtDLFVBQUwsRTs7O0FBQVpDLG1COztxQkFDQ0EsSUFBSUMsV0FBTCxDQUFrQixnQkFBbEIsQzs7Ozs7QUFDRUMsd0IsR0FBV0osZUFBS0ssY0FBTCxDQUFvQkMsbUJBQXBCLEM7O29CQUNWRixTQUFTRyxROzs7Ozs7dUJBQ01QLGVBQUtRLFdBQUwsRTs7O0FBQWRDLG9COztBQUNKLG9CQUFJQSxJQUFKLEVBQVU7QUFDUlQsaUNBQUtVLGNBQUwsQ0FBb0JKLG1CQUFwQixFQUErQkcsS0FBS0wsUUFBcEM7QUFDRDs7dUJBQ2VKLGVBQUtXLEtBQUwsRTs7O0FBQVpULG9COztxQkFDQUEsS0FBSVUsSTs7Ozs7QUFDRkMsMEIsR0FBYWIsZUFBS2MsaUJBQUwsRTs7QUFDakJkLCtCQUFLVSxjQUFMLENBQW9CSyxxQkFBcEIsRUFBaUNGLFVBQWpDOzt1QkFDZ0JHLGNBQUlDLGdCQUFKLENBQXFCO0FBQ25DQyx5QkFBTztBQUNMQyw0QkFBUWpCLEtBQUlVLElBRFA7QUFFTEwsOEJBQVVFLEtBQUtMLFFBQUwsQ0FBY0c7QUFGbkI7QUFENEIsaUJBQXJCLEM7OztBQUFaYSxtQjs7QUFNSixvQkFBSUEsSUFBSVgsSUFBSixDQUFTWSxNQUFiLEVBQXFCO0FBQ2ZaLHVCQURlLEdBQ1JXLElBQUlYLElBREk7O0FBRW5CLHNCQUFJQSxNQUFLQSxJQUFMLENBQVVhLE1BQWQsRUFBc0I7QUFDcEJ0QixtQ0FBS1UsY0FBTCxDQUFvQmEsNEJBQXBCLEVBQXdDZCxNQUFLQSxJQUE3QztBQUNEO0FBQ0Y7OztBQUdMVCwrQkFBS3dCLFNBQUwsQ0FBZTtBQUNiQyx1QkFBSztBQURRLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUtnQkMsQzs7Ozs7OztzQkFDZEEsRUFBRUMsTUFBRixDQUFTQyxNQUFULElBQW1CLGdCOzs7Ozs7dUJBQ0w1QixlQUFLVyxLQUFMLEU7OztBQUFaVCxtQjs7cUJBQ0FBLElBQUlVLEk7Ozs7O0FBQ05aLCtCQUFLVSxjQUFMLENBQW9CSixtQkFBcEIsRUFBK0JvQixFQUFFQyxNQUFGLENBQVN2QixRQUF4QztBQUNJUywwQixHQUFhYixlQUFLYyxpQkFBTCxFOztBQUNqQmQsK0JBQUtVLGNBQUwsQ0FBb0JLLHFCQUFwQixFQUFpQ0YsVUFBakM7O3VCQUNnQkcsY0FBSUMsZ0JBQUosQ0FBcUI7QUFDbkNDLHlCQUFPO0FBQ0xDLDRCQUFRakIsSUFBSVUsSUFEUDtBQUVMTCw4QkFBVW1CLEVBQUVDLE1BQUYsQ0FBU3ZCLFFBQVQsQ0FBa0JHO0FBRnZCO0FBRDRCLGlCQUFyQixDOzs7QUFBWmEsbUI7O3FCQU1BQSxJQUFJWCxJQUFKLENBQVNZLE07Ozs7O0FBQ1BaLG9CLEdBQU9XLElBQUlYLEk7O0FBQ2Ysb0JBQUlBLEtBQUtBLElBQUwsQ0FBVWEsTUFBZCxFQUFzQjtBQUNwQnRCLGlDQUFLVSxjQUFMLENBQW9CYSw0QkFBcEIsRUFBd0NkLEtBQUtBLElBQTdDO0FBQ0FULGlDQUFLd0IsU0FBTCxDQUFlO0FBQ2JDLHlCQUFLO0FBRFEsbUJBQWY7QUFHRDs7Ozs7O3VCQUVlekIsZUFBSzZCLFNBQUwsQ0FBZTtBQUM3QkMseUJBQU8sU0FEc0I7QUFFN0JDLDJCQUFTO0FBRm9CLGlCQUFmLEM7OztBQUFaN0IscUI7O0FBSUosb0JBQUlBLE1BQUk4QixPQUFSLEVBQWlCO0FBQ2ZoQyxpQ0FBS3dCLFNBQUwsQ0FBZTtBQUNiQyx5QkFBSztBQURRLG1CQUFmO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRTRCekIsZUFBS2lDLEk7O2tCQUF2QnRDLFMiLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIFVTRVJfSU5GT1xufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o6I5p2D55m75b2VJyxcbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7IFxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFNldHRpbmcoKVxuICAgIGlmICgocmVzLmF1dGhTZXR0aW5nKVsnc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0lORk8pXG4gICAgICBpZiAoIXVzZXJJbmZvLm5pY2tOYW1lKSB7XG4gICAgICAgIGxldCBkYXRhICA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPLCBkYXRhLnVzZXJJbmZvKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTywgc3lzdGVtSW5mbyk7XG4gICAgICAgICAgbGV0IHJsdCA9IGF3YWl0IGFwaS53eEpzQ29kZTJTZXNzaW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGpzQ29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgIG5pY2tOYW1lOiBkYXRhLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAocmx0LmRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJsdC5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5vcGVuaWQpIHtcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8sIGRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy9ob21lJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Hb3RVc2VySW5mbyhlKSB7XG4gICAgaWYgKGUuZGV0YWlsLmVyck1zZyA9PSAnZ2V0VXNlckluZm86b2snKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpO1xuICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPLCBlLmRldGFpbC51c2VySW5mbyk7XG4gICAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPLCBzeXN0ZW1JbmZvKTtcbiAgICAgICAgbGV0IHJsdCA9IGF3YWl0IGFwaS53eEpzQ29kZTJTZXNzaW9uKHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAganNDb2RlOiByZXMuY29kZSxcbiAgICAgICAgICAgIG5pY2tOYW1lOiBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJsdC5kYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGxldCBkYXRhID0gcmx0LmRhdGE7XG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5vcGVuaWQpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPLCBkYXRhLmRhdGEpO1xuICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaG9tZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ2FwcGlk5pyJ6K+vJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmjojmnYPlpLHotKUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2hvbWUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG1ldGhvZHMgPSB7XG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxufVxuIl19