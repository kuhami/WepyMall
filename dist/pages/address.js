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


                if (json.data.code == 0) {
                  this.addressList = json.data.list;
                  this.$invoke("addressList", "refreshList", this.addressList);
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkcmVzc0xpc3QiLCJyZWNlaXZlckluZm8iLCJjdXJyZW50UGFnZSIsInR5cGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJBZGRyZXNzTGlzdCIsImFkZHJlc3NBZGQiLCJBZGRyZXNzQWRkIiwiYWRkcmVzc0VkaXQiLCJBZGRyZXNzRWRpdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImdldEN1cnJlbnRQYWdlIiwiY3VyIiwiaWQiLCJyZWNlaXZlckluZiIsImV2ZW50cyIsInJlZnJlc2hBZGRMaXN0IiwibXNnIiwiZ2V0VXNlckFkZHJlc3MiLCJwaG9uZSIsImNvZGUiLCJ0aGF0IiwidXNlclNwZWNpYWxJbmZvIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYXBpIiwicXVlcnkiLCJqc29uIiwibGlzdCIsIiRpbnZva2UiLCJ0aXAiLCJlcnJvciIsInNob3dMb2FkaW5nIiwicmVjZWl2ZXJJbmZvQnlJZCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb24iLCJ1bmRlZmluZWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxvQkFBYSxFQUZSOztBQUlMO0FBQ0FDLG1CQUFhLENBTFI7QUFNTEMsWUFBTSxFQU5ELENBTUk7QUFOSixLLFFBOENSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIs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QTtBQUNBO0FBQ0E7QUFDRDs7OztFQXZGa0NLLGVBQUtrQixJOztrQkFBckJqRCxPIiwiZmlsZSI6ImFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IEFkZHJlc3NMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkZHJlc3NfbGlzdFwiO1xuaW1wb3J0IEFkZHJlc3NBZGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRkcmVzc19hZGRcIjtcbmltcG9ydCBBZGRyZXNzRWRpdCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZGRyZXNzX2VkaXRcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9hcGlcIjtcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnO1xuaW1wb3J0IHtcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyw5Z2A566h55CGJyxcbiAgfVxuICBkYXRhID0ge1xuICAgIGFkZHJlc3NMaXN0OiBbXSxcbiAgICByZWNlaXZlckluZm86e30sXG5cbiAgICAvL+aYvuekuuW9k+WJjee7hOS7tiAwIOWIl+ihqCAx5paw5aKeIDLnvJbovpFcbiAgICBjdXJyZW50UGFnZTogMCxcbiAgICB0eXBlOiBcIlwiIC8v5ZOq5Liq6aG16Z2i6Lez6L2s6L+H5p2l55qEXG4gIH1cblxuICBhc3luYyBnZXRVc2VyQWRkcmVzcyhwaG9uZSxjb2RlKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRVc2VyQWRkcmVzcyh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMuYWRkcmVzc0xpc3Q9anNvbi5kYXRhLmxpc3Q7XG4gICAgICB0aGlzLiRpbnZva2UoXCJhZGRyZXNzTGlzdFwiLFwicmVmcmVzaExpc3RcIiwgdGhpcy5hZGRyZXNzTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyByZWNlaXZlckluZihpZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucmVjZWl2ZXJJbmZvQnlJZCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGhpcy5yZWNlaXZlckluZm89anNvbi5kYXRhLnJlY2VpdmVySW5mbztcbiAgICAgIHRoaXMuJGludm9rZShcImFkZHJlc3NFZGl0XCIsXCJyZWZyZXNoXCIsIHRoaXMucmVjZWl2ZXJJbmZvKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgIH1cbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYWRkcmVzc0xpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiYWRkcmVzc0xpc3RcIixcInhtbG5zOnYtb25cIjpcIlwifSxcImFkZHJlc3NBZGRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJhZGRyZXNzRWRpdFwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJhZGRyZXNzTGlzdFwiOntcInYtb246Y3VycmVudFBhZ2VcIjpcImdldEN1cnJlbnRQYWdlXCJ9LFwiYWRkcmVzc0FkZFwiOntcInYtb246Y3VycmVudFBhZ2VcIjpcImdldEN1cnJlbnRQYWdlXCJ9LFwiYWRkcmVzc0VkaXRcIjp7XCJ2LW9uOmN1cnJlbnRQYWdlXCI6XCJnZXRDdXJyZW50UGFnZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGFkZHJlc3NMaXN0OiBBZGRyZXNzTGlzdCxcbiAgICBhZGRyZXNzQWRkOiBBZGRyZXNzQWRkLFxuICAgIGFkZHJlc3NFZGl0OiBBZGRyZXNzRWRpdFxuICB9XG5cbiAgb25Mb2FkKG9wdGlvbikge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgIHRoaXMuZ2V0VXNlckFkZHJlc3MoKTtcbiAgICB0aGlzLnR5cGUgPSAob3B0aW9uLnR5cGU9PXVuZGVmaW5lZD9cIlwiOm9wdGlvbi50eXBlKTtcbiAgICB0aGlzLiRpbnZva2UoXCJhZGRyZXNzTGlzdFwiLFwic2V0T3JnVHlwZVwiLCB0aGlzLnR5cGUpO1xuICB9XG5cbiAgb25TaG93KCl7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuZ2V0VXNlckFkZHJlc3MoKTtcbiAgfVxuICBjb21wdXRlZCA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZ2V0Q3VycmVudFBhZ2UoY3VyLGlkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VyO1xuICAgICAgaWYgKGN1ciE9MSYmY3VyIT0wKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZXJJbmYoaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblVubG9hZCgpIHtcbiAgICAvLyBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gMCkge1xuICAgIC8vICAgd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogXCIvcGFnZXMvYWRkcmVzc1wiXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBldmVudHMgPSB7XG4gICAgICByZWZyZXNoQWRkTGlzdChtc2cpe1xuICAgICAgICAgIHRoaXMuZ2V0VXNlckFkZHJlc3MoKTtcbiAgICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==