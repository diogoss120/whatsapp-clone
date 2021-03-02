import {
    ClassEvent
} from './../util/classEvent';

export class MicrophoneController extends ClassEvent {

    constructor() {
        //invoca o construtor da classe pai
        super();

        this.available = false;

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {

            this.available = true;

            this._stream = stream;

            this.trigger('ready', this._stream);

        }).catch(err => {
            console.error(err);
        });
    }

    stopMicrophone() {
        this._stream.getTracks().forEach(track => {
            track.stop();
        });
    }

    isAvailable() {
        return this.available;
    }

    startRecorder() {
        if (this.isAvailable) {

            this.mediaRecorder = new MediaRecorder(this._stream, {
                mimeType: 'audio/webm'
            });
            this.recordedChunks = [];

            this.mediaRecorder.addEventListener('dataavaiable', e => {
                if (e.data.size > 0) {
                    this.recordedChunks.push(e.data);
                }

            });

            this.mediaRecorder.addEventListener('stop', e => {

                let blob = new Blob(this.recordedChunks, {
                    type: 'audio/webm'
                });

                let filename = `rec${Date.now}.webm`

                let file = new File([blob], filename, {
                    type: 'audio/webm',
                    lastModified: Date.now(),
                });

                console.log('file', file);
            });

            this.mediaRecorder.start();
        }
    }

    stopRecorder() {
        if (this.isAvailable) {
            this.mediaRecorder.stopMicrophone();
            this.stopMicrophone();
        }
    }
}