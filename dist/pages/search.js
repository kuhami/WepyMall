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

var _constant = require('./../utils/constant.js');

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _filter_bar = require('./../components/filter_bar.js');

var _filter_bar2 = _interopRequireDefault(_filter_bar);

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _filterSlider = require('./../components/filterSlider.js');

var _filterSlider2 = _interopRequireDefault(_filterSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-on": "" }, "filterBar": { "xmlns:wx": "" }, "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "search": { "v-on:searchValue": "doSearch" }, "filterBar": { "v-on:currentType": "currentType" } }, _this.components = {
      search: _search2.default,
      filterBar: _filter_bar2.default,
      filterSlider: _filterSlider2.default,
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      list: [],
      showLoading: false,
      purchasetype: 1,
      is_empty: false,
      is_filter: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      keyword: "",
      keywordhisList: [],
      cateCode: "",
      show: true,
      sort: -1,
      title: "",
      skuval: ""
    }, _this.computed = {}, _this.methods = {
      doSearch: function doSearch(val) {
        this.list = [];
        this.is_empty = false;
        //tip.success("搜索：" + val);
        this.showLoading = true;
        this.keyword = val;
        this.doSearchGoods(val);
        //this.list = bb.result.products;
        //this.$apply();
      },
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
        this.is_empty = false;
        this.showLoading = true;
        //this.$invoke('search', 'show', "0");
        this.show = false;
        this.doSearchGoods(this.keyword);
      },
      selHisKeyWord: function selHisKeyWord(e) {
        console.log(e);
        var id = e.currentTarget.dataset.id;
        var hisKeyword = "";
        for (var i = 0; i < this.keywordhisList.length; i++) {
          this.keywordhisList[i].sel = 0;
          if (id == this.keywordhisList[i].id) {
            hisKeyword = this.keywordhisList[i].keyword;
            this.keywordhisList[i].sel = 1;
          }
        }
        if (hisKeyword.length > 0) {
          this.keyword = hisKeyword;
          this.doSearchGoods(hisKeyword);
        }
      },
      clearHis: function clearHis() {
        this.clearUserKeywords();
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.detail.name,
          path: '/pages/search?cateCode=' + this.cateCode + '&title=' + this.title,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
      //加载更多
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'getKeyWordHisList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 4;
                return _api2.default.searchKeywordList({
                  query: {
                    openId: openId
                  }
                });

              case 4:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.keywordhisList = json.data.list;
                }
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getKeyWordHisList() {
        return _ref2.apply(this, arguments);
      }

      return getKeyWordHisList;
    }()
  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      _wepy2.default.setNavigationBarTitle({
        title: title
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      this.list = [];
      this.skuval = "";
      this.cateCode = option.cateCode;
      if (this.cateCode != undefined && this.cateCode.length > 0) {
        //分类进入
        this.$invoke('search', 'show', "0");
        this.show = false;
        this.doSearchGoods(this.cateCode);
        this.title = "" + option.title;
        this.setTitle("" + option.title);
      } else {
        //搜索进入
        this.$invoke('search', 'show', "1");
        this.show = true;
        this.getKeyWordHisList();
      }
    }
  }, {
    key: 'doSearchGoods',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(keyword, currentPage, size) {
        var that, json, userSpecialInfo, openId, resultJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                _context2.next = 3;
                return _api2.default.getGoodsList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10,
                    searchKeyWords: this.keyword,
                    cateCode: this.cateCode || "",
                    sort: this.sort,
                    skuval: this.skuval
                  }
                });

              case 3:
                json = _context2.sent;

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

                if (!(keyword.length > 0)) {
                  _context2.next = 13;
                  break;
                }

                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 12;
                return _api2.default.addSearchKeyword({
                  query: {
                    openId: openId,
                    keyword: keyword
                  }
                });

              case 12:
                resultJson = _context2.sent;

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doSearchGoods(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return doSearchGoods;
    }()
  }, {
    key: 'clearUserKeywords',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 4;
                return _api2.default.clearSearchKeyword({
                  query: {
                    openId: openId
                  }
                });

              case 4:
                json = _context3.sent;

                if (json.data.code == 0) {
                  this.keywordhisList = [];
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clearUserKeywords() {
        return _ref4.apply(this, arguments);
      }

      return clearUserKeywords;
    }()
  }, {
    key: 'onReachBottom',
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
        that.doSearchGoods("", that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiU2VhcmNocyIsImZpbHRlckJhciIsIkZpbHRlckJhciIsImZpbHRlclNsaWRlciIsIkZpbHRlclNsaWRlciIsInNob3BHcmlkTGlzdCIsIlNob3BHcmlkTGlzdCIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsImxpc3QiLCJzaG93TG9hZGluZyIsInB1cmNoYXNldHlwZSIsImlzX2VtcHR5IiwiaXNfZmlsdGVyIiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwia2V5d29yZCIsImtleXdvcmRoaXNMaXN0IiwiY2F0ZUNvZGUiLCJzaG93Iiwic29ydCIsInRpdGxlIiwic2t1dmFsIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZG9TZWFyY2giLCJ2YWwiLCJkb1NlYXJjaEdvb2RzIiwiY3VycmVudFR5cGUiLCJvYmoiLCJuYW1lIiwidHlwZSIsInNlbEhpc0tleVdvcmQiLCJlIiwiY29uc29sZSIsImxvZyIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJoaXNLZXl3b3JkIiwiaSIsImxlbmd0aCIsInNlbCIsImNsZWFySGlzIiwiY2xlYXJVc2VyS2V5d29yZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJ0YXJnZXQiLCJkZXRhaWwiLCJwYXRoIiwic3VjY2VzcyIsImZhaWwiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJzZWFyY2hLZXl3b3JkTGlzdCIsInF1ZXJ5IiwianNvbiIsImNvZGUiLCIkYXBwbHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCIkaW52b2tlIiwic2V0VGl0bGUiLCJnZXRLZXlXb3JkSGlzTGlzdCIsInNpemUiLCJ0aGF0IiwiZ2V0R29vZHNMaXN0IiwicGFnZSIsInNlYXJjaEtleVdvcmRzIiwidGlwIiwiZXJyb3IiLCJtc2ciLCJhZGRTZWFyY2hLZXl3b3JkIiwicmVzdWx0SnNvbiIsImNsZWFyU2VhcmNoS2V5d29yZCIsInByZXZlbnRSZXBlYXRSZXVxZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxjQUFhLEVBQWQsRUFBVixFQUE0QixhQUFZLEVBQUMsWUFBVyxFQUFaLEVBQXhDLEVBQXdELGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsNEJBQTJCLGNBQTlDLEVBQTZELG9CQUFtQixNQUFoRixFQUF2RSxFQUErSixrQkFBaUIsRUFBQyxvQkFBbUIsYUFBcEIsRUFBa0MsV0FBVSxNQUE1QyxFQUFoTCxFQUFvTyxlQUFjLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLFdBQVUsUUFBekMsRUFBbFAsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsb0JBQW1CLFVBQXBCLEVBQVYsRUFBMEMsYUFBWSxFQUFDLG9CQUFtQixhQUFwQixFQUF0RCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxjQUFRQyxnQkFEQTtBQUVSQyxpQkFBV0Msb0JBRkg7QUFHUkMsb0JBQWNDLHNCQUhOO0FBSVJDLG9CQUFjQyx3QkFKTjtBQUtSQyxzQkFBZ0JDLHdCQUxSO0FBTVJDLG1CQUFhQztBQU5MLEssUUFRVkMsSSxHQUFPO0FBQ0xDLFlBQU0s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QUs3QyxhQUFMLENBQW1CLEVBQW5CLEVBQXVCNkMsS0FBSzFELFdBQTVCO0FBQ0EwRCxhQUFLVSxvQkFBTCxHQUE0QixLQUE1QjtBQUNELE9BVEQsTUFTTztBQUNMVixhQUFLOUQsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUEvTWlDNEMsZUFBS29CLEk7O2tCQUFwQnJGLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIGltcG9ydCB7XG4gICAgU1lTVEVNX0lORk8sXG4gICAgVVNFUl9TUEVDSUNBTF9JTkZPXG4gIH0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG4gIGltcG9ydCBTZWFyY2hzIGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2gnXG4gIGltcG9ydCBGaWx0ZXJCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlsdGVyX2JhclwiXG4gIGltcG9ydCBTaG9wR3JpZExpc3QgZnJvbSAnQC9jb21wb25lbnRzL3Nob3BfZ3JpZF9saXN0J1xuICBpbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbiAgaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG4gIGltcG9ydCBGaWx0ZXJTbGlkZXIgZnJvbSAnQC9jb21wb25lbnRzL2ZpbHRlclNsaWRlcidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJyxcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaFwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImZpbHRlckJhclwiOntcInhtbG5zOnd4XCI6XCJcIn0sXCJzaG9wR3JpZExpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnB1cmNoYXNldHlwZS5zeW5jXCI6XCJwdXJjaGFzZXR5cGVcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIn0sXCJib3R0b21Mb2FkTW9yZVwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge1wic2VhcmNoXCI6e1widi1vbjpzZWFyY2hWYWx1ZVwiOlwiZG9TZWFyY2hcIn0sXCJmaWx0ZXJCYXJcIjp7XCJ2LW9uOmN1cnJlbnRUeXBlXCI6XCJjdXJyZW50VHlwZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgc2VhcmNoOiBTZWFyY2hzLFxuICAgICAgZmlsdGVyQmFyOiBGaWx0ZXJCYXIsXG4gICAgICBmaWx0ZXJTbGlkZXI6IEZpbHRlclNsaWRlcixcbiAgICAgIHNob3BHcmlkTGlzdDogU2hvcEdyaWRMaXN0LFxuICAgICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxuICAgICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHNob3dMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHB1cmNoYXNldHlwZTogMSxcbiAgICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICAgIGlzX2ZpbHRlcjpmYWxzZSxcbiAgICAgIC8v5b2T5YmN6aG16Z2iXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIC8v5oC76aG15pWwXG4gICAgICBwYWdlX3RvdGFsOiAwLFxuICAgICAga2V5d29yZDogXCJcIixcbiAgICAgIGtleXdvcmRoaXNMaXN0OiBbXSxcbiAgICAgIGNhdGVDb2RlOiBcIlwiLFxuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIHNvcnQ6IC0xLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBza3V2YWw6IFwiXCJcbiAgICB9XG4gICAgYXN5bmMgZ2V0S2V5V29yZEhpc0xpc3QoKSB7XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLnNlYXJjaEtleXdvcmRMaXN0KHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIHRoaXMua2V5d29yZGhpc0xpc3QgPSBqc29uLmRhdGEubGlzdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgfSlcbiAgICB9XG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICB0aGlzLnNrdXZhbCA9IFwiXCI7XG4gICAgICB0aGlzLmNhdGVDb2RlID0gb3B0aW9uLmNhdGVDb2RlO1xuICAgICAgaWYgKHRoaXMuY2F0ZUNvZGUgIT0gdW5kZWZpbmVkICYmIHRoaXMuY2F0ZUNvZGUubGVuZ3RoID4gMCkgeyAvL+WIhuexu+i/m+WFpVxuICAgICAgICB0aGlzLiRpbnZva2UoJ3NlYXJjaCcsICdzaG93JywgXCIwXCIpO1xuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb1NlYXJjaEdvb2RzKHRoaXMuY2F0ZUNvZGUpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJcIiArIG9wdGlvbi50aXRsZTtcbiAgICAgICAgdGhpcy5zZXRUaXRsZShcIlwiICsgb3B0aW9uLnRpdGxlKTtcbiAgICAgIH0gZWxzZSB7IC8v5pCc57Si6L+b5YWlXG4gICAgICAgIHRoaXMuJGludm9rZSgnc2VhcmNoJywgJ3Nob3cnLCBcIjFcIik7XG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0S2V5V29yZEhpc0xpc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7fVxuICAgIGFzeW5jIGRvU2VhcmNoR29vZHMoa2V5d29yZCwgY3VycmVudFBhZ2UsIHNpemUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0R29vZHNMaXN0KHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSB8fCAxLFxuICAgICAgICAgIHNpemU6IHNpemUgfHwgMTAsXG4gICAgICAgICAgc2VhcmNoS2V5V29yZHM6IHRoaXMua2V5d29yZCxcbiAgICAgICAgICBjYXRlQ29kZTogdGhpcy5jYXRlQ29kZSB8fCBcIlwiLFxuICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcbiAgICAgICAgICBza3V2YWw6IHRoaXMuc2t1dmFsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgdGhhdC5saXN0ID0gWy4uLnRoYXQubGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuICAgICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbDtcbiAgICAgICAgaWYgKGpzb24uZGF0YS5wYWdlX3RvdGFsID09IDApIHtcbiAgICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgICB9XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgaWYgKGtleXdvcmQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IGFwaS5hZGRTZWFyY2hLZXl3b3JkKHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgICAgICBrZXl3b3JkOiBrZXl3b3JkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgY2xlYXJVc2VyS2V5d29yZHMoKSB7XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNsZWFyU2VhcmNoS2V5d29yZCh7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgb3BlbklkOiBvcGVuSWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICB0aGlzLmtleXdvcmRoaXNMaXN0ID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgZG9TZWFyY2godmFsKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmlzX2VtcHR5ID0gZmFsc2U7XG4gICAgICAgIC8vdGlwLnN1Y2Nlc3MoXCLmkJzntKLvvJpcIiArIHZhbCk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSB2YWw7XG4gICAgICAgIHRoaXMuZG9TZWFyY2hHb29kcyh2YWwpO1xuICAgICAgICAvL3RoaXMubGlzdCA9IGJiLnJlc3VsdC5wcm9kdWN0cztcbiAgICAgICAgLy90aGlzLiRhcHBseSgpO1xuICAgICAgfSxcbiAgICAgIGN1cnJlbnRUeXBlKG9iaikge1xuICAgICAgICAvL3RpcC5zdWNjZXNzKFwi54q25oCBOlwiICsgb2JqKTtcbiAgICAgICAgdmFyIG5hbWUgPSBvYmoubmFtZTtcbiAgICAgICAgdmFyIHR5cGUgPSBvYmoudHlwZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ6aG9uZ2hlXCIpIHtcbiAgICAgICAgICB0aGlzLnNvcnQgPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwic2FsZVwiKSB7XG4gICAgICAgICAgdGhpcy5zb3J0ID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwicHJpY2VcIikge1xuICAgICAgICAgIGlmICh0eXBlID09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImFzY1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwic2t1XCIpIHtcbiAgICAgICAgICB0aGlzLnNrdXZhbCA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIHRoaXMuaXNfZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIC8vdGhpcy4kaW52b2tlKCdzZWFyY2gnLCAnc2hvdycsIFwiMFwiKTtcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG9TZWFyY2hHb29kcyh0aGlzLmtleXdvcmQpO1xuICAgICAgfSxcbiAgICAgIHNlbEhpc0tleVdvcmQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBoaXNLZXl3b3JkID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtleXdvcmRoaXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5rZXl3b3JkaGlzTGlzdFtpXS5zZWwgPSAwO1xuICAgICAgICAgIGlmIChpZCA9PSB0aGlzLmtleXdvcmRoaXNMaXN0W2ldLmlkKSB7XG4gICAgICAgICAgICBoaXNLZXl3b3JkID0gdGhpcy5rZXl3b3JkaGlzTGlzdFtpXS5rZXl3b3JkO1xuICAgICAgICAgICAgdGhpcy5rZXl3b3JkaGlzTGlzdFtpXS5zZWwgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlzS2V5d29yZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5rZXl3b3JkID0gaGlzS2V5d29yZDtcbiAgICAgICAgICB0aGlzLmRvU2VhcmNoR29vZHMoaGlzS2V5d29yZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbGVhckhpcygpIHtcbiAgICAgICAgdGhpcy5jbGVhclVzZXJLZXl3b3JkcygpO1xuICAgICAgfSxcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5kZXRhaWwubmFtZSxcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL3NlYXJjaD9jYXRlQ29kZT0nICsgdGhpcy5jYXRlQ29kZSArICcmdGl0bGU9JyArIHRoaXMudGl0bGUsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8v5Yqg6L295pu05aSaXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgICAgaWYgKHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgICB0aGF0LmRvU2VhcmNoR29vZHMoXCJcIiwgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4iXX0=