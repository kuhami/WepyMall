"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _address_list = require('./../components/address_list.js');

var _address_list2 = _interopRequireDefault(_address_list);

var _address_add = require('./../components/address_add.js');

var _address_add2 = _interopRequireDefault(_address_add);

var _address_edit = require('./../components/address_edit.js');

var _address_edit2 = _interopRequireDefault(_address_edit);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = function (_wepy$page) {
  _inherits(Address, _wepy$page);

  function Address() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Address.__proto__ || Object.getPrototypeOf(Address)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '地址管理'
    }, _this.data = {
      addressList: [],
      receiverInfo: {},

      //显示当前组件 0 列表 1新增 2编辑
      currentPage: 0,
      type: "" //哪个页面跳转过来的
    }, _this.$repeat = {}, _this.$props = { "addressList": { "xmlns:v-bind": "", "v-bind:list.sync": "addressList", "xmlns:v-on": "" }, "addressAdd": { "xmlns:v-on": "" }, "addressEdit": { "xmlns:v-on": "" } }, _this.$events = { "addressList": { "v-on:currentPage": "getCurrentPage" }, "addressAdd": { "v-on:currentPage": "getCurrentPage" }, "addressEdit": { "v-on:currentPage": "getCurrentPage" } }, _this.components = {
      addressList: _address_list2.default,
      addressAdd: _address_add2.default,
      addressEdit: _address_edit2.default
    }, _this.computed = {}, _this.methods = {
      getCurrentPage: function getCurrentPage(cur, id) {
        console.log(cur, id);
        this.currentPage = cur;
        if (cur != 1 && cur != 0) {
          this.receiverInf(id);
        }
      }
    }, _this.events = {
      refreshAddList: function refreshAddList(msg) {
        this.getUserAddress();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Address, [{
    key: "getUserAddress",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(phone, code) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.getUserAddress({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;

                console.log(json);
                if (json.data.code == 0) {
                  this.addressList = json.data.list;
                  this.$invoke("addressList", "refreshList", this.addressList);
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserAddress(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserAddress;
    }()
  }, {
    key: "receiverInf",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context2.next = 4;
                return _api2.default.receiverInfoById({
                  query: {
                    id: id
                  }
                });

              case 4:
                json = _context2.sent;

                if (json.data.code == 0) {
                  this.receiverInfo = json.data.receiverInfo;
                  this.$invoke("addressEdit", "refresh", this.receiverInfo);
                  console.log("=================================");
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function receiverInf(_x3) {
        return _ref3.apply(this, arguments);
      }

      return receiverInf;
    }()
  }, {
    key: "onLoad",
    value: function onLoad(option) {
      this.currentPage = 0;
      this.getUserAddress();
      this.type = option.type == undefined ? "" : option.type;
      this.$invoke("addressList", "setOrgType", this.type);
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var that = this;
      this.getUserAddress();
    }
  }, {
    key: "onUnload",
    value: function onUnload() {
      // if (this.currentPage !== 0) {
      //   wx.navigateTo({
      //     url: "/pages/address"
      //   })
      // }
    }
  }]);

  return Address;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Address , 'pages/address'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkcmVzc0xpc3QiLCJyZWNlaXZlckluZm8iLCJjdXJyZW50UGFnZSIsInR5cGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJBZGRyZXNzTGlzdCIsImFkZHJlc3NBZGQiLCJBZGRyZXNzQWRkIiwiYWRkcmVzc0VkaXQiLCJBZGRyZXNzRWRpdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdldEN1cnJlbnRQYWdlIiwiY3VyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZXJJbmYiLCJldmVudHMiLCJyZWZyZXNoQWRkTGlzdCIsIm1zZyIsImdldFVzZXJBZGRyZXNzIiwicGhvbmUiLCJjb2RlIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsImFwaSIsInF1ZXJ5IiwianNvbiIsImxpc3QiLCIkaW52b2tlIiwidGlwIiwiZXJyb3IiLCJzaG93TG9hZGluZyIsInJlY2VpdmVySW5mb0J5SWQiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxvQkFBYSxFQUZSOztBQUlMO0FBQ0FDLG1CQUFhLENBTFI7QUFNTEMsWUFBTSxFQU5ELENBTUk7QUFOSixLLFFBOENSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIs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RDs7OzZCQUVPO0FBQ04sVUFBSXdCLE9BQU8sSUFBWDtBQUNBLFdBQUtILGNBQUw7QUFDRDs7OytCQWFVO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBeEZrQ0ssZUFBS2dCLEk7O2tCQUFyQmpELE8iLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgQWRkcmVzc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRkcmVzc19saXN0XCI7XG5pbXBvcnQgQWRkcmVzc0FkZCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZGRyZXNzX2FkZFwiO1xuaW1wb3J0IEFkZHJlc3NFZGl0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkZHJlc3NfZWRpdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCc7XG5pbXBvcnQge1xuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnLDlnYDnrqHnkIYnLFxuICB9XG4gIGRhdGEgPSB7XG4gICAgYWRkcmVzc0xpc3Q6IFtdLFxuICAgIHJlY2VpdmVySW5mbzp7fSxcblxuICAgIC8v5pi+56S65b2T5YmN57uE5Lu2IDAg5YiX6KGoIDHmlrDlop4gMue8lui+kVxuICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIHR5cGU6IFwiXCIgLy/lk6rkuKrpobXpnaLot7Povazov4fmnaXnmoRcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJBZGRyZXNzKHBob25lLGNvZGUpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFVzZXJBZGRyZXNzKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coanNvbilcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhpcy5hZGRyZXNzTGlzdD1qc29uLmRhdGEubGlzdDtcbiAgICAgIHRoaXMuJGludm9rZShcImFkZHJlc3NMaXN0XCIsXCJyZWZyZXNoTGlzdFwiLCB0aGlzLmFkZHJlc3NMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHJlY2VpdmVySW5mKGlkKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5yZWNlaXZlckluZm9CeUlkKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLnJlY2VpdmVySW5mbz1qc29uLmRhdGEucmVjZWl2ZXJJbmZvO1xuICAgICAgdGhpcy4kaW52b2tlKFwiYWRkcmVzc0VkaXRcIixcInJlZnJlc2hcIiwgdGhpcy5yZWNlaXZlckluZm8pO1xuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhZGRyZXNzTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJhZGRyZXNzTGlzdFwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiYWRkcmVzc0FkZFwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImFkZHJlc3NFZGl0XCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImFkZHJlc3NMaXN0XCI6e1widi1vbjpjdXJyZW50UGFnZVwiOlwiZ2V0Q3VycmVudFBhZ2VcIn0sXCJhZGRyZXNzQWRkXCI6e1widi1vbjpjdXJyZW50UGFnZVwiOlwiZ2V0Q3VycmVudFBhZ2VcIn0sXCJhZGRyZXNzRWRpdFwiOntcInYtb246Y3VycmVudFBhZ2VcIjpcImdldEN1cnJlbnRQYWdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgYWRkcmVzc0xpc3Q6IEFkZHJlc3NMaXN0LFxuICAgIGFkZHJlc3NBZGQ6IEFkZHJlc3NBZGQsXG4gICAgYWRkcmVzc0VkaXQ6IEFkZHJlc3NFZGl0XG4gIH1cblxuICBvbkxvYWQob3B0aW9uKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgdGhpcy5nZXRVc2VyQWRkcmVzcygpO1xuICAgIHRoaXMudHlwZSA9IChvcHRpb24udHlwZT09dW5kZWZpbmVkP1wiXCI6b3B0aW9uLnR5cGUpO1xuICAgIHRoaXMuJGludm9rZShcImFkZHJlc3NMaXN0XCIsXCJzZXRPcmdUeXBlXCIsIHRoaXMudHlwZSk7XG4gIH1cblxuICBvblNob3coKXtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5nZXRVc2VyQWRkcmVzcygpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRDdXJyZW50UGFnZShjdXIsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1ciwgaWQpXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VyO1xuICAgICAgaWYgKGN1ciE9MSYmY3VyIT0wKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZXJJbmYoaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblVubG9hZCgpIHtcbiAgICAvLyBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gMCkge1xuICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogXCIvcGFnZXMvYWRkcmVzc1wiXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBldmVudHMgPSB7XG4gICAgICByZWZyZXNoQWRkTGlzdChtc2cpe1xuICAgICAgICAgIHRoaXMuZ2V0VXNlckFkZHJlc3MoKTtcbiAgICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==