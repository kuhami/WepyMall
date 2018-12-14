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

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointsMore = function (_wepy$page) {
  _inherits(PointsMore, _wepy$page);

  function PointsMore() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, PointsMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PointsMore.__proto__ || Object.getPrototypeOf(PointsMore)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查看更多'
    }, _this.$repeat = {}, _this.$props = { "pointsDetail": { "xmlns:v-bind": "", "v-bind:is_empty.sync": "is_empty", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = {}, _this.components = {
      pointsDetail: _points_detail2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = (_this$data = {
      winHeight: 0,
      list: [],
      is_empty: false,
      showLoading: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0
    }, _defineProperty(_this$data, 'showLoading', true), _defineProperty(_this$data, 'preventRepeatReuqest', false), _this$data), _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PointsMore, [{
    key: 'getUserPoint',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
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
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 5:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.list = [].concat(_toConsumableArray(that.list), _toConsumableArray(json.data.list));
                  that.page_total = json.data.page_total;
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

      function getUserPoint(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserPoint;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      that.list = [];
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      that.getUserPoint();
      that.$apply();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      console.log("ddddddddddddddd");
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        console.log(" //判断总页数是否大于翻页数");
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getUserPoint(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return PointsMore;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PointsMore , 'pages/points_more'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50c19tb3JlLmpzIl0sIm5hbWVzIjpbIlBvaW50c01vcmUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicG9pbnRzRGV0YWlsIiwiUG9pbnRzRGV0YWlsIiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJkYXRhIiwid2luSGVpZ2h0IiwibGlzdCIsImlzX2VtcHR5Iiwic2hvd0xvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VfdG90YWwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzaXplIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsInBvaW50SW5mbyIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJjb2RlIiwiJGFwcGx5IiwidGlwIiwiZXJyb3IiLCJtc2ciLCJzeXN0ZW1JbmZvIiwiU1lTVEVNX0lORk8iLCJ3aW5kb3dIZWlnaHQiLCJnZXRVc2VyUG9pbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudFJlcGVhdFJldXFlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBcUQsb0JBQW1CLE1BQXhFLEVBQWhCLEVBQWdHLGtCQUFpQixFQUFDLG9CQUFtQixhQUFwQixFQUFrQyxXQUFVLE1BQTVDLEVBQWpILEVBQXFLLGVBQWMsRUFBQyxvQkFBbUIsVUFBcEIsRUFBK0IsV0FBVSxRQUF6QyxFQUFuTCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxvQkFBY0MsdUJBREo7QUFFVkMsc0JBQWdCQyx3QkFGTjtBQUdWQyxtQkFBYUM7QUFISCxLLFFBTVpDLEk7QUFDRUMsaUJBQVcsQztBQUNYQyxZQUFNLEU7QUFDTkMsZ0JBQVUsSztBQUNWQyxtQkFBYSxLO0FBQ2I7QUFDQUMsbUJBQWEsQztBQUNiO0FBQ0FDLGtCQUFZO2tEQUVDLEksdURBRVMsSyxzQkFnQ3hCQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7OzJGQW5DVUosVyxFQUFhSyxJOzs7Ozs7QUFDMUJDLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkMsZUFBS0MsY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7QUFDN0RDLHNCLEdBQVNKLGdCQUFnQkssTTs7dUJBQ1ZDLGNBQUlDLFNBQUosQ0FBYztBQUMvQkMseUJBQU87QUFDTEosNEJBQVFBLE1BREg7QUFFTEssMEJBQU1oQixlQUFlLENBRmhCO0FBR0xLLDBCQUFNQSxRQUFRO0FBSFQ7QUFEd0IsaUJBQWQsQzs7O0FBQWJZLG9COztBQU9OLG9CQUFJQSxLQUFLdEIsSUFBTCxDQUFVdUIsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QlosdUJBQUtULElBQUwsZ0NBQWdCUyxLQUFLVCxJQUFyQixzQkFBOEJvQixLQUFLdEIsSUFBTCxDQUFVRSxJQUF4QztBQUNBUyx1QkFBS0wsVUFBTCxHQUFrQmdCLEtBQUt0QixJQUFMLENBQVVNLFVBQTVCO0FBQ0FLLHVCQUFLYSxNQUFMO0FBQ0QsaUJBSkQsTUFJTztBQUNMQyxzQkFBSUMsS0FBSixDQUFVSixLQUFLdEIsSUFBTCxDQUFVMkIsR0FBcEI7QUFDRDtBQUNEaEIscUJBQUtQLFdBQUwsR0FBbUIsS0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFVBQUlPLE9BQU8sSUFBWDtBQUNBQSxXQUFLVCxJQUFMLEdBQVUsRUFBVjtBQUNBLFVBQUkwQixhQUFhZixlQUFLQyxjQUFMLENBQW9CZSxxQkFBcEIsQ0FBakI7QUFDQWxCLFdBQUtWLFNBQUwsR0FBaUIyQixXQUFXRSxZQUE1QjtBQUNBbkIsV0FBS29CLFlBQUw7QUFDQXBCLFdBQUthLE1BQUw7QUFDRDs7OztBQVVEO29DQUNnQjtBQUNkUSxjQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxVQUFJdEIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtQLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTRCLGNBQVFDLEdBQVIsQ0FBWXRCLEtBQUtMLFVBQUwsR0FBa0IsS0FBbEIsR0FBMEJLLEtBQUtOLFdBQTNDO0FBQ0E7QUFDQSxVQUFLTSxLQUFLTCxVQUFOLEdBQW9CSyxLQUFLTixXQUE3QixFQUEwQztBQUN4QzJCLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQTtBQUNBLFlBQUl0QixLQUFLdUIsb0JBQVQsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0R2QixhQUFLdUIsb0JBQUwsR0FBNEIsSUFBNUI7QUFDQXZCLGFBQUtOLFdBQUw7QUFDQU0sYUFBS29CLFlBQUwsQ0FBa0JwQixLQUFLTixXQUF2QjtBQUNBTSxhQUFLdUIsb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQVZELE1BVU87QUFDTHZCLGFBQUtQLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOzs7O0VBdEZxQ1MsZUFBS1EsSTs7a0JBQXhCbEMsVSIsImZpbGUiOiJwb2ludHNfbW9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IFBvaW50c0RldGFpbCBmcm9tICdAL2NvbXBvbmVudHMvcG9pbnRzX2RldGFpbCdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludHNNb3JlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmn6XnnIvmm7TlpJonLFxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJwb2ludHNEZXRhaWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzX2VtcHR5LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9LFwiYm90dG9tTG9hZE1vcmVcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJzaG93TG9hZGluZ1wiLFwibWVzc2FnZVwiOlwi5q2j5Zyo5Yqg6L29XCJ9LFwicGxhY2Vob2xkZXJcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19lbXB0eVwiLFwibWVzc2FnZVwiOlwi5pqC5peg5Y+R546w5pWw5o2uXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBwb2ludHNEZXRhaWw6IFBvaW50c0RldGFpbCxcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHdpbkhlaWdodDogMCxcbiAgICBsaXN0OiBbXSxcbiAgICBpc19lbXB0eTogZmFsc2UsXG4gICAgc2hvd0xvYWRpbmc6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlclBvaW50KGN1cnJlbnRQYWdlLCBzaXplKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5wb2ludEluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhhdC5saXN0ID0gWy4uLnRoYXQubGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWw7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0Lmxpc3Q9W107XG4gICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPKTtcbiAgICB0aGF0LndpbkhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xuICAgIHRoYXQuZ2V0VXNlclBvaW50KCk7XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICAvL+WKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGRkZGRkZGRkZGRkZGRkXCIpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFwiKTtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhhdC5nZXRVc2VyUG9pbnQodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbiJdfQ==