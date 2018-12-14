'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _collection_list = require('./../components/collection_list.js');

var _collection_list2 = _interopRequireDefault(_collection_list);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointsRules = function (_wepy$page) {
  _inherits(PointsRules, _wepy$page);

  function PointsRules() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PointsRules);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PointsRules.__proto__ || Object.getPrototypeOf(PointsRules)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ""
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" }, "collectionList": { "v-bind:list.sync": "favorlist", "xmlns:wx": "" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      collectionList: _collection_list2.default,
      bottomLoadMore: _bottomLoadMore2.default
    }, _this.data = {
      browselist: [],
      favorlist: [],
      tabList: ["我的足迹", "我的收藏"],
      currentTab: 0,
      winHeight: 0,
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
        this.currentPage = 1;
        this.page_total = 0;
        var that = this;
        that.currentTab = cur;
        that.setTitle(cur);
        console.log("cur");
        console.log(cur);
        if (cur == 1) {
          that.getUserFavorite();
          that.favorlist = {};
        } else {
          that.getUserBrowse();
          that.browselist = {};
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
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PointsRules, [{
    key: 'getUserBrowse',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log("足迹");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;

                console.log("==========调用aip=======");
                _context.next = 6;
                return _api2.default.browseInfo({
                  query: {
                    openId: openId,
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 6:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.browselist = [].concat(_toConsumableArray(that.browselist), _toConsumableArray(json.data.list));
                  that.page_total = json.data.page_total;
                  console.log("that.browselist");
                  console.log(that.browselist);
                  that.$apply();
                  that.$invoke('collectionList', 'refreshList', that.browselist);
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserBrowse(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserBrowse;
    }()
  }, {
    key: 'getUserFavorite',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(currentPage, size) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.favoriteInfo({
                  query: {
                    openId: openId,
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 5:
                json = _context2.sent;


                if (json.data.code == 0) {

                  that.favorlist = [].concat(_toConsumableArray(that.favorlist), _toConsumableArray(json.data.list));
                  that.page_total = json.data.page_total;
                  console.log("==========反正數據=======");
                  console.log(that.favorlist);
                  // console.log((json.data);
                  that.$invoke('collectionList', 'refreshList', that.favorlist);
                  that.$apply();
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserFavorite(_x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return getUserFavorite;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(opts) {
      var that = this;
      var title = "";
      that.browselist = {};
      that.favorlist = {};
      that.list = bb.result.products;
      //opts.type 0：我的足迹 ，1：我的收藏
      that.currentTab = opts.type;
      if (opts.type == 0) {
        that.getUserBrowse();
      } else {
        console.log("调用收藏");
        that.getUserFavorite();
      }
      //动态设置标题
      that.setTitle(opts.type);

      //设置滚动高度
      var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
      that.winHeight = systemInfo.windowHeight;
      that.$apply();
    }
  }, {
    key: 'setTitle',
    value: function setTitle(cur) {
      _wepy2.default.setNavigationBarTitle({
        title: this.tabList[cur]
      });
    }
  }, {
    key: 'onReachBottom',


    //加载更多
    value: function onReachBottom() {
      console.log("加载更多");
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
        console.log(this.currentTab);
        if (this.currentTab == 0) {
          console.log("下拉收藏");
          that.getUserBrowse(that.currentPage);
        } else {
          that.getUserFavorite(that.currentPage);
        }
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return PointsRules;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(PointsRules , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiUG9pbnRzUnVsZXMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiVGFiIiwiY29sbGVjdGlvbkxpc3QiLCJDb2xsZWN0aW9uTGlzdCIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJkYXRhIiwiYnJvd3NlbGlzdCIsImZhdm9ybGlzdCIsInRhYkxpc3QiLCJjdXJyZW50VGFiIiwid2luSGVpZ2h0IiwiY3VycmVudFBhZ2UiLCJwYWdlX3RvdGFsIiwic2hvd0xvYWRpbmciLCJwcmV2ZW50UmVwZWF0UmV1cWVzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdldEN1cnJlbnRUYWIiLCJjdXIiLCJldnQiLCJ0aGF0Iiwic2V0VGl0bGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckZhdm9yaXRlIiwiZ2V0VXNlckJyb3dzZSIsIiRhcHBseSIsImJpbmRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsImRldGFpbGN1cnJlbnQiLCJldmVudHMiLCJzaXplIiwidXNlclNwZWNpYWxJbmZvIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwiYnJvd3NlSW5mbyIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJjb2RlIiwibGlzdCIsIiRpbnZva2UiLCJ0aXAiLCJlcnJvciIsIm1zZyIsImZhdm9yaXRlSW5mbyIsIm9wdHMiLCJ0aXRsZSIsImJiIiwicmVzdWx0IiwicHJvZHVjdHMiLCJ0eXBlIiwic3lzdGVtSW5mbyIsIlNZU1RFTV9JTkZPIiwid2luZG93SGVpZ2h0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNGOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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QUF3QjtBQUN0QmEsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FILGVBQUtLLGFBQUwsQ0FBbUJMLEtBQUtULFdBQXhCO0FBQ0QsU0FIRCxNQUdPO0FBQ0xTLGVBQUtJLGVBQUwsQ0FBcUJKLEtBQUtULFdBQTFCO0FBQ0Q7QUFDRFMsYUFBS04sb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxPQWZELE1BZU87QUFDTE0sYUFBS1AsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUE1S3NDc0IsZUFBS1EsSTs7a0JBQXpCbkQsVyIsImZpbGUiOiJjb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IFRhYiBmcm9tICdAL2NvbXBvbmVudHMvdGFiJ1xuaW1wb3J0IENvbGxlY3Rpb25MaXN0IGZyb20gJ0AvY29tcG9uZW50cy9jb2xsZWN0aW9uX2xpc3QnXG5pbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50c1J1bGVzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiXCIsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjdXJyZW50VGFiLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIn0sXCJjb2xsZWN0aW9uTGlzdFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImZhdm9ybGlzdFwiLFwieG1sbnM6d3hcIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ0YWJcIjp7XCJ2LW9uOmN1cnJlbnRUYWJcIjpcImdldEN1cnJlbnRUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB0YWI6IFRhYixcbiAgICBjb2xsZWN0aW9uTGlzdDogQ29sbGVjdGlvbkxpc3QsXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGJyb3dzZWxpc3Q6IFtdLFxuICAgIGZhdm9ybGlzdDpbXSxcbiAgICB0YWJMaXN0OiBbXCLmiJHnmoTotrPov7lcIiwgXCLmiJHnmoTmlLbol49cIl0sXG4gICAgY3VycmVudFRhYjogMCxcbiAgICB3aW5IZWlnaHQ6IDAsXG4gICAgLy/lvZPliY3pobXpnaJcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICAvL+aAu+mhteaVsFxuICAgIHBhZ2VfdG90YWw6IDAsXG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgcHJldmVudFJlcGVhdFJldXFlc3Q6IGZhbHNlXG4gIH1cblxuICBhc3luYyBnZXRVc2VyQnJvd3NlKGN1cnJlbnRQYWdlLCBzaXplKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCLotrPov7lcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT096LCD55SoYWlwPT09PT09PVwiKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmJyb3dzZUluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIHBhZ2U6IGN1cnJlbnRQYWdlIHx8IDEsXG4gICAgICAgIHNpemU6IHNpemUgfHwgMTBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhhdC5icm93c2VsaXN0ID0gWy4uLnRoYXQuYnJvd3NlbGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWw7XG4gICAgICBjb25zb2xlLmxvZyhcInRoYXQuYnJvd3NlbGlzdFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQuYnJvd3NlbGlzdCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgdGhhdC4kaW52b2tlKCdjb2xsZWN0aW9uTGlzdCcsICdyZWZyZXNoTGlzdCcsIHRoYXQuYnJvd3NlbGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBnZXRVc2VyRmF2b3JpdGUoY3VycmVudFBhZ2UsIHNpemUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmZhdm9yaXRlSW5mbyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcblxuICAgICAgdGhhdC5mYXZvcmxpc3QgPSBbLi4udGhhdC5mYXZvcmxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5wYWdlX3RvdGFsO1xuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT095Y+N5q2j5pW45pOaPT09PT09PVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQuZmF2b3JsaXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKChqc29uLmRhdGEpO1xuICAgICAgdGhhdC4kaW52b2tlKCdjb2xsZWN0aW9uTGlzdCcsICdyZWZyZXNoTGlzdCcsIHRoYXQuZmF2b3JsaXN0KTtcbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuXG4gIG9uTG9hZChvcHRzKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB0aXRsZSA9IFwiXCI7XG4gICAgdGhhdC5icm93c2VsaXN0PXt9O1xuICAgIHRoYXQuZmF2b3JsaXN0PXt9O1xuICAgIHRoYXQubGlzdCA9IGJiLnJlc3VsdC5wcm9kdWN0cztcbiAgICAvL29wdHMudHlwZSAw77ya5oiR55qE6Laz6L+5IO+8jDHvvJrmiJHnmoTmlLbol49cbiAgICB0aGF0LmN1cnJlbnRUYWIgPSBvcHRzLnR5cGU7XG4gICAgaWYob3B0cy50eXBlPT0wKXtcbiAgICAgIHRoYXQuZ2V0VXNlckJyb3dzZSgpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCLosIPnlKjmlLbol49cIilcbiAgICAgIHRoYXQuZ2V0VXNlckZhdm9yaXRlKCk7XG4gICAgfVxuICAgIC8v5Yqo5oCB6K6+572u5qCH6aKYXG4gICAgdGhhdC5zZXRUaXRsZShvcHRzLnR5cGUpO1xuXG4gICAgLy/orr7nva7mu5rliqjpq5jluqZcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgdGhhdC4kYXBwbHkoKTtcblxuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRDdXJyZW50VGFiKGN1ciwgZXZ0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIHRoaXMucGFnZV90b3RhbCA9IDA7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBjdXI7XG4gICAgICB0aGF0LnNldFRpdGxlKGN1cilcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VyXCIpO1xuICAgICAgY29uc29sZS5sb2coY3VyKTtcbiAgICAgIGlmIChjdXI9PTEpIHtcbiAgICAgICAgdGhhdC5nZXRVc2VyRmF2b3JpdGUoKTtcbiAgICAgICAgdGhhdC5mYXZvcmxpc3Q9e307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmdldFVzZXJCcm93c2UoKTtcbiAgICAgICAgdGhhdC5icm93c2VsaXN0PXt9O1xuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOa7keWKqOWIh+aNonRhYlxuICAgICAqL1xuICAgIGJpbmRDaGFuZ2UoZSkge1xuXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgdGFiLi4uLlwiK2UuZGV0YWlsY3VycmVudCk7XG4gICAgICB0aGF0LiRhcHBseSgpO1xuICAgIH0sXG4gIH1cbiAgc2V0VGl0bGUoY3VyKSB7XG4gICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgdGl0bGU6IHRoaXMudGFiTGlzdFtjdXJdXG4gICAgfSlcbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuXG4gIC8v5Yqg6L295pu05aSaXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgY29uc29sZS5sb2coXCLliqDovb3mm7TlpJpcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZV90b3RhbCArIFwiPT09XCIgKyB0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxuICAgIGlmICgodGhhdC5wYWdlX3RvdGFsKSA+IHRoYXQuY3VycmVudFBhZ2UpIHtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VGFiKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUYWI9PTApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLkuIvmi4nmlLbol49cIik7XG4gICAgICAgIHRoYXQuZ2V0VXNlckJyb3dzZSh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuZ2V0VXNlckZhdm9yaXRlKHRoYXQuY3VycmVudFBhZ2UpO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG4iXX0=