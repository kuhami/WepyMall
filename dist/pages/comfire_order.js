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

var _wepySwipeDelete = require('./../components/common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComfireOrder = function (_wepy$page) {
  _inherits(ComfireOrder, _wepy$page);

  function ComfireOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComfireOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComfireOrder.__proto__ || Object.getPrototypeOf(ComfireOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '确认订单'
    }, _this.$repeat = { "list": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.data = {
      list: [],
      goodsId: "",
      //卖家留言
      sellerMessage: "",

      //是否存在默认地址
      is_exit_address: false,
      address: {},
      //总价
      totalPrice: 0,
      actualPrice: 0,
      purchaseType: 1,
      //总积分
      total_jf_num: 0,
      can_use_score: 0,
      deduScore: 0,
      deduFee: 0,
      //输入抵扣积分
      jf_num: 0,
      reduce_fee: 0,
      operating: false

      //获取订单详情
    }, _this.computed = {}, _this.methods = {
      handleDelItem: function handleDelItem(itemData) {
        this.deleteGoods(itemData);
      },
      bindKeyInput: function bindKeyInput(e) {
        this.sellerMessage = e.detail.value;
        console.log("====" + e.detail.value);
      },
      goPay: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var fId;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fId = e.detail.formId;

                  if (this.is_exit_address) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 4;
                  return _tip2.default.confirm('你未设置收货地址，请设置地址');

                case 4:
                  _wepy2.default.navigateTo({
                    url: "/pages/address?type=order"
                  });
                  return _context.abrupt('return', false);

                case 6:
                  this.goToPay(fId);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function goPay(_x) {
          return _ref2.apply(this, arguments);
        }

        return goPay;
      }(),
      setAddress: function setAddress() {
        _wepy2.default.navigateTo({
          url: "/pages/address?type=order"
        });
      },
      jianBtnTap: function jianBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var index = parseInt(e.currentTarget.dataset.index);
        var id = e.currentTarget.dataset.id;
        var num = this.list[index].num;
        // 如果只有1件了，就不允许再减了
        if (num > 1) {
          num--;
        } else {
          return;
        }
        // 购物车数据
        //this.list[index].num = num;
        //this.totalPrice = this.totalPrice-this.list[index].price;
        //this.actualPrice = this.totalPrice - this.reduce_fee;
        //this.$apply();
        this.reduceGoodNum(id, num, index);
      },
      jiaBtnTap: function jiaBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.list[index].num;
        var id = e.currentTarget.dataset.id;
        // 自增
        num++;
        // 购物车数据
        /*this.list[index].num = num;
        this.totalPrice = parseInt(this.totalPrice)+parseInt(this.list[index].price);
        this.actualPrice = this.totalPrice - this.reduce_fee;
        this.$apply();*/
        this.addGoodNum(id, num, index);
      },
      jfInput: function jfInput(e) {
        var num = e.detail.value * 10 / 10;
        var reg = /^[0-9]+$/;
        if (!reg.test(num)) {
          _tip2.default.error("输入类型有误");
          this.jf_num = "";
          return {
            value: ""
          };;
        }
        if (this.can_use_score != num && num != 0) {
          this.jf_num = this.can_use_score;
        } /* else if(parseInt(this.jf_num)%this.deduScore) {
           this.jf_num = Math.floor(parseInt(this.jf_num)/this.deduScore)*this.deduScore;
          }*/else {
            this.jf_num = num;
          }
        var beishu = this.jf_num / this.deduScore;
        this.reduce_fee = beishu * this.deduFee;
        this.actualPrice = this.totalPrice - this.reduce_fee;
        return {
          value: this.jf_num
        };
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ComfireOrder, [{
    key: 'getOrderDetailInfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, userSpecialInfo, openId, json, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.preOrder({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId
                  }
                });

              case 5:
                json = _context2.sent;

                if (json.data.code == 0) {
                  data = json.data;

                  this.list = data.goodsList;
                  this.totalPrice = data.totalPrice;
                  this.actualPrice = data.actualPrice;
                  this.is_exit_address = data.hasDefaultAddress;
                  this.address = data.defaultAddress;
                  this.total_jf_num = data.userScore;
                  this.can_use_score = data.canUseScore;
                  this.deduScore = data.deduScore;
                  this.deduFee = data.deduFee;
                  this.jf_num = data.canUseScore;
                  this.reduce_fee = data.reduceFee;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.$apply();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getOrderDetailInfo() {
        return _ref3.apply(this, arguments);
      }

      return getOrderDetailInfo;
    }()
  }, {
    key: 'getAddressInfo',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context3.next = 3;
                return _api2.default.receiverInfoById({
                  query: {
                    id: id
                  }
                });

              case 3:
                json = _context3.sent;

                if (json.data.code == 0) {
                  this.is_exit_address = true;
                  this.address = json.data.receiverInfo;
                } else {
                  _tip2.default.error(json.data.msg);
                }

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAddressInfo(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getAddressInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      var that = this;
      this.actualPrice = 0;
      this.totalPrice = 0;
      this.total_jf_num = 0;
      this.can_use_score = 0;
      this.deduScore = 0;
      this.deduFee = 0;
      this.jf_num = 0;
      this.reduce_fee = 0;
      this.operating = false;
      that.goodsId = option.goodsId == undefined ? "" : option.goodsId;
      this.purchaseType = option.purchasetype == undefined ? "1" : option.purchasetype;
      /*that.list = bb.result.products;
      console.log(bb.result.products)*/
      that.getOrderDetailInfo();
      var from = option.from == undefined ? "" : option.from;
      if (from == "selAdd") {
        this.getAddressInfo(_wepy2.default.getStorageSync(_constant.ADDRESS_ID));
      }
    }
  }, {
    key: 'goToPay',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(formId) {
        var userSpecialInfo, openId, json, pay;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //测试调用接口用，可注释
                _tip2.default.loading("提交订单中");
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context4.next = 5;
                return _api2.default.saveByCart({
                  query: {
                    openId: openId,
                    receiverInfoId: this.address.id,
                    businessMessage: this.sellerMessage,
                    formId: formId,
                    reduceScore: this.jf_num
                  }
                });

              case 5:
                json = _context4.sent;

                if (!(json.data.code == 0)) {
                  _context4.next = 17;
                  break;
                }

                if (!(this.purchaseType == 2)) {
                  _context4.next = 11;
                  break;
                }

                //补货
                _tip2.default.success("已提交补货申请!");
                setTimeout(function () {
                  _tip2.default.loaded();
                  _wepy2.default.navigateTo({
                    url: "/pages/reorder"
                  });
                }, 2000);
                return _context4.abrupt('return');

              case 11:
                _context4.next = 13;
                return _api2.default.toPay({
                  query: {
                    openId: openId,
                    orderNo: json.data.tradeNo
                  }
                });

              case 13:
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
                          url: "/pages/pay_success?orderNo=" + json.data.tradeNo
                        });
                      }, 2000);
                    },
                    fail: function fail(res) {
                      _tip2.default.alert('支付失败');
                      setTimeout(function () {
                        //支付成功 关闭loadding 跳转到支付成功页面
                        _tip2.default.loaded();
                        _wepy2.default.navigateTo({
                          url: "/pages/order"
                        });
                      }, 2000);
                    }
                  });
                } else {
                  _tip2.default.alert('支付失败');
                  setTimeout(function () {
                    //支付成功 关闭loadding 跳转到支付成功页面
                    _tip2.default.loaded();
                    _wepy2.default.navigateTo({
                      url: "/pages/order"
                    });
                  }, 2000);
                }
                _context4.next = 18;
                break;

              case 17:
                _tip2.default.error(json.data.msg);

              case 18:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function goToPay(_x3) {
        return _ref5.apply(this, arguments);
      }

      return goToPay;
    }()
  }, {
    key: 'reduceGoodNum',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context5.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context5.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = this.totalPrice - this.list[index].price;
                  this.actualPrice = this.totalPrice - this.reduce_fee;
                  this.operating = false;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function reduceGoodNum(_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      }

      return reduceGoodNum;
    }()
  }, {
    key: 'addGoodNum',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context6.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context6.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = parseInt(this.totalPrice) + parseInt(this.list[index].price);
                  this.actualPrice = this.totalPrice - this.reduce_fee;
                  this.operating = false;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function addGoodNum(_x7, _x8, _x9) {
        return _ref7.apply(this, arguments);
      }

      return addGoodNum;
    }()
  }, {
    key: 'deleteGoods',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(itemData) {
        var id, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = itemData.id;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context7.next = 5;
                return _api2.default.cartDel({
                  query: {
                    openId: openId,
                    cartIdList: [id]
                  }
                });

              case 5:
                json = _context7.sent;

                if (!(json.data.code == 0)) {
                  _context7.next = 23;
                  break;
                }

                // 购物车数据
                retList = [];
                i = 0;

              case 9:
                if (!(i < this.list.length)) {
                  _context7.next = 20;
                  break;
                }

                if (!(this.list[i].id == id)) {
                  _context7.next = 16;
                  break;
                }

                this.totalPrice -= parseInt(this.list[i].priceSubtotal);
                this.actualPrice = this.totalPrice - this.reduce_fee;
                return _context7.abrupt('continue', 17);

              case 16:
                retList.push(this.list[i]);

              case 17:
                i++;
                _context7.next = 9;
                break;

              case 20:
                this.list = retList;
                _context7.next = 24;
                break;

              case 23:
                _tip2.default.error(json.data.msg);

              case 24:
                this.$apply();

              case 25:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function deleteGoods(_x10) {
        return _ref8.apply(this, arguments);
      }

      return deleteGoods;
    }()
  }]);

  return ComfireOrder;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ComfireOrder , 'pages/comfire_order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWZpcmVfb3JkZXIuanMiXSwibmFtZXMiOlsiQ29tZmlyZU9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3aXBlRGVsZXRlIiwiZGF0YSIsImxpc3QiLCJnb29kc0lkIiwic2VsbGVyTWVzc2FnZSIsImlzX2V4aXRfYWRkcmVzcyIsImFkZHJlc3MiLCJ0b3RhbFByaWNlIiwiYWN0dWFsUHJpY2UiLCJwdXJjaGFzZVR5cGUiLCJ0b3RhbF9qZl9udW0iLCJjYW5fdXNlX3Njb3JlIiwiZGVkdVNjb3JlIiwiZGVkdUZlZSIsImpmX251bSIsInJlZHVjZV9mZWUiLCJvcGVyYXRpbmciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVEZWxJdGVtIiwiaXRlbURhdGEiLCJkZWxldGVHb29kcyIsImJpbmRLZXlJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJnb1BheSIsImZJZCIsImZvcm1JZCIsInRpcCIsImNvbmZpcm0iLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdvVG9QYXkiLCJzZXRBZGRyZXNzIiwiamlhbkJ0blRhcCIsImluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwibnVtIiwicmVkdWNlR29vZE51bSIsImppYUJ0blRhcCIsImFkZEdvb2ROdW0iLCJqZklucHV0IiwicmVnIiwidGVzdCIsImVycm9yIiwiYmVpc2h1IiwiZXZlbnRzIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwicHJlT3JkZXIiLCJxdWVyeSIsImpzb24iLCJjb2RlIiwiZ29vZHNMaXN0IiwiaGFzRGVmYXVsdEFkZHJlc3MiLCJkZWZhdWx0QWRkcmVzcyIsInVzZXJTY29yZSIsImNhblVzZVNjb3JlIiwicmVkdWNlRmVlIiwibXNnIiwiJGFwcGx5IiwicmVjZWl2ZXJJbmZvQnlJZCIsInJlY2VpdmVySW5mbyIsIm9wdGlvbiIsInVuZGVmaW5lZCIsInB1cmNoYXNldHlwZSIsImdldE9yZGVyRGV0YWlsSW5mbyIsImZyb20iLCJnZXRBZGRyZXNzSW5mbyIsIkFERFJFU1NfSUQiLCJsb2FkaW5nIiwic2F2ZUJ5Q2FydCIsInJlY2VpdmVySW5mb0lkIiwiYnVzaW5lc3NNZXNzYWdlIiwicmVkdWNlU2NvcmUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImxvYWRlZCIsInRvUGF5Iiwib3JkZXJObyIsInRyYWRlTm8iLCJwYXkiLCJ3eCIsInJlcXVlc3RQYXltZW50IiwiYXBwSWQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJzaWduVHlwZSIsInBheVNpZ24iLCJyZXMiLCJmYWlsIiwiYWxlcnQiLCJjYXJ0VXBkYXRlTnVtIiwicHJpY2UiLCJjYXJ0RGVsIiwiY2FydElkTGlzdCIsInJldExpc3QiLCJpIiwibGVuZ3RoIiwicHJpY2VTdWJ0b3RhbCIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxXQUE3QixFQUFSLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxPQUE3RCxFQUFoQixFQUFzRix5QkFBd0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQs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X29yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnO1xuaW1wb3J0IHtcbiAgU1lTVEVNX0lORk8sXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgQUREUkVTU19JRFxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcbmltcG9ydCBzd2lwZURlbGV0ZSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL3dlcHktc3dpcGUtZGVsZXRlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tZmlyZU9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTorqLljZUnLFxuICB9XG4gJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcInN3aXBlRGVsZXRlXCIsXCJwcm9wc1wiOlwic3dpcGVEYXRhXCJ9fTtcclxuJHByb3BzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpzd2lwZURhdGEub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ2LW9uOmRlbEl0ZW1cIjpcImhhbmRsZURlbEl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzd2lwZURlbGV0ZVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBnb29kc0lkOiBcIlwiLFxuICAgIC8v5Y2W5a6255WZ6KiAXG4gICAgc2VsbGVyTWVzc2FnZTogXCJcIixcblxuICAgIC8v5piv5ZCm5a2Y5Zyo6buY6K6k5Zyw5Z2AXG4gICAgaXNfZXhpdF9hZGRyZXNzOiBmYWxzZSxcbiAgICBhZGRyZXNzOiB7fSxcbiAgICAvL+aAu+S7t1xuICAgIHRvdGFsUHJpY2U6MCxcbiAgICBhY3R1YWxQcmljZSA6IDAsXG4gICAgcHVyY2hhc2VUeXBlIDogMSxcbiAgICAvL+aAu+enr+WIhlxuICAgIHRvdGFsX2pmX251bTogMCxcbiAgICBjYW5fdXNlX3Njb3JlOjAsXG4gICAgZGVkdVNjb3JlOjAsXG4gICAgZGVkdUZlZSA6IDAsXG4gICAgLy/ovpPlhaXmirXmiaPnp6/liIZcbiAgICBqZl9udW06IDAsXG4gICAgcmVkdWNlX2ZlZSA6IDAsXG4gICAgb3BlcmF0aW5nOiBmYWxzZVxuICB9XG5cbiAgLy/ojrflj5borqLljZXor6bmg4VcbiAgYXN5bmMgZ2V0T3JkZXJEZXRhaWxJbmZvKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucHJlT3JkZXIoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGdvb2RzSWQ6IHRoYXQuZ29vZHNJZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBsZXQgZGF0YSA9IGpzb24uZGF0YTtcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuZ29vZHNMaXN0O1xuICAgICAgdGhpcy50b3RhbFByaWNlID0gZGF0YS50b3RhbFByaWNlO1xuICAgICAgdGhpcy5hY3R1YWxQcmljZSA9IGRhdGEuYWN0dWFsUHJpY2U7XG4gICAgICB0aGlzLmlzX2V4aXRfYWRkcmVzcyA9IGRhdGEuaGFzRGVmYXVsdEFkZHJlc3M7XG4gICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmRlZmF1bHRBZGRyZXNzO1xuICAgICAgdGhpcy50b3RhbF9qZl9udW0gPSBkYXRhLnVzZXJTY29yZTtcbiAgICAgIHRoaXMuY2FuX3VzZV9zY29yZSA9IGRhdGEuY2FuVXNlU2NvcmU7XG4gICAgICB0aGlzLmRlZHVTY29yZSA9IGRhdGEuZGVkdVNjb3JlO1xuICAgICAgdGhpcy5kZWR1RmVlID0gZGF0YS5kZWR1RmVlO1xuICAgICAgdGhpcy5qZl9udW0gPSBkYXRhLmNhblVzZVNjb3JlO1xuICAgICAgdGhpcy5yZWR1Y2VfZmVlID0gZGF0YS5yZWR1Y2VGZWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0QWRkcmVzc0luZm8oaWQpIHtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucmVjZWl2ZXJJbmZvQnlJZCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhpcy5pc19leGl0X2FkZHJlc3MgPSB0cnVlO1xuICAgICAgdGhpcy5hZGRyZXNzPWpzb24uZGF0YS5yZWNlaXZlckluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5hY3R1YWxQcmljZSA9IDA7XG4gICAgdGhpcy50b3RhbFByaWNlID0gMDtcbiAgICB0aGlzLnRvdGFsX2pmX251bSA9IDA7XG4gICAgdGhpcy5jYW5fdXNlX3Njb3JlID0gMDtcbiAgICB0aGlzLmRlZHVTY29yZSA9IDA7XG4gICAgdGhpcy5kZWR1RmVlID0gMDtcbiAgICB0aGlzLmpmX251bSA9IDA7XG4gICAgdGhpcy5yZWR1Y2VfZmVlID0gMDtcbiAgICB0aGlzLm9wZXJhdGluZyA9IGZhbHNlO1xuICAgIHRoYXQuZ29vZHNJZCA9IG9wdGlvbi5nb29kc0lkPT11bmRlZmluZWQ/XCJcIjpvcHRpb24uZ29vZHNJZDtcbiAgICB0aGlzLnB1cmNoYXNlVHlwZSA9IG9wdGlvbi5wdXJjaGFzZXR5cGU9PXVuZGVmaW5lZD9cIjFcIjpvcHRpb24ucHVyY2hhc2V0eXBlO1xuICAgIC8qdGhhdC5saXN0ID0gYmIucmVzdWx0LnByb2R1Y3RzO1xuICAgIGNvbnNvbGUubG9nKGJiLnJlc3VsdC5wcm9kdWN0cykqL1xuICAgIHRoYXQuZ2V0T3JkZXJEZXRhaWxJbmZvKCk7XG4gICAgbGV0IGZyb20gPSBvcHRpb24uZnJvbT09dW5kZWZpbmVkP1wiXCI6b3B0aW9uLmZyb207XG4gICAgaWYgKGZyb209PVwic2VsQWRkXCIpIHtcbiAgICAgIHRoaXMuZ2V0QWRkcmVzc0luZm8od2VweS5nZXRTdG9yYWdlU3luYyhBRERSRVNTX0lEKSlcbiAgICB9XG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuXG4gIGFzeW5jIGdvVG9QYXkoZm9ybUlkKSB7XG4gICAgLy/mtYvor5XosIPnlKjmjqXlj6PnlKjvvIzlj6/ms6jph4pcbiAgICB0aXAubG9hZGluZyhcIuaPkOS6pOiuouWNleS4rVwiKTtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuc2F2ZUJ5Q2FydCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgcmVjZWl2ZXJJbmZvSWQ6IHRoaXMuYWRkcmVzcy5pZCxcbiAgICAgICAgYnVzaW5lc3NNZXNzYWdlOiB0aGlzLnNlbGxlck1lc3NhZ2UsXG4gICAgICAgIGZvcm1JZDogZm9ybUlkLFxuICAgICAgICByZWR1Y2VTY29yZTogdGhpcy5qZl9udW1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvL+ihpei0p+ebtOaOpeaPkOS6pOWIsOWQjuWPsOWOu+WuoeaguFxuICAgICAgaWYgKHRoaXMucHVyY2hhc2VUeXBlPT0yKSB7Ly/ooaXotKdcbiAgICAgICAgdGlwLnN1Y2Nlc3MoXCLlt7Lmj5DkuqTooaXotKfnlLPor7chXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aXAubG9hZGVkKCk7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogXCIvcGFnZXMvcmVvcmRlclwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMjAwMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy/kv53lrZjmiJDlip/kuoblkI7ov5vooYzlvq7kv6HmlK/ku5hcbiAgICAgIGNvbnN0IHBheSA9IGF3YWl0IGFwaS50b1BheSh7XG4gICAgICAgIHF1ZXJ5OntcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBvcmRlck5vOiBqc29uLmRhdGEudHJhZGVOb1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXkuZGF0YS5jb2RlPT0wKSB7XG4gICAgICAgIC8v5Lul5LiL5piv5b6u5L+h5pSv5LuYXG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcbiAgICAgICAgICBhcHBJZDogcGF5LmRhdGEuYXBwSWQsXG4gICAgICAgICAgdGltZVN0YW1wOiBwYXkuZGF0YS50aW1lU3RhbXAsXG4gICAgICAgICAgbm9uY2VTdHI6IHBheS5kYXRhLm5vbmNlU3RyLFxuICAgICAgICAgIHBhY2thZ2U6IHBheS5kYXRhLnBhY2thZ2UsXG4gICAgICAgICAgc2lnblR5cGU6ICdNRDUnLFxuICAgICAgICAgIHBheVNpZ246IHBheS5kYXRhLnBheVNpZ24sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BheScsIHJlcylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAvL+aUr+S7mOaIkOWKnyDlhbPpl61sb2FkZGluZyDot7PovazliLDmlK/ku5jmiJDlip/pobXpnaJcbiAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvcGF5X3N1Y2Nlc3M/b3JkZXJObz1cIitqc29uLmRhdGEudHJhZGVOb1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgLy/mlK/ku5jmiJDlip8g5YWz6ZetbG9hZGRpbmcg6Lez6L2s5Yiw5pSv5LuY5oiQ5Yqf6aG16Z2iXG4gICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL29yZGVyXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy/mlK/ku5jmiJDlip8g5YWz6ZetbG9hZGRpbmcg6Lez6L2s5Yiw5pSv5LuY5oiQ5Yqf6aG16Z2iXG4gICAgICAgICAgdGlwLmxvYWRlZCgpO1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL29yZGVyXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIHJlZHVjZUdvb2ROdW0oaWQsIG51bSwgaW5kZXgpIHtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydFVwZGF0ZU51bSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBudW06IG51bVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvLyDotK3nianovabmlbDmja5cbiAgICAgIHRoaXMubGlzdFtpbmRleF0ubnVtID0gbnVtO1xuICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy50b3RhbFByaWNlIC0gdGhpcy5saXN0W2luZGV4XS5wcmljZTtcbiAgICAgIHRoaXMuYWN0dWFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2UgLSB0aGlzLnJlZHVjZV9mZWU7XG4gICAgICB0aGlzLm9wZXJhdGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuXG4gIGFzeW5jIGFkZEdvb2ROdW0oaWQsIG51bSwgaW5kZXgpIHtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydFVwZGF0ZU51bSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBudW06IG51bVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvLyDotK3nianovabmlbDmja5cbiAgICAgIHRoaXMubGlzdFtpbmRleF0ubnVtID0gbnVtO1xuICAgICAgdGhpcy50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy50b3RhbFByaWNlKSArIHBhcnNlSW50KHRoaXMubGlzdFtpbmRleF0ucHJpY2UpO1xuICAgICAgdGhpcy5hY3R1YWxQcmljZSA9IHRoaXMudG90YWxQcmljZSAtIHRoaXMucmVkdWNlX2ZlZTtcbiAgICAgIHRoaXMub3BlcmF0aW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlR29vZHMoaXRlbURhdGEpIHtcbiAgICB2YXIgaWQgPSBpdGVtRGF0YS5pZDtcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydERlbCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgY2FydElkTGlzdDogW2lkXSxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgLy8g6LSt54mp6L2m5pWw5o2uXG4gICAgICBsZXQgcmV0TGlzdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFtpXS5pZCA9PSBpZCkge1xuICAgICAgICAgIHRoaXMudG90YWxQcmljZSAtPSBwYXJzZUludCh0aGlzLmxpc3RbaV0ucHJpY2VTdWJ0b3RhbCk7XG4gICAgICAgICAgdGhpcy5hY3R1YWxQcmljZSA9IHRoaXMudG90YWxQcmljZSAtIHRoaXMucmVkdWNlX2ZlZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXRMaXN0LnB1c2godGhpcy5saXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5saXN0ID0gcmV0TGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZURlbEl0ZW0oaXRlbURhdGEpIHtcbiAgICAgIHRoaXMuZGVsZXRlR29vZHMoaXRlbURhdGEpO1xuICAgIH0sXG4gICAgYmluZEtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2VsbGVyTWVzc2FnZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXCI9PT09XCIgKyBlLmRldGFpbC52YWx1ZSk7XG4gICAgfSxcbiAgICBhc3luYyBnb1BheShlKSB7XG4gICAgICB2YXIgZklkID0gZS5kZXRhaWwuZm9ybUlkO1xuICAgICAgaWYgKCF0aGlzLmlzX2V4aXRfYWRkcmVzcykge1xuICAgICAgICBhd2FpdCB0aXAuY29uZmlybSgn5L2g5pyq6K6+572u5pS26LSn5Zyw5Z2A77yM6K+36K6+572u5Zyw5Z2AJyk7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9hZGRyZXNzP3R5cGU9b3JkZXJcIlxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmdvVG9QYXkoZklkKTtcbiAgICB9LFxuICAgIHNldEFkZHJlc3MoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL2FkZHJlc3M/dHlwZT1vcmRlclwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgamlhbkJ0blRhcChlKSB7XG4gICAgICBpZiAodGhpcy5vcGVyYXRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVyYXRpbmcgPSB0cnVlO1xuICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgdmFyIGlkID0gIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgdmFyIG51bSA9IHRoaXMubGlzdFtpbmRleF0ubnVtO1xuICAgICAgLy8g5aaC5p6c5Y+q5pyJMeS7tuS6hu+8jOWwseS4jeWFgeiuuOWGjeWHj+S6hlxuICAgICAgaWYgKG51bSA+IDEpIHtcbiAgICAgICAgbnVtIC0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8g6LSt54mp6L2m5pWw5o2uXG4gICAgICAvL3RoaXMubGlzdFtpbmRleF0ubnVtID0gbnVtO1xuICAgICAgLy90aGlzLnRvdGFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2UtdGhpcy5saXN0W2luZGV4XS5wcmljZTtcbiAgICAgIC8vdGhpcy5hY3R1YWxQcmljZSA9IHRoaXMudG90YWxQcmljZSAtIHRoaXMucmVkdWNlX2ZlZTtcbiAgICAgIC8vdGhpcy4kYXBwbHkoKTtcbiAgICAgIHRoaXMucmVkdWNlR29vZE51bShpZCwgbnVtLCBpbmRleCk7XG4gICAgfSxcbiAgICBqaWFCdG5UYXAoZSkge1xuICAgICAgaWYgKHRoaXMub3BlcmF0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlcmF0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgIHZhciBudW0gPSB0aGlzLmxpc3RbaW5kZXhdLm51bTtcbiAgICAgIHZhciBpZCA9ICBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIC8vIOiHquWinlxuICAgICAgbnVtICsrO1xuICAgICAgLy8g6LSt54mp6L2m5pWw5o2uXG4gICAgICAvKnRoaXMubGlzdFtpbmRleF0ubnVtID0gbnVtO1xuICAgICAgdGhpcy50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy50b3RhbFByaWNlKStwYXJzZUludCh0aGlzLmxpc3RbaW5kZXhdLnByaWNlKTtcbiAgICAgIHRoaXMuYWN0dWFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2UgLSB0aGlzLnJlZHVjZV9mZWU7XG4gICAgICB0aGlzLiRhcHBseSgpOyovXG4gICAgICB0aGlzLmFkZEdvb2ROdW0oaWQsIG51bSwgaW5kZXgpO1xuICAgIH0sXG4gICAgamZJbnB1dChlKSB7XG4gICAgICBsZXQgbnVtID0gZS5kZXRhaWwudmFsdWUgKiAxMCAvIDEwO1xuICAgICAgbGV0IHJlZyA9IC9eWzAtOV0rJC87XG4gICAgICBpZiAoIXJlZy50ZXN0KG51bSkpIHtcbiAgICAgICAgdGlwLmVycm9yKFwi6L6T5YWl57G75Z6L5pyJ6K+vXCIpO1xuICAgICAgICB0aGlzLmpmX251bT1cIlwiO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH07O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2FuX3VzZV9zY29yZSAhPSBudW0gJiYgbnVtICE9MCAgKSB7XG4gICAgICAgIHRoaXMuamZfbnVtID0gdGhpcy5jYW5fdXNlX3Njb3JlO1xuICAgICAgfS8qIGVsc2UgaWYocGFyc2VJbnQodGhpcy5qZl9udW0pJXRoaXMuZGVkdVNjb3JlKSB7XG4gICAgICAgIHRoaXMuamZfbnVtID0gTWF0aC5mbG9vcihwYXJzZUludCh0aGlzLmpmX251bSkvdGhpcy5kZWR1U2NvcmUpKnRoaXMuZGVkdVNjb3JlO1xuICAgICAgfSovIGVsc2Uge1xuICAgICAgICB0aGlzLmpmX251bSA9IG51bTtcbiAgICAgIH1cbiAgICAgIGxldCBiZWlzaHUgPSB0aGlzLmpmX251bS90aGlzLmRlZHVTY29yZTtcbiAgICAgIHRoaXMucmVkdWNlX2ZlZSA9IGJlaXNodSAqIHRoaXMuZGVkdUZlZTtcbiAgICAgIHRoaXMuYWN0dWFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2UgLSB0aGlzLnJlZHVjZV9mZWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy5qZl9udW1cbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG59XG5cbiJdfQ==