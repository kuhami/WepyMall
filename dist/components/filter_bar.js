'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _filterSlider = require('./filterSlider.js');

var _filterSlider2 = _interopRequireDefault(_filterSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filterBar = function (_wepy$component) {
  _inherits(filterBar, _wepy$component);

  function filterBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, filterBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = filterBar.__proto__ || Object.getPrototypeOf(filterBar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      currentType: "",
      arrowType: "",
      flag: false,
      type: "desc"
    }, _this.components = {
      filterSlider: _filterSlider2.default
    }, _this.methods = {
      filterSearch: function filterSearch() {
        this.$invoke('filterSlider', 'swictchOverlay', true);
      },
      orderBy: function orderBy(e) {
        var that = this;
        if (that.data.currentType == e.target.dataset.current) {
          if (e.target.dataset.current !== "price") {
            return false;
          }
        } else {
          that.currentType = e.target.dataset.current;
        }
        that.priceOrderBy(e.target.dataset.current);
        that.$apply();
      }
    }, _this.watch = {
      currentType: function currentType(newValue) {
        this.$emit("currentType", {
          name: newValue,
          type: 'desc'
        });
      },
      arrowType: function arrowType(newValue, oldValue) {
        if (oldValue !== "" && newValue !== "") {
          this.$emit("currentType", {
            name: "price",
            type: newValue
          });
        }
      }
    }, _this.events = {
      filterSku: function filterSku(sku) {
        console.log("filterBar.sku...." + sku);
        this.setSkuVal(sku);
        /*this.$emit("currentType", {
          name: "sku",
          type: sku
        });*/
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(filterBar, [{
    key: 'priceOrderBy',
    value: function priceOrderBy(orderBy) {
      var that = this;
      if (orderBy == "price") {
        if (that.arrowType === "desc") {
          that.arrowType = "asc";
        } else {
          that.arrowType = "desc";
        }
      } else {
        that.arrowType = "";
      }
    }
  }, {
    key: 'setSkuVal',
    value: function setSkuVal(sku) {
      /*this.type = "sku";
      this.currentType = sku;*/
      this.$emit("currentType", {
        name: "sku",
        type: sku
      });
    }
  }]);

  return filterBar;
}(_wepy2.default.component);

exports.default = filterBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcl9iYXIuanMiXSwibmFtZXMiOlsiZmlsdGVyQmFyIiwiZGF0YSIsImN1cnJlbnRUeXBlIiwiYXJyb3dUeXBlIiwiZmxhZyIsInR5cGUiLCJjb21wb25lbnRzIiwiZmlsdGVyU2xpZGVyIiwiRmlsdGVyU2xpZGVyIiwibWV0aG9kcyIsImZpbHRlclNlYXJjaCIsIiRpbnZva2UiLCJvcmRlckJ5IiwiZSIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY3VycmVudCIsInByaWNlT3JkZXJCeSIsIiRhcHBseSIsIndhdGNoIiwibmV3VmFsdWUiLCIkZW1pdCIsIm5hbWUiLCJvbGRWYWx1ZSIsImV2ZW50cyIsImZpbHRlclNrdSIsInNrdSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTa3VWYWwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxZQUFNLEtBSEQ7QUFJTEMsWUFBTTtBQUpELEssUUFNUEMsVSxHQUFhO0FBQ1hDLG9CQUFjQztBQURILEssUUFHYkMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNPO0FBQ2IsYUFBS0MsT0FBTCxDQUFhLGNBQWIsRUFBNkIsZ0JBQTdCLEVBQStDLElBQS9DO0FBQ0QsT0FITztBQUlSQyxhQUpRLG1CQUlBQyxDQUpBLEVBSUc7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLYixJQUFMLENBQVVDLFdBQVYsSUFBeUJXLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBOUMsRUFBdUQ7QUFDckQsY0FBSUosRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUFqQixLQUE2QixPQUFqQyxFQUEwQztBQUN4QyxtQkFBTyxLQUFQO0FBQ0Q7QUFDRixTQUpELE1BSU87QUFDTEgsZUFBS1osV0FBTCxHQUFtQlcsRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUFwQztBQUNEO0FBQ0RILGFBQUtJLFlBQUwsQ0FBa0JMLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBbkM7QUFDQUgsYUFBS0ssTUFBTDtBQUNEO0FBZk8sSyxRQXVDVkMsSyxHQUFRO0FBQ05sQixpQkFETSx1QkFDTW1CLFFBRE4sRUFDZ0I7QUFDcEIsYUFBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEI7QUFDeEJDLGdCQUFNRixRQURrQjtBQUV4QmhCLGdCQUFNO0FBRmtCLFNBQTFCO0FBSUQsT0FOSztBQU9ORixlQVBNLHFCQU9Ja0IsUUFQSixFQU9jRyxRQVBkLEVBT3dCO0FBQzVCLFlBQUlBLGFBQWEsRUFBYixJQUFtQkgsYUFBYSxFQUFwQyxFQUF3QztBQUN0QyxlQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQjtBQUN4QkMsa0JBQU0sT0FEa0I7QUFFeEJsQixrQkFBTWdCO0FBRmtCLFdBQTFCO0FBSUQ7QUFDRjtBQWRLLEssUUFnQlJJLE0sR0FBUztBQUNQQyxlQURPLHFCQUNHQyxHQURILEVBQ1E7QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWSxzQkFBb0JGLEdBQWhDO0FBQ0EsYUFBS0csU0FBTCxDQUFlSCxHQUFmO0FBQ0E7Ozs7QUFJRDtBQVJNLEs7Ozs7O2lDQXRDSWYsTyxFQUFTO0FBQ3BCLFVBQUlFLE9BQU8sSUFBWDtBQUNBLFVBQUlGLFdBQVcsT0FBZixFQUF3QjtBQUN0QixZQUFJRSxLQUFLWCxTQUFMLEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCVyxlQUFLWCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xXLGVBQUtYLFNBQUwsR0FBaUIsTUFBakI7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMVyxhQUFLWCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7QUFDRjs7OzhCQUVVd0IsRyxFQUFLO0FBQ2Q7O0FBRUEsV0FBS0wsS0FBTCxDQUFXLGFBQVgsRUFBMEI7QUFDeEJDLGNBQU0sS0FEa0I7QUFFeEJsQixjQUFNc0I7QUFGa0IsT0FBMUI7QUFJRDs7OztFQS9Db0NJLGVBQUtDLFM7O2tCQUF2QmhDLFMiLCJmaWxlIjoiZmlsdGVyX2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgaW1wb3J0IEZpbHRlclNsaWRlciBmcm9tICdAL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBmaWx0ZXJCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUeXBlOiBcIlwiLFxuICAgICAgYXJyb3dUeXBlOiBcIlwiLFxuICAgICAgZmxhZzogZmFsc2UsXG4gICAgICB0eXBlOiBcImRlc2NcIlxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgZmlsdGVyU2xpZGVyOiBGaWx0ZXJTbGlkZXJcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGZpbHRlclNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdmaWx0ZXJTbGlkZXInLCAnc3dpY3RjaE92ZXJsYXknLCB0cnVlKTtcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5KGUpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBpZiAodGhhdC5kYXRhLmN1cnJlbnRUeXBlID09IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudCkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgIT09IFwicHJpY2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LmN1cnJlbnRUeXBlID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoYXQucHJpY2VPcmRlckJ5KGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudClcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJpY2VPcmRlckJ5KG9yZGVyQnkpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGlmIChvcmRlckJ5ID09IFwicHJpY2VcIikge1xuICAgICAgICBpZiAodGhhdC5hcnJvd1R5cGUgPT09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgdGhhdC5hcnJvd1R5cGUgPSBcImFzY1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuYXJyb3dUeXBlID0gXCJkZXNjXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoYXQuYXJyb3dUeXBlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTa3VWYWwgKHNrdSkge1xuICAgICAgLyp0aGlzLnR5cGUgPSBcInNrdVwiO1xuICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IHNrdTsqL1xuICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUeXBlXCIsIHtcbiAgICAgICAgbmFtZTogXCJza3VcIixcbiAgICAgICAgdHlwZTogc2t1XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIGN1cnJlbnRUeXBlKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJjdXJyZW50VHlwZVwiLCB7XG4gICAgICAgICAgbmFtZTogbmV3VmFsdWUsXG4gICAgICAgICAgdHlwZTogJ2Rlc2MnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFycm93VHlwZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBcIlwiICYmIG5ld1ZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUeXBlXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwicHJpY2VcIixcbiAgICAgICAgICAgIHR5cGU6IG5ld1ZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgICAgZmlsdGVyU2t1KHNrdSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlckJhci5za3UuLi4uXCIrc2t1KTtcbiAgICAgICAgdGhpcy5zZXRTa3VWYWwoc2t1KTtcbiAgICAgICAgLyp0aGlzLiRlbWl0KFwiY3VycmVudFR5cGVcIiwge1xuICAgICAgICAgIG5hbWU6IFwic2t1XCIsXG4gICAgICAgICAgdHlwZTogc2t1XG4gICAgICAgIH0pOyovXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=