"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatsappController = void 0;

var _format = require("./../util/format");

var _cameraController = require("./cameraController");

var _MicrophoneController = require("./MicrophoneController");

var _documentPreviewController = require("./documentPreviewController");

var _firebase = require("../util/firebase");

var _user = require("../model/user");

var _chat = require("../model/chat");

var _message = require("../model/message");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WhatsappController =
/*#__PURE__*/
function () {
  function WhatsappController() {
    _classCallCheck(this, WhatsappController);

    this.firebase = new _firebase.Firebase();
    this.initAuth();
    this.elementsPrototype();
    this.loadElements();
    this.iniEvents();
  }

  _createClass(WhatsappController, [{
    key: "initAuth",
    value: function initAuth() {
      var _this = this;

      this.firebase.initAuth().then(function (response) {
        _this._user = new _user.User(response.user.email);

        _this._user.on('datachange', function (data) {
          if (data.name == undefined || data.name == '') {
            data.name = response.user.displayName;
            data.email = response.user.email;
            data.photo = response.user.photoURL;
          }

          document.querySelector('title').innerHTML = data.name;
          +' Whatsapp';
          _this.el.inputNamePanelEditProfile.innerHTML = data.name;

          if (data.photo) {
            var photo = _this.el.imgPanelEditProfile;
            photo.src = data.photo;
            photo.show();

            _this.el.imgDefaultPanelEditProfile.hide();

            var photo2 = _this.el.myPhoto.querySelector('img');

            photo2.src = data.photo;
            photo2.show();
          }

          _this.initContacts();

          _this._user.name = data.name;
          _this._user.email = data.email;
          _this._user.photo = data.photo;

          _this._user.passValues(data);
        });

        _this.el.appContent.css({
          display: 'flex'
        });
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }, {
    key: "initContacts",
    value: function initContacts() {
      var _this2 = this;

      this._user.on('contactschange', function (docs) {
        _this2.el.contactsMessagesList.innerHTML = '';
        docs.forEach(function (doc) {
          var contact = doc.data();
          var div = document.createElement('div');
          div.className = "contact-item";
          div.innerHTML = "\n                <div class=\"dIyEr\">\n                    <div class=\"_1WliW\" style=\"height: 49px; width: 49px;\">\n                        <img src=\"#\" class=\"Qgzj8 gqwaM photo\" style=\"display:none;\">\n                        <div class=\"_3ZW2E\">\n                            <span data-icon=\"default-user\" class=\"\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 212 212\" width=\"212\" height=\"212\">\n                                    <path fill=\"#DFE5E7\" d=\"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z\"></path>\n                                    <g fill=\"#FFF\">\n                                        <path d=\"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z\"></path>\n                                    </g>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"_3j7s9\">\n                    <div class=\"_2FBdJ\">\n                        <div class=\"_25Ooe\">\n                            <span dir=\"auto\" title=\"".concat(contact.name, "\" class=\"_1wjpf\">").concat(contact.name, "</span>\n                        </div>\n                        <div class=\"_3Bxar\">\n                            <span class=\"_3T2VG\">").concat(contact.lastMessageTime, "</span>\n                        </div>\n                    </div>\n                    <div class=\"_1AwDx\">\n                        <div class=\"_itDl\">\n                            <span title=\"digitando\u2026\" class=\"vdXUe _1wjpf typing\" style=\"display:none\">digitando\u2026</span>\n    \n                            <span class=\"_2_LEW last-message\">\n                                <div class=\"_1VfKB\">\n                                    <span data-icon=\"status-dblcheck\" class=\"\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\" width=\"18\" height=\"18\">\n                                            <path fill=\"#263238\" fill-opacity=\".4\" d=\"M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z\"></path>\n                                        </svg>\n                                    </span>\n                                </div>\n                                <span dir=\"ltr\" class=\"_1wjpf _3NFp9\">Ok</span>\n                                <div class=\"_3Bxar\">\n                                    <span>\n                                        <div class=\"_15G96\">\n                                            <span class=\"OUeyt messages-count-new\" style=\"display:none;\">").concat(contact.lastMessage, "</span>\n                                        </div>\n                                </span></div>\n                                </span>\n                        </div>\n                    </div>\n                </div>");

          if (contact.photo) {
            var img = div.querySelector('.photo');
            img.src = contact.photo;
            img.show();
          }

          div.on('click', function (e) {
            _this2.setActiveChat(contact);
          });

          _this2.el.contactsMessagesList.appendChild(div);
        });
      });

      this._user.getContacts();
    }
  }, {
    key: "setActiveChat",
    value: function setActiveChat(contact) {
      var _this3 = this;

      if (this._contactActive) {
        _message.Message.getRef(this._contactActive.chatId).onSnapshot(function () {});
      }

      this._contactActive = contact;
      this.el.home.hide();
      this.el.main.css({
        'display': 'flex'
      });
      this.el.activeName.innerHTML = contact.name;
      this.el.activeStatus.innerHTML = contact.status;

      if (contact.photo) {
        var img = this.el.activePhoto;
        img.src = contact.photo;
        img.show();
      } //agora o chatId está vindo, eu tinha esquecido de fazer o setter e o getter dele no User


      console.log('chatId', this._contactActive.chatId);
      this.el.panelMessagesContainer.innerHTML = '';

      _message.Message.getRef(this._contactActive.chatId).orderBy('timestamp') //estava com problemas com o timeStamp ao inves de timestamp
      .onSnapshot(function (docs) {
        var scrollTop = _this3.el.panelMessagesContainer.scrollTop;
        var scrollTopMax = _this3.el.panelMessagesContainer.scrollHeight - _this3.el.panelMessagesContainer.offsetHeight;
        var autoScroll = scrollTop >= scrollTopMax - 1;
        docs.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;

          var msgEl = _this3.el.panelMessagesContainer.querySelector('#_' + data.id);

          var message = new _message.Message();
          message.fromJSON(data);
          var me = _this3._user.email === data.from;

          if (!msgEl) {
            if (!me) {
              doc.ref.set({
                status: 'read'
              }, {
                merge: true
              });
            }

            var view = message.getViewElement(me);

            _this3.el.panelMessagesContainer.appendChild(view);
          } else if (me) {
            msgEl.querySelector('.message-status').innerHTML = message.getStatusViewelement().outerHTML;
          }
        });

        if (autoScroll) {
          _this3.el.panelMessagesContainer.scrollTop = _this3.el.panelMessagesContainer.scrollHeight - _this3.el.panelMessagesContainer.offsetHeight;
        } else {
          _this3.el.panelMessagesContainer.scrollTop = scrollTop;
        }
      });
    }
  }, {
    key: "iniEvents",
    value: function iniEvents() {
      var _this4 = this;

      this.el.findContact.on('keyup', function (e) {
        if (_this4.el.findContact.value.length > 0) {
          _this4.el.findContactPlaceholder.hide();

          _this4._user.getContacts(_this4.el.findContact.value);
        } else {
          _this4.el.findContactPlaceholder.show();
        }
      });
      this.el.myPhoto.on('click', function (e) {
        _this4.closeAllLeftPanel();

        _this4.el.panelEditProfile.show();

        setTimeout(function () {
          _this4.el.panelEditProfile.addClass('open');
        }, 300);
      });
      this.el.btnNewContact.on('click', function (e) {
        _this4.closeAllLeftPanel();

        _this4.el.panelAddContact.show();

        setTimeout(function () {
          _this4.el.panelAddContact.addClass('open');
        }, 300);
      });
      this.el.btnClosePanelEditProfile.on('click', function (e) {
        _this4.el.panelEditProfile.removeClass('open');
      });
      this.el.btnClosePanelAddContact.on('click', function (e) {
        _this4.el.panelAddContact.removeClass('open');
      });
      this.el.photoContainerEditProfile.on('click', function (e) {
        _this4.el.inputProfilePhoto.click();
      });
      this.el.inputNamePanelEditProfile.on('keypress', function (e) {
        if (e.key === "Enter") {
          e.preventDefault();

          _this4.el.btnSavePanelEditProfile.click();
        }
      });
      this.el.btnSavePanelEditProfile.on('click', function (e) {
        _this4.el.btnSavePanelEditProfile.disabled = true;
        _this4._user.name = _this4.el.inputNamePanelEditProfile.innerHTML;

        _this4._user.save().then(function () {
          _this4.el.btnSavePanelEditProfile.disabled = false;
        });
      });
      this.el.formPanelAddContact.on('submit', function (e) {
        e.preventDefault();
        var form = new FormData(_this4.el.formPanelAddContact);
        var contact = new _user.User(form.get('email'));
        contact.on('datachange', function (data) {
          if (data.name) {
            _chat.Chat.createIfNotExists(_this4._user.email, contact.email).then(function (chat) {
              contact.chatId = chat.id;
              console.log('chatId linha 323', contact.chatId);
              _this4._user.chatId = chat.id;
              contact.addContact(_this4._user);

              _this4._user.addContact(contact).then(function () {
                console.info('contato adicionado');

                _this4.el.btnClosePanelAddContact.click();
              });
            });
          } else {
            console.error('usuário não encontrado');
          }
        });
      });
      this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(function (item) {
        item.on('click', function (e) {
          _this4.el.home.hide();

          _this4.el.main.css({
            'display': 'flex'
          });
        });
      });
      this.el.btnAttach.on('click', function (e) {
        e.stopPropagation();

        _this4.el.menuAttach.addClass('open');

        document.addEventListener('click', _this4.closeMenuAttach.bind(_this4));
      });
      this.el.btnAttachPhoto.on('click', function (e) {
        _this4.el.inputPhoto.click();
      });
      this.el.inputPhoto.on('change', function (e) {
        _toConsumableArray(_this4.el.inputPhoto.files).forEach(function (file) {
          _message.Message.sendImage(_this4._contactActive.chatId, _this4._user.email, file);
        });
      });
      this.el.btnAttachCamera.on('click', function (e) {
        _this4.closeAllMainPanel();

        _this4.el.panelCamera.addClass('open');

        _this4.el.panelCamera.css({
          'height': 'calc(100% - 120px)'
        }); //pode-se definir uma propriedade fora do construtor


        _this4._camera = new _cameraController.CameraController(_this4.el.videoCamera);
      });
      this.el.btnClosePanelCamera.on('click', function (e) {
        _this4.el.panelMessagesContainer.show();

        _this4.el.panelCamera.removeClass('open');

        _this4._camera.stopCamera();
      });
      this.el.btnTakePicture.on('click', function () {
        var dataUrl = _this4._camera.takePicture();

        _this4.el.pictureCamera.src = dataUrl;

        _this4.el.pictureCamera.show();

        _this4.el.videoCamera.hide();

        _this4.el.btnReshootPanelCamera.show();

        _this4.el.containerTakePicture.hide();

        _this4.el.containerSendPicture.show();
      });
      this.el.btnReshootPanelCamera.on('click', function () {
        _this4.el.pictureCamera.hide();

        _this4.el.videoCamera.show();

        _this4.el.btnReshootPanelCamera.hide();

        _this4.el.containerTakePicture.show();

        _this4.el.containerSendPicture.hide();
      });
      this.el.btnSendPicture.on('click', function () {
        _this4.el.btnSendPicture.disabled = true;
        var regex = /^data:(.+);base64,(.*)$/;

        var result = _this4.el.pictureCamera.src.match(regex);

        var mimetype = result[1];
        var ext = mimetype.split('/')[1];
        var fileName = "camera".concat(Date.now(), ".").concat(ext);
        var picture = new Image();
        picture.src = _this4.el.pictureCamera.src;

        picture.onload = function (e) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          canvas.width = picture.width;
          canvas.height = picture.height;
          context.translate(picture.width, 0);
          context.scale(-1, 1);
          context.drawImage(picture, canvas.width, canvas.height);
          fetch(canvas.toDataURL(mimetype)).then(function (res) {
            return res.ArrayBuffer();
          }).then(function (buffer) {
            return new File([buffer], fileName, {
              type: mimetype
            });
          }).then(function (file) {
            _message.Message.sendImage(_this4._contactActive.chatId, _this4._user.email, file);

            _this4.el.btnSendPicture.disabled = false;

            _this4.closeAllMainPanel();

            _this4._camera.stopCamera();

            _this4.el.btnReshootPanelCamera.hide();

            _this4.el.pictureCamera.hide();

            _this4.el.videoCamera.show();

            _this4.el.containerSendPicture.hide();

            _this4.el.containerTakePicture.show();

            _this4.el.panelMessagesContainer.hide();
          });
        };
      });
      this.el.btnAttachDocument.on('click', function (e) {
        _this4.closeAllMainPanel();

        _this4.el.panelDocumentPreview.addClass('open');

        _this4.el.panelDocumentPreview.css({
          'height': 'calc(100% - 120px)'
        });

        _this4.el.inputDocument.click();
      });
      this.el.inputDocument.on('change', function (e) {
        if (_this4.el.inputDocument.files.length) {
          _this4.el.panelDocumentPreview.css({
            'height': '1%)'
          });

          _this4.el.panelDocumentPreview.addClass('open');

          var file = _this4.el.inputDocument.files[0];
          _this4._documentProviewController = new _documentPreviewController.DocumentPreviewController(file);

          _this4._documentProviewController.getPreviewData().then(function (data) {
            _this4.el.filePanelDocumentPreview.hide();

            _this4.el.imagePanelDocumentPreview.show();

            _this4.el.imgPanelDocumentPreview.src = data.src;

            _this4.el.panelDocumentPreview.css({
              'height': 'calc(100% - 120px)'
            });
          })["catch"](function (err) {
            console.log(file.type);

            _this4.el.panelDocumentPreview.css({
              'height': 'calc(100% - 120px)'
            });

            _this4.el.panelDocumentPreview.addClass('open');

            switch (file.type) {
              case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
              case 'application/msword':
                _this4.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-doc';
                break;

              case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
              case 'application/vnd.ms-excel':
                _this4.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-xls';
                break;

              case 'application/vnd.ms-powerpoint':
              case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                _this4.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-ppt';
                break;

              default:
                _this4.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-generic';
            }
          });

          _this4.el.filenamePanelDocumentPreview.innerHTML = file.name;

          _this4.el.filePanelDocumentPreview.show();

          _this4.el.imagePanelDocumentPreview.hide();
        }
      });
      this.el.btnSendDocument.on('click', function () {
        _this4.closeAllMainPanel();

        _this4.el.panelMessagesContainer.show();

        var file = _this4.el.inputDocument.files[0];
        var base64 = _this4.el.imgPanelDocumentPreview.src;

        _message.Message.sendDocument(_this4._contactActive.chatId, file, _this4._user.email, base64);
      });
      this.el.btnClosePanelDocumentPreview.on('click', function () {
        _this4.closeAllMainPanel();

        _this4.el.panelMessagesContainer.show();
      });
      this.el.btnAttachContact.on('click', function (e) {
        _this4.el.modalContacts.show();
      });
      this.el.btnCloseModalContacts.on('click', function () {
        _this4.el.modalContacts.hide();
      });
      this.el.btnSendMicrophone.on('click', function (e) {
        _this4.el.recordMicrophone.show();

        _this4.el.btnSendMicrophone.hide();

        _this4.startRecordMicrophoneTime();

        _this4._microphone = new _MicrophoneController.MicrophoneController();

        _this4._microphone.on('ready', function (audio) {
          console.log('record initialised');

          _this4._microphone.startRecorder();
        });
      });
      this.el.btnFinishMicrophone.on('click', function () {
        _this4.closeRecordMicrophone();

        _this4._microphone.stopMicrophone();
      });
      this.el.btnCancelMicrophone.on('click', function () {
        _this4.closeRecordMicrophone();

        _this4._microphone.stopMicrophone();
      });
      this.el.inputText.on('keyup', function (e) {
        if (_this4.el.inputText.innerHTML.length) {
          _this4.el.inputPlaceholder.hide();

          _this4.el.btnSendMicrophone.hide();

          _this4.el.btnSend.show();
        } else {
          _this4.el.inputPlaceholder.show();

          _this4.el.btnSendMicrophone.show();

          _this4.el.btnSend.hide();
        }
      });
      this.el.inputText.on('keypress', function (e) {
        if (e.key === 'Enter' && !e.ctrlkey) {
          e.preventDefault();

          _this4.el.btnSend.click();
        }
      });
      this.el.btnSend.on('click', function () {
        _message.Message.send(_this4._contactActive.chatId, 'text', _this4._user.email, _this4.el.inputText.innerHTML);

        _this4.el.inputText.innerHTML = '';

        _this4.el.panelEmojis.removeClass('open');
      });
      this.el.btnEmojis.on('click', function (e) {
        _this4.el.panelEmojis.toggleClass('open');
      });
      this.el.panelEmojis.querySelectorAll('.emojik').forEach(function (emoji) {
        emoji.on('click', function () {
          console.log(emoji.dataset.unicode);

          var img = _this4.el.imgEmojiDefault.cloneNode(); //cloneNode() é um metodo que copia o elemento que o chama e o retorna
          //podendo assim ser armazenado em uma variavel como é feito acima


          img.style.cssText = emoji.style.cssText;
          img.dataset.unicode = emoji.dataset.unicode;
          img.alt = emoji.dataset.unicode;
          emoji.classList.forEach(function (classItem) {
            img.classList.add(classItem);
          });
          var cursor = window.getSelection(); //cria um manipulador de cursor para que seja possivel adicionar emojis
          //em qualquer posição do input 

          if (!cursor.focusNode || !cursor.focusNode.id == 'input-text') {
            _this4.el.inputText.focus();

            cursor = window.getSelection();
          }

          var range = document.createRange(); //range é um intervalo de strings e possui varios métodos que as manipulam

          range = cursor.getRangeAt(0); //obtem o intervalo de strings definido pelo cursor

          range.deleteContents(); //deleta o range de strings

          var frag = document.createDocumentFragment(); //cria um fragmento de documento

          frag.appendChild(img); //adiciona conteudo a esse framento

          range.insertNode(frag); //range.insertNode() inserte o fragmento de documento dentro do range especificado

          range.setStartAfter(img); //Define a posição inicial do intervalo atual para a posição final do nó especificado.

          _this4.el.inputText.dispatchEvent(new Event('keyup')); // usando o new Event() disparamos o evento que quesermos

        });
      });
    }
  }, {
    key: "startRecordMicrophoneTime",
    value: function startRecordMicrophoneTime() {
      var _this5 = this;

      var start = Date.now();
      this._countTimeRecord = setInterval(function () {
        _this5.el.recordMicrophoneTimer.innerHTML = _format.Format.toTime(Date.now() - start);
      }, 100);
    }
  }, {
    key: "closeRecordMicrophone",
    value: function closeRecordMicrophone() {
      this.el.recordMicrophone.hide();
      this.el.btnSendMicrophone.show();
      clearInterval(this._countTimeRecord);
    }
  }, {
    key: "closeAllMainPanel",
    value: function closeAllMainPanel() {
      this.el.modalContacts.hide();
      this.el.panelCamera.removeClass('open');
      this.el.panelMessagesContainer.hide();
      this.el.panelDocumentPreview.removeClass('open');
    }
  }, {
    key: "closeMenuAttach",
    value: function closeMenuAttach(e) {
      document.removeEventListener('click', this.closeMenuAttach);
      this.el.menuAttach.removeClass('open');
    }
  }, {
    key: "closeAllLeftPanel",
    value: function closeAllLeftPanel() {
      this.el.panelEditProfile.hide();
      this.el.panelAddContact.hide();
    }
  }, {
    key: "loadElements",
    value: function loadElements() {
      var _this6 = this;

      this.el = {};
      document.querySelectorAll('[id]').forEach(function (element) {
        _this6.el[_format.Format.getCamelCase(element.id)] = element;
      });
    } //muito legal kk

  }, {
    key: "elementsPrototype",
    value: function elementsPrototype() {
      HTMLFormElement.prototype.getForm = function () {
        return new FormData(this);
      };

      HTMLFormElement.prototype.toJSON = function () {
        var json = {};
        this.getForm().forEach(function (value, key) {
          json[key] = value;
        });
        return json;
      };

      Element.prototype.hide = function () {
        this.style.display = 'none';
        return this;
      };

      Element.prototype.show = function () {
        this.style.display = 'block';
        return this;
      };

      Element.prototype.toggle = function () {
        this.style.display = this.style.display === 'none' ? 'block' : 'none';
        return this;
      };

      Element.prototype.on = function (events, fn) {
        var _this7 = this;

        events.split(' ').forEach(function (event) {
          _this7.addEventListener(event, fn);
        });
        return this;
      };

      Element.prototype.css = function (styles) {
        for (var name in styles) {
          this.style[name] = styles[name];
        }

        return this;
      };

      Element.prototype.addClass = function (className) {
        this.classList.add(className);
        return this;
      };

      Element.prototype.removeClass = function (className) {
        this.classList.remove(className);
        return this;
      };

      Element.prototype.toggleClass = function (className) {
        this.classList.toggle(className);
        return this;
      };

      Element.prototype.contains = function (className) {
        return this.classList.contains(className);
      };
    }
  }]);

  return WhatsappController;
}();

exports.WhatsappController = WhatsappController;