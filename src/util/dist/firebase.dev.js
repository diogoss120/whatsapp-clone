"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Firebase = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Firebase =
/*#__PURE__*/
function () {
  function Firebase() {
    _classCallCheck(this, Firebase);

    this.config = {
      apiKey: "AIzaSyBpCCKljhudadWluZuJzABtk2usvR0Fxb0",
      authDomain: "whatsapp-clone-23b8e.firebaseapp.com",
      projectId: "whatsapp-clone-23b8e",
      storageBucket: "gs://whatsapp-clone-23b8e.appspot.com",
      //storageBucket: "whatsapp-clone-23b8e.appspot.com",
      messagingSenderId: "845646842289",
      appId: "1:845646842289:web:63b2bcf7591e6fd5c51590",
      measurementId: "G-W02YSZMTVL"
    };
    this.init();
  }

  _createClass(Firebase, [{
    key: "init",
    value: function init() {
      // Initialize Firebase
      if (!window.initializedFirebase) {
        _app["default"].initializeApp(this.config); //firebase.analytics();


        _app["default"].firestore().settings({
          timestampsInSnapshots: true
        });

        window.initializedFirebase = true;
      }
    }
  }, {
    key: "initAuth",
    value: function initAuth() {
      return new Promise(function (resolve, reject) {
        var provider = new _app["default"].auth.GoogleAuthProvider();

        _app["default"].auth().signInWithPopup(provider).then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;
          resolve({
            user: user,
            token: token
          });
        })["catch"](function (err) {
          reject(err);
          console.error(err);
        });
      });
    }
  }], [{
    key: "db",
    value: function db() {
      return _app["default"].firestore();
    }
  }, {
    key: "hd",
    value: function hd() {
      return _app["default"].storage();
    }
  }]);

  return Firebase;
}();

exports.Firebase = Firebase;