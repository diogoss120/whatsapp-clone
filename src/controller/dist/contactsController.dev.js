"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactsController = void 0;

var _classEvent = require("../util/classEvent");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ContactsController =
/*#__PURE__*/
function (_ClassEvent) {
  _inherits(ContactsController, _ClassEvent);

  function ContactsController(modalEl, user) {
    var _this;

    _classCallCheck(this, ContactsController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactsController).call(this));
    _this._user = user;
    _this._modalEl = modalEl;
    _this._listEl = document.querySelector('#contact-list');
    return _this;
  }

  _createClass(ContactsController, [{
    key: "open",
    value: function open() {
      var _this2 = this;

      this._modalEl.show();

      this._user.getContacts().then(function (contacts) {
        _this2._listEl.innerHTML = '';
        contacts.forEach(function (contact) {
          var div = document.createElement('div');
          div.innerHTML = "\n                <div class=\"contact-list-item\" style=\"z-index: 427; height: 72px; display: contents;\">\n                    <div class=\"JSbIY\">\n                        <div tabindex=\"-1\">\n                            <div class=\"_2EXPL aZ91u\">\n                                <div class=\"dIyEr\">\n                                    <div class=\"_1WliW\" style=\"height: 49px; width: 49px;\">\n                                        <img src=\"#\" class=\"Qgzj8 gqwaM contact-photo\" style=\"display:none\">\n                                        <div class=\"_3ZW2E\">\n                                            <span data-icon=\"default-user\">\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 212 212\" width=\"212\" height=\"212\">\n                                                    <path fill=\"#DFE5E7\" d=\"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z\"></path>\n                                                    <g fill=\"#FFF\">\n                                                        <path d=\"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z\"></path>\n                                                    </g>\n                                                </svg>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"_3j7s9\">\n                                    <div class=\"_2FBdJ\">\n                                        <div class=\"_25Ooe\">\n                                            <span dir=\"auto\" class=\"_1wjpf contact-name\">".concat(contact.name, "</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"_1AwDx\">\n                                        <div class=\"_itDl\"></div>\n                                        <div class=\"_3Bxar\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>");

          if (contact.photo) {
            var img = div.querySelector('.contact-photo');
            img.src = contact.photo;
            img.show();
          }

          div.on('click', function (e) {
            _this2.trigger('select', contact);

            _this2.close();
          });

          _this2._listEl.appendChild(div);
        });
      });
    }
  }, {
    key: "close",
    value: function close() {
      this._modalEl.hide();
    }
  }]);

  return ContactsController;
}(_classEvent.ClassEvent);

exports.ContactsController = ContactsController;