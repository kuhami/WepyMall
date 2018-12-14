'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _rate = require('./rate.js');

var _rate2 = _interopRequireDefault(_rate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentList = function (_wepy$component) {
  _inherits(CommentList, _wepy$component);

  function CommentList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CommentList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: []
      }
    }, _this.data = {
      readonly: true
    }, _this.$repeat = { "list": { "com": "rate", "props": "" } }, _this.$props = { "rate": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:readonly.once": { "value": "readonly", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:key.once": { "value": "item.start", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      rate: _rate2.default
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CommentList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CommentList;
}(_wepy2.default.component);

exports.default = CommentList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRfbGlzdC5qcyJdLCJuYW1lcyI6WyJDb21tZW50TGlzdCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiZGF0YSIsInJlYWRvbmx5IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmF0ZSIsIlJhdGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkw7QUFEQSxLLFFBTVJDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFHUkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBUixFLFFBQ1hDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sS0FBN0QsRUFBaEIsRUFBb0Ysd0JBQXVCLEVBQUMsU0FBUSxVQUFULEVBQW9CLE9BQU0sTUFBMUIsRUFBaUMsUUFBTyxNQUF4QyxFQUErQyxTQUFRLE9BQXZELEVBQStELE9BQU0sS0FBckUsRUFBM0csRUFBdUwsbUJBQWtCLEVBQUMsU0FBUSxZQUFULEVBQXNCLE9BQU0sTUFBNUIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sS0FBdkUsRUFBek0sRUFBUixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxZQUFNQztBQURJLEssUUFRWkMsUSxHQUFXLEUsUUFNWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzZCQWJBLENBR1I7Ozs7RUFwQnNDQyxlQUFLQyxTOztrQkFBekJsQixXIiwiZmlsZSI6ImNvbW1lbnRfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBSYXRlIGZyb20gJy4vcmF0ZSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIHJlYWRvbmx5OiB0cnVlXG4gIH1cbiAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicmF0ZVwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInJhdGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6cmVhZG9ubHkub25jZVwiOntcInZhbHVlXCI6XCJyZWFkb25seVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmtleS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uc3RhcnRcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHJhdGU6IFJhdGVcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuXG5cblxuICBtZXRob2RzID0ge1xuXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbn1cblxuIl19