class AlarmClock {
    alarmCollection = [];
    intervalId = null;
    constructor() {}

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.find((alarm) => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        const alarmObj = {
            callback,
            time, 
            canCall: true,
        }

        this.alarmCollection.push(alarmObj);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        const currentHour = String(date.getHours()).padStart(2, '0');
        const currentMinute = String(date.getMinutes()).padStart(2, '0');

        return `${currentHour}:${currentMinute}`;
    }

    start() {
        if(this.intervalId) {
            return;
        }
        
        this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000);        
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}