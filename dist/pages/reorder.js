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
      navigationBarTitleText: "补货订单"
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:tabList.sync": "tabList", "v-bind:currentTab.sync": "currentTab" }, "orderItem": { "xmlns:v-bind": "", "v-bind:orderList.sync": "orderList" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      orderItem: _order_item2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      winHeight: 0,
      totalCount: 0,
      tabList: ["全部", "待处理", "待收货", "已完成"],
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
                    type: 2 //补货单
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
                    openId: openId,
                    type: 2
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
                  dotList = ["全部", { name: "待处理", dotNum: that.pendingPayCount }, { name: "待收货", dotNum: that.backrdersCount }, "已完成"];

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
          that.orderStatus = 1;
          that.receiveFlg = 1;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/reorder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlb3JkZXIuanMiXSwibmFtZXMiOlsiT3JkZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiVGFiIiwib3JkZXJJdGVtIiwiT3JkZXJJdGVtIiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJkYXRhIiwid2luSGVpZ2h0IiwidG90YWxDb3VudCIsInRhYkxpc3QiLCJvcmRlckxpc3QiLCJjdXJyZW50UGFnZSIsImlzX2VtcHR5Iiwib3JkZXJTdGF0dXMiLCJjdXJyZW50VGFiIiwiZmxhZyIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJwZW5kaW5nUGF5Q291bnQiLCJiYWNrcmRlcnNDb3VudCIsInNoaXBwZWRDb3VudCIsInJlY2VpdmVGbGciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnZXRDdXJyZW50VGFiIiwiY3VyIiwiZXZ0IiwicGFnZV90b3RhbCIsInRoYXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0TXlPcmRlciIsIiRhcHBseSIsImJpbmRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsImRldGFpbGN1cnJlbnQiLCJldmVudHMiLCJyZWZyZXNoT3JkZXJMaXN0IiwibXNnIiwid2F0Y2giLCJ2YWwiLCJzaXplIiwicmVmcmVzaCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsImdldE15T3JkZXJMaXN0IiwicXVlcnkiLCJwYWdlIiwidHlwZSIsImpzb24iLCJjb2RlIiwibGlzdCIsImdldE15T3JkZXJTaXplIiwidGlwIiwiZXJyb3IiLCJkb3RMaXN0IiwibmFtZSIsImRvdE51bSIsIiRpbnZva2UiLCJvcHRzIiwidGl0bGUiLCJzeXN0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QWdCSCxLQUFLakIsV0FBckI7QUFDRDtBQUNEaUIsYUFBS1gsb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQTFCRCxNQTBCTztBQUNMVyxhQUFLWixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRjs7OztFQTNOZ0M4QixlQUFLUSxJOztrQkFBbkIvRCxLIiwiZmlsZSI6InJlb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IFRhYiBmcm9tICdAL2NvbXBvbmVudHMvdGFiJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmltcG9ydCBPcmRlckl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL29yZGVyX2l0ZW0nXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLooaXotKforqLljZVcIixcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYkxpc3Quc3luY1wiOlwidGFiTGlzdFwiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwifSxcIm9yZGVySXRlbVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3JkZXJMaXN0LnN5bmNcIjpcIm9yZGVyTGlzdFwifSxcImJvdHRvbUxvYWRNb3JlXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1widi1iaW5kOnNob3cuc3luY1wiOlwiaXNfZW1wdHlcIixcIm1lc3NhZ2VcIjpcIuaaguaXoOWPkeeOsOaVsOaNrlwifX07XHJcbiRldmVudHMgPSB7XCJ0YWJcIjp7XCJ2LW9uOmN1cnJlbnRUYWJcIjpcImdldEN1cnJlbnRUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB0YWI6IFRhYixcbiAgICBvcmRlckl0ZW06IE9yZGVySXRlbSxcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgdG90YWxDb3VudDogMCxcbiAgICB0YWJMaXN0OiBbXCLlhajpg6hcIiwgXCLlvoXlpITnkIZcIiwgXCLlvoXmlLbotKdcIiwgXCLlt7LlrozmiJBcIl0sXG4gICAgb3JkZXJMaXN0OiBbXSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBpc19lbXB0eTogZmFsc2UsXG4gICAgb3JkZXJTdGF0dXM6IFwiXCIsXG4gICAgY3VycmVudFRhYjogMCxcbiAgICBmbGFnOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICAvL+W+heS7mOasvlxuICAgIHBlbmRpbmdQYXlDb3VudCA6IDAsXG4gICAgLy/lvoXlj5HotKdcbiAgICBiYWNrcmRlcnNDb3VudCA6IDAsXG4gICAgLy/lvoXmlLbotKdcbiAgICBzaGlwcGVkQ291bnQgOiAwLFxuXG4gICAgcmVjZWl2ZUZsZyA6IDBcbiAgfVxuXG4gIGFzeW5jIGdldE15T3JkZXIoY3VycmVudFBhZ2UsIHNpemUscmVmcmVzaCkge1xuXG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNo5YC877yaXCIrcmVmcmVzaCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKFwib3JkZXJTdGF0dXPlgLxcIik7XG4gICAgY29uc29sZS5sb2coXCJvcmRlclN0YXR1c+WAvFwiICsgdGhhdC5vcmRlclN0YXR1cyk7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE15T3JkZXJMaXN0KHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICBvcmRlclN0YXR1czogdGhhdC5vcmRlclN0YXR1cyxcbiAgICAgICAgcmVjZWl2ZUZsZyA6IHRoYXQucmVjZWl2ZUZsZyxcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMCxcbiAgICAgICAgdHlwZTogMiAvL+ihpei0p+WNlVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImpzb24uZGF0YS5saXN0XCIpO1xuICAgICAgY29uc29sZS5sb2coanNvbi5kYXRhLmxpc3QpO1xuICAgICAgaWYgKHJlZnJlc2gpIHtcbiAgICAgICAgdGhhdC5vcmRlckxpc3QgPSBqc29uLmRhdGEubGlzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQub3JkZXJMaXN0ID0gWy4uLnRoYXQub3JkZXJMaXN0LCAuLi5qc29uLmRhdGEubGlzdF07XG4gICAgICB9XG4gICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbDtcbiAgICAgIHRoYXQudG90YWxDb3VudCA9IGpzb24uZGF0YS50b3RhbENvdW50O1xuICAgICAgY29uc29sZS5sb2coXCLmnaHnm67mlbDvvJpcIiArIHRoYXQudG90YWxDb3VudCk7XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuZ2V0TXlPcmRlclNpemUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibGlzdOi/lOWbnuaVsOaNrlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQub3JkZXJMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0TXlPcmRlclNpemUoKSB7XG4gICAgY29uc29sZS5sb2coXCLorqLljZXmlbDph4/nu5/orqFcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRNeU9yZGVyU2l6ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgdHlwZTogMlxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvL+W+heS7mOasvlxuICAgICAgdGhhdC5wZW5kaW5nUGF5Q291bnQgPSBqc29uLmRhdGEucGVuZGluZ1BheUNvdW50O1xuICAgICAgLy/lvoXlj5HotKdcbiAgICAgIHRoYXQuYmFja3JkZXJzQ291bnQgPSBqc29uLmRhdGEuYmFja3JkZXJzQ291bnQ7XG4gICAgICAvL+W+heaUtui0p1xuICAgICAgdGhhdC5zaGlwcGVkQ291bnQgPSBqc29uLmRhdGEuc2hpcHBlZENvdW50O1xuXG4gICAgICAvL+mHjeWGmWxpc3RcbiAgICAgIHZhciBkb3RMaXN0ID0gW1wi5YWo6YOoXCIsIHsgbmFtZTogXCLlvoXlpITnkIZcIiwgZG90TnVtOiB0aGF0LnBlbmRpbmdQYXlDb3VudCB9LCB7IG5hbWU6IFwi5b6F5pS26LSnXCIsIGRvdE51bTogdGhhdC5iYWNrcmRlcnNDb3VudCB9LCBcIuW3suWujOaIkFwiXTtcbiAgICAgIHRoaXMuJGludm9rZShcInRhYlwiLCBcImNoYW5nZUxpc3RcIiwgZG90TGlzdCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgb25Mb2FkKG9wdHMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHRpdGxlID0gXCJcIjtcbiAgICB0aGF0Lm9yZGVyTGlzdCA9IFtdO1xuICAgIHRoYXQuY3VycmVudFRhYiA9IG9wdHMudHlwZTtcbiAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAvL+iuvue9rua7muWKqOmrmOW6plxuICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTyk7XG4gICAgdGhhdC53aW5IZWlnaHQgPSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRDdXJyZW50VGFiKGN1ciwgZXZ0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIHRoaXMucGFnZV90b3RhbCA9IDA7XG4gICAgICB0aGlzLm9yZGVyTGlzdCA9IFtdO1xuXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBjdXI7XG4gICAgICBjb25zb2xlLmxvZyhcImN1clwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cik7XG4gICAgICBpZiAoY3VyID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSBcIlwiO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyID09IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmnKrku5jmrL7orqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAwO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VyID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvoXmlLbotKforqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAyO1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9MjtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGN1ciA9PSAzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLlt7LlrozmiJDorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSA0O1xuICAgICAgICB0aGF0LnJlY2VpdmVGbGc9NDtcbiAgICAgICAgdGhhdC5nZXRNeU9yZGVyKCk7XG4gICAgICB9XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ruR5Yqo5YiH5o2idGFiXG4gICAgICovXG4gICAgYmluZENoYW5nZShlKSB7XG5cbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSB0YWIuLi4uXCIgKyBlLmRldGFpbGN1cnJlbnQpO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9LFxuICB9XG4gIGV2ZW50cyA9IHtcbiAgICByZWZyZXNoT3JkZXJMaXN0KG1zZyl7XG4gICAgICBjb25zb2xlLmxvZyhcIm1zZ+WAvDpcIittc2cpO1xuICAgICAgaWYobXNnPT0zKXtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiPTM7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIHRoaXMub3JkZXJTdGF0dXMgPSA0O1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRNeU9yZGVyKDEsMTAsMSk7XG4gICAgfVxuICB9XG4gIHdhdGNoID0ge1xuICAgIGN1cnJlbnRUYWIodmFsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT1cIiArIHZhbClcbiAgICB9XG4gIH1cblxuICAvL+WKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295pu05aSaXCIpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIjIzMj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XG4gICAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgICAgaWYgKHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gdHJ1ZTtcbiAgICAgIHRoYXQuY3VycmVudFBhZ2UrKztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRhYik7XG4gICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGFiID09IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmnKrku5jmrL7orqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSAwO1xuICAgICAgICB0aGF0LmdldE15T3JkZXIodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRhYiA9PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b6F5Y+R6LSn6K6i5Y2V57G75Z6LXCIpO1xuICAgICAgICB0aGF0Lm9yZGVyU3RhdHVzID0gMTtcbiAgICAgICAgdGhhdC5yZWNlaXZlRmxnPTE7XG4gICAgICAgIHRoYXQuZ2V0TXlPcmRlcih0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VGFiID09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlt7LlrozmiJDorqLljZXnsbvlnotcIik7XG4gICAgICAgIHRoYXQub3JkZXJTdGF0dXMgPSA0O1xuICAgICAgICB0aGF0LmdldE15T3JkZXIodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB9XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbn1cblxuIl19