'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _shop_item_list = require('./shop_item_list.js');

var _shop_item_list2 = _interopRequireDefault(_shop_item_list);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var orderItem = function (_wepy$component) {
  _inherits(orderItem, _wepy$component);

  function orderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, orderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = orderItem.__proto__ || Object.getPrototypeOf(orderItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      orderList: {
        default: [],
        flag: "",
        orderNo: "",
        list: []
      }
    }, _this.$repeat = { "orderList": { "com": "shopItemList", "props": "" } }, _this.$props = { "shopItemList": { "xmlns:v-bind": { "value": "", "for": "orderList", "item": "item", "index": "index", "key": "key" }, "v-bind:list.sync": { "value": "item.orderItemList", "for": "orderList", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      shopItemList: _shop_item_list2.default
    }, _this.events = {}, _this.methods = {
      delOrder: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.flag = 2;
                  this.orderNo = e.currentTarget.dataset.id;
                  _context.next = 4;
                  return _tip2.default.confirm('是否删除订单');

                case 4:
                  console.log(this.flag);
                  this.editOrderInfo(this.orderNo, this.flag);
                  console.log("删除成功");

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function delOrder(_x) {
          return _ref2.apply(this, arguments);
        }

        return delOrder;
      }(),
      completion: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.flag = 3;
                  this.orderNo = e.currentTarget.dataset.id;
                  _context2.next = 4;
                  return _tip2.default.confirm('是否确认收货');

                case 4:
                  this.editOrderInfo(this.orderNo, this.flag);
                  console.log("完成");

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function completion(_x2) {
          return _ref3.apply(this, arguments);
        }

        return completion;
      }(),
      payMoney: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var tradeNo, userSpecialInfo, openId, pay;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.orderNo = e.currentTarget.dataset.id;
                  tradeNo = e.currentTarget.dataset.tradeno;
                  userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                  openId = userSpecialInfo.openid;
                  _context3.next = 6;
                  return _api2.default.toPay({
                    query: {
                      openId: openId,
                      orderNo: tradeNo
                    }
                  });

                case 6:
                  pay = _context3.sent;

                  if (pay.data.code == 0) {
                    //以下是微信支付
                    wx.requestPayment({
                      appId: pay.data.appId,
                      timeStamp: pay.data.timeStamp,
                      nonceStr: pay.data.nonceStr,
                      package: pay.data.package,
                      signType: 'MD5',
                      paySign: pay.data.paySign,
                      success: function success(res) {
                        console.log('pay', res);
                        setTimeout(function () {
                          //支付成功 关闭loadding 跳转到支付成功页面
                          _tip2.default.loaded();
                          _wepy2.default.navigateTo({
                            url: "/pages/pay_success?orderNo=" + tradeNo
                          });
                        }, 2000);
                      },
                      fail: function fail(res) {
                        _tip2.default.alert('支付失败');
                      }
                    });
                  } else {
                    _tip2.default.alert('支付失败');
                  }

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function payMoney(_x3) {
          return _ref4.apply(this, arguments);
        }

        return payMoney;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(orderItem, [{
    key: 'editOrderInfo',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(orderNo, flag) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("调用方法");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context4.next = 5;
                return _api2.default.editOrderInfo({
                  query: {
                    orderNo: orderNo,
                    flag: flag
                  }
                });

              case 5:
                json = _context4.sent;

                if (json.data.code == 0) {

                  this.$emit('refreshOrderList', that.flag);
                } else {
                  _tip2.default.error(json.data.errerTips);
                }
                that.$apply();

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editOrderInfo(_x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return editOrderInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log("===========lzz返回数据lzz=========");
      console.log(this.orderList);
    }
  }]);

  return orderItem;
}(_wepy2.default.component);

exports.default = orderItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2l0ZW0uanMiXSwibmFtZXMiOlsib3JkZXJJdGVtIiwicHJvcHMiLCJvcmRlckxpc3QiLCJkZWZhdWx0IiwiZmxhZyIsIm9yZGVyTm8iLCJsaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2hvcEl0ZW1MaXN0IiwiU2hvcEl0ZW1MaXN0IiwiZXZlbnRzIiwibWV0aG9kcyIsImRlbE9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJ0aXAiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImVkaXRPcmRlckluZm8iLCJjb21wbGV0aW9uIiwicGF5TW9uZXkiLCJ0cmFkZU5vIiwidHJhZGVubyIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsInRvUGF5IiwicXVlcnkiLCJwYXkiLCJkYXRhIiwiY29kZSIsInd4IiwicmVxdWVzdFBheW1lbnQiLCJhcHBJZCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJhbGVydCIsInRoYXQiLCJqc29uIiwiJGVtaXQiLCJlcnJvciIsImVycmVyVGlwcyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFFbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxpQkFBUyxFQURBO0FBRVRDLGNBQUssRUFGSTtBQUdUQyxpQkFBUSxFQUhDO0FBSVRDLGNBQUs7QUFKSTtBQURMLEssUUEyQlRDLE8sR0FBVSxFQUFDLGFB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cmRlcl9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBTaG9wSXRlbUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3Nob3BfaXRlbV9saXN0J1xuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JkZXJJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gIHByb3BzID0ge1xuICAgIG9yZGVyTGlzdDoge1xuICAgICAgZGVmYXVsdDogW10sXG4gICAgICBmbGFnOlwiXCIsXG4gICAgICBvcmRlck5vOlwiXCIsXG4gICAgICBsaXN0OltdXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZWRpdE9yZGVySW5mbyhvcmRlck5vLGZsYWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOaWueazlVwiKTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmVkaXRPcmRlckluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3JkZXJObzogb3JkZXJObyxcbiAgICAgICAgZmxhZzpmbGFnXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcblxuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaE9yZGVyTGlzdCcsIHRoYXQuZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEuZXJyZXJUaXBzKVxuICAgIH1cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gJHJlcGVhdCA9IHtcIm9yZGVyTGlzdFwiOntcImNvbVwiOlwic2hvcEl0ZW1MaXN0XCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wic2hvcEl0ZW1MaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW0ub3JkZXJJdGVtTGlzdFwiLFwiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzaG9wSXRlbUxpc3Q6IFNob3BJdGVtTGlzdFxuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGRlbE9yZGVyKGUpIHtcbiAgICAgIHRoaXMuZmxhZz0yO1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm5Yig6Zmk6K6i5Y2VJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZsYWcpO1xuICAgICAgdGhpcy5lZGl0T3JkZXJJbmZvKHRoaXMub3JkZXJObyx0aGlzLmZsYWcpO1xuICAgICAgY29uc29sZS5sb2coXCLliKDpmaTmiJDlip9cIilcblxuICAgIH0sXG4gICAgICBhc3luYyBjb21wbGV0aW9uKGUpIHtcbiAgICAgIHRoaXMuZmxhZz0zO1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm56Gu6K6k5pS26LSnJyk7XG4gICAgICB0aGlzLmVkaXRPcmRlckluZm8odGhpcy5vcmRlck5vLHRoaXMuZmxhZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIuWujOaIkFwiKVxuICAgIH0sXG5cbiAgICBhc3luYyBwYXlNb25leShlKSB7XG4gICAgICB0aGlzLm9yZGVyTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGxldCB0cmFkZU5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHJhZGVubztcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcblxuICAgICAgY29uc3QgcGF5ID0gYXdhaXQgYXBpLnRvUGF5KHtcbiAgICAgICAgcXVlcnk6e1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICAgIG9yZGVyTm86IHRyYWRlTm9cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGF5LmRhdGEuY29kZT09MCkge1xuICAgICAgICAvL+S7peS4i+aYr+W+ruS/oeaUr+S7mFxuICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XG4gICAgICAgICAgYXBwSWQ6IHBheS5kYXRhLmFwcElkLFxuICAgICAgICAgIHRpbWVTdGFtcDogcGF5LmRhdGEudGltZVN0YW1wLFxuICAgICAgICAgIG5vbmNlU3RyOiBwYXkuZGF0YS5ub25jZVN0cixcbiAgICAgICAgICBwYWNrYWdlOiBwYXkuZGF0YS5wYWNrYWdlLFxuICAgICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcbiAgICAgICAgICBwYXlTaWduOiBwYXkuZGF0YS5wYXlTaWduLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXknLCByZXMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgLy/mlK/ku5jmiJDlip8g5YWz6ZetbG9hZGRpbmcg6Lez6L2s5Yiw5pSv5LuY5oiQ5Yqf6aG16Z2iXG4gICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3BheV9zdWNjZXNzP29yZGVyTm89XCIrdHJhZGVOb1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PWx6eui/lOWbnuaVsOaNrmx6ej09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXJMaXN0KTtcbiAgfVxufVxuXG4iXX0=