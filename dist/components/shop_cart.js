'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../utils/constant.js');

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shopCart = function (_wepy$component) {
  _inherits(shopCart, _wepy$component);

  function shopCart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, shopCart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = shopCart.__proto__ || Object.getPrototypeOf(shopCart)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "list": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.data = {
      list: [],
      noSelect: false,
      saveHidden: true,
      totalPrice: 0,
      operating: false,
      allChecked: true
      //获取购物车商品列表
    }, _this.computed = {}, _this.methods = {
      handleDelItem: function handleDelItem(itemData) {
        this.deleteGoods(itemData);
      },
      selectTap: function selectTap(e) {
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var ischecked = this.list[index].ischecked;
        this.checkGoods(id, index, ischecked);
      },
      selectAll: function selectAll() {
        console.log("sele....");
        this.checkAllGoods();
      },
      getCartListMethod: function getCartListMethod() {
        this.getCartList();
      },
      jianBtnTap: function jianBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.list[index].num;
        // 如果只有1件了，就不允许再减了
        if (num > 1) {
          num--;
        } else {
          return;
        }
        this.reduceGoodNum(id, num, index);
      },
      jiaBtnTap: function jiaBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.list[index].num;
        // 自增
        num++;
        this.addGoodNum(id, num, index);
      },
      toPayOrder: function toPayOrder() {
        var purType = 1,
            prePurType = 1;
        var bOneType = true;
        var index = 0;
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].ischecked) {
            purType = this.list[i].type;
            if (index > 0) {
              if (purType != prePurType) {
                bOneType = false;
                break;
              }
            }
            prePurType = purType;
            index++;
          }
        }
        if (!bOneType) {
          _tip2.default.alert("先把补货的商品结算!");
          return;
        }
        _wepy2.default.navigateTo({
          url: "/pages/comfire_order?purchasetype=" + purType
        });
      },
      goIndex: function goIndex() {
        _wepy2.default.switchTab({
          url: "/pages/home"
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(shopCart, [{
    key: 'getCartList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, openId, json, data, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.cartList({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;

                if (!(json.data.code == 0)) {
                  _context.next = 20;
                  break;
                }

                data = json.data;

                this.list = data.list;
                this.totalPrice = data.totalPrice;
                i = 0;

              case 11:
                if (!(i < this.list.length)) {
                  _context.next = 18;
                  break;
                }

                if (this.list[i].ischecked) {
                  _context.next = 15;
                  break;
                }

                this.allChecked = false;
                return _context.abrupt('break', 18);

              case 15:
                i++;
                _context.next = 11;
                break;

              case 18:
                _context.next = 21;
                break;

              case 20:
                _tip2.default.error(json.data.msg);

              case 21:
                that.$apply();

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCartList() {
        return _ref2.apply(this, arguments);
      }

      return getCartList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.operating = false;
      //that.list = bb.result.products;
      //console.log(bb.result.products)
      //that.getCartList();
    }
  }, {
    key: 'checkGoods',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, index, ischecked) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 4;
                return _api2.default.cartCheck({
                  query: {
                    openId: openId,
                    id: id
                  }
                });

              case 4:
                json = _context2.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].ischecked = !ischecked;
                  if (this.list[index].ischecked) {
                    this.totalPrice += parseInt(this.list[index].priceSubtotal);
                  } else {
                    this.totalPrice -= parseInt(this.list[index].priceSubtotal);
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkGoods(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return checkGoods;
    }()
  }, {
    key: 'reduceGoodNum',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context3.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = this.totalPrice - this.list[index].price;
                  this.operating = false;
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

      function reduceGoodNum(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return reduceGoodNum;
    }()
  }, {
    key: 'addGoodNum',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context4.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context4.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = parseInt(this.totalPrice) + parseInt(this.list[index].price);
                  this.operating = false;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addGoodNum(_x7, _x8, _x9) {
        return _ref5.apply(this, arguments);
      }

      return addGoodNum;
    }()
  }, {
    key: 'deleteGoods',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(itemData) {
        var id, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = itemData.id;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context5.next = 5;
                return _api2.default.cartDel({
                  query: {
                    openId: openId,
                    cartIdList: [id]
                  }
                });

              case 5:
                json = _context5.sent;

                if (!(json.data.code == 0)) {
                  _context5.next = 22;
                  break;
                }

                // 购物车数据
                retList = [];
                i = 0;

              case 9:
                if (!(i < this.list.length)) {
                  _context5.next = 19;
                  break;
                }

                if (!(this.list[i].id == id)) {
                  _context5.next = 15;
                  break;
                }

                if (this.list[i].ischecked) {
                  this.totalPrice -= parseInt(this.list[i].priceSubtotal);
                }
                return _context5.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context5.next = 9;
                break;

              case 19:
                this.list = retList;
                _context5.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                this.$apply();

              case 24:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteGoods(_x10) {
        return _ref6.apply(this, arguments);
      }

      return deleteGoods;
    }()
  }, {
    key: 'checkAllGoods',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var userSpecialInfo, openId, check, json, i;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                check = 0;

                if (!this.allChecked) {
                  //原来未选中
                  check = 1;
                }
                _context6.next = 6;
                return _api2.default.cartCheckAll({
                  query: {
                    openId: openId,
                    check: check
                  }
                });

              case 6:
                json = _context6.sent;

                if (json.data.code == 0) {
                  this.totalPrice = 0;
                  for (i = 0; i < this.list.length; i++) {
                    this.list[i].ischecked = !this.allChecked;
                    if (!this.allChecked) {
                      this.totalPrice += parseInt(this.list[i].priceSubtotal);
                    }
                  }
                  this.allChecked = !this.allChecked;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkAllGoods() {
        return _ref7.apply(this, arguments);
      }

      return checkAllGoods;
    }()
  }]);

  return shopCart;
}(_wepy2.default.component);

exports.default = shopCart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfY2FydC5qcyJdLCJuYW1lcyI6WyJzaG9wQ2FydCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3aXBlRGVsZXRlIiwiZGF0YSIsImxpc3QiLCJub1NlbGVjdCIsInNhdmVIaWRkZW4iLCJ0b3RhbFByaWNlIiwib3BlcmF0aW5nIiwiYWxsQ2hlY2tlZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZURlbEl0ZW0iLCJpdGVtRGF0YSIsImRlbGV0ZUdvb2RzIiwic2VsZWN0VGFwIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInBhcnNlSW50IiwiaXNjaGVja2VkIiwiY2hlY2tHb29kcyIsInNlbGVjdEFsbCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0FsbEdvb2RzIiwiZ2V0Q2FydExpc3RNZXRob2QiLCJnZXRDYXJ0TGlzdCIsImppYW5CdG5UYXAiLCJudW0iLCJyZWR1Y2VHb29kTnVtIiwiamlhQnRuVGFwIiwiYWRkR29vZE51bSIsInRvUGF5T3JkZXIiLCJwdXJUeXBlIiwicHJlUHVyVHlwZSIsImJPbmVUeXBlIiwiaSIsImxlbmd0aCIsInR5cGUiLCJ0aXAiLCJhbGVydCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29JbmRleCIsInN3aXRjaFRhYiIsImV2ZW50cyIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsImNhcnRMaXN0IiwicXVlcnkiLCJqc29uIiwiY29kZSIsImVycm9yIiwibXNnIiwiJGFwcGx5IiwiY2FydENoZWNrIiwicHJpY2VTdWJ0b3RhbCIsImNhcnRVcGRhdGVOdW0iLCJwcmljZSIsImNhcnREZWwiLCJjYXJ0SWRMaXN0IiwicmV0TGlzdCIsInB1c2giLCJjaGVjayIsImNhcnRDaGVja0FsbCIsImNvbXBvbmVudCJdLCJtYXBwaW5n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QVMsS0FBS2pCLElBQUwsQ0FBVW1DLENBQVYsRUFBYTBCLGFBQXRCLENBQW5CO0FBQ0Q7QUFDRjtBQUNELHVCQUFLeEQsVUFBTCxHQUFrQixDQUFDLEtBQUtBLFVBQXhCO0FBQ0QsaUJBVEQsTUFTTztBQUNMaUMsZ0NBQUltQixLQUFKLENBQVVGLEtBQUt4RCxJQUFMLENBQVUyRCxHQUFwQjtBQUNEO0FBQ0QscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyS2tDbkIsZUFBSzhCLFM7O2tCQUF0QjdFLFEiLCJmaWxlIjoic2hvcF9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICBpbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnO1xuICBpbXBvcnQge1xuICAgIFVTRVJfU1BFQ0lDQUxfSU5GT1xuICB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuICBpbXBvcnQgc3dpcGVEZWxldGUgZnJvbSAnLi9jb21tb24vd2VweS1zd2lwZS1kZWxldGUnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3BDYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcInN3aXBlRGVsZXRlXCIsXCJwcm9wc1wiOlwic3dpcGVEYXRhXCJ9fTtcclxuJHByb3BzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpzd2lwZURhdGEub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ2LW9uOmRlbEl0ZW1cIjpcImhhbmRsZURlbEl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHN3aXBlRGVsZXRlXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIG5vU2VsZWN0OiBmYWxzZSxcbiAgICAgIHNhdmVIaWRkZW46IHRydWUsXG4gICAgICB0b3RhbFByaWNlOiAwLFxuICAgICAgb3BlcmF0aW5nOiBmYWxzZSxcbiAgICAgIGFsbENoZWNrZWQ6IHRydWVcbiAgICB9XG4gICAgLy/ojrflj5botK3nianovabllYblk4HliJfooahcbiAgICBhc3luYyBnZXRDYXJ0TGlzdCgpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydExpc3Qoe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgbGV0IGRhdGEgPSBqc29uLmRhdGE7XG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGEubGlzdDtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gZGF0YS50b3RhbFByaWNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghdGhpcy5saXN0W2ldLmlzY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5vcGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgIC8vdGhhdC5saXN0ID0gYmIucmVzdWx0LnByb2R1Y3RzO1xuICAgICAgLy9jb25zb2xlLmxvZyhiYi5yZXN1bHQucHJvZHVjdHMpXG4gICAgICAvL3RoYXQuZ2V0Q2FydExpc3QoKTtcbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7fVxuICAgIGFzeW5jIGNoZWNrR29vZHMoaWQsIGluZGV4LCBpc2NoZWNrZWQpIHtcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydENoZWNrKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICAvLyDotK3nianovabmlbDmja5cbiAgICAgICAgdGhpcy5saXN0W2luZGV4XS5pc2NoZWNrZWQgPSAhaXNjaGVja2VkO1xuICAgICAgICBpZiAodGhpcy5saXN0W2luZGV4XS5pc2NoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgKz0gcGFyc2VJbnQodGhpcy5saXN0W2luZGV4XS5wcmljZVN1YnRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgLT0gcGFyc2VJbnQodGhpcy5saXN0W2luZGV4XS5wcmljZVN1YnRvdGFsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgICBhc3luYyByZWR1Y2VHb29kTnVtKGlkLCBudW0sIGluZGV4KSB7XG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNhcnRVcGRhdGVOdW0oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBudW06IG51bVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIC8vIOi0reeJqei9puaVsOaNrlxuICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLm51bSA9IG51bTtcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gdGhpcy50b3RhbFByaWNlIC0gdGhpcy5saXN0W2luZGV4XS5wcmljZTtcbiAgICAgICAgdGhpcy5vcGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgYWRkR29vZE51bShpZCwgbnVtLCBpbmRleCkge1xuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jYXJ0VXBkYXRlTnVtKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgbnVtOiBudW1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICAvLyDotK3nianovabmlbDmja5cbiAgICAgICAgdGhpcy5saXN0W2luZGV4XS5udW0gPSBudW07XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IHBhcnNlSW50KHRoaXMudG90YWxQcmljZSkgKyBwYXJzZUludCh0aGlzLmxpc3RbaW5kZXhdLnByaWNlKTtcbiAgICAgICAgdGhpcy5vcGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gICAgYXN5bmMgZGVsZXRlR29vZHMoaXRlbURhdGEpIHtcbiAgICAgIHZhciBpZCA9IGl0ZW1EYXRhLmlkO1xuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jYXJ0RGVsKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBjYXJ0SWRMaXN0OiBbaWRdLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAgIC8vIOi0reeJqei9puaVsOaNrlxuICAgICAgICBsZXQgcmV0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0uaXNjaGVja2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSAtPSBwYXJzZUludCh0aGlzLmxpc3RbaV0ucHJpY2VTdWJ0b3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0TGlzdC5wdXNoKHRoaXMubGlzdFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdCA9IHJldExpc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2tBbGxHb29kcygpIHtcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgIGxldCBjaGVjayA9IDA7XG4gICAgICBpZiAoIXRoaXMuYWxsQ2hlY2tlZCkgey8v5Y6f5p2l5pyq6YCJ5LitXG4gICAgICAgIGNoZWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydENoZWNrQWxsKHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICBjaGVjazogY2hlY2tcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMubGlzdFtpXS5pc2NoZWNrZWQgPSAhdGhpcy5hbGxDaGVja2VkO1xuICAgICAgICAgIGlmICghdGhpcy5hbGxDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgKz0gcGFyc2VJbnQodGhpcy5saXN0W2ldLnByaWNlU3VidG90YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSAhdGhpcy5hbGxDaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cblxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZURlbEl0ZW0oaXRlbURhdGEpIHtcbiAgICAgICAgdGhpcy5kZWxldGVHb29kcyhpdGVtRGF0YSk7XG4gICAgICB9LFxuICAgICAgc2VsZWN0VGFwKGUpIHtcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdmFyIGlzY2hlY2tlZCA9IHRoaXMubGlzdFtpbmRleF0uaXNjaGVja2VkO1xuICAgICAgICB0aGlzLmNoZWNrR29vZHMoaWQsIGluZGV4LCBpc2NoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlLi4uLlwiKTtcbiAgICAgICAgdGhpcy5jaGVja0FsbEdvb2RzKCk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2FydExpc3RNZXRob2QoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydExpc3QoKTtcbiAgICAgIH0sXG4gICAgICBqaWFuQnRuVGFwKGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3BlcmF0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdmFyIG51bSA9IHRoaXMubGlzdFtpbmRleF0ubnVtO1xuICAgICAgICAvLyDlpoLmnpzlj6rmnIkx5Lu25LqG77yM5bCx5LiN5YWB6K645YaN5YeP5LqGXG4gICAgICAgIGlmIChudW0gPiAxKSB7XG4gICAgICAgICAgbnVtLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkdWNlR29vZE51bShpZCwgbnVtLCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgamlhQnRuVGFwKGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3BlcmF0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgdmFyIG51bSA9IHRoaXMubGlzdFtpbmRleF0ubnVtO1xuICAgICAgICAvLyDoh6rlop5cbiAgICAgICAgbnVtKys7XG4gICAgICAgIHRoaXMuYWRkR29vZE51bShpZCwgbnVtLCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgdG9QYXlPcmRlcigpIHtcbiAgICAgICAgbGV0IHB1clR5cGUgPSAxLFxuICAgICAgICAgIHByZVB1clR5cGUgPSAxO1xuICAgICAgICBsZXQgYk9uZVR5cGUgPSB0cnVlO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmxpc3RbaV0uaXNjaGVja2VkKSB7XG4gICAgICAgICAgICBwdXJUeXBlID0gdGhpcy5saXN0W2ldLnR5cGU7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgIGlmIChwdXJUeXBlICE9IHByZVB1clR5cGUpIHtcbiAgICAgICAgICAgICAgICBiT25lVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVQdXJUeXBlID0gcHVyVHlwZTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYk9uZVR5cGUpIHtcbiAgICAgICAgICB0aXAuYWxlcnQoXCLlhYjmiorooaXotKfnmoTllYblk4Hnu5PnrpchXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvY29tZmlyZV9vcmRlcj9wdXJjaGFzZXR5cGU9XCIgKyBwdXJUeXBlXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ29JbmRleCgpIHtcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgIHVybDogXCIvcGFnZXMvaG9tZVwiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHt9XG4gIH1cbiJdfQ==