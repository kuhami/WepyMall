'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _shop_item_list = require('./../components/shop_item_list.js');

var _shop_item_list2 = _interopRequireDefault(_shop_item_list);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetail = function (_wepy$page) {
  _inherits(OrderDetail, _wepy$page);

  function OrderDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.data = {
      obj: {},
      orderNo: "",
      flag: "",
      list: [],
      orderExpress: {},
      expressFlowInfo: {}
    }, _this.$repeat = {}, _this.$props = { "shopItemList": { "xmlns:v-bind": "", "v-bind:goodsList.sync": "list" } }, _this.$events = {}, _this.components = {
      shopItemList: _shop_item_list2.default
    }, _this.computed = {}, _this.methods = {
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
      goLogistics: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _tip2.default.confirm('查看物流');

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function goLogistics() {
          return _ref4.apply(this, arguments);
        }

        return goLogistics;
      }(),
      payMoney: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
          var tradeNo, userSpecialInfo, openId, pay;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  tradeNo = e.currentTarget.dataset.tradeno;
                  userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                  openId = userSpecialInfo.openid;
                  _context4.next = 5;
                  return _api2.default.toPay({
                    query: {
                      openId: openId,
                      orderNo: tradeNo
                    }
                  });

                case 5:
                  pay = _context4.sent;

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

                case 7:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function payMoney(_x3) {
          return _ref5.apply(this, arguments);
        }

        return payMoney;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: 'getOrderInfo',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(currentPage, size) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context5.next = 4;
                return _api2.default.getOrderInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });

              case 4:
                json = _context5.sent;

                if (json.data.code == 0) {
                  this.obj = json.data.obj;
                  that.list = [];
                  that.list = [].concat(_toConsumableArray(that.list), _toConsumableArray(json.data.obj.orderItemList));
                  that.$invoke('shopItemList', 'refreshList', that.list);

                  console.log("========list返回数据========");
                  console.log(that.list);
                  console.log(json.data.obj.orderItemList);
                } else {
                  _tip2.default.error(json.data.msg);
                }

                that.$apply();

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getOrderInfo(_x4, _x5) {
        return _ref6.apply(this, arguments);
      }

      return getOrderInfo;
    }()
  }, {
    key: 'editOrderInfo',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(orderNo, flag) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context6.next = 4;
                return _api2.default.editOrderInfo({
                  query: {
                    orderNo: orderNo,
                    flag: flag
                  }
                });

              case 4:
                json = _context6.sent;

                if (json.data.code == 0) {
                  console.log("===========lzz返回数据=========");
                  console.log(json.data.errerTips);
                  /*that.list = [...that.list, ...json.data.errerTips.orderItemList];
                  that.$invoke('shopItemList', 'refreshList', that.list);
                  console.log(json.data.errerTips.orderItemList);
                  console.log(that.list);*/
                  if (this.flag == 2) {//删除

                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.$apply();

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function editOrderInfo(_x6, _x7) {
        return _ref7.apply(this, arguments);
      }

      return editOrderInfo;
    }()
  }, {
    key: 'getOrderExpressInfo',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log("orderNo");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context7.next = 5;
                return _api2.default.orderExpressInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });

              case 5:
                json = _context7.sent;

                if (json.data.code == 0) {
                  that.orderExpress = json.data.orderExpress;
                  that.expressFlowInfo = json.data.expressFlowInfo;
                  console.log("========list返回数据========");
                  console.log(that.list);
                } else {
                  _tip2.default.error(json.data.msg);
                }

                that.$apply();

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getOrderExpressInfo() {
        return _ref8.apply(this, arguments);
      }

      return getOrderExpressInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      //that.list = bb.result.products;
      this.orderNo = options.orderNo;
      that.getOrderInfo();
      that.getOrderExpressInfo();
      console.log(bb.result.products);
      console.log("=========options==========");
      console.log(options.id);
    }
  }]);

  return OrderDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderDetail , 'pages/order_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2RldGFpbC5qcyJdLCJuYW1lcyI6WyJPcmRlckRldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwib2JqIiwib3JkZXJObyIsImZsYWciLCJsaXN0Iiwib3JkZXJFeHByZXNzIiwiZXhwcmVzc0Zsb3dJbmZvIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2hvcEl0ZW1MaXN0IiwiU2hvcEl0ZW1MaXN0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZGVsT3JkZXIiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsInRpcCIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiZWRpdE9yZGVySW5mbyIsImNvbXBsZXRpb24iLCJnb0xvZ2lzdGljcyIsInBheU1vbmV5IiwidHJhZGVObyIsInRyYWRlbm8iLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJ0b1BheSIsInF1ZXJ5IiwicGF5IiwiY29kZSIsInd4IiwicmVxdWVzdFBheW1lbnQiLCJhcHBJZCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXRUaW1lb3V0IiwibG9hZGVkIiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJhbGVydCIsImV2ZW50cyIsImN1cnJlbnRQYWdlIiwic2l6ZSIsInRoYXQiLCJnZXRPcmRlckluZm8iLCJqc29uIiwib3JkZXJJdGVtTGlzdCIsIiRpbnZva2UiLCJlcnJvciIsIm1zZyIsIiRhcHBseSIsImVycmVyVGlwcyIsIm9yZGVyRXhwcmVzc0luZm8iLCJvcHRpb25zIiwiZ2V0T3JkZXJFeHByZXNzSW5mbyIsImJiIiwicmVzdWx0IiwicHJvZHVjdHMiLCJwYWdlIl0sIm1hcHBpbmdz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Y0FBSWlDLGdCQUFKLENBQXFCO0FBQ3RDL0IseUJBQU87QUFDTHBDLDZCQUFTLEtBQUtBO0FBRFQ7QUFEK0IsaUJBQXJCLEM7OztBQUFiNEQsb0I7O0FBS04sb0JBQUlBLEtBQUs5RCxJQUFMLENBQVV3QyxJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCb0IsdUJBQUt2RCxZQUFMLEdBQWtCeUQsS0FBSzlELElBQUwsQ0FBVUssWUFBNUI7QUFDQXVELHVCQUFLdEQsZUFBTCxHQUFxQndELEtBQUs5RCxJQUFMLENBQVVNLGVBQS9CO0FBQ0FnQiwwQkFBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0FELDBCQUFRQyxHQUFSLENBQVlxQyxLQUFLeEQsSUFBakI7QUFDRCxpQkFMRCxNQUtPO0FBQ0xnQixnQ0FBSTZDLEtBQUosQ0FBVUgsS0FBSzlELElBQUwsQ0FBVWtFLEdBQXBCO0FBQ0Q7O0FBRUROLHFCQUFLTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBU0tHLE8sRUFBUztBQUNkLFVBQUlWLE9BQU8sSUFBWDtBQUNBO0FBQ0EsV0FBSzFELE9BQUwsR0FBYW9FLFFBQVFwRSxPQUFyQjtBQUNBMEQsV0FBS0MsWUFBTDtBQUNBRCxXQUFLVyxtQkFBTDtBQUNBakQsY0FBUUMsR0FBUixDQUFZaUQsR0FBR0MsTUFBSCxDQUFVQyxRQUF0QjtBQUNBcEQsY0FBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWStDLFFBQVFuRCxFQUFwQjtBQUNEOzs7O0VBbEdzQ1ksZUFBSzRDLEk7O2tCQUF6QjlFLFciLCJmaWxlIjoib3JkZXJfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgU2hvcEl0ZW1MaXN0IGZyb20gJ0AvY29tcG9uZW50cy9zaG9wX2l0ZW1fbGlzdCdcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJ1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXor6bmg4UnLFxuICB9XG4gIGRhdGEgPSB7XG4gICAgb2JqOiB7fSxcbiAgICBvcmRlck5vOlwiXCIsXG4gICAgZmxhZzpcIlwiLFxuICAgIGxpc3Q6W10sXG4gICAgb3JkZXJFeHByZXNzOnt9LFxuICAgIGV4cHJlc3NGbG93SW5mbzp7fVxuICB9XG5cbiAgYXN5bmMgZ2V0T3JkZXJJbmZvKGN1cnJlbnRQYWdlLHNpemUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldE9yZGVySW5mbyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcmRlck5vOiB0aGlzLm9yZGVyTm9cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhpcy5vYmo9anNvbi5kYXRhLm9iajtcbiAgICAgIHRoYXQubGlzdD1bXTtcbiAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3QsIC4uLmpzb24uZGF0YS5vYmoub3JkZXJJdGVtTGlzdF07XG4gICAgICB0aGF0LiRpbnZva2UoJ3Nob3BJdGVtTGlzdCcsICdyZWZyZXNoTGlzdCcsIHRoYXQubGlzdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT1saXN06L+U5Zue5pWw5o2uPT09PT09PT1cIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGF0Lmxpc3QpO1xuICAgICAgY29uc29sZS5sb2coanNvbi5kYXRhLm9iai5vcmRlckl0ZW1MaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuXG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuXG4gIGFzeW5jIGVkaXRPcmRlckluZm8ob3JkZXJObyxmbGFnKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5lZGl0T3JkZXJJbmZvKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9yZGVyTm86IG9yZGVyTm8sXG4gICAgICAgIGZsYWc6ZmxhZ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09bHp66L+U5Zue5pWw5o2uPT09PT09PT09XCIpXG4gICAgICBjb25zb2xlLmxvZyhqc29uLmRhdGEuZXJyZXJUaXBzKTtcbiAgICAgIC8qdGhhdC5saXN0ID0gWy4uLnRoYXQubGlzdCwgLi4uanNvbi5kYXRhLmVycmVyVGlwcy5vcmRlckl0ZW1MaXN0XTtcbiAgICAgIHRoYXQuJGludm9rZSgnc2hvcEl0ZW1MaXN0JywgJ3JlZnJlc2hMaXN0JywgdGhhdC5saXN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24uZGF0YS5lcnJlclRpcHMub3JkZXJJdGVtTGlzdCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGF0Lmxpc3QpOyovXG4gICAgICBpZiAodGhpcy5mbGFnPT0yKSB7Ly/liKDpmaRcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuXG4gIGFzeW5jIGdldE9yZGVyRXhwcmVzc0luZm8oKSB7XG4gICAgY29uc29sZS5sb2coXCJvcmRlck5vXCIpXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5vcmRlckV4cHJlc3NJbmZvKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9yZGVyTm86IHRoaXMub3JkZXJOb1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGF0Lm9yZGVyRXhwcmVzcz1qc29uLmRhdGEub3JkZXJFeHByZXNzO1xuICAgICAgdGhhdC5leHByZXNzRmxvd0luZm89anNvbi5kYXRhLmV4cHJlc3NGbG93SW5mbztcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT1saXN06L+U5Zue5pWw5o2uPT09PT09PT1cIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGF0Lmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG5cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNob3BJdGVtTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Z29vZHNMaXN0LnN5bmNcIjpcImxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHNob3BJdGVtTGlzdDogU2hvcEl0ZW1MaXN0XG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy90aGF0Lmxpc3QgPSBiYi5yZXN1bHQucHJvZHVjdHM7XG4gICAgdGhpcy5vcmRlck5vPW9wdGlvbnMub3JkZXJObztcbiAgICB0aGF0LmdldE9yZGVySW5mbygpO1xuICAgIHRoYXQuZ2V0T3JkZXJFeHByZXNzSW5mbygpO1xuICAgIGNvbnNvbGUubG9nKGJiLnJlc3VsdC5wcm9kdWN0cylcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PW9wdGlvbnM9PT09PT09PT09XCIpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuaWQpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBkZWxPcmRlcihlKSB7XG4gICAgICB0aGlzLmZsYWc9MjtcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+aYr+WQpuWIoOmZpOiuouWNlScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mbGFnKTtcbiAgICAgIHRoaXMuZWRpdE9yZGVySW5mbyh0aGlzLm9yZGVyTm8sdGhpcy5mbGFnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi5Yig6Zmk5oiQ5YqfXCIpXG4gICAgfSxcbiAgICBhc3luYyBjb21wbGV0aW9uKGUpIHtcbiAgICAgIHRoaXMuZmxhZz0zO1xuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm56Gu6K6k5pS26LSnJyk7XG4gICAgICB0aGlzLmVkaXRPcmRlckluZm8odGhpcy5vcmRlck5vLHRoaXMuZmxhZyk7XG4gICAgICBjb25zb2xlLmxvZyhcIuWujOaIkFwiKVxuICAgIH0sXG4gICAgYXN5bmMgZ29Mb2dpc3RpY3MoKSB7XG4gICAgICB0aXAuY29uZmlybSgn5p+l55yL54mp5rWBJyk7XG4gICAgfSxcbiAgICBhc3luYyBwYXlNb25leShlKSB7XG4gICAgICBsZXQgdHJhZGVObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWRlbm87XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG5cbiAgICAgIGNvbnN0IHBheSA9IGF3YWl0IGFwaS50b1BheSh7XG4gICAgICAgIHF1ZXJ5OntcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBvcmRlck5vOiB0cmFkZU5vXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBheS5kYXRhLmNvZGU9PTApIHtcbiAgICAgICAgLy/ku6XkuIvmmK/lvq7kv6HmlK/ku5hcbiAgICAgICAgd3gucmVxdWVzdFBheW1lbnQoe1xuICAgICAgICAgIGFwcElkOiBwYXkuZGF0YS5hcHBJZCxcbiAgICAgICAgICB0aW1lU3RhbXA6IHBheS5kYXRhLnRpbWVTdGFtcCxcbiAgICAgICAgICBub25jZVN0cjogcGF5LmRhdGEubm9uY2VTdHIsXG4gICAgICAgICAgcGFja2FnZTogcGF5LmRhdGEucGFja2FnZSxcbiAgICAgICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICAgICAgcGF5U2lnbjogcGF5LmRhdGEucGF5U2lnbixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF5JywgcmVzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8v5pSv5LuY5oiQ5YqfIOWFs+mXrWxvYWRkaW5nIOi3s+i9rOWIsOaUr+S7mOaIkOWKn+mhtemdolxuICAgICAgICAgICAgICB0aXAubG9hZGVkKCk7XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9wYXlfc3VjY2Vzcz9vcmRlck5vPVwiK3RyYWRlTm9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB0aXAuYWxlcnQoJ+aUr+S7mOWksei0pScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cblxufVxuXG4iXX0=