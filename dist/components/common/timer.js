"use strict";

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

var Timer = function (_wepy$component) {
  _inherits(Timer, _wepy$component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      startTime: {
        default: ""
      },
      endTime: {
        default: ""
      }
    }, _this.data = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      totalDay: 0,
      isShow: false,
      interval: {},
      endTxt: "\n00:00:00"
    }, _this.methods = {
      initTimer: function initTimer(val) {
        var _this2 = this;

        console.log(val);
        var date = new Date();
        this.startTime = val.startTime;
        this.endTime = val.endTime;
        //开始时间(.replace(/(-)/g, '/')解决ios 不兼容问题)
        var startDay = new Date(this.startTime.replace(/(-)/g, '/'));
        //结束时间
        var endDay = new Date(this.endTime.replace(/(-)/g, '/'));

        //总共时间(单位s)
        var totalDay = Math.floor((endDay - startDay) / 1000);

        // 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
        var days = (endDay - date) / 1000 / 3600 / 24;

        //计算是当前时间是否在区间内
        if (startDay < date && date < endDay) {
          this.isShow = true;
        }

        var day = Math.floor(days);
        var hours = (days - day) * 24;
        var hour = Math.floor(hours);
        var minutes = (hours - hour) * 60;
        var minute = Math.floor(minutes);
        var seconds = (minutes - minute) * 60;
        var second = Math.floor(seconds);

        //赋值
        this.day = day;
        //this.hour = day * 24 + hour;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.totalDay = totalDay;

        this.interval = setInterval(function () {
          if (--_this2.second < 0) {
            _this2.minute--;
            _this2.second = 59;
            _this2.$apply();
          }

          if (_this2.minute < 0) {
            _this2.hour--;
            _this2.minute = 59;
            _this2.$apply();
          }
          if (_this2.hour < 0) {
            _this2.minute = 0;
            _this2.second = 0;
            _this2.isShow = false;
            _this2.$apply();
            clearInterval(_this2.interval);
          }
          _this2.$apply();
        }, 1000);

        this.$apply();
      }
    }, _this.computed = {
      strD: function strD() {
        return this.day;
      },
      strH: function strH() {
        return this.hour < 10 ? "0" + this.hour : this.hour;
      },
      strM: function strM() {
        return this.minute < 10 ? "0" + this.minute : this.minute;
      },
      strS: function strS() {
        return this.second < 10 ? "0" + this.second : this.second;
      },
      total: function total() {
        return this.hour * 60 * 60 + this.minute * 60 + this.second;
      },
      rotate1: function rotate1() {
        var a = 360 - 360 / this.totalDay * this.total;
        return a < 180 ? a : 180;
      },
      rotate2: function rotate2() {
        var b = 360 - 360 / this.totalDay * this.total;
        return b > 180 ? b - 180 : 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timer, [{
    key: "onLoad",
    value: function onLoad() {
      this.isShow = false;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.totalDay = 0;
      this.startTime = "";
      this.endTime = "";
      clearInterval(this.interval);
    }
  }, {
    key: "onUnload",
    value: function onUnload() {
      console.log("onUnload....");
      clearInterval(this.interval);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      console.log("onHide....");
      clearInterval(this.interval);
    }
  }]);

  return Timer;
}(_wepy2.default.component);

exports.default = Timer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmpzIl0sIm5hbWVzIjpbIlRpbWVyIiwicHJvcHMiLCJzdGFydFRpbWUiLCJkZWZhdWx0IiwiZW5kVGltZSIsImRhdGEiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwidG90YWxEYXkiLCJpc1Nob3ciLCJpbnRlcnZhbCIsImVuZFR4dCIsIm1ldGhvZHMiLCJpbml0VGltZXIiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF0ZSIsIkRhdGUiLCJzdGFydERheSIsInJlcGxhY2UiLCJlbmREYXkiLCJNYXRoIiwiZmxvb3IiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldEludGVydmFsIiwiJGFwcGx5IiwiY2xlYXJJbnRlcnZhbCIsImNvbXB1dGVkIiwic3RyRCIsInN0ckgiLCJzdHJNIiwic3RyUyIsInRvdGFsIiwicm90YXRlMSIsImEiLCJyb3RhdGUyIiwiYiIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTO0FBREEsT0FETDtBQUlOQyxlQUFTO0FBQ1BELGlCQUFTO0FBREY7QUFKSCxLLFFBUVJFLEksR0FBTztBQUNMQyxXQUFLLENBREE7QUFFTEMsWUFBTSxDQUZEO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxjQUFRLENBSkg7QUFLTEMsZ0JBQVUsQ0FMTDtBQU1MQyxjQUFRLEtBTkg7QUFPTEMsZ0JBQVUsRUFQTDtBQVFMQyxjQUFPO0FBUkYsSyxRQXVCUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLEdBREYsRUFDTztBQUFBOztBQUNiQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsWUFBSUcsT0FBTyxJQUFJQyxJQUFKLEVBQVg7QUFDQSxhQUFLbEIsU0FBTCxHQUFpQmMsSUFBSWQsU0FBckI7QUFDQSxhQUFLRSxPQUFMLEdBQWVZLElB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QUsvQixJQUFMLEdBQVksRUFBWixHQUFpQixFQUFsQixHQUF5QixLQUFLQyxNQUFMLEdBQWMsRUFBdkMsR0FBNkMsS0FBS0MsTUFBekQ7QUFDRCxPQWZRO0FBZ0JUOEIsYUFoQlMscUJBZ0JDO0FBQ1IsWUFBSUMsSUFBSSxNQUFPLE1BQU0sS0FBSzlCLFFBQVosR0FBd0IsS0FBSzRCLEtBQTNDO0FBQ0EsZUFBT0UsSUFBSSxHQUFKLEdBQVVBLENBQVYsR0FBYyxHQUFyQjtBQUNELE9BbkJRO0FBb0JUQyxhQXBCUyxxQkFvQkM7QUFDUixZQUFJQyxJQUFJLE1BQU8sTUFBTSxLQUFLaEMsUUFBWixHQUF3QixLQUFLNEIsS0FBM0M7QUFDQSxlQUFPSSxJQUFJLEdBQUosR0FBVUEsSUFBSSxHQUFkLEdBQW9CLENBQTNCO0FBQ0Q7QUF2QlEsSzs7Ozs7NkJBeEZGO0FBQ1AsV0FBSy9CLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS0wsR0FBTCxHQUFXLENBQVg7QUFDQSxXQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS1IsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFdBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0E0QixvQkFBYyxLQUFLcEIsUUFBbkI7QUFDRDs7OytCQW9FVTtBQUNUSyxjQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBYyxvQkFBYyxLQUFLcEIsUUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1BLLGNBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FjLG9CQUFjLEtBQUtwQixRQUFuQjtBQUNEOzs7O0VBMUdnQytCLGVBQUtDLFM7O2tCQUFuQjVDLEsiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgc3RhcnRUaW1lOiB7XG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICBlbmRUaW1lOiB7XG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgZGF5OiAwLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0b3RhbERheTogMCxcbiAgICBpc1Nob3c6IGZhbHNlLFxuICAgIGludGVydmFsOiB7fSxcbiAgICBlbmRUeHQ6XCJcXG4wMDowMDowMFwiXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcbiAgICB0aGlzLmRheSA9IDA7XG4gICAgdGhpcy5ob3VyID0gMDtcbiAgICB0aGlzLm1pbnV0ZSA9IDA7XG4gICAgdGhpcy5zZWNvbmQgPSAwO1xuICAgIHRoaXMudG90YWxEYXkgPSAwO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gXCJcIjtcbiAgICB0aGlzLmVuZFRpbWUgPSBcIlwiO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGluaXRUaW1lcih2YWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IHZhbC5zdGFydFRpbWU7XG4gICAgICB0aGlzLmVuZFRpbWUgPSB2YWwuZW5kVGltZTtcbiAgICAgIC8v5byA5aeL5pe26Ze0KC5yZXBsYWNlKC8oLSkvZywgJy8nKeino+WGs2lvcyDkuI3lhbzlrrnpl67popgpXG4gICAgICBsZXQgc3RhcnREYXkgPSBuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZS5yZXBsYWNlKC8oLSkvZywgJy8nKSk7XG4gICAgICAvL+e7k+adn+aXtumXtFxuICAgICAgbGV0IGVuZERheSA9IG5ldyBEYXRlKHRoaXMuZW5kVGltZS5yZXBsYWNlKC8oLSkvZywgJy8nKSk7XG5cbiAgICAgIC8v5oC75YWx5pe26Ze0KOWNleS9jXMpXG4gICAgICBsZXQgdG90YWxEYXkgPSBNYXRoLmZsb29yKChlbmREYXkgLSBzdGFydERheSkgLyAxMDAwKTtcblxuXG4gICAgICAvLyDorqHnrpfml7bkvJrlj5HnlJ/pmpDlvI/ovazmjaLvvIzosIPnlKh2YWx1ZU9mKCnmlrnms5XvvIzovazljJbmiJDml7bpl7TmiLPnmoTlvaLlvI9cbiAgICAgIGxldCBkYXlzID0gKGVuZERheSAtIGRhdGUpIC8gMTAwMCAvIDM2MDAgLyAyNDtcblxuXG4gICAgICAvL+iuoeeul+aYr+W9k+WJjeaXtumXtOaYr+WQpuWcqOWMuumXtOWGhVxuICAgICAgaWYgKHN0YXJ0RGF5IDwgZGF0ZSAmJiBkYXRlIDwgZW5kRGF5KSB7XG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGRheSA9IE1hdGguZmxvb3IoZGF5cyk7XG4gICAgICBsZXQgaG91cnMgPSAoZGF5cyAtIGRheSkgKiAyNDtcbiAgICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihob3Vycyk7XG4gICAgICBsZXQgbWludXRlcyA9IChob3VycyAtIGhvdXIpICogNjA7XG4gICAgICBsZXQgbWludXRlID0gTWF0aC5mbG9vcihtaW51dGVzKTtcbiAgICAgIGxldCBzZWNvbmRzID0gKG1pbnV0ZXMgLSBtaW51dGUpICogNjA7XG4gICAgICBsZXQgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcblxuICAgICAgLy/otYvlgLxcbiAgICAgIHRoaXMuZGF5ID0gZGF5O1xuICAgICAgLy90aGlzLmhvdXIgPSBkYXkgKiAyNCArIGhvdXI7XG4gICAgICB0aGlzLmhvdXIgPSBob3VyO1xuICAgICAgdGhpcy5taW51dGUgPSBtaW51dGU7XG4gICAgICB0aGlzLnNlY29uZCA9IHNlY29uZDtcbiAgICAgIHRoaXMudG90YWxEYXkgPSB0b3RhbERheTtcblxuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKCgtLXRoaXMuc2Vjb25kKSA8IDApIHtcbiAgICAgICAgICB0aGlzLm1pbnV0ZS0tO1xuICAgICAgICAgIHRoaXMuc2Vjb25kID0gNTk7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1pbnV0ZSA8IDApIHtcbiAgICAgICAgICB0aGlzLmhvdXItLTtcbiAgICAgICAgICB0aGlzLm1pbnV0ZSA9IDU5O1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaG91ciA8IDApIHtcbiAgICAgICAgICB0aGlzLm1pbnV0ZSA9IDA7XG4gICAgICAgICAgdGhpcy5zZWNvbmQgPSAwO1xuICAgICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBvblVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uVW5sb2FkLi4uLlwiKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25IaWRlLi4uLlwiKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgc3RyRCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRheTtcbiAgICB9LFxuICAgIHN0ckgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3VyIDwgMTAgPyBcIjBcIiArIHRoaXMuaG91ciA6IHRoaXMuaG91cjtcbiAgICB9LFxuICAgIHN0ck0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW51dGUgPCAxMCA/IFwiMFwiICsgdGhpcy5taW51dGUgOiB0aGlzLm1pbnV0ZTtcbiAgICB9LFxuICAgIHN0clMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWNvbmQgPCAxMCA/IFwiMFwiICsgdGhpcy5zZWNvbmQgOiB0aGlzLnNlY29uZDtcbiAgICB9LFxuICAgIHRvdGFsKCkge1xuICAgICAgcmV0dXJuICh0aGlzLmhvdXIgKiA2MCAqIDYwKSArICh0aGlzLm1pbnV0ZSAqIDYwKSArIHRoaXMuc2Vjb25kO1xuICAgIH0sXG4gICAgcm90YXRlMSgpIHtcbiAgICAgIGxldCBhID0gMzYwIC0gKDM2MCAvIHRoaXMudG90YWxEYXkpICogdGhpcy50b3RhbDtcbiAgICAgIHJldHVybiBhIDwgMTgwID8gYSA6IDE4MFxuICAgIH0sXG4gICAgcm90YXRlMigpIHtcbiAgICAgIGxldCBiID0gMzYwIC0gKDM2MCAvIHRoaXMudG90YWxEYXkpICogdGhpcy50b3RhbDtcbiAgICAgIHJldHVybiBiID4gMTgwID8gYiAtIDE4MCA6IDBcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=