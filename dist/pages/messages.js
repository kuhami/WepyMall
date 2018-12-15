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

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_wepy$page) {
  _inherits(Messages, _wepy$page);

  function Messages() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Messages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Messages.__proto__ || Object.getPrototypeOf(Messages)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的消息'
    }, _this.$repeat = {}, _this.$props = { "bottomLoadMore": { "xmlns:v-bind": "", "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无消息" } }, _this.$events = {}, _this.components = {
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      list: [{ title: '11', roundup: '12', detail: '121212', createTime: '2018-12-12' }],
      winHeight: 0,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      is_empty: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Messages, [{
    key: 'getUserMessage',
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
                return _api2.default.messageInfo({
                  query: {
                    openId: openId,
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 5:
                json = _context.sent;

                //     if (json.data.code == 0) {
                if (true) {
                  that.list = [].concat(_toConsumableArray(that.list), [{ title: 'wepy', roundup: '商城', detail: '恭喜你来到wepy商城', createTime: '2018-12-12' }]);
                  that.page_total = json.data.page_total || 1;
                  //      if (json.data.page_total == 0) {
                  //        //暂无数据
                  //         that.is_empty = true;
                  //      }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserMessage(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserMessage;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.list = [];
      //设置滚动高度
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      that.getUserMessage();
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
        that.getUserMessage(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Messages;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Messages , 'pages/messages'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsImxpc3QiLCJ0aXRsZSIsInJvdW5kdXAiLCJkZXRhaWwiLCJjcmVhdGVUaW1lIiwid2luSGVpZ2h0IiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwic2hvd0xvYWRpbmciLCJwcmV2ZW50UmVwZWF0UmV1cWVzdCIsImlzX2VtcHR5IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2l6ZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJtZXNzYWdlSW5mbyIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJ0aXAiLCJlcnJvciIsIm1zZyIsIiRhcHBseSIsInN5c3RlbUluZm8iLCJTWVNURU1fSU5GTyIsIndpbmRvd0hlaWdodCIsImdldFVzZXJNZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGFBQXRDLEVBQW9ELFdBQVUsTUFBOUQsRUFBbEIsRUFBd0YsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUErQixXQUFVLE1BQXpDLEVBQXRHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHNCQUFnQkMsd0JBRE47QUFFVkMsbUJBQWFDO0FBRkgsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLEVBQUNDLE9BQU0sSUFBUCxFQUFZQyxTQUFRLElBQXBCLEVBQXlCQyxRQUFPLFFBQWhDLEVBQXlDQyxZQUFXLFlBQXBELEVBQUQsQ0FERDtBQUVMQyxpQkFBVyxDQUZOO0FBR0w7QUFDQUMsbUJBQWEsQ0FKUjtBQUtMO0FBQ0FDLGtCQUFZLENBTlA7QUFPTDtBQUNBQyxtQkFBYSxJQVJSO0FBU0w7QUFDQUMsNEJBQXNCLEtBVmpCO0FBV0xDLGdCQUFVO0FBWEwsSyxRQWdEUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzsyRkF6Q2FQLFcsRUFBYVEsSTs7Ozs7O0FBQzdCQyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0JDLGVBQUtDLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFO0FBQzdEQyxzQixHQUFTSixnQkFBZ0JLLE07O3VCQUNWQyxjQUFJQyxXQUFKLENBQWdCO0FBQ2pDQyx5QkFBTztBQUNMSiw0QkFBUUEsTUFESDtBQUVMSywwQkFBTW5CLGVBQWUsQ0FGaEI7QUFHTFEsMEJBQU1BLFFBQVE7QUFIVDtBQUQwQixpQkFBaEIsQzs7O0FBQWJZLG9COztBQU9WO0FBQ08sb0JBQUcsSUFBSCxFQUFRO0FBQ1RYLHVCQUFLZixJQUFMLGdDQUFnQmUsS0FBS2YsSUFBckIsSUFBMEIsRUFBQ0MsT0FBTSxNQUFQLEVBQWNDLFNBQVEsSUFBdEIsRUFBMkJDLFFBQU8sYUFBbEMsRUFBZ0RDLFlBQVcsWUFBM0QsRUFBMUI7QUFDQVcsdUJBQUtSLFVBQUwsR0FBa0JtQixLQUFLM0IsSUFBTCxDQUFVUSxVQUFWLElBQXdCLENBQTFDO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDSyxpQkFQRSxNQU9JO0FBQ0xvQixnQ0FBSUMsS0FBSixDQUFVRixLQUFLM0IsSUFBTCxDQUFVOEIsR0FBcEI7QUFDRDtBQUNEZCxxQkFBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNDTyxxQkFBS2UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVNO0FBQ1AsVUFBSWYsT0FBTyxJQUFYO0FBQ0EsV0FBS2YsSUFBTCxHQUFZLEVBQVo7QUFDQTtBQUNBLFVBQUkrQixhQUFhZCxlQUFLQyxjQUFMLENBQW9CYyxxQkFBcEIsQ0FBakI7QUFDQWpCLFdBQUtWLFNBQUwsR0FBaUIwQixXQUFXRSxZQUE1QjtBQUNBbEIsV0FBS21CLGNBQUw7QUFFRDs7OztBQVdEO29DQUNnQjtBQUNkQyxjQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxVQUFJckIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtQLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTJCLGNBQVFDLEdBQVIsQ0FBWXJCLEtBQUtSLFVBQUwsR0FBa0IsS0FBbEIsR0FBMEJRLEtBQUtULFdBQTNDO0FBQ0E7QUFDQSxVQUFLUyxLQUFLUixVQUFOLEdBQW9CUSxLQUFLVCxXQUE3QixFQUEwQztBQUN4QzZCLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQTtBQUNBLFlBQUlyQixLQUFLTixvQkFBVCxFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRE0sYUFBS04sb0JBQUwsR0FBNEIsSUFBNUI7QUFDQU0sYUFBS1QsV0FBTDtBQUNBUyxhQUFLbUIsY0FBTCxDQUFvQm5CLEtBQUtULFdBQXpCO0FBQ0FTLGFBQUtOLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0QsT0FWRCxNQVVPO0FBQ0xNLGFBQUtQLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOzs7O0VBekZtQ1MsZUFBS1EsSTs7a0JBQXRCckMsUSIsImZpbGUiOiJtZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5raI5oGvJyxcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYm90dG9tTG9hZE1vcmVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOa2iOaBr1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclxuICB9XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW3t0aXRsZTonMTEnLHJvdW5kdXA6JzEyJyxkZXRhaWw6JzEyMTIxMicsY3JlYXRlVGltZTonMjAxOC0xMi0xMid9XSxcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgLy/lvZPliY3pobXpnaJcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICAvL+aAu+mhteaVsFxuICAgIHBhZ2VfdG90YWw6IDAsXG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgcHJldmVudFJlcGVhdFJldXFlc3Q6IGZhbHNlLFxuICAgIGlzX2VtcHR5OiBmYWxzZVxuICB9XG5cbiAgIGFzeW5jIGdldFVzZXJNZXNzYWdlKGN1cnJlbnRQYWdlLCBzaXplKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5tZXNzYWdlSW5mbyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMFxuICAgICAgfVxuICAgIH0pO1xuLy8gICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgaWYodHJ1ZSl7XG4gICAgICB0aGF0Lmxpc3QgPSBbLi4udGhhdC5saXN0LHt0aXRsZTond2VweScscm91bmR1cDon5ZWG5Z+OJyxkZXRhaWw6J+aBreWWnOS9oOadpeWIsHdlcHnllYbln44nLGNyZWF0ZVRpbWU6JzIwMTgtMTItMTInfV07XG4gICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbCB8fCAxO1xuLy8gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuLy8gICAgICAgIC8v5pqC5peg5pWw5o2uXG4vLyAgICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xuLy8gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgIHRoYXQuJGFwcGx5KCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAvL+iuvue9rua7muWKqOmrmOW6plxuICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTyk7XG4gICAgdGhhdC53aW5IZWlnaHQgPSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcbiAgICB0aGF0LmdldFVzZXJNZXNzYWdlKCk7XG5cbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG5cblxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coXCJkZGRkZGRkZGRkZGRkZGRcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXCIpO1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICB0aGF0LmdldFVzZXJNZXNzYWdlKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG4iXX0=