"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base64 = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base64 =
/*#__PURE__*/
function () {
  function Base64() {
    _classCallCheck(this, Base64);
  }

  _createClass(Base64, null, [{
    key: "getMimeType",
    value: function getMimeType(urlBase64) {
      var regex = /^data:(.+);base64,(.*)$/;
      var result = urlBase64.match(regex);
      console.log('regex', result);
      return result[1];
    }
  }, {
    key: "toFile",
    value: function toFile(urlBase64) {
      var mimeType = Base64.getMimeType(urlBase64);
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

  return Base64;
}();

exports.Base64 = Base64;