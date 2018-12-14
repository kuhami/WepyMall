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

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

var _wepyAreaPicker = require('./common/wepy-area-picker.js');

var _wepyAreaPicker2 = _interopRequireDefault(_wepyAreaPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressAdd = function (_wepy$component) {
  _inherits(AddressAdd, _wepy$component);

  function AddressAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressAdd.__proto__ || Object.getPrototypeOf(AddressAdd)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      isDefult: false,
      province: '',
      city: '',
      area: '',
      provinceCode: '',
      cityCode: '',
      areaCode: ''
    }, _this.$repeat = {}, _this.$props = { "areaPicker": { "xmlns:v-on": "" } }, _this.$events = { "areaPicker": { "v-on:areaArray": "areaPickerArray" } }, _this.components = {
      areaPicker: _wepyAreaPicker2.default
    }, _this.methods = {
      changeCheckBoxState: function changeCheckBoxState() {
        this.isDefult = !this.isDefult;
      },
      up: function up() {
        this.$emit('upup', 'hehe'); //主动触发upup方法，'hehe'为向父组件传递的数据
      },
      formSubmit: function formSubmit(e) {

        var receiverName = e.detail.value.receiverName;
        var mobile = e.detail.value.mobile;
        var addressDetail = e.detail.value.addressDetail;

        if (receiverName == "") {
          _tip2.default.alert("输入收件人姓名");
          return false;
        }
        if (mobile == "") {
          _tip2.default.alert("输入联系电话");
          return false;
        }
        if (addressDetail == "") {
          _tip2.default.alert("输入详细地址");
          return false;
        }
        this.addAddress(e.detail.value);
      },
      openAddressPicker: function openAddressPicker() {
        this.$invoke('areaPicker', 'openAddressPicker');
      },
      areaPickerArray: function areaPickerArray(province, city, area) {
        this.province = province;
        this.city = city;
        this.area = area;
        this.provinceCode = province.code;
        this.cityCode = city.code;
        this.areaCode = area.code;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressAdd, [{
    key: 'addAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
        var that, userSpecialInfo, isDefult, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                isDefult = 0;

                if (this.isDefult) {
                  isDefult = 1;
                }
                openId = userSpecialInfo.openid;
                _context.next = 7;
                return _api2.default.saveAddress({
                  query: {
                    openId: openId,
                    address: address,
                    isDef: isDefult,
                    province: that.provinceCode,
                    city: that.cityCode,
                    area: that.areaCode
                  }
                });

              case 7:
                json = _context.sent;

                if (json.data.code == 0) {
                  //0 列表 1新增 2编辑 (显示列表)
                  this.$emit('currentPage', 0);
                  this.$emit('refreshAddList', 'hehe');
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return addAddress;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AddressAdd;
}(_wepy2.default.component);

exports.default = AddressAdd;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NfYWRkLmpzIl0sIm5hbWVzIjpbIkFkZHJlc3NBZGQiLCJkYXRhIiwiaXNEZWZ1bHQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwicHJvdmluY2VDb2RlIiwiY2l0eUNvZGUiLCJhcmVhQ29kZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFyZWFQaWNrZXIiLCJBcmVhUGlja2VyIiwibWV0aG9kcyIsImNoYW5nZUNoZWNrQm94U3RhdGUiLCJ1cCIsIiRlbWl0IiwiZm9ybVN1Ym1pdCIsImUiLCJyZWNlaXZlck5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm1vYmlsZSIsImFkZHJlc3NEZXRhaWwiLCJ0aXAiLCJhbGVydCIsImFkZEFkZHJlc3MiLCJvcGVuQWRkcmVzc1BpY2tlciIsIiRpbnZva2UiLCJhcmVhUGlja2VyQXJyYXkiLCJjb2RlIiwiJGFwcGx5IiwiYWRkcmVzcyIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJzYXZlQWRkcmVzcyIsInF1ZXJ5IiwiaXNEZWYiLCJqc29uIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxLQURMO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxvQkFBYyxFQUxUO0FBTUxDLGdCQUFVLEVBTkw7QUFPTEMsZ0JBQVU7QUFQTCxLLFFBVVJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxjQUFhLEVBQWQsRUFBZCxFLFFBQ1RDLE8sR0FB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b3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJztcbmltcG9ydCBhcGkgZnJvbSBcIkAvYXBpL2FwaVwiO1xuaW1wb3J0IHtcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IEFyZWFQaWNrZXIgZnJvbSBcIi4vY29tbW9uL3dlcHktYXJlYS1waWNrZXJcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzc0FkZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBpc0RlZnVsdDogZmFsc2UsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIGFyZWE6ICcnLFxuICAgIHByb3ZpbmNlQ29kZTogJycsXG4gICAgY2l0eUNvZGU6ICcnLFxuICAgIGFyZWFDb2RlOiAnJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImFyZWFQaWNrZXJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiYXJlYVBpY2tlclwiOntcInYtb246YXJlYUFycmF5XCI6XCJhcmVhUGlja2VyQXJyYXlcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBhcmVhUGlja2VyOiBBcmVhUGlja2VyXG4gIH1cblxuICBhc3luYyBhZGRBZGRyZXNzKGFkZHJlc3MpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgaXNEZWZ1bHQgPSAwO1xuICAgIGlmICh0aGlzLmlzRGVmdWx0KSB7XG4gICAgICBpc0RlZnVsdCA9IDE7XG4gICAgfVxuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuc2F2ZUFkZHJlc3Moe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIGlzRGVmOiBpc0RlZnVsdCxcbiAgICAgICAgcHJvdmluY2U6dGhhdC5wcm92aW5jZUNvZGUsXG4gICAgICAgIGNpdHk6dGhhdC5jaXR5Q29kZSxcbiAgICAgICAgYXJlYTp0aGF0LmFyZWFDb2RlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIC8vMCDliJfooaggMeaWsOWiniAy57yW6L6RICjmmL7npLrliJfooagpXG4gICAgICB0aGlzLiRlbWl0KCdjdXJyZW50UGFnZScsIDApO1xuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaEFkZExpc3QnLCAnaGVoZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlQ2hlY2tCb3hTdGF0ZSgpIHtcbiAgICAgIHRoaXMuaXNEZWZ1bHQgPSAhdGhpcy5pc0RlZnVsdDtcbiAgICB9LFxuICAgIHVwKCkge1xuICAgICAgdGhpcy4kZW1pdCgndXB1cCcsICdoZWhlJyk7IC8v5Li75Yqo6Kem5Y+RdXB1cOaWueazle+8jCdoZWhlJ+S4uuWQkeeItue7hOS7tuS8oOmAkueahOaVsOaNrlxuICAgIH0sXG4gICAgZm9ybVN1Ym1pdChlKSB7XG5cbiAgICAgIGxldCByZWNlaXZlck5hbWUgPSBlLmRldGFpbC52YWx1ZS5yZWNlaXZlck5hbWU7XG4gICAgICBsZXQgbW9iaWxlID0gZS5kZXRhaWwudmFsdWUubW9iaWxlO1xuICAgICAgbGV0IGFkZHJlc3NEZXRhaWwgPSBlLmRldGFpbC52YWx1ZS5hZGRyZXNzRGV0YWlsO1xuXG4gICAgICBpZiAocmVjZWl2ZXJOYW1lID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl5pS25Lu25Lq65aeT5ZCNXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobW9iaWxlID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl6IGU57O755S16K+dXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIH1cbiAgICAgIGlmIChhZGRyZXNzRGV0YWlsID09IFwiXCIpIHtcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl6K+m57uG5Zyw5Z2AXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZEFkZHJlc3MoZS5kZXRhaWwudmFsdWUpO1xuICAgIH0sXG4gICAgb3BlbkFkZHJlc3NQaWNrZXIoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ2FyZWFQaWNrZXInLCAnb3BlbkFkZHJlc3NQaWNrZXInKTtcbiAgICB9LFxuICAgIGFyZWFQaWNrZXJBcnJheShwcm92aW5jZSwgY2l0eSwgYXJlYSkge1xuICAgICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlO1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG4gICAgICB0aGlzLnByb3ZpbmNlQ29kZSA9IHByb3ZpbmNlLmNvZGU7XG4gICAgICB0aGlzLmNpdHlDb2RlID0gY2l0eS5jb2RlO1xuICAgICAgdGhpcy5hcmVhQ29kZSA9IGFyZWEuY29kZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn1cblxuIl19