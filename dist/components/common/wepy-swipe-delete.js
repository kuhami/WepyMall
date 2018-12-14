'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      swipeData: {
        type: Object,
        default: []
      }
    }, _this.data = {
      startX: null,
      moveX: null
    }, _this.methods = {
      ts: function ts(e) {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
          this.moveX = e.touches[0].clientX;
        }
      },
      tm: function tm(e) {
        if (e.touches.length === 1) {
          // 手指起始点位置与移动期间的差值
          var distanceX = this.moveX - e.touches[0].clientX;
          this.moveX = e.touches[0].clientX;

          if (this.swipeData.style - distanceX < -140) {
            this.swipeData.style = -140;
          } else if (this.swipeData.style - distanceX > 0) {
            this.swipeData.style = 0;
          } else {
            this.swipeData.style = this.swipeData.style - distanceX;
          }
          this.setData({
            swipeData: this.props.swipeData
          });
        }
      },
      te: function te(e) {
        if (e.changedTouches.length === 1) {
          if (this.swipeData.style <= -70) {
            this.swipeData.style = -140;
          } else {
            this.swipeData.style = 0;
          }
          this.setData({
            swipeData: this.props.swipeData
          });
        }
      },
      handleRightBtnTap: function handleRightBtnTap(item) {
        item = JSON.parse(JSON.stringify(item));
        delete item.style;
        this.$emit('delItem', item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Counter, [{
    key: 'onLoad',
    value: function onLoad() {
      if (this.swipeData) {
        this.swipeData.style = 0;
      }
    }
  }]);

  return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktc3dpcGUtZGVsZXRlLmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJwcm9wcyIsInN3aXBlRGF0YSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiZGF0YSIsInN0YXJ0WCIsIm1vdmVYIiwibWV0aG9kcyIsInRzIiwiZSIsInRvdWNoZXMiLCJsZW5ndGgiLCJjbGllbnRYIiwidG0iLCJkaXN0YW5jZVgiLCJzdHlsZSIsInNldERhdGEiLCJ0ZSIsImNoYW5nZWRUb3VjaGVzIiwiaGFuZGxlUmlnaHRCdG5UYXAiLCJpdGVtIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiJGVtaXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFNQyxNQURHO0FBRVRDLGlCQUFTO0FBRkE7QUFETCxLLFFBT1JDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsYUFBTztBQUZGLEssUUFXUEMsTyxHQUFVO0FBQ1JDLFFBRFEsY0FDTEMsQ0FESyxFQUNGO0FBQ0osWUFBSUEsRUFBRUMsT0FBRixDQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGVBQUtOLE1BQUwsR0FBY0ksRUFBRUMsT0FBRixDQUFVLENBQVYsRUFBYUUsT0FBM0I7QUFDQSxlQUFLTixLQUFMLEdBQWFHLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLE9BQTFCO0FBQ0Q7QUFDRixPQU5PO0FBT1JDLFFBUFEsY0FPTEosQ0FQSyxFQU9GO0FBQ0osWUFBSUEsRUFBRUMsT0FBRixDQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCO0FBQ0EsY0FBSUcsWUFBWSxLQUFLUixLQUFMLEdBQWFHLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLE9BQTFDO0FBQ0EsZUFBS04sS0FBTCxHQUFhRyxFQUFFQyxPQUFGLENBQVUsQ0FBVixFQUFhRSxPQUExQjs7QUFFQSxjQUFLLEtBQUtaLFNBQUwsQ0FBZWUsS0FBZixHQUF1QkQsU0FBeEIsR0FBcUMsQ0FBQyxHQUExQyxFQUErQztBQUM3QyxpQkFBS2QsU0FBTCxDQUFlZSxLQUFmLEdBQXVCLENBQUMsR0FBeEI7QUFDRCxXQUZELE1BRU8sSUFBSyxLQUFLZixTQUFMLENBQWVlLEtBQWYsR0FBdUJELFNBQXhCLEdBQXFDLENBQXpDLEVBQTRDO0FBQ2pELGlCQUFLZCxTQUFMLENBQWVlLEtBQWYsR0FBdUIsQ0FBdkI7QUFDRCxXQUZNLE1BRUE7QUFDTCxpQkFBS2YsU0FBTCxDQUFlZSxLQUFmLEdBQXVCLEtBQUtmLFNBQUwsQ0FBZWUsS0FBZixHQUF1QkQsU0FBOUM7QUFDRDtBQUNELGVBQUtFLE9BQUwsQ0FBYTtBQUNYaEIsdUJBQVcsS0FBS0QsS0FBTCxDQUFXQztBQURYLFdBQWI7QUFHRDtBQUNGLE9BeEJPO0FBMEJSaUIsUUExQlEsY0EwQkxSLENBMUJLLEVBMEJGO0FBQ0osWUFBSUEsRUFBRVMsY0FBRixDQUFpQlAsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDakMsY0FBSSxLQUFLWCxTQUFMLENBQWVlLEtBQWYsSUFBd0IsQ0FBQyxFQUE3QixFQUFpQztBQUMvQixpQkFBS2YsU0FBTCxDQUFlZSxLQUFmLEdBQXVCLENBQUMsR0FBeEI7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS2YsU0FBTCxDQUFlZSxLQUFmLEdBQXVCLENBQXZCO0FBQ0Q7QUFDRCxlQUFLQyxPQUFMLENBQWE7QUFDWGhCLHVCQUFXLEtBQUtELEtBQUwsQ0FBV0M7QUFEWCxXQUFiO0FBR0Q7QUFDRixPQXJDTztBQXNDUm1CLHVCQXRDUSw2QkFzQ1VDLElBdENWLEVBc0NnQjtBQUN0QkEsZUFBT0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxTQUFMLENBQWVILElBQWYsQ0FBWCxDQUFQO0FBQ0EsZUFBT0EsS0FBS0wsS0FBWjtBQUNBLGFBQUtTLEtBQUwsQ0FBVyxTQUFYLEVBQXNCSixJQUF0QjtBQUNEO0FBMUNPLEs7Ozs7OzZCQU5EO0FBQ1AsVUFBSSxLQUFLcEIsU0FBVCxFQUFvQjtBQUNsQixhQUFLQSxTQUFMLENBQWVlLEtBQWYsR0FBdUIsQ0FBdkI7QUFDRDtBQUNGOzs7O0VBakJrQ1UsZUFBS0MsUzs7a0JBQXJCNUIsTyIsImZpbGUiOiJ3ZXB5LXN3aXBlLWRlbGV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgc3dpcGVEYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgc3RhcnRYOiBudWxsLFxuICAgIG1vdmVYOiBudWxsXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgaWYgKHRoaXMuc3dpcGVEYXRhKSB7XG4gICAgICB0aGlzLnN3aXBlRGF0YS5zdHlsZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0cyhlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIHRoaXMubW92ZVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH0sXG4gICAgdG0oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8g5omL5oyH6LW35aeL54K55L2N572u5LiO56e75Yqo5pyf6Ze055qE5beu5YC8XG4gICAgICAgIHZhciBkaXN0YW5jZVggPSB0aGlzLm1vdmVYIC0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgdGhpcy5tb3ZlWCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG5cbiAgICAgICAgaWYgKCh0aGlzLnN3aXBlRGF0YS5zdHlsZSAtIGRpc3RhbmNlWCkgPCAtMTQwKSB7XG4gICAgICAgICAgdGhpcy5zd2lwZURhdGEuc3R5bGUgPSAtMTQwXG4gICAgICAgIH0gZWxzZSBpZiAoKHRoaXMuc3dpcGVEYXRhLnN0eWxlIC0gZGlzdGFuY2VYKSA+IDApIHtcbiAgICAgICAgICB0aGlzLnN3aXBlRGF0YS5zdHlsZSA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN3aXBlRGF0YS5zdHlsZSA9IHRoaXMuc3dpcGVEYXRhLnN0eWxlIC0gZGlzdGFuY2VYXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzd2lwZURhdGE6IHRoaXMucHJvcHMuc3dpcGVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcblxuICAgIHRlKGUpIHtcbiAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodGhpcy5zd2lwZURhdGEuc3R5bGUgPD0gLTcwKSB7XG4gICAgICAgICAgdGhpcy5zd2lwZURhdGEuc3R5bGUgPSAtMTQwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zd2lwZURhdGEuc3R5bGUgPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzd2lwZURhdGE6IHRoaXMucHJvcHMuc3dpcGVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVSaWdodEJ0blRhcChpdGVtKSB7XG4gICAgICBpdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICAgIGRlbGV0ZSBpdGVtLnN0eWxlXG4gICAgICB0aGlzLiRlbWl0KCdkZWxJdGVtJywgaXRlbSlcbiAgICB9XG4gIH1cbn1cblxuIl19