'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _constant = require('./../utils/constant.js');

var _order_item = require('./../components/order_item.js');

var _order_item2 = _interopRequireDefault(_order_item);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_wepy$page) {
  _inherits(Order, _wepy$page);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "我的订单"
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:tabList.sync": "tabList", "v-bind:currentTab.sync": "currentTab" }, "orderItem": { "xmlns:v-bind": "", "v-bind:orderList.sync": "orderList" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      orderItem: _order_item2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      winHeight: 0,
      totalCount: 0,
      tabList: ["全部订单", "待支付", "待收货", "已完成"],
      orderList: [],
      currentPage: 1,
      is_empty: false,
      orderStatus: "",
      currentTab: 0,
      flag: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //待付款
      pendingPayCount: 0,
      //待发货
      backrdersCount: 0,
      //待收货
      shippedCount: 0,

      receiveFlg: 0
    }, _this.computed = {}, _this.methods = {
      getCurrentTab: function getCurrentTab(cur, evt) {
        this.currentPage = 1;
        this.page_total = 0;
        this.orderList = [];

        var that = this;
        that.currentTab = cur;
        console.log("cur");
        console.log(cur);
        if (cur == 0) {
          console.log("所有订单类型");
          that.orderStatus = "";
          that.getMyOrder();
        } else if (cur == 1) {
          console.log("未付款订单类型");
          that.orderStatus = 0;
          that.getMyOrder();
        } else if (cur == 2) {
          console.log("待收货订单类型");
          that.orderStatus = 2;
          that.receiveFlg = 2;
          that.getMyOrder();
        } else if (cur == 3) {

          console.log("已完成订单类型");
          that.orderStatus = 4;
          that.receiveFlg = 4;
          that.getMyOrder();
        }
        that.$apply();
      },

      /**
       * 滑动切换tab
       */
      bindChange: function bindChange(e) {

        var that = this;
        that.currentTab = e.detail.current;
        console.log("change tab...." + e.detailcurrent);
        that.$apply();
      }
    }, _this.events = {
      refreshOrderList: function refreshOrderList(msg) {
        console.log("msg值:" + msg);
        if (msg == 3) {
          this.currentTab = 3;
          this.$apply();
          this.orderStatus = 4;
        }
        this.getMyOrder(1, 10, 1);
      }
    }, _this.watch = {
      currentTab: function currentTab(val) {
        console.log("====" + val);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: 'getMyOrder',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size, refresh) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                console.log("refresh值：" + refresh);
                that = this;

                console.log("orderStatus值");
                console.log("orderStatus值" + that.orderStatus);
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 8;
                return _api2.default.getMyOrderList({
                  query: {
                    openId: openId,
                    orderStatus: that.orderStatus,
                    receiveFlg: that.receiveFlg,
                    page: currentPage || 1,
                    size: size || 10,
                    type: 1 //正常单
                  }
                });

              case 8:
                json = _context.sent;

                if (json.data.code == 0) {
                  console.log("json.data.list");
                  console.log(json.data.list);
                  if (refresh) {
                    that.orderList = json.data.list;
                  } else {
                    that.orderList = [].concat(_toConsumableArray(that.orderList), _toConsumableArray(json.data.list));
                  }
                  that.page_total = json.data.page_total;
                  that.totalCount = json.data.totalCount;
                  console.log("条目数：" + that.totalCount);
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  } else {
                    that.is_empty = false;
                  }
                  that.getMyOrderSize();
                  console.log("list返回数据");
                  console.log(that.orderList);
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMyOrder(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return getMyOrder;
    }()
  }, {
    key: 'getMyOrderSize',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, userSpecialInfo, openId, json, dotList;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("订单数量统计");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 6;
                return _api2.default.getMyOrderSize({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context2.sent;

                if (json.data.code == 0) {
                  //待付款
                  that.pendingPayCount = json.data.pendingPayCount;
                  //待发货
                  that.backrdersCount = json.data.backrdersCount;
                  //待收货
                  that.shippedCount = json.data.shippedCount;

                  //重写list
                  dotList = ["全部订单", { name: "待支付", dotNum: that.pendingPayCount }, { name: "待收货", dotNum: that.backrdersCount }, "已完成"];

                  this.$invoke("tab", "changeList", dotList);
                  that.$apply();
                }

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMyOrderSize() {
        return _ref3.apply(this, arguments);
      }

      return getMyOrderSize;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(opts) {
      var that = this;
      var title = "";
      that.orderList = [];
      that.currentTab = opts.type;
      that.getMyOrder();
      //设置滚动高度
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      that.$apply();
    }
  }, {
    key: 'onReachBottom',


    //加载更多
    value: function onReachBottom() {
      console.log("加载更多");
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "232===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        console.log(this.currentTab);
        if (this.currentTab == 0) {
          console.log("所有订单类型");
          that.getMyOrder(that.currentPage);
        } else if (this.currentTab == 1) {
          console.log("未付款订单类型");
          that.orderStatus = 0;
          that.getMyOrder(that.currentPage);
        } else if (this.currentTab == 2) {
          console.log("待发货订单类型");
          that.orderStatus = 2;
          that.receiveFlg = 2;
          that.getMyOrder(that.currentPage);
        } else if (this.currentTab == 3) {
          console.log("已完成订单类型");
          that.orderStatus = 4;
          that.getMyOrder(that.currentPage);
        }
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIlRhYiIsIm9yZGVySXRlbSIsIk9yZGVySXRlbSIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsIndpbkhlaWdodCIsInRvdGFsQ291bnQiLCJ0YWJMaXN0Iiwib3JkZXJMaXN0IiwiY3VycmVudFBhZ2UiLCJpc19lbXB0eSIsIm9yZGVyU3RhdHVzIiwiY3VycmVudFRhYiIsImZsYWciLCJzaG93TG9hZGluZyIsInByZXZlbnRSZXBlYXRSZXVxZXN0IiwicGVuZGluZ1BheUNvdW50IiwiYmFja3JkZXJzQ291bnQiLCJzaGlwcGVkQ291bnQiLCJyZWNlaXZlRmxnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0Q3VycmVudFRhYiIsImN1ciIsImV2dCIsInBhZ2VfdG90YWwiLCJ0aGF0IiwiY29uc29sZSIsImxvZyIsImdldE15T3JkZXIiLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCJkZXRhaWxjdXJyZW50IiwiZXZlbnRzIiwicmVmcmVzaE9yZGVyTGlzdCIsIm1zZyIsIndhdGNoIiwidmFsIiwic2l6ZSIsInJlZnJlc2giLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJnZXRNeU9yZGVyTGlzdCIsInF1ZXJ5IiwicGFnZSIsInR5cGUiLCJqc29uIiwiY29kZSIsImxpc3QiLCJnZXRNeU9yZGVyU2l6ZSIsInRpcCIsImVycm9yIiwiZG90TGlzdCIsIm5hbWUiLCJkb3ROdW0iLCIkaW52b2tlIiwib3B0cyIsInRpdGxlIiwic3lzdGVt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O0FBQ0Q7QUFDRGlCLGFBQUtYLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0QsT0ExQkQsTUEwQk87QUFDTFcsYUFBS1osV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUExTmdDOEIsZUFBS1EsSTs7a0JBQW5CL0QsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgVGFiIGZyb20gJ0AvY29tcG9uZW50cy90YWInXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IE9yZGVySXRlbSBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXJfaXRlbSdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuaIkeeahOiuouWNlVwiLFxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFiTGlzdC5zeW5jXCI6XCJ0YWJMaXN0XCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCJ9LFwib3JkZXJJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvcmRlckxpc3Quc3luY1wiOlwib3JkZXJMaXN0XCJ9LFwiYm90dG9tTG9hZE1vcmVcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJzaG93TG9hZGluZ1wiLFwibWVzc2FnZVwiOlwi5q2j5Zyo5Yqg6L29XCJ9LFwicGxhY2Vob2xkZXJcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19lbXB0eVwiLFwibWVzc2FnZVwiOlwi5pqC5peg5Y+R546w5pWw5o2uXCJ9fTtcclxuJGV2ZW50cyA9IHtcInRhYlwiOntcInYtb246Y3VycmVudFRhYlwiOlwiZ2V0Q3VycmVudFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRhYjogVGFiLFxuICAgIG9yZGVySXRlbTogT3JkZXJJdGVtLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJcbiAgfVxuICBkYXRhID0ge1xuICAgIHdpbkhlaWdodDogMCxcbiAgICB0b3RhbENvdW50OiAwLFxuICAgIHRhYkxpc3Q6IFtcIuWFqOmDqOiuouWNlVwiLCBcIuW+heaUr+S7mFwiLCBcIuW+heaUtui0p1wiLCBcIuW3suWujOaIkFwiXSxcbiAgICBvcmRlckxpc3Q6IFtdLFxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICBvcmRlclN0YXR1czogXCJcIixcbiAgICBjdXJyZW50VGFiOiAwLFxuICAgIGZsYWc6IDAsXG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgcHJldmVudFJlcGVhdFJldXFlc3Q6IGZhbHNlLFxuICAgIC8v5b6F5LuY5qy+XG4gICAgcGVuZGluZ1BheUNvdW50IDogMCxcbiAgICAvL+W+heWPkei0p1xuICAgIGJhY2tyZGVyc0NvdW50IDogMCxcbiAgICAvL+W+heaUtui0p1xuICAgIHNoaXBwZWRDb3VudCA6IDAsXG5cbiAgICByZWNlaXZlRmxnIDogMFxuICB9XG5cbiAgYXN5bmMgZ2V0TXlPcmRlcihjdXJyZW50UGFnZSwgc2l6ZSxyZWZyZXNoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2jlgLzvvJpcIityZWZyZXNoKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJvcmRlclN0YXR1c+WAvFwiKTtcbiAgICBjb25zb2xlLmxvZyhcIm9yZGVyU3RhdHVz5YC8XCIgKyB0aGF0Lm9yZGVyU3RhdHVzKTtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0TXlPcmRlckxpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIG9yZGVyU3RhdHVzOiB0aGF0Lm9yZGVyU3RhdHVzLFxuICAgICAgICByZWNlaXZlRmxnIDogdGhhdC5yZWNlaXZlRmxnLFxuICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSB8fCAxLFxuICAgICAgICBzaXplOiBzaXplIHx8IDEwLFxuICAgICAgICB0eXBlOiAxIC8v5q2j5bi45Y2VXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwianNvbi5kYXRhLmxpc3RcIik7XG4gICAgICBjb25zb2xlLmxvZyhqc29uLmRhdGEubGlzdCk7XG4gICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICB0aGF0Lm9yZGVyTGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5vcmRlckxpc3QgPSBbLi4udGhhdC5vcmRlckxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcbiAgICAgIH1cbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5wYWdlX3RvdGFsO1xuICAgICAgdGhhdC50b3RhbENvdW50ID0ganNvbi5kYXRhLnRvdGFsQ291bnQ7XG4gICAgICBjb25zb2xlLmxvZyhcIuadoeebruaVsO+8mlwiICsgdGhhdC50b3RhbENvdW50KTtcbiAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCA9PSAwKSB7XG4gICAgICAgIC8v5pqC5peg5pWw5o2uXG4gICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5pc19lbXB0eSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhhdC5nZXRNeU9yZGVyU2l6ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJsaXN06L+U5Zue5pWw5o2uXCIpO1xuICAgICAgY29uc29sZS5sb2codGhhdC5vcmRlckxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIHRoYXQuJGFwcGx5KCk7XG4gIH1cblxuICBhc3luYyBnZXRNeU9yZGVyU2l6ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiuouWNleaVsOmHj+e7n+iuoVwiKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE15T3JkZXJTaXplKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIC8v5b6F5LuY5qy+XG4gICAgICB0aGF0LnBlbmRpbmdQYXlDb3VudCA9IGpzb24uZGF0YS5wZW5kaW5nUGF5Q291bnQ7XG4gICAgICAvL+W+heWPkei0p1xuICAgICAgdGhhdC5iYWNrcmRlcnNDb3VudCA9IGpzb24uZGF0YS5iYWNrcmRlcnNDb3VudDtcbiAgICAgIC8v5b6F5pS26LSnXG4gICAgICB0aGF0LnNoaXBwZWRDb3VudCA9IGpzb24uZGF0YS5zaGlwcGVkQ291bnQ7XG5cbiAgICAgIC8v6YeN5YaZbGlzdFxuICAgICAgdmFyIGRvdExpc3QgPSBbXCLlhajpg6jorqLljZVcIiwgeyBuYW1lOiBcIuW+heaUr+S7mFwiLCBkb3ROdW06IHRoYXQucGVuZGluZ1BheUNvdW50IH0sIHsgbmFtZTogXCLlvoXmlLbotKdcIiwgZG90TnVtOiB0aGF0LmJhY2tyZGVyc0NvdW50IH0sIFwi5bey5a6M5oiQXCJdO1xuICAgICAgdGhpcy4kaW52b2tlKFwidGFiXCIsIFwiY2hhbmdlTGlzdFwiLCBkb3RMaXN0KTtcbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cblxuICBvbkxvYWQob3B0cykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdGl0bGUgPSBcIlwiO1xuICAgIHRoYXQub3JkZXJMaXN0ID0gW107XG4gICAgdGhhdC5jdXJyZW50VGFiID0gb3B0cy50eXBlO1xuICAgIHRoYXQuZ2V0TXlPcmRlcigpO1xuICAgIC8v6K6+572u5rua5Yqo6auY5bqmXG4gICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPKTtcbiAgICB0aGF0LndpbkhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xuICAgIHRoYXQuJGFwcGx5KCk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdldEN1cnJlbnRUYWIoY3VyLCBldnQpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgdGhpcy5wYWdlX3RvdGFsID0gMDtcbiAgICAgIHRoaXMub3JkZXJMaXN0ID0gW107XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuY3VycmVudFRhYiA9IGN1cjtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VyXCIpO1xuICAgICAgY29uc29sZS5sb2coY3VyKTtcbiAgICAgIGlmIChjdXIgPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOacieiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IFwiXCI7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChjdXIgPT0gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuacquS7mOasvuiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDA7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChjdXIgPT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW+heaUtui0p+iuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDI7XG4gICAgICAgIHRoYXQucmVjZWl2ZUZsZz0yO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyID09IDMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIuW3suWujOaIkOiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDQ7XG4gICAgICAgIHRoYXQucmVjZWl2ZUZsZz00O1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmu5HliqjliIfmjaJ0YWJcbiAgICAgKi9cbiAgICBiaW5kQ2hhbmdlKGUpIHtcblxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHRhYi4uLi5cIiArIGUuZGV0YWlsY3VycmVudCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0sXG4gIH1cbiAgZXZlbnRzID0ge1xuICAgIHJlZnJlc2hPcmRlckxpc3QobXNnKXtcbiAgICAgIGNvbnNvbGUubG9nKFwibXNn5YC8OlwiK21zZyk7XG4gICAgICBpZihtc2c9PTMpe1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWI9MztcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgdGhpcy5vcmRlclN0YXR1cyA9IDQ7XG4gICAgICB9XG4gICAgICB0aGlzLmdldE15T3JkZXIoMSwxMCwxKTtcbiAgICB9XG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgY3VycmVudFRhYih2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PVwiICsgdmFsKVxuICAgIH1cbiAgfVxuXG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coXCLliqDovb3mm7TlpJpcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiMjMyPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VGFiKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOacieiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuacquS7mOasvuiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDA7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGFiID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvoXlj5HotKforqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAyO1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9MjtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUYWIgPT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW3suWujOaIkOiuouWNleexu+Wei1wiKTtcbiAgICAgICAgdGhhdC5vcmRlclN0YXR1cyA9IDQ7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxufVxuXG4iXX0=