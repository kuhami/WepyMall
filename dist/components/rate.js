'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rate = function (_wepy$component) {
  _inherits(Rate, _wepy$component);

  function Rate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rate.__proto__ || Object.getPrototypeOf(Rate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      readonly: {
        default: false
      },
      key: {
        default: 0
      }
    }, _this.data = {
      stars: [0, 1, 2, 3, 4],
      normalSrc: '../images/normal.png',
      selectedSrc: '../images/selected.png',
      halfSrc: '../images/half.png'
    }, _this.events = {}, _this.methods = {
      //点击右边,半颗星
      selectLeft: function selectLeft(e) {
        var key = e.currentTarget.dataset.key;
        if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
          //只有一颗星的时候,再次点击,变为0颗
          this.key = 0;
        }
        this.key = key;
        this.$emit("change", this.key);
      },
      //点击左边,整颗星
      selectRight: function selectRight(e) {
        var key = e.currentTarget.dataset.key;
        this.key = key;
        this.$emit("change", this.key);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rate, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Rate;
}(_wepy2.default.component);

exports.default = Rate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUuanMiXSwibmFtZXMiOlsiUmF0ZSIsInByb3BzIiwicmVhZG9ubHkiLCJkZWZhdWx0Iiwia2V5IiwiZGF0YSIsInN0YXJzIiwibm9ybWFsU3JjIiwic2VsZWN0ZWRTcmMiLCJoYWxmU3JjIiwiZXZlbnRzIiwibWV0aG9kcyIsInNlbGVjdExlZnQiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsInNlbGVjdFJpZ2h0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxLLEdBQVE7QUFDTkMsZ0JBQVU7QUFDUkMsaUJBQVM7QUFERCxPQURKO0FBSU5DLFdBQUs7QUFDSEQsaUJBQVM7QUFETjtBQUpDLEssUUFRUkUsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQURGO0FBRUxDLGlCQUFXLHNCQUZOO0FBR0xDLG1CQUFhLHdCQUhSO0FBSUxDLGVBQVM7QUFKSixLLFFBT1BDLE0sR0FBUyxFLFFBR1RDLE8sR0FBVTtBQUNSO0FBQ0FDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVk7QUFDdEIsWUFBSVQsTUFBTVMsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYLEdBQWxDO0FBQ0EsWUFBSSxLQUFLQyxJQUFMLENBQVVELEdBQVYsSUFBaUIsR0FBakIsSUFBd0JTLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCWCxHQUF4QixJQUErQixHQUEzRCxFQUFnRTtBQUM5RDtBQUNBLGVBQUtBLEdBQUwsR0FBVyxDQUFYO0FBQ0Q7QUFDRCxhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxhQUFLWSxLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLWixHQUExQjtBQUNELE9BVk87QUFXUjtBQUNBYSxtQkFBYSxxQkFBU0osQ0FBVCxFQUFZO0FBQ3ZCLFlBQUlULE1BQU1TLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCWCxHQUFsQztBQUNBLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtZLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtaLEdBQTFCO0FBQ0Q7QUFoQk8sSzs7Ozs7NkJBbUJELENBRVI7Ozs7RUF4QytCYyxlQUFLQyxTOztrQkFBbEJuQixJIiwiZmlsZSI6InJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0ZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICB9XG4gIGRhdGEgPSB7XG4gICAgc3RhcnM6IFswLCAxLCAyLCAzLCA0XSxcbiAgICBub3JtYWxTcmM6ICcuLi9pbWFnZXMvbm9ybWFsLnBuZycsXG4gICAgc2VsZWN0ZWRTcmM6ICcuLi9pbWFnZXMvc2VsZWN0ZWQucG5nJyxcbiAgICBoYWxmU3JjOiAnLi4vaW1hZ2VzL2hhbGYucG5nJyxcbiAgfVxuXG4gIGV2ZW50cyA9IHtcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLy/ngrnlh7vlj7Povrks5Y2K6aKX5pifXG4gICAgc2VsZWN0TGVmdDogZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGtleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleTtcbiAgICAgIGlmICh0aGlzLmRhdGEua2V5ID09IDAuNSAmJiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXkgPT0gMC41KSB7XG4gICAgICAgIC8v5Y+q5pyJ5LiA6aKX5pif55qE5pe25YCZLOWGjeasoeeCueWHuyzlj5jkuLow6aKXXG4gICAgICAgIHRoaXMua2V5ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgdGhpcy4kZW1pdChcImNoYW5nZVwiLCB0aGlzLmtleSlcbiAgICB9LFxuICAgIC8v54K55Ye75bem6L65LOaVtOmil+aYn1xuICAgIHNlbGVjdFJpZ2h0OiBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIga2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua2V5O1xuICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICB0aGlzLiRlbWl0KFwiY2hhbmdlXCIsIHRoaXMua2V5KVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICB9XG59XG5cbiJdfQ==