'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _timer = require('./../components/common/timer.js');

var _timer2 = _interopRequireDefault(_timer);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exchangeGoods = function (_wepy$page) {
  _inherits(exchangeGoods, _wepy$page);

  function exchangeGoods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, exchangeGoods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = exchangeGoods.__proto__ || Object.getPrototypeOf(exchangeGoods)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单物流'
    }, _this.data = {
      list: [],
      orderNo: "",
      orderExpress: {},
      expresses: {}
    }, _this.components = {
      timer: _timer2.default
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(exchangeGoods, [{
    key: 'getOrderExpressInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("order88No");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context.next = 5;
                return _api2.default.orderExpressInfo({
                  query: {
                    orderNo: this.orderNo
                  }
                });

              case 5:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.list = json.data.list;
                  that.orderExpress = json.data.orderExpress;
                  that.expresses = json.data.expresses;
                  console.log("========list返回数据========");
                  console.log(that.list);
                } else {
                  _tip2.default.error(json.data.msg);
                }

                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOrderExpressInfo() {
        return _ref2.apply(this, arguments);
      }

      return getOrderExpressInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.orderNo = options.orderNo;
      console.log(this.orderNo);
      this.getOrderExpressInfo();
    }
  }]);

  return exchangeGoods;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(exchangeGoods , 'pages/logistics'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lzdGljcy5qcyJdLCJuYW1lcyI6WyJleGNoYW5nZUdvb2RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0Iiwib3JkZXJObyIsIm9yZGVyRXhwcmVzcyIsImV4cHJlc3NlcyIsImNvbXBvbmVudHMiLCJ0aW1lciIsIlRpbWVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJhcGkiLCJvcmRlckV4cHJlc3NJbmZvIiwicXVlcnkiLCJqc29uIiwiY29kZSIsInRpcCIsImVycm9yIiwibXNnIiwiJGFwcGx5Iiwib3B0aW9ucyIsImdldE9yZGVyRXhwcmVzc0luZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFLLEVBREE7QUFFTEMsZUFBUSxFQUZIO0FBR0xDLG9CQUFhLEVBSFI7QUFJTEMsaUJBQVU7QUFKTCxLLFFBNEJQQyxVLEdBQWE7QUFDWEMsYUFBT0M7QUFESSxLLFFBU2JDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7QUFyQ1BDLHdCQUFRQyxHQUFSLENBQVksV0FBWjtBQUNJQyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0JDLGVBQUtDLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFOzt1QkFDOUNDLGNBQUlDLGdCQUFKLENBQXFCO0FBQ3RDQyx5QkFBTztBQUNMbEIsNkJBQVMsS0FBS0E7QUFEVDtBQUQrQixpQkFBckIsQzs7O0FBQWJtQixvQjs7QUFLTixvQkFBSUEsS0FBS3JCLElBQUwsQ0FBVXNCLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkJULHVCQUFLWixJQUFMLEdBQVVvQixLQUFLckIsSUFBTCxDQUFVQyxJQUFwQjtBQUNBWSx1QkFBS1YsWUFBTCxHQUFrQmtCLEtBQUtyQixJQUFMLENBQVVHLFlBQTVCO0FBQ0FVLHVCQUFLVCxTQUFMLEdBQWVpQixLQUFLckIsSUFBTCxDQUFVSSxTQUF6QjtBQUNBTywwQkFBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0FELDBCQUFRQyxHQUFSLENBQVlDLEtBQUtaLElBQWpCO0FBQ0QsaUJBTkQsTUFNTztBQUNMc0IsZ0NBQUlDLEtBQUosQ0FBVUgsS0FBS3JCLElBQUwsQ0FBVXlCLEdBQXBCO0FBQ0Q7O0FBRURaLHFCQUFLYSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBT0tDLE8sRUFBUztBQUNkLFdBQUt6QixPQUFMLEdBQWF5QixRQUFRekIsT0FBckI7QUFDQVMsY0FBUUMsR0FBUixDQUFZLEtBQUtWLE9BQWpCO0FBQ0EsV0FBSzBCLG1CQUFMO0FBQ0Q7Ozs7RUF4Q3dDYixlQUFLYyxJOztrQkFBM0JoQyxhIiwiZmlsZSI6ImxvZ2lzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCc7XG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBUaW1lciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vdGltZXJcIlxuaW1wb3J0IGFwaSBmcm9tICdAL2FwaS9hcGknXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhjaGFuZ2VHb29kcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V54mp5rWBJyxcbiAgfVxuICBkYXRhID0ge1xuICAgIGxpc3Q6W10sXG4gICAgb3JkZXJObzpcIlwiLFxuICAgIG9yZGVyRXhwcmVzczp7fSxcbiAgICBleHByZXNzZXM6e31cbiAgfVxuICBhc3luYyBnZXRPcmRlckV4cHJlc3NJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKFwib3JkZXI4OE5vXCIpXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5vcmRlckV4cHJlc3NJbmZvKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIG9yZGVyTm86IHRoaXMub3JkZXJOb1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGF0Lmxpc3Q9anNvbi5kYXRhLmxpc3Q7XG4gICAgICB0aGF0Lm9yZGVyRXhwcmVzcz1qc29uLmRhdGEub3JkZXJFeHByZXNzO1xuICAgICAgdGhhdC5leHByZXNzZXM9anNvbi5kYXRhLmV4cHJlc3NlcztcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT1saXN06L+U5Zue5pWw5o2uPT09PT09PT1cIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGF0Lmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG5cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG5cbiAgY29tcG9uZW50cyA9IHtcbiAgICB0aW1lcjogVGltZXJcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy5vcmRlck5vPW9wdGlvbnMub3JkZXJObztcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVyTm8pO1xuICAgIHRoaXMuZ2V0T3JkZXJFeHByZXNzSW5mbygpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcblxuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cblxufVxuXG4iXX0=