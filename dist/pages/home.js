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

var _discover = require('./../components/discover.js');

var _discover2 = _interopRequireDefault(_discover);

var _bomb_screen = require('./../components/bomb_screen.js');

var _bomb_screen2 = _interopRequireDefault(_bomb_screen);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '演示商城'
    }, _this.$repeat = {}, _this.$props = { "discover": { "xmlns:v-bind": "", "v-bind:list.sync": "discoverList" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" }, "bombscreen": { "v-bind:types.sync": "tps", "v-bind:show.sync": "is_show_alert", "xmlns:v-on": "" } }, _this.$events = { "bombscreen": { "v-on:close": "closeAlert", "v-on:callback": "alertCallback" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff",
      discoverList: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //广告列表
      adList: [],
      tps: 0,
      is_show_alert: false
    }, _this.computed = {}, _this.methods = {
      goToAdvert: function goToAdvert(url) {
        console.log("url===" + url);
        if (url.length == 0) {
          return;
        }
        _wepy2.default.navigateTo({
          url: url
        });
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '素洁服装厂',
          path: '/pages/home',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      alertCallback: function alertCallback() {
        _tip2.default.alert('跳转');
      },
      closeAlert: function closeAlert() {
        // tip.alert('关闭');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'getDiscoverList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return _api2.default.getHomeDisvocerList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10
                  },
                  method: 'get'
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.discoverList = [].concat(_toConsumableArray(that.discoverList), _toConsumableArray(json.data.list));

                  if (json.data.page_total) {
                    // 后台的数据不再返回page_total
                    that.page_total = json.data.page_total;
                  };
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDiscoverList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getDiscoverList;
    }()
  }, {
    key: 'getAdList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getAdList({
                  query: {}
                });

              case 2:
                json = _context2.sent;

                if (json.data.code == 0) {
                  this.adList = json.data.list;
                  this.$apply();
                } else {}

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAdList() {
        return _ref3.apply(this, arguments);
      }

      return getAdList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      console.log(that.discoverList);
      this.discoverList = [];
      that.getDiscoverList();
      this.getAdList();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getDiscoverList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsIkRpc2NvdmVyIiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwiQm9tYnNjcmVlbiIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJkaXNjb3Zlckxpc3QiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJhZExpc3QiLCJ0cHMiLCJpc19zaG93X2FsZXJ0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ29Ub0FkdmVydCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiYWxlcnRDYWxsYmFjayIsInRpcCIsImFsZXJ0IiwiY2xvc2VBbGVydCIsImV2ZW50cyIsInNpemUiLCJ0aGF0IiwiYXBpIiwiZ2V0SG9tZURpc3ZvY2VyTGlzdCIsInF1ZXJ5IiwicGFnZSIsIm1ldGhvZCIsImpzb24iLCJjb2RlIiwibGlzdCIsIiRhcHBseSIsImVycm9yIiwibXNnIiwiZ2V0QWRMaXN0IiwiZ2V0RGlzY292ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixjQUF0QyxFQUFaLEVBQWtFLGtCQUFpQixFQUFDLG9CQUFtQixhQUFwQixFQUFrQyxXQUFVLE1BQTVDLEVBQW5GLEVBQXVJLGVBQWMsRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsV0FBVSxRQUF6QyxFQUFySixFQUF3TSxjQUFhLEVBQUMscUJBQW9CLEtBQXJCLEVBQTJCLG9CQUFtQixlQUE5QyxFQUE4RCxjQUFhLEVBQTNFLEVBQXJOLEUsUUFDVEMsTyxHQUFVLEVBQUMsY0FBYSxFQUFDLGNBQWEsWUFBZCxFQUEyQixpQkFBZ0IsZUFBM0MsRUFBZCxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxnQkFBVUMsa0JBREE7QUFFVkMsc0JBQWdCQyx3QkFGTjtBQUdWQyxtQkFBYUMscUJBSEg7QUFJVkMsa0JBQVlDO0FBSkYsSyxRQU1aQyxJLEdBQU87QUFDTEMscUJBQWUsSUFEVjtBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyw0QkFBc0IsTUFMakI7QUFNTEMsb0JBQWMsRUFOVDtBQU9MO0FBQ0FDLGdCQUFVLEtBUkw7QUFTTDtBQUNBQyxtQkFBYSxDQVZSO0FBV0w7QUFDQUMsa0JBQVksQ0FaUDtBQWFMO0FBQ0FDLG1CQUFhLElBZFI7QUFlTDtBQUNBQyw0QkFBc0IsS0FoQmpCO0FBaUJMO0FBQ0FDLGNBQVEsRUFsQkg7QUFtQkxDLFdBQUssQ0FuQkE7QUFvQkxDLHFCQUFlO0FBcEJWLEssUUErRFBDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsR0FESCxFQUNRO0FBQ2RDLGdCQUFRQyxHQUFSLENBQVksV0FBV0YsR0FBdkI7QUFDQSxZQUFJQSxJQUFJRyxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDbkI7QUFDRDtBQUNEQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkTCxlQUFLQTtBQURTLFNBQWhCO0FBR0QsT0FUTzs7QUFVUk0seUJBQW1CLDJCQUFTQyxHQUFULEVBQWM7QUFDL0IsWUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FQLGtCQUFRQyxHQUFSLENBQVlLLElBQUlFLE1BQWhCO0FBQ0Q7QUFDRCxlQUFPO0FBQ0xDLGlCQUFPLE9BREY7QUFFTEMsZ0JBQU0sYUFGRDtBQUdMQyxtQkFBUyxpQkFBU0wsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsV0FMSTtBQU1MTSxnQkFBTSxjQUFTTixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLFNBQVA7QUFVRCxPQXpCTztBQTBCUk8sbUJBMUJRLDJCQTBCUTtBQUNkQyxzQkFBSUMsS0FBSixDQUFVLElBQVY7QUFDRCxPQTVCTztBQTZCUkMsZ0JBN0JRLHdCQTZCSztBQUNaO0FBQ0E7QUEvQk8sSyxRQWlDVkMsTSxHQUFTLEU7Ozs7OzsyRkEzRWE1QixXLEVBQWE2QixJOzs7Ozs7QUFDN0JDLG9CLEdBQU8sSTs7dUJBQ1FDLGNBQUlDLG1CQUFKLENBQXdCO0FBQ3pDQyx5QkFBTztBQUNMQywwQkFBTWxDLGVBQWUsQ0FEaEI7QUFFTDZCLDBCQUFNQSxRQUFRO0FBRlQsbUJBRGtDO0FBS3pDTSwwQkFBTztBQUxrQyxpQkFBeEIsQzs7O0FBQWJDLG9COztBQU9OLG9CQUFJQSxLQUFLNUMsSUFBTCxDQUFVNkMsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QlAsdUJBQUtoQyxZQUFMLGdDQUF3QmdDLEtBQUtoQyxZQUE3QixzQkFBOENzQyxLQUFLNUMsSUFBTCxDQUFVOEMsSUFBeEQ7O0FBRUEsc0JBQUlGLEtBQUs1QyxJQUFMLENBQVVTLFVBQWQsRUFBMEI7QUFBRTtBQUM1QjZCLHlCQUFLN0IsVUFBTCxHQUFrQm1DLEtBQUs1QyxJQUFMLENBQVVTLFVBQTVCO0FBQ0M7QUFDRCxzQkFBSW1DLEtBQUs1QyxJQUFMLENBQVVTLFVBQVYsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDN0I7QUFDQTZCLHlCQUFLL0IsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0QrQix1QkFBS1MsTUFBTDtBQUNELGlCQVhELE1BV087QUFDTGQsZ0NBQUllLEtBQUosQ0FBVUosS0FBSzVDLElBQUwsQ0FBVWlELEdBQXBCO0FBQ0Q7QUFDRFgscUJBQUs1QixXQUFMLEdBQW1CLEtBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHbUI2QixjQUFJVyxTQUFKLENBQWM7QUFDL0JULHlCQUFPO0FBRHdCLGlCQUFkLEM7OztBQUFiRyxvQjs7QUFHTixvQkFBSUEsS0FBSzVDLElBQUwsQ0FBVTZDLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsdUJBQUtqQyxNQUFMLEdBQWNnQyxLQUFLNUMsSUFBTCxDQUFVOEMsSUFBeEI7QUFDQSx1QkFBS0MsTUFBTDtBQUNELGlCQUhELE1BR08sQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVGO0FBQ1AsVUFBSVQsT0FBTyxJQUFYO0FBQ0FuQixjQUFRQyxHQUFSLENBQVlrQixLQUFLaEMsWUFBakI7QUFDQSxXQUFLQSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0FnQyxXQUFLYSxlQUFMO0FBQ0EsV0FBS0QsU0FBTDtBQUNEOzs7O0FBb0NEO29DQUNnQjtBQUNkLFVBQUlaLE9BQU8sSUFBWDtBQUNBQSxXQUFLNUIsV0FBTCxHQUFtQixJQUFuQjtBQUNBUyxjQUFRQyxHQUFSLENBQVlrQixLQUFLN0IsVUFBTCxHQUFrQixLQUFsQixHQUEwQjZCLEtBQUs5QixXQUEzQztBQUNBO0FBQ0EsVUFBSzhCLEtBQUs3QixVQUFOLEdBQW9CNkIsS0FBSzlCLFdBQTdCLEVBQTBDO0FBQ3hDO0FBQ0EsWUFBSThCLEtBQUszQixvQkFBVCxFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRDJCLGFBQUszQixvQkFBTCxHQUE0QixJQUE1QjtBQUNBMkIsYUFBSzlCLFdBQUw7QUFDQThCLGFBQUthLGVBQUwsQ0FBcUJiLEtBQUs5QixXQUExQjtBQUNBOEIsYUFBSzNCLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0QsT0FURCxNQVNPO0FBQ0wyQixhQUFLNUIsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUFqSStCWSxlQUFLb0IsSTs7a0JBQWxCekQsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnQC9jb21wb25lbnRzL2JvbWJfc2NyZWVuJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a8lOekuuWVhuWfjicsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImRpc2NvdmVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImRpc2NvdmVyTGlzdFwifSxcImJvdHRvbUxvYWRNb3JlXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOWPkeeOsOaVsOaNrlwifSxcImJvbWJzY3JlZW5cIjp7XCJ2LWJpbmQ6dHlwZXMuc3luY1wiOlwidHBzXCIsXCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19zaG93X2FsZXJ0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiYm9tYnNjcmVlblwiOntcInYtb246Y2xvc2VcIjpcImNsb3NlQWxlcnRcIixcInYtb246Y2FsbGJhY2tcIjpcImFsZXJ0Q2FsbGJhY2tcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBkaXNjb3ZlcjogRGlzY292ZXIsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgICBib21ic2NyZWVuOiBCb21ic2NyZWVuXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAzMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiBcIiNmZmZcIixcbiAgICBkaXNjb3Zlckxpc3Q6IFtdLFxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICAvL+W5v+WRiuWIl+ihqFxuICAgIGFkTGlzdDogW10sXG4gICAgdHBzOiAwLFxuICAgIGlzX3Nob3dfYWxlcnQ6IGZhbHNlXG4gIH1cbiAgYXN5bmMgZ2V0RGlzY292ZXJMaXN0KGN1cnJlbnRQYWdlLCBzaXplKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0SG9tZURpc3ZvY2VyTGlzdCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSB8fCAxLFxuICAgICAgICBzaXplOiBzaXplIHx8IDEwXG4gICAgICB9LFxuICAgICAgbWV0aG9kOidnZXQnXG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoYXQuZGlzY292ZXJMaXN0ID0gWy4uLnRoYXQuZGlzY292ZXJMaXN0LCAuLi5qc29uLmRhdGEubGlzdF07XG5cbiAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCkgeyAvLyDlkI7lj7DnmoTmlbDmja7kuI3lho3ov5Tlm55wYWdlX3RvdGFsXG4gICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbFxuICAgICAgfTtcbiAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCA9PSAwKSB7XG4gICAgICAgIC8v5pqC5peg5pWw5o2uXG4gICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgYXN5bmMgZ2V0QWRMaXN0KCkge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0QWRMaXN0KHtcbiAgICAgIHF1ZXJ5OiB7fVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLmFkTGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge31cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHRoYXQuZGlzY292ZXJMaXN0KVxuICAgIHRoaXMuZGlzY292ZXJMaXN0ID0gW107XG4gICAgdGhhdC5nZXREaXNjb3Zlckxpc3QoKTtcbiAgICB0aGlzLmdldEFkTGlzdCgpO1xuICB9XG4gIGNvbXB1dGVkID0ge31cbiAgbWV0aG9kcyA9IHtcbiAgICBnb1RvQWR2ZXJ0KHVybCkge1xuICAgICAgY29uc29sZS5sb2coXCJ1cmw9PT1cIiArIHVybCk7XG4gICAgICBpZiAodXJsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn57Sg5rSB5pyN6KOF5Y6CJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9ob21lJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhbGVydENhbGxiYWNrKCkge1xuICAgICAgdGlwLmFsZXJ0KCfot7PovawnKTtcbiAgICB9LFxuICAgIGNsb3NlQWxlcnQoKSB7XG4gICAgIC8vIHRpcC5hbGVydCgn5YWz6ZetJyk7XG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHt9XG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhhdC5nZXREaXNjb3Zlckxpc3QodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbiJdfQ==