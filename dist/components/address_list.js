'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressList = function (_wepy$component) {
  _inherits(AddressList, _wepy$component);

  function AddressList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressList.__proto__ || Object.getPrototypeOf(AddressList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      addressList: {
        default: [{
          style: 0
        }, {
          style: 0
        }],
        type: Object
      }
    }, _this.$repeat = { "addressList": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "addressList", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "addressList", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "addressList", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.data = {
      receiverInfo: {},
      type: ""
    }, _this.methods = {
      add: function add() {
        //0 列表 1新增 2编辑
        this.$emit('currentPage', 1);
      },
      edit: function edit(e) {
        var id = e.currentTarget.dataset.id;
        //0 列表 1新增 2编辑
        this.$emit('currentPage', 2, id);
      },

      //左滑删除
      handleDelItem: function handleDelItem(itemData) {
        this.delUserAddress(itemData.id);
        console.log("左滑删除");
        console.log(itemData.id);
      },
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.addressList = val;
        this.$apply();
      },
      setOrgType: function setOrgType(type) {
        this.type = type;
      },
      tapSelAddress: function tapSelAddress(e) {
        if (this.type != "order") {
          return;
        }
        var id = e.currentTarget.dataset.id;
        console.log("id==" + id);
        _wepy2.default.setStorageSync(_constant.ADDRESS_ID, id);
        _wepy2.default.redirectTo({
          url: "/pages/comfire_order?from=selAdd"
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressList, [{
    key: 'delUserAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context.next = 4;
                return _api2.default.delUserAddress({
                  query: {
                    id: id,
                    type: 2
                  }
                });

              case 4:
                json = _context.sent;


                if (json.data.code == 0) {
                  console.log("删除成功");
                  this.$emit('currentPage', 0);
                  this.$emit('refreshAddList', 'hehe');
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function delUserAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return delUserAddress;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AddressList;
}(_wepy2.default.component);

exports.default = AddressList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NfbGlzdC5qcyJdLCJuYW1lcyI6WyJBZGRyZXNzTGlzdCIsInByb3BzIiwiYWRkcmVzc0xpc3QiLCJkZWZhdWx0Iiwic3R5bGUiLCJ0eXBlIiwiT2JqZWN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3dpcGVEZWxldGUiLCJTd2lwZURlbGV0ZSIsImRhdGEiLCJyZWNlaXZlckluZm8iLCJtZXRob2RzIiwiYWRkIiwiJGVtaXQiLCJlZGl0IiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJoYW5kbGVEZWxJdGVtIiwiaXRlbURhdGEiLCJkZWxVc2VyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoTGlzdCIsInZhbCIsInVuZGVmaW5lZCIsIiRhcHBseSIsInNldE9yZ1R5cGUiLCJ0YXBTZWxBZGRyZXNzIiwid2VweSIsInNldFN0b3JhZ2VTeW5jIiwiQUREUkVTU19JRCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJ0aGF0IiwidXNlclNwZWNpYWxJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJhcGkiLCJxdWVyeSIsImpzb24iLCJjb2RlIiwidGlwIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYTtBQUNYQyxpQkFBUyxDQUFDO0FBQ1JDLGlCQUFPO0FBREMsU0FBRCxFQUVOO0FBQ0RBLGlCQUFPO0FBRE4sU0FGTSxDQURFO0FBTVhDLGNBQU1DO0FBTks7QUFEUCxLLFFBVVRDLE8sR0FBVSxFQUFDLGVBQWMsRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxXQUE3QixFQUFmLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFB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bkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE0Q08sQ0FFUjs7OztFQXRGc0NoQixlQUFLaUIsUzs7a0JBQXpCbkQsVyIsImZpbGUiOiJhZGRyZXNzX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgU3dpcGVEZWxldGUgZnJvbSAnLi9jb21tb24vd2VweS1zd2lwZS1kZWxldGUnXG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuaW1wb3J0IGFwaSBmcm9tIFwiQC9hcGkvYXBpXCI7XG5pbXBvcnQge1xuICBVU0VSX1NQRUNJQ0FMX0lORk8sXG4gIEFERFJFU1NfSURcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgYWRkcmVzc0xpc3Q6IHtcbiAgICAgIGRlZmF1bHQ6IFt7XG4gICAgICAgIHN0eWxlOiAwXG4gICAgICB9LCB7XG4gICAgICAgIHN0eWxlOiAwXG4gICAgICB9XSxcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7XCJhZGRyZXNzTGlzdFwiOntcImNvbVwiOlwic3dpcGVEZWxldGVcIixcInByb3BzXCI6XCJzd2lwZURhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJzd2lwZURlbGV0ZVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYWRkcmVzc0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpzd2lwZURhdGEub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImFkZHJlc3NMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhZGRyZXNzTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJzd2lwZURlbGV0ZVwiOntcInYtb246ZGVsSXRlbVwiOlwiaGFuZGxlRGVsSXRlbVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHN3aXBlRGVsZXRlOiBTd2lwZURlbGV0ZVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByZWNlaXZlckluZm86e30sXG4gICAgdHlwZTogXCJcIlxuICB9XG5cbiAgYXN5bmMgZGVsVXNlckFkZHJlc3MoaWQpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmRlbFVzZXJBZGRyZXNzKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdHlwZToyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCLliKDpmaTmiJDlip9cIik7XG4gICAgICB0aGlzLiRlbWl0KCdjdXJyZW50UGFnZScsIDApO1xuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaEFkZExpc3QnLCAnaGVoZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkKCkge1xuICAgICAgLy8wIOWIl+ihqCAx5paw5aKeIDLnvJbovpFcbiAgICAgIHRoaXMuJGVtaXQoJ2N1cnJlbnRQYWdlJywgMSk7XG4gICAgfSxcbiAgICBlZGl0KGUpIHtcbiAgICAgIHZhciBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgLy8wIOWIl+ihqCAx5paw5aKeIDLnvJbovpFcbiAgICAgIHRoaXMuJGVtaXQoJ2N1cnJlbnRQYWdlJywgMixpZCk7XG4gICAgfSxcbiAgICAvL+W3pua7keWIoOmZpFxuICAgIGhhbmRsZURlbEl0ZW0oaXRlbURhdGEpIHtcbiAgICAgIHRoaXMuZGVsVXNlckFkZHJlc3MoaXRlbURhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coXCLlt6bmu5HliKDpmaRcIilcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1EYXRhLmlkKVxuXG4gICAgfSxcblxuICAgIHJlZnJlc2hMaXN0KHZhbCl7XG4gICAgICBpZiAodmFsPT11bmRlZmluZWQpIHJldHVybjtcbiAgICAgIGNvbnNvbGUubG9nKFwidmFsLi4uLi5cIix2YWwpO1xuICAgICAgdGhpcy5hZGRyZXNzTGlzdCA9IHZhbDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcblxuICAgIHNldE9yZ1R5cGUgKHR5cGUpIHtcbiAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgIH0sXG5cbiAgICB0YXBTZWxBZGRyZXNzKGUpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUhPVwib3JkZXJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGNvbnNvbGUubG9nKFwiaWQ9PVwiK2lkKTtcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoQUREUkVTU19JRCxpZCk7XG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL2NvbWZpcmVfb3JkZXI/ZnJvbT1zZWxBZGRcIlxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgfVxufVxuXG4iXX0=