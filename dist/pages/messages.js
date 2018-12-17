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
      list: [{ title: 'wepy', roundup: '商城', detail: '恭喜你来到wepy商城', createTime: '2018-12-8' }, { title: 'KroInterview', roundup: '前端面试攻略', detail: '恭喜你来到KroInterview (https://kuhami.github.io/KroInterview/)', createTime: '2018-12-9' }, { title: 'Git', roundup: '', detail: 'Git 是目前世界上最先进的分布式版本控制系统（没有之一），用于敏捷高效地处理任何或小或大的项目。', createTime: '2018-12-10' }, { title: 'wepy', roundup: '商城', detail: '恭喜你来到wepy商城', createTime: '2018-12-11' }, { title: 'wepy', roundup: '商城', detail: '恭喜你来到wepy商城', createTime: '2018-12-12' }],
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
                  console.log(that);
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
      //    this.list = [];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsImxpc3QiLCJ0aXRsZSIsInJvdW5kdXAiLCJkZXRhaWwiLCJjcmVhdGVUaW1lIiwid2luSGVpZ2h0IiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwic2hvd0xvYWRpbmciLCJwcmV2ZW50UmVwZWF0UmV1cWVzdCIsImlzX2VtcHR5IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2l6ZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJtZXNzYWdlSW5mbyIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidGlwIiwiZXJyb3IiLCJtc2ciLCIkYXBwbHkiLCJzeXN0ZW1JbmZvIiwiU1lTVEVNX0lORk8iLCJ3aW5kb3dIZWlnaHQiLCJnZXRVc2VyTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGFBQXRDLEVBQW9ELFdBQVUsTUFBOUQsRUFBbEIsRUFBd0YsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUErQixXQUFVLE1BQXpDLEVBQXRHLEUs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QUtULFdBQUw7QUFDQVMsYUFBS3FCLGNBQUwsQ0FBb0JyQixLQUFLVCxXQUF6QjtBQUNBUyxhQUFLTixvQkFBTCxHQUE0QixLQUE1QjtBQUNELE9BVkQsTUFVTztBQUNMTSxhQUFLUCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRjs7OztFQS9GbUNTLGVBQUtRLEk7O2tCQUF0QnJDLFEiLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOa2iOaBrycsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dmtojmga9cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJcbiAgfVxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtcbiAgICAgIHt0aXRsZTond2VweScscm91bmR1cDon5ZWG5Z+OJyxkZXRhaWw6J+aBreWWnOS9oOadpeWIsHdlcHnllYbln44nLGNyZWF0ZVRpbWU6JzIwMTgtMTItOCd9LFxuICAgICAge3RpdGxlOidLcm9JbnRlcnZpZXcnLHJvdW5kdXA6J+WJjeerr+mdouivleaUu+eVpScsZGV0YWlsOifmga3llpzkvaDmnaXliLBLcm9JbnRlcnZpZXcgKGh0dHBzOi8va3VoYW1pLmdpdGh1Yi5pby9Lcm9JbnRlcnZpZXcvKScsY3JlYXRlVGltZTonMjAxOC0xMi05J30sXG4gICAgICB7dGl0bGU6J0dpdCcscm91bmR1cDonJyxkZXRhaWw6J0dpdCDmmK/nm67liY3kuJbnlYzkuIrmnIDlhYjov5vnmoTliIbluIPlvI/niYjmnKzmjqfliLbns7vnu5/vvIjmsqHmnInkuYvkuIDvvInvvIznlKjkuo7mlY/mjbfpq5jmlYjlnLDlpITnkIbku7vkvZXmiJblsI/miJblpKfnmoTpobnnm67jgIInLGNyZWF0ZVRpbWU6JzIwMTgtMTItMTAnfSxcbiAgICAgIHt0aXRsZTond2VweScscm91bmR1cDon5ZWG5Z+OJyxkZXRhaWw6J+aBreWWnOS9oOadpeWIsHdlcHnllYbln44nLGNyZWF0ZVRpbWU6JzIwMTgtMTItMTEnfSxcbiAgICAgIHt0aXRsZTond2VweScscm91bmR1cDon5ZWG5Z+OJyxkZXRhaWw6J+aBreWWnOS9oOadpeWIsHdlcHnllYbln44nLGNyZWF0ZVRpbWU6JzIwMTgtMTItMTInfV0sXG4gICAgd2luSGVpZ2h0OiAwLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICBpc19lbXB0eTogZmFsc2VcbiAgfVxuXG4gICBhc3luYyBnZXRVc2VyTWVzc2FnZShjdXJyZW50UGFnZSwgc2l6ZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkubWVzc2FnZUluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTBcbiAgICAgIH1cbiAgICB9KTtcbi8vICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgIGlmKHRydWUpe1xuICAgICAgICAgY29uc29sZS5sb2codGhhdClcbiAgICAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3Qse3RpdGxlOid3ZXB5Jyxyb3VuZHVwOifllYbln44nLGRldGFpbDon5oGt5Zac5L2g5p2l5Yiwd2VweeWVhuWfjicsY3JlYXRlVGltZTonMjAxOC0xMi0xMid9XTtcbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5wYWdlX3RvdGFsIHx8IDE7XG4vLyAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCA9PSAwKSB7XG4vLyAgICAgICAgLy/mmoLml6DmlbDmja5cbi8vICAgICAgICAgdGhhdC5pc19lbXB0eSA9IHRydWU7XG4vLyAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuLy8gICAgdGhpcy5saXN0ID0gW107XG4gICAgLy/orr7nva7mu5rliqjpq5jluqZcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgdGhhdC5nZXRVc2VyTWVzc2FnZSgpO1xuXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuXG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICAvL+WKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGRkZGRkZGRkZGRkZGRkXCIpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFwiKTtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhhdC5nZXRVc2VyTWVzc2FnZSh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuIl19