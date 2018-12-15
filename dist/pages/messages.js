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
      list: [],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImJvdHRvbUxvYWRNb3JlIiwiQm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsIlBsYWNlaG9sZGVyIiwiZGF0YSIsImxpc3QiLCJ3aW5IZWlnaHQiLCJjdXJyZW50UGFnZSIsInBhZ2VfdG90YWwiLCJzaG93TG9hZGluZyIsInByZXZlbnRSZXBlYXRSZXVxZXN0IiwiaXNfZW1wdHkiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJzaXplIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsIm1lc3NhZ2VJbmZvIiwicXVlcnkiLCJwYWdlIiwianNvbiIsImNvZGUiLCJ0aXAiLCJlcnJvciIsIm1zZyIsIiRhcHBseSIsInN5c3RlbUluZm8iLCJTWVNURU1fSU5GTyIsIndpbmRvd0hlaWdodCIsImdldFVzZXJNZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGFBQXRDLEVBQW9ELFdBQVUsTUFBOUQsRUFBbEIsRUFBd0YsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUErQixXQUFVLE1BQXpDLEVBQXRHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHNCQUFnQkMsd0JBRE47QUFFVkMsbUJBQWFDO0FBRkgsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGlCQUFXLENBRk47QUFHTDtBQUNBQyxtQkFBYSxDQUpSO0FBS0w7QUFDQUMsa0JBQVksQ0FOUDtBQU9MO0FBQ0FDLG1CQUFhLElBUlI7QUFTTDtBQUNBQyw0QkFBc0IsS0FWakI7QUFXTEMsZ0JBQVU7QUFYTCxLLFFBK0NQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7OzJGQXhDYVAsVyxFQUFhUSxJOzs7Ozs7QUFDN0JDLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkMsZUFBS0MsY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7QUFDN0RDLHNCLEdBQVNKLGdCQUFnQkssTTs7dUJBQ1ZDLGNBQUlDLFdBQUosQ0FBZ0I7QUFDakNDLHlCQUFPO0FBQ0xKLDRCQUFRQSxNQURIO0FBRUxLLDBCQUFNbkIsZUFBZSxDQUZoQjtBQUdMUSwwQkFBTUEsUUFBUTtBQUhUO0FBRDBCLGlCQUFoQixDOzs7QUFBYlksb0I7O0FBT04sb0JBQUlBLEtBQUt2QixJQUFMLENBQVV3QixJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCWix1QkFBS1gsSUFBTCxnQ0FBZ0JXLEtBQUtYLElBQXJCLHNCQUE4QnNCLEtBQUt2QixJQUFMLENBQVVDLElBQXhDO0FBQ0FXLHVCQUFLUixVQUFMLEdBQWtCbUIsS0FBS3ZCLElBQUwsQ0FBVUksVUFBNUI7QUFDQSxzQkFBSW1CLEtBQUt2QixJQUFMLENBQVVJLFVBQVYsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDN0I7QUFDQ1EseUJBQUtMLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRjtBQUNGLGlCQVBELE1BT087QUFDTGtCLGdDQUFJQyxLQUFKLENBQVVILEtBQUt2QixJQUFMLENBQVUyQixHQUFwQjtBQUNEO0FBQ0RmLHFCQUFLUCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0NPLHFCQUFLZ0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVNO0FBQ1AsVUFBSWhCLE9BQU8sSUFBWDtBQUNBLFdBQUtYLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDQSxVQUFJNEIsYUFBYWYsZUFBS0MsY0FBTCxDQUFvQmUscUJBQXBCLENBQWpCO0FBQ0FsQixXQUFLVixTQUFMLEdBQWlCMkIsV0FBV0UsWUFBNUI7QUFDQW5CLFdBQUtvQixjQUFMO0FBRUQ7Ozs7QUFXRDtvQ0FDZ0I7QUFDZEMsY0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsVUFBSXRCLE9BQU8sSUFBWDtBQUNBQSxXQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0E0QixjQUFRQyxHQUFSLENBQVl0QixLQUFLUixVQUFMLEdBQWtCLEtBQWxCLEdBQTBCUSxLQUFLVCxXQUEzQztBQUNBO0FBQ0EsVUFBS1MsS0FBS1IsVUFBTixHQUFvQlEsS0FBS1QsV0FBN0IsRUFBMEM7QUFDeEM4QixnQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0E7QUFDQSxZQUFJdEIsS0FBS04sb0JBQVQsRUFBK0I7QUFDN0IsaUJBQU8sSUFBUDtBQUNEO0FBQ0RNLGFBQUtOLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FNLGFBQUtULFdBQUw7QUFDQVMsYUFBS29CLGNBQUwsQ0FBb0JwQixLQUFLVCxXQUF6QjtBQUNBUyxhQUFLTixvQkFBTCxHQUE0QixLQUE1QjtBQUNELE9BVkQsTUFVTztBQUNMTSxhQUFLUCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRjs7OztFQXhGbUNTLGVBQUtRLEk7O2tCQUF0QmpDLFEiLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9wbGFjZWhvbGRlclwiXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOa2iOaBrycsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dmtojmga9cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJcbiAgfVxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIHdpbkhlaWdodDogMCxcbiAgICAvL+W9k+WJjemhtemdolxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIC8v5oC76aG15pWwXG4gICAgcGFnZV90b3RhbDogMCxcbiAgICAvL+aYr+WQpuaYvuekuiDlupXpg6hsb2FkaW5nXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICBwcmV2ZW50UmVwZWF0UmV1cWVzdDogZmFsc2UsXG4gICAgaXNfZW1wdHk6IGZhbHNlXG4gIH1cblxuICAgYXN5bmMgZ2V0VXNlck1lc3NhZ2UoY3VycmVudFBhZ2UsIHNpemUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLm1lc3NhZ2VJbmZvKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSB8fCAxLFxuICAgICAgICBzaXplOiBzaXplIHx8IDEwXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcbiAgICAgIHRoYXQucGFnZV90b3RhbCA9IGpzb24uZGF0YS5wYWdlX3RvdGFsO1xuICAgICAgaWYgKGpzb24uZGF0YS5wYWdlX3RvdGFsID09IDApIHtcbiAgICAgICAgLy/mmoLml6DmlbDmja5cbiAgICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgLy/orr7nva7mu5rliqjpq5jluqZcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgIHRoYXQud2luSGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgdGhhdC5nZXRVc2VyTWVzc2FnZSgpO1xuXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuXG5cbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICAvL+WKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZGRkZGRkZGRkZGRkZGRkXCIpO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XG4gICAgLy/liKTmlq3mgLvpobXmlbDmmK/lkKblpKfkuo7nv7vpobXmlbBcbiAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFwiKTtcbiAgICAgIC8v6Ziy5q2i6YeN5aSN5Yqg6L29XG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xuICAgICAgdGhhdC5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhhdC5nZXRVc2VyTWVzc2FnZSh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuIl19