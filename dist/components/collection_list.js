'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollecntionList = function (_wepy$component) {
  _inherits(CollecntionList, _wepy$component);

  function CollecntionList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CollecntionList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollecntionList.__proto__ || Object.getPrototypeOf(CollecntionList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      type: {
        default: 0
      },
      list: {
        type: Object,
        default: []
      }
    }, _this.$repeat = { "list": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.computed = {}, _this.methods = {
      handleDelItem: function handleDelItem(itemData) {
        console.log(itemData);
        var objType = itemData.type;
        if (objType == 1) {
          this.delUserBrowser(itemData.goodsId);
        } else if (objType == 2) {
          this.goodsUnFavorite(itemData.goodsId);
        }
      },
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list = val;
        this.$apply();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollecntionList, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      console.log(that.list);
    }
  }, {
    key: 'goodsUnFavorite',


    //商品取消收藏
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(goodsId) {
        var that, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.goodsUnFavorite({
                  query: {
                    openId: openId,
                    goodsId: goodsId
                  }
                });

              case 5:
                json = _context.sent;

                if (!(json.data.code == 0)) {
                  _context.next = 22;
                  break;
                }

                console.log("===========商品取消收藏成功=========");
                //tip.toast("取消收藏成功");
                retList = [];
                i = 0;

              case 10:
                if (!(i < this.list.length)) {
                  _context.next = 19;
                  break;
                }

                if (!(this.list[i].goodsId == goodsId)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context.next = 10;
                break;

              case 19:
                this.list = retList;
                _context.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                that.$apply();

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goodsUnFavorite(_x) {
        return _ref2.apply(this, arguments);
      }

      return goodsUnFavorite;
    }()

    //商品取消收藏

  }, {
    key: 'delUserBrowser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(goodsId) {
        var that, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.delUserBrowser({
                  query: {
                    openId: openId,
                    goodsId: goodsId
                  }
                });

              case 5:
                json = _context2.sent;

                if (!(json.data.code == 0)) {
                  _context2.next = 22;
                  break;
                }

                console.log("===========商品取消收藏成功=========");
                //tip.toast("取消收藏成功");
                retList = [];
                i = 0;

              case 10:
                if (!(i < this.list.length)) {
                  _context2.next = 19;
                  break;
                }

                if (!(this.list[i].goodsId == goodsId)) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context2.next = 10;
                break;

              case 19:
                this.list = retList;
                _context2.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                that.$apply();

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function delUserBrowser(_x2) {
        return _ref3.apply(this, arguments);
      }

      return delUserBrowser;
    }()
  }]);

  return CollecntionList;
}(_wepy2.default.component);

exports.default = CollecntionList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25fbGlzdC5qcyJdLCJuYW1lcyI6WyJDb2xsZWNudGlvbkxpc3QiLCJwcm9wcyIsInR5cGUiLCJkZWZhdWx0IiwibGlzdCIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3aXBlRGVsZXRlIiwiU3dpcGVEZWxldGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVEZWxJdGVtIiwiaXRlbURhdGEiLCJjb25zb2xlIiwibG9nIiwib2JqVHlwZSIsImRlbFVzZXJCcm93c2VyIiwiZ29vZHNJZCIsImdvb2RzVW5GYXZvcml0ZSIsInJlZnJlc2hMaXN0IiwidmFsIiwidW5kZWZpbmVkIiwiJGFwcGx5IiwiZXZlbnRzIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsInF1ZXJ5IiwianNvbiIsImRhdGEiLCJjb2RlIiwicmV0TGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwidGlwIiwiZXJyb3IiLCJtc2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTztBQUNMQyxpQkFBUztBQURKLE9BREQ7QUFJTkMsWUFBTTtBQUNKRixjQUFNRyxNQURGO0FBRUpGLGlCQUFTO0FBRkw7QUFKQSxLLFFBU1RHLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxXQUE3QixFQUFSLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxPQUE3RCxFQUFoQixFQUFzRix5QkFBd0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLE9BQS9FLEVBQTlHLEVBQXNNLGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sTUFBaEMsRUFBdUMsU0FBUSxPQUEvQyxFQUF1RCxPQUFNLE9BQTdELEVBQW5OLEVBQWYsRSxRQUNUQyxPLEdBQVUsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsZUFBaEIsRUFBZixFLFFBQ1RDLFUsR0FBYTtBQUNWQyxtQkFBYUM7QUFESCxLLFFBU1pDLFEsR0FBVyxFLFFBOERYQyxPLEdBQVU7QUFDUkMsbUJBRFEseUJBQ01DLFFBRE4sRUFDZ0I7QUFDdEJDLGdCQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxZQUFJRyxVQUFVSCxTQUFTYixJQUF2QjtBQUNBLFlBQUlnQixXQUFTLENBQWIsRUFBZ0I7QUFDZCxlQUFLQyxjQUFMLENBQW9CSixTQUFTSyxPQUE3QjtBQUNELFNBRkQsTUFFTyxJQUFJRixXQUFTLENBQWIsRUFBZ0I7QUFDckIsZUFBS0csZUFBTCxDQUFxQk4sU0FBU0ssT0FBOUI7QUFDRDtBQUNGLE9BVE87QUFVUkUsaUJBVlEsdUJBVUlDLEdBVkosRUFVUTtBQUNiLFlBQUlBLE9BQUtDLFNBQVQsRUFBb0I7QUFDcEJSLGdCQUFRQyxHQUFSLENBQVksVUFBWixFQUF1Qk0sR0FBdkI7QUFDQyxhQUFLbkIsSUFBTCxHQUFZbUIsR0FBWjtBQUNBLGFBQUtFLE1BQUw7QUFDSDtBQWZPLEssUUFpQlZDLE0sR0FBUyxFOzs7Ozs2QkFwRkE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQVgsY0FBUUMsR0FBUixDQUFZVSxLQUFLdkIsSUFBakI7QUFFRDs7Ozs7QUFLRDs7MkZBQ3NCZ0IsTzs7Ozs7O0FBQ2hCTyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0JDLGVBQUtDLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFO0FBQzdEQyxzQixHQUFTSixnQkFBZ0JLLE07O3VCQUNWQyxjQUFJYixlQUFKLENBQW9CO0FBQ3JDYyx5QkFBTztBQUNMSCw0QkFBUUEsTUFESDtBQUVMWiw2QkFBU0E7QUFGSjtBQUQ4QixpQkFBcEIsQzs7O0FBQWJnQixvQjs7c0JBTUZBLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixJQUFrQixDOzs7OztBQUNwQnRCLHdCQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQTtBQUNJc0IsdUIsR0FBVSxFO0FBQ0xDLGlCLEdBQUksQzs7O3NCQUFHQSxJQUFJLEtBQUtwQyxJQUFMLENBQVVxQyxNOzs7OztzQkFDeEIsS0FBS3JDLElBQUwsQ0FBVW9DLENBQVYsRUFBYXBCLE9BQWIsSUFBd0JBLE87Ozs7Ozs7O0FBRzFCbUIsd0JBQVFHLElBQVIsQ0FBYSxLQUFLdEMsSUFBTCxDQUFVb0MsQ0FBVixDQUFiOzs7QUFKa0NBLG1COzs7OztBQU90QyxxQkFBS3BDLElBQUwsR0FBWW1DLE9BQVo7Ozs7O0FBRUFJLDhCQUFJQyxLQUFKLENBQVVSLEtBQUtDLElBQUwsQ0FBVVEsR0FBcEI7OztBQUVGbEIscUJBQUtGLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7OzRGQUNxQkwsTzs7Ozs7O0FBQ2ZPLG9CLEdBQU8sSTtBQUNQQywrQixHQUFrQkMsZUFBS0MsY0FBTCxDQUFvQkMsNEJBQXBCLEtBQTJDLEU7QUFDN0RDLHNCLEdBQVNKLGdCQUFnQkssTTs7dUJBQ1ZDLGNBQUlmLGNBQUosQ0FBbUI7QUFDcENnQix5QkFBTztBQUNMSCw0QkFBUUEsTUFESDtBQUVMWiw2QkFBU0E7QUFGSjtBQUQ2QixpQkFBbkIsQzs7O0FBQWJnQixvQjs7c0JBTUZBLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixJQUFrQixDOzs7OztBQUNwQnRCLHdCQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDQTtBQUNJc0IsdUIsR0FBVSxFO0FBQ0xDLGlCLEdBQUksQzs7O3NCQUFHQSxJQUFJLEtBQUtwQyxJQUFMLENBQVVxQyxNOzs7OztzQkFDeEIsS0FBS3JDLElBQUwsQ0FBVW9DLENBQVYsRUFBYXBCLE9BQWIsSUFBd0JBLE87Ozs7Ozs7O0FBRzFCbUIsd0JBQVFHLElBQVIsQ0FBYSxLQUFLdEMsSUFBTCxDQUFVb0MsQ0FBVixDQUFiOzs7QUFKa0NBLG1COzs7OztBQU90QyxxQkFBS3BDLElBQUwsR0FBWW1DLE9BQVo7Ozs7O0FBRUFJLDhCQUFJQyxLQUFKLENBQVVSLEtBQUtDLElBQUwsQ0FBVVEsR0FBcEI7OztBQUVGbEIscUJBQUtGLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRnlDSSxlQUFLaUIsUzs7a0JBQTdCOUMsZSIsImZpbGUiOiJjb2xsZWN0aW9uX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQgU3dpcGVEZWxldGUgZnJvbSAnLi9jb21tb24vd2VweS1zd2lwZS1kZWxldGUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWNudGlvbkxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHR5cGUgOiB7XG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJzd2lwZURlbGV0ZVwiLFwicHJvcHNcIjpcInN3aXBlRGF0YVwifX07XHJcbiRwcm9wcyA9IHtcInN3aXBlRGVsZXRlXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3dpcGVEYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcInN3aXBlRGVsZXRlXCI6e1widi1vbjpkZWxJdGVtXCI6XCJoYW5kbGVEZWxJdGVtXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc3dpcGVEZWxldGU6IFN3aXBlRGVsZXRlXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHRoYXQubGlzdClcblxuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cblxuICAvL+WVhuWTgeWPlua2iOaUtuiXj1xuICBhc3luYyBnb29kc1VuRmF2b3JpdGUoZ29vZHNJZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ29vZHNVbkZhdm9yaXRlKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICBnb29kc0lkOiBnb29kc0lkXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT3llYblk4Hlj5bmtojmlLbol4/miJDlip89PT09PT09PT1cIilcbiAgICAgIC8vdGlwLnRvYXN0KFwi5Y+W5raI5pS26JeP5oiQ5YqfXCIpO1xuICAgICAgbGV0IHJldExpc3QgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RbaV0uZ29vZHNJZCA9PSBnb29kc0lkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0TGlzdC5wdXNoKHRoaXMubGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdCA9IHJldExpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cbiAgLy/llYblk4Hlj5bmtojmlLbol49cbiAgYXN5bmMgZGVsVXNlckJyb3dzZXIoZ29vZHNJZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZGVsVXNlckJyb3dzZXIoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGdvb2RzSWQ6IGdvb2RzSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PeWVhuWTgeWPlua2iOaUtuiXj+aIkOWKnz09PT09PT09PVwiKVxuICAgICAgLy90aXAudG9hc3QoXCLlj5bmtojmlLbol4/miJDlip9cIik7XG4gICAgICBsZXQgcmV0TGlzdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFtpXS5nb29kc0lkID09IGdvb2RzSWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXRMaXN0LnB1c2godGhpcy5saXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5saXN0ID0gcmV0TGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuJGFwcGx5KCk7XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZURlbEl0ZW0oaXRlbURhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1EYXRhKVxuICAgICAgbGV0IG9ialR5cGUgPSBpdGVtRGF0YS50eXBlO1xuICAgICAgaWYgKG9ialR5cGU9PTEpIHtcbiAgICAgICAgdGhpcy5kZWxVc2VyQnJvd3NlcihpdGVtRGF0YS5nb29kc0lkKTtcbiAgICAgIH0gZWxzZSBpZiAob2JqVHlwZT09Mikge1xuICAgICAgICB0aGlzLmdvb2RzVW5GYXZvcml0ZShpdGVtRGF0YS5nb29kc0lkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZnJlc2hMaXN0KHZhbCl7XG4gICAgICAgaWYgKHZhbD09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgY29uc29sZS5sb2coXCJ2YWwuLi4uLlwiLHZhbCk7XG4gICAgICAgIHRoaXMubGlzdCA9IHZhbDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbn1cblxuIl19