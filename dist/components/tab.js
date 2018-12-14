"use strict";

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

var Filter = function (_wepy$component) {
  _inherits(Filter, _wepy$component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentTab: {
        default: 0
      },
      tabList: {
        type: Object
      }
    }, _this.methods = {
      /**
       * 点击tab切换
       */
      swichNav: function swichNav(e) {
        var that = this;
        if (this.data.currentTab == e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
          that.$apply();
        }
        this.$emit("currentTab", that.currentTab);
      },

      /**
       * 头部红点标识
       * @param  {[type]} dotList [description]
       * @return {[type]}         [description]
       */
      changeList: function changeList(dotList) {
        this.tabList = dotList;
      }
    }, _this.watch = {
      currentTab: function currentTab(newValue, oldValue) {
        console.log("currentTab value: " + oldValue + " -> " + newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: "onLoad",
    value: function onLoad() {
      var that = this;
    }
  }]);

  return Filter;
}(_wepy2.default.component);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJGaWx0ZXIiLCJwcm9wcyIsImN1cnJlbnRUYWIiLCJkZWZhdWx0IiwidGFiTGlzdCIsInR5cGUiLCJPYmplY3QiLCJtZXRob2RzIiwic3dpY2hOYXYiLCJlIiwidGhhdCIsImRhdGEiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY3VycmVudCIsIiRhcHBseSIsIiRlbWl0IiwiY2hhbmdlTGlzdCIsImRvdExpc3QiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsaUJBQVM7QUFEQyxPQUROO0FBSU5DLGVBQVM7QUFDUEMsY0FBTUM7QUFEQztBQUpILEssUUFTUkMsTyxHQUFVO0FBQ1I7OztBQUdBQyxjQUpRLG9CQUlDQyxDQUpELEVBSUk7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJLEtBQUtDLElBQUwsQ0FBVVQsVUFBVixJQUF3Qk8sRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUE3QyxFQUFzRDtBQUNwRCxpQkFBTyxLQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGVBQUtSLFVBQUwsR0FBa0JPLEVBQUVHLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBbkM7QUFDQUosZUFBS0ssTUFBTDtBQUNEO0FBQ0QsYUFBS0MsS0FBTCxDQUFXLFlBQVgsRUFBeUJOLEtBQUtSLFVBQTlCO0FBQ0QsT0FiTzs7QUFjUjs7Ozs7QUFLQWUsZ0JBbkJRLHNCQW1CR0MsT0FuQkgsRUFtQlk7QUFDbEIsYUFBS2QsT0FBTCxHQUFlYyxPQUFmO0FBQ0Q7QUFyQk8sSyxRQTZCVkMsSyxHQUFRO0FBQ05qQixnQkFETSxzQkFDS2tCLFFBREwsRUFDZUMsUUFEZixFQUN5QjtBQUM3QkMsZ0JBQVFDLEdBQVIsd0JBQWlDRixRQUFqQyxZQUFnREQsUUFBaEQ7QUFDRDtBQUhLLEs7Ozs7OzZCQUpDO0FBQ1AsVUFBSVYsT0FBTyxJQUFYO0FBRUQ7Ozs7RUF0Q2lDYyxlQUFLQyxTOztrQkFBcEJ6QixNIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBjdXJyZW50VGFiOiB7XG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICB0YWJMaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKlxuICAgICAqIOeCueWHu3RhYuWIh+aNolxuICAgICAqL1xuICAgIHN3aWNoTmF2KGUpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudFRhYiA9PSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUYWJcIiwgdGhhdC5jdXJyZW50VGFiKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5aS06YOo57qi54K55qCH6K+GXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBkb3RMaXN0IFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNoYW5nZUxpc3QoZG90TGlzdCkge1xuICAgICAgdGhpcy50YWJMaXN0ID0gZG90TGlzdDtcbiAgICB9XG4gIH1cblxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgfVxuICB3YXRjaCA9IHtcbiAgICBjdXJyZW50VGFiKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coYGN1cnJlbnRUYWIgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YClcbiAgICB9XG4gIH1cbn1cblxuIl19