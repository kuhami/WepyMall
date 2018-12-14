'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Classify = function (_wepy$page) {
  _inherits(Classify, _wepy$page);

  function Classify() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Classify);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Classify.__proto__ || Object.getPrototypeOf(Classify)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '分类'
    }, _this.components = {}, _this.data = {
      scrollTop: 100,
      windowHeight: 0,
      list: {},
      //一级分类数据
      rootcateList: {},
      //二级三级分类数据
      childcateList: {}
    }, _this.computed = {}, _this.methods = {
      changeCate: function changeCate(e) {
        var code = e.currentTarget.dataset.code;
        this.getChildCate(code);
        _wepy2.default.setStorageSync(_constant.SEL_CLASS_CODE, code);
        //设置一级分类的选中状态
        for (var i = 0; i < this.rootcateList.length; i++) {
          var rootCate = this.rootcateList[i];
          rootCate.active = false;
          if (rootCate.code == code) {
            rootCate.active = true;
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
          path: '/pages/classify',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Classify, [{
    key: 'getChildCate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rootCateCode) {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.childGoodsCatetoryList({
                  query: {
                    rootCategoryCode: rootCateCode
                  }
                });

              case 2:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.childcateList = json.data.list;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getChildCate(_x) {
        return _ref2.apply(this, arguments);
      }

      return getChildCate;
    }()
  }, {
    key: 'getRootCateTopLevel',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json, selCode, selRottCateCode, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.rootCtegoryList({
                  query: {}
                });

              case 2:
                json = _context2.sent;

                if (json.data.code == 0) {
                  this.rootcateList = json.data.list;
                  if (this.rootcateList.length > 0) {
                    selCode = wx.getStorageSync(_constant.SEL_CLASS_CODE);
                    selRottCateCode = this.rootcateList[0].code;

                    if (selCode.length == 0) {
                      this.rootcateList[0].active = true;
                    } else {
                      for (i = 0; i < this.rootcateList.length; i++) {
                        if (selCode == this.rootcateList[i].code) {
                          selRottCateCode = this.rootcateList[i].code;
                          this.rootcateList[i].active = true;
                        }
                      }
                    }

                    this.getChildCate(selRottCateCode);
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRootCateTopLevel() {
        return _ref3.apply(this, arguments);
      }

      return getRootCateTopLevel;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var systemInfo = wx.getStorageSync(_constant.SYSTEM_INFO);
      this.windowHeight = systemInfo.windowHeight;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getRootCateTopLevel();
    }
  }]);

  return Classify;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Classify , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkNsYXNzaWZ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2Nyb2xsVG9wIiwid2luZG93SGVpZ2h0IiwibGlzdCIsInJvb3RjYXRlTGlzdCIsImNoaWxkY2F0ZUxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaGFuZ2VDYXRlIiwiZSIsImNvZGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImdldENoaWxkQ2F0ZSIsIndlcHkiLCJzZXRTdG9yYWdlU3luYyIsIlNFTF9DTEFTU19DT0RFIiwiaSIsImxlbmd0aCIsInJvb3RDYXRlIiwiYWN0aXZlIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwiZGV0YWlsIiwibmFtZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImV2ZW50cyIsInJvb3RDYXRlQ29kZSIsImFwaSIsImNoaWxkR29vZHNDYXRldG9yeUxpc3QiLCJxdWVyeSIsInJvb3RDYXRlZ29yeUNvZGUiLCJqc29uIiwidGlwIiwiZXJyb3IiLCJtc2ciLCIkYXBwbHkiLCJyb290Q3RlZ29yeUxpc3QiLCJzZWxDb2RlIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInNlbFJvdHRDYXRlQ29kZSIsInRoYXQiLCJzeXN0ZW1JbmZvIiwiU1lTVEVNX0lORk8iLCJnZXRSb290Q2F0ZVRvcExldmVsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUtBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEdBRE47QUFFTEMsb0JBQWMsQ0FGVDtBQUdMQyxZQUFNLEVBSEQ7QUFJTDtBQUNB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QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCx5QkFBS1AsWUFBTCxDQUFrQm1DLGVBQWxCO0FBQ0Q7QUFDRixpQkFsQkQsTUFrQk87QUFDTFIsZ0NBQUlDLEtBQUosQ0FBVUYsS0FBS3ZDLElBQUwsQ0FBVTBDLEdBQXBCO0FBQ0Q7QUFDRCxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1AsVUFBSU0sT0FBTyxJQUFYO0FBQ0EsVUFBSUMsYUFBYUosR0FBR0MsY0FBSCxDQUFrQkkscUJBQWxCLENBQWpCO0FBQ0EsV0FBS2pELFlBQUwsR0FBb0JnRCxXQUFXaEQsWUFBL0I7QUFDQSxXQUFLeUMsTUFBTDtBQUVEOzs7NkJBRVE7QUFDUCxXQUFLUyxtQkFBTDtBQUNEOzs7O0VBdEVtQ3RDLGVBQUt1QyxJOztrQkFBdEJ6RCxRIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB7XG4gIFNZU1RFTV9JTkZPLFxuICBTRUxfQ0xBU1NfQ09ERVxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcblxuaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpZnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexuycsXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzY3JvbGxUb3A6IDEwMCxcbiAgICB3aW5kb3dIZWlnaHQ6IDAsXG4gICAgbGlzdDoge30sXG4gICAgLy/kuIDnuqfliIbnsbvmlbDmja5cbiAgICByb290Y2F0ZUxpc3Q6IHt9LFxuICAgIC8v5LqM57qn5LiJ57qn5YiG57G75pWw5o2uXG4gICAgY2hpbGRjYXRlTGlzdDoge31cbiAgfVxuXG4gIGFzeW5jIGdldENoaWxkQ2F0ZShyb290Q2F0ZUNvZGUpIHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNoaWxkR29vZHNDYXRldG9yeUxpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcm9vdENhdGVnb3J5Q29kZTogcm9vdENhdGVDb2RlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcbiAgICAgIHRoaXMuY2hpbGRjYXRlTGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBhc3luYyBnZXRSb290Q2F0ZVRvcExldmVsKCkge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucm9vdEN0ZWdvcnlMaXN0KHtcbiAgICAgIHF1ZXJ5OiB7fVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGlzLnJvb3RjYXRlTGlzdCA9IGpzb24uZGF0YS5saXN0O1xuICAgICAgaWYgKHRoaXMucm9vdGNhdGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHNlbENvZGUgPSB3eC5nZXRTdG9yYWdlU3luYyhTRUxfQ0xBU1NfQ09ERSk7XG4gICAgICAgIHZhciBzZWxSb3R0Q2F0ZUNvZGUgPSB0aGlzLnJvb3RjYXRlTGlzdFswXS5jb2RlO1xuICAgICAgICBpZiAoc2VsQ29kZS5sZW5ndGg9PTApIHtcbiAgICAgICAgICB0aGlzLnJvb3RjYXRlTGlzdFswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb290Y2F0ZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzZWxDb2RlID09IHRoaXMucm9vdGNhdGVMaXN0W2ldLmNvZGUpIHtcbiAgICAgICAgICAgICAgc2VsUm90dENhdGVDb2RlID0gdGhpcy5yb290Y2F0ZUxpc3RbaV0uY29kZTtcbiAgICAgICAgICAgICAgdGhpcy5yb290Y2F0ZUxpc3RbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldENoaWxkQ2F0ZShzZWxSb3R0Q2F0ZUNvZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBzeXN0ZW1JbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG4gICAgdGhpcy4kYXBwbHkoKTtcblxuICB9XG5cbiAgb25TaG93KCkge1xuICAgIHRoaXMuZ2V0Um9vdENhdGVUb3BMZXZlbCgpO1xuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNoYW5nZUNhdGUoZSkge1xuICAgICAgbGV0IGNvZGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2RlO1xuICAgICAgdGhpcy5nZXRDaGlsZENhdGUoY29kZSk7XG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFNFTF9DTEFTU19DT0RFLCBjb2RlKTtcbiAgICAgIC8v6K6+572u5LiA57qn5YiG57G755qE6YCJ5Lit54q25oCBXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm9vdGNhdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByb290Q2F0ZSA9IHRoaXMucm9vdGNhdGVMaXN0W2ldO1xuICAgICAgICByb290Q2F0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJvb3RDYXRlLmNvZGUgPT0gY29kZSkge1xuICAgICAgICAgIHJvb3RDYXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRoaXMuZGV0YWlsLm5hbWUsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbn1cblxuIl19