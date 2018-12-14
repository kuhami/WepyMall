'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _rate = require('./../components/rate.js');

var _rate2 = _interopRequireDefault(_rate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var goodsComment = function (_wepy$page) {
  _inherits(goodsComment, _wepy$page);

  function goodsComment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, goodsComment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = goodsComment.__proto__ || Object.getPrototypeOf(goodsComment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品评论'
    }, _this.data = {}, _this.$repeat = {}, _this.$props = { "rate": { "xmlns:v-on": "" } }, _this.$events = { "rate": { "v-on:change": "callbackStart" } }, _this.components = {
      rate: _rate2.default
    }, _this.computed = {}, _this.methods = {
      bindText: function bindText(e) {
        console.log(e.detail.value);
      },
      callbackStart: function callbackStart(count) {
        console.log(count);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(goodsComment, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return goodsComment;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(goodsComment , 'pages/comment_add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRfYWRkLmpzIl0sIm5hbWVzIjpbImdvb2RzQ29tbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicmF0ZSIsIlJhdGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kVGV4dCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJjYWxsYmFja1N0YXJ0IiwiY291bnQiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU8sRSxRQU1SQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsY0FBYSxFQUFkLEVBQVIsRSxRQUNUQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsZUFBYyxlQUFmLEVBQVIsRSxRQUNUQyxVLEdBQWE7QUFDVkMsWUFBTUM7QUFESSxLLFFBR1pDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxDQURELEVBQ0k7QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BSE87QUFJUkMsbUJBSlEseUJBSU1DLEtBSk4sRUFJWTtBQUNsQkwsZ0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNEO0FBTk8sSyxRQVFWQyxNLEdBQVMsRTs7Ozs7NkJBbEJBLENBRVI7Ozs7RUFUdUNDLGVBQUtDLEk7O2tCQUExQnRCLFkiLCJmaWxlIjoiY29tbWVudF9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IFJhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmF0ZVwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnb29kc0NvbW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeivhOiuuicsXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBcbiAgfVxuICBvbkxvYWQoKSB7XG5cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicmF0ZVwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJyYXRlXCI6e1widi1vbjpjaGFuZ2VcIjpcImNhbGxiYWNrU3RhcnRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICByYXRlOiBSYXRlXG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRUZXh0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgY2FsbGJhY2tTdGFydChjb3VudCl7XG4gICAgICBjb25zb2xlLmxvZyhjb3VudClcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge31cbn1cblxuIl19