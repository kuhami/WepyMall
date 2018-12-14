'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _regions = require('./../../utils/regions.js');

var _regions2 = _interopRequireDefault(_regions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaPicker = function (_wepy$component) {
  _inherits(AreaPicker, _wepy$component);

  function AreaPicker() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, AreaPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = AreaPicker.__proto__ || Object.getPrototypeOf(AreaPicker)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      provinces: [], //获取到的所有的省
      cities: [], //选择的该省的所有市
      areas: [], //选择的该市的所有区县
      defaultValue: [0, 0, 0],
      selectedRegion: [0, 0, 0],
      animationData: {},
      show: false
    }, _this2.methods = {
      //取消按钮
      cancelPicker: function cancelPicker() {
        //这里也是动画，然其高度变为0
        this.hidePicker();
      },

      //确认按钮
      onAddressPick: function onAddressPick() {
        //一样是动画，级联选择页消失，效果和取消一样
        this.hidePicker();

        var _selectedRegion = _slicedToArray(this.selectedRegion, 3),
            provinceIndex = _selectedRegion[0],
            cityIndex = _selectedRegion[1],
            areaIndex = _selectedRegion[2];

        var provinces = this.provinces,
            cities = this.cities,
            areas = this.areas;

        this.province = provinces[provinceIndex];
        this.city = cities[cityIndex];
        this.area = areas[areaIndex] || {};
        if (!this.area) {
          this.area.name = "";
          this.code.code = "";
        }
        this.$emit("areaArray", this.province, this.city, this.area);
        this.$apply();
      },

      //滚动选择的时候触发事件
      bindChange: function bindChange(e) {
        //这里是获取picker-view内的picker-view-column 当前选择的是第几项
        var _this = this;
        var val = e.detail.value;
        this.cities = _regions2.default[val[0]].cities;
        this.areas = _regions2.default[val[0]].cities[val[1]].areas;
        //省变化，市区分别选中第一个
        if (this.selectedRegion[0] != val[0]) {
          this.selectedRegion = [val[0], 0, 0];
          //市变化，区选中第一个
        } else if (this.selectedRegion[1] != val[1]) {
          this.selectedRegion = [val[0], val[1], 0];
          //区变化，省市不变
        } else {
          this.selectedRegion = val;
        }
        //

        this.defaultValue = this.selectedRegion;

        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(AreaPicker, [{
    key: 'setAddressPickerValue',
    value: function setAddressPickerValue(province, city, area) {
      this.province = province;
      this.city = city;
      this.area = area;
      this.$apply();
    }
  }, {
    key: 'showPicker',
    value: function showPicker() {
      var fadeAnim = _wepy2.default.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
      this.fadeAnim = fadeAnim;

      var showAnim = _wepy2.default.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
      this.showAnim = showAnim;

      fadeAnim.backgroundColor('#000').opacity(0.5).step();
      showAnim.bottom(0 + 'rpx').step();
      this.show = true;
      this.animationData = {
        fadeAnim: fadeAnim.export(),
        showAnim: showAnim.export()
      };

      this.$apply();
    }
  }, {
    key: 'hidePicker',
    value: function hidePicker() {
      this.fadeAnim.backgroundColor('#fff').opacity(0).step();
      this.showAnim.bottom(-600 + 'rpx').step();

      this.show = false;
      this.animationData = {
        fadeAnim: this.fadeAnim.export(),
        showAnim: this.showAnim.export()
      };

      this.$apply();
    }

    //点击事件，点击弹出选择页

  }, {
    key: 'openAddressPicker',
    value: function openAddressPicker() {
      this.initAddressPicker();
      this.showPicker();
    }
  }, {
    key: 'initAddressPicker',


    //这里是判断省市名称的显示
    value: function initAddressPicker(selected) {
      var that = this;

      var provinces = [];
      var cities = [];
      var areas = [];
      var defaultValue = selected || [0, 0, 0];

      var province = this.province,
          city = this.city,
          area = this.area;

      //遍历所有的省，将省的名字存到provinces这个数组中

      for (var i = 0; i < _regions2.default.length; i++) {
        provinces.push({ name: _regions2.default[i].name, code: _regions2.default[i].code });
      }

      //检查传入的省编码是否有，有的话，选中column第一个游标为province index
      provinces.some(function (item, index) {
        if (province && item.code == province.code) {
          defaultValue[0] = index;
          return true;
        }
      });

      var rCities = _regions2.default[defaultValue[0]].cities;

      if (rCities) {
        //这里判断这个省级里面有没有市（如数据中的香港、澳门等就没有写市）
        //填充cities数组
        for (var _i = 0; _i < rCities.length; _i++) {
          cities.push({ name: rCities[_i].name, code: rCities[_i].code });
        }
        //这里是判断这个选择的省里面，有没有相应的下标为cityCode的市，因为这里的下标是前一次选择后的下标，
        //比如之前选择的一个省有10个市，我刚好滑到了第十个市，现在又重新选择了省，但是这个省最多只有5个市，
        //但是这时候的cityCode为9，而这里的市根本没有那么多，所以会报错
        var hasCity = cities.some(function (item, index) {
          if (city && item.code == city.code) {
            defaultValue[1] = index;
            return true;
          }
        });

        console.log('执行了区级判断');

        var rAreas = rCities[defaultValue[1]].areas;

        if (rAreas) {
          //这里是判断选择的这个市在数据里面有没有区县
          for (var _i2 = 0; _i2 < rAreas.length; _i2++) {
            areas.push({
              name: rAreas[_i2].name,
              code: rAreas[_i2].code
            });
          }
          areas.some(function (item, index) {
            if (area && item.code == area.code) {
              defaultValue[2] = index;
              return true;
            }
          }); //这里是判断选择的这个市里有没有下标为areaCode的区县，道理同上面市的选择
        } else {
          //如果这个市里面没有区县，那么把这个市的名字就赋值给areas这个数组
          areas.push(cities[defaultValue[1]]);
        }
      } else {
        //如果该省级没有市，那么就把省的名字作为市和区的名字
        cities.push(provinces[defaultValue[0]]);
        areas.push(provinces[defaultValue[0]]);
      }

      //选择成功后把相应的数组赋值给相应的变量


      this.provinces = provinces;
      this.cities = cities;
      this.areas = areas;
      this.defaultValue = defaultValue;
      this.selectedRegion = defaultValue;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AreaPicker;
}(_wepy2.default.component);

exports.default = AreaPicker;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktYXJlYS1waWNrZXIuanMiXSwibmFtZXMiOlsiQXJlYVBpY2tlciIsImRhdGEiLCJwcm92aW5jZXMiLCJjaXRpZXMiLCJhcmVhcyIsImRlZmF1bHRWYWx1ZSIsInNlbGVjdGVkUmVnaW9uIiwiYW5pbWF0aW9uRGF0YSIsInNob3ciLCJtZXRob2RzIiwiY2FuY2VsUGlja2VyIiwiaGlkZVBpY2tlciIsIm9uQWRkcmVzc1BpY2siLCJwcm92aW5jZUluZGV4IiwiY2l0eUluZGV4IiwiYXJlYUluZGV4IiwicHJvdmluY2UiLCJjaXR5IiwiYXJlYSIsIm5hbWUiLCJjb2RlIiwiJGVtaXQiLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsIl90aGlzIiwidmFsIiwiZGV0YWlsIiwidmFsdWUiLCJyZWdpb25zIiwiZmFkZUFuaW0iLCJ3ZXB5IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInNob3dBbmltIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsInN0ZXAiLCJib3R0b20iLCJleHBvcnQiLCJpbml0QWRkcmVzc1BpY2tlciIsInNob3dQaWNrZXIiLCJzZWxlY3RlZCIsInRoYXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNvbWUiLCJpdGVtIiwiaW5kZXgiLCJyQ2l0aWVzIiwiaGFzQ2l0eSIsImNvbnNvbGUiLCJsb2ciLCJyQXJlYXMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OztpTUFDbkJDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROLEVBQ1U7QUFDZkMsY0FBUSxFQUZILEVBRU87QUFDWkMsYUFBTyxFQUhGLEVBR007QUFDWEMsb0JBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKVDtBQUtMQyxzQkFBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMWDtBQU1MQyxxQkFB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SW1ELE1BQUosRUFBWTtBQUFFO0FBQ1osZUFBSyxJQUFJVixNQUFJLENBQWIsRUFBZ0JBLE1BQUlVLE9BQU9ULE1BQTNCLEVBQW1DRCxLQUFuQyxFQUF3QztBQUN0Q3pDLGtCQUFNMkMsSUFBTixDQUFXO0FBQ1Q1QixvQkFBTW9DLE9BQU9WLEdBQVAsRUFBVTFCLElBRFA7QUFFVEMsb0JBQU1tQyxPQUFPVixHQUFQLEVBQVV6QjtBQUZQLGFBQVg7QUFJRDtBQUNEaEIsZ0JBQU00QyxJQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzFCLGdCQUFJaEMsUUFBUStCLEtBQUs3QixJQUFMLElBQWFGLEtBQUtFLElBQTlCLEVBQW9DO0FBQ2xDZiwyQkFBYSxDQUFiLElBQWtCNkMsS0FBbEI7QUFDQSxxQkFBTyxJQUFQO0FBQ0Q7QUFDRixXQUxELEVBUFUsQ0FZTjtBQUNMLFNBYkQsTUFhTztBQUNMO0FBQ0E5QyxnQkFBTTJDLElBQU4sQ0FBVzVDLE9BQU9FLGFBQWEsQ0FBYixDQUFQLENBQVg7QUFDRDtBQUNGLE9BckNELE1BcUNPO0FBQ0w7QUFDQUYsZUFBTzRDLElBQVAsQ0FBWTdDLFVBQVVHLGFBQWEsQ0FBYixDQUFWLENBQVo7QUFDQUQsY0FBTTJDLElBQU4sQ0FBVzdDLFVBQVVHLGFBQWEsQ0FBYixDQUFWLENBQVg7QUFDRDs7QUFHRDs7O0FBR0EsV0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFdBQUtDLGNBQUwsR0FBc0JELFlBQXRCO0FBQ0EsV0FBS2lCLE1BQUw7QUFJRDs7OzZCQUVRLENBRVI7Ozs7RUE1TXFDUyxlQUFLeUIsUzs7a0JBQXhCeEQsVTtBQTZNcEIiLCJmaWxlIjoid2VweS1hcmVhLXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCByZWdpb25zIGZyb20gJ0AvdXRpbHMvcmVnaW9ucy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWFQaWNrZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgcHJvdmluY2VzOiBbXSwgLy/ojrflj5bliLDnmoTmiYDmnInnmoTnnIFcbiAgICBjaXRpZXM6IFtdLCAvL+mAieaLqeeahOivpeecgeeahOaJgOacieW4glxuICAgIGFyZWFzOiBbXSwgLy/pgInmi6nnmoTor6XluILnmoTmiYDmnInljLrljr9cbiAgICBkZWZhdWx0VmFsdWU6IFswLCAwLCAwXSxcbiAgICBzZWxlY3RlZFJlZ2lvbjogWzAsIDAsIDBdLFxuICAgIGFuaW1hdGlvbkRhdGE6IHt9LFxuICAgIHNob3c6IGZhbHNlLFxuICB9XG5cbiAgc2V0QWRkcmVzc1BpY2tlclZhbHVlKHByb3ZpbmNlLCBjaXR5LCBhcmVhKSB7XG4gICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgc2hvd1BpY2tlcigpIHtcbiAgICBjb25zdCBmYWRlQW5pbSA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgIH0pO1xuICAgIHRoaXMuZmFkZUFuaW0gPSBmYWRlQW5pbTtcblxuICAgIGNvbnN0IHNob3dBbmltID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93QW5pbSA9IHNob3dBbmltO1xuXG4gICAgZmFkZUFuaW0uYmFja2dyb3VuZENvbG9yKCcjMDAwJykub3BhY2l0eSgwLjUpLnN0ZXAoKTtcbiAgICBzaG93QW5pbS5ib3R0b20oMCArICdycHgnKS5zdGVwKCk7XG4gICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB7XG4gICAgICBmYWRlQW5pbTogZmFkZUFuaW0uZXhwb3J0KCksXG4gICAgICBzaG93QW5pbTogc2hvd0FuaW0uZXhwb3J0KCksXG4gICAgfTtcblxuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBoaWRlUGlja2VyKCkge1xuICAgIHRoaXMuZmFkZUFuaW0uYmFja2dyb3VuZENvbG9yKCcjZmZmJykub3BhY2l0eSgwKS5zdGVwKCk7XG4gICAgdGhpcy5zaG93QW5pbS5ib3R0b20oLTYwMCArICdycHgnKS5zdGVwKCk7XG5cblxuICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IHtcbiAgICAgIGZhZGVBbmltOiB0aGlzLmZhZGVBbmltLmV4cG9ydCgpLFxuICAgICAgc2hvd0FuaW06IHRoaXMuc2hvd0FuaW0uZXhwb3J0KCksXG4gICAgfTtcblxuICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgfVxuXG4gIC8v54K55Ye75LqL5Lu277yM54K55Ye75by55Ye66YCJ5oup6aG1XG4gIG9wZW5BZGRyZXNzUGlja2VyKCkge1xuICAgIHRoaXMuaW5pdEFkZHJlc3NQaWNrZXIoKTtcbiAgICB0aGlzLnNob3dQaWNrZXIoKTtcbiAgfVxuXG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvL+WPlua2iOaMiemSrlxuICAgIGNhbmNlbFBpY2tlcigpIHtcbiAgICAgIC8v6L+Z6YeM5Lmf5piv5Yqo55S777yM54S25YW26auY5bqm5Y+Y5Li6MFxuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfSxcbiAgICAvL+ehruiupOaMiemSrlxuICAgIG9uQWRkcmVzc1BpY2soKSB7XG4gICAgICAvL+S4gOagt+aYr+WKqOeUu++8jOe6p+iBlOmAieaLqemhtea2iOWkse+8jOaViOaenOWSjOWPlua2iOS4gOagt1xuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICBjb25zdCBbcHJvdmluY2VJbmRleCwgY2l0eUluZGV4LCBhcmVhSW5kZXhdID0gdGhpcy5zZWxlY3RlZFJlZ2lvbjtcbiAgICAgIGNvbnN0IHsgcHJvdmluY2VzLCBjaXRpZXMsIGFyZWFzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlc1twcm92aW5jZUluZGV4XTtcbiAgICAgIHRoaXMuY2l0eSA9IGNpdGllc1tjaXR5SW5kZXhdO1xuICAgICAgdGhpcy5hcmVhID0gYXJlYXNbYXJlYUluZGV4XSB8fCB7fTtcbiAgICAgIGlmICghdGhpcy5hcmVhKSB7XG4gICAgICAgIHRoaXMuYXJlYS5uYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb2RlLmNvZGUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdChcImFyZWFBcnJheVwiLCB0aGlzLnByb3ZpbmNlLCB0aGlzLmNpdHksIHRoaXMuYXJlYSlcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvL+a7muWKqOmAieaLqeeahOaXtuWAmeinpuWPkeS6i+S7tlxuICAgIGJpbmRDaGFuZ2UoZSkge1xuICAgICAgLy/ov5nph4zmmK/ojrflj5ZwaWNrZXItdmlld+WGheeahHBpY2tlci12aWV3LWNvbHVtbiDlvZPliY3pgInmi6nnmoTmmK/nrKzlh6DpoblcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5jaXRpZXMgPSByZWdpb25zW3ZhbFswXV0uY2l0aWVzO1xuICAgICAgdGhpcy5hcmVhcyA9IHJlZ2lvbnNbdmFsWzBdXS5jaXRpZXNbdmFsWzFdXS5hcmVhcztcbiAgICAgIC8v55yB5Y+Y5YyW77yM5biC5Yy65YiG5Yir6YCJ5Lit56ys5LiA5LiqXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJlZ2lvblswXSAhPSB2YWxbMF0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbiA9IFt2YWxbMF0sIDAsIDBdO1xuICAgICAgICAvL+W4guWPmOWMlu+8jOWMuumAieS4reesrOS4gOS4qlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUmVnaW9uWzFdICE9IHZhbFsxXSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uID0gW3ZhbFswXSwgdmFsWzFdLCAwXTtcbiAgICAgICAgLy/ljLrlj5jljJbvvIznnIHluILkuI3lj5hcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb24gPSB2YWw7XG4gICAgICB9XG4gICAgICAvL1xuXG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRSZWdpb247XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cblxuXG5cblxuXG4gIC8v6L+Z6YeM5piv5Yik5pat55yB5biC5ZCN56ew55qE5pi+56S6XG4gIGluaXRBZGRyZXNzUGlja2VyKHNlbGVjdGVkKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBsZXQgcHJvdmluY2VzID0gW107XG4gICAgbGV0IGNpdGllcyA9IFtdO1xuICAgIGxldCBhcmVhcyA9IFtdO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBzZWxlY3RlZCB8fCBbMCwgMCwgMF07XG5cbiAgICBjb25zdCB7IHByb3ZpbmNlLCBjaXR5LCBhcmVhIH0gPSB0aGlzO1xuXG4gICAgLy/pgY3ljobmiYDmnInnmoTnnIHvvIzlsIbnnIHnmoTlkI3lrZflrZjliLBwcm92aW5jZXPov5nkuKrmlbDnu4TkuK1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZ2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb3ZpbmNlcy5wdXNoKHsgbmFtZTogcmVnaW9uc1tpXS5uYW1lLCBjb2RlOiByZWdpb25zW2ldLmNvZGUgfSk7XG4gICAgfVxuXG5cbiAgICAvL+ajgOafpeS8oOWFpeeahOecgee8lueggeaYr+WQpuacie+8jOacieeahOivne+8jOmAieS4rWNvbHVtbuesrOS4gOS4qua4uOagh+S4unByb3ZpbmNlIGluZGV4XG4gICAgcHJvdmluY2VzLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAocHJvdmluY2UgJiYgaXRlbS5jb2RlID09IHByb3ZpbmNlLmNvZGUpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlWzBdID0gaW5kZXg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBjb25zdCByQ2l0aWVzID0gcmVnaW9uc1tkZWZhdWx0VmFsdWVbMF1dLmNpdGllcztcblxuICAgIGlmIChyQ2l0aWVzKSB7IC8v6L+Z6YeM5Yik5pat6L+Z5Liq55yB57qn6YeM6Z2i5pyJ5rKh5pyJ5biC77yI5aaC5pWw5o2u5Lit55qE6aaZ5riv44CB5r6z6Zeo562J5bCx5rKh5pyJ5YaZ5biC77yJXG4gICAgICAvL+Whq+WFhWNpdGllc+aVsOe7hFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByQ2l0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNpdGllcy5wdXNoKHsgbmFtZTogckNpdGllc1tpXS5uYW1lLCBjb2RlOiByQ2l0aWVzW2ldLmNvZGUgfSk7XG4gICAgICB9XG4gICAgICAvL+i/memHjOaYr+WIpOaWrei/meS4qumAieaLqeeahOecgemHjOmdou+8jOacieayoeacieebuOW6lOeahOS4i+agh+S4umNpdHlDb2Rl55qE5biC77yM5Zug5Li66L+Z6YeM55qE5LiL5qCH5piv5YmN5LiA5qyh6YCJ5oup5ZCO55qE5LiL5qCH77yMXG4gICAgICAvL+avlOWmguS5i+WJjemAieaLqeeahOS4gOS4quecgeaciTEw5Liq5biC77yM5oiR5Yia5aW95ruR5Yiw5LqG56ys5Y2B5Liq5biC77yM546w5Zyo5Y+I6YeN5paw6YCJ5oup5LqG55yB77yM5L2G5piv6L+Z5Liq55yB5pyA5aSa5Y+q5pyJNeS4quW4gu+8jFxuICAgICAgLy/kvYbmmK/ov5nml7blgJnnmoRjaXR5Q29kZeS4ujnvvIzogIzov5nph4znmoTluILmoLnmnKzmsqHmnInpgqPkuYjlpJrvvIzmiYDku6XkvJrmiqXplJlcbiAgICAgIGNvbnN0IGhhc0NpdHkgPSBjaXRpZXMuc29tZSgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNpdHkgJiYgaXRlbS5jb2RlID09IGNpdHkuY29kZSkge1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZVsxXSA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gICAgICBjb25zb2xlLmxvZygn5omn6KGM5LqG5Yy657qn5Yik5patJyk7XG5cbiAgICAgIGNvbnN0IHJBcmVhcyA9IHJDaXRpZXNbZGVmYXVsdFZhbHVlWzFdXS5hcmVhcztcblxuICAgICAgaWYgKHJBcmVhcykgeyAvL+i/memHjOaYr+WIpOaWremAieaLqeeahOi/meS4quW4guWcqOaVsOaNrumHjOmdouacieayoeacieWMuuWOv1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJBcmVhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZWFzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogckFyZWFzW2ldLm5hbWUsXG4gICAgICAgICAgICBjb2RlOiByQXJlYXNbaV0uY29kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFyZWFzLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGFyZWEgJiYgaXRlbS5jb2RlID09IGFyZWEuY29kZSkge1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlWzJdID0gaW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pOyAvL+i/memHjOaYr+WIpOaWremAieaLqeeahOi/meS4quW4gumHjOacieayoeacieS4i+agh+S4umFyZWFDb2Rl55qE5Yy65Y6/77yM6YGT55CG5ZCM5LiK6Z2i5biC55qE6YCJ5oupXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL+WmguaenOi/meS4quW4gumHjOmdouayoeacieWMuuWOv++8jOmCo+S5iOaKiui/meS4quW4gueahOWQjeWtl+Wwsei1i+WAvOe7mWFyZWFz6L+Z5Liq5pWw57uEXG4gICAgICAgIGFyZWFzLnB1c2goY2l0aWVzW2RlZmF1bHRWYWx1ZVsxXV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL+WmguaenOivpeecgee6p+ayoeacieW4gu+8jOmCo+S5iOWwseaKiuecgeeahOWQjeWtl+S9nOS4uuW4guWSjOWMuueahOWQjeWtl1xuICAgICAgY2l0aWVzLnB1c2gocHJvdmluY2VzW2RlZmF1bHRWYWx1ZVswXV0pO1xuICAgICAgYXJlYXMucHVzaChwcm92aW5jZXNbZGVmYXVsdFZhbHVlWzBdXSk7XG4gICAgfVxuXG5cbiAgICAvL+mAieaLqeaIkOWKn+WQjuaKiuebuOW6lOeahOaVsOe7hOi1i+WAvOe7meebuOW6lOeahOWPmOmHj1xuXG5cbiAgICB0aGlzLnByb3ZpbmNlcyA9IHByb3ZpbmNlcztcbiAgICB0aGlzLmNpdGllcyA9IGNpdGllcztcbiAgICB0aGlzLmFyZWFzID0gYXJlYXM7XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZFJlZ2lvbiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLiRhcHBseSgpO1xuXG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gIH1cbn07XG5cbiJdfQ==