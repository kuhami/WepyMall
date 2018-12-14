'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

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

var wholesale = function (_wepy$page) {
  _inherits(wholesale, _wepy$page);

  function wholesale() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, wholesale);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = wholesale.__proto__ || Object.getPrototypeOf(wholesale)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '特价专区'
    }, _this.$repeat = {}, _this.$props = { "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:special.sync": "special", "v-bind:list.sync": "list" }, "bottomLoadMore": { "xmlns:v-bind": "", "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "xmlns:v-bind": "", "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = {}, _this.components = {
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      list: [],
      purchasetype: 1,
      special: 1, ////0-正常入库;1-特价专区和换货专区
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
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(wholesale, [{
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
                    locationFlag: 101
                  }
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
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
    value: function onLoad() {
      var that = this;
      that.list = [];
      //that.list = bb.result.products;
      //console.log(bb.result.products)
      that.getGoodList();
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
  }]);

  return wholesale;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(wholesale , 'pages/wholesale'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndob2xlc2FsZS5qcyJdLCJuYW1lcyI6WyJ3aG9sZXNhbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2hvcEdyaWRMaXN0IiwiU2hvcEdyaWRMaXN0IiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJkYXRhIiwibGlzdCIsInB1cmNoYXNldHlwZSIsInNwZWNpYWwiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzaXplIiwidGhhdCIsImFwaSIsImhvc3RHb29kc0xpc3QiLCJxdWVyeSIsInBhZ2UiLCJsb2NhdGlvbkZsYWciLCJqc29uIiwiY29kZSIsInRpcCIsImVycm9yIiwibXNnIiwiJGFwcGx5IiwiZ2V0R29vZExpc3QiLCJjb25zb2xlIiwibG9nIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDRCQUEyQixjQUE5QyxFQUE2RCx1QkFBc0IsU0FBbkYsRUFBNkYsb0JBQW1CLE1BQWhILEVBQWhCLEVBQXdJLGtCQUFpQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixhQUF0QyxFQUFvRCxXQUFVLE1BQTlELEVBQXpKLEVBQStOLGVBQWMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsV0FBVSxRQUEzRCxFQUE3TyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxvQkFBY0Msd0JBREo7QUFFVkMsc0JBQWdCQyx3QkFGTjtBQUdWQyxtQkFBYUM7QUFISCxLLFFBS1pDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsb0JBQWMsQ0FGVDtBQUdMQyxlQUFRLENBSEgsRUFHTTtBQUNYO0FBQ0FDLGdCQUFVLEtBTEw7QUFNTDtBQUNBQyxtQkFBYSxDQVBSO0FBUUw7QUFDQUMsa0JBQVksQ0FUUDtBQVVMO0FBQ0FDLG1CQUFhLElBWFI7QUFZTDtBQUNBQyw0QkFBc0I7QUFiakIsSyxRQThDTEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7OzsyRkFyQ1NOLFcsRUFBYU8sSTs7Ozs7O0FBQ3pCQyxvQixHQUFPLEk7QUFDWDs7O3VCQUNtQkMsY0FBSUMsYUFBSixDQUFrQjtBQUNuQ0MseUJBQU87QUFDTEMsMEJBQU1aLGVBQWUsQ0FEaEI7QUFFTE8sMEJBQU1BLFFBQVEsRUFGVDtBQUdMTSxrQ0FBYztBQUhUO0FBRDRCLGlCQUFsQixDOzs7QUFBYkMsb0I7O0FBT04sb0JBQUlBLEtBQUtuQixJQUFMLENBQVVvQixJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCUCx1QkFBS1osSUFBTCxnQ0FBZ0JZLEtBQUtaLElBQXJCLHNCQUE4QmtCLEtBQUtuQixJQUFMLENBQVVDLElBQXhDO0FBQ0FZLHVCQUFLUCxVQUFMLEdBQWtCYSxLQUFLbkIsSUFBTCxDQUFVTSxVQUE1QjtBQUNBLHNCQUFJYSxLQUFLbkIsSUFBTCxDQUFVTSxVQUFWLElBQXdCLENBQTVCLEVBQStCO0FBQzdCO0FBQ0FPLHlCQUFLVCxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFDRixpQkFQRCxNQU9PO0FBQ0xpQixnQ0FBSUMsS0FBSixDQUFVSCxLQUFLbkIsSUFBTCxDQUFVdUIsR0FBcEI7QUFDRDtBQUNEVixxQkFBS04sV0FBTCxHQUFtQixLQUFuQjtBQUNBTSxxQkFBS1csTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ0wsVUFBSVgsT0FBTyxJQUFYO0FBQ0FBLFdBQUtaLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDQTtBQUNBWSxXQUFLWSxXQUFMO0FBQ0g7Ozs7O0FBWUg7b0NBQ2dCO0FBQ2QsVUFBSVosT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLFdBQUwsR0FBbUIsSUFBbkI7QUFDQW1CLGNBQVFDLEdBQVIsQ0FBWWQsS0FBS1AsVUFBTCxHQUFrQixLQUFsQixHQUEwQk8sS0FBS1IsV0FBM0M7QUFDQTtBQUNBLFVBQUtRLEtBQUtQLFVBQU4sR0FBb0JPLEtBQUtSLFdBQTdCLEVBQTBDO0FBQ3hDO0FBQ0EsWUFBSVEsS0FBS0wsb0JBQVQsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0RLLGFBQUtMLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FLLGFBQUtSLFdBQUw7QUFDQVEsYUFBS1ksV0FBTCxDQUFpQlosS0FBS1IsV0FBdEI7QUFDQVEsYUFBS0wsb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQVRELE1BU087QUFDTEssYUFBS04sV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUF2Rm9DcUIsZUFBS1gsSTs7a0JBQXZCOUIsUyIsImZpbGUiOiJ3aG9sZXNhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IFNob3BHcmlkTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc2hvcF9ncmlkX2xpc3QnXG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdob2xlc2FsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54m55Lu35LiT5Yy6JyxcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2hvcEdyaWRMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwdXJjaGFzZXR5cGUuc3luY1wiOlwicHVyY2hhc2V0eXBlXCIsXCJ2LWJpbmQ6c3BlY2lhbC5zeW5jXCI6XCJzcGVjaWFsXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9LFwiYm90dG9tTG9hZE1vcmVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNob3cuc3luY1wiOlwic2hvd0xvYWRpbmdcIixcIm1lc3NhZ2VcIjpcIuato+WcqOWKoOi9vVwifSxcInBsYWNlaG9sZGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHNob3BHcmlkTGlzdDogU2hvcEdyaWRMaXN0LFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJcbiAgfVxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIHB1cmNoYXNldHlwZTogMSxcbiAgICBzcGVjaWFsOjEsIC8vLy8wLeato+W4uOWFpeW6kzsxLeeJueS7t+S4k+WMuuWSjOaNoui0p+S4k+WMulxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXG4gICAgaXNfZW1wdHk6IGZhbHNlLFxuICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy/mgLvpobXmlbBcbiAgICBwYWdlX3RvdGFsOiAwLFxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZVxuICB9XG5cbiAgICBhc3luYyBnZXRHb29kTGlzdChjdXJyZW50UGFnZSwgc2l6ZSkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgLy9jb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEdvb2RzTGlzdCh7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmhvc3RHb29kc0xpc3Qoe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMCxcbiAgICAgICAgICBsb2NhdGlvbkZsYWc6IDEwMVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcbiAgICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWw7XG4gICAgICAgIGlmIChqc29uLmRhdGEucGFnZV90b3RhbCA9PSAwKSB7XG4gICAgICAgICAgLy/mmoLml6DmlbDmja5cbiAgICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xuICAgICAgfVxuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQubGlzdCA9IFtdO1xuICAgICAgICAvL3RoYXQubGlzdCA9IGJiLnJlc3VsdC5wcm9kdWN0cztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhiYi5yZXN1bHQucHJvZHVjdHMpXG4gICAgICAgIHRoYXQuZ2V0R29vZExpc3QoKTtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcblxuXG4gICAgfVxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAvL+WKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XG4gICAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxuICAgICAgaWYgKHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gdHJ1ZTtcbiAgICAgIHRoYXQuY3VycmVudFBhZ2UrKztcbiAgICAgIHRoYXQuZ2V0R29vZExpc3QodGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbn1cbiJdfQ==