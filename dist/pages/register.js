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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_wepy$page) {
  _inherits(Register, _wepy$page);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '绑定手机'
    }, _this.components = {}, _this.data = {
      phone: "",
      sendMsgDisabled: false,
      time: 60
    }, _this.computed = {}, _this.methods = {
      phoneInput: function phoneInput(e) {
        this.phone = e.detail.value;
      },
      sendCode: function sendCode(e) {
        if (this.phone == "") {
          _tip2.default.alert("输入手机号码");
          return false;
        }
        this.sendVerifyCode();
        var that = this;
        that.sendMsgDisabled = true;
        var interval = setInterval(function () {
          if (that.time-- <= 0) {
            that.time = 10;
            that.sendMsgDisabled = false;
            clearInterval(interval);
            that.$apply();
          }
          that.$apply();
        }, 1000);
      },
      formSubmit: function formSubmit(e) {
        var that = this;
        var phone = e.detail.value.phone;
        var code = e.detail.value.code;
        if (phone == "") {
          _tip2.default.alert("输入手机号码");
          return false;
        }
        if (code == "") {
          _tip2.default.alert("输入验证码");
          return false;
        }
        that.registerUser(phone, code);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: 'sendVerifyCode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.sendRandCode({
                  query: {
                    phone: this.phone
                  }
                });

              case 2:
                json = _context.sent;

                if (json.data.code == 0) {
                  _tip2.default.success("发送成功!");
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendVerifyCode() {
        return _ref2.apply(this, arguments);
      }

      return sendVerifyCode;
    }()
  }, {
    key: 'registerUser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(phone, code) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.registerUser({
                  query: {
                    openId: openId,
                    mobile: phone,
                    verificationCode: code
                  }
                });

              case 5:
                json = _context2.sent;


                if (json.data.code == 0) {
                  // that.list = json.data.list;
                  _wepy2.default.navigateBack();
                  console.log("绑定成功.....");

                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function registerUser(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return registerUser;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
    }
  }]);

  return Register;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicGhvbmUiLCJzZW5kTXNnRGlzYWJsZWQiLCJ0aW1lIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwicGhvbmVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbmRDb2RlIiwidGlwIiwiYWxlcnQiLCJzZW5kVmVyaWZ5Q29kZSIsInRoYXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIiRhcHBseSIsImZvcm1TdWJtaXQiLCJjb2RlIiwicmVnaXN0ZXJVc2VyIiwiY29uc29sZSIsImxvZyIsImFwaSIsInNlbmRSYW5kQ29kZSIsInF1ZXJ5IiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsIm1zZyIsInVzZXJTcGVjaWFsSW5mbyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsIlVTRVJfU1BFQ0lDQUxfSU5GTyIsIm9wZW5JZCIsIm9wZW5pZCIsIm1vYmlsZSIsInZlcmlmaWNhdGlvbkNvZGUiLCJuYXZpZ2F0ZUJhY2siLCJzaG93TG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFLcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxhQUFRLEVBREg7QUFFTEMsdUJBQWlCLEtBRlo7QUFHTEMsWUFBTTtBQUhELEssUUFrRFBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS04sS0FBTCxHQUFhTSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FITztBQUlSQyxjQUpRLG9CQUlDSCxDQUpELEVBSUk7QUFDVixZQUFJLEtBQUtOLEtBQUwsSUFBYyxFQUFsQixFQUFzQjtBQUNwQlUsd0JBQUlDLEtBQUosQ0FBVSxRQUFWO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsYUFBS0MsY0FBTDtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLWixlQUFMLEdBQXVCLElBQXZCO0FBQ0EsWUFBSWEsV0FBV0MsWUFBWSxZQUFNO0FBQy9CLGNBQUtGLEtBQUtYLElBQUwsRUFBRCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QlcsaUJBQUtYLElBQUwsR0FBWSxFQUFaO0FBQ0FXLGlCQUFLWixlQUFMLEdBQXVCLEtBQXZCO0FBQ0FlLDBCQUFjRixRQUFkO0FBQ0FELGlCQUFLSSxNQUFMO0FBQ0Q7QUFDREosZUFBS0ksTUFBTDtBQUNELFNBUmMsRUFRWixJQVJZLENBQWY7QUFTRCxPQXJCTztBQXNCUkMsZ0JBdEJRLHNCQXNCR1osQ0F0QkgsRUFzQk07QUFDWixZQUFJTyxPQUFPLElBQVg7QUFDQSxZQUFJYixRQUFRTSxFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZVIsS0FBM0I7QUFDQSxZQUFJbUIsT0FBT2IsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVXLElBQTFCO0FBQ0EsWUFBSW5CLFNBQVMsRUFBYixFQUFpQjtBQUNmVSx3QkFBSUMsS0FBSixDQUFVLFFBQVY7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxZQUFJUSxRQUFRLEVBQVosRUFBZ0I7QUFDZFQsd0JBQUlDLEtBQUosQ0FBVSxPQUFWO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0RFLGFBQUtPLFlBQUwsQ0FBa0JwQixLQUFsQixFQUF3Qm1CLElBQXhCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NoQixFQUFFQyxNQUFGLENBQVNDLEtBQS9DO0FBQ0Q7QUFwQ08sSzs7Ozs7Ozs7Ozs7Ozt1QkE5Q1dlLGNBQUlDLFlBQUosQ0FBaUI7QUFDbENDLHlCQUFPO0FBQ0x6QiwyQkFBTyxLQUFLQTtBQURQO0FBRDJCLGlCQUFqQixDOzs7QUFBYjBCLG9COztBQUtOLG9CQUFJQSxLQUFLM0IsSUFBTCxDQUFVb0IsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QlQsZ0NBQUlpQixPQUFKLENBQVksT0FBWjtBQUNBZCx1QkFBS0ksTUFBTDtBQUNELGlCQUhELE1BR087QUFDTFAsZ0NBQUlrQixLQUFKLENBQVVGLEtBQUszQixJQUFMLENBQVU4QixHQUFwQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUdnQjdCLEssRUFBTW1CLEk7Ozs7OztBQUNmTixvQixHQUFPLEk7QUFDUGlCLCtCLEdBQWtCQyxlQUFLQyxjQUFMLENBQW9CQyw0QkFBcEIsS0FBMkMsRTtBQUM3REMsc0IsR0FBU0osZ0JBQWdCSyxNOzt1QkFDVlosY0FBSUgsWUFBSixDQUFpQjtBQUNsQ0sseUJBQU87QUFDTFMsNEJBQVFBLE1BREg7QUFFTEUsNEJBQU9wQyxLQUZGO0FBR0xxQyxzQ0FBaUJsQjtBQUhaO0FBRDJCLGlCQUFqQixDOzs7QUFBYk8sb0I7OztBQVFOLG9CQUFJQSxLQUFLM0IsSUFBTCxDQUFVb0IsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QjtBQUNBWSxpQ0FBS08sWUFBTDtBQUNBakIsMEJBQVFDLEdBQVIsQ0FBWSxXQUFaOztBQUVBVCx1QkFBS0ksTUFBTDtBQUNELGlCQU5ELE1BTU87QUFDTFAsZ0NBQUlrQixLQUFKLENBQVVGLEtBQUszQixJQUFMLENBQVU4QixHQUFwQjtBQUNEO0FBQ0RoQixxQkFBSzBCLFdBQUwsR0FBbUIsS0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFJRztBQUNQLFVBQUkxQixPQUFPLElBQVg7QUFHRDs7OztFQXZEbUNrQixlQUFLUyxJOztrQkFBdEI3QyxRIiwiZmlsZSI6InJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQge1xuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7keWumuaJi+acuicsXG4gIH1cbiAgY29tcG9uZW50cyA9IHt9XG5cbiAgZGF0YSA9IHtcbiAgICBwaG9uZSA6IFwiXCIsXG4gICAgc2VuZE1zZ0Rpc2FibGVkOiBmYWxzZSxcbiAgICB0aW1lOiA2MFxuICB9XG5cbiAgYXN5bmMgc2VuZFZlcmlmeUNvZGUoKSB7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5zZW5kUmFuZENvZGUoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGhvbmU6IHRoaXMucGhvbmVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xuICAgICAgdGlwLnN1Y2Nlc3MoXCLlj5HpgIHmiJDlip8hXCIpO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXJVc2VyKHBob25lLGNvZGUpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5yZWdpc3RlclVzZXIoe1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICAgIG1vYmlsZTpwaG9uZSxcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGU6Y29kZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgICAgICAvLyB0aGF0Lmxpc3QgPSBqc29uLmRhdGEubGlzdDtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwi57uR5a6a5oiQ5YqfLi4uLi5cIik7XG5cbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgICB9XG4gICAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cblxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cblxuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwaG9uZUlucHV0KGUpIHtcbiAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHNlbmRDb2RlKGUpIHtcbiAgICAgIGlmICh0aGlzLnBob25lID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl5omL5py65Y+356CBXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbmRWZXJpZnlDb2RlKCk7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0LnNlbmRNc2dEaXNhYmxlZCA9IHRydWU7XG4gICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICgodGhhdC50aW1lLS0pIDw9IDApIHtcbiAgICAgICAgICB0aGF0LnRpbWUgPSAxMDtcbiAgICAgICAgICB0aGF0LnNlbmRNc2dEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQgcGhvbmUgPSBlLmRldGFpbC52YWx1ZS5waG9uZTtcbiAgICAgIGxldCBjb2RlID0gZS5kZXRhaWwudmFsdWUuY29kZTtcbiAgICAgIGlmIChwaG9uZSA9PSBcIlwiKSB7XG4gICAgICAgIHRpcC5hbGVydChcIui+k+WFpeaJi+acuuWPt+eggVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGUgPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLovpPlhaXpqozor4HnoIFcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQucmVnaXN0ZXJVc2VyKHBob25lLGNvZGUpO1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuIl19