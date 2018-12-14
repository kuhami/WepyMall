'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _wxParse = require('./../plugins/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _comment_list = require('./../components/comment_list.js');

var _comment_list2 = _interopRequireDefault(_comment_list);

var _timer = require('./../components/common/timer.js');

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var goodsDetail = function (_wepy$page) {
  _inherits(goodsDetail, _wepy$page);

  function goodsDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, goodsDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = goodsDetail.__proto__ || Object.getPrototypeOf(goodsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.data = {
      winWidth: 0,
      winHeight: '100%',
      goodsId: 0,
      detail: {},
      good_bigimg: [],
      //订单活动开始时间（格式yy-mm-dd 或者 yy/mm/dd ）
      //startTime: "2017-07-15 16:00:00",
      startTime: "",
      //订单活动结束时间（格式yy-mm-dd 或者 yy/mm/dd ）
      //endTime: "2017-07-21 16:04:00"
      endTime: "",
      hidden: true,
      //动画效果
      animationData: "",
      //购买方式:1-加购物车,2-立即购买
      orderType: 1,
      //购买数量
      orderNum: 1,
      //是否收藏
      isFavorite: false,
      isValidDate: true,
      canOrder: true, //是否能下单
      purchasetype: 1, //1-正常购买;2-补货
      purchaseText: "立即购买",
      special: 0, ////0-正常入库;1-特价专区和换货专区,
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
      }],
      commentList1: []
    }, _this.$repeat = {}, _this.$props = { "commentList": { "v-bind:list.sync": "commentList" }, "timer": { "xmlns:v-bind": "", "v-bind:startTime.sync": "startTime", "v-bind:endTime.sync": "endTime" } }, _this.$events = {}, _this.components = {
      commentList: _comment_list2.default,
      timer: _timer2.default
    }, _this.computed = {}, _this.events = {}, _this.methods = {
      // issus : https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
      homePage: function homePage() {
        _wepy2.default.switchTab({
          url: '/pages/home'
        });
        // wx.switchTab({
        //   url: '/pages/home'
        // })
        // console.log(wepy)
        // console.log(wx)
      },
      moreComment: function moreComment() {
        _wepy2.default.navigateTo({
          url: "/pages/comment"
        });
      },
      previewImage: function previewImage(e) {
        var current = e.target.dataset.src;
        var imageArry = [];
        var obj = this.detail.photoList;
        Object.keys(obj).forEach(function (item) {
          imageArry.push(obj[item].photo);
        });
        wx.previewImage({
          current: current, // 当前显示图片的http链接
          urls: imageArry // 需要预览的图片http链接列表
        });
      },
      bindOrderNumInput: function bindOrderNumInput(e) {
        this.orderNum = e.detail.value;
      },
      takeOrder: function takeOrder() {
        if (!this.canOrder) {
          return;
        }
        this.showConfirmData();
        this.orderType = 2;
        //this.doTakeOrder();
      },
      takeCart: function takeCart() {
        if (!this.canOrder) {
          return;
        }
        this.showConfirmData();
        this.orderType = 1;
        //this.doTakeCart();
      },
      takeFavorite: function takeFavorite() {
        if (this.isFavorite == true) {
          this.goodsUnFavorite();
        } else {
          this.goodsFavorite();
        }
      },
      closeModel: function closeModel() {
        var _this2 = this;

        this.winHeight = "100%";
        this.animation.height(0).step();
        this.setData({
          animationData: this.animation.export()
        });
        setTimeout(function () {
          _this2.hidden = true;
          _this2.$apply();
        }, 100);
      },
      confirmTake: function confirmTake() {
        //确定购物车或者直接购买
        if (this.orderType == 1) {
          this.doTakeCart();
        } else if (this.orderType == 2) {
          this.doTakeOrder();
        }
      },
      jiaBtnTap: function jiaBtnTap(e) {
        this.orderNum++;
      },
      jianBtnTap: function jianBtnTap() {
        if (this.orderNum > 1) {
          this.orderNum--;
        }
      },
      selAttr: function selAttr(e) {
        var id = e.currentTarget.dataset.id;
        var nameid = e.currentTarget.dataset.nameid;
        var index = e.currentTarget.dataset.index;
        for (var i = 0; i < this.detail.goodsSkuNameList.length; i++) {
          var skuValList = this.detail.goodsSkuNameList[i].skuValList;
          for (var j = 0; j < skuValList.length; j++) {
            var skuVal = skuValList[j];
            if (skuVal.skuNameId == nameid) {
              skuVal.current = false;
              if (skuVal.skuValId == id) {
                skuVal.current = true;
                this.detail.goodsSkuValIds[index] = id;
                for (var k = 0; k < this.detail.goodsSkuList.length; k++) {
                  var skuValIds = JSON.parse(this.detail.goodsSkuList[k].skuValIds).toArray;
                  console.log("goodskuids..." + this.detail.goodsSkuList[k].skuValIds);
                  console.log("this goodskuids..." + this.detail.goodsSkuValIds);
                  if ("[" + this.detail.goodsSkuValIds.toString() + "]" === this.detail.goodsSkuList[k].skuValIds) {
                    console.log("goodskuids equals...");
                    this.detail.stockNum = this.detail.goodsSkuList[k].stockNum;
                    this.detail.price = this.detail.goodsSkuList[k].price;
                    this.$apply();
                    break;
                  }
                }
              }
            }
          }
        }
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.detail.name,
          path: '/pages/goods_detail?id=' + this.goodsId,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(goodsDetail, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var that = this;
      this.orderNum = 1;
      this.purchasetype = 1;
      this.isFavorite = false;
      this.isValidDate = true;
      this.canOrder = true;
      this.hidden = true;
      this.winHeight = "100%";
      that.detail = {};
      that.$apply();
      //接收上一个页面传过来的参数
      that.goodsId = option.id;
      if (option.purchasetype != undefined) {
        this.purchasetype = option.purchasetype;
      }
      if (this.purchasetype == 2) {
        this.purchaseText = "申请补货";
      } else {
        this.purchaseText = "立即购买";
      }
      if (option.special != undefined) {
        this.special = option.special;
      }
      that.getGoodsDetail();
      that.addUserBrowser();
      console.log("special===" + this.special);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.goodsIsFavorite();
      //创建动画
      var animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 200,
        timingFunction: "linear",
        delay: 0
      });
      this.animation = animation;
    }
  }, {
    key: 'wxParseImgLoad',
    value: function wxParseImgLoad(e) {}
  }, {
    key: 'wxParseImgTap',
    value: function wxParseImgTap(e) {
      var that = this;
      var nowImgUrl = e.target.dataset.src;
      var tagFrom = e.target.dataset.from;
      if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
        wx.previewImage({
          current: nowImgUrl, // 当前显示图片的http链接
          // urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
          urls: that.bindData[tagFrom].imageUrls // 注释掉上面的 换着一行 (http://blog.csdn.net/zhuming3834/article/details/74380079)
        });
      }
    }
    /*onReachBottom() {
      let that = this;
      if (that.good_bigimg.length == 0) {
        that.good_bigimg = that.detail.good_bigimg;
        that.$apply();
      }
    }*/

  }, {
    key: 'getGoodsDetail',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, json, time, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                //const json = await api.getGoodsDetail({

                _context.next = 3;
                return _api2.default.goodsDetail({
                  query: {
                    id: that.goodsId
                  }
                });

              case 3:
                json = _context.sent;
                time = {};

                if (json.data.code == 0) {
                  data = json.data.data;

                  that.detail = data;
                  _wxParse2.default.wxParse('detailInfo', 'html', that.detail.detailInfo, this);
                  time.endTime = that.detail.validEndTime;
                  time.startTime = that.detail.startTime;
                  if (json.data.validDate == "0") {
                    that.isValidDate = false;
                    if (this.purchasetype == 1 && this.special != 1) {
                      this.canOrder = false;
                    }
                  }
                } else {
                  if (json.data.msg) {
                    _tip2.default.error(json.data.msg);
                  } else {
                    _tip2.default.error('查看商品失败');
                  }
                }
                that.$apply();
                this.$invoke('timer', 'initTimer', time);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGoodsDetail() {
        return _ref2.apply(this, arguments);
      }

      return getGoodsDetail;
    }()
  }, {
    key: 'addUserBrowser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.addBrowser({
                  query: {
                    goodsId: that.goodsId,
                    openId: openId
                  }
                });

              case 5:
                json = _context2.sent;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addUserBrowser() {
        return _ref3.apply(this, arguments);
      }

      return addUserBrowser;
    }()
  }, {
    key: 'doTakeCart',

    //加入购物车
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 5;
                return _api2.default.addCart({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId,
                    goodsSkuId: this.detail.goodsSkuValIds,
                    purchaseType: this.purchasetype,
                    num: this.orderNum
                  }
                });

              case 5:
                json = _context3.sent;

                if (json.data.code == 0) {
                  this.winHeight = "100%";
                  this.animation.height(0).step();
                  this.setData({
                    animationData: this.animation.export()
                  });
                  setTimeout(function () {
                    _this3.hidden = true;
                    _this3.$apply();
                  }, 100);
                  _tip2.default.success("成功加入购物车");
                } else {
                  if (json.data.msg) {
                    _tip2.default.error(json.data.msg);
                  } else {
                    _tip2.default.error('无法加入购物车');
                  }
                }

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function doTakeCart() {
        return _ref4.apply(this, arguments);
      }

      return doTakeCart;
    }()
    //立即购买

  }, {
    key: 'doTakeOrder',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this4 = this;

        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context4.next = 5;
                return _api2.default.addCart({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId,
                    goodsSkuId: this.detail.goodsSkuValIds,
                    purchaseType: this.purchasetype,
                    num: this.orderNum
                  }
                });

              case 5:
                json = _context4.sent;

                if (json.data.code == 0) {
                  this.winHeight = "100%";
                  this.animation.height(0).step();
                  this.setData({
                    animationData: this.animation.export()
                  });
                  setTimeout(function () {
                    _this4.hidden = true;
                    _this4.$apply();
                  }, 100);
                  _wepy2.default.navigateTo({
                    url: "/pages/comfire_order?goodsId=" + that.goodsId + "&purchasetype=" + that.purchasetype
                  });
                } else {
                  if (json.data.msg) {
                    _tip2.default.error(json.data.msg);
                  } else {
                    _tip2.default.error('无法立刻购买');
                  }
                }

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function doTakeOrder() {
        return _ref5.apply(this, arguments);
      }

      return doTakeOrder;
    }()
  }, {
    key: 'showConfirmData',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.animation.height('783rpx').step();
                this.setData({
                  animationData: this.animation.export()
                });
                setTimeout(function () {
                  _this5.hidden = false;
                  var systemInfo = _wepy2.default.getStorageSync(_constant.SYSTEM_INFO);
                  _this5.winHeight = systemInfo.windowHeight;
                  _this5.$apply();
                }, 100);

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function showConfirmData() {
        return _ref6.apply(this, arguments);
      }

      return showConfirmData;
    }()
    //查看商品收藏状态

  }, {
    key: 'goodsIsFavorite',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context6.next = 5;
                return _api2.default.goodsIsFavorite({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId
                  }
                });

              case 5:
                json = _context6.sent;

                if (json.data.code == 0) {
                  if (json.data.isFavorite == 1) {
                    this.isFavorite = true;
                    console.log(this.isFavorite);
                  } else {
                    this.isFavorite = false;
                  }
                } else {
                  console.log('查看商品收藏失败');
                  if (json.data.msg) {
                    _tip2.default.error(json.data.msg);
                  } else {
                    _tip2.default.error('查看商品收藏失败');
                  }
                }
                that.$apply();

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function goodsIsFavorite() {
        return _ref7.apply(this, arguments);
      }

      return goodsIsFavorite;
    }()
    //商品收藏

  }, {
    key: 'goodsFavorite',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context7.next = 5;
                return _api2.default.goodsFavorite({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId
                  }
                });

              case 5:
                json = _context7.sent;

                if (json.data.code == 0) {
                  console.log("===========商品收藏成功=========");
                  this.isFavorite = true;
                  _tip2.default.toast("收藏成功");
                } else {
                  console.log(json.data);
                  _tip2.default.error('收藏失败');
                }
                that.$apply();

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function goodsFavorite() {
        return _ref8.apply(this, arguments);
      }

      return goodsFavorite;
    }()
    //商品取消收藏

  }, {
    key: 'goodsUnFavorite',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context8.next = 5;
                return _api2.default.goodsUnFavorite({
                  query: {
                    openId: openId,
                    goodsId: that.goodsId
                  }
                });

              case 5:
                json = _context8.sent;

                if (json.data.code == 0) {
                  console.log("===========商品取消收藏成功=========");
                  _tip2.default.toast("取消收藏成功");
                  this.isFavorite = false;
                } else {
                  console.log(json.data);
                  _tip2.default.error('取消收藏失败');
                }
                that.$apply();

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function goodsUnFavorite() {
        return _ref9.apply(this, arguments);
      }

      return goodsUnFavorite;
    }()
  }]);

  return goodsDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(goodsDetail , 'pages/goods_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzX2RldGFpbC5qcyJdLCJuYW1lcyI6WyJnb29kc0RldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwid2luV2lkdGgiLCJ3aW5IZWlnaHQiLCJnb29kc0lkIiwiZGV0YWlsIiwiZ29vZF9iaWdpbWciLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiaGlkZGVuIiwiYW5pbWF0aW9uRGF0YSIsIm9yZGVyVHlwZSIsIm9yZGVyTnVtIiwiaXNGYXZvcml0ZSIsImlzVmFsaWREYXRlIiwiY2FuT3JkZXIiLCJwdXJjaGFzZXR5cGUiLCJwdXJjaGFzZVRleHQiLCJzcGVjaWFsIiwiY29tbWVudExpc3QiLCJ1cmwiLCJuYW1lIiwidGltZSIsImNvbnRlbnQiLCJzdGFydCIsImNoaWxkcmVuIiwiY29tbWVudExpc3QxIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ29tbWVudExpc3QiLCJ0aW1lciIsImNvbXB1dGVkIiwiZXZlbnRzIiwibWV0aG9kcyIsImhvbWVQYWdlIiwid2VweSIsInN3aXRjaFRhYiIsIm1vcmVDb21tZW50IiwibmF2aWdhdGVUbyIsInByZXZpZXdJbWFnZSIsImUiLCJjdXJyZW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNyYyIsImltYWdlQXJyeSIsIm9iaiIsInBob3RvTGlzdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJwaG90byIsInd4IiwidXJscyIsImJpbmRPcmRlck51bUlucHV0IiwidmFsdWUiLCJ0YWtlT3JkZXIiLCJzaG93Q29uZmlybURhdGEiLCJ0YWtlQ2FydCIsInRha2VGYXZvcml0ZSIsImdvb2RzVW5GYXZvcml0ZSIsImdvb2RzRmF2b3JpdGUiLCJjbG9zZU1vZGVsIiwiYW5pbWF0aW9uIiwiaGVpZ2h0Iiwic3RlcCIsInNldERhdGEiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiY29uZmlybVRha2UiLCJkb1Rha2VDYXJ0IiwiZG9UYWtlT3JkZXIiLCJqaWFCdG5UYXAiLCJqaWFuQnRuVGFwIiwic2VsQXR0ciIsImlkIiwiY3VycmVudFRhcmdldCIsIm5hbWVpZCIsImluZGV4IiwiaSIsImdvb2RzU2t1TmFtZUxpc3QiLCJsZW5ndGgiLCJza3VWYWxMaXN0IiwiaiIsInNrdVZhbCIsInNrdU5hbWVJZCIsInNrdVZhbElkIiwiZ29vZHNTa3VWYWxJZHMiLCJrIiwiZ29vZHNTa3VMaXN0Iiwic2t1VmFsSWRzIiwiSlNPTiIsInBhcnNlIiwidG9BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsInN0b2NrTnVtIiwicHJpY2UiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsIm9wdGlvbiIsInRoYXQiLCJ1bmRlZmluZWQiLCJnZXRHb29kc0RldGFpbCIsImFkZFVzZXJCcm93c2VyIiwiZ29vZHNJc0Zhdm9yaXRlIiwiY3JlYXRlQW5pbWF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5Iiwibm93SW1nVXJsIiwidGFnRnJvbSIsImJpbmREYXRhIiwiaW1hZ2VVcmxzIiwiYXBpIiwicXVlcnkiLCJqc29uIiwiY29kZSIsIld4UGFyc2UiLCJ3eFBhcnNlIiwiZGV0YWlsSW5mbyIsInZhbGlkRW5kVGltZSIsInZhbGlkRGF0ZSIsIm1zZyIsInRpcCIsImVycm9yIiwiJGludm9rZSIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiVVNFUl9TUEVDSUNBTF9JTkZPIiwib3BlbklkIiwib3BlbmlkIiwiYWRkQnJvd3NlciIsImFkZENhcnQiLCJnb29kc1NrdUlkIiwicHVyY2hhc2VUeXBlIiwibnVtIiwic3lzdGVtSW5mbyIsIlNZU1RFTV9JTkZPIiwid2luZG93SGVpZ2h0IiwidG9hc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNB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QUFVLE1BQVY7QUFDRDtBQUNEekIscUJBQUt2QyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7Ozs7Ozs7Ozs7O0FBRU11QyxvQixHQUFPLEk7QUFDUDJCLCtCLEdBQWtCdEcsZUFBS3VHLGNBQUwsQ0FBb0JDLDRCQUFwQixLQUEyQyxFO0FBQzdEQyxzQixHQUFTSCxnQkFBZ0JJLE07O3VCQUNWakIsY0FBSTlELGVBQUosQ0FBb0I7QUFDckMrRCx5QkFBTztBQUNMZSw0QkFBUUEsTUFESDtBQUVMMUksNkJBQVM0RyxLQUFLNUc7QUFGVDtBQUQ4QixpQkFBcEIsQzs7O0FBQWI0SCxvQjs7QUFNTixvQkFBSUEsS0FBSy9ILElBQUwsQ0FBVWdJLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkI5QiwwQkFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0FvQyxnQ0FBSWdCLEtBQUosQ0FBVSxRQUFWO0FBQ0EsdUJBQUszSSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0QsaUJBSkQsTUFJTztBQUNMc0YsMEJBQVFDLEdBQVIsQ0FBWTRCLEtBQUsvSCxJQUFqQjtBQUNBdUksZ0NBQUlDLEtBQUosQ0FBVSxRQUFWO0FBQ0Q7QUFDRHpCLHFCQUFLdkMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNUcUNwQyxlQUFLb0gsSTs7a0JBQXpCM0osVyIsImZpbGUiOiJnb29kc19kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBTWVNURU1fSU5GTyxcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCBXeFBhcnNlIGZyb20gXCIuLi9wbHVnaW5zL3d4UGFyc2Uvd3hQYXJzZVwiO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1lbnRfbGlzdFwiXG5pbXBvcnQgdGltZXIgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi90aW1lcidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdvb2RzRGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hor6bmg4UnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB3aW5XaWR0aDogMCxcbiAgICB3aW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBnb29kc0lkOiAwLFxuICAgIGRldGFpbDoge30sXG4gICAgZ29vZF9iaWdpbWc6IFtdLFxuICAgIC8v6K6i5Y2V5rS75Yqo5byA5aeL5pe26Ze077yI5qC85byPeXktbW0tZGQg5oiW6ICFIHl5L21tL2RkIO+8iVxuICAgIC8vc3RhcnRUaW1lOiBcIjIwMTctMDctMTUgMTY6MDA6MDBcIixcbiAgICBzdGFydFRpbWU6IFwiXCIsXG4gICAgLy/orqLljZXmtLvliqjnu5PmnZ/ml7bpl7TvvIjmoLzlvI95eS1tbS1kZCDmiJbogIUgeXkvbW0vZGQg77yJXG4gICAgLy9lbmRUaW1lOiBcIjIwMTctMDctMjEgMTY6MDQ6MDBcIlxuICAgIGVuZFRpbWU6IFwiXCIsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIC8v5Yqo55S75pWI5p6cXG4gICAgYW5pbWF0aW9uRGF0YTogXCJcIixcbiAgICAvL+i0reS5sOaWueW8jzoxLeWKoOi0reeJqei9piwyLeeri+WNs+i0reS5sFxuICAgIG9yZGVyVHlwZTogMSxcbiAgICAvL+i0reS5sOaVsOmHj1xuICAgIG9yZGVyTnVtOiAxLFxuICAgIC8v5piv5ZCm5pS26JePXG4gICAgaXNGYXZvcml0ZTogZmFsc2UsXG4gICAgaXNWYWxpZERhdGU6IHRydWUsXG4gICAgY2FuT3JkZXI6IHRydWUsIC8v5piv5ZCm6IO95LiL5Y2VXG4gICAgcHVyY2hhc2V0eXBlOiAxLCAvLzEt5q2j5bi46LSt5LmwOzIt6KGl6LSnXG4gICAgcHVyY2hhc2VUZXh0OiBcIueri+WNs+i0reS5sFwiLFxuICAgIHNwZWNpYWw6IDAsIC8vLy8wLeato+W4uOWFpeW6kzsxLeeJueS7t+S4k+WMuuWSjOaNoui0p+S4k+WMuixcbiAgICBjb21tZW50TGlzdDogW1xuXG4gICAgICB7XG4gICAgICAgIHVybDogXCIuLi9pbWFnZXMvaWNvbl9uYXZfMDFfbmV3LnBuZ1wiLFxuICAgICAgICBuYW1lOiBcIua1quWtkOWkqea2r1wiLFxuICAgICAgICB0aW1lOiBcIjIwMTctMTAtMDEgMTA6MTBcIixcbiAgICAgICAgY29udGVudDogXCLkuJzopb/mlLbliLAs5b6I5ruh5oSPISHnnJ/nmoTmmK/otoXnuqflpb3nmoTljZblrrYs6Kej562U55aR6Zeu5LiN5Y6M5YW254OmLOe7huiHtOiupOecnyzlhbPplK7mmK/kuJzopb/lpb0s6ICM5LiU6LSn54mp5Y+R5b6X6LaF5b+rLOWMheijheS7lOe7hizlgLzlvpfkv6HotZYhXCIsXG4gICAgICAgIHN0YXJ0OiA0LjUsXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIGNvbnRlbnQ6IFwi6Lef5L2g5Lqk5piT5qyh5qyh6YO96L+Z5LmI5oiQ5Yqf5ZKM5byA5b+D55qE77yO77yO5biM5pyb5oiR5Lus5Lul5ZCO5pyJ5pu05aSa55qE5Lqk5piT5ZCn77yO77yO77yO5ZOI5ZOIXCJcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVybDogXCIuLi9pbWFnZXMvaWNvbl9uYXZfMDJfbmV3LnBuZ1wiLFxuICAgICAgICBuYW1lOiBcIuWLh+mXr+WkqeS4i1wiLFxuICAgICAgICB0aW1lOiBcIjIwMTctMTAtMDEgMTA6MTBcIixcbiAgICAgICAgY29udGVudDogXCLlpKrmhJ/osKLkuobvvIzooaPmnI3lvojmvILkuq7vvIzmnIvlj4vlvojllpzmrKLvvIzmnIDkuLvopoHnmoTmmK/kubDlrrblpKrlpb3kuoZ+fn7lpKflpKfnmoTotZ7kuIDkuKrjgILjgILjgIIg6KGj5pyN77yM5b6I5ZCI6LqrXCIsXG4gICAgICAgIHN0YXJ0OiA0LFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH1cblxuXG4gICAgXSxcbiAgICBjb21tZW50TGlzdDE6IFtdLFxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRMaXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiY29tbWVudExpc3RcIn0sXCJ0aW1lclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3RhcnRUaW1lLnN5bmNcIjpcInN0YXJ0VGltZVwiLFwidi1iaW5kOmVuZFRpbWUuc3luY1wiOlwiZW5kVGltZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY29tbWVudExpc3Q6IENvbW1lbnRMaXN0LFxuICAgIHRpbWVyOnRpbWVyXG4gIH1cbiAgb25Mb2FkKG9wdGlvbikge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB0aGlzLm9yZGVyTnVtID0gMTtcbiAgICB0aGlzLnB1cmNoYXNldHlwZSA9IDE7XG4gICAgdGhpcy5pc0Zhdm9yaXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc1ZhbGlkRGF0ZSA9IHRydWU7XG4gICAgdGhpcy5jYW5PcmRlciA9IHRydWU7XG4gICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMud2luSGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgdGhhdC5kZXRhaWwgPSB7fTtcbiAgICB0aGF0LiRhcHBseSgpO1xuICAgIC8v5o6l5pS25LiK5LiA5Liq6aG16Z2i5Lyg6L+H5p2l55qE5Y+C5pWwXG4gICAgdGhhdC5nb29kc0lkID0gb3B0aW9uLmlkO1xuICAgIGlmIChvcHRpb24ucHVyY2hhc2V0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wdXJjaGFzZXR5cGUgPSBvcHRpb24ucHVyY2hhc2V0eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wdXJjaGFzZXR5cGUgPT0gMikge1xuICAgICAgdGhpcy5wdXJjaGFzZVRleHQgPSBcIueUs+ivt+ihpei0p1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlVGV4dCA9IFwi56uL5Y2z6LSt5LmwXCI7XG4gICAgfVxuICAgIGlmIChvcHRpb24uc3BlY2lhbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3BlY2lhbCA9IG9wdGlvbi5zcGVjaWFsO1xuICAgIH1cbiAgICB0aGF0LmdldEdvb2RzRGV0YWlsKCk7XG4gICAgdGhhdC5hZGRVc2VyQnJvd3NlcigpO1xuICAgIGNvbnNvbGUubG9nKFwic3BlY2lhbD09PVwiICsgdGhpcy5zcGVjaWFsKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgdGhpcy5nb29kc0lzRmF2b3JpdGUoKTtcbiAgICAvL+WIm+W7uuWKqOeUu1xuICAgIHZhciBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIixcbiAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICB0aW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgIGRlbGF5OiAwXG4gICAgfSlcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgfVxuICB3eFBhcnNlSW1nTG9hZChlKSB7fVxuXG4gIHd4UGFyc2VJbWdUYXAoZSkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciBub3dJbWdVcmwgPSBlLnRhcmdldC5kYXRhc2V0LnNyY1xuICAgIHZhciB0YWdGcm9tID0gZS50YXJnZXQuZGF0YXNldC5mcm9tXG4gICAgaWYgKHR5cGVvZih0YWdGcm9tKSAhPSAndW5kZWZpbmVkJyAmJiB0YWdGcm9tLmxlbmd0aCA+IDApIHtcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IG5vd0ltZ1VybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAvLyB1cmxzOiB0aGF0LmRhdGFbdGFnRnJvbV0uaW1hZ2VVcmxzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgdXJsczogdGhhdC5iaW5kRGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g5rOo6YeK5o6J5LiK6Z2i55qEIOaNouedgOS4gOihjCAoaHR0cDovL2Jsb2cuY3Nkbi5uZXQvemh1bWluZzM4MzQvYXJ0aWNsZS9kZXRhaWxzLzc0MzgwMDc5KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgLypvblJlYWNoQm90dG9tKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhhdC5nb29kX2JpZ2ltZy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhhdC5nb29kX2JpZ2ltZyA9IHRoYXQuZGV0YWlsLmdvb2RfYmlnaW1nO1xuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9XG4gIH0qL1xuICBhc3luYyBnZXRHb29kc0RldGFpbCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy9jb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEdvb2RzRGV0YWlsKHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdvb2RzRGV0YWlsKHtcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGlkOiB0aGF0Lmdvb2RzSWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdGltZSA9IHt9O1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBsZXQgZGF0YSA9IGpzb24uZGF0YS5kYXRhO1xuICAgICAgdGhhdC5kZXRhaWwgPSBkYXRhO1xuICAgICAgV3hQYXJzZS53eFBhcnNlKCdkZXRhaWxJbmZvJywgJ2h0bWwnLCB0aGF0LmRldGFpbC5kZXRhaWxJbmZvLCB0aGlzKTtcbiAgICAgIHRpbWUuZW5kVGltZSA9IHRoYXQuZGV0YWlsLnZhbGlkRW5kVGltZTtcbiAgICAgIHRpbWUuc3RhcnRUaW1lID0gdGhhdC5kZXRhaWwuc3RhcnRUaW1lO1xuICAgICAgaWYgKGpzb24uZGF0YS52YWxpZERhdGUgPT0gXCIwXCIpIHtcbiAgICAgICAgdGhhdC5pc1ZhbGlkRGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wdXJjaGFzZXR5cGUgPT0gMSAmJiB0aGlzLnNwZWNpYWwgIT0gMSkge1xuICAgICAgICAgIHRoaXMuY2FuT3JkZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoanNvbi5kYXRhLm1zZykge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5lcnJvcign5p+l55yL5ZWG5ZOB5aSx6LSlJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgICB0aGlzLiRpbnZva2UoJ3RpbWVyJywgJ2luaXRUaW1lcicsIHRpbWUpO1xuICB9XG4gIGFzeW5jIGFkZFVzZXJCcm93c2VyKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuYWRkQnJvd3Nlcih7XG4gICAgICBxdWVyeToge1xuICAgICAgICBnb29kc0lkOiB0aGF0Lmdvb2RzSWQsXG4gICAgICAgIG9wZW5JZDogb3BlbklkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuICBldmVudHMgPSB7fVxuICAvL+WKoOWFpei0reeJqei9plxuICBhc3luYyBkb1Rha2VDYXJ0KCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuYWRkQ2FydCh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgZ29vZHNJZDogdGhhdC5nb29kc0lkLFxuICAgICAgICBnb29kc1NrdUlkOiB0aGlzLmRldGFpbC5nb29kc1NrdVZhbElkcyxcbiAgICAgICAgcHVyY2hhc2VUeXBlOiB0aGlzLnB1cmNoYXNldHlwZSxcbiAgICAgICAgbnVtOiB0aGlzLm9yZGVyTnVtXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMud2luSGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5oZWlnaHQoMCkuc3RlcCgpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogdGhpcy5hbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSwgMTAwKVxuICAgICAgdGlwLnN1Y2Nlc3MoXCLmiJDlip/liqDlhaXotK3nianovaZcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChqc29uLmRhdGEubXNnKSB7XG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKCfml6Dms5XliqDlhaXotK3nianovaYnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL+eri+WNs+i0reS5sFxuICBhc3luYyBkb1Rha2VPcmRlcigpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmFkZENhcnQoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGdvb2RzSWQ6IHRoYXQuZ29vZHNJZCxcbiAgICAgICAgZ29vZHNTa3VJZDogdGhpcy5kZXRhaWwuZ29vZHNTa3VWYWxJZHMsXG4gICAgICAgIHB1cmNoYXNlVHlwZTogdGhpcy5wdXJjaGFzZXR5cGUsXG4gICAgICAgIG51bTogdGhpcy5vcmRlck51bVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLndpbkhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgdGhpcy5hbmltYXRpb24uaGVpZ2h0KDApLnN0ZXAoKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMuYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sIDEwMClcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCIvcGFnZXMvY29tZmlyZV9vcmRlcj9nb29kc0lkPVwiICsgdGhhdC5nb29kc0lkICsgXCImcHVyY2hhc2V0eXBlPVwiICsgdGhhdC5wdXJjaGFzZXR5cGVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChqc29uLmRhdGEubXNnKSB7XG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKCfml6Dms5Xnq4vliLvotK3kubAnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzaG93Q29uZmlybURhdGEoKSB7XG4gICAgdGhpcy5hbmltYXRpb24uaGVpZ2h0KCc3ODNycHgnKS5zdGVwKCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMuYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgICAgdGhpcy53aW5IZWlnaHQgPSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSwgMTAwKVxuICB9XG4gIC8v5p+l55yL5ZWG5ZOB5pS26JeP54q25oCBXG4gIGFzeW5jIGdvb2RzSXNGYXZvcml0ZSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdvb2RzSXNGYXZvcml0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgZ29vZHNJZDogdGhhdC5nb29kc0lkXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIGlmIChqc29uLmRhdGEuaXNGYXZvcml0ZSA9PSAxKSB7XG4gICAgICAgIHRoaXMuaXNGYXZvcml0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNGYXZvcml0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzRmF2b3JpdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ+afpeeci+WVhuWTgeaUtuiXj+Wksei0pScpXG4gICAgICBpZiAoanNvbi5kYXRhLm1zZykge1xuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcC5lcnJvcign5p+l55yL5ZWG5ZOB5pS26JeP5aSx6LSlJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuICAvL+WVhuWTgeaUtuiXj1xuICBhc3luYyBnb29kc0Zhdm9yaXRlKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ29vZHNGYXZvcml0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgZ29vZHNJZDogdGhhdC5nb29kc0lkXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT3llYblk4HmlLbol4/miJDlip89PT09PT09PT1cIilcbiAgICAgIHRoaXMuaXNGYXZvcml0ZSA9IHRydWU7XG4gICAgICB0aXAudG9hc3QoXCLmlLbol4/miJDlip9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24uZGF0YSlcbiAgICAgIHRpcC5lcnJvcign5pS26JeP5aSx6LSlJylcbiAgICB9XG4gICAgdGhhdC4kYXBwbHkoKTtcbiAgfVxuICAvL+WVhuWTgeWPlua2iOaUtuiXj1xuICBhc3luYyBnb29kc1VuRmF2b3JpdGUoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nb29kc1VuRmF2b3JpdGUoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgIGdvb2RzSWQ6IHRoYXQuZ29vZHNJZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT095ZWG5ZOB5Y+W5raI5pS26JeP5oiQ5YqfPT09PT09PT09XCIpXG4gICAgICB0aXAudG9hc3QoXCLlj5bmtojmlLbol4/miJDlip9cIik7XG4gICAgICB0aGlzLmlzRmF2b3JpdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coanNvbi5kYXRhKVxuICAgICAgdGlwLmVycm9yKCflj5bmtojmlLbol4/lpLHotKUnKVxuICAgIH1cbiAgICB0aGF0LiRhcHBseSgpO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gaXNzdXMgOiBodHRwczovL21wLndlaXhpbi5xcS5jb20vZGVidWcvd3hhZG9jL2Rldi9hcGkvdWktbmF2aWdhdGUuaHRtbCN3eHJlbGF1bmNob2JqZWN0XG4gICAgaG9tZVBhZ2UoKSB7XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy9ob21lJ1xuICAgICAgfSlcbiAgICAgIC8vIHd4LnN3aXRjaFRhYih7XG4gICAgICAvLyAgIHVybDogJy9wYWdlcy9ob21lJ1xuICAgICAgLy8gfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHdlcHkpXG4gICAgICAvLyBjb25zb2xlLmxvZyh3eClcbiAgICB9LFxuICAgIG1vcmVDb21tZW50KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9jb21tZW50XCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2aWV3SW1hZ2UoZSkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBlLnRhcmdldC5kYXRhc2V0LnNyYztcbiAgICAgIGxldCBpbWFnZUFycnkgPSBbXTtcbiAgICAgIGxldCBvYmogPSB0aGlzLmRldGFpbC5waG90b0xpc3Q7XG4gICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaW1hZ2VBcnJ5LnB1c2gob2JqW2l0ZW1dLnBob3RvKVxuICAgICAgfSk7XG4gICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50LCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgIHVybHM6IGltYWdlQXJyeSwgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRPcmRlck51bUlucHV0KGUpIHtcbiAgICAgIHRoaXMub3JkZXJOdW0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIHRha2VPcmRlcigpIHtcbiAgICAgIGlmICghdGhpcy5jYW5PcmRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dDb25maXJtRGF0YSgpO1xuICAgICAgdGhpcy5vcmRlclR5cGUgPSAyO1xuICAgICAgLy90aGlzLmRvVGFrZU9yZGVyKCk7XG4gICAgfSxcbiAgICB0YWtlQ2FydCgpIHtcbiAgICAgIGlmICghdGhpcy5jYW5PcmRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dDb25maXJtRGF0YSgpO1xuICAgICAgdGhpcy5vcmRlclR5cGUgPSAxO1xuICAgICAgLy90aGlzLmRvVGFrZUNhcnQoKTtcbiAgICB9LFxuICAgIHRha2VGYXZvcml0ZSgpIHtcbiAgICAgIGlmICh0aGlzLmlzRmF2b3JpdGUgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmdvb2RzVW5GYXZvcml0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nb29kc0Zhdm9yaXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZU1vZGVsKCkge1xuICAgICAgdGhpcy53aW5IZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLmhlaWdodCgwKS5zdGVwKCk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLmFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LCAxMDApXG4gICAgfSxcbiAgICBjb25maXJtVGFrZSgpIHsgLy/noa7lrprotK3nianovabmiJbogIXnm7TmjqXotK3kubBcbiAgICAgIGlmICh0aGlzLm9yZGVyVHlwZSA9PSAxKSB7XG4gICAgICAgIHRoaXMuZG9UYWtlQ2FydCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yZGVyVHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMuZG9UYWtlT3JkZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGppYUJ0blRhcChlKSB7XG4gICAgICB0aGlzLm9yZGVyTnVtKys7XG4gICAgfSxcbiAgICBqaWFuQnRuVGFwKCkge1xuICAgICAgaWYgKHRoaXMub3JkZXJOdW0gPiAxKSB7XG4gICAgICAgIHRoaXMub3JkZXJOdW0tLTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlbEF0dHIoZSkge1xuICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICB2YXIgbmFtZWlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZWlkO1xuICAgICAgdmFyIGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGV0YWlsLmdvb2RzU2t1TmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNrdVZhbExpc3QgPSB0aGlzLmRldGFpbC5nb29kc1NrdU5hbWVMaXN0W2ldLnNrdVZhbExpc3Q7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2t1VmFsTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciBza3VWYWwgPSBza3VWYWxMaXN0W2pdO1xuICAgICAgICAgIGlmIChza3VWYWwuc2t1TmFtZUlkID09IG5hbWVpZCkge1xuICAgICAgICAgICAgc2t1VmFsLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChza3VWYWwuc2t1VmFsSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgc2t1VmFsLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmRldGFpbC5nb29kc1NrdVZhbElkc1tpbmRleF0gPSBpZDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmRldGFpbC5nb29kc1NrdUxpc3QubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2t1VmFsSWRzID0gSlNPTi5wYXJzZSh0aGlzLmRldGFpbC5nb29kc1NrdUxpc3Rba10uc2t1VmFsSWRzKS50b0FycmF5O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29vZHNrdWlkcy4uLlwiICsgdGhpcy5kZXRhaWwuZ29vZHNTa3VMaXN0W2tdLnNrdVZhbElkcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGdvb2Rza3VpZHMuLi5cIiArIHRoaXMuZGV0YWlsLmdvb2RzU2t1VmFsSWRzKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJbXCIgKyB0aGlzLmRldGFpbC5nb29kc1NrdVZhbElkcy50b1N0cmluZygpICsgXCJdXCIgPT09IHRoaXMuZGV0YWlsLmdvb2RzU2t1TGlzdFtrXS5za3VWYWxJZHMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ29vZHNrdWlkcyBlcXVhbHMuLi5cIik7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbC5zdG9ja051bSA9IHRoaXMuZGV0YWlsLmdvb2RzU2t1TGlzdFtrXS5zdG9ja051bTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlsLnByaWNlID0gdGhpcy5kZXRhaWwuZ29vZHNTa3VMaXN0W2tdLnByaWNlO1xuICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aGlzLmRldGFpbC5uYW1lLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2dvb2RzX2RldGFpbD9pZD0nICsgdGhpcy5nb29kc0lkLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIl19