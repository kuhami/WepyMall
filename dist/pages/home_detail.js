'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _filter_bar = require('./../components/filter_bar.js');

var _filter_bar2 = _interopRequireDefault(_filter_bar);

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeDetail = function (_wepy$page) {
  _inherits(HomeDetail, _wepy$page);

  function HomeDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomeDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomeDetail.__proto__ || Object.getPrototypeOf(HomeDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '',
      enablePullDownRefresh: true //单页面配置下拉刷新
    }, _this.data = {
      catCode: "",
      cate: {},
      list: [],
      purchasetype: 1,
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      sort: 1,
      skuval: ""
    }, _this.$repeat = {}, _this.$props = { "filterBar": { "xmlns:v-on": "" }, "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "filterBar": { "v-on:currentType": "currentType" } }, _this.components = {
      filterBar: _filter_bar2.default,
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.computed = {}, _this.methods = {
      currentType: function currentType(obj) {
        //tip.success("状态:" + obj);
        var name = obj.name;
        var type = obj.type;
        if (name == "zhonghe") {
          this.sort = -1;
        } else if (name == "sale") {
          this.sort = 3;
        } else if (name == "price") {
          if (type == "desc") {
            this.sort = 2;
          } else if (type == "asc") {
            this.sort = 1;
          }
        } else if (name == "sku") {
          this.skuval = type;
        }
        this.list = [];
        this.showLoading = true;
        this.is_empty = false;
        this.getGoodList();
      },

      onShareAppMessage: function onShareAppMessage(res) {
        console.log(res);
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.cate.name,
          path: '/pages/home_detail?code=' + this.catCode,
          success: function success(res) {
            // 转发成功
            console.log(res);
            _tip2.default.success(res);
          },
          fail: function fail(res) {
            // 转发失败
            console.log(res);
            _tip2.default.error(res);
          }
        };
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomeDetail, [{
    key: 'getGoodList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                //const json = await api.getGoodsList({

                _context.next = 3;
                return _api2.default.hostGoodsList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10,
                    cateCode: this.catCode,
                    sort: this.sort,
                    skuval: this.skuval
                  }
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.cate = json.data.category;
                  wx.setNavigationBarTitle({ title: that.cate.name });
                  that.list = [].concat(_toConsumableArray(that.list), _toConsumableArray(json.data.list));
                  that.page_total = json.data.page_total;
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGoodList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getGoodList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      console.log(option);
      this.cate = {};
      this.list = [];
      this.skuval = "";
      this.catCode = option.code;
      this.is_empty = false;
      //当前页面
      this.currentPage = 1;
      //总页数
      this.page_total = 0;
      //是否显示 底部loading
      this.showLoading = true;
      //防止重复加载
      this.preventRepeatReuqest = false;
      this.sort = 1;
      console.log("id===" + this.catCode);
      //this.list = bb.result.products;
      //this.$apply();
      this.getGoodList();
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
        that.getGoodList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log(this);
    }
  }]);

  return HomeDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(HomeDetail , 'pages/home_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkhvbWVEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImNhdENvZGUiLCJjYXRlIiwibGlzdCIsInB1cmNoYXNldHlwZSIsImlzX2VtcHR5IiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwic2hvd0xvYWRpbmciLCJwcmV2ZW50UmVwZWF0UmV1cWVzdCIsInNvcnQiLCJza3V2YWwiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmaWx0ZXJCYXIiLCJGaWx0ZXJCYXIiLCJzaG9wR3JpZExpc3QiLCJTaG9wR3JpZExpc3QiLCJib3R0b21Mb2FkTW9yZSIsIkJvdHRvbUxvYWRNb3JlIiwicGxhY2Vob2xkZXIiLCJQbGFjZWhvbGRlciIsImNvbXB1dGVkIiwibWV0aG9kcyIsImN1cnJlbnRUeXBlIiwib2JqIiwibmFtZSIsInR5cGUiLCJnZXRHb29kTGlzdCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwidGlwIiwiZmFpbCIsImVycm9yIiwiZXZlbnRzIiwic2l6ZSIsInRoYXQiLCJhcGkiLCJob3N0R29vZHNMaXN0IiwicXVlcnkiLCJwYWdlIiwiY2F0ZUNvZGUiLCJqc29uIiwiY29kZSIsImNhdGVnb3J5Iiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJtc2ciLCIkYXBwbHkiLCJvcHRpb24iLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEVBRGpCO0FBRVBDLDZC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TCxHQUFrQixDQUFsQjtBQUNBO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBO0FBQ0EsV0FBS0Msb0JBQUwsR0FBNEIsS0FBNUI7QUFDQSxXQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBdUIsY0FBUUMsR0FBUixDQUFZLFVBQVEsS0FBS2pDLE9BQXpCO0FBQ0E7QUFDQTtBQUNBLFdBQUs2QixXQUFMO0FBQ0Q7Ozs7QUFxREQ7b0NBQ2dCO0FBQ2QsVUFBSWUsT0FBTyxJQUFYO0FBQ0FBLFdBQUtyQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0F5QixjQUFRQyxHQUFSLENBQVlXLEtBQUt0QyxVQUFMLEdBQWtCLEtBQWxCLEdBQTBCc0MsS0FBS3ZDLFdBQTNDO0FBQ0E7QUFDQSxVQUFLdUMsS0FBS3RDLFVBQU4sR0FBb0JzQyxLQUFLdkMsV0FBN0IsRUFBMEM7QUFDeEM7QUFDQSxZQUFJdUMsS0FBS3BDLG9CQUFULEVBQStCO0FBQzdCLGlCQUFPLElBQVA7QUFDRDtBQUNEb0MsYUFBS3BDLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FvQyxhQUFLdkMsV0FBTDtBQUNBdUMsYUFBS2YsV0FBTCxDQUFpQmUsS0FBS3ZDLFdBQXRCO0FBQ0F1QyxhQUFLcEMsb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQVRELE1BU087QUFDTG9DLGFBQUtyQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRjs7O3dDQUVtQjtBQUNsQnlCLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7Ozs7RUEzSnFDeUIsZUFBS1YsSTs7a0JBQXhCckQsVSIsImZpbGUiOiJob21lX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlcl9iYXJcIlxuaW1wb3J0IFNob3BHcmlkTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc2hvcF9ncmlkX2xpc3QnXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZURldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsLy/ljZXpobXpnaLphY3nva7kuIvmi4nliLfmlrBcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhdENvZGU6IFwiXCIsXG4gICAgY2F0ZTp7fSxcbiAgICBsaXN0OiBbXSxcbiAgICBwdXJjaGFzZXR5cGU6IDEsXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcbiAgICBzb3J0OiAxLFxuICAgIHNrdXZhbDogXCJcIlxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJmaWx0ZXJCYXJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJzaG9wR3JpZExpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnB1cmNoYXNldHlwZS5zeW5jXCI6XCJwdXJjaGFzZXR5cGVcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIn0sXCJib3R0b21Mb2FkTW9yZVwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge1wiZmlsdGVyQmFyXCI6e1widi1vbjpjdXJyZW50VHlwZVwiOlwiY3VycmVudFR5cGVcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBmaWx0ZXJCYXI6IEZpbHRlckJhcixcbiAgICBzaG9wR3JpZExpc3Q6IFNob3BHcmlkTGlzdCxcbiAgICBib3R0b21Mb2FkTW9yZTogQm90dG9tTG9hZE1vcmUsXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXG4gIH1cblxuICBhc3luYyBnZXRHb29kTGlzdChjdXJyZW50UGFnZSwgc2l6ZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvL2NvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0R29vZHNMaXN0KHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmhvc3RHb29kc0xpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMCxcbiAgICAgICAgY2F0ZUNvZGU6IHRoaXMuY2F0Q29kZSxcbiAgICAgICAgc29ydDogdGhpcy5zb3J0LFxuICAgICAgICBza3V2YWw6IHRoaXMuc2t1dmFsXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoYXQuY2F0ZSA9IGpzb24uZGF0YS5jYXRlZ29yeTtcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7ICB0aXRsZTogdGhhdC5jYXRlLm5hbWV9KVxuICAgICAgdGhhdC5saXN0ID0gWy4uLnRoYXQubGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWw7XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb24pXG4gICAgdGhpcy5jYXRlPXt9O1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMuc2t1dmFsID0gXCJcIjtcbiAgICB0aGlzLmNhdENvZGUgPSBvcHRpb24uY29kZTtcbiAgICB0aGlzLmlzX2VtcHR5ID0gZmFsc2U7XG4gICAgLy/lvZPliY3pobXpnaJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAvL+aAu+mhteaVsFxuICAgIHRoaXMucGFnZV90b3RhbCA9IDA7XG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgdGhpcy5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIHRoaXMuc29ydCA9IDE7XG4gICAgY29uc29sZS5sb2coXCJpZD09PVwiK3RoaXMuY2F0Q29kZSk7XG4gICAgLy90aGlzLmxpc3QgPSBiYi5yZXN1bHQucHJvZHVjdHM7XG4gICAgLy90aGlzLiRhcHBseSgpO1xuICAgIHRoaXMuZ2V0R29vZExpc3QoKTtcbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY3VycmVudFR5cGUob2JqKSB7XG4gICAgICAvL3RpcC5zdWNjZXNzKFwi54q25oCBOlwiICsgb2JqKTtcbiAgICAgIHZhciBuYW1lID0gb2JqLm5hbWU7XG4gICAgICB2YXIgdHlwZSA9IG9iai50eXBlO1xuICAgICAgaWYgKG5hbWU9PVwiemhvbmdoZVwiKSB7XG4gICAgICAgIHRoaXMuc29ydCA9IC0xO1xuICAgICAgfSBlbHNlIGlmIChuYW1lPT1cInNhbGVcIikge1xuICAgICAgICB0aGlzLnNvcnQgPSAzO1xuICAgICAgfSBlbHNlIGlmIChuYW1lPT1cInByaWNlXCIpIHtcbiAgICAgICAgaWYgKHR5cGU9PVwiZGVzY1wiKSB7XG4gICAgICAgICAgdGhpcy5zb3J0ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlPT1cImFzY1wiKSB7XG4gICAgICAgICAgdGhpcy5zb3J0ID0gMTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYgKG5hbWUgPT0gXCJza3VcIikge1xuICAgICAgICB0aGlzLnNrdXZhbCA9IHR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pc19lbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRHb29kTGlzdCgpO1xuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGhpcy5jYXRlLm5hbWUsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaG9tZV9kZXRhaWw/Y29kZT0nK3RoaXMuY2F0Q29kZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIHRpcC5zdWNjZXNzKHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICB0aXAuZXJyb3IocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcblxuICB9XG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhhdC5nZXRHb29kTGlzdCh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxuICB9O1xuXG59XG5cbiJdfQ==