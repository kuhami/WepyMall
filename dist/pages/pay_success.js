'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paySuccess = function (_wepy$page) {
  _inherits(paySuccess, _wepy$page);

  function paySuccess() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, paySuccess);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = paySuccess.__proto__ || Object.getPrototypeOf(paySuccess)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '支付成功'
    }, _this.data = {
      orderNo: "",
      totalFee: 0
    }, _this.components = {}, _this.computed = {}, _this.methods = {
      goOrderDetail: function goOrderDetail() {
        _wepy2.default.redirectTo({
          url: "/pages/order"
        });
      },
      goIndex: function goIndex() {
        _wepy2.default.switchTab({
          url: "/pages/home"
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(paySuccess, [{
    key: 'getPayOrderDetail',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return _api2.default.getPayOrderDetail({
                  query: {
                    tradeNo: this.orderNo
                  }
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.totalFee = json.data.order.totalFee;
                } else {
                  _tip2.default.error(json.data.msg);
                }

                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPayOrderDetail() {
        return _ref2.apply(this, arguments);
      }

      return getPayOrderDetail;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      //tip.success('支付成功,接收的参数为' + option.orderNo);
      this.orderNo = option.orderNo;
      this.getPayOrderDetail();
    }
  }]);

  return paySuccess;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(paySuccess , 'pages/pay_success'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheV9zdWNjZXNzLmpzIl0sIm5hbWVzIjpbInBheVN1Y2Nlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm9yZGVyTm8iLCJ0b3RhbEZlZSIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnb09yZGVyRGV0YWlsIiwid2VweSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJnb0luZGV4Iiwic3dpdGNoVGFiIiwiZXZlbnRzIiwidGhhdCIsImFwaSIsImdldFBheU9yZGVyRGV0YWlsIiwicXVlcnkiLCJ0cmFkZU5vIiwianNvbiIsImNvZGUiLCJvcmRlciIsInRpcCIsImVycm9yIiwibXNnIiwiJGFwcGx5Iiwib3B0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVUsRUFETDtBQUVMQyxnQkFBVTtBQUZMLEssUUFJUEMsVSxHQUFhLEUsUUF1QmJDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxtQkFEUSwyQkFDUTtBQUNkQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGFBTlEscUJBTUU7QUFDUkgsdUJBQUtJLFNBQUwsQ0FBZTtBQUNiRixlQUFLO0FBRFEsU0FBZjtBQUdEO0FBVk8sSyxRQWFWRyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7O0FBbkNIQyxvQixHQUFPLEk7O3VCQUNRQyxjQUFJQyxpQkFBSixDQUFzQjtBQUN2Q0MseUJBQU87QUFDTEMsNkJBQVMsS0FBS2hCO0FBRFQ7QUFEZ0MsaUJBQXRCLEM7OztBQUFiaUIsb0I7O0FBS04sb0JBQUlBLEtBQUtsQixJQUFMLENBQVVtQixJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHVCQUFLakIsUUFBTCxHQUFnQmdCLEtBQUtsQixJQUFMLENBQVVvQixLQUFWLENBQWdCbEIsUUFBaEM7QUFDRCxpQkFGRCxNQUVPO0FBQ0xtQixnQ0FBSUMsS0FBSixDQUFVSixLQUFLbEIsSUFBTCxDQUFVdUIsR0FBcEI7QUFDRDs7QUFFRFYscUJBQUtXLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFFS0MsTSxFQUFRO0FBQ2I7QUFDQSxXQUFLeEIsT0FBTCxHQUFld0IsT0FBT3hCLE9BQXRCO0FBQ0EsV0FBS2MsaUJBQUw7QUFDRDs7OztFQTlCcUNSLGVBQUttQixJOztrQkFBeEI3QixVIiwiZmlsZSI6InBheV9zdWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGF5U3VjY2VzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pSv5LuY5oiQ5YqfJyxcbiAgfVxuICBkYXRhID0ge1xuICAgIG9yZGVyTm8gOiBcIlwiLFxuICAgIHRvdGFsRmVlOiAwXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG4gIGFzeW5jIGdldFBheU9yZGVyRGV0YWlsKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFBheU9yZGVyRGV0YWlsKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHRyYWRlTm86IHRoaXMub3JkZXJOb1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLnRvdGFsRmVlID0ganNvbi5kYXRhLm9yZGVyLnRvdGFsRmVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG5cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gIG9uTG9hZChvcHRpb24pIHtcbiAgICAvL3RpcC5zdWNjZXNzKCfmlK/ku5jmiJDlip8s5o6l5pS255qE5Y+C5pWw5Li6JyArIG9wdGlvbi5vcmRlck5vKTtcbiAgICB0aGlzLm9yZGVyTm8gPSBvcHRpb24ub3JkZXJObztcbiAgICB0aGlzLmdldFBheU9yZGVyRGV0YWlsKCk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvT3JkZXJEZXRhaWwoKSB7XG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL29yZGVyXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnb0luZGV4KCkge1xuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL2hvbWVcIlxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuXG59XG5cbiJdfQ==