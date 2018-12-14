'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _comment_list = require('./../components/comment_list.js');

var _comment_list2 = _interopRequireDefault(_comment_list);

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
    }, _this.data = {
      commentList: [{
        url: "../images/icon_nav_01_new.png",
        name: "浪子天涯",
        time: "2017-10-01 10:10",
        content: "东西收到,很满意!!真的是超级好的卖家,解答疑问不厌其烦,细致认真,关键是东西好,而且货物发得超快,包装仔细,值得信赖!",
        start: 4.5,
        children: [{
          content: "跟你交易次次都这么成功和开心的．．希望我们以后有更多的交易吧．．．哈哈"
        }]

      }, {
        url: "../images/icon_nav_02_new.png",
        name: "勇闯天下",
        time: "2017-10-01 10:10",
        content: "太感谢了，衣服很漂亮，朋友很喜欢，最主要的是买家太好了~~~大大的赞一个。。。 衣服，很合身",
        start: 4,
        children: []

      }]
    }, _this.$repeat = {}, _this.$props = { "commentList": { "xmlns:v-bind": "", "v-bind:list.sync": "commentList" } }, _this.$events = {}, _this.components = {
      commentList: _comment_list2.default
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(goodsComment, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return goodsComment;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(goodsComment , 'pages/comment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiZ29vZHNDb21tZW50IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb21tZW50TGlzdCIsInVybCIsIm5hbWUiLCJ0aW1lIiwiY29udGVudCIsInN0YXJ0IiwiY2hpbGRyZW4iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDb21tZW50TGlzdCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxDQUFDO0FBQ1ZDLGFBQUssK0JBREs7QUFFVkMsY0FBTSxNQUZJO0FBR1ZDLGNBQU0sa0JBSEk7QUFJVkMsaUJBQVMsOERBSkM7QUFLVkMsZUFBTyxHQUxHO0FBTVZDLGtCQUFVLENBQUM7QUFDVEYsbUJBQVM7QUFEQSxTQUFEOztBQU5BLE9BQUQsRUFXWDtBQUNFSCxhQUFLLCtCQURQO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxjQUFNLGtCQUhSO0FBSUVDLGlCQUFTLGdEQUpYO0FBS0VDLGVBQU8sQ0FMVDtBQU1FQyxrQkFBVTs7QUFOWixPQVhXO0FBRFIsSyxRQTRCUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixhQUF0QyxFQUFmLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZWLG1CQUFhVztBQURILEssUUFHWkMsUSxHQUFXLEUsUUFDWEMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEU7Ozs7OzZCQVhBLENBRVI7Ozs7RUEvQnVDQyxlQUFLQyxJOztrQkFBMUJwQixZIiwiZmlsZSI6ImNvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1lbnRfbGlzdFwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnb29kc0NvbW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWTgeivhOiuuicsXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjb21tZW50TGlzdDogW3tcbiAgICAgICAgdXJsOiBcIi4uL2ltYWdlcy9pY29uX25hdl8wMV9uZXcucG5nXCIsXG4gICAgICAgIG5hbWU6IFwi5rWq5a2Q5aSp5ravXCIsXG4gICAgICAgIHRpbWU6IFwiMjAxNy0xMC0wMSAxMDoxMFwiLFxuICAgICAgICBjb250ZW50OiBcIuS4nOilv+aUtuWIsCzlvojmu6HmhI8hIeecn+eahOaYr+i2hee6p+WlveeahOWNluWutizop6PnrZTnlpHpl67kuI3ljozlhbbng6Ys57uG6Ie06K6k55yfLOWFs+mUruaYr+S4nOilv+WlvSzogIzkuJTotKfnianlj5HlvpfotoXlv6ss5YyF6KOF5LuU57uGLOWAvOW+l+S/oei1liFcIixcbiAgICAgICAgc3RhcnQ6IDQuNSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgY29udGVudDogXCLot5/kvaDkuqTmmJPmrKHmrKHpg73ov5nkuYjmiJDlip/lkozlvIDlv4PnmoTvvI7vvI7luIzmnJvmiJHku6zku6XlkI7mnInmm7TlpJrnmoTkuqTmmJPlkKfvvI7vvI7vvI7lk4jlk4hcIlxuICAgICAgICB9XSxcblxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcIi4uL2ltYWdlcy9pY29uX25hdl8wMl9uZXcucG5nXCIsXG4gICAgICAgIG5hbWU6IFwi5YuH6Zev5aSp5LiLXCIsXG4gICAgICAgIHRpbWU6IFwiMjAxNy0xMC0wMSAxMDoxMFwiLFxuICAgICAgICBjb250ZW50OiBcIuWkquaEn+iwouS6hu+8jOiho+acjeW+iOa8guS6ru+8jOaci+WPi+W+iOWWnOasou+8jOacgOS4u+imgeeahOaYr+S5sOWutuWkquWlveS6hn5+fuWkp+Wkp+eahOi1nuS4gOS4quOAguOAguOAgiDooaPmnI3vvIzlvojlkIjouqtcIixcbiAgICAgICAgc3RhcnQ6IDQsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcblxuICAgICAgfVxuXG5cbiAgICBdLFxuICB9XG4gIG9uTG9hZCgpIHtcblxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb21tZW50TGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJjb21tZW50TGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY29tbWVudExpc3Q6IENvbW1lbnRMaXN0XG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuICBtZXRob2RzID0ge31cbiAgZXZlbnRzID0ge31cbn1cblxuIl19