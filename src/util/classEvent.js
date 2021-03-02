export class ClassEvent{

    constructor(){
        this.events = {
            play: new Array()
        };
    }

    on(eventName, fn){
        if(!this.events[eventName]) this.events[eventName] = new Array();
        this.events[eventName].push(fn);
    }

    trigger(){

        let args = [...arguments];
        let eventName = args.shift();

        args.push(new Event(eventName));

        if(this.events[eventName] instanceof Array) {

            this.events[eventName].forEach( fn => {
                fn.apply(null, args);
            });

        }
    }
}