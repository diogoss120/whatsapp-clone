"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBase64 = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var toBase64 =
/*#__PURE__*/
function () {
  function toBase64() {
    _classCallCheck(this, toBase64);
  }

  _createClass(toBase64, null, [{
    key: "getMimeType",
    value: function getMimeType(urlBase64) {
      var regex = /^data:(.+);base64,(.*)$/;
      var result = urlBase64.match(regex);
      return result[1];
    }
  }, {
    key: "toFile",
    value: function toFile(urlBase64) {
      var mimeType = toBase64.getMimeType(urlBase64);
      var ext = mimetype.split('/')[1];
      var fileName = "file".concat(Date.now(), ".").concat(ext);
      fetch(urlBase64).then(function (res) {
        return res.ArrayBuffer();
      }).then(function (buffer) {
        return new File([buffer], fileName, {
          type: mimetype
        });
      });
    }
  }]);

  return toBase64;
}();

exports.toBase64 = toBase64;