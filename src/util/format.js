export class Format {
    static getCamelCase(text) {

        let div = document.createElement('div')

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }

    static toTime(duration) {
        //a variavel duration é o tempo em milisegundos
        let milliseconds = parseInt((duration % 1000) / 100),
            seconds = parseInt((duration / 1000) % 60),
            minutes = parseInt((duration / (1000 * 60)) % 60),
            hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        if (hours > 0) {
            return `${hours.toString()}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        } else {
            return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;

        }

    }

    static dateToTime(date, locale = 'pt-BR') {

        return date.toLocaleTimeString(locale, {
            minute: '2-digit',
            hours: '2-digit'
        })

    }

    static timeStampToTime(timeStamp) {

        return (timeStamp && timeStamp.toDate === 'function') ?
            Format.dateToTime(timeStamp.toDate()) : '';

    }
}