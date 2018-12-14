"use strict";

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
    key: "success",
    value: function success(title) {
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
    key: "confirm",
    value: function confirm(text) {
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
    key: "toast",
    value: function toast(title, onHide) {
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
    key: "alert",
    value: function alert(title) {
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
    key: "error",
    value: function error(title, onHide) {
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
    key: "loading",
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
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRDs7Ozs7OzRCQUllQyxLLEVBQXVCO0FBQUEsVUFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3BDQyxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYSixpQkFBT0EsS0FESTtBQUVYSyxnQkFBTSxTQUZLO0FBR1hDLGdCQUFNLElBSEs7QUFJWEwsb0JBQVVBO0FBSkMsU0FBYjtBQU1ELE9BUEQsRUFPRyxHQVBIO0FBUUEsVUFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCLGVBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1AscUJBQVcsWUFBTTtBQUNmTTtBQUNELFdBRkQsRUFFR1AsUUFGSDtBQUdELFNBSk0sQ0FBUDtBQUtEO0FBQ0Y7O0FBRUQ7Ozs7Ozs0QkFHZVMsSSxFQUFrQztBQUFBLFVBQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxVQUFkWCxLQUFjLHVFQUFOLElBQU07O0FBQy9DLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q04sV0FBR1MsU0FBSCxDQUFhO0FBQ1haLGlCQUFPQSxLQURJO0FBRVhhLG1CQUFTSCxJQUZFO0FBR1hJLHNCQUFZLElBSEQ7QUFJWEMsbUJBQVMsc0JBQU87QUFDZCxnQkFBSUMsSUFBSUMsT0FBUixFQUFpQjtBQUNmVCxzQkFBUUcsT0FBUjtBQUNELGFBRkQsTUFFTyxJQUFJSyxJQUFJRSxNQUFSLEVBQWdCO0FBQ3JCVCxxQkFBT0UsT0FBUDtBQUNEO0FBQ0YsV0FWVTtBQVdYUSxnQkFBTSxtQkFBTztBQUNYVixtQkFBT0UsT0FBUDtBQUNEO0FBYlUsU0FBYjtBQWVELE9BaEJNLENBQVA7QUFpQkQ7OzswQkFFWVgsSyxFQUFPb0IsTSxFQUEwQjtBQUFBLFVBQWxCZixJQUFrQix1RUFBWCxTQUFXOztBQUM1Q0gsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU1BLElBRks7QUFHWEMsZ0JBQU0sSUFISztBQUlYTCxvQkFBVTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDs7QUFTQTtBQUNBLFVBQUltQixNQUFKLEVBQVk7QUFDVmxCLG1CQUFXLFlBQU07QUFDZmtCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNGOztBQUVEOzs7Ozs7MEJBR2FwQixLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNRDs7QUFFRDs7Ozs7OzBCQUlhRCxLLEVBQU9vQixNLEVBQVE7QUFDMUJqQixTQUFHQyxTQUFILENBQWE7QUFDWEosZUFBT0EsS0FESTtBQUVYcUIsZUFBTyxxQkFGSTtBQUdYZixjQUFNLElBSEs7QUFJWEwsa0JBQVU7QUFKQyxPQUFiO0FBTUE7QUFDQSxVQUFJbUIsTUFBSixFQUFZO0FBQ1ZsQixtQkFBVyxZQUFNO0FBQ2ZrQjtBQUNELFNBRkQsRUFFRyxHQUZIO0FBR0Q7QUFDRjs7QUFFRDs7Ozs7OzhCQUc4QjtBQUFBLFVBQWZwQixLQUFlLHVFQUFQLEtBQU87O0FBQzVCLFVBQUlGLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEI7QUFDRDtBQUNERCxXQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0FJLFNBQUdtQixXQUFILENBQWU7QUFDYnRCLGVBQU9BLEtBRE07QUFFYk0sY0FBTTtBQUZPLE9BQWY7QUFJRDs7QUFFRDs7Ozs7OzZCQUdnQjtBQUNkLFVBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7MEJBRVl2QixLLEVBQU93QixHLEVBQUtDLEksRUFBTTtBQUM3QixhQUFPO0FBQ0x6QixlQUFPQSxLQURGO0FBRUwwQixjQUFNRixHQUZEO0FBR0xDLGNBQU1BLElBSEQ7QUFJTFYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7Ozs7QUFHSDs7Ozs7a0JBdElxQjdCLEk7QUF5SXJCQSxLQUFLQyxTQUFMLEdBQWlCLEtBQWpCIiwiZmlsZSI6InRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o+Q56S65LiO5Yqg6L295bel5YW357G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiDlvLnlh7rmj5DnpLrmoYZcbiAgICovXG5cbiAgc3RhdGljIHN1Y2Nlc3ModGl0bGUsIGR1cmF0aW9uID0gNTAwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye656Gu6K6k56qX5Y+jXG4gICAqL1xuICBzdGF0aWMgY29uZmlybSh0ZXh0LCBwYXlsb2FkID0ge30sIHRpdGxlID0gXCLmj5DnpLpcIikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogcmVzID0+IHtcbiAgICAgICAgICByZWplY3QocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRvYXN0KHRpdGxlLCBvbkhpZGUsIGljb24gPSBcInN1Y2Nlc3NcIikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K2m5ZGK5qGGXG4gICAqL1xuICBzdGF0aWMgYWxlcnQodGl0bGUpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2FsZXJ0LnBuZ1wiLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog6ZSZ6K+v5qGGXG4gICAqL1xuXG4gIHN0YXRpYyBlcnJvcih0aXRsZSwgb25IaWRlKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGltYWdlOiBcIi4uL2ltYWdlcy9lcnJvci5wbmdcIixcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXG4gICAgaWYgKG9uSGlkZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9uSGlkZSgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyh0aXRsZSA9IFwi5Yqg6L295LitXCIpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgVGlwcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lrozmr5VcbiAgICovXG4gIHN0YXRpYyBsb2FkZWQoKSB7XG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XG4gICAgICBUaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2hhcmUodGl0bGUsIHVybCwgZGVzYykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIFRpcHMudG9hc3QoXCLliIbkuqvmiJDlip9cIik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIOmdmeaAgeWPmOmHj++8jOaYr+WQpuWKoOi9veS4rVxuICovXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuIl19