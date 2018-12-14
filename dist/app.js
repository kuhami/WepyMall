'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/authorize', 'pages/home', 'pages/home_detail', 'pages/classify', 'pages/shop_cart', 'pages/info', 'pages/search', 'pages/test', 'pages/sign_in', 'pages/exchange_goods', 'pages/wholesale', 'pages/replenishment_goods', 'pages/register', 'pages/order', 'pages/reorder', 'pages/pay_success', 'pages/points', 'pages/points_more', 'pages/points_rule', 'pages/collection', 'pages/messages', 'pages/setting', 'pages/goods_detail', 'pages/comfire_order', 'pages/address', 'pages/order_detail', 'pages/filter', 'pages/logistics', 'pages/comment', 'pages/comment_add'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#FFFFFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: false, //全局配置下拉刷新
        backgroundColor: '#EFEFEF'
      },
      "tabBar": {
        "color": "#999999",
        "selectedColor": "#ff6a3c",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/home",
          "text": "首页",
          "iconPath": "images/icon_home.png",
          "selectedIconPath": "images/icon_home_active.png"
        }, {
          "pagePath": "pages/classify",
          "text": "分类",
          "iconPath": "images/icon_classify.png",
          "selectedIconPath": "images/icon_classify_active.png"
        }, {
          "pagePath": "pages/shop_cart",
          "text": "购物车",
          "iconPath": "images/icon_shop_cart.png",
          "selectedIconPath": "images/icon_shop_cart_active.png"
        }, {
          "pagePath": "pages/info",
          "text": "我",
          "iconPath": "images/icon_info.png",
          "selectedIconPath": "images/icon_info_active.png"
        }]
      }
    };
    _this.globalData = {};

    _this.use('requestfix');
    _this.use('promisify');

    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch(_x) {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlIiwib3B0aW9uIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMEVFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF4RWRBLE1Bd0VjLEdBeEVMO0FBQ1BDLGFBQU8sQ0FDTCxpQkFESyxFQUVMLFlBRkssRUFHTCxtQkFISyxFQUlMLGdCQUpLLEVBS0wsaUJBTEssRUFNTCxZQU5LLEVBT0wsY0FQSyxFQVFMLFlBUkssRUFTTCxlQVRLLEVBVUwsc0JBVkssRUFXTCxpQkFYSyxFQVlMLDJCQVpLLEVBYUwsZ0JBYkssRUFjTCxhQWRLLEVBZUwsZUFmSyxFQWdCTCxtQkFoQkssRUFpQkwsY0FqQkssRUFrQkwsbUJBbEJLLEVBbUJMLG1CQW5CSyxFQW9CTCxrQkFwQkssRUFxQkwsZ0JBckJLLEVBc0JMLGVBdEJLLEVBdUJMLG9CQXZCSyxFQXdCTCxxQkF4QkssRUF5QkwsZUF6QkssRUEwQkwsb0JBMUJLLEVBMkJMLGNBM0JLLEVBNEJMLGlCQTVCSyxFQTZCTCxlQTdCSyxFQThCTCxtQkE5QkssQ0FEQTtBQWlDUEMsY0FBUTtBQUNOQyw2QkFBcUIsTUFEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQywrQkFBdUIsS0FMakIsRUFLdUI7QUFDN0JDLHlCQUFpQjtBQU5YLE9BakNEO0FBeUNQLGdCQUFVO0FBQ1IsaUJBQVMsU0FERDtBQUVSLHlCQUFpQixTQUZUO0FBR1IsMkJBQW1CLFNBSFg7QUFJUix1QkFBZSxPQUpQO0FBS1IsZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLFlBREw7QUFFUCxrQkFBUSxJQUZEO0FBR1Asc0JBQVksc0JBSEw7QUFJUCw4QkFBb0I7QUFKYixTQUFELEVBS0w7QUFDRCxzQkFBWSxnQkFEWDtBQUVELGtCQUFRLElBRlA7QUFHRCxzQkFBWSwwQkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQUxLLEVBVUw7QUFDRCxzQkFBWSxpQkFEWDtBQUVELGtCQUFRLEtBRlA7QUFHRCxzQkFBWSwyQkFIWDtBQUlELDhCQUFvQjtBQUpuQixTQVZLLEVBZUw7QUFDRCxzQkFBWSxZQURYO0FBRUQsa0JBQVEsR0FGUDtBQUdELHNCQUFZLHNCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBZks7QUFMQTtBQXpDSCxLQXdFSztBQUFBLFVBRmRDLFVBRWMsR0FGRCxFQUVDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7O0FBSFk7QUFLYjs7Ozs7MEZBRWNDLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhGWUMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2F1dGhvcml6ZScsXG4gICAgICAncGFnZXMvaG9tZScsXG4gICAgICAncGFnZXMvaG9tZV9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2NsYXNzaWZ5JyxcbiAgICAgICdwYWdlcy9zaG9wX2NhcnQnLFxuICAgICAgJ3BhZ2VzL2luZm8nLFxuICAgICAgJ3BhZ2VzL3NlYXJjaCcsXG4gICAgICAncGFnZXMvdGVzdCcsXG4gICAgICAncGFnZXMvc2lnbl9pbicsXG4gICAgICAncGFnZXMvZXhjaGFuZ2VfZ29vZHMnLFxuICAgICAgJ3BhZ2VzL3dob2xlc2FsZScsXG4gICAgICAncGFnZXMvcmVwbGVuaXNobWVudF9nb29kcycsXG4gICAgICAncGFnZXMvcmVnaXN0ZXInLFxuICAgICAgJ3BhZ2VzL29yZGVyJyxcbiAgICAgICdwYWdlcy9yZW9yZGVyJyxcbiAgICAgICdwYWdlcy9wYXlfc3VjY2VzcycsXG4gICAgICAncGFnZXMvcG9pbnRzJyxcbiAgICAgICdwYWdlcy9wb2ludHNfbW9yZScsXG4gICAgICAncGFnZXMvcG9pbnRzX3J1bGUnLFxuICAgICAgJ3BhZ2VzL2NvbGxlY3Rpb24nLFxuICAgICAgJ3BhZ2VzL21lc3NhZ2VzJyxcbiAgICAgICdwYWdlcy9zZXR0aW5nJyxcbiAgICAgICdwYWdlcy9nb29kc19kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2NvbWZpcmVfb3JkZXInLFxuICAgICAgJ3BhZ2VzL2FkZHJlc3MnLFxuICAgICAgJ3BhZ2VzL29yZGVyX2RldGFpbCcsXG4gICAgICAncGFnZXMvZmlsdGVyJyxcbiAgICAgICdwYWdlcy9sb2dpc3RpY3MnLFxuICAgICAgJ3BhZ2VzL2NvbW1lbnQnLFxuICAgICAgJ3BhZ2VzL2NvbW1lbnRfYWRkJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaycsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlLC8v5YWo5bGA6YWN572u5LiL5ouJ5Yi35pawXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUZFRkVGJ1xuICAgIH0sXG4gICAgXCJ0YWJCYXJcIjoge1xuICAgICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiNmZjZhM2NcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXG4gICAgICBcImxpc3RcIjogW3tcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2hvbWVcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6aaW6aG1XCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9ob21lLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9ob21lX2FjdGl2ZS5wbmdcIlxuICAgICAgfSwge1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY2xhc3NpZnlcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5YiG57G7XCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9jbGFzc2lmeS5wbmdcIixcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiaW1hZ2VzL2ljb25fY2xhc3NpZnlfYWN0aXZlLnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9zaG9wX2NhcnRcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6LSt54mp6L2mXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9zaG9wX2NhcnQucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX3Nob3BfY2FydF9hY3RpdmUucG5nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5oiRXCIsXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9pbmZvLnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9pbmZvX2FjdGl2ZS5wbmdcIlxuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcblxuICB9XG5cbiAgYXN5bmMgb25MYXVuY2gob3B0aW9uKSB7XG5cbiAgfVxufVxuXG4iXX0=