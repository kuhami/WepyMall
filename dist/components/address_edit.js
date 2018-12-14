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

var AddressEdit = function (_wepy$component) {
  _inherits(AddressEdit, _wepy$component);

  function AddressEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressEdit.__proto__ || Object.getPrototypeOf(AddressEdit)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      isDefult: false,
      isCheck: false,
      editInfo: {
        default: {},
        type: Object
      },
      id: '',
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
        this.isCheck = !this.isCheck;
        this.isDefult = !this.isDefult;
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
        this.editAddress(e.detail.value);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      refresh: function refresh(val) {
        console.log(val);
        if (val == undefined) return;
        console.log("val.....", val);
        this.editInfo = val;
        console.log(this.editInfo);
        this.id = this.editInfo.id;
        if (this.editInfo.isDef == 1) {
          this.isDefult = true;
        }
        console.log("==========ee=========");
        console.log(this.isDefult);
        this.province = { code: this.editInfo.provinceCode, name: this.editInfo.provinceName };
        this.city = { code: this.editInfo.areaCode, name: this.editInfo.areaName };
        this.area = { code: this.editInfo.cityCode, name: this.editInfo.cityName };

        this.$apply();
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

  _createClass(AddressEdit, [{
    key: 'editAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
        var that, userSpecialInfo, isDefult, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("保存");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                isDefult = 0;

                if (this.isDefult) {
                  isDefult = 1;
                }
                openId = userSpecialInfo.openid;

                console.log("address:");
                console.log(this.id);
                _context.next = 10;
                return _api2.default.saveAddress({
                  query: {
                    openId: openId,
                    id: this.id,
                    address: address,
                    isDef: isDefult,
                    province: that.provinceCode,
                    city: that.cityCode,
                    area: that.areaCode
                  }
                });

              case 10:
                json = _context.sent;

                if (json.data.code == 0) {
                  //0 列表 1新增 2编辑 (显示列表)
                  this.$emit('currentPage', 0);
                  this.$emit('refreshAddList', 'hehe');
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function editAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return editAddress;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log("========editInfo==========");

      this.province = { code: '120000', name: '天津市' };
      this.city = { code: '120100', name: '天津市' };
      this.area = { code: '120101', name: '和平区' };
      this.$invoke('areaPicker', 'setAddressPickerValue', this.province, this.city, this.area);
    }
  }]);

  return AddressEdit;
}(_wepy2.default.component);

exports.default = AddressEdit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NfZWRpdC5qcyJdLCJuYW1lcyI6WyJBZGRyZXNzRWRpdCIsImRhdGEiLCJpc0RlZnVsdCIsImlzQ2hlY2siLCJlZGl0SW5mbyIsImRlZmF1bHQiLCJ0eXBlIiwiT2JqZWN0IiwiaWQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwicHJvdmluY2VDb2RlIiwiY2l0eUNvZGUiLCJhcmVhQ29kZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFyZWFQaWNrZXIiLCJBcmVhUGlja2VyIiwibWV0aG9kcyIsImNoYW5nZUNoZWNrQm94U3RhdGUiLCJmb3JtU3VibWl0IiwiZSIsInJlY2VpdmVyTmFtZSIsImRldGFpbCIsInZhbHVlIiwibW9iaWxlIiwiYWRkcmVzc0RldGFpbCIsInRpcCIsImFsZXJ0IiwiZWRpdEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaCIsInZhbCIsInVuZGVmaW5lZCIsImlzRGVmIiwiY29kZSIsIm5hbWUiLCJwcm92aW5jZU5hbWUiLCJhcmVhTmFtZSIsImNpdHlOYW1lIiwiJGFwcGx5Iiwib3BlbkFkZHJlc3NQaWNrZXIiLCIkaW52b2tlIiwiYXJlYVBpY2tlckFycmF5IiwiYWRkcmVzcyIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJzYXZlQWRkcmVzcyIsInF1ZXJ5IiwianNvbiIsIiRlbWl0IiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFFbkJDLEksR0FBTztBQUNMQyxnQkFBVSxLQURMO0FBRUxDLGVBQVMsS0FGSjtBQUdMQyxnQkFBVTtBQUNSQyxp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QUFDTDlCLGdDQUFJK0IsS0FBSixDQUFVRixLQUFLMUQsSUFBTCxDQUFVNkQsR0FBcEI7QUFDRDtBQUNEYixxQkFBS2MsV0FBTCxHQUFtQixLQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQThETztBQUNQOUIsY0FBUUMsR0FBUixDQUFZLDRCQUFaOztBQUVBLFdBQUt6QixRQUFMLEdBQWdCLEVBQUU4QixNQUFNLFFBQVIsRUFBa0JDLE1BQU0sS0FBeEIsRUFBaEI7QUFDQSxXQUFLOUIsSUFBTCxHQUFZLEVBQUU2QixNQUFNLFFBQVIsRUFBa0JDLE1BQU0sS0FBeEIsRUFBWjtBQUNBLFdBQUs3QixJQUFMLEdBQVksRUFBRTRCLE1BQU0sUUFBUixFQUFrQkMsTUFBTSxLQUF4QixFQUFaO0FBQ0EsV0FBS00sT0FBTCxDQUFhLFlBQWIsRUFBMkIsdUJBQTNCLEVBQW9ELEtBQUtyQyxRQUF6RCxFQUFtRSxLQUFLQyxJQUF4RSxFQUE4RSxLQUFLQyxJQUFuRjtBQUdEOzs7O0VBN0hzQ3dDLGVBQUthLFM7O2tCQUF6QmhFLFciLCJmaWxlIjoiYWRkcmVzc19lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBhcGkgZnJvbSBcIkAvYXBpL2FwaVwiXG5pbXBvcnQge1xuICBVU0VSX1NQRUNJQ0FMX0lORk9cbn0gZnJvbSAnQC91dGlscy9jb25zdGFudCc7XG5pbXBvcnQgQXJlYVBpY2tlciBmcm9tIFwiLi9jb21tb24vd2VweS1hcmVhLXBpY2tlclwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzRWRpdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICBkYXRhID0ge1xuICAgIGlzRGVmdWx0OiBmYWxzZSxcbiAgICBpc0NoZWNrOiBmYWxzZSxcbiAgICBlZGl0SW5mbzoge1xuICAgICAgZGVmYXVsdDoge30sXG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9LFxuICAgIGlkOiAnJyxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY2l0eTogJycsXG4gICAgYXJlYTogJycsXG4gICAgcHJvdmluY2VDb2RlOiAnJyxcbiAgICBjaXR5Q29kZTogJycsXG4gICAgYXJlYUNvZGU6ICcnXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYXJlYVBpY2tlclwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJhcmVhUGlja2VyXCI6e1widi1vbjphcmVhQXJyYXlcIjpcImFyZWFQaWNrZXJBcnJheVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGFyZWFQaWNrZXI6IEFyZWFQaWNrZXJcbiAgfVxuICBhc3luYyBlZGl0QWRkcmVzcyhhZGRyZXNzKSB7XG4gICAgY29uc29sZS5sb2coXCLkv53lrZhcIik7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IGlzRGVmdWx0ID0gMDtcbiAgICBpZiAodGhpcy5pc0RlZnVsdCkge1xuICAgICAgaXNEZWZ1bHQgPSAxO1xuICAgIH1cbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zb2xlLmxvZyhcImFkZHJlc3M6XCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuc2F2ZUFkZHJlc3Moe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICBpc0RlZjogaXNEZWZ1bHQsXG4gICAgICAgIHByb3ZpbmNlOnRoYXQucHJvdmluY2VDb2RlLFxuICAgICAgICBjaXR5OnRoYXQuY2l0eUNvZGUsXG4gICAgICAgIGFyZWE6dGhhdC5hcmVhQ29kZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICAvLzAg5YiX6KGoIDHmlrDlop4gMue8lui+kSAo5pi+56S65YiX6KGoKVxuICAgICAgdGhpcy4kZW1pdCgnY3VycmVudFBhZ2UnLCAwKTtcbiAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2hBZGRMaXN0JywgJ2hlaGUnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hhbmdlQ2hlY2tCb3hTdGF0ZSgpIHtcbiAgICAgIHRoaXMuaXNDaGVjayA9ICF0aGlzLmlzQ2hlY2s7XG4gICAgICB0aGlzLmlzRGVmdWx0ID0gIXRoaXMuaXNEZWZ1bHQ7XG4gICAgfSxcbiAgICBmb3JtU3VibWl0KGUpIHtcblxuICAgICAgbGV0IHJlY2VpdmVyTmFtZSA9IGUuZGV0YWlsLnZhbHVlLnJlY2VpdmVyTmFtZTtcbiAgICAgIGxldCBtb2JpbGUgPSBlLmRldGFpbC52YWx1ZS5tb2JpbGU7XG4gICAgICBsZXQgYWRkcmVzc0RldGFpbCA9IGUuZGV0YWlsLnZhbHVlLmFkZHJlc3NEZXRhaWw7XG5cbiAgICAgIGlmIChyZWNlaXZlck5hbWUgPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLovpPlhaXmlLbku7bkurrlp5PlkI1cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2JpbGUgPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLovpPlhaXogZTns7vnlLXor51cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgfVxuICAgICAgaWYgKGFkZHJlc3NEZXRhaWwgPT0gXCJcIikge1xuICAgICAgICB0aXAuYWxlcnQoXCLovpPlhaXor6bnu4blnLDlnYBcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdEFkZHJlc3MoZS5kZXRhaWwudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIHJlZnJlc2godmFsKSB7XG4gICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgaWYgKHZhbCA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIGNvbnNvbGUubG9nKFwidmFsLi4uLi5cIiwgdmFsKTtcbiAgICAgIHRoaXMuZWRpdEluZm8gPSB2YWw7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVkaXRJbmZvKTtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRJbmZvLmlkO1xuICAgICAgaWYodGhpcy5lZGl0SW5mby5pc0RlZj09MSl7XG4gICAgICAgIHRoaXMuaXNEZWZ1bHQ9dHJ1ZVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09ZWU9PT09PT09PT1cIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlzRGVmdWx0KTtcbiAgICAgIHRoaXMucHJvdmluY2UgPSB7IGNvZGU6IHRoaXMuZWRpdEluZm8ucHJvdmluY2VDb2RlLCBuYW1lOiB0aGlzLmVkaXRJbmZvLnByb3ZpbmNlTmFtZSB9O1xuICAgICAgdGhpcy5jaXR5ID0geyBjb2RlOiB0aGlzLmVkaXRJbmZvLmFyZWFDb2RlLCBuYW1lOnRoaXMuZWRpdEluZm8uYXJlYU5hbWUgfTtcbiAgICAgIHRoaXMuYXJlYSA9IHsgY29kZTogdGhpcy5lZGl0SW5mby5jaXR5Q29kZSwgbmFtZTogdGhpcy5lZGl0SW5mby5jaXR5TmFtZSB9O1xuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgb3BlbkFkZHJlc3NQaWNrZXIoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ2FyZWFQaWNrZXInLCAnb3BlbkFkZHJlc3NQaWNrZXInKTtcbiAgICB9LFxuICAgIGFyZWFQaWNrZXJBcnJheShwcm92aW5jZSwgY2l0eSwgYXJlYSkge1xuICAgICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlO1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XG5cbiAgICAgIHRoaXMucHJvdmluY2VDb2RlID0gcHJvdmluY2UuY29kZTtcbiAgICAgIHRoaXMuY2l0eUNvZGUgPSBjaXR5LmNvZGU7XG4gICAgICB0aGlzLmFyZWFDb2RlID0gYXJlYS5jb2RlO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PWVkaXRJbmZvPT09PT09PT09PVwiKTtcblxuICAgIHRoaXMucHJvdmluY2UgPSB7IGNvZGU6ICcxMjAwMDAnLCBuYW1lOiAn5aSp5rSl5biCJyB9O1xuICAgIHRoaXMuY2l0eSA9IHsgY29kZTogJzEyMDEwMCcsIG5hbWU6ICflpKnmtKXluIInIH07XG4gICAgdGhpcy5hcmVhID0geyBjb2RlOiAnMTIwMTAxJywgbmFtZTogJ+WSjOW5s+WMuicgfTtcbiAgICB0aGlzLiRpbnZva2UoJ2FyZWFQaWNrZXInLCAnc2V0QWRkcmVzc1BpY2tlclZhbHVlJywgdGhpcy5wcm92aW5jZSwgdGhpcy5jaXR5LCB0aGlzLmFyZWEpO1xuXG5cbiAgfVxufVxuXG4iXX0=