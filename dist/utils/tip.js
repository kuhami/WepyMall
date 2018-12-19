'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */

  _createClass(Tips, null, [{
    key: 'success',
    value: function success() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onHide = arguments[1];
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 500
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      wx.showToast({
        title: title,
        image: "../images/alert.png",
        mask: true,
        duration: 1500
      });
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var onHide = arguments[1];

      wx.showToast({
        title: title,
        image: "../images/error.png",
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: 'share',
    value: function share() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var url = arguments[1];
      var desc = arguments[2];

      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast("分享成功");
        }
      };
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRDs7Ozs7OzhCQUkyQztBQUFBLFVBQTVCQyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxVQUFoQkMsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDekNDLGlCQUFXLFlBQU07QUFDZkMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGlCQUFPQSxLQURJO0FBRVhLLGdCQUFNLFNBRks7QUFHWEMsZ0JBQU0sSUFISztBQUlYTCxvQkFBVUE7QUFKQyxTQUFiO0FBTUQsT0FQRCxFQU9HLEdBUEg7QUFRQSxVQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDaEIsZUFBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDUCxxQkFBVyxZQUFNO0FBQ2ZNO0FBQ0QsV0FGRCxFQUVHUCxRQUZIO0FBR0QsU0FKTSxDQUFQO0FBS0Q7QUFDRjs7QUFFRDs7Ozs7OzhCQUdzRDtBQUFBLFVBQXZDUyxJQUF1Qyx1RUFBaEMsRUFBZ0M7QUFBQSxVQUE1QkMsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZFgsS0FBYyx1RUFBTixJQUFNOztBQUNwRCxhQUFPLElBQUlPLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENOLFdBQUdTLFNBQUgsQ0FBYTtBQUNYWixpQkFBT0EsS0FESTtBQUVYYSxtQkFBU0gsSUFGRTtBQUdYSSxzQkFBWSxJQUhEO0FBSVhDLG1CQUFTLHNCQUFPO0FBQ2QsZ0JBQUlDLElBQUlDLE9BQVIsRUFBaUI7QUFDZlQsc0JBQVFHLE9BQVI7QUFDRCxhQUZELE1BRU8sSUFBSUssSUFBSUUsTUFBUixFQUFnQjtBQUNyQlQscUJBQU9FLE9BQVA7QUFDRDtBQUNGLFdBVlU7QUFXWFEsZ0JBQU0sbUJBQU87QUFDWFYsbUJBQU9FLE9BQVA7QUFDRDtBQWJVLFNBQWI7QUFlRCxPQWhCTSxDQUFQO0FBaUJEOzs7NEJBRWtEO0FBQUEsVUFBdENYLEtBQXNDLHVFQUE5QixFQUE4QjtBQUFBLFVBQTFCb0IsTUFBMEI7QUFBQSxVQUFsQmYsSUFBa0IsdUVBQVgsU0FBVzs7QUFDakRILGlCQUFXLFlBQU07QUFDZkMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGlCQUFPQSxLQURJO0FBRVhLLGdCQUFNQSxJQUZLO0FBR1hDLGdCQUFNLElBSEs7QUFJWEwsb0JBQVU7QUFKQyxTQUFiO0FBTUQsT0FQRCxFQU9HLEdBUEg7O0FBU0E7QUFDQSxVQUFJbUIsTUFBSixFQUFZO0FBQ1ZsQixtQkFBVyxZQUFNO0FBQ2ZrQjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0Q7QUFDRjs7QUFFRDs7Ozs7OzRCQUd5QjtBQUFBLFVBQVpwQixLQUFZLHVFQUFKLEVBQUk7O0FBQ3ZCRyxTQUFHQyxTQUFILENBQWE7QUFDWEosZUFBT0EsS0FESTtBQUVYcUIsZUFBTyxxQkFGSTtBQUdYZixjQUFNLElBSEs7QUFJWEwsa0JBQVU7QUFKQyxPQUFiO0FBTUQ7O0FBRUQ7Ozs7Ozs0QkFJaUM7QUFBQSxVQUFwQkQsS0FBb0IsdUVBQVosRUFBWTtBQUFBLFVBQVJvQixNQUFROztBQUMvQmpCLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNQTtBQUNBLFVBQUltQixNQUFKLEVBQVk7QUFDVmxCLG1CQUFXLFlBQU07QUFDZmtCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNGOztBQUVEOzs7Ozs7OEJBRzhCO0FBQUEsVUFBZnBCLEtBQWUsdUVBQVAsS0FBTzs7QUFDNUIsVUFBSUYsS0FBS0MsU0FBVCxFQUFvQjtBQUNsQjtBQUNEO0FBQ0RELFdBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQUksU0FBR21CLFdBQUgsQ0FBZTtBQUNidEIsZUFBT0EsS0FETTtBQUViTSxjQUFNO0FBRk8sT0FBZjtBQUlEOztBQUVEOzs7Ozs7NkJBR2dCO0FBQ2QsVUFBSVIsS0FBS0MsU0FBVCxFQUFvQjtBQUNsQkQsYUFBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBSSxXQUFHb0IsV0FBSDtBQUNEO0FBQ0Y7Ozs0QkFFbUM7QUFBQSxVQUF2QnZCLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxVQUFYd0IsR0FBVztBQUFBLFVBQU5DLElBQU07O0FBQ2xDLGFBQU87QUFDTHpCLGVBQU9BLEtBREY7QUFFTDBCLGNBQU1GLEdBRkQ7QUFHTEMsY0FBTUEsSUFIRDtBQUlMVixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCbEIsZUFBSzZCLEtBQUwsQ0FBVyxNQUFYO0FBQ0Q7QUFOSSxPQUFQO0FBUUQ7Ozs7OztBQUdIOzs7OztrQkF0SXFCN0IsSTtBQXlJckJBLEtBQUtDLFNBQUwsR0FBaUIsS0FBakIiLCJmaWxlIjoidGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIOW8ueWHuuaPkOekuuahhlxuICAgKi9cblxuICBzdGF0aWMgc3VjY2Vzcyh0aXRsZSA9ICcnLCBkdXJhdGlvbiA9IDUwMCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0odGV4dCA9ICcnLCBwYXlsb2FkID0ge30sIHRpdGxlID0gXCLmj5DnpLpcIikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVzID0+IHtcbiAgICAgICAgICByZWplY3QocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRvYXN0KHRpdGxlID0gJycsIG9uSGlkZSwgaWNvbiA9IFwic3VjY2Vzc1wiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGljb246IGljb24sXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG5cbiAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcbiAgICBpZiAob25IaWRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25IaWRlKCk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorablkYrmoYZcbiAgICovXG4gIHN0YXRpYyBhbGVydCh0aXRsZSA9ICcnKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9hbGVydC5wbmdcIixcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogMTUwMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOmUmeivr+ahhlxuICAgKi9cblxuICBzdGF0aWMgZXJyb3IodGl0bGUgPSAnJywgb25IaWRlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9lcnJvci5wbmdcIixcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyh0aXRsZSA9IFwi5Yqg6L295LitXCIpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgVGlwcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lrozmr5VcbiAgICovXG4gIHN0YXRpYyBsb2FkZWQoKSB7XG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XG4gICAgICBUaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2hhcmUodGl0bGUgPSAnJywgdXJsLCBkZXNjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHBhdGg6IHVybCxcbiAgICAgIGRlc2M6IGRlc2MsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgVGlwcy50b2FzdChcIuWIhuS6q+aIkOWKn1wiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICog6Z2Z5oCB5Y+Y6YeP77yM5piv5ZCm5Yqg6L295LitXG4gKi9cblRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XG4iXX0=