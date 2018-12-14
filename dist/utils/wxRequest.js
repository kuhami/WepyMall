'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var API_SECRET_KEY = 'www.mall.cycle.com';
var TIMESTAMP = _util2.default.getCurrentTime();
var SIGN = _md2.default.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading();
                        data = params.query || {};

                        data.sign = SIGN;
                        data.time = TIMESTAMP;
                        _context.next = 6;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 6:
                        res = _context.sent;

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUElfU0VDUkVUX0tFWSIsIlRJTUVTVEFNUCIsInV0aWwiLCJnZXRDdXJyZW50VGltZSIsIlNJR04iLCJtZDUiLCJoZXhfbWQ1IiwidG9Mb3dlckNhc2UiLCJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5Iiwic2lnbiIsInRpbWUiLCJ3ZXB5IiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInJlcyIsImxvYWRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLG9CQUF2QjtBQUNBLElBQU1DLFlBQVlDLGVBQUtDLGNBQUwsRUFBbEI7QUFDQSxJQUFNQyxPQUFPQyxhQUFJQyxPQUFKLENBQVksQ0FBQ0wsWUFBWUQsY0FBYixFQUE2Qk8sV0FBN0IsRUFBWixDQUFiOztBQUVBLElBQU1DO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLHNDQUFJQyxPQUFKO0FBQ0lDLDRCQUZVLEdBRUhKLE9BQU9LLEtBQVAsSUFBZ0IsRUFGYjs7QUFHZEQsNkJBQUtFLElBQUwsR0FBWVgsSUFBWjtBQUNBUyw2QkFBS0csSUFBTCxHQUFZZixTQUFaO0FBSmM7QUFBQSwrQkFLRWdCLGVBQUtDLE9BQUwsQ0FBYTtBQUN6QlIsaUNBQUtBLEdBRG9CO0FBRXpCUyxvQ0FBUVYsT0FBT1UsTUFBUCxJQUFpQixLQUZBO0FBR3pCTixrQ0FBTUEsSUFIbUI7QUFJekJPLG9DQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQjtBQUppQix5QkFBYixDQUxGOztBQUFBO0FBS1ZDLDJCQUxVOztBQVdkVixzQ0FBSVcsTUFBSjtBQVhjLHlEQVlQRCxHQVpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFnQkFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDYmhCO0FBRGEsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNSc7XG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xuXG5jb25zdCBBUElfU0VDUkVUX0tFWSA9ICd3d3cubWFsbC5jeWNsZS5jb20nXG5jb25zdCBUSU1FU1RBTVAgPSB1dGlsLmdldEN1cnJlbnRUaW1lKClcbmNvbnN0IFNJR04gPSBtZDUuaGV4X21kNSgoVElNRVNUQU1QICsgQVBJX1NFQ1JFVF9LRVkpLnRvTG93ZXJDYXNlKCkpXG5cbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgICB0aXAubG9hZGluZygpO1xuICAgIGxldCBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9O1xuICAgIGRhdGEuc2lnbiA9IFNJR047XG4gICAgZGF0YS50aW1lID0gVElNRVNUQU1QO1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pO1xuICAgIHRpcC5sb2FkZWQoKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB3eFJlcXVlc3Rcbn1cbiJdfQ==