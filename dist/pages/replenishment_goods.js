'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _constant = require('./../utils/constant.js');

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var replenishmentGoods = function (_wepy$page) {
  _inherits(replenishmentGoods, _wepy$page);

  function replenishmentGoods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, replenishmentGoods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = replenishmentGoods.__proto__ || Object.getPrototypeOf(replenishmentGoods)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我要补货'
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" }, "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无待补货数据" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      purchasetype: 2, //类型:1-商品订单;2-商品补单;
      currentTab: 0,
      winHeight: 0,
      tabList: ["快速补货", "申请记录", "待补货"],
      list: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false
    }, _this.computed = {}, _this.methods = {
      getCurrentTab: function getCurrentTab(cur, evt) {
        var that = this;
        that.currentTab = cur;
        //this.getMyOrderGoodsList();
        that.$apply();
      },

      /**
       * 滑动切换tab
       */
      bindChange: function bindChange(e) {
        var that = this;
        that.currentTab = e.detail.current;
        this.list = [];
        this.currentPage = 1;
        this.page_total = 0;
        this.is_empty = false;
        this.getMyOrderGoodsList();
        that.$apply();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(replenishmentGoods, [{
    key: 'getMyOrderGoodsList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 4;
                return _api2.default.goodsUserOrderList({
                  query: {
                    page: currentPage || 1,
                    size: size || 4,
                    openId: openId,
                    type: 'finish',
                    doType: this.currentTab
                  }
                });

              case 4:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(json.data.list));
                  this.page_total = json.data.page_total;
                  if (json.data.page_total == 0) {
                    //暂无数据
                    this.is_empty = true;
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.showLoading = false;
                this.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMyOrderGoodsList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getMyOrderGoodsList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var systemInfo = wx.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      this.list = [];
      this.is_empty = false;
      this.getMyOrderGoodsList();
      /*that.list = bb.result.products;
      console.log(bb.result.products)*/
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
        this.getMyOrderGoodsList(this.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return replenishmentGoods;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(replenishmentGoods , 'pages/replenishment_goods'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxlbmlzaG1lbnRfZ29vZHMuanMiXSwibmFtZXMiOlsicmVwbGVuaXNobWVudEdvb2RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIlRhYiIsInNob3BHcmlkTGlzdCIsIlNob3BHcmlkTGlzdCIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsInB1cmNoYXNldHlwZSIsImN1cnJlbnRUYWIiLCJ3aW5IZWlnaHQiLCJ0YWJMaXN0IiwibGlzdCIsImlzX2VtcHR5IiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwic2hvd0xvYWRpbmciLCJwcmV2ZW50UmVwZWF0UmV1cWVzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdldEN1cnJlbnRUYWIiLCJjdXIiLCJldnQiLCJ0aGF0IiwiJGFwcGx5IiwiYmluZENoYW5nZSIsImUiLCJkZXRhaWwiLCJjdXJyZW50IiwiZ2V0TXlPcmRlckdvb2RzTGlzdCIsImV2ZW50cyIsInNpemUiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJnb29kc1VzZXJPcmRlckxpc3QiLCJxdWVyeSIsInBhZ2UiLCJ0eXBlIiwiZG9UeXBlIiwianNvbiIsImNvZGUiLCJ0aXAiLCJlcnJvciIsIm1zZyIsInN5c3RlbUluZm8iLCJ3eCIsIlNZU1RFTV9JTkZPIiwid2luZG93SGVpZ2h0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGtCOzs7Ozs7Ozs7Ozs7Ozs4TUFDbkJD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cUJBQUtRLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFVBQUlELE9BQU8sSUFBWDtBQUNBLFVBQUkwQixhQUFhQyxHQUFHaEIsY0FBSCxDQUFrQmlCLHFCQUFsQixDQUFqQjtBQUNBNUIsV0FBS2IsU0FBTCxHQUFpQnVDLFdBQVdHLFlBQTVCO0FBQ0EsV0FBS3hDLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFdBQUtnQixtQkFBTDtBQUNBOztBQUVEOzs7OztBQTZCRDtvQ0FDZ0I7QUFDZHdCLGNBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsVUFBSS9CLE9BQU8sSUFBWDtBQUNBQSxXQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0FxQyxjQUFRQyxHQUFSLENBQVkvQixLQUFLUixVQUFMLEdBQWtCLFFBQWxCLEdBQTZCUSxLQUFLVCxXQUE5QztBQUNBO0FBQ0EsVUFBS1MsS0FBS1IsVUFBTixHQUFvQlEsS0FBS1QsV0FBN0IsRUFBMEM7QUFDeEM7QUFDQSxZQUFJUyxLQUFLTixvQkFBVCxFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRE0sYUFBS04sb0JBQUwsR0FBNEIsSUFBNUI7QUFDQU0sYUFBS1QsV0FBTDtBQUNBdUMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLN0MsVUFBakI7QUFDQSxhQUFLb0IsbUJBQUwsQ0FBeUIsS0FBS2YsV0FBOUI7QUFDQVMsYUFBS04sb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQVZELE1BVU87QUFDTE0sYUFBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUFuSDZDaUIsZUFBS1EsSTs7a0JBQWhDakQsa0IiLCJmaWxlIjoicmVwbGVuaXNobWVudF9nb29kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgVGFiIGZyb20gJ0AvY29tcG9uZW50cy90YWInO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IFNob3BHcmlkTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc2hvcF9ncmlkX2xpc3QnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXBsZW5pc2htZW50R29vZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeimgeihpei0pycsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIn0sXCJzaG9wR3JpZExpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnB1cmNoYXNldHlwZS5zeW5jXCI6XCJwdXJjaGFzZXR5cGVcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIn0sXCJib3R0b21Mb2FkTW9yZVwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6DlvoXooaXotKfmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge1widGFiXCI6e1widi1vbjpjdXJyZW50VGFiXCI6XCJnZXRDdXJyZW50VGFiXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdGFiOiBUYWIsXG4gICAgc2hvcEdyaWRMaXN0OiBTaG9wR3JpZExpc3QsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlclxuICB9XG4gIGRhdGEgPSB7XG4gICAgcHVyY2hhc2V0eXBlIDogMiwgLy/nsbvlnos6MS3llYblk4HorqLljZU7Mi3llYblk4HooaXljZU7XG4gICAgY3VycmVudFRhYjogMCxcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgdGFiTGlzdDogW1wi5b+r6YCf6KGl6LSnXCIsIFwi55Sz6K+36K6w5b2VXCIsIFwi5b6F6KGl6LSnXCJdLFxuICAgIGxpc3Q6IFtdLFxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZVxuICB9XG5cbiAgYXN5bmMgZ2V0TXlPcmRlckdvb2RzTGlzdChjdXJyZW50UGFnZSxzaXplKSB7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdvb2RzVXNlck9yZGVyTGlzdCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSB8fCAxLFxuICAgICAgICBzaXplOiBzaXplIHx8IDQsXG4gICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICB0eXBlOiAnZmluaXNoJyxcbiAgICAgICAgZG9UeXBlOnRoaXMuY3VycmVudFRhYlxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLmxpc3QgPSBbLi4udGhpcy5saXN0LCAuLi5qc29uLmRhdGEubGlzdF07XG4gICAgICB0aGlzLnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbDtcbiAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCA9PSAwKSB7XG4gICAgICAgIC8v5pqC5peg5pWw5o2uXG4gICAgICAgIHRoaXMuaXNfZW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPKTtcbiAgICB0aGF0LndpbkhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmdldE15T3JkZXJHb29kc0xpc3QoKTtcbiAgICAvKnRoYXQubGlzdCA9IGJiLnJlc3VsdC5wcm9kdWN0cztcbiAgICBjb25zb2xlLmxvZyhiYi5yZXN1bHQucHJvZHVjdHMpKi9cbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2V0Q3VycmVudFRhYihjdXIsIGV2dCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhhdC5jdXJyZW50VGFiID0gY3VyO1xuICAgICAgLy90aGlzLmdldE15T3JkZXJHb29kc0xpc3QoKTtcbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmu5HliqjliIfmjaJ0YWJcbiAgICAgKi9cbiAgICBiaW5kQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgdGhpcy5wYWdlX3RvdGFsID0gMDtcbiAgICAgIHRoaXMuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0TXlPcmRlckdvb2RzTGlzdCgpO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9LFxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG5cbiAgLy/liqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuWKoOi9veabtOWkmlwiKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCIyMzI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUYWIpO1xuICAgICAgdGhpcy5nZXRNeU9yZGVyR29vZHNMaXN0KHRoaXMuY3VycmVudFBhZ2UpO1xuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG5cbn1cblxuIl19