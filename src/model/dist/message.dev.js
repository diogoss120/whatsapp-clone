"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _firebase = require("../util/firebase");

var _format = require("../util/format");

var _model = require("./model");

var _base = require("../util/base64");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Message =
/*#__PURE__*/
function (_Model) {
  _inherits(Message, _Model);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this));
  }

  _createClass(Message, [{
    key: "getViewElement",
    value: function getViewElement() {
      var me = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var div = document.createElement('div');
      div.className = 'message';

      switch (this.type) {
        case 'contact':
          div.innerHTML = "\n                <div class=\"_3_7SH kNKwo tail\">\n                    <span class=\"tail-container\"></span>\n                    <span class=\"tail-container highlight\"></span>\n                    <div class=\"_1YNgi copyable-text\">\n                        <div class=\"_3DZ69\" role=\"button\">\n                            <div class=\"_20hTB\">\n                                <div class=\"_1WliW\" style=\"height: 49px; width: 49px;\">\n                                    <img src=\"#\" class=\"Qgzj8 gqwaM photo-contact-sended\" style=\"display:none\">\n                                    <div class=\"_3ZW2E\">\n                                        <span data-icon=\"default-user\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 212 212\" width=\"212\" height=\"212\">\n                                                <path fill=\"#DFE5E7\" d=\"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z\"></path>\n                                                <g fill=\"#FFF\">\n                                                    <path d=\"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z\"></path>\n                                                </g>\n                                            </svg>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"_1lC8v\">\n                                <div dir=\"ltr\" class=\"_3gkvk selectable-text invisible-space copyable-text\">Nome do Contato Anexado</div>\n                            </div>\n                            <div class=\"_3a5-b\">\n                                <div class=\"_1DZAH\" role=\"button\">\n                                    <span class=\"message-time\">17:01</span>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"_6qEXM\">\n                            <div class=\"btn-message-send\" role=\"button\">Enviar mensagem</div>\n                        </div>\n                    </div>\n\n                </div>\n                ";
          break;

        case 'image':
          div.innerHTML = "\n                <div class=\"_3_7SH _3qMSo\">\n                    <div class=\"KYpDv\">\n                        <div>\n                            <div class=\"_3v3PK\" style=\"width: 330px; height: 330px;\">\n                                <div class=\"_34Olu\">\n                                    <div class=\"_2BzIU\">\n                                        <div class=\"_2X3l6\">\n                                            <svg class=\"_1UDDE\" width=\"50\" height=\"50\" viewBox=\"0 0 43 43\">\n                                                <circle class=\"_3GbTq _2wGBy\" cx=\"21.5\" cy=\"21.5\" r=\"20\" fill=\"none\" stroke-width=\"3\"></circle>\n                                            </svg>\n                                        </div>\n                                        <div class=\"_1l3ap\">\n                                            <span data-icon=\"media-disabled\" class=\"\">\n                                                <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 44 44\" width=\"44\" height=\"44\">\n                                                    <path fill=\"#FFF\" fill-opacity=\".4\" d=\"M29.377 16.099l-1.475-1.475L22 20.525l-5.901-5.901-1.476 1.475L20.525 22l-5.901 5.901 1.476 1.475 5.9-5.901 5.901 5.901 1.475-1.475L23.475 22l5.902-5.901z\"></path>\n                                                </svg>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <img src=\"".concat(this.content, "\" class=\"_1JVSX message-photo\" style=\"width: 100%; display:none\">\n                                <div class=\"_1i3Za\"></div>\n                            </div>\n                            <div class=\"_2TvOE\">\n                                <div class=\"_1DZAH text-white\" role=\"button\">\n                                    <span class=\"message-time\">17:22</span>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"_3S8Q-\" role=\"button\">\n                        <span data-icon=\"forward-chat\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" width=\"25\" height=\"25\">\n                                <path fill=\"#FFF\" d=\"M14.2 9.5V6.1l5.9 5.9-5.9 6v-3.5c-4.2 0-7.2 1.4-9.3 4.3.8-4.2 3.4-8.4 9.3-9.3z\"></path>\n                            </svg>\n                        </span>\n                    </div>\n                </div>\n                ");
          div.querySelector('.message-photo'.on('load', function () {
            div.querySelector('.message-photo').show();
            div.querySelector('._34Olu').hide();
            div.querySelector('._3v3PK').css({
              height: 'auto'
            });
          }));
          break;

        case 'audio':
          div.innerHTML = "\n                    <div class=\"_3_7SH _17oKL\">\n                        <div class=\"_2N_Df LKbsn\">\n                            <div class=\"_2jfIu\">\n                                <div class=\"_2cfqh\">\n                                    <div class=\"_1QMEq _1kZiz fS1bA\">\n                                        <div class=\"E5U9C\">\n                                            <svg class=\"_1UDDE\" width=\"34\" height=\"34\" viewBox=\"0 0 43 43\">\n                                                <circle class=\"_3GbTq _37WZ9\" cx=\"21.5\" cy=\"21.5\" r=\"20\" fill=\"none\" stroke-width=\"3\"></circle>\n                                            </svg>\n                                            <button class=\"_2pQE3\" style=\"display:none\">\n                                                <span data-icon=\"audio-play\">\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 34\" width=\"34\" height=\"34\">\n                                                        <path fill=\"#263238\" fill-opacity=\".5\" d=\"M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z\"></path>\n                                                    </svg>\n                                                </span>\n                                            </button>\n                                            <button class=\"_2pQE3\">\n                                                <span data-icon=\"audio-pause\">\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 34\" width=\"34\" height=\"34\">\n                                                        <path fill=\"#263238\" fill-opacity=\".5\" d=\"M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z\"></path>\n                                                    </svg>\n                                                </span>\n                                            </button>\n                                        </div>\n                                        <div class=\"_1_Gu6\">\n                                            <div class=\"message-audio-duration\">0:05</div>\n                                            <div class=\"_1sLSi\">\n                                                <span class=\"nDKsM\" style=\"width: 0%;\"></span>\n                                                <input type=\"range\" min=\"0\" max=\"100\" class=\"_3geJ8\" value=\"0\">\n                                                <audio src=\"#\" preload=\"auto\"></audio>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"_1mbqw\">\n                                    <div class=\"QnDup\">\n                                        <span data-icon=\"ptt-out-blue\">\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19 26\" width=\"19\" height=\"26\">\n                                                <path fill=\"#DDF6C9\" d=\"M9.217 24.401c-1.158 0-2.1-.941-2.1-2.1v-2.366c-2.646-.848-4.652-3.146-5.061-5.958l-.052-.357-.003-.081a2.023 2.023 0 0 1 .571-1.492c.39-.404.939-.637 1.507-.637h.3c.254 0 .498.044.724.125v-6.27A4.27 4.27 0 0 1 9.367 1a4.27 4.27 0 0 1 4.265 4.265v6.271c.226-.081.469-.125.723-.125h.3c.564 0 1.112.233 1.501.64s.597.963.571 1.526c0 .005.001.124-.08.6-.47 2.703-2.459 4.917-5.029 5.748v2.378c0 1.158-.942 2.1-2.1 2.1h-.301v-.002z\"></path>\n                                                <path fill=\"#03A9F4\" d=\"M9.367 15.668a2.765 2.765 0 0 0 2.765-2.765V5.265a2.765 2.765 0 0 0-5.529 0v7.638a2.764 2.764 0 0 0 2.764 2.765zm5.288-2.758h-.3a.64.64 0 0 0-.631.598l-.059.285a4.397 4.397 0 0 1-4.298 3.505 4.397 4.397 0 0 1-4.304-3.531l-.055-.277a.628.628 0 0 0-.629-.579h-.3a.563.563 0 0 0-.579.573l.04.278a5.894 5.894 0 0 0 5.076 4.978v3.562c0 .33.27.6.6.6h.3c.33 0 .6-.27.6-.6V18.73c2.557-.33 4.613-2.286 5.051-4.809.057-.328.061-.411.061-.411a.57.57 0 0 0-.573-.6z\"></path>\n                                            </svg>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"_2fuJy\">\n                                    <div class=\"_1WliW\" style=\"height: 55px; width: 55px;\">\n                                        <img src=\"#\" class=\"Qgzj8 gqwaM message-photo\" style=\"display:none\">\n                                        <div class=\"_3ZW2E\">\n                                            <span data-icon=\"default-user\">\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 212 212\" width=\"212\" height=\"212\">\n                                                    <path fill=\"#DFE5E7\" d=\"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z\"></path>\n                                                    <g fill=\"#FFF\">\n                                                        <path d=\"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z\"></path>\n                                                    </g>\n                                                </svg>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"_27K_5\">\n                                <div class=\"_1DZAH\" role=\"button\">\n                                    <span class=\"message-time\">17:48</span>\n                                    \n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"_3S8Q-\" role=\"button\">\n                            <span data-icon=\"forward-chat\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" width=\"25\" height=\"25\">\n                                    <path fill=\"#FFF\" d=\"M14.2 9.5V6.1l5.9 5.9-5.9 6v-3.5c-4.2 0-7.2 1.4-9.3 4.3.8-4.2 3.4-8.4 9.3-9.3z\"></path>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                ";
          break;

        case 'document':
          div.innerHTML = "\n                <div class=\"_3_7SH _1ZPgd\">\n                    <div class=\"_1fnMt _2CORf\">\n                        <a class=\"_1vKRe\" href=\"#\">\n                            <div class=\"_2jTyA\" style=\"background-image: url()\"></div>\n                            <div class=\"_12xX7\">\n                                <div class=\"_3eW69\">\n                                    <div class=\"JdzFp message-file-icon icon-doc-pdf\"></div>\n                                </div>\n                                <div class=\"nxILt\">\n                                    <span dir=\"auto\" class=\"message-filename\">Arquivo.pdf</span>\n                                </div>\n                                <div class=\"_17viz\">\n                                    <span data-icon=\"audio-download\" class=\"message-file-download\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 34 34\" width=\"34\" height=\"34\">\n                                            <path fill=\"#263238\" fill-opacity=\".5\" d=\"M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2m0-1C8.2 1 1 8.2 1 17s7.2 16 16 16 16-7.2 16-16S25.8 1 17 1z\"></path>\n                                            <path fill=\"#263238\" fill-opacity=\".5\" d=\"M22.4 17.5h-3.2v-6.8c0-.4-.3-.7-.7-.7h-3.2c-.4 0-.7.3-.7.7v6.8h-3.2c-.6 0-.8.4-.4.8l5 5.3c.5.7 1 .5 1.5 0l5-5.3c.7-.5.5-.8-.1-.8z\"></path>\n                                        </svg>\n                                    </span>\n                                    <div class=\"_3SUnz message-file-load\" style=\"display:none\">\n                                        <svg class=\"_1UDDE\" width=\"32\" height=\"32\" viewBox=\"0 0 43 43\">\n                                            <circle class=\"_3GbTq _37WZ9\" cx=\"21.5\" cy=\"21.5\" r=\"20\" fill=\"none\" stroke-width=\"3\"></circle>\n                                        </svg>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                        <div class=\"_3cMIj\">\n                            <span class=\"PyPig message-file-info\">32 p\xE1ginas</span>\n                            <span class=\"PyPig message-file-type\">PDF</span>\n                            <span class=\"PyPig message-file-size\">4 MB</span>\n                        </div>\n                        <div class=\"_3Lj_s\">\n                            <div class=\"_1DZAH\" role=\"button\">\n                                <span class=\"message-time\">18:56</span>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n                                            ";
          break;

        default:
          div.innerHTML = "\n                 <div class=\"font-style _3DFk6 tail\" id=\"_".concat(this.id, "\" >\n                    <span class=\"tail-container\"></span>\n                    <span class=\"tail-container highlight\"></span>\n                    <div class=\"Tkt2p\">\n                        <div class=\"_3zb-j ZhF0n\">\n                            <span dir=\"ltr\" class=\"selectable-text invisible-space message-text\">").concat(this.content, "</span>\n                        </div>\n                        <div class=\"_2f-RV\">\n                            <div class=\"_1DZAH\">\n                                <span class=\"message-time\">").concat(_format.Format.timeStampToTime(this.timeStamp), "</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n               ");
          break;
      }

      var className = "message-in";

      if (me) {
        className = "message-out";
        div.querySelector('.message-time').parentElement.appendChild(this.getStatusViewelement());
      }

      div.firstElementChild.classList.add(className);
      return div;
    }
  }, {
    key: "getStatusViewelement",
    value: function getStatusViewelement() {
      var div = document.createElement('div');
      div.className = "message-status";

      switch (this.status) {
        case 'wait':
          div.innerHTML = "\n                <span data-icon=\"msg-time\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 15\" width=\"16\" height=\"15\">\n                        <path fill=\"#859479\" d=\"M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z\"></path>\n                    </svg>\n                </span>\n                ";
          break;

        case 'received':
          div.innerHTML = "\n                <span data-icon=\"msg-dblcheck\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 15\" width=\"16\" height=\"15\">\n                        <path fill=\"#859479\" d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"></path>\n                    </svg>\n                </span>\n                ";
          break;

        case 'send':
          div.innerHTML = "\n                <span data-icon=\"msg-check-light\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 15\" width=\"16\" height=\"15\">\n                        <path fill=\"#859479\" d=\"M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"></path>\n                    </svg>\n                </span>\n                ";
          break;

        case 'read':
          div.innerHTML = "\n                <span data-icon=\"msg-dblcheck-ack\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 15\" width=\"16\" height=\"15\">\n                        <path fill=\"#4FC3F7\" d=\"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z\"></path>\n                    </svg>\n                </span>\n                ";
          break;
      }

      return div;
    }
  }, {
    key: "id",
    get: function get() {
      return this._data.id;
    },
    set: function set(value) {
      this._data.id = value;
    }
  }, {
    key: "content",
    get: function get() {
      return this._data.content;
    },
    set: function set(value) {
      this._data.content = value;
    }
  }, {
    key: "type",
    get: function get() {
      return this._data.type;
    },
    set: function set(value) {
      this._data.type = value;
    }
  }, {
    key: "timestamp",
    get: function get() {
      return this._data.timestamp;
    },
    set: function set(value) {
      this._data.timestamp = value;
    }
  }, {
    key: "status",
    get: function get() {
      return this._data.status;
    },
    set: function set(value) {
      this._data.status = value;
    }
  }], [{
    key: "sendImage",
    value: function sendImage(chatId, from, file) {
      return new Promise(function (s, f) {
        var uploadtask = _firebase.Firebase.hd().ref(from).child(Date.now() + '_' + file.name).put(file);

        console.log('teste', uploadtask);
        uploadtask.on('state_changed', function (e) {
          console.info('upload', e);
        }, function (err) {
          console.error(err);
        }, function () {
          Message.send(chatId, 'image', from, uploadtask.snapshot.downloadURL).then(function () {
            s();
          });
        });
      });
    }
  }, {
    key: "sendDocument",
    value: function sendDocument(chatId, file, from, preview) {}
  }, {
    key: "send",
    value: function send(chatId, type, from, content) {
      console.log('Message content', content);
      return new Promise(function (resolve, reject) {
        Message.getRef(chatId).add({
          content: content,
          timestamp: new Date(),
          status: 'wait',
          type: type,
          from: from
        }).then(function (data) {
          data.parent.doc(data.id).set({
            status: 'send'
          }, {
            merge: true
          }).then(function () {
            resolve();
          });
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "getRef",
    value: function getRef(chatId) {
      return _firebase.Firebase.db().collection('chats').doc(chatId).collection('messages');
    }
  }]);

  return Message;
}(_model.Model);

exports.Message = Message;